# Reversible and Irreversible: Pacing Decisions by Their Physics

*Part 1 of The Architect's Mind, essays on judgment for senior technologists. Views my own; examples composite and anonymized from years of systems work.*

---

In the same week, at the same company, I watched two decisions get made.

The first was a message broker selection. Two credible options, both proven at our scale, both wrapped — at my insistence — behind an interface thin enough that swapping later would have been a quarter's work for one team. That decision took eleven weeks. There were bake-offs, scoring matrices, a steering committee, a deck with a weighted-criteria tab that I am confident nobody's weights survived contact with.

The second was the format of the customer identifier for a new platform — the string that would appear in every API response, every downstream system, every partner integration, every printed letter. That decision was made in eight minutes at the end of an unrelated meeting, by whoever happened to be in the room, because it seemed small. It encoded the region and the acquisition channel into the ID, because that was convenient for a report someone needed that month.

A decade later, the broker had in fact been swapped — uneventfully, in roughly the quarter we'd estimated. The customer ID was still there. It had survived two re-platformings, leaked business logic into forty systems that parsed it, and blocked a corporate restructuring for most of a year because the region embedded in a hundred million identifiers no longer existed.

Eleven weeks on the reversible decision. Eight minutes on the permanent one. And here is the uncomfortable part: at the time, almost nobody in that building — including, for too long, me — thought anything was wrong with that allocation.

{{visual:mind-door-physics}}

## The tension

You know the two-door model. Everyone knows the two-door model; it has been in shareholder letters and keynotes for years. Type 1 decisions are one-way doors — walk through and you can't come back. Type 2 decisions are two-way doors — walk through, look around, walk back if you don't like it. Move slowly and deliberately on the first kind; move fast on the second, because the cost of a wrong reversible decision is small and the cost of deciding slowly is paid on every decision.

That's the pattern. It's free. A language model will recite it to you flawlessly, which is precisely my point in this series: knowing the pattern and possessing the judgment to apply it are different skills, and only one of them has been commoditized.

Because in practice, most organizations don't pace decisions by their physics at all. They pace them by their *social weight* — by budget line, by how many VPs are watching, by whether there's a vendor and therefore a procurement process. Big-ticket, high-visibility decisions get ceremony regardless of reversibility. Quiet, technical, "implementation detail" decisions get made in hallways regardless of permanence. The result is an organization that is slow on the trivial and terrifyingly fast on the permanent — the exact inversion of what the model prescribes, achieved while everyone in the building can quote the model.

## Classification is the actual skill

So the discipline isn't the two-door model. The discipline is classifying honestly, and classification is harder than the slogan admits, because doors lie about which kind they are — in both directions.

Many decisions that arrive wearing the costume of irreversibility are reversible *if you engineer the exit at entry*. A vendor commitment is a one-way door if your data lives in their proprietary formats and their SDK is called from nine hundred places; it is a two-way door if you insisted on exportable data, an anti-corruption layer, and a tested exit plan before signing. The reversibility of most big decisions is not a property you discover. It is a property you *build*, and it is cheapest to build at the moment of commitment — which means the senior move on a scary decision is often not "slow down" but "spend two weeks making this reversible, then move fast." You haven't just made one decision safer; you've converted its type.

Meanwhile, the genuinely permanent decisions in a system are rarely the ones with steering committees. They are the small ones with enormous fan-out: data models, because a thousand downstream consumers will fossilize your first draft of reality. Public contracts, because the moment an external party depends on a field, that field belongs to them. Identifier formats, as my eight-minute meeting learned. Names — of services, of domains, of concepts — because names shape how a decade of engineers will *think*, and thinking is the hardest thing to migrate. The tell is always the same: how many parties, outside your control, will make decisions of their own on top of this one? Fan-out, not budget, is what welds a door shut. Anything that crosses a boundary you don't own should be treated as permanent until proven otherwise, no matter how small it looks on the day.

Once you see classification as the real skill, pacing becomes the architect's core scheduling act. Not designing every component — you can't, and shouldn't. But maintaining, explicitly, the short list of decisions that are actually one-way, dragging them out of hallways and into daylight, and just as importantly *releasing* the two-way decisions from ceremony they don't deserve. Half of the value I've added in review boards was not improving decisions but re-pricing them: "this one is cheaper to try than to analyze — go," and "this one looks small and is forever — stop."

## The counterargument, taken seriously

The strongest objection I know: *everything is irreversible, so the model is a comforting fiction.* Every decision burns time, morale, and credibility you never get back. The swapped broker still cost a quarter; the "reversible" experiment that failed still taught the organization to distrust the next one. Real doors all swing one way, because time does.

I think this objection is correct — and incomplete. Yes, reversal is never free; the two-way door has a toll. But the objection collapses a distinction that matters enormously in practice: the difference between a decision whose reversal costs a team-quarter and one whose reversal costs a company-decade, or is simply unavailable at any price. Treating everything as irreversible doesn't make you careful. It makes you *uniformly* careful, which is the same pathology as the steering committee: one speed for all physics. The model's job was never to promise free undo. It is to force the question — *what, exactly, would reversing this cost, and who has verified that?* — before the decision, instead of after. If your "two-way door" claim has never been tested by actually walking back through one, it is a hope, not a classification. Reverse something small on purpose, occasionally, just to keep the claim honest.

## The challenge

Take the last ten meaningful decisions your team or your organization made. For each one, write two things side by side: how long the decision took, and which door it actually was — judged by fan-out and by whether an engineered, tested exit exists, not by how it felt at the time.

If the two columns correlate, you're operating with unusual judgment and I'd like to know your secret. In my experience you'll find at least one eleven-week broker and at least one eight-minute customer ID — and finding your eight-minute ID *before* it blocks a restructuring is worth more than every scoring matrix in the building.

**Patterns are free. Judgment is earned.**

---

*What's the smallest decision that turned out to be permanent in your world? Name it in the comments — I'll bet at least half of them are data models and names.*
