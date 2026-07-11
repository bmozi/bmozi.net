# Holding a Ten-Year Picture While Shipping Humble Slices

*Part 2 of The Architect's Mind, essays on judgment for senior technologists. Views my own; examples composite and anonymized from years of systems work.*

---

The best architect I ever watched fail had the most beautiful target-state diagram I have ever seen.

It was genuinely good — not vendor-deck good, actually good. A ten-year picture of the enterprise with clean domain boundaries, sane data ownership, an integration fabric that would have retired half the organization's chronic pain. He presented it with total conviction, and he was mostly right, which I can say with confidence because over the following decade the industry drifted toward almost everything in that diagram.

He never got a dollar for it. Not seriously. He got applause, a working group, and a slow professional death by a thousand "great vision, but this quarter…" conversations. He left after three years, embittered, convinced the organization lacked courage. The organization, for its part, was convinced he lacked realism. They were both right, which is what makes the story worth telling.

I've also watched the opposite failure, more times than I can count: the architect with no picture at all — just an endless sequence of sensible, incremental, locally-defensible deliveries that compounded into a system with no shape. Every slice justified. The sum, a landfill. Ten years of shipping and nothing you could call a direction, because direction was never anyone's deliverable.

Between these two failures sits one of the hardest judgment problems in this profession, and I've never seen it taught: how do you hold a ten-year conviction while shipping ninety-day evidence — without the conviction hardening into dogma or dissolving into drift?

## The tension

The tension is real, not rhetorical, so let's state both sides at full strength.

The case for conviction: no significant architecture has ever emerged from pure increments. Somebody held a picture — of the domain model, of the platform, of what the company would need to be true in year eight — and that picture did work that no slice could do, because slices optimize locally and pictures are the only defense against a locally-optimal landfill. Evidence can only tell you about the terrain you've already walked.

The case for evidence: every ten-year picture is wrong. Not slightly wrong — wrong in ways you cannot predict, because the business will pivot, the technology substrate will shift under you, and three of your load-bearing assumptions will quietly expire. An architect who defends the picture against the evidence isn't showing conviction; he's showing that he's stopped learning, with tenure.

Most architects resolve this tension by picking a side and calling it a philosophy. Visionaries sneer at incrementalists as short-sighted; incrementalists sneer at visionaries as unfundable. Both sneers are self-portraits.

## Commitment is not attachment

The discipline that resolves it — as far as I've found one — hangs on a distinction I stole from an entirely different tradition: the difference between commitment and attachment.

Commitment is to the destination and the reasons for it. Attachment is to the route, the diagram, the specific boxes — to the picture *because you drew it*. The two feel identical from the inside, which is exactly the problem. Both feel like conviction. Both make you eloquent in meetings. The difference only becomes visible under contact with evidence: when a shipped slice contradicts the picture, the committed architect is curious and the attached one is threatened.

So the practical discipline is to engineer regular contact, and to keep score in public. Concretely, it has three parts, and they're prose-simple even if they're emotionally hard.

First, the picture must be written at the altitude of *forces, not boxes*. A ten-year picture that specifies technologies is attachment pre-committed to; a ten-year picture that says "these four domains must be able to change at independent speeds, because the business will always move faster on pricing than on settlement" can survive any number of technology funerals. The durable part of my failed colleague's diagram was never the boxes — it was the forces he'd understood. He packaged the insight inside the implementation, so when people doubted the implementation they discarded the insight.

Second, every slice must be honestly scored against the picture — in both directions. The slice is not just a delivery; it is an experiment the picture must survive. When a slice ships and the domain boundary you predicted turns out to cut through the middle of a real workflow, the picture takes the edit, visibly, with a dated note about what changed your mind. I keep a literal revision history of my north-star documents, and the revision log is the most credibility-building artifact I own. It proves the picture is alive. An unrevised vision document is not a sign of foresight; it is a sign that nobody, including its author, is taking it seriously enough to test.

Third — and this is what my failed colleague never did — the picture must never be the thing you ask money for. You fund slices; the picture is *how you choose them*. Its job is to make each ninety-day increment land in a place that will still matter in year eight, so that value compounds instead of accumulating. Said differently: the vision is not a proposal, it's a *sequencing function*. The organization doesn't need to buy your decade. It needs to buy your next quarter, repeatedly, and find each one worth more because a decade of thought stood behind the ordering.

## The counterargument, taken seriously

The sharpest objection: *this is survivorship dressed as method. Revise the vision with every slice and in five years you'll have "evolved" your way into pure drift — each edit locally reasonable, the sum a slow surrender to whatever the org already wanted. Your revision log will just document the erosion.*

I've seen exactly that happen, so I won't wave it away. The failure mode is real, and the defense is uncomfortable: some parts of the picture must be *load-bearing* — declared in advance as the convictions that, if they fall, mean the whole picture is wrong and should be replaced, not patched. The forces, usually; rarely more than three or four sentences. Everything else is negotiable with evidence, but those few are not adjusted incrementally — they're either held or publicly abandoned. If every part of your vision is revisable, you don't have a vision; you have a mood board. And if no part is revisable, you have a religion. The judgment call — which is why this can't be commoditized into a template — is knowing which three sentences are which. Nobody can make that call for you, and you will be accountable for it either way.

## The challenge

Write your ten-year picture in one paragraph. Forces, not boxes. Then answer two questions in writing. Which sentences are load-bearing — the ones whose fall would mean the picture is dead rather than dented? And when did a shipped slice last change any of the others?

If nothing shipped has ever edited your vision, you're attached, and the organization can smell it even if you can't. If everything shipped edits it, you're drifting, and in five years you'll have delivered someone else's architecture one reasonable increment at a time. In Part 1 I argued that classifying decisions is the architect's core scheduling act; this is its strategic twin — classifying your own convictions, honestly, before the evidence does it for you.

**Patterns are free. Judgment is earned.**

---

*What's the load-bearing sentence in your ten-year picture — the one you'd resign over rather than revise? If you can't name it in a comment, that's data too.*
