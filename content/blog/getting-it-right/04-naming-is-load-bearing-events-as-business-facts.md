# Naming Is Load-Bearing: Events as Business Facts

*Part 4 of Getting It Right, a series on the patterns behind reliable systems. Views my own; examples composite and anonymized from years of systems work.*

---

Two hospital systems, same regulatory environment, roughly the same architecture. Both needed to answer an auditor's question: how often do scheduled procedures get moved, and why?

At the first, the answer took a data engineer three weeks. The event stream was full of messages named `appointment_table_updated`, payload: the entire row, before and after. To find *reschedules* — as opposed to typo fixes, room changes, and clerical corrections — she had to diff old and new rows, guess intent from which columns moved, and interview clerks about what the codes meant. The analysis shipped with a caveats section longer than the findings.

At the second, the answer was one query. Their stream carried `scheduling.procedure.rescheduled`, and the payload included `previous_date`, `new_date`, and a mandatory `reason` code that the scheduling UI collected at the moment of change. Same underlying database write. The difference was entirely in what the event *said*.

I used to file naming under hygiene — nice, like indented code. I now think it's load-bearing structure, and the gap between those two hospitals is why.

{{visual:business-event-naming}}

## The naive version

The naive event vocabulary is born innocently: someone wires change-data-capture to the database, or instruments the service layer, and events fall out shaped like what the machine saw. `row_updated`. `order_sync_v2`. `patient_upsert`. `table_7_changed`. The payload is a row diff; the name is a mechanism.

It feels efficient — no design meetings, full coverage of every table, and the events are "flexible" because they carry everything. One stream, every change, done by Friday.

## Why it breaks

CRUD-shaped events break because they record that something changed while destroying the knowledge of *why* — and the why is the only part that appreciates in value.

The moment of the write is the only moment the intent exists cheaply. The scheduling clerk *knows* this is a reschedule-due-to-surgeon-unavailability; the UI knows; the service handling the request knows. Emit `row_updated` and that knowledge evaporates. Every future consumer must reconstruct it by forensic diffing — and each consumer reconstructs it *differently*, which is how the analytics team and the notifications team end up with two incompatible definitions of "reschedule" and a quarterly argument about whose dashboard is right.

There's a second break, quieter and structural: `row_updated` couples every consumer to your table schema. The payload is the row, so the row is the API, so the database can never change shape without breaking subscribers you can't see — the exact coupling events were supposed to dissolve, rebuilt one layer up.

And there's a third break that didn't exist five years ago. Your event catalog is now read by machines that reason in language. When an LLM-backed agent decides which stream to consume or what a field means, it works from your names and descriptions. `scheduling.procedure.rescheduled` with a documented reason code is something a model can use correctly on first contact. `table_7_changed` is something it will use *confidently and wrongly* — the failure mode that makes AI integrations quietly poisonous. Names were always the API for humans; they are now runtime input to software that acts on their meaning. Vague names used to cost archaeology. Now they cost correctness.

## The correct version

The rule fits in a sentence: **an event is a business fact, named in past tense, that a domain expert would recognize as a sentence.**

The convention that carries it: `domain.entity.verb-in-past-tense`. `logistics.shipment.dispatched`. `lending.application.approved`. `scheduling.procedure.rescheduled`. Past tense is doing real work in that rule — it asserts the event records something that *has happened* and is now immutable fact, not a command hoping something will happen. (Commands are a different species with different delivery semantics; blurring them is its own outage, and Part 2's idempotency keys are how commands stay safe.)

Intent-shaped beats CRUD-shaped, so one table's updates fan out into distinct facts: `start_date.changed` with a reason, `address.corrected`, `record.merged`. Yes, that means someone must *decide* what the business facts are — a design meeting the CDC pipeline let you skip. That meeting was never optional. You either hold it once at the producer, or every consumer holds it forever, alone, in a query.

The payload follows the name's logic: what a consumer needs to understand the fact — identifiers, the values that changed with previous and new, the reason, the actor — not a row image. And the discipline that keeps all this true at scale is the registry: every event type registered in a schema registry, with a *mandatory human-written description* of what the fact means, when it fires, and what its fields signify. Enforce descriptions in CI the way you'd enforce compilation. Two years from now that paragraph is the difference between integration and archaeology — and it is, literally, what the machines will read.

One boundary to respect: naming events as business facts does not mean broadcasting your internal domain model to the world. The events that cross team or company boundaries deserve the most care and the most stability; keep private, mechanical events (cache invalidations, internal workflow ticks) in private channels where their ugliness harms no one.

## THE TEST

Naming quality feels subjective, which is why teams argue about it instead of testing it. But there's a test, it's cheap, and I've never seen it fail to settle the argument.

Book thirty minutes with a domain expert who has never seen your architecture — a scheduling supervisor, a warehouse shift lead, a claims adjuster. Pull the distinct event types from your most important stream. Read each name aloud, then the field names, and ask two questions: *what do you think just happened?* and *what would you expect this to tell you?* Score each event type: recognized cleanly, recognized with coaching, or not recognized.

Everything in column three is a finding. Not a style violation — a finding, because every consumer of that event is currently guessing at semantics the producer failed to state, and some of those consumers are dashboards your executives believe.

Run the same corpus through a second, newer variant: give an LLM your event names and registry descriptions — nothing else — and ask it to explain each event and when it would fire. Where the model confabulates, your descriptions are underspecified; you've just previewed, safely, the mistake a future agent integration will make in production. The read-aloud test finds names humans can't parse. The model test finds descriptions machines can't. You want zero of both.

For the comments: **pick the event your business depends on most and run the read-aloud test on its name and top five fields — would your domain expert recognize the sentence?** Post the name (sanitized) and the verdict. I'll wager the CRUD-shaped ones out themselves in the first three words.

**Correct is a property you can test. Everything else is hope.**
