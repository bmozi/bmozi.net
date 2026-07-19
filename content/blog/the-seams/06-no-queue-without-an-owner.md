# No Queue Without an Owner

*Part 6 of The Seams, a series on systems thinking in architecture. Views my own; examples composite and anonymized from years of systems work.*

---

Here's a question that sounds administrative and is actually architectural, and I've come to believe it's one of the most revealing questions you can ask about any organization:

**Where can work wait, with nobody accountable, and nothing that happens automatically when it waits too long?**

Every one of those places is a black hole in formation. And in Part 1, black holes were the most common complaint pattern of all: *"I submitted everything they asked for and then heard nothing for weeks."*

## How black holes actually form

Nobody designs a black hole. They condense, from three innocent-looking conditions:

**Work that isn't an object.** The customer's submission exists as an email in an inbox, a row in a report someone runs on Tuesdays, an attachment in a shared drive. It has no durable identity of its own — no ID, no state, no lifecycle. You cannot track what doesn't exist as a thing.

**A queue owned by a team, which means owned by no one.** "The review team handles those." Ask *which human is accountable for this specific item* and watch the pause. Team ownership is how every individual reasonably assumes someone else has it. The customer is not being ignored by anyone in particular — which is precisely why they're being ignored.

**Time that passes silently.** The item has been waiting nine days. Nothing in the system knows that nine days is seven days too many. No timer, no threshold, no escalation. The only aging mechanism is the customer's patience, and the only alarm is their phone call — or their public review.

Notice that all three are structural. Not one is fixed by asking staff to care more. The staff usually care plenty; they're working inside a system where caring has no mechanism.

## The pattern that kills them

The fix is one rule with four mechanical parts. The rule: **no queue without an owner.** The parts:

**1. Every submission becomes a first-class object at the moment of arrival.** It gets a durable ID and an explicit lifecycle — received, in review, needs-information, resolved — the instant it enters, before any human touches it. Not when someone gets around to logging it: *at arrival, automatically.* If it can be submitted, it can be tracked; that's an invariant, not a feature.

**2. Every state has a named, accountable owner.** Not a team — a role that resolves to a person, visible on the item itself. Reassignments are explicit events (Part 3 applies: attributable, reasoned, notified). When ownership must transfer — a handoff between departments, the Part 1 dropped-handoff zone — the transfer is itself a tracked state, so the item can never be "between" owners. Between is where customers die.

**3. Every state has a clock, and the clock has consequences.** Each lifecycle state carries an expected duration. When an item ages past threshold, escalation *happens* — it doesn't get requested, it happens: the item appears in a supervisor's queue with full context, as an automatic consequence of time passing. A dead-man's switch for work. The system defaults to noticing, and silence requires effort, instead of the reverse.

**4. The customer sees all of it.** Here's what you sent. Here's its state. Here's who owns it. Here's what happens next, and by when. The same facts the staff see, projected to the person who cares most. This one component quietly eliminates a huge share of inbound contact volume — every "just checking on the status" call is a query your system forced a human to run by phone.

If you've been following the series, you'll recognize the plumbing: the submission emits `document.received`, state changes emit events with actor and reason, the status view and the escalations are all just consumers of the same stream (Part 4). None of this is exotic. It's the disciplined application of things your team already knows how to build.

{{visual:queue-owner-clock}}

## "We have SLAs" — no, you have aspirations

Most organizations, told this, point to their SLA documents. But look closely at what those SLAs attach to. Almost always: *response* time within one team's tool. First reply in the ticketing system. Time-to-answer in the call center.

The customer's black hole isn't in any of those. Their submission crossed three systems and two departments; each hop met its local SLA or was invisible to it, and the end-to-end journey took six weeks with three silent days between each hop. Local SLAs on a fragmented journey are how everyone's dashboard is green while the customer writes the review from Part 1.

An SLA that isn't attached to a tracked object with a named owner and an automatic consequence isn't a service-level agreement. It's a service-level aspiration. The difference between the two is exactly the four mechanical parts above.

## The org-chart objection

One pushback deserves a straight answer: "Automatic escalation will make people feel surveilled." I've heard it every time, and the fear inverts reality.

In a black-hole system, when things finally explode, blame lands on whoever answers the phone — usually the person *least* responsible for the structural failure. Named ownership with visible clocks protects the workers: it makes workload visible (the case for more staff writes itself from the aging data), makes handoffs explicit (no more "I thought you had it"), and puts accountability on the design of the flow rather than the heroics of individuals. In my experience frontline teams embrace this pattern fastest — they're the ones who've been apologizing for the black holes without the power to fix them.

## The Monday test

List your queues. All of them — the official ones in tools and the unofficial ones in inboxes, spreadsheets, and "the Tuesday report." For each, three columns:

1. Is each item in it a durable object with an ID and a state?
2. Who — resolvable to one person — owns an item that sits there today?
3. What happens *automatically* when an item waits too long?

Any row with a blank in column 2 or 3 is a black hole in formation, and now you have the map. Next week: the biggest question in any build — what deserves your engineers at all — and why "greenfield" means choosing your ground, not building everything.

**The tools were never the gap. The seams were.**

---

*How many queues did you find that flunked column 3? The honest counts are the interesting ones.*
