# Policy-as-Code Without the Central Bottleneck

*Part 9 of Getting It Right, a series on the patterns behind reliable systems. Views my own; examples composite and anonymized from years of systems work.*

---

A financial services firm did the right thing. Authorization logic had been scattered across forty services — every team hand-rolling its own checks, every audit a spelunking expedition — so they centralized it: one policy service, one language, one place where "who may see what" was written down. The architecture review applauded. I would have applauded too.

Six months later, two numbers told the rest of the story. Their flagship API's P99 latency had roughly doubled — because every request now made a network hop to the policy service, and hot paths made several. And their worst outage of the year wasn't a database or a broker; it was the policy service having a bad twenty minutes, during which *every* service in the estate either failed closed (nothing worked) or failed open (everything worked, for everyone — the kind of twenty minutes you later describe to a regulator).

They had fixed the governance problem by installing a bottleneck, and the bottleneck was now the most critical single point of failure they operated. The lesson isn't "don't centralize." It's sharper: **centralize the authoring; distribute the enforcement.**

{{visual:policy-as-code-gate}}

## The naive version, and the arithmetic that kills it

The naive architecture equates "one source of truth" with "one server answering questions." Every access decision — can this adjuster see this claim, can this agent act for this customer — becomes a synchronous remote call: request in, allow/deny out.

Do the arithmetic before the incident does it for you. Suppose your service's latency budget gives authorization 100ms at P99 — generous; on a hot path serving humans it's really 10. A remote decision costs a network round trip plus the policy engine's evaluation plus *its* data lookups, under load, at your P99 — not your median. One hop might squeak under 100ms on a good day. But decisions don't come one per request: render a claims dashboard and you're authorizing dozens of resources; filter a list and you're authorizing every row. Sequential hops stack; parallel hops thundering-herd the policy service. The budget isn't tight — it's structurally unmeetable. **A P99 under 100ms means the decision must be computed locally.** That's not a preference; it's what the arithmetic leaves.

And latency is the *gentle* failure. The availability coupling is the brutal one: a remote decision point marries every service's uptime to the policy service's, and forces the fail-open-or-fail-closed choice estate-wide, at once, during the worst twenty minutes of your year.

## The correct version

The shape that works is the one good configuration and code delivery already use: **author centrally, distribute as versioned artifacts, evaluate locally.**

Policy lives in one repository, in one policy language, reviewed and version-controlled like the code it is — that's the centralization that was always worth having, because it's what gives auditors one place to read and policy authors one place to write. From there, policies compile into signed, versioned bundles that are *pushed* to every enforcement point: a sidecar, a library, an in-process engine next to each service. Decisions are then a local function call — microseconds, no network, no shared fate. The policy service can be down all afternoon and every service keeps enforcing the last good bundle. You've traded a hard dependency for an eventual-consistency window on policy *updates* — seconds of propagation delay, versus a synchronous dependency on every request. Take that trade every time; just monitor bundle staleness per node, because an enforcement point quietly running last month's policy is this pattern's failure mode, and it must page someone.

Data follows the same split: the facts policies consume (who manages whom, which team owns which account) are distributed to the edge the same way — pushed, cached, versioned — not fetched per decision.

Two design commitments separate the durable installations from the rewrites.

**Purpose and relationship are first-class attributes, not afterthoughts.** Role-based access answers "is this person a claims adjuster?" — necessary, nowhere near sufficient. The questions that actually protect people are relational and purposive: is this adjuster *assigned to this claim*? Is this lookup *for treatment* or for curiosity? Is this agent acting *on behalf of* this customer, with a delegation that's still valid? If your policy model can't express purpose and relationship natively, teams will encode them as fake roles (`role: adjuster_claim_88213`) and the model rots from within. Model them as first-class from day one; retrofitting them is a rewrite wearing a migration's name.

**One policy engine. Fight for this.** The two-engine trap arrives politely: the new platform ships with its own authorization system, the acquired company brings theirs, someone adopts a second language "just for the API gateway." Now the answer to "can this person see this record?" has two sources of truth, which is to say none: every audit reconciles two systems, every policy change is made twice (or — worse — once), and the inevitable drift between them *is* an access-control defect, discovered by whoever finds the gap first. Consolidating engines later costs more than almost any unification I've watched teams attempt; pay the integration tax to keep it to one.

And because enforcement is distributed, one new risk demands respect: **a bad policy push now has estate-wide blast radius at propagation speed.** A malformed rule, an over-broad deny, a typo'd wildcard — distributed in seconds to every enforcement point, exactly as designed. So policy deploys get the full discipline code deploys earned the hard way: CI that runs the policy test suite (allow/deny assertions against fixture requests), staged rollout to a canary slice of enforcement points, automated comparison of decision patterns against baseline — a sudden spike in denies (or, more sinister, in *allows*) halts the rollout — and one-command rollback to the previous bundle. Policy is code. Deploy it like you mean that.

## THE TEST

Two tests, one per failure mode, both schedulable this quarter.

**The latency test.** Under production-shaped load in staging — real traffic mix, real policy bundle, real entitlement data volumes — measure authorization overhead end to end: P50, P99, P999, *per request*, including hot paths that make dozens of decisions. The gate: P99 authorization overhead inside your budget (sub-100ms total is table stakes; local evaluation should deliver sub-millisecond per decision, and if it doesn't, look at policies doing data fetches at decision time — the classic regression that quietly reintroduces the remote hop). Then the shared-fate check: kill the central policy service entirely and re-run the load. Decisions must continue, uninterrupted, on last-good bundles, and the only alert should be bundle staleness — not a single failed request.

**The bad-push test.** Deliberately author a broken policy — an over-broad deny that would lock out a business-critical role is the instructive choice — and push it through your real pipeline. The assertions: CI's policy tests should catch it (if they don't, that's finding one — write the missing assertions); force it past CI to the canary, and the decision-pattern comparison must halt the rollout at the canary boundary with zero non-canary nodes affected; rollback must restore the previous bundle estate-wide in seconds, measured. If the bad bundle reaches full fleet, you've just learned — in staging, for free — that your policy pipeline has the same blast radius as the firm's twenty minutes, with none of the containment.

For the comments: **do you know, in milliseconds, what authorization costs on your hottest path — and how many places in your estate can answer "who may see this record" differently?** If the second number isn't "one," the first number is the least of it.

**Correct is a property you can test. Everything else is hope.**
