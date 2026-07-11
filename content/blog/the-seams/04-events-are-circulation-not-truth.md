# Events Are Circulation, Not Truth

*Part 4 of The Seams, a series on systems thinking in architecture. Views my own; examples composite and anonymized from years of systems work.*

---

Somewhere in your organization, there is probably an architect who wants to put everything on an event stream and rebuild the world from the log. There's also probably a database veteran who thinks event-driven architecture is a fad that ends in tears.

I've been both of those people. This article is what I believe after being both.

## The oversell and the overcorrection

Event sourcing — keeping every change as an immutable event and deriving current state by replay — is a genuinely beautiful idea. Perfect audit history. Time travel. Rebuild any view from first principles. For a certain kind of engineer (I'm one), it's love at first sight.

Then the retrospectives started arriving, and they're brutal reading. Teams drowning in schema evolution as decade-old events stopped matching current code. Privacy laws colliding with "immutable forever." Projections lagging behind writes so a user submits something and the very next screen says it doesn't exist. Entire sprints spent on event-plumbing instead of product.

So the industry swung back: *just use a database like a normal person.* And that overcorrection throws away the one thing the event people were unambiguously right about.

Here's the middle that actually holds up, and it fits in two sentences:

**Your systems of record stay sovereign — boring, transactional, immediately consistent. And every meaningful fact that happens in them also flows outward as a well-named event — circulation, not truth.**

## The circulatory system

Think of it anatomically. Your systems of record are organs: each owns one kind of truth and does its job with full integrity. The event stream is the bloodstream: it carries facts *between* organs so the whole body knows what's happening. Nobody thinks blood is where the body stores its organs.

Concretely, the pattern is three rules:

**1. Writes go to the owner, and readers of their own writes read the owner.** When someone submits, changes, or acts, that hits the system of record in a plain transaction, and the very next read shows it. No one ever waits on a stream to see their own action. This single rule eliminates the worst event-architecture failure — "I submitted it and your system says I didn't."

**2. The change and its announcement are one atomic fact.** The system of record writes its state change and its outgoing event in the same transaction (the "outbox" pattern — one of the highest-value, least-glamorous patterns in distributed systems). A relay publishes it. Now there is no possible world where the change happened but the announcement was lost, or vice versa.

**3. Events are named as business facts, in past tense.** `document.received`. `date.changed`. `payment.cleared`. Not `row_updated`, not `sync_table_7`. If a person who does the actual work wouldn't recognize the sentence, the name is wrong. This matters more than it looks: well-named events are what let every downstream consumer — a notification service, an analytics pipeline, next year's AI feature — understand the business without archaeology.

Do this, and everything from Parts 1–3 falls into place mechanically. The black-hole fix? A status view is just a consumer of `document.received` and `document.status.changed`. Nothing-changes-silently? Notification is a consumer of the same events. Fragmented truth? Every department's view is fed by the same stream from the same owners. The seams get governed by the events that cross them.

## The one place to break the rule

Now the nuance that separates this from dogma: there is usually *one* domain in a business where events shouldn't just circulate truth — they should **be** the truth. It's the domain where the questions people ask are inherently historical: *what did we know at the time? what sequence led here? can we prove it?*

For a bank it's the transaction ledger. For a hospital, the medication administration record. For a certifying institution, the record of what was demonstrated and verified. Notice what these share: legal or regulatory weight, disputes that hinge on sequence, and answers that must survive decades.

For that one domain, event-source it properly — append-only, corrections as new entries citing what they correct, personal identifiers kept outside the log by reference so privacy law and permanence stop fighting. It will be some of the most valuable data engineering your organization ever does.

And then — this is the discipline — **refuse to event-source anything else.** The pattern's costs are real and they're per-context: schema evolution, replay infrastructure, consistency care. Paid once, for the domain where temporal truth pays rent, they're a bargain. Paid everywhere, they're how event sourcing gets its bad name. When someone proposes a second event-sourced context, make them write the case for it. (More on making people write the case against things in Part 5 — it's the most useful practice I know.)

## Restraint is the skill

Here's the uncomfortable summary for both camps. To the event enthusiasts: the log is not a database, projections are not free, and "we can rebuild everything from the stream" is a maintenance program disguised as a superpower. To the database traditionalists: your integrated future — the notifications, the unified views, the AI features — depends on facts flowing between systems, and CRUD-with-nightly-batch is how organizations end up with the Part 1 complaints.

The mature position isn't a technology. It's an allocation: transactional truth where truth lives, circulating facts everywhere, full event sourcing exactly where history is the product.

## The Monday test

One question this week: **for which single domain in your business would "what did we know, and when did we know it" actually pay for itself** — in disputes resolved, audits survived, or trust defended?

If you have a crisp answer, that's your event-sourcing candidate — and everything else in your estate just got permission to stay boring. If every domain seems to qualify, you haven't found the answer yet; you've found enthusiasm.

**The tools were never the gap. The seams were.**

---

*What's your one domain where history is the product? I'm collecting answers — some of the best architecture conversations I've had started with this question.*
