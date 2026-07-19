# The Study Guide — Key Points, One Sitting

*The whole body of work, compressed for review and recall. Every section links to its depth. Terms are in the [Glossary](/wgu/glossary) — the standing appendix of ~28 plain-language definitions from SIS to strangler fig. Study this page until you can reproduce it from memory on a whiteboard; everything else is reference.*

{{visual:study-guide-recall-board}}

---

## The one organizing truth

**Enterprise architecture fails when it optimizes for architecture, and succeeds when it optimizes for other people's decisions.** Every artifact, practice, and principle in this body of work is a variation on that theme. Its diagnostic: the six-month test — *if you went silent for six months, what of your thinking would keep operating?*

## The argument, in one line each

1. **The complaints aren't about the product.** Five failure modes — black holes, silent changes, dropped handoffs, fragmented truth, fragile access — all architecture problems wearing a customer-service costume. → [Voice of the Student](/wgu/voice-of-the-student), [Priorities](/wgu/student-system-priorities)
2. **The tools were already there.** Every failure happened with a world-class estate in production; the gap is the ungoverned seams — identity, events, ownership — between systems. → [System Boundary](/wgu/system-boundary), [ADR-001](/wgu/adr-timeline-buy-vs-build)
3. **Truth stays sovereign; facts circulate.** SIS keeps the record, CRM keeps the relationship, events carry facts between them — circulation, not truth. → [Architecture v2](/wgu/architecture-v2)
4. **Event-source exactly one context.** The Competency Ledger — where temporal truth pays rent — append-only, hash-chained, PII by reference; a transcript is a projection of it, making it the embryo of the academic record. → [Engineering Standards](/wgu/engineering-standards), [Ground-Up](/wgu/ground-up)
5. **Buy the commodity, build the differentiator, govern the boundary.** Salesforce runs the relationship; we build the record of mastery; the contract between them is the architecture. Never build the compliance edges. → [ADR-001](/wgu/adr-timeline-buy-vs-build)
6. **Nothing changes silently; no queue without an owner.** Actor + reason + notice on every mutation; ID + owner + clock + visible state on every submission; escalation as automatic consequence. → [Trust Pack](/wgu/trust-pack), [Ops Reality](/wgu/ops-reality)
7. **Trust is numbers with consequences.** Seven SLOs with error budgets; five AI action tiers with one line that never moves (consequential decisions stay human, structurally). → [Trust Pack](/wgu/trust-pack)
8. **AI-native has a test.** Could a governed agent be a first-class consumer today — registered tools, governed context, machine-legible permissions, zero scraping? Descriptions are now runtime infrastructure. → [AI-Native](/wgu/ai-native)
9. **Prosecute your own architecture.** Every thesis ships with its strongest case against it; what survives is trusted, what dies deserved to. → [Adversarial Review](/wgu/adversarial-review)
10. **Fund slices, not programs; drain, don't migrate.** Each slice closes one named leak, measures with holdouts, and buys the next; cohorts onboard to the new, the old empties by graduation. → [Business Case](/wgu/business-case), [Ground-Up](/wgu/ground-up)

{{visual:study-guide-argument-spine}}

## The numbers — know the METHOD cold, hold the digits loosely

One verified fact: **192,613** students (FY25 public). Everything else here is an *estimate built from public data about systems not yet seen* — memorize how each was derived, never recite the digits as facts (the program's own prosecution convicted an earlier version of this section for exactly that). **1 persistence point ≈ 1,900 students ≈ ~$15M/yr** (headcount × published tuition — replace with internal figures in Days 31–60). **~600 events/sec peak, ~20 min ledger replay, <$2/student/term** (stated assumptions on the [Scale Math](/wgu/scale-math) page — any figure off by 2× triggers re-sequencing). The SLO *targets* are commitments, not measurements: **99.9%** login success, **<60s** document-status visibility, **100%** escalation, **0** silent changes. **5 years** — reported median SIS-migration disruption [P-tier: case-based, uncited range].

## The plan, dated

**Jul 20–Aug 18 · Listen & Diagnose** — 1:1s with the [Field Kit](/blog/reference/06-field-kit), journey traces, the seam audit (through/around/between), the adaptive/technical ledger. **Aug 19–Sep 17 · Frame & Align** — team ratifies guardrails; v2 + prosecution + ADR-001 enter event-storming as the hypothesis that survived its own trial. **Sep 18–Oct 17 · Prove & Sequence** — Slice 1 live: one black hole, provably gone, measured. **Q2 · [Build the Guild](/blog/reference/08-build-the-guild)** — gated on preconditions. → [First 90 Days](/wgu/first-90-days)

{{visual:study-guide-90-day-loop}}

## The mastery program, in six lines

**Decision quality** — ADRs with predictive clauses, probability logs, premortems, failure-case study. **Influence without authority** — name the currency before every ask; adaptive-vs-technical before every initiative. **Financial fluency** — unit economics, options framing, provost/CFO language. **Technical credibility** — one running artifact per quarter; questions that teach. **Boundary judgment** — strategic DDD, HERM, federated by default. **Feedback manufacturing** — the loops (daily line, weekly check-in, monthly case + kata, quarterly self-prosecution). → [Curriculum](/blog/reference/03-ea-mastery-curriculum), [Canon](/blog/reference/04-reading-canon), [Field Guide](/blog/reference/05-field-guide)

## The person (commitments that make trust checkable)

The student is the tiebreaker · decisions written and inspectable · every design arrives with its prosecution · no surprise vetoes · disagree fully, commit completely · demonstrate, don't assert · credit outward, failure stops with me · serve before asking · nothing I steward changes silently · built to survive my absence. → [The Charter](/blog/reference/01-the-architects-charter)

## The fired-EA checklist (quarterly, forever)

Models whose only consumers were architects? Involvement experienced as a gate? Stakeholders who can't name what architecture did for them this quarter? Weeks spent at one altitude? Technology framing at money-and-mission tables? And the six-month test — count what would keep running, write it down, grow the count.

## The five signatures (one per series — each is a thesis)

*The tools were never the gap. The seams were.* — [The Seams](/blog/the-seams).
*Correct is a property you can test; everything else is hope.* — [Getting It Right](/blog/getting-it-right).
*That's the whole idea; the rest is engineering.* — [Seams for Everyone](/blog/seams-for-everyone).
*Patterns are free; judgment is earned.* — [The Architect's Mind](/blog/architects-mind).
*Never assert on stage what the corpus can't demonstrate in writing.* — [The Podium](/blog/talks).

## Where everything lives

The architecture: [the WGU hub](/wgu) — 22 areas from principles to pitch kit, plus the runnable reference implementation (`products/uso-reference-implementation`, 9 passing tests). The writing: [the Writing Room](/blog) — five series plus this Reference shelf. The practice: your Monday check-in carries the plan, the loops, and one Socratic question a week. The terms: **[the Glossary](/wgu/glossary)** — the appendix to this guide and to everything above; if any word on this page isn't instantly clear, it's defined there in plain language.

---

*Self-test before Day 1: close this page and whiteboard, from memory — the five failure modes, the three phases with dates, the six mastery domains, the one organizing truth, and above all THE QUESTIONS (the field kit's openers, the adaptive/technical classification, "what would change my mind"). Do NOT drill the nine v2 decisions to reflex — they are hypotheses awaiting a trial with real opposing counsel, and an answer memorized cold stops being revisable. Own the questions; hold the answers loosely.*
