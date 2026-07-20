# Your Customers Aren't Complaining About Your Product

*Part 1 of The Seams, a series on systems thinking in architecture. Views my own; examples composite and anonymized from years of systems work.*

---

A few years ago I sat down and read a few hundred of the worst public reviews I could find about an organization I was studying. I expected complaints about the product. Price, quality, features — the things we build roadmaps around.

That's not what I found.

The product barely came up. What came up, over and over, in different words from different people, was the *system around the product*:

"I submitted everything they asked for and then heard nothing for weeks. No status. No timeline. Nothing."

"My record changed and nobody told me. When I called, nobody knew who did it or why."

"I was handed from department to department. Each one thought someone else had me."

"I got a different answer every time I called."

"The one evening I finally had time, I couldn't even log in."

I've since run this exercise on organizations in half a dozen industries — education, healthcare, financial services, government. The pattern holds every time. People rarely complain about the thing you sell. They complain about what it feels like to be *processed* by you.

{{visual:seams-complaint-radar}}

## Five failure modes, one root

Once you've seen the pattern, you can name it. Nearly every system-around-the-product complaint is one of five failure modes:

**Black-hole submissions.** Something the customer sent — a document, an application, a request — entered a queue and became invisible. No status, no timeline, no evidence anyone is looking at it.

**Silent state changes.** Something material about the customer's world changed — a date, a status, an entitlement — with no notification, no explanation, and no one accountable.

**Dropped handoffs.** The process crossed a boundary between teams or systems, and the customer fell through the gap. Nobody owned the in-between.

**Fragmented truth.** Different staff gave different answers to the same question, because no one — literally no one — could see the customer's whole picture in one place.

**Fragile access.** The front door itself failed. The customer was ready, willing, and blocked by a login.

Here's the claim I want to plant, and it's the foundation for everything else in this series:

**Every one of these is an architecture problem wearing a customer-service costume.**

## Why we misdiagnose it

When these complaints arrive, they get routed to customer service. We coach the agents. We rewrite the scripts. We add a survey. We might even fire someone.

And nothing changes, because the agent was never the problem. The agent gave a different answer than the last agent because the *systems* show different truths. The document went into a black hole because no system assigns submissions an owner and a visible state. The record changed silently because the architecture has no rule that a mutation must carry an actor, a reason, and a notification.

You cannot coach your way out of a structural problem. A human being standing in front of a broken system, apologizing for it, is not a service strategy.

This is the essential move of systems thinking, and it's uncomfortable: **read complaints as system outputs, not service anecdotes.** A complaint is your architecture describing itself to you, through the only channel it has — the people it processes.

## The reframe that changes the roadmap

When you accept that framing, your improvement roadmap changes shape entirely.

"Improve response times" becomes: *every submission gets a durable ID, a visible state, a named owner, and a timer that escalates automatically.*

"Better communication" becomes: *no material change to a customer's record without who, when, why — and a notification, by design, not by policy.*

"Consistent answers" becomes: *one shared picture of the customer that every role reads from, instead of five departmental copies drifting apart.*

"More reliable platform" becomes: *availability and login success measured as explicit targets, with real consequences internally when they're missed.*

Notice what happened: every one of those is an engineering deliverable. It can be designed, built, tested, and measured. That's the difference between a service aspiration and a system property. Aspirations regress the moment attention moves on. Properties hold.

## The uncomfortable audit

If you take one thing from this piece, make it this exercise. It costs an afternoon.

Pull your last fifty complaints — reviews, tickets, escalations, whatever channel is most honest. Tag each one: **product**, or **system around the product**? Then tag the system ones with the five failure modes.

Two things will happen. First, you'll be surprised by the ratio — most leaders guess 50/50 and find it closer to 20/80. Second, the failure modes will cluster, and the clusters will point at seams: the places where your systems, teams, and processes hand off to each other with nobody governing the in-between.

Those seams are where the next several articles in this series live. Because here's the preview of Part 2, and it's the most contrarian thing I believe about enterprise systems: when you go looking for the cause of these failures, you will almost certainly find that the organization already owns world-class tools that were supposed to prevent every one of them. The tools were present the whole time.

Which means the problem was never the tools.

**The tools were never the gap. The seams were.**

---

*What did your last fifty complaints say? If you run the tag exercise, I'd genuinely like to see your ratio in the comments.*
