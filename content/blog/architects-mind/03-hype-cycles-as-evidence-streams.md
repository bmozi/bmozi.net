# Reading Hype Cycles as Evidence Streams

*Part 3 of The Architect's Mind, essays on judgment for senior technologists. Views my own; examples composite and anonymized from years of systems work.*

---

The most educational machine I ever worked near was a Hadoop cluster on the day it was decommissioned.

It had been the centerpiece of a "data-driven transformation" — hundreds of nodes, a dedicated team, an executive sponsor who had used the phrase "our new central nervous system" in an all-hands. Seven years later a small crew powered it down, and I stood in the meeting where the final workloads were inventoried. Of everything the platform had promised, three things were actually being carried forward to its replacement: the habit of keeping raw data cheaply instead of throwing it away, a columnar query engine the analysts had come to depend on, and — this one surprised people — the organizational muscle of treating data pipelines as engineered software with owners and tests, which hadn't existed before the big-data era forced the issue.

Everything else — the everything-in-the-lake ideology, the MapReduce jobs, the belief that one platform should hold all truth — was written off. But those three survivals weren't debris. They were the *answer*. They were what the whole noisy, expensive wave had actually been carrying, findable in retrospect by anyone who looked at what the burned adopters kept using after the retreat.

That day changed how I read hype. I stopped asking "is this wave real?" — the question everyone argues about, and the wrong one — and started asking "what will the residue be?"

## The tension

Senior technologists mostly hold one of two postures toward hype, and both are ways of not thinking.

The first is the enthusiast's posture: the wave is the future, early adoption is courage, skepticism is how incumbents die. This posture is correct roughly once a decade and catastrophically expensive the rest of the time, and its bearers rarely stay to do the decommissioning.

The second is the cynic's posture: we've seen this before, it's all noise, wake me when it's boring. This one feels like wisdom — it even statistically outperforms the enthusiast, since most waves do recede. But it fails silently in the worst way: the cynic is wrong precisely about the waves that matter, and by the time boring arrives, the residue has been claimed by others. Cynicism about hype is just enthusiasm with the sign flipped — both let the crowd do your reasoning.

The judgment-bearing posture is neither. It treats every hype wave as an *evidence stream*: a massive, distributed, someone-else-funded experiment about what actually works, whose results arrive continuously if you know where to sample. The wave is thousands of organizations stress-testing an idea against reality at price points you'd never pay. Your job is not to surf it or to mock it. Your job is to read the instruments.

## The residue is the signal

Here's the extraction method, and it is deliberately unglamorous.

Ignore the adoption announcements; they measure marketing budgets and FOMO. Ignore the backlash think-pieces too; they measure the same thing, inverted, two years delayed. The information-dense moment in any hype cycle is the *retreat* — when the burned adopters, who paid full tuition, quietly decide what to keep. Retreating organizations have no incentive to posture. They are spending real money to unwind the mistake, and everything they *choose to carry* through that unwinding has passed the most honest test in our industry: it survived its own hype's funeral.

Run past waves through this lens and the pattern is striking. Microservices: the retreat shed the nano-service absurdities — hundreds of functions-pretending-to-be-services, distributed monoliths with network calls where function calls used to be — but nobody, and I mean nobody, gave back the residue: explicit contracts between components, CI/CD as table stakes, independently deployable units where team boundaries genuinely demand them. The wave overshot on *granularity* and was permanently right about *decoupled delivery*. Big data, as my funeral story told it: shed the Hadoop-everything theology, kept cheap immutable storage, columnar analytics, and pipelines-as-engineering. NoSQL: shed "relational is dead," kept the legitimization of purpose-built stores and the hard-won respect for what transactions had been doing for us all along. Even the blockchain winter left residue — mostly a generation of engineers who deeply understand consensus, immutability, and key management, now employed doing saner things with that knowledge.

Notice the shape that recurs: waves are usually *directionally* right and *totally* wrong. The claim "X changes everything" fails; the claim "X changes something specific" — which was never the headline — succeeds. So the forward-looking skill, the one that actually pays, is predicting the residue *mid-wave*: which specific capability inside the noise is doing real work, such that burned adopters will keep it? You can often spot it by asking what practitioners use *even when nobody's watching* — the tool reached for at 2 a.m. during an incident, not the one in the conference talk.

Positioning an organization then stops being a bet on the wave and becomes a bet on the residue, which is a far better-priced wager. You adopt the probable residue early and directly — cheap storage, contracts, whatever the 2 a.m. tool is — while renting, containing, and time-boxing your exposure to the ideology around it. Done well, the organization experiences the whole cycle without whiplash: no heroic all-in, no humiliating retreat, no morale-shredding "we're pivoting away from the thing we said was our nervous system." The wave passes through; the residue stays; nobody has to be publicly wrong. In Part 1's terms: adopt the residue as the reversible bet it usually is, and treat wave-ideology commitments as the one-way doors they usually are.

## The counterargument, taken seriously

The strongest objection: *residue-reading is structurally late. By the time the burned adopters are retreating, the strategic advantage has been captured by whoever went early. Your method reliably harvests table stakes while competitors were harvesting differentiation — and for a genuinely transformative wave, "waiting for the residue" is how incumbents die politely.*

This deserves a real answer, because it's half right. Yes: if a wave is existential for your business — if it attacks your core value proposition rather than your tooling — you cannot wait for someone else's tuition receipts. You must run the experiments yourself and pay for your own evidence. But notice that this doesn't refute the method; it tells you where to point it. The judgment call is sorting waves into "this is about how we build" — where residue-reading is nearly always right, because build-tooling advantages are transient and mistakes are pure cost — versus "this is about what we sell," where you must become one of the early adopters others will later read. Most organizations get this exactly backwards: they bet the company on tooling waves and wait cautiously on the waves aimed at their revenue. Reading the stream doesn't excuse you from ever surfing. It tells you which wave is worth the wipeouts.

## The challenge

Take the wave currently washing through your organization — you know the one. Write down, today, dated, your prediction of the residue: the two or three specific capabilities the burned adopters will still be using after the retreat, and the ideology they'll shed. Seal it in your notes. Reread it in three years.

This isn't a party trick. Writing the prediction forces the separation — signal from noise, capability from theology — *while the wave is loud*, which is exactly when your organization needs someone able to make that separation. And scoring yourself in three years is how the skill compounds. The enthusiasts and the cynics never keep score. That's what makes them cheap.

**Patterns are free. Judgment is earned.**

---

*What's your residue prediction for the current wave? Post it — specifically, and date it. The comments section can be our collective time capsule.*
