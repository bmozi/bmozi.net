# The Outbox Pattern and the Exactly-Once Lie

*Part 1 of Getting It Right, a series on the patterns behind reliable systems. Views my own; examples composite and anonymized from years of systems work.*

---

A logistics company I worked with once spent three weeks hunting a ghost. Roughly one shipment in forty thousand would be picked, packed, loaded onto a truck — and never billed. The order system said shipped. The billing system had never heard of it. No errors, no alerts, no pattern anyone could see. The finance team called them "the quiet ones."

The bug was four lines long, and I'd bet money a version of it is running in your estate right now.

## The naive version

Here's what the shipping service did, and what almost every service in every event-driven system does on day one:

```
BEGIN TRANSACTION
  update shipment set status = 'SHIPPED'
COMMIT
publish("shipment.dispatched", ...)   // tell the world
```

Commit to the database. Then publish to the broker. Two operations, two systems, and a gap between them the width of a process crash.

Everyone who writes this knows, somewhere in the back of their mind, that the process could die between the commit and the publish. They also know it almost never will. And that's exactly the problem: it almost never will. It will happen once per forty thousand deploys, OOM kills, and network blips — often enough to bleed you, rarely enough that you'll never reproduce it on demand.

Reverse the order and you get the mirror-image ghost: publish first, then fail the commit, and now downstream systems are billing for a shipment that never legally happened. There is no ordering of two non-atomic operations that saves you. This is the dual-write problem, and it cannot be fixed with care. It can only be fixed with construction.

## The lie that makes it worse

At this point someone finds a broker whose brochure says "exactly-once delivery" and declares the problem solved. It isn't, and it's worth being precise about why, because the imprecision costs real money.

Exactly-once *delivery* across independent systems is not a thing you can buy. The receiving process can always crash after doing the work and before acknowledging it, at which point the broker must choose: redeliver (possible duplicate) or don't (possible loss). What the brochures actually sell is exactly-once *semantics within one vendor's walls* — inside their stream processor, between their topics. The moment the message causes an effect in *your* database, *your* payment provider, *your* warehouse system, you are back in a world where the honest contract has two halves:

**At-least-once delivery, plus exactly-once processing.** The transport is allowed to duplicate; the consumer is built so duplicates don't matter. Delivery is the plumbing's job. Processing is yours. Every reliable distributed system I have ever seen up close settles on this contract, whatever its brochures said.

This article is about the delivery half. Part 2 is about the processing half — idempotent consumers — because each is useless without the other.

## The correct version

The fix for the dual write is old, unglamorous, and beautiful: stop doing two writes. Do one.

The service writes its state change *and* its outgoing event into the same database, in the same transaction. The event goes into a table — conventionally called the outbox — with an ID, the aggregate it belongs to, a sequence number, the payload, and a published-at timestamp that starts null:

```
BEGIN TRANSACTION
  update shipment set status = 'SHIPPED'
  insert into outbox (id, aggregate_id, seq, type, payload)
COMMIT
```

Now there is no gap. Either the shipment is shipped *and* the announcement exists, or neither does. The database's transaction — the most battle-tested atomicity machine humanity owns — guarantees it.

A separate process, the relay, polls the outbox for unpublished rows (or tails the database's change stream, which is the same idea with lower latency), publishes each to the broker, and marks it published. Notice what the relay is allowed to be: dumb, single-purpose, restartable, and — critically — *unable to cause loss*. If it crashes after publishing but before marking, it will republish on restart. That's a duplicate, and duplicates are legal under our contract. The one crime it can never commit is losing a message, because the message is sitting in the same durable database as the business fact itself.

{{visual:outbox-correctness}}

Two caveats that separate the working implementations from the incident reports.

**Ordering is per-aggregate, not global.** Consumers usually need the events for *one* shipment, *one* account, *one* patient in order — created before dispatched before delivered. Nobody sane needs a total order across all shipments. So the relay publishes with the aggregate ID as the partition key, giving you order within each aggregate and parallelism across them. Promise global ordering and you've promised a single-threaded system; you just haven't noticed yet.

**Mark-then-publish loses; publish-then-mark duplicates.** If your relay marks rows as published before the broker confirms the publish, you've rebuilt the original bug one table to the left. Publish, await the acknowledgment, then mark. Accept the duplicate window. It's the whole point.

## THE TEST

Here is how you prove you got it right, and it takes an afternoon.

In staging, drive steady load — a few hundred writes per second through the service. Every write carries a unique marker and produces a downstream effect you can count. Then, mid-batch, `kill -9` the relay. Not a graceful shutdown — graceful shutdowns test nothing. Kill it after it has published some of a batch and marked none of it. Wait ten seconds. Restart it. Do this on a loop for an hour: kill, restart, kill, restart.

Then reconcile. Every marker written to the source database must have produced its downstream effect exactly once. Zero missing. Zero double-applied. Missing markers mean your relay marks before it publishes. Double-applied effects mean your consumers aren't idempotent yet — which is next week's article, and this test is how you'll know you need it.

Run it in CI, weekly, forever. The dual-write bug is not one you fix; it's one you continuously prove absent, because the next engineer to add a "quick" publish call will reintroduce it, and your test will catch them where the finance team didn't.

The logistics company's fix, for the record, was exactly this: an outbox table, a forty-line relay, and the kill test wired into their pipeline. The quiet ones stopped. Not because anyone got more careful — because carefulness was no longer a load-bearing part of the design.

So here's the question for the comments: **do you know, right now, whether your services publish inside the transaction or after it?** Not "we use Kafka, we're fine" — the broker was never the gap. Go read the code. If you find `commit` on one line and `publish` on the next, you've found your quiet ones.

**Correct is a property you can test. Everything else is hope.**
