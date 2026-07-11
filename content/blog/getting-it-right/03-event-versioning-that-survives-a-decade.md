# Event Versioning That Survives a Decade

*Part 3 of Getting It Right, a series on the patterns behind reliable systems. Views my own; examples composite and anonymized from years of systems work.*

---

A payments company I advised had a schema change scheduled for a Tuesday. Rename one field — `amount` to `amount_minor_units`, a genuinely good change, fixing a currency ambiguity that had caused real bugs. The engineer's plan was tidy: update the producer, update the consumers, deploy together.

Then someone asked the question that should be tattooed inside every event platform: *how many consumers are there?* Nobody knew. The eventual answer was over three hundred, spread across four departments, two acquired companies, a data warehouse, a fraud model, and at least a dozen services whose owning teams no longer existed. "Deploy together" wasn't a plan. It was a hostage situation with three hundred hostages.

Here's the thing about a published event schema that nobody tells you on day one: it is the most permanent artifact your team produces. Code gets rewritten. Databases get migrated. But an event, once published, has been *copied* — into consumers' stores, into the warehouse, into the archived stream you'll replay someday. You don't control the copies. You only control whether future readers can still understand them.

## The naive version

Teams treat event schemas the way they treat internal code: something you refactor when it gets ugly. Rename fields for clarity. Restructure the payload. Change a string to an enum. Then handle the fallout by coordinating: announce the change, give consumers a deadline, deploy in lockstep.

There are also two seductive shortcuts. One: "we'll just migrate the old events" — run a script over the stored history and rewrite every old event into the new shape. Two: "consumers should just handle both formats," left as an unspecified exercise for three hundred teams.

## Why it breaks

Coordinated deployment breaks on arithmetic. With three consumers, lockstep is a meeting. With three hundred, it's a probability distribution — the chance that every consumer deploys correctly in the same window is effectively zero, and the failure mode is silent: a consumer that doesn't crash on the renamed field but reads `null`, computes garbage, and writes the garbage somewhere durable. The fraud model quietly scoring on a missing amount is worse than any outage, because outages get noticed.

Migrating history in place breaks something deeper. The moment you rewrite stored events, you've destroyed the one property that made the log worth keeping: that it records what was actually published, when. Your audit trail now testifies to things that never happened in the form they claim. Rewritten events can invalidate stored hashes and signatures, break consumers' dedupe assumptions, and — the unfixable part — the rewrite itself is a big-bang migration of exactly the kind event architectures exist to avoid. The stored history is append-only or it's fiction. (Part 7 of this series stands entirely on this point.)

And "handle both formats, somehow" without rules simply distributes the migration into three hundred codebases, each solving it slightly differently, forever.

## The correct version

The discipline that survives a decade has four rules, and they're rules precisely because each one removes a coordination event.

**One: evolve additively or not at all.** Within a schema version, you may add optional fields with sensible defaults. You may never rename, remove, retype, or change the meaning of an existing field. Enforce this in CI with a schema-compatibility check on every producer build — this is a machine's job, not a review comment's.

**Two: consumers are tolerant readers.** Every consumer reads the fields it needs, ignores fields it doesn't recognize, and treats absent optional fields as their defaults. This is what makes rule one sufficient: producers add, consumers shrug, nobody coordinates.

**Three: transform old events at read time — upcasting — never in storage.** When today's code encounters a v1 event, a small pure function converts it to the current in-memory shape before the handler sees it: `upcast_v1_to_v2(event)`. The stored bytes never change. Upcasters are trivially unit-testable (old JSON in, current shape out), they stack (v1→v2→v3), and they live in one shared library, not three hundred codebases. The history stays honest; the code stays current; the seam between them is one well-tested function per version hop.

**Four: when a change can't be additive, mint v2 as a new version — and deprecate like an adult.** Sometimes the model genuinely changes: the field's *meaning* is wrong, an entity splits in two. Then you publish `payment.settled` v2 alongside v1 — dual-publish, or derive v1 from v2 at the edge — and run a deprecation with terms: announce with a sunset date two release cycles out, watch who's still consuming v1, and *this is where the consumer registry earns its keep*. If your platform can't answer "who consumes this event, and when did they last read it?" you cannot deprecate anything, ever, and your schema set only grows. The registry — even a simple one scraped from consumer group metadata — converts "we think everyone's off v1" into a list of the four teams that aren't, with names attached.

The payments company's rename, done this way, was an anticlimax: `amount_minor_units` added alongside `amount` (rule one), consumers migrated at their own pace against a registry-tracked sunset (rule four), an upcaster defaulting the new field for historic events (rule three). No Tuesday. No hostages.

## THE TEST

Versioning discipline has a failure mode all its own: it erodes invisibly. Every individual shortcut looks harmless; the wreckage only assembles years later, when a replay fails against events nobody remembers writing. So the test has to run continuously, and it has to use *real* old events.

Build this into CI: a corpus of production events sampled across the full age of your log — including, non-negotiably, events at least a year old, in every version ever published. Every build of every consumer replays the corpus through its handlers. The assertion is simple: zero errors, zero events falling through to a dead-letter path, and for a handful of golden aggregates, final projected state matching a checked-in expectation.

Refresh the corpus quarterly by sampling recent production traffic, and never delete the old samples — the corpus, like the log, is append-only. The first time this test fails, it will fail on some v1 event from before the current team joined, and the failing build will be the cheapest possible place to learn that your newest consumer never registered the v1 upcaster.

That's the whole trick. "Our consumers can read old events" is a hope. A CI job replaying last year's bytes through this morning's code is a fact, renewed on every commit.

For the comments: **can you, today, name every consumer of your most important event?** Not estimate — name. If the answer is no, that's not a tooling gap, it's a debt with three hundred creditors. What would it take to get the list?

**Correct is a property you can test. Everything else is hope.**
