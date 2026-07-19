# The Method — How Every Thought Becomes a Governed Artifact

*The reproducible operating procedure behind this entire body of work — documented so
that anyone (including me, on a bad week) can run it for any thought, idea, project, or
solution, and so teams can adopt it wholesale. This is also a developer-experience
design: the method is a paved road for thinking, with gates, receipts, and named next
escalations — which is exactly why it transfers to platform work. Principles under
load: **Learning** (the loop is this method), **Earn Trust** (the prosecution is
standing procedure), **Deliver Results** (nothing counts until it ships to the shelf).*

---

{{visual:method-artifact-pipeline}}

## The pipeline, end to end

Every piece of work here — the invention, the architecture, the articles, the talks —
went through the same seven stations. Nothing skips stations; the stations are cheap
precisely because they're always the same.

**1 · Capture the claim.** A thought becomes a *claim stated falsifiably* — one or two
sentences that could be wrong. "We should govern seams" is a mood; "every expensive
cross-system failure is missing at least one of four named crossings" is a claim. If it
can't be stated so it could fail, it isn't ready for the pipeline; keep thinking.

**2 · Research before format.** Gather the facts, primary sources first — standards
bodies, lab papers, specs — before touching any deliverable format. Date every claim
found; discard what can't be verified (including plausible-looking fabricated
citations — they occur, and catching them is part of the job). The rule that keeps this
honest: *reading the output format's requirements before research is finished anchors
you on mechanics before you have anything true to put in them.*

**3 · Build the artifact.** Write the document, design the architecture, draft the
article — from the researched facts, in the house voice, with the claim load-bearing.
Every artifact names the Leadership Principles it exercises, links into the corpus
(nothing floats), and states its own confidence honestly: known / novel-in-combination
/ novel, with tiers on evidence ([E] empirical, [P] practitioner, [F] folklore).

**4 · Prosecute it.** The adversarial review, as standing procedure, not crisis
response: steelman the strongest opponents at full strength (real vendors, real
standards, real critiques — named and dated), argue the case *against* the artifact
better than a hostile reviewer would, and publish honest verdicts next to the work:
HOLDS / NEEDS EXTENSION / AT RISK. What survives is stronger; what dies deserved to.
The prosecution is never hidden — the visible loss record is what makes the surviving
claims credible.

**5 · Patch, don't defend.** Every conviction becomes a correction, applied *surgically
to the artifacts themselves* — the pages, the code, the diagrams — so verdict and
artifact never drift apart. House rules: nothing deleted (supersede with pointers;
revision in the open is itself the lesson); the code is the receipt (if the spec
changed, the reference implementation and its tests change too, and the tests prove
the new behavior).

**6 · Govern the copies.** Every artifact has one source of truth and registered
copies, watched by equipment, not vigilance: the sync script maps every source to
every site copy, runs before every deploy, and fails loudly on drift. If a new
artifact isn't registered in the map, it isn't done. "Someone is careful" is never the
answer to "how does this stay correct."

**7 · Ship to the shelf, then escalate.** The artifact lands where it's navigable
(everything reachable from the front door), and the work ends by naming its own *next
escalation* — the successor question the artifact makes askable. Not "what else could
we do" but "what does this now make possible or newly necessary?"

## The escalation ladder — how "right next" gets chosen

{{visual:method-escalation-ladder}}

The pattern behind every next step this program has taken, generalized:

**Claim → Evidence → Artifact → Prosecution → Correction → Teaching → Portfolio.**
A thought is escalated to a falsifiable claim; a claim to researched evidence; evidence
to a built artifact; the artifact to its own prosecution; convictions to corrections in
the artifacts and code; the corrected, survived work to *teaching* forms (articles,
glossary entries, talks — because explaining it to a colder room is the final
verification); and teachable pieces to a *portfolio* (a series, a shelf, a talk track)
where they compound. When unsure what's next, locate the current work on this ladder
and move it one rung. When work resists a rung — a claim that can't find evidence, an
artifact that can't survive prosecution — that resistance *is* the finding; record it
and let the piece die or shrink honestly.

Two standing escalation triggers outrank the ladder: **a self-reference test** (are we
applying our own standards to ourselves? The moment the answer is no — an ungoverned
copy of our own, an unprosecuted program of our own — that repair goes first; nothing
discredits a method like exempting yourself), and **a staleness clock** (the frontier
moves; the whole corpus re-enters prosecution quarterly, because a thesis that isn't
re-tried on schedule is a period piece with good production values).

## Applying this to a real team: the DevEx/platform translation

The method is a developer-experience architecture, which is why it transfers to
improving the platform for software engineers. The translation table:

*Falsifiable claims* → an engineering-standards page and ADRs: every platform decision
written with context, options, and the case against, so engineers can disagree
productively. *Research before format* → paved-road choices grounded in primary
evidence (DORA-style measures, real usage traces, engineer journey traces), never in
vendor decks. *Prosecution* → the platform team steelmans its own roadmap against the
strongest objections (including "the paved road is worse than my side road" — treat
road-swerving as signal, not disobedience). *Patch, don't defend* → convictions change
the platform, visibly, with a reversal count worn as a learning record. *Govern the
copies* → golden paths, templates, and docs have sources of truth and drift-detection
equipment; a template that rots silently is an ungoverned seam with the platform's
name on it. *Ship to the shelf* → everything discoverable from one front door; if an
engineer can't navigate to it, it doesn't exist. *Escalation ladder* → platform
investments move one rung at a time with evidence at each rung — a pain observed
(claim), measured (evidence), tooled (artifact), stress-tested with hostile users
(prosecution), corrected (patch), documented and taught (teaching), and only then
generalized (portfolio). And the two standing triggers apply verbatim: the platform
team eats its own paved road, and the roadmap re-enters prosecution quarterly.

The developer-experience thesis in one sentence, method-shaped: *engineers are the
subjects of the platform the way students are the subjects of the fabric — the paved
road needs an owner, its crossings governed, its promises measured, and its failures
given an address.*

## The minimum viable version (for a bad week)

The method's whole spirit in three questions, when there's no time for stations:
**Could this claim be wrong, and how would I know?** (capture + evidence). **What
would the strongest opponent say, and where are they right?** (prosecution). **Where
does the correction land so it can't drift?** (patch + govern). Anything that clears
those three is safe to ship small. Anything that can't clear them isn't blocked — it's
*told on itself*, which is what the method is for.

---

*The method's own provenance: it wasn't designed up front — it accreted, one honest
correction at a time, and was only written down when someone asked "can others
reproduce this?" That order — practice first, codify second — is itself the
recommendation. Write your team's method from what already survives contact, not from
what a framework says a method should be.*
