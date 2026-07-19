# Idempotency Is a Design Stance, Not a Retry Flag

*Part 2 of Getting It Right, a series on the patterns behind reliable systems. Views my own; examples composite and anonymized from years of systems work.*

---

A retail platform once refunded a customer four times for one returned jacket. The refund service was solid. The message broker was solid. What failed was a load balancer timeout: the refund request took 31 seconds, the gateway gave up at 30 and returned an error, and the client — behaving exactly as designed — retried. Three times. Each retry was a *new* request as far as the refund service could tell, and each one succeeded.

Nobody wrote a bug. Everybody followed their spec. The customer got paid four times because the system as a whole had never decided what a duplicate *was*.

In Part 1 I argued that the honest delivery contract is at-least-once delivery plus exactly-once processing. This article is the second half of that contract, and it's the half you can't buy: duplicates *will* arrive — from broker redelivery, from client retries, from a user double-clicking, from an operator replaying a dead-letter queue — and every consumer must be built so that arriving twice changes nothing.

## The naive version

The naive version isn't a piece of code; it's an attitude. It goes: "we'll add retry handling where we need it." A dedupe check on the payment endpoint after the first double-charge. A unique constraint on the order table after the first duplicate order. Idempotency as a patch, applied reactively, one scar at a time.

The attitude fails because it treats duplication as an edge case belonging to specific endpoints, when it's actually a property of the transport belonging to *every* endpoint. Each unprotected consumer is a double-effect waiting for its first timeout. And you will always discover the gaps in the order the incidents choose, not the order of business risk — which is how a team ends up with bulletproof deduplication on newsletter signups and none on refunds.

The related folklore is worse: "we set the client to retry only on 5xx, so we're safe." The jacket refund was a timeout. The client *cannot know* whether the operation happened. That ambiguity is irreducible — no retry policy resolves it. Only the server can, and only if it can recognize the same request twice.

## The correct version

Idempotency is a design stance: **every command in the system carries a client-generated idempotency key, and every consumer treats that key as the identity of the operation.**

The client-generated part is the insight people miss. If the *server* generates the key, it can't recognize a retry — the retry arrives before any server-issued key could be echoed back. The party that knows two requests are the same attempt is the one making the attempt. So the client mints a UUID when the user clicks "refund," and every retry of that click — through timeouts, failovers, redeliveries — carries the same key. The button click gets one key; the intent gets one identity.

On the server, there are two ways to honor it, and good systems use both.

**Natural idempotency** is when the operation's own semantics absorb duplicates. `set status = 'CANCELLED'` applied twice is one cancellation. "Upsert this reading keyed by (sensor, timestamp)" is safe at any multiplicity. When you can shape an operation this way — absolute assignments instead of relative increments, upserts instead of blind inserts — do it, because it needs no extra machinery and can't drift out of sync with anything. `balance = balance - 50` is not naturally idempotent; "apply debit D-123 for 50, keyed on D-123" is.

**Dedupe tables** are for everything else. Before processing, insert the idempotency key into a processed-operations table with a unique constraint — *in the same transaction as the effect itself*. If the insert conflicts, you've seen this operation: return the stored result of the first attempt and do nothing. That same-transaction clause is load-bearing. Check-then-process as two steps leaves a crash window where the work happened but the key wasn't recorded, and you're back to duplicates; record-then-process leaves the opposite window, and you've converted duplicates into loss. One transaction, or you've built a lie.

(Two operational notes, because this is where reviews catch real bugs: dedupe records need a retention window longer than your longest plausible redelivery — replays from a week-old dead-letter queue are the classic ambush — and the stored *result* matters, because the retry must receive the same answer the original got, not an error.)

## Where it actually breaks: the edge of the world

Inside your database, transactions make all of this tractable. The failures that make the postmortem interesting live at the boundary where your system causes effects *outside* itself — emails, payments, shipping labels, SMS. The outside world has no transaction to roll back and no unique constraint to conflict on.

The consumer that reads `order.placed` and sends a confirmation email will, under redelivery, send it twice — and no database discipline on your side prevents it, because the duplicate effect happens in the mail provider. The fix is to *push your idempotency key across the boundary*: every serious payment processor, and most mail and SMS providers, accept an idempotency key precisely so that your retry doesn't become their second charge. Derive that key deterministically from the triggering event's ID, and the whole chain — event, consumer, external effect — collapses to one identity. Where a provider offers no such key, you're down to your own dedupe table plus recording the provider's response before acting again — weaker, and worth knowing it's weaker.

The rule of thumb I give review teams: trace every path from a consumed message to an external side effect, and ask what happens if this handler runs twice. If the answer involves the word "probably," it's a finding. A duplicated projection update embarrasses you. A duplicated wire transfer ends up in front of a regulator.

{{visual:idempotency-boundary}}

## THE TEST

You do not prove idempotency in a design review. You prove it by replaying, and you prove it continuously.

Stand up a staging environment with production-shaped traffic. Then run a chaos job that consumes every message and *delivers it twice* — better, twice with a random delay between deliveries, and occasionally three times, because real redelivery is bursty and rude. Every external boundary is faked with a recording stub that counts calls per idempotency key.

Then assert two things. First, state: staging-with-duplicates must end byte-identical (excluding timestamps and audit trails, which legitimately record both arrivals) to a control run without duplicates. Second, effects: every recording stub shows exactly one effect per key. One email per order. One charge per payment intent. One label per shipment.

Make it a standing CI gate, not a one-time audit. The first run of this test is humbling — teams typically find that a third of their consumers fail it. That's not an indictment; that's the test doing its job before production did it instead. The gate's real value is the *next* consumer, written eight months from now by someone who never read this article: the double-delivery harness will fail their build twenty minutes after they forget the dedupe insert, and they'll fix it before anyone gets refunded four times.

For the comments: **what's the most expensive duplicate your system has ever produced — and did the fix protect just that endpoint, or all of them?** Be honest about the second half. That's the difference between a scar and a stance.

**Correct is a property you can test. Everything else is hope.**
