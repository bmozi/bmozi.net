# The Decision Layer — What the Statsig Role Teaches This Strategy

*Prompted by an OpenAI/Statsig Engineering Manager job description. The exercise: read another organization's definition of platform success adversarially, steal what's true, adapt what's transferable, and name what must NOT transfer into an institution that serves students. Principles under load: **Learning** (benchmark against the best, wherever it works), **Sound Judgment** (adapt, never adopt), **Student Obsessed** (the inversion that changes everything below).*

---

{{visual:reference-decision-layer}}

## What the JD actually describes

Strip the company names and the posting describes a single idea worth internalizing: **experimentation, progressive rollout, dynamic configuration, and impact measurement — unified as one owned platform, sitting "on the critical path for how teams learn."** Not a tool. Not a team's side capability. The institutional learning system, productized, with an owner, a strategy, and success criteria.

That framing is the gift. Most organizations treat these as four scattered concerns: experiments live in analytics, feature flags live in engineering, config lives in ops, measurement lives in BI. The JD names them as one thing — call it **the decision layer** — because they are one loop: *introduce a change safely → measure its real impact → roll forward or back with confidence → let the evidence fund the next change.*

## The recognition: this strategy already contains the organs, unnamed

Reading the JD against the architecture is striking — every component exists here, scattered across pages:

Progressive rollout → the cohort-based cutover and slice strategy (Ground-Up). Experimentation with holdouts → stage 03 of the personalization loop. Rollout safety → the SLO error budgets and runbooks (Trust Pack, Ops Reality). Dynamic configuration → policy-as-code and the action-tier registry. Impact analytics → the lakehouse, the timeline, the business case's "attribution or it didn't happen." Even the JD's signature sentence — teams can "launch progressively, measure clearly, and make faster, higher-confidence decisions" — is *fund slices, not programs*, restated as a platform capability.

**The integration, then, is one move: name the decision layer as a first-class capability with a single owner, rather than leaving its organs distributed across five pages.** In the operating-model capability map it lives inside "Platform, data & AI," but it deserves its own line: *Decision Layer — experimentation, progressive rollout, configuration, impact measurement — posture: build the loop, buy the plumbing.* When the institution asks "how do we know any of this is working?", the answer should have a name, not a scavenger hunt.

## The upstream addition: intent before acceleration

Agentic product and software-factory work adds one more responsibility to the decision layer: the institution needs a governed path from **Key Result → product outcome → initiative → requirement → ADR → architecture delta → built change → measured result**.

Without that trace, faster delivery turns unclear intent into polished waste. With that trace, product-intent agents can help discover and structure the right work, and software-factory agents can accelerate only after evidence, ownership, and constraints are visible.

The reusable instrument is now filed as Reference 18: [Vision-to-Work Trace Kit](/blog/reference/18-vision-to-work-trace-kit).

## The inversion that must survive translation

Here is where adaptation matters more than adoption, and where the mission earns its keep. A consumer-products company can say "determine the winner" and mean it plainly: variant B beat variant A; ship B. An institution serving students cannot import that sentence unexamined, for three structural reasons:

**Students are not traffic.** A failed experiment at a consumer company costs engagement; a failed experiment on enrollment communication costs a working parent their semester. The decision layer at a university needs what the consumer version treats as optional: equity guardrails on every experiment (does the variant help the average by harming a subgroup?), absolute opt-out honoring, learning-science validation before scale, and the Tier-4 wall — no experiment ever gates a consequential determination about a person. All of this is already designed (the personalization loop, the trust pack); the JD's value is showing it belongs to ONE platform, not scattered ethics.

**"Winner" needs two judges.** Experiments determine what *works*; the mission determines what *wins*. A nudge variant that increases course completions by pressuring students who should have paused for family reasons "works" and loses. The decision layer's scorecard therefore always carries paired metrics: the outcome moved *and* the guardrails held. This is the business case's "mission math is the tiebreaker," now applied at the level of every individual experiment.

**Cadence differs by design.** Consumer platforms measure in days; persistence and completion resolve in terms and years. The WGU decision layer needs leading indicators (engaged minutes, momentum, black-hole rate) validated against lagging truth (persistence, completion) — which is exactly what the ledger's replayable history makes possible, and one more reason the ledger is the most strategically loaded asset in the architecture.

## The success criteria, translated

The JD's "success looks like" section is the best-written platform scorecard I've seen in a posting, and it rewrites cleanly for this context — worth adopting nearly verbatim into the Q3+ roadmap when the decision layer gets its name:

A coherent decision-layer strategy exists and serves teams across the institution — enrollment, records, success, and academics, not just engineering. Teams launch progressively (cohorts, slices), measure clearly (paired outcome + guardrail metrics), and make faster, higher-confidence decisions. The platform becomes more reliable and more valuable as adoption scales — each new experimenting team inherits the guardrails free. Senior partners trust the platform to turn recurring launch-and-measure needs into reusable capabilities. And the layer becomes core to how the institution ships safely, learns quickly, and improves — *lives changed per term, with evidence.*

## Language worth stealing outright

"Ship with speed, safety, and evidence" — a better three-word banner for the whole v2 program than anything I've written. "Sits on the critical path for how teams learn" — the sentence that justifies the decision layer's budget. "Preserve what made X strong while integrating it deeply" — the exact posture ADR-001 takes toward the Salesforce estate, and the right sentence for any team whose system the architecture touches. "Translate recurring needs into durable platform capabilities" — the guild's Design Clinic, described from the platform side. "Balance rapid adoption with reliability, correctness, usability, and safety" — the five-way tension every platform owner lives in, named honestly.

## The cautions (read adversarially, per our own procedure)

A JD is marketing — it describes the org's aspiration, not its reality, and this one is selling a post-acquisition integration as a triumph in progress; the actual role is likely 60% organizational surgery. More importantly for us: **that role is an Engineering Manager with hiring authority, budget, and managers reporting in — a fundamentally different power base than an enterprise architect operating on influence.** Steal the platform thinking and the success criteria; do not import the operating assumptions ("establish clear ownership… across workstreams" reads differently when the workstreams don't report to you — here, that clause is earned through the guild and the ADR practice, not declared). And note what the JD never mentions: the people the products serve appear only as "real-world usage." Ours appear by name, first, as the tiebreaker. That difference isn't decoration — it's the entire reason the translation above required an inversion section.

## Career marker, filed honestly

This JD is also a mirror: it describes the *shape* of the role this trajectory points toward — the leader who owns how an organization learns, builds the leadership bench, and turns recurring needs into durable capability. The mastery curriculum's domains map onto its requirements almost one-to-one (strategy across workstreams → Domain 5; credible with senior partners → Domains 2–3; leadership bench → the guild ladder). Keep it in the file as a calibration target: when the guild has non-me hosts, the decision layer has a name and a scorecard, and slices fund themselves on evidence — that is this role, grown rather than applied for.

---

*Filed to the reference shelf; the "decision layer" capability line joins the operating model at its next revision, and the paired-metric rule (outcome moved AND guardrails held) is adopted now as standing policy for any experiment this program ever proposes.*
