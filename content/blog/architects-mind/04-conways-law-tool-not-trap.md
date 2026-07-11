# Conway's Law Is a Tool, Not a Trap

*Part 4 of The Architect's Mind, essays on judgment for senior technologists. Views my own; examples composite and anonymized from years of systems work.*

---

I once spent the better part of a year trying to refactor two billing systems into one, and failed completely — then watched a reorg accomplish it in six months without anyone writing a design document.

The two systems existed because two business units had once been separate companies. Every technical argument for consolidation was airtight: duplicated logic, double the compliance surface, customers who appeared in both with different balances. I had diagrams. I had a migration plan. I had executive nods. What I didn't have was any force capable of overcoming the fact that two directors, with two roadmaps and two sets of incentives, each owned half of my target architecture. Every integration milestone died in prioritization. Not through malice — through physics. Each team, quarter after quarter, rationally served its own boundary.

Then the business restructured for unrelated reasons, the two units merged, one leader inherited both systems — and the consolidation I'd failed to argue into existence simply *happened*, pulled along by the new org shape the way water finds level. The new team couldn't tolerate running two billing systems, because the seam that had made two systems natural no longer existed anywhere except in the code. Within eighteen months the code agreed with the org chart, as it always eventually does.

I tell this story against myself because of what I was doing during that failed year: quoting Conway's Law in every deck, as a lament. "Organizations ship their communication structures." Nodding wisely at it, like weather. It took the reorg to teach me that I'd been holding a power tool by the wrong end.

## The tension

Conway's Law is probably the most-quoted, least-wielded idea in software. Everyone above a certain seniority can recite it; almost everyone deploys it as *fate* — an explanation for why the architecture is the way it is, a resigned shrug with a citation. The system mirrors the org chart; the org chart is someone else's department; therefore the architecture is someone else's weather. QED, and back to drawing diagrams the org will quietly veto.

But read the law again and notice it has no moral. It doesn't say the mirroring is bad. It says the mirroring is *reliable* — one of the very few reliable forces in this profession. And a reliable force is not a trap. A reliable force is a tool, the way gravity is a tool to anyone building an aqueduct. The senior question is never "how do we escape Conway's Law?" — you don't, any more than the aqueduct escapes gravity. The question is: given that team structure and system structure will converge no matter what I do, *which one am I going to design, and am I designing them as one thing?*

Because that's the actual claim I want to make, and it's stronger than the usual "inverse Conway maneuver" framing: team boundaries and system boundaries are not two design problems that influence each other. They are *one design act* that most organizations split between two rooms — architecture drawn in one, org charts drawn in another, each room politely undoing the other's work. The architect who only draws systems is designing half an artifact and wondering why it won't hold its shape.

## Wielding it

What does wielding look like in practice? Three moves, in increasing order of nerve.

The first is passive but non-negotiable: never propose an architecture without overlaying it on the org chart. Every boundary in your design either coincides with a team boundary, or crosses one — and every crossing is a place where your design requires two groups with different backlogs to continuously cooperate. Some crossings are worth it. But each one should be priced, explicitly, as the most expensive kind of dependency you can create: a dependency on sustained human alignment. When I review designs now, I spend more time on this overlay than on the technology choices. The technology has never once been what killed the design.

The second move is the famous inverse maneuver: when you need an architecture, build the team that would naturally produce it, and let Conway do the construction. Want a platform with a real API instead of a shared library everyone forks? Then you need a platform *team* with external consumers it doesn't manage, because that team will be forced by its own pain into building the contract you want. This works — it's the most powerful refactoring tool I know — but say the quiet part: reorganizing humans to reshape software means people's managers, careers, and daily relationships are your building material. Wield accordingly. An architect who moves boxes on the org chart with the same breeziness he moves boxes on a diagram deserves the resistance he gets, and the resistance carries information: an org chart is an architectural diagram *with feelings*, and the feelings are load-bearing. Trust between two specific leads can make a "wrong" boundary work brilliantly; its absence can make a textbook boundary bleed.

Which is the third move, and the one that took me longest: knowing when *not* to fight the org shape. Sometimes the existing structure encodes something real — a regulatory wall, a market seam, a hard-won trust topology — and the "clean" architecture that ignores it is the naive artifact, not the org chart. My billing consolidation was right *eventually*, but as long as the business genuinely operated as two units, two billing systems were arguably the honest architecture, and my unified design was a lie about the company waiting to be vetoed. The judgment call is distinguishing org shapes that encode reality from org shapes that encode history. Fight history. Respect reality. And accept that telling them apart is exactly the kind of call no pattern will make for you.

## The counterargument, taken seriously

The strongest objection comes from architects with scars: *stay in your lane. The moment you treat the org chart as your design surface, you've entered politics without portfolio — you own none of the people, carry none of the management accountability, and your "one design act" is a land grab that will burn your credibility on ground where you're an amateur.*

This is more right than most architects want to hear, and the answer is not to retreat from the claim but to relocate it. The unified design act is real, but your role in it is *advisory on one half*. You bring the systems consequences of org shapes to the people who own the org shapes — with the same rigor, evidence, and humility you'd want a finance partner to bring when telling you your architecture is unaffordable. "If these remain two teams, we will run two billing systems forever, and here is what that costs" is an architect doing her job. Redrawing the teams herself is not. The tool is Conway's Law; the wielding is a partnership with whoever owns the people — and if no such partnership exists in your organization, *that*, not any diagram, is the architectural gap to fix first. In Part 1's language: team boundaries are one-way doors that you, personally, don't get to open. But you're the one who can see where the doors are.

## The challenge

Print your service diagram. Print your org chart. Overlay them — physically, if you can bear the projector jokes.

Every place they match, ask: is this reality or history? Every place they diverge, ask: is this a bug or a plan? A divergence that nobody chose is Conway's Law mid-swing — the code and the org are converging right now, whether or not anyone is steering. There are only two states: either you're wielding the law, or you're material for it.

**Patterns are free. Judgment is earned.**

---

*Where has a reorg out-refactored your best design doc? I'll go first: billing, two systems, one humbling year. Your turn in the comments.*
