# Systems That Process People

*Part 7 of The Architect's Mind, essays on judgment for senior technologists. Views my own; examples composite and anonymized from years of systems work.*

---

Years ago, reviewing a workflow system I had helped design, I was shown a dashboard I'd asked for. It was a good dashboard. Queue depths, processing times, exception rates — all green. Median time-to-decision was well inside our target. The team was proud, and they had earned it.

Then, for reasons I no longer remember, I asked to see the oldest item in the queue instead of the median. It was an application — I'll keep the domain vague; it was the kind of application on which a family's next year quietly depends — that had been sitting in a manual-review state for sixty-one days. It had fallen into a category our routing rules didn't recognize, and the exception path terminated in a work queue that a reorganized team no longer monitored. No alert had fired, because no alert had been designed; the aggregate SLA was healthy, and the aggregate was what we had instrumented. Somewhere outside our building was a person who had checked a status page for two months and seen the same word every time: *processing*. They had done everything right. The system had not said no to them. It had simply stopped speaking.

I have designed worse failures and better systems since, but that queue item is the one I keep, because of what I understood standing at that dashboard: every number on the screen was someone's month. We had built the system as if we were processing applications. We were processing people.

{{visual:mind-people-queue}}

## The tension

This essay is the one in the series I most expect to be politely skipped, so let me state the tension without decoration.

Architects work at a level of abstraction where people appear as records, requests, and load. That abstraction is not a moral failure — it is the job; you cannot design a system for two million applicants by contemplating each one. But the abstraction has a property we rarely name: it is *harm-concealing*. A latency distribution hides the family at p99. A default-deny rule looks, in a design review, like prudent security posture; at street level it is a person refused something they were entitled to, for no reason anyone can articulate, with no path to a human. A retry policy that silently times out is, from inside the diagram, a clean failure mode; from outside it is an enrollment that never happened, discovered in January at a pharmacy counter.

The industry's standing answer is that these are product decisions, policy decisions, someone else's decisions. And here is the uncomfortable claim I have come to believe: the org chart is engineered — not maliciously, but effectively — so that everyone can disclaim these harms. The product owner set the rule but didn't design the timeout. The engineer built the timeout but didn't set the rule. The operations team ran the queue but didn't create the category. Legal reviewed the words but not the flow. Each disclaimer is locally true. And the architect is the only person in the building whose role is to see the whole machine — the rule, the timeout, the queue, and the person moving through all of them. Accountability that everyone else can honestly disclaim does not evaporate. It rolls to whoever can see the whole. That is us. That is the price of the vantage point, and it is not negotiable just because it isn't in the job description.

## Dignity as a design requirement

If you accept the accountability, the question becomes practical: what does it change in the actual work? Over the years I've reduced it to a small set of requirements I now treat as architectural — as non-negotiable as consistency or durability — for any system whose queue is someone's mortgage approval, medical referral, benefit claim, or enrollment.

The first is visibility: a person inside your process can always see where they are, in their terms, not yours. Not *processing* — that word is the lie the dashboard told me. Which stage, what happens next, and when the state last changed. The engineering cost of honest status is small. What it actually costs is the organization's comfort, because honest status exposes your queues to the people waiting in them — which is precisely the accountability that makes the queues get better.

The second is notice: nothing consequential happens to a person silently. If their case changes state, stalls beyond a threshold, or is waiting on them, they are told — proactively, in language a tired person can parse at midnight. The sixty-one-day application was not primarily a routing failure. Routing failures are inevitable. It was a *notice* failure: a system that could stop speaking to someone for two months without any part of it considering that an incident. Silence, in a system that processes people, is not a neutral state. It is an outcome, and it should be as impossible to ship accidentally as data loss.

The third is appeal: every automated decision that materially affects a person has a path to a human with authority to differ, and the path is findable, affordable in time and dignity, and actually staffed. The quiet violence of the default deny is not the denial itself — some denials are correct. It is denial *without recourse*: the rule fires, the case closes, and the burden of reopening it lands on the person least equipped to carry it, armed with a support number that leads back to the same rule. When we design the happy path at length and the appeal path not at all, we are making a statement about whose time matters, and the system will repeat that statement millions of times with perfect fidelity.

The fourth is the hardest, because it constrains the other three: the worst case is a design input, not a tail statistic. Medians describe throughput; harm lives at the percentiles. The review question I now ask on every such system — the one I wish I had asked years earlier — is not "what's the SLA?" but "tell me the story of the person the system serves *worst*, end to end, and show me what the system owed them at each step." If the room cannot tell that story, the design is not done. Not because the diagram is wrong — because nobody in the room has stood at street level and looked back at it.

## The counterargument, taken seriously

The strongest objection is not cynical; it is fiduciary. *Every requirement you've named has a cost — engineering time, operational staffing, slower automation — paid from a finite budget that also funds serving more people, sooner. Appeal paths staffed by humans don't scale; that's why the automation exists. You are spending other applicants' throughput on ceremony for edge cases, and the utilitarian arithmetic may not forgive you.*

I take this seriously because it is often argued in good faith by people who carry the budget, and because it is sometimes right in the small. But it fails in the large, twice. Empirically: systems without visibility, notice, and appeal do not actually run cheaper — they run their support costs through other channels: call centers absorbing the silence, regulators absorbing the appeals, incident response absorbing the sixty-one-day discoveries, and eventually courtrooms absorbing the rest. Dignity deferred is not dignity saved; it is dignity moved to a more expensive department. And structurally: the arithmetic that trades the p99 human against aggregate throughput assumes harm at the tail is a cost like any other, fungible with latency. It is not, because the people at the tail did not volunteer for the trade and are, with grim reliability, the ones with the least slack to absorb it. A system that is excellent on average and merciless at the margin has a name in every domain older than ours, and the name is not "efficient."

## The challenge

Pick one system you're accountable for that processes people — there is one; if you think there isn't, look at what's downstream of your queues. Trace one worst-case human through it: not the median, the p99 person. The mis-categorized case, the stalled review, the default deny. Write down, at each step, what the system owed them — visibility, notice, appeal — and what it actually gave them.

Then find your own sixty-one-day queue item. It exists. It is sitting in an unmonitored state right now, aggregated into a green number, and someone outside your building is checking a status page. The dashboard will not show it to you. You have to ask for the oldest item, on purpose. That question — asked routinely, not once — may be the most consequential architecture review you run this year.

**Patterns are free. Judgment is earned.**

---

*What does your system owe the person it serves worst? I'm asking literally — write the sentence. It's harder than it looks, and it changes the backlog.*
