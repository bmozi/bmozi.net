# The Reading Canon, Read Adversarially

*Companion to the Mastery Curriculum. Every entry carries three things: what it uniquely teaches, where it's honestly weak, and how to read it. Evidence tiers: **[E]** empirical, **[P]** practitioner consensus with plausible mechanism, **[F]** folklore — repeated widely, sourced weakly. A canon read uncritically is just fashion with footnotes.*

---

## Tier 1 · The spine (read fully, in this order)

**Gregor Hohpe — *The Software Architect Elevator*** · **[P, strong practitioner validation]**
*Teaches:* the role itself — value comes from riding between penthouse (strategy) and engine room (implementation), translating both directions; architecture as decision-making and organizational change; selling "options" as the financial frame for flexibility. The single best explanation of why architects get fired stuck on one floor.
*Weak where:* essayistic and anecdote-driven; nothing falsifiable.
*How to read:* first, before anything else — it defines the job this curriculum trains for. Pair each essay with one live situation of your own.

**Vlad Khononov — *Learning Domain-Driven Design*** (then Evans's *Domain-Driven Design* for the source) · **[P]**
*Teaches:* strategic design — bounded contexts, context mapping, ubiquitous language — the most durable boundary discipline the field has produced, and the foundation of every seam argument you make.
*Weak where:* tactical DDD (aggregates, repositories) reliably overengineers simple domains; no controlled evidence DDD projects outperform.
*How to read:* Khononov cover to cover before any team-ratification sessions; Evans's strategic chapters (Part IV) later, for depth; skip Evans's tactical middle unless building the ledger's internals.

**Forsgren, Humble, Kim — *Accelerate*, plus the current DORA report** · **[E, with caveats]**
*Teaches:* the only large-N statistical evidence base in the field; the four keys; capabilities over maturity models; the current reports on AI as an amplifier ("AI doesn't fix a team; it amplifies what's already there").
*Weak where:* survey psychometrics vulnerable to halo effects; change-failure-rate famously failed the authors' own construct-validity testing; correlations routinely repeated as causation.
*How to read:* as the best evidence available *and* as calibration practice — spot where the marketing outruns the method. Quote it with its caveats attached; that habit alone marks you as serious.

**Kleppmann & Riccomini — *Designing Data-Intensive Applications*, 2nd ed.** · **[E-grade rigor at the systems layer]**
*Teaches:* evaluative depth — consistency, replication, partitioning, consensus, and the 2nd edition's cloud-native and object-storage rewrites. This is the book that lets you interrogate any vendor claim and know when the answer is marketing.
*Weak where:* silent on organizations, politics, and everything above the systems layer; its depth seduces architects back into the engine room full-time.
*How to read:* slowly, one chapter a month alongside real design reviews. It's a whetstone, not a novel.

## Tier 2 · The lenses (read strategically, hold loosely)

**Skelton & Pais — *Team Topologies*** · **[P; adoption outcomes F]**
*Teaches:* Conway's law made operational — four team types, cognitive load as design constraint.
*Weak where:* widely cargo-culted as an org-chart template (a well-known 2025 critique makes exactly this case); thin independent validation of the taxonomy itself.
*How to read:* as a vocabulary for conversations you're already having, never as a reorg recipe. Your operating model already embodies the useful half.

**Richards & Ford — *Fundamentals of Software Architecture* 2nd ed. / *The Hard Parts*** · **[P]**
*Teaches:* "everything is a trade-off" as first law; the best workbook exercises for distributed-system trade-offs (coupling, data ownership).
*Weak where:* the connascence formalism is half-baked pseudo-math; the style taxonomy is tidier than reality.
*How to read:* *Hard Parts* for its worked trade-off analyses — do them as katas; *Fundamentals* as reference.

**Wardley Mapping** (free corpus) · **[P/F boundary]**
*Teaches:* the only strategy notation with evolution on an axis — makes build/buy/outsource timing arguments visual; genuinely useful for your choose-your-ground conversations.
*Weak where:* essentially zero empirical validation; "evolution" is under-defined; maps encode the mapper's biases while looking objective.
*How to read:* as structured argument, not analysis. Map one real decision, present it, note where the map persuaded people beyond its actual evidence — that's a lesson about all frameworks.

**Barry O'Reilly — *Residues* / Residuality Theory** · **[P, verging on F where presented as science]**
*Teaches:* a genuinely novel provocation — stress designs against random unknowable stressors and keep what survives; imports complexity science into design method.
*Weak where:* sharply contested; empirical support is essentially the author's own studies; heavy jargon-to-evidence ratio.
*How to read:* once, fast, for the provocation. Steal the stressor-brainstorm as a premortem variant; leave the theory.

**Khononov — *Balancing Coupling in Software Design*** · **[P]**
*Teaches:* the modern synthesis of coupling theory — connects DDD to module theory with more rigor than most.
*How to read:* after the spine, when the ledger and timeline internals are being designed for real.

## Tier 3 · The leadership shelf (read most critically of all — highest folklore density in the brief)

**Servant leadership** (Lee et al. meta-analysis and successors) · **[E, design caveats]**
The only leadership style here with meta-analytic support — incremental validity over transformational/authentic styles, mediated by trust. Cross-sectional designs and mushy construct boundaries are the honest caveats. Read one meta-analysis, not ten airport books; then practice the behaviors deliberately.

**Cohen & Bradford — *Influence Without Authority*** · **[P, theory-backed]**
The exchange/currencies model — the standard framework for exactly the architect's position. Read for the currency taxonomy; practice by naming your offered currency before every ask.

**Heifetz — *Leadership Without Easy Answers* (or the *Adaptive Leadership* fieldbook)** · **[P, high face validity, thin empirics]**
The adaptive-vs-technical distinction — arguably the single most useful lens on EA failure ever written, despite its Harvard-case (not controlled-study) pedigree. Note that its favorite supporting statistic ("70% of transformations fail") is itself folklore.

**Marquet — *Turn the Ship Around!*** · **[P, n=1]**
Intent-based leadership; "I intend to…" as a delegation mechanic. A single hero-narrated case from an environment (nuclear submarine) with selection and incentives your institution lacks. Take the mechanic, leave the mythology. Prefer it over *Extreme Ownership* **[F/P]**, whose ownership framing is useful but whose combat anecdotes are unfalsifiable and whose "blame yourself for everything" misreading is a genuine hazard.

**Tetlock — *Superforecasting*** · **[E]**
The calibration evidence and the practice method for Domain 1. Read fully; start the prediction log the same week.

**Klein — premortems and the naturalistic-decision-making work** · **[E for mechanisms]**
The prospective-hindsight result behind premortems and the ShadowBox expert-comparison method behind your failure-case studies. *Sources of Power* is the deep read; the premortem papers are the fast one.

## Tier 4 · The sector shelf (higher education)

**HERM (CAUDIT/EUNIS Higher Education Reference Model)** · **[P, community-validated]**
The sector's shared capability language — more used in real higher-ed practice than any generic framework content. Map your capability model to it; speak it in cross-institutional conversations.

**EDUCAUSE / ITANA corpus** · **[P]**
*Architecting the IT Organization*, the EA Maturity Model for Higher Education, and the annual Top 10 issues (the current edition runs on connective themes — collaborative security, human-edge-of-AI, financial insight under enrollment pressure). Also study the published case of a university that disbanded its EA practice after three years — the CIO's phrasing, "not mature enough to support the EA function *as implemented*," is a masterclass in scoping ambition to institutional readiness.

**The ERP/SIS failure literature** · **[E-ish, case-based]**
Median disruption for major migrations: five years. Scope expansion as the second-largest overrun driver. Read before any records-workstream decision; these are the crash reports for your exact aircraft.

## Tier 5 · The AI-era shelf (where folklore currently breeds fastest)

**Chip Huyen — *AI Engineering*** · **[P, the consensus serious entry]** — foundation models as infrastructure; read for the evaluation-and-serving chapters, which map to your decisioning loop.
**Current DORA AI findings** · **[E]** — the only data-backed entry on this shelf; AI amplifies existing team quality and still taxes stability without the gating capabilities.
**Ding et al. — "Always-On Agents: A Survey of Persistent Memory, State, and Governance in LLM Agents" (arXiv 2606.30306, 2026)** · **[P — survey; organizes 435 works, validates none]**
*Teaches:* the best current map of agent persistent state, and one finding that matters beyond agents: the field concentrates on *accumulating and retrieving* state while neglecting *governing, recovering, and relinquishing* it — the seams thesis wearing agent clothes. Its six diagnostic axes (authority, scope, mutability, provenance, recoverability, actionability) map almost one-to-one onto the fabric's envelope and tier machinery, which is independent convergence worth citing — and a commoditization warning, same as the Action Fabric finding. Read it also for what it *provoked* here: the trust pack's "agent memory is a student record" tier — an agent's cross-session memory about a student is an education record, owed purpose limitation, retention, erasure, write-audit, and leakage checks like any other. No ed-tech source says this yet.
*Weak where:* it's a survey — taxonomy, not evidence; treat every category as [P]. And note the meta-lesson: they shipped AOEP-v0, an evaluation protocol, alongside the taxonomy — the ship-an-instrument move in the wild. Track whether the protocol outlives the paper; the wager here is that it will, because instruments travel and taxonomies date.
*How to read:* the abstract, Figure 1, the six axes, and the governance-and-safety strand deeply; skim the memory-mechanisms strand (it will be stale in six months).
Everything else here: read with the Wardley lesson in mind — frameworks persuade beyond their evidence, and this shelf is six months from obsolete at any given moment. Your own AI-native test page is, honestly, more rigorous than most of what's published.

---

## The anti-canon (deliberately not on the list)

Framework certifications as study programs **[F]** — the field's own research found the celebrated artifacts largely unused and the useful parts non-specific; certification signals procurement legitimacy, not competency. Maturity models as ambition-setters **[F]** — the disbanded-practice case shows what happens when maturity ambition outruns institutional readiness. Comprehensive current-state modeling as a prerequisite to advice **[F]** — those repositories go unused while decisions get made without you. And any book promising architecture mastery through reading alone — including, in fairness, this list. The canon supplies vocabulary and vicarious scar tissue. The curriculum's practice loops are where judgment actually forms.

*Revisit annually during the self-prosecution. Books earn their place here the same way designs earn deployment: by surviving the case against them.*
