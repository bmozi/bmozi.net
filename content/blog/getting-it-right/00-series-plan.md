# Getting It Right — a 10-part LinkedIn series on the patterns behind reliable systems, at implementation depth

**Working series title:** *Getting It Right: The Patterns Behind Reliable Systems*
**Relationship to prior work:** the technical sequel to *The Seams*. That series argued for a worldview — govern the spaces between systems. This one goes down a level: for the engineers who nodded along and then asked "fine, but how do I build the outbox relay so it doesn't lose messages?" Audience: senior engineers, architects, engineering managers who will be asked to review or build these patterns this quarter.
**Voice:** same practitioner storyteller — first person, opens with a concrete failure, but here the failure is technical and the resolution is implementation-precise. No hand-waving; if the article says "atomic," it says what transaction boundary makes it atomic.
**Ground rule:** fully generic. No employer names, no identifiable systems. Examples rotate across industries — logistics, healthcare, finance, retail — because these patterns are industry-independent, and the rotation proves it.
**Fixed internal structure, every article:** the naive version everyone builds first → precisely why and when it breaks (the real failure mode, not the folklore) → the correct version → **THE TEST**: how you prove you got it right, as a concrete test, chaos exercise, or verification procedure. The Test section is the series' signature move: a pattern you can't verify is a pattern you don't have.
**Cadence suggestion:** one per week; each article 900–1,300 words; each ends with a challenge question built to drive comments.

---

{{visual:getting-it-right-series-map}}

## The arc

The series moves through four layers, each depending on the one before. **Delivery** (Parts 1–2): getting a fact from one system to another without loss or duplication — the substrate everything else assumes. **Meaning** (Parts 3–5): keeping facts legible and derivable across years of schema drift, renames, and rebuilds. **Trust** (Parts 6–8): identity, tamper-evidence, and privacy — the properties that make a record worth believing and legal to keep. **Control** (Parts 9–10): policy and time — who may act, and what happens automatically when nobody does. Each article stands alone, but the sequence builds one conviction: reliability is not a temperament, it's a set of testable properties, and every one of them has a known correct construction.

---

### Part 1 · The Outbox Pattern and the Exactly-Once Lie
**The delivery foundation.** Every distributed system starts with the dual write — commit to the database, then publish to the broker — and every one of them eventually loses or fabricates a message in the gap between those two operations. "Exactly-once delivery" is marketing; the real contract is at-least-once delivery plus exactly-once *processing* via idempotent consumers. The correct construction is an outbox table written in the same transaction as the state change, a relay that publishes and marks, and ordering guaranteed per aggregate rather than globally. **The Test:** kill the relay mid-batch, restart it, and prove zero lost and zero double-applied effects.

### Part 2 · Idempotency Is a Design Stance, Not a Retry Flag
**The processing half of Part 1's contract.** At-least-once delivery is only survivable if every consumer can absorb duplicates, and most teams bolt this on per-endpoint after the first double-charge. Idempotency is a design stance: client-generated keys on every command, natural idempotency where the operation allows it, dedupe tables where it doesn't — and special paranoia at the boundary where your system causes effects in the world (emails, payments, shipments), because the outside world has no transaction to roll back. **The Test:** a standing CI chaos job that replays every message twice in staging, forever.

### Part 3 · Event Versioning That Survives a Decade
**The longevity piece.** The schema you publish today will be read by consumers you haven't hired yet, against events written by code you've deleted. Additive-only evolution, tolerant readers, and upcasting old events at read time — never migrating the stored history in place. When a change can't be additive, mint v2 and run a two-term deprecation backed by a consumer registry, because "just coordinate the cutover" stops being a sentence you can say once there are hundreds of consumers. **The Test:** CI replays year-old production events through today's consumers on every build.

### Part 4 · Naming Is Load-Bearing: Events as Business Facts
**The semantics piece.** `row_updated` and `start_date.changed` (with a reason) can describe the same database write and be worlds apart in value. Events named as business facts — domain, entity, verb in past tense — are the API for every future consumer: human, analytical, and now machine, because LLMs reason from your names and descriptions. Intent-shaped beats CRUD-shaped; the schema registry with mandatory human-readable descriptions is the discipline that keeps it true. **The Test:** read the event stream aloud to a domain expert and count the sentences they don't recognize.

### Part 5 · Projections Are Cattle: Rebuilds as a Rehearsed Operation
**The derived-state piece.** Any read model derived from events must be disposable, and most teams discover theirs isn't during an incident. The correct operation is side-by-side: build the new projection to a new target while the old one serves traffic, verify counts and checksums against source, cut over atomically, keep the old one warm for rollback — never rebuild in place. Staleness is labeled, lag has an SLO, and rebuild time is a measured number, not a guess. **The Test:** delete a projection in staging every month and measure time-to-identical.

### Part 6 · The Identity Spine: One Person, Every System
**The identity piece.** Every estate eventually needs to answer "is this the same person?" across systems that each invented their own customer ID. Match/merge is a precision-versus-recall trade, and the trade is asymmetric: a missed match is an annoyance, a false merge is a data catastrophe you may not be able to unwind. Tune for precision, route low-confidence matches to human stewardship queues, record merges and splits as auditable reversible events, and distribute a universal ID that survives changing your matching vendor. **The Test:** seed synthetic duplicates and measure precision and recall before go-live, with a precision floor as a launch gate.

### Part 7 · Tamper-Evident by Construction: Hash Chains for Business Records
**The integrity piece.** Some records — the ones with legal or regulatory weight — deserve construction-level integrity: append-only storage where each entry carries a hash of its predecessor, corrections as new entries citing what they correct, periodic anchoring of the chain head somewhere the writer doesn't control. Precision matters here: this is tamper-*evident*, not tamper-*proof* — it cannot stop a privileged attacker from rewriting history, only make the rewrite detectable. Know which claim you're making before a regulator asks. **The Test:** mutate one historic entry in a copy and prove verification catches it — and that a fully re-chained rewrite is caught by the external anchor.

### Part 8 · PII by Reference: Ending the War Between Privacy and Permanence
**The privacy piece.** Append-only history and the right to erasure look irreconcilable, and the popular escape hatch — crypto-shredding — rests on the legally shaky claim that undecryptable equals erased. The construction that actually reconciles them: personal identifiers never enter the immutable log at all; events carry opaque references into a separate, mutable identity store; erasure is a row delete there plus re-projection of derived views. The history survives, the person is gone. **The Test:** run a real erasure request end-to-end in staging, then grep the entire estate — logs, backups, projections, analytics — for residue.

### Part 9 · Policy-as-Code Without the Central Bottleneck
**The control piece.** Centralizing authorization logic is right; centralizing its *evaluation* creates a single point of failure with a latency tax on every call. Author policy centrally, distribute it as versioned bundles, evaluate locally — a P99 budget under 100ms structurally forbids a remote hop per decision. Purpose and relationship join role as first-class attributes; resist the second policy engine, because two sources of authorization truth means no source of authorization truth. A bad policy push has instant estate-wide blast radius, so rollout is staged and canaried like any deploy. **The Test:** decision latency under production load, plus a deliberately broken policy pushed to a canary to prove containment.

### Part 10 · Who Watches the Watcher: Timers, Escalations, and Dead-Man's Switches
**The time piece.** SLA sweeps and automatic escalation turn deadlines into consequences — until the sweeper itself dies silently, which is the failure mode nobody tests because absence doesn't alert. The correct construction: the watcher emits a heartbeat, an independent system (different host, different failure domain) alarms on heartbeat *absence*, breaches are computed from when work was received rather than when the sweep ran — so late detection still escalates everything it missed — and a missed escalation is an incident by policy, not an oops. **The Test:** kill the timer in staging, verify the page fires within the heartbeat window, then verify recovery back-fills every escalation that should have happened.

---

## Series mechanics

- **Recurring signature:** every article ends with the same line — *"Correct is a property you can test. Everything else is hope."* — the series' thesis compressed to two sentences.
- **THE TEST as trademark:** every article's penultimate section is a concrete verification the reader can schedule this sprint. The comments strategy leans on it: readers post what happened when they ran the test.
- **Cross-linking:** each article references the layer beneath it (Part 2 leans on Part 1's delivery contract; Part 8 leans on Part 7's append-only construction), building the arc for late arrivals.
- **Industry rotation:** hook stories cycle through logistics, healthcare, finance, and retail to signal these are properties of distributed systems, not of any one domain.
- **Closing challenge:** always answerable in a comment — a number, a confession, a test result.
- **Disclaimer:** views my own; examples composite and anonymized from years of systems work.
