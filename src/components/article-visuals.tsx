import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type Step = {
  label: string;
  detail: string;
  tone?: "signal" | "amber" | "magenta" | "muted";
};

type Visual =
  | {
      kind: "flow";
      title: string;
      eyebrow: string;
      caption: string;
      steps: Step[];
      aside?: string;
    }
  | {
      kind: "matrix";
      title: string;
      eyebrow: string;
      caption: string;
      rows: { label: string; cells: string[] }[];
      headers: string[];
    }
  | {
      kind: "image";
      title: string;
      eyebrow: string;
      caption: string;
      src: string;
      alt: string;
    };

const toneStyles = {
  signal: {
    border: "border-[var(--signal)]",
    text: "text-[var(--signal)]",
    background: "bg-[rgba(25,214,197,0.1)]",
  },
  amber: {
    border: "border-[var(--amber)]",
    text: "text-[var(--amber)]",
    background: "bg-[rgba(242,184,75,0.12)]",
  },
  magenta: {
    border: "border-[var(--magenta)]",
    text: "text-[var(--magenta)]",
    background: "bg-[rgba(255,79,216,0.1)]",
  },
  muted: {
    border: "border-white/20",
    text: "text-white/65",
    background: "bg-white/[0.045]",
  },
} as const;

const visuals: Record<string, Visual> = {
  "seam-four-crossings": {
    kind: "flow",
    eyebrow: "Seam Map",
    title: "A seam is governed when all four crossings are owned.",
    caption:
      "The failure rarely lives inside one box. It lives where identity, state, ownership, and promises cross boundaries without a named rule.",
    steps: [
      {
        label: "Identity",
        detail: "Who is this person across tools?",
        tone: "signal",
      },
      {
        label: "State",
        detail: "What changed, and who heard it?",
        tone: "amber",
      },
      {
        label: "Ownership",
        detail: "Who owns the item right now?",
        tone: "magenta",
      },
      {
        label: "Promise",
        detail: "What clock is running?",
        tone: "signal",
      },
    ],
    aside: "Ungoverned seam: everyone did their part; nobody owns the crossing.",
  },
  "silent-change-alarm": {
    kind: "flow",
    eyebrow: "Continuity Control",
    title: "A consequential change must leave a governed trace.",
    caption:
      "The source of record can change, but it cannot change silently. A missing event is not cleanup work; it is an incident.",
    steps: [
      { label: "Source Change", detail: "Official state mutates", tone: "amber" },
      { label: "Outbox Fact", detail: "Event written in the same boundary", tone: "signal" },
      { label: "Projection", detail: "Timeline, queue, and SLA update", tone: "muted" },
      { label: "Detector", detail: "Delta without event pages the owner", tone: "magenta" },
    ],
    aside: "No silent transitions.",
  },
  "event-circulation": {
    kind: "flow",
    eyebrow: "Event Architecture",
    title: "Events circulate facts; they are not the source of truth.",
    caption:
      "Systems of record stay sovereign. Events make the fact travel to views, alerts, AI policy, and analytics without pretending the stream is the database.",
    steps: [
      { label: "System of Record", detail: "Read-your-writes truth", tone: "amber" },
      { label: "Outbox", detail: "Fact exits the boundary", tone: "signal" },
      { label: "Backbone", detail: "Circulation, not command", tone: "muted" },
      { label: "Projection", detail: "Purpose-built view", tone: "signal" },
      { label: "Audit", detail: "Replay proves behavior", tone: "magenta" },
    ],
    aside: "Truth stays boring. Movement gets governed.",
  },
  "queue-owner-clock": {
    kind: "flow",
    eyebrow: "Queue Invariant",
    title: "No queue item exists without owner, clock, and escalation.",
    caption:
      "A backlog is not a queue until each item has accountable state. Ownerless work is where trust disappears.",
    steps: [
      { label: "Item", detail: "Durable ID at arrival", tone: "muted" },
      { label: "Owner", detail: "Named accountable human or team", tone: "signal" },
      { label: "Clock", detail: "SLA age visible to everyone", tone: "amber" },
      { label: "Escalation", detail: "Breach creates a new event", tone: "magenta" },
    ],
    aside: "A queue with no owner is just a hiding place.",
  },
  "slice-funding-loop": {
    kind: "flow",
    eyebrow: "Funding Loop",
    title: "Fund the next slice with evidence from the last one.",
    caption:
      "A thin production slice earns the next slice by retiring one complaint class, proving replay, and showing measurable movement.",
    steps: [
      { label: "Thin Slice", detail: "One workflow, one promise", tone: "signal" },
      { label: "Proof", detail: "Live behavior and replay", tone: "amber" },
      { label: "Retire Pain", detail: "Complaint class reduced", tone: "magenta" },
      { label: "Next Slice", detail: "Funding follows evidence", tone: "signal" },
    ],
    aside: "Never one budget cycle from worthless.",
  },
  "ai-review-intent-seam": {
    kind: "flow",
    eyebrow: "AI Review Boundary",
    title: "AI can inspect implementation; intent still needs an owner.",
    caption:
      "Generated code, tests, and reviews can agree with each other while all missing the same wrong requirement. The seam moved up to the truth of the spec.",
    steps: [
      { label: "Prompt", detail: "Instruction and context", tone: "muted" },
      { label: "Code", detail: "Generated implementation", tone: "signal" },
      { label: "Verifier", detail: "Tests and AI review", tone: "amber" },
      { label: "Intent", detail: "Human-owned truth boundary", tone: "magenta" },
    ],
    aside: "Verification moved; it did not disappear.",
  },
  "delegation-chain": {
    kind: "flow",
    eyebrow: "Authority Flow",
    title: "Delegation must narrow as it moves.",
    caption:
      "Agent chains are safest when every hop is attenuated by purpose, audience, tool, action tier, expiry, and revocation.",
    steps: [
      { label: "Human", detail: "Original accountable principal", tone: "signal" },
      { label: "Token", detail: "Purpose and expiry signed", tone: "amber" },
      { label: "Agent Hop", detail: "Scope narrowed again", tone: "muted" },
      { label: "Tool", detail: "Typed action, no ambient authority", tone: "magenta" },
    ],
    aside: "The chain is the object to govern.",
  },
  "outbox-correctness": {
    kind: "flow",
    eyebrow: "Reliability Pattern",
    title: "The outbox makes the local commit and the published fact inseparable.",
    caption:
      "Exactly-once is the wrong promise. The useful promise is: the state change and the fact to publish are committed together, then consumers are idempotent.",
    steps: [
      { label: "Command", detail: "Validate and authorize", tone: "muted" },
      { label: "Transaction", detail: "Write state plus outbox", tone: "signal" },
      { label: "Publisher", detail: "Retry until acknowledged", tone: "amber" },
      { label: "Consumer", detail: "Deduplicate by event ID", tone: "magenta" },
    ],
    aside: "At-least-once delivery. Exactly-once effect.",
  },
  "idempotency-boundary": {
    kind: "flow",
    eyebrow: "Idempotency",
    title: "The key protects the whole effect, not just the retry.",
    caption:
      "A retry flag is local optimism. A design stance records the intended effect, external calls, and final response behind one durable key.",
    steps: [
      { label: "Request Key", detail: "Caller intent is stable", tone: "signal" },
      { label: "Effect Ledger", detail: "Work is reserved once", tone: "amber" },
      { label: "External Edge", detail: "Side effects guarded", tone: "magenta" },
      { label: "Same Answer", detail: "Replay returns the result", tone: "muted" },
    ],
    aside: "Idempotency is where retries meet money, records, and trust.",
  },
  "hash-chain-ledger": {
    kind: "flow",
    eyebrow: "Tamper Evidence",
    title: "Each record carries the shadow of the record before it.",
    caption:
      "A hash chain does not prevent every bad act. It changes the argument by making alteration detectable, drillable, and reportable.",
    steps: [
      { label: "Entry A", detail: "Payload hash", tone: "signal" },
      { label: "Entry B", detail: "Previous hash included", tone: "signal" },
      { label: "Anchor", detail: "Checkpoint outside the app", tone: "amber" },
      { label: "Verifier", detail: "Continuous chain walk", tone: "magenta" },
    ],
    aside: "The proof is the rehearsal log.",
  },
  "pii-by-reference": {
    kind: "flow",
    eyebrow: "Privacy Architecture",
    title: "Permanent records point at PII; they do not carry it.",
    caption:
      "Events and ledgers keep stable references. The restricted vault owns the sensitive values, retention rules, erasure drill, and access audit.",
    steps: [
      { label: "PII Vault", detail: "Restricted raw values", tone: "magenta" },
      { label: "Reference", detail: "Stable opaque pointer", tone: "signal" },
      { label: "Event", detail: "Business fact without raw PII", tone: "amber" },
      { label: "Deletion Drill", detail: "Residue hunt proves removal", tone: "muted" },
    ],
    aside: "Privacy is easier when permanence does not mean replication.",
  },
  "purpose-on-wire": {
    kind: "flow",
    eyebrow: "Purpose-Bound Access",
    title: "The reason for access travels with the request.",
    caption:
      "Identity answers who. Purpose answers why now. Policy needs both at the moment a request crosses a sensitive boundary.",
    steps: [
      { label: "Actor", detail: "Known identity", tone: "signal" },
      { label: "Purpose", detail: "Reason on this request", tone: "amber" },
      { label: "Policy Gate", detail: "Allow, deny, or step up", tone: "magenta" },
      { label: "Audit", detail: "Decision recorded with context", tone: "muted" },
    ],
    aside: "Access without purpose is ambient authority.",
  },
  "org-equipment": {
    kind: "matrix",
    eyebrow: "Organization Design",
    title: "The org chart is equipment when it changes flow behavior.",
    caption:
      "The useful question is not whether the boxes look modern. It is whether the structure improves interfaces, ownership, review quality, and response time.",
    headers: ["Question", "Healthy signal", "Failure signal"],
    rows: [
      {
        label: "Interface",
        cells: ["Teams know the contract", "Handoffs happen by folklore"],
      },
      {
        label: "Ownership",
        cells: ["Every queue has a named owner", "Groups absorb accountability"],
      },
      {
        label: "Review",
        cells: ["Decisions get prosecuted early", "Escalation is the first review"],
      },
      {
        label: "Load",
        cells: ["Capacity changes are visible", "Heroics hide demand"],
      },
    ],
  },
  "dashboard-comic": {
    kind: "image",
    eyebrow: "Visual Break",
    title: "All dashboards green. One work item gone.",
    caption:
      "The old joke is funny because it is usually true: every local surface can be healthy while the student or customer falls between them.",
    src: "/blog/illustrations/all-dashboards-green.webp",
    alt: "Three green status dashboards on separate system islands while a document packet falls into an unowned gap between them",
  },
  "stuffed-animal-seam": {
    kind: "image",
    eyebrow: "Opening Metaphor",
    title: "Stuffing never falls out through the middle of the fabric.",
    caption:
      "The panels are strong. The loss happens at the stitching, which is the whole seam argument in one toy.",
    src: "/blog/illustrations/stuffed-animal-seam.webp",
    alt: "Friendly teddy-style stuffed toy losing fluffy stuffing and small architecture tokens from its stitched seams on a technical worktable",
  },
  "hospital-chart": {
    kind: "image",
    eyebrow: "Everyday System",
    title: "One chart, one patient, no arguments.",
    caption:
      "The safe hospital does not ask every specialist to maintain a private truth. Everyone reads and writes the same chart.",
    src: "/blog/illustrations/hospital-chart.webp",
    alt: "Shared hospital chart at the foot of a bed with specialist tools converging on one authoritative patient record while duplicate charts fade in the background",
  },
  "kitchen-ticket-rail": {
    kind: "image",
    eyebrow: "Everyday System",
    title: "A ticket has a place, an owner, and an age.",
    caption:
      "The same order becomes safer when it is visible on the rail, owned by someone, and too old to hide.",
    src: "/blog/illustrations/kitchen-ticket-rail.webp",
    alt: "Restaurant kitchen ticket rail with ordered tickets, visible clocks, owner markers, and one stale ticket pulled into a warm spotlight",
  },
  "flight-recorder": {
    kind: "image",
    eyebrow: "Everyday System",
    title: "The recorder keeps the sequence before anyone knows which second matters.",
    caption:
      "A replayable history is a decision made before the incident, not a reconstruction attempted after it.",
    src: "/blog/illustrations/flight-recorder.webp",
    alt: "Bright orange flight recorder on an investigation table emitting an ordered append-only event timeline with a blurred erased whiteboard behind it",
  },
  "notarys-ledger": {
    kind: "image",
    eyebrow: "Everyday System",
    title: "The correction is a new fact, not a vanished one.",
    caption:
      "A trustworthy ledger preserves the error, the correction, and the relationship between them.",
    src: "/blog/illustrations/notarys-ledger.webp",
    alt: "Bound notary-style ledger with sewn pages, crossed-out abstract entry, and a new amendment linked back by a fine thread",
  },
  "tracking-number": {
    kind: "image",
    eyebrow: "Everyday System",
    title: "A thing with a number can be delayed, but not nowhere.",
    caption:
      "The label changes the promise: every handoff becomes a visible event instead of a memory test.",
    src: "/blog/illustrations/tracking-number.webp",
    alt: "Labeled package with barcode-like marks and glowing checkpoint trail across depot, conveyor, truck, and doorstep while an unlabeled package fades in the background",
  },
  "hotel-key-card": {
    kind: "image",
    eyebrow: "Everyday System",
    title: "A good key matches a relationship, not every door.",
    caption:
      "Scoped, expiring access is fussier than a key ring, and that fussiness is the control.",
    src: "/blog/illustrations/hotel-key-card.webp",
    alt: "Glowing hotel key card with expiry and revocation markers contrasted against a shadowed brass key ring on a hotel desk",
  },
  "interpreter-border": {
    kind: "image",
    eyebrow: "Everyday System",
    title: "The neighbor's language should stop at the border.",
    caption:
      "A disciplined adapter carries meaning across the boundary without letting outside vocabulary become load-bearing inside.",
    src: "/blog/illustrations/interpreter-border.webp",
    alt: "Two distinct technical domains facing each other across a border table with a central interpreter station translating shapes and tokens at the boundary",
  },
  "smoke-detector-chirp": {
    kind: "image",
    eyebrow: "Everyday System",
    title: "A safeguard must complain before it silently stops safeguarding.",
    caption:
      "The chirp is annoying by design because a warning you can ignore is not a warning.",
    src: "/blog/illustrations/smoke-detector-chirp.webp",
    alt: "Ceiling smoke detector at night emitting a visible chirp pulse and battery warning while a quiet dead detector sits in shadow",
  },
  "study-guide-recall-board": {
    kind: "image",
    eyebrow: "Study Artifact",
    title: "The whole corpus, compressed into one recall board.",
    caption:
      "The Study Guide is not another long reference. It is the memory surface: thesis, argument, numbers, dates, mastery domains, commitments, and signatures in one sitting.",
    src: "/blog/illustrations/study-guide-recall-board.webp",
    alt: "Premium architecture study table with a central recall board, clustered reference cards, timeline rail, field kit, and colored evidence markers",
  },
  "study-guide-argument-spine": {
    kind: "flow",
    eyebrow: "Argument Spine",
    title: "The ten claims reduce to one path: pain, seam, proof, trust, slice.",
    caption:
      "Use the one-line arguments as a traversal order. Each claim is a door into the deeper architecture, but the sequence is what makes the body of work memorable.",
    steps: [
      { label: "Pain", detail: "Complaints reveal structural failure modes.", tone: "magenta" },
      { label: "Seams", detail: "Tools exist; crossings are ungoverned.", tone: "amber" },
      { label: "Truth", detail: "Systems stay sovereign; facts circulate.", tone: "signal" },
      { label: "Proof", detail: "Ledger, events, SLOs, and prosecution test the claim.", tone: "signal" },
      { label: "Slices", detail: "Fund visible repairs, not abstract programs.", tone: "amber" },
    ],
    aside: "Memorize the movement, not just the sentences.",
  },
  "study-guide-90-day-loop": {
    kind: "flow",
    eyebrow: "Dated Plan",
    title: "The first 90 days move from listening to proof.",
    caption:
      "The plan is not a generic onboarding arc. It converts field evidence into guardrails, then closes one black hole in production.",
    steps: [
      { label: "Listen", detail: "Jul 20-Aug 18: 1:1s, journey traces, seam audit.", tone: "signal" },
      { label: "Frame", detail: "Aug 19-Sep 17: guardrails, v2, prosecution, ADR-001.", tone: "amber" },
      { label: "Prove", detail: "Sep 18-Oct 17: Slice 1 live and measured.", tone: "magenta" },
      { label: "Guild", detail: "Q2: scale only after preconditions hold.", tone: "muted" },
    ],
    aside: "Listen first. Align second. Prove before scaling.",
  },
  "charter-commitment-ledger": {
    kind: "image",
    eyebrow: "Charter Visual",
    title: "Promises only matter when they can be checked.",
    caption:
      "The charter is not a tone statement. It is a ledger of commitments: student outcome, decision record, prosecution, no-surprise conduct, evidence, credit, service, notice, and survivability.",
    src: "/blog/illustrations/charter-commitment-ledger.webp",
    alt: "Dark technical commitment ledger with ten inspection tokens arranged around a student-centered promise marker",
  },
  "charter-trust-loop": {
    kind: "flow",
    eyebrow: "Trust Loop",
    title: "Trust becomes real when a promise can be caught breaking.",
    caption:
      "The charter creates an operating loop: commitments shape decisions, decisions produce evidence, evidence forces correction, and correction proves the charter is alive.",
    steps: [
      { label: "Promise", detail: "A commitment is written plainly enough to test.", tone: "signal" },
      { label: "Decision", detail: "The promise changes a real trade-off.", tone: "amber" },
      { label: "Evidence", detail: "The receipt is visible to people affected.", tone: "muted" },
      { label: "Correction", detail: "A miss is acknowledged and repaired.", tone: "magenta" },
      { label: "Absence", detail: "The practice survives without the author.", tone: "signal" },
    ],
    aside: "A charter nobody can use against you is decoration.",
  },
  "field-guide-elevator": {
    kind: "image",
    eyebrow: "Field Guide Visual",
    title: "The architect is the elevator between altitude and reality.",
    caption:
      "The Field Guide turns the reading canon into reflex: carry executive intent down, carry engineering truth up, and translate without flattering either floor.",
    src: "/blog/illustrations/field-guide-elevator.webp",
    alt: "Transparent elevator shaft connecting executive strategy rooms above with engineering workbenches and systems below",
  },
  "field-guide-lens-stack": {
    kind: "flow",
    eyebrow: "Learning Stack",
    title: "Every idea must survive breath, practice, and principle.",
    caption:
      "The guide is useful because each entry compresses theory into one explanation, one WGU move this week, and one leadership principle under load.",
    steps: [
      { label: "Breath", detail: "Explain the idea in plain language.", tone: "signal" },
      { label: "Practice", detail: "Name the move to make this week.", tone: "amber" },
      { label: "Principle", detail: "Tie the move to leadership behavior.", tone: "magenta" },
      { label: "Prosecute", detail: "Retire entries that cannot carry all three.", tone: "muted" },
    ],
    aside: "A teaching that cannot name its principle is not finished.",
  },
  "field-kit-worktable": {
    kind: "image",
    eyebrow: "Field Kit Visual",
    title: "Listening becomes architecture when every conversation leaves evidence.",
    caption:
      "The first thirty days are not impression gathering. They are a disciplined instrument for finding queues, vocabulary collisions, promises, seams, and adaptive work.",
    src: "/blog/illustrations/field-kit-worktable.webp",
    alt: "Architecture field kit worktable with interview cards, journey traces, seam audit tags, sorting trays, and promise ledger",
  },
  "field-kit-conversation-loop": {
    kind: "flow",
    eyebrow: "Listening Loop",
    title: "Every conversation should produce a useful receipt.",
    caption:
      "The point is not to extract testimony. It is to earn trust by listening, classify the signal carefully, and return with evidence that something moved.",
    steps: [
      { label: "Ask", detail: "Open with the person's lived workflow.", tone: "signal" },
      { label: "Quote", detail: "Capture the sharp words verbatim when allowed.", tone: "amber" },
      { label: "Classify", detail: "Technical, adaptive, through, around, or between.", tone: "magenta" },
      { label: "Promise", detail: "Name one thing you will move and by when.", tone: "muted" },
      { label: "Return", detail: "Close the loop with the person who gave signal.", tone: "signal" },
    ],
    aside: "Trust is built in the follow-up.",
  },
  "program-prosecution-trial": {
    kind: "image",
    eyebrow: "Prosecution Visual",
    title: "Put the program on trial before reality does.",
    caption:
      "A strong program can lose arguments in writing and become stronger because every conviction names the repair, trigger, and witness.",
    src: "/blog/illustrations/program-prosecution-trial.webp",
    alt: "Modern review courtroom with architecture model, evidence exhibits, objection boards, and repair blocks on the table",
  },
  "prosecution-verdict-loop": {
    kind: "flow",
    eyebrow: "Verdict Loop",
    title: "The strongest objection becomes the repair list.",
    caption:
      "Prosecution is only useful when it changes the work. Each charge needs a verdict, a fix, and a trigger that makes the fix operational.",
    steps: [
      { label: "Charge", detail: "State the objection at full strength.", tone: "magenta" },
      { label: "Defense", detail: "Concede what the evidence actually proves.", tone: "amber" },
      { label: "Verdict", detail: "Acquit, convict, or partially convict.", tone: "signal" },
      { label: "Fix", detail: "Name the patch and when it takes effect.", tone: "muted" },
      { label: "Rerun", detail: "Try the case again with new evidence.", tone: "signal" },
    ],
    aside: "An unpatched conviction is theater.",
  },
  "method-artifact-pipeline": {
    kind: "image",
    eyebrow: "Method Visual",
    title: "Every thought moves through the same governed stations.",
    caption:
      "The method is a repeatable pipeline: capture the claim, research it, build the artifact, prosecute it, patch it, govern the copies, and ship it to the shelf.",
    src: "/blog/illustrations/method-artifact-pipeline.webp",
    alt: "Seven-station technical workflow table where a captured idea becomes a researched, prosecuted, patched, governed, and published artifact",
  },
  "method-escalation-ladder": {
    kind: "flow",
    eyebrow: "Escalation Ladder",
    title: "When unsure, move the work one rung.",
    caption:
      "The method prevents wandering by naming the next honest transformation: claim, evidence, artifact, prosecution, correction, teaching, then portfolio.",
    steps: [
      { label: "Claim", detail: "A thought becomes falsifiable.", tone: "signal" },
      { label: "Evidence", detail: "The claim meets dated sources.", tone: "amber" },
      { label: "Artifact", detail: "The evidence takes a usable form.", tone: "muted" },
      { label: "Prosecution", detail: "The strongest objection gets a hearing.", tone: "magenta" },
      { label: "Portfolio", detail: "Surviving work becomes teachable and navigable.", tone: "signal" },
    ],
    aside: "Resistance at a rung is evidence, not delay.",
  },
  "provenance-evidence-timeline": {
    kind: "image",
    eyebrow: "Provenance Visual",
    title: "The record proves what was known, when, and from where.",
    caption:
      "A provenance record turns influence into accountable scholarship: dated claims, source tiers, open questions, and a standing practice for future updates.",
    src: "/blog/illustrations/provenance-evidence-timeline.webp",
    alt: "Dated evidence timeline with source documents, seals, witness pins, and luminous audit paths across an archival worktable",
  },
  "provenance-claim-chain": {
    kind: "flow",
    eyebrow: "Claim Chain",
    title: "A claim is useful only when its lineage is visible.",
    caption:
      "The provenance habit keeps the site honest: claim, source, date, confidence, open question, and standing update practice travel together.",
    steps: [
      { label: "Claim", detail: "State only what the evidence can carry.", tone: "signal" },
      { label: "Source", detail: "Name origin and confidence tier.", tone: "amber" },
      { label: "Date", detail: "Record when it was known.", tone: "muted" },
      { label: "Question", detail: "Leave counsel-facing gaps open.", tone: "magenta" },
      { label: "Practice", detail: "Define how future changes are governed.", tone: "signal" },
    ],
    aside: "Evidence without lineage becomes folklore.",
  },
  "agentic-gap-analysis-lab": {
    kind: "image",
    eyebrow: "Agentic Frontier",
    title: "Agentic pressure testing strengthens what survives.",
    caption:
      "The gap analysis tests the corpus against AI agents, tool authority, delegated identity, provenance, and verification moving up a level.",
    src: "/blog/illustrations/agentic-gap-analysis-lab.webp",
    alt: "Architecture corpus stack being tested in an agentic analysis lab with contained model nodes, risk findings, and patch artifacts",
  },
  "agentic-patch-list": {
    kind: "flow",
    eyebrow: "Patch List",
    title: "Agentic architecture adds authority, memory, and proof to the old seams.",
    caption:
      "The principles hold, but the implementation has to tighten: signed delegation, governed memory, transparency logs, federated identity, and independent evals.",
    steps: [
      { label: "Delegate", detail: "Signed attenuated authority for every agent hop.", tone: "signal" },
      { label: "Remember", detail: "Memory and embeddings governed as records.", tone: "amber" },
      { label: "Witness", detail: "Transparency logs beat private hash chains.", tone: "magenta" },
      { label: "Federate", detail: "Identity and policy survive multiple agents.", tone: "muted" },
      { label: "Evaluate", detail: "Judges stay independent from the agent measured.", tone: "signal" },
    ],
    aside: "The frontier did not erase the seams; it made them more expensive to ignore.",
  },
  "ai-security-containment": {
    kind: "image",
    eyebrow: "Security Visual",
    title: "AI changes the economics of finding what already exists.",
    caption:
      "The safest assumption is not that every system is breakable. It is that any real vulnerability in a valuable system is now cheaper to find and faster to weaponize.",
    src: "/blog/illustrations/ai-security-containment.webp",
    alt: "AI security architecture lab with student records isolated from untrusted documents, scoped tool gates, signed delegation chain, and audit replay controls",
  },
  "ai-security-threat-loop": {
    kind: "flow",
    eyebrow: "Threat Model",
    title: "Containment beats confidence at every AI boundary.",
    caption:
      "The design stance is to assume prompt injection, poisoning, and tool misuse will be attempted, then make the blast radius small enough to govern.",
    steps: [
      { label: "Untrusted Input", detail: "Student and third-party artifacts are hostile by default.", tone: "magenta" },
      { label: "Context Gate", detail: "Private data, tools, and exfiltration never meet together.", tone: "amber" },
      { label: "Scoped Tool", detail: "Typed, registered, rate-limited, deny-by-default.", tone: "signal" },
      { label: "Human Budget", detail: "Tier 3 review capacity is an SLO.", tone: "muted" },
      { label: "Replay", detail: "Every consequential action can be audited.", tone: "signal" },
    ],
    aside: "The model can be clever; the architecture has to be stricter.",
  },
  "event-versioning-decade": {
    kind: "flow",
    eyebrow: "Event Evolution",
    title: "A decade-old event should still be readable tomorrow.",
    caption:
      "Versioning protects consumers from producer churn: additive changes are tolerated, breaking changes publish beside old versions, and upcasters preserve replay.",
    steps: [
      { label: "Fact", detail: "Past-tense business event.", tone: "signal" },
      { label: "Schema", detail: "Owned contract with version.", tone: "amber" },
      { label: "Compat", detail: "Consumers tolerate additive fields.", tone: "muted" },
      { label: "Sunset", detail: "Breaking versions overlap by policy.", tone: "magenta" },
      { label: "Replay", detail: "Old history remains executable.", tone: "signal" },
    ],
    aside: "Never strand the archive to simplify today's deploy.",
  },
  "identity-spine-map": {
    kind: "flow",
    eyebrow: "Identity Spine",
    title: "One person can appear in many systems without becoming many people.",
    caption:
      "The identity spine does not erase local records. It gives every boundary a stable person reference and a governed way to reconcile disagreements.",
    steps: [
      { label: "Local IDs", detail: "SIS, CRM, LMS, aid, and support records.", tone: "muted" },
      { label: "Match", detail: "Evidence-weighted resolution, not string guessing.", tone: "amber" },
      { label: "Spine ID", detail: "Stable universal person reference.", tone: "signal" },
      { label: "Purpose", detail: "Access follows relationship and reason.", tone: "magenta" },
      { label: "Audit", detail: "Merge and split decisions stay visible.", tone: "signal" },
    ],
    aside: "Identity is infrastructure for dignity.",
  },
  "policy-as-code-gate": {
    kind: "flow",
    eyebrow: "Policy Gate",
    title: "Policy moves fastest when enforcement is local and the rule is shared.",
    caption:
      "Policy-as-code should not become a central bottleneck. Teams keep building while shared rules, tests, and decision logs keep the boundary honest.",
    steps: [
      { label: "Intent", detail: "Human-readable policy source.", tone: "signal" },
      { label: "Rule", detail: "Executable check in the paved road.", tone: "amber" },
      { label: "Local Gate", detail: "Low-latency enforcement near the action.", tone: "muted" },
      { label: "Exception", detail: "Logged, owned, expiring decision.", tone: "magenta" },
      { label: "Evidence", detail: "Audit proves the rule ran.", tone: "signal" },
    ],
    aside: "Governance should make the right thing easier to ship.",
  },
  "business-event-naming": {
    kind: "flow",
    eyebrow: "Event Naming",
    title: "Names are load-bearing when they tell the business truth.",
    caption:
      "A good event name is recognizable to the domain, past tense, and durable enough that ten consumers can build on it without decoding implementation noise.",
    steps: [
      { label: "Domain", detail: "Registrar, aid, learning, support, or platform.", tone: "signal" },
      { label: "Entity", detail: "The thing the business recognizes.", tone: "amber" },
      { label: "Verb", detail: "Past-tense fact, never command.", tone: "magenta" },
      { label: "Contract", detail: "Schema and glossary carry semantics.", tone: "muted" },
    ],
    aside: "If the business cannot say it, the platform should not emit it.",
  },
  "projection-rebuild-loop": {
    kind: "flow",
    eyebrow: "Projection Discipline",
    title: "A projection is trusted because it can be rebuilt.",
    caption:
      "Views are cattle: disposable, replayable, and checked against the source facts before people rely on them.",
    steps: [
      { label: "Events", detail: "Append-only business facts.", tone: "signal" },
      { label: "Projector", detail: "Purpose-built transformation.", tone: "amber" },
      { label: "View", detail: "Fast, local, disposable read model.", tone: "muted" },
      { label: "Rebuild", detail: "Routine rehearsal, not emergency craft.", tone: "magenta" },
      { label: "Compare", detail: "Replay verifies release behavior.", tone: "signal" },
    ],
    aside: "Do not hand-edit a memory cache and call it truth.",
  },
  "watcher-escalation-loop": {
    kind: "flow",
    eyebrow: "Watcher Pattern",
    title: "A timer only matters if somebody watches the watcher.",
    caption:
      "Escalation systems need their own failure semantics: missed heartbeat, dead-man switch, owner, and incident path.",
    steps: [
      { label: "Clock", detail: "The promise has an age.", tone: "amber" },
      { label: "Watcher", detail: "The system checks the clock.", tone: "signal" },
      { label: "Heartbeat", detail: "The watcher proves it is alive.", tone: "muted" },
      { label: "Switch", detail: "Silence escalates independently.", tone: "magenta" },
      { label: "Owner", detail: "A human receives the breach.", tone: "signal" },
    ],
    aside: "Monitoring without a monitor is another silent seam.",
  },
  "architects-mind-arc": {
    kind: "flow",
    eyebrow: "Series Map",
    title: "The architect's mind moves from decision physics to durable absence.",
    caption:
      "The series is a discipline arc: pace decisions, keep a long horizon, read evidence, shape the org, own judgment, say no well, protect people, and leave reasons behind.",
    steps: [
      { label: "Physics", detail: "Classify reversible and irreversible decisions.", tone: "signal" },
      { label: "Horizon", detail: "Hold the ten-year picture while shipping slices.", tone: "amber" },
      { label: "Evidence", detail: "Treat hype as a signal stream, not a religion.", tone: "magenta" },
      { label: "Shape", detail: "Use Conway's Law as a tool.", tone: "muted" },
      { label: "Judgment", detail: "Consult deeply without hiding in consensus.", tone: "signal" },
      { label: "Absence", detail: "Build reasons others can use later.", tone: "amber" },
    ],
    aside: "The goal is not architectural taste. It is judgment that survives contact with people, time, and evidence.",
  },
  "getting-it-right-series-map": {
    kind: "flow",
    eyebrow: "Series Map",
    title: "Getting it right means making the mechanism replayable.",
    caption:
      "The series moves from reliable publication to durable meaning, identity, privacy, policy, and escalation.",
    steps: [
      { label: "Publish", detail: "Outbox, idempotency, and event versioning.", tone: "signal" },
      { label: "Mean", detail: "Business facts and projection rebuilds.", tone: "amber" },
      { label: "Identify", detail: "One person across many systems.", tone: "magenta" },
      { label: "Protect", detail: "Hash chains, PII by reference, and policy gates.", tone: "muted" },
      { label: "Watch", detail: "Timers and dead-man switches close the loop.", tone: "signal" },
    ],
    aside: "The reliable system is not the one that never retries. It is the one whose retries have the same effect.",
  },
  "seams-for-everyone-arc": {
    kind: "flow",
    eyebrow: "Series Map",
    title: "Everyday systems teach enterprise architecture without the jargon.",
    caption:
      "The series uses familiar artifacts to make identity, queues, event history, ledgers, tracking, scoped access, adapters, and watchdogs memorable.",
    steps: [
      { label: "Chart", detail: "Shared identity and record context.", tone: "signal" },
      { label: "Rail", detail: "Queue visibility, owner, and age.", tone: "amber" },
      { label: "Recorder", detail: "Ordered replay before incidents.", tone: "magenta" },
      { label: "Ledger", detail: "Correction without erasure.", tone: "muted" },
      { label: "Key", detail: "Scoped and expiring access.", tone: "signal" },
      { label: "Chirp", detail: "A safeguard that complains before silence.", tone: "amber" },
    ],
    aside: "A picture people already know can carry a principle they will remember.",
  },
  "seams-series-arc": {
    kind: "flow",
    eyebrow: "Series Map",
    title: "The Seams series moves from recognition to governed transformation.",
    caption:
      "The arc names the failure, proves where it lives, and turns it into operating controls: events, queues, funding, instrumentation, transitions, org shape, AI review, and delegation.",
    steps: [
      { label: "Recognize", detail: "Complaints point between systems.", tone: "magenta" },
      { label: "Govern", detail: "Events, queues, and crossings get owners.", tone: "signal" },
      { label: "Choose", detail: "Build and buy on the right ground.", tone: "amber" },
      { label: "Measure", detail: "Trust becomes numbers with consequences.", tone: "muted" },
      { label: "Transform", detail: "Fund slices, instruments, transitions, and org shape.", tone: "signal" },
      { label: "Extend", detail: "AI review and delegation move the seam upward.", tone: "magenta" },
    ],
    aside: "The word is only useful if it changes what gets owned on Monday.",
  },
  "mind-door-physics": {
    kind: "image",
    eyebrow: "Architect's Mind",
    title: "Pace the decision by the door it really is.",
    caption:
      "Some choices should move quickly because they reopen. Others deserve friction because they become load-bearing.",
    src: "/blog/illustrations/mind-door-physics.webp",
    alt: "Two architectural doors in a dark studio, one lightweight reversible door and one heavy sealed threshold, with decision paths branching between them",
  },
  "mind-ten-year-slices": {
    kind: "image",
    eyebrow: "Architect's Mind",
    title: "Hold the horizon; let shipped slices correct the route.",
    caption:
      "The long picture gives direction, but humble production slices keep the picture honest.",
    src: "/blog/illustrations/mind-ten-year-slices.webp",
    alt: "Long-horizon architecture model with small production slices placed along the route and evidence signals correcting the path",
  },
  "mind-hype-residue": {
    kind: "image",
    eyebrow: "Architect's Mind",
    title: "The residue is the signal after the wave burns off.",
    caption:
      "Hype is not useless; it is just not the artifact to trust. Trust what remains useful after the performance fades.",
    src: "/blog/illustrations/mind-hype-residue.webp",
    alt: "Decommissioned hype machine on a technical worktable with surviving useful artifacts glowing among spent promotional fragments",
  },
  "mind-conway-tool": {
    kind: "image",
    eyebrow: "Architect's Mind",
    title: "Team shape and system shape are one design act.",
    caption:
      "Conway's Law is not a trap to complain about. It is a tool for arranging interfaces, ownership, and flow.",
    src: "/blog/illustrations/mind-conway-tool.webp",
    alt: "Organization chart and system architecture fused into a working aqueduct-like machine with teams controlling flow gates",
  },
  "mind-consensus-accountability": {
    kind: "image",
    eyebrow: "Architect's Mind",
    title: "A decision needs consultation and a name on the receipt.",
    caption:
      "Consensus helps when it improves judgment. It becomes cowardice when it hides accountability.",
    src: "/blog/illustrations/mind-consensus-accountability.webp",
    alt: "Decision token balanced between a lone architect, a consultation circle, and an accountable receipt on a dark review table",
  },
  "mind-durable-no": {
    kind: "image",
    eyebrow: "Architect's Mind",
    title: "A durable no leaves a receipt and a better path.",
    caption:
      "Saying no is architectural only when it preserves the reason, names the risk, and points to a usable alternative.",
    src: "/blog/illustrations/mind-durable-no.webp",
    alt: "Glowing stop gate with a signed receipt and an alternate paved route opening beside it in a dark architecture studio",
  },
  "mind-people-queue": {
    kind: "image",
    eyebrow: "Architect's Mind",
    title: "The oldest item is where abstraction tells on itself.",
    caption:
      "A system that processes people must measure the human wait, not just the aggregate throughput.",
    src: "/blog/illustrations/mind-people-queue.webp",
    alt: "Human-impacting queue item aging under a spotlight while aggregate dashboards glow in the background",
  },
  "mind-absence-reasoning": {
    kind: "image",
    eyebrow: "Architect's Mind",
    title: "The reasons should outlive the architect.",
    caption:
      "Designing for absence means future teams can recover the why, challenge it, and continue without folklore.",
    src: "/blog/illustrations/mind-absence-reasoning.webp",
    alt: "Empty architect chair beside a living reasoning library with decision records, diagrams, and preserved rationale threads",
  },
  "talk-portfolio-podium": {
    kind: "image",
    eyebrow: "Podium",
    title: "The podium is governed by the corpus.",
    caption:
      "The talk portfolio is not a loose list. Each stage argument points back to a governed reference, series, or artifact.",
    src: "/blog/illustrations/talk-portfolio-podium.webp",
    alt: "Central conference podium surrounded by governed talk cards, reference artifacts, and audience rooms connected by light paths",
  },
  "talk-ai-review-seam": {
    kind: "image",
    eyebrow: "Podium",
    title: "AI can review the work; intent still has a human floor.",
    caption:
      "The talk's visual claim is the same as its architectural claim: review automation does not remove the seam between code and truth.",
    src: "/blog/illustrations/talk-ai-review-seam.webp",
    alt: "Conference stage showing AI review signals crossing code artifacts but stopping at a human-owned intent boundary",
  },
  "talk-harness-ten-minutes": {
    kind: "image",
    eyebrow: "Podium",
    title: "The ten-minute talk is the harness, compressed.",
    caption:
      "The harness story works when speed, files, tests, prompts, and approvals are visibly held together.",
    src: "/blog/illustrations/talk-harness-ten-minutes.webp",
    alt: "Conference prep room with a compact engineering harness apparatus holding files, tests, prompts, and approval gates together",
  },
  "talk-prosecute-stage": {
    kind: "image",
    eyebrow: "Podium",
    title: "The talk earns trust by showing the trial.",
    caption:
      "The stage version of prosecution works because the audience sees the evidence, not just the conclusion.",
    src: "/blog/illustrations/talk-prosecute-stage.webp",
    alt: "Architecture model on trial on a conference stage with evidence boards, review panel silhouettes, and repair artifacts",
  },
  "talk-org-chart-equipment": {
    kind: "image",
    eyebrow: "Podium",
    title: "The org chart changes the machine.",
    caption:
      "A talk about organization design needs the chart to look like equipment: interfaces, load, and flow, not boxes for their own sake.",
    src: "/blog/illustrations/talk-org-chart-equipment.webp",
    alt: "Conference stage where an organization chart operates like visible machinery controlling system flow",
  },
  "talk-fund-slices-stage": {
    kind: "image",
    eyebrow: "Podium",
    title: "Slices earn the next funding gate.",
    caption:
      "The funding argument becomes visual when each slice proves enough live value to unlock the next step.",
    src: "/blog/illustrations/talk-fund-slices-stage.webp",
    alt: "Stage visual of small funded architecture slices crossing evidence gates while a large monolith remains dim in the background",
  },
  "talk-queue-owner-stage": {
    kind: "image",
    eyebrow: "Podium",
    title: "A queue item needs a place, owner, and clock.",
    caption:
      "The stage image makes the failure immediate: without ownership, a queue is just a polished hiding place.",
    src: "/blog/illustrations/talk-queue-owner-stage.webp",
    alt: "Conference stage with queue rail, owner markers, clocks, and one ownerless work item dropping into a dark gap",
  },
  "reference-editorial-north-star": {
    kind: "image",
    eyebrow: "Reference Artifact",
    title: "Every draft needs a north star before it ships.",
    caption:
      "The North Star keeps tone, evidence, audience, and purpose from drifting as the corpus grows.",
    src: "/blog/illustrations/reference-editorial-north-star.webp",
    alt: "Editorial navigation instrument with compass, north star, manuscript cards, evidence markers, and governed writing paths",
  },
  "reference-curriculum-mastery": {
    kind: "image",
    eyebrow: "Reference Artifact",
    title: "Mastery is a portfolio of evidence, not seat time.",
    caption:
      "The curriculum is strongest when domains, practice, proof, and reflection are visible as one learning architecture.",
    src: "/blog/illustrations/reference-curriculum-mastery.webp",
    alt: "Enterprise architecture mastery curriculum map with domain stations, evidence portfolio cards, and learning progression arcs",
  },
  "reference-reading-canon": {
    kind: "image",
    eyebrow: "Reference Artifact",
    title: "Read the canon with a highlighter and a prosecutor.",
    caption:
      "The canon is a working shelf, not a shrine: each source earns its place by improving judgment under pressure.",
    src: "/blog/illustrations/reference-reading-canon.webp",
    alt: "Adversarial reading table with books, source cards, colored evidence threads, challenge markers, and critique tools",
  },
  "reference-day-zero-baseline": {
    kind: "image",
    eyebrow: "Reference Artifact",
    title: "Seal the belief before hindsight edits it.",
    caption:
      "A Day-Zero baseline protects learning by preserving what was believed before the work had a chance to teach back.",
    src: "/blog/illustrations/reference-day-zero-baseline.webp",
    alt: "Sealed baseline envelope on a calibration table with estate, organization, problem, people, and self-assessment stations",
  },
  "reference-build-guild": {
    kind: "image",
    eyebrow: "Reference Artifact",
    title: "The guild is a capability network, not a meeting series.",
    caption:
      "A healthy guild turns standards, clinics, rituals, and senior engineering practice into shared capability that can eventually need less ceremony.",
    src: "/blog/illustrations/reference-build-guild.webp",
    alt: "Community of practice workshop table with architects, senior engineers, standards, clinics, and learning rituals linked into a capability network",
  },
  "reference-decision-layer": {
    kind: "image",
    eyebrow: "Reference Artifact",
    title: "The decision layer converts inputs into accountable judgment.",
    caption:
      "Policy, evidence, authority, and human accountability belong in a visible layer above operational systems.",
    src: "/blog/illustrations/reference-decision-layer.webp",
    alt: "Governed enterprise decision layer suspended above operational systems with evidence streams, approval markers, and accountability artifacts",
  },
  "reference-harness-talk-kit": {
    kind: "image",
    eyebrow: "Reference Artifact",
    title: "The harness turns AI speed into governed work.",
    caption:
      "The ten-minute kit is a compact teaching object: files, prompts, tests, review, and approvals held together.",
    src: "/blog/illustrations/reference-harness-talk-kit.webp",
    alt: "Engineering harness apparatus connecting code files, prompts, tests, review gates, and approvals beside a small podium",
  },
  "reference-introduction-kit": {
    kind: "image",
    eyebrow: "Reference Artifact",
    title: "First words become safer when the kit carries the operating language.",
    caption:
      "The introduction kit frames values, student continuity, evidence, and accountability as shared working tools from day one.",
    src: "/blog/illustrations/reference-introduction-kit.webp",
    alt: "Elegant onboarding kit with compass, role markers, continuity threads, evidence cards, and shared-language tokens on a dark table",
  },
  "seams-complaint-radar": {
    kind: "image",
    eyebrow: "Seam Visual",
    title: "The product can be fine while the experience leaks around it.",
    caption:
      "Customer complaints often describe the seam: support, records, login, finance, documents, and status disagreeing around a product that still works.",
    src: "/blog/illustrations/seams-complaint-radar.webp",
    alt: "Strong central product core surrounded by support, records, login, finance, and message systems with complaint signals leaking through cracked seams",
  },
  "seams-prosecution-case": {
    kind: "image",
    eyebrow: "Seam Visual",
    title: "The architecture gets stronger when the evidence is allowed to accuse it.",
    caption:
      "A prosecution is not cynicism. It is a room where claims become stronger by surviving real exhibits.",
    src: "/blog/illustrations/seams-prosecution-case.webp",
    alt: "Architecture diagram and model on trial in a dark review room with evidence boards, logs, user journeys, and skeptical reviewers",
  },
  "seams-build-buy-ground": {
    kind: "image",
    eyebrow: "Seam Visual",
    title: "Choose the ground before you choose the tool.",
    caption:
      "Buy the commodity terrain. Own the differentiating ground. Do not confuse convenience with strategy.",
    src: "/blog/illustrations/seams-build-buy-ground.webp",
    alt: "Split terrain architecture map with commodity vendor blocks on one side and strategic student-journey infrastructure on the other",
  },
  "seams-ai-native-gate": {
    kind: "image",
    eyebrow: "Seam Visual",
    title: "AI-native means governed tool paths, not clever shortcuts.",
    caption:
      "The native test is whether an agent can act through scoped, typed, audited boundaries instead of scraping around them.",
    src: "/blog/illustrations/seams-ai-native-gate.webp",
    alt: "AI agent trace passing through scoped registered tool gates toward a protected data vault while an unsafe shortcut is blocked",
  },
  "seams-trust-numbers-board": {
    kind: "image",
    eyebrow: "Seam Visual",
    title: "Trust words become real when the board has thresholds and consequences.",
    caption:
      "Values matter, but systems change when ownership, clocks, measures, and escalation make the value operational.",
    src: "/blog/illustrations/seams-trust-numbers-board.webp",
    alt: "Mechanical trust instrument board converting abstract values into gauges, owners, timers, thresholds, receipts, and consequence levers",
  },
  "seams-instrument-score": {
    kind: "image",
    eyebrow: "Seam Visual",
    title: "Ship the instrument that makes the architecture observable.",
    caption:
      "A model becomes useful when it measures live behavior and lets teams replay what actually happened.",
    src: "/blog/illustrations/seams-instrument-score.webp",
    alt: "Live system architecture model connected to gauges, replay controls, journey traces, and operational evidence feeds",
  },
  "seams-transition-control": {
    kind: "image",
    eyebrow: "Seam Visual",
    title: "The crossing is the thing to govern.",
    caption:
      "Records can be accurate on both sides while the transition between them is ownerless, untimed, and unaudited.",
    src: "/blog/illustrations/seams-transition-control.webp",
    alt: "Glowing status object crossing between two record vaults through a governed checkpoint with owner, time, notice, and authority icons",
  },
  "seams-cornerstone-moved": {
    kind: "image",
    eyebrow: "Seam Visual",
    title: "Put the cornerstone where the whole structure can use it.",
    caption:
      "A definition belongs before the argument depends on it. Moving it forward aligns the rest of the series.",
    src: "/blog/illustrations/seams-cornerstone-moved.webp",
    alt: "Glowing cornerstone block being placed at the front of a systems architecture foundation while later article tiles align behind it",
  },
};

function FlowGraphic({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-7 overflow-x-auto pb-2">
      <div
        className="grid min-w-[46rem] grid-cols-[repeat(var(--step-count),minmax(0,1fr))] gap-3"
        style={{ "--step-count": steps.length } as CSSProperties}
      >
        {steps.map((step, index) => {
          const tone = toneStyles[step.tone ?? "muted"];
          return (
            <div key={step.label} className="relative">
              {index < steps.length - 1 ? (
                <span className="absolute left-[calc(100%-0.25rem)] top-7 z-0 h-px w-4 bg-white/25" />
              ) : null}
              <div
                className={`relative z-10 h-full border ${tone.border} ${tone.background} p-4`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-8 w-8 place-items-center border ${tone.border} bg-black/35 font-mono text-xs ${tone.text}`}
                  >
                    {index + 1}
                  </span>
                  <h4 className="font-display text-lg font-black leading-tight text-white">
                    {step.label}
                  </h4>
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MatrixGraphic({
  visual,
}: {
  visual: Extract<Visual, { kind: "matrix" }>;
}) {
  return (
    <div className="mt-7 overflow-x-auto">
      <table className="min-w-[42rem] w-full border-collapse text-sm">
        <thead>
          <tr>
            {visual.headers.map((header) => (
              <th
                key={header}
                className="border border-white/12 bg-white/[0.06] px-4 py-3 text-left font-mono text-xs uppercase text-[var(--amber)]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visual.rows.map((row) => (
            <tr key={row.label}>
              <th className="border border-white/12 px-4 py-3 text-left font-display text-base text-white">
                {row.label}
              </th>
              {row.cells.map((cell, index) => (
                <td
                  key={cell}
                  className={`border border-white/12 px-4 py-3 leading-6 ${
                    index === 0 ? "text-[var(--signal)]" : "text-[var(--soft)]"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleVisualFrame({
  visual,
  children,
}: {
  visual: Visual;
  children: ReactNode;
}) {
  return (
    <figure className="my-10 overflow-hidden border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.065),rgba(255,255,255,0.02))] shadow-[10px_10px_0_rgba(25,214,197,0.08)]">
      <div className="border-b border-white/10 px-5 py-4 sm:px-6">
        <p className="font-mono text-xs uppercase text-[var(--signal)]">
          {visual.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-2xl font-black leading-tight text-white">
          {visual.title}
        </h3>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-[var(--soft)] sm:px-6">
        {visual.caption}
      </figcaption>
    </figure>
  );
}

export function ArticleVisual({ slug }: { slug: string }) {
  const visual = visuals[slug];

  if (!visual) {
    return null;
  }

  if (visual.kind === "image") {
    return (
      <ArticleVisualFrame visual={visual}>
        <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-black/30">
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            unoptimized
            sizes="(min-width: 1024px) 720px, calc(100vw - 40px)"
            className="object-cover"
          />
        </div>
      </ArticleVisualFrame>
    );
  }

  if (visual.kind === "matrix") {
    return (
      <ArticleVisualFrame visual={visual}>
        <MatrixGraphic visual={visual} />
      </ArticleVisualFrame>
    );
  }

  return (
    <ArticleVisualFrame visual={visual}>
      <FlowGraphic steps={visual.steps} />
      {visual.aside ? (
        <p className="mt-5 border-l-2 border-[var(--magenta)] pl-4 font-mono text-xs uppercase leading-5 text-white/70">
          {visual.aside}
        </p>
      ) : null}
    </ArticleVisualFrame>
  );
}
