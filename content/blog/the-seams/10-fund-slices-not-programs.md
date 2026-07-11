# Fund Slices, Not Programs

*Part 10 — the finale of The Seams, a series on systems thinking in architecture. Views my own; examples composite and anonymized from years of systems work.*

---

Every idea in this series eventually meets the same predator, and it isn't a skeptical architect or a rival vendor. It's the funding model.

You know the shape. The diagnosis is right, the design is sound, the room is persuaded — and so the organization does the natural thing: it rolls everything into a Program. Capital P. A multi-year budget, a steering committee, a target operating model, a go-live date eighteen months out that everyone privately knows is fiction.

I've watched the Program kill more good architecture than every technical mistake in this series combined. So the finale is about the delivery model that lets systems thinking actually survive contact with an organization — and it rests on one substitution: **fund slices, not programs.**

## Why big bangs die of their own mass

The mega-program fails for reasons that have nothing to do with the quality of its design:

**Its feedback arrives too late to matter.** For eighteen months, the only outputs are documents and demos. By the time real customers touch real workflows, thousands of decisions are already frozen — every wrong assumption fully load-bearing.

**Its risk compounds instead of retiring.** Each month adds integration surface, staffing dependencies, and sunk cost. The Program becomes too big to fail precisely as the evidence that it's failing accumulates — so the evidence gets managed instead of the risk.

**It's always one budget cycle from worthless.** A sponsor departs, a downturn arrives, priorities shift — and a 60%-complete Program is worth approximately nothing. Not 60% of the value. Nothing. All spine, no limbs.

**And the cutover is a cliff.** Somewhere at the end waits a migration weekend on which everything depends — the single highest-risk event in enterprise computing, scheduled deliberately, at maximum scale, after maximum fatigue.

None of these are execution failures. They're *properties of the shape.* A different shape avoids them by construction.

## The slice

A slice is the thinnest end-to-end thread of the target architecture that eliminates one class of real pain for real customers. Not a layer ("first we build the platform"), not a phase ("discovery, then design") — a *thread*, top to bottom: one workflow, one owner, one measurable promise, live in production, in about ninety days.

If you've followed this series, you've already seen the ideal first slice. Take the black-hole pattern from Part 6: one document type gets a durable ID at arrival, a lifecycle with a named owner, an automatic escalation clock, and a customer-visible status view — wired with the event patterns from Part 4, honoring the nothing-silent rule from Part 3, measured by the promise-numbers from Part 9. One team. One quarter. And on the day it ships, an entire complaint category from Part 1 becomes structurally impossible for that workflow.

Now the part that makes it a funding model rather than a pilot: **each slice carries its own evidence and buys the next one.** The slice ships with its numbers — status-visibility time, contact-volume reduction, escalation coverage — measured honestly, against a baseline or a holdout, so the effect can't be borrowed from wishful narrative. Leadership doesn't fund Phase 2 of a promise; it funds the sequel to a result. Slices that can't demonstrate an effect don't get sequels — which sounds harsh and is actually the kindest property in the model, because it kills weak ideas at slice-size instead of Program-size.

## Drain, don't migrate

And the cliff? The cohort principle removes it: **new work enters the new system; old work finishes where it started.** New submissions, new cases, new customers onboard onto the new thread from day one. Existing in-flight work completes on the legacy path. Nothing is migrated under pressure; the old system *drains* — workload by workload, cohort by cohort — until decommissioning is an accounting event rather than a weekend of terror.

For the genuinely hard residue — historical records that must move because they're forever — the transfer of authority is explicit, audited, and per-domain: one date on which the new system becomes the official owner of *that* truth, verified by parallel-run before, never an ambiguous era of "both." The two most dangerous words in transformation are "dual running"; the cure is one owner per fact at every moment, which regular readers will recognize as Part 2's lesson, applied to time.

Notice what the finish line looks like in this model: visible from the start, and getting closer every quarter — the drain percentage, the retired workflows, the complaint categories extinguished. Compare that to the Program, whose finish line famously recedes. Momentum is a systems property too.

## The series, in one paragraph

Ten weeks ago I asked you to reread your complaints as system outputs. Since then: the failures live in the seams, not the tools; silence is an architectural choice; events circulate truth but rarely are it; every design deserves its own prosecution; every queue deserves an owner; every build-vs-buy deserves the ground-choosing test; AI-readiness is system quality wearing a new name; and trust is numbers with consequences. This finale is where they all cash out — because every one of those ideas is only as real as the delivery model that carries it. Systems thinking that ships as a mega-program isn't systems thinking. It's the old religion with new vocabulary.

## The last Monday test

Take your grand vision — the target architecture, the transformation deck, the thing you believe in. Now answer one question:

**What is the thinnest end-to-end slice of it that a real customer would feel in ninety days — and what number would prove they felt it?**

If you have an answer, you don't need a Program. You need a team, a quarter, and the discipline to let the evidence do the persuading. If you don't have an answer yet — that's not a verdict on your vision. It's just the next piece of architecture to design: the shape of the proof.

Thank you for reading this series. The ideas are free — they were mostly paid for by systems that failed people who deserved better. Use them on a system near you.

**The tools were never the gap. The seams were.**

---

*What's your ninety-day slice? Name it in the comments — specifically. The difference between a vision and a plan is that a plan has a first slice.*
