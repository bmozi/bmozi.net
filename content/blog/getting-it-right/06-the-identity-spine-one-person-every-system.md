# The Identity Spine: One Person, Every System

*Part 6 of Getting It Right, a series on the patterns behind reliable systems. Views my own; examples composite and anonymized from years of systems work.*

---

A health network I worked with discovered, during a records consolidation, that two patients had been merged into one. Different people, same common name, birthdays one digit apart, overlapping addresses because they'd lived in the same building. The matching system had scored them a match; the merge had propagated to a dozen downstream systems; and for five months, two people's medication histories read as one person's. It was caught by a pharmacist who noticed the "patient" was apparently taking two drugs never prescribed together.

Unwinding it took a team most of a quarter — not undoing the merge record, but tracing every decision any system had made *using* the merged identity, deciding which person each fact belonged to, and proving they'd found them all.

Every multi-system estate eventually needs an answer to the question "is this the same person?" — the customer in the e-commerce platform and the caller in the support system; the patient at two facilities; the borrower who applied twice with a new email. The answer is an identity spine: match, merge, and a universal identifier every system can share. It is some of the highest-value plumbing an organization can build, and it fails in a uniquely dangerous way, which is what this article is about.

{{visual:identity-spine-map}}

## The naive version

The naive build is a matching script: compare records on name, date of birth, email, phone; score similarity; above a threshold, merge automatically — typically by picking a survivor record, copying fields onto it, and deleting the loser. Tune the threshold to catch as many duplicates as possible, because duplicates are the visible pain that funded the project. Run it nightly. Declare the customer count de-duplicated.

Everything in that paragraph is reasonable-sounding, and three parts of it are wrong: the symmetric threshold, the destructive merge, and the assumption that "as many as possible" is the goal.

## Why it breaks

Matching is a precision-versus-recall trade, and the naive version misses that the trade is violently asymmetric.

Miss a true match — a false negative — and one person exists as two records. The cost: a duplicate mailing, a support agent who can't see the full history, a mildly annoyed customer. Annoying, visible, and *fixable*: merging two records later loses nothing.

Make a false match — a false positive — and two people become one record. Now every downstream system blends their facts: their orders, their balances, their allergies. Decisions get made on the blended fiction — a loan priced on someone else's defaults, a prescription checked against someone else's allergies, one person's parcel redirected to another's address. And it *compounds silently*: each day the merge stands, more events attach to the wrong spine. The health network's five months weren't five months of one error; they were five months of new errors accreting onto the first. A false split is an inconvenience. A false merge is contamination — and if your merge was destructive, contamination with the evidence deleted.

So "catch as many duplicates as possible" is exactly the wrong objective. The objective is: never merge wrongly, catch what you safely can, and route the ambiguous middle to something smarter than a threshold.

## The correct version

Four constructions, each aimed at one failure.

**Tune for precision; buy recall with humans.** Set the auto-merge threshold high enough that automated merges are effectively never wrong — the precision target for auto-merge should embarrass you, 99.9-plus, not 95. Everything in the ambiguous middle band goes to a **stewardship queue**: a worklist where a human sees both records side by side, with the evidence, and decides. This isn't a failure of automation — it's the correct division of labor. The machine handles the millions of obvious cases; people handle the hundreds where the cost of error is catastrophic and the signal is genuinely ambiguous. (And per this series' habits: that queue needs an owner and an SLA, or it becomes the place matches go to die.)

**Merge is an event, never an overwrite.** No survivor-and-loser, no field-copying, no deletion. Both source records persist; the merge is a recorded, reversible fact — `identity.records.merged`, with the evidence and the actor — that links them under one spine ID. Because when a false merge happens (and at any scale, one will), the question becomes "can we split?" With destructive merges the answer is a quarter of forensics. With merge-as-event, a split is another event — `identity.records.split` — and every fact that arrived during the merged period carries enough provenance (which source system, which source record) to be reassigned. The pharmacist's discovery becomes an afternoon, not a quarter.

**The universal ID is yours, not the vendor's.** Whatever performs the matching — a homegrown engine, an MDM product, a probabilistic service — the identifier that circulates through your estate must be minted and owned by *you*, mapped to the vendor's internals rather than being them. Distribute your ID in every event, every API, every warehouse table. The day you change matching vendors — and over a decade, you will — the spine survives and only the resolver behind it is swapped. Let the vendor's ID leak into three hundred consumers and the vendor is no longer a supplier; they're a structural element you can't remove.

**Resolution is a service, not a batch.** Nightly matching means a person who registers twice in one day is two people until tomorrow. The spine answers "resolve this record" synchronously at the points of entry, with the batch sweep as backstop rather than primary.

## THE TEST

Here is the test that should gate go-live, and it's the one teams skip because the matching demo looked great: **seeded synthetic duplicates, measured precision and recall, before real merges are enabled.**

Build a test corpus from production-shaped records. Inject known duplicates — pairs you *know* are the same person — with realistic corruption: typos, maiden names, transposed birth-date digits, shared addresses, a parent and child with the same name at the same address (the classic false-merge bait). Inject known *non*-duplicates engineered to look similar, like the two neighbors with one-digit birthdays. Because you planted the truth, you can score the machine against it exactly.

Then measure, per threshold band: precision of auto-merges (target: three nines or better — every false merge in the test set is a patient-safety incident you got to have for free), recall overall, and the volume flowing to stewardship (because a queue sized beyond your stewards' capacity is a number, and you want it *before* go-live, not as a backlog discovery after). Run the corpus again on every change to matching logic or vendor — it's the regression suite for the highest-stakes algorithm you operate.

And rehearse the split: take a deliberately planted false merge, let synthetic events accrue on it for a simulated month, then execute the split procedure and prove every fact lands back on the right person. If you can't pass that in staging, you are not ready to merge records in production.

For the comments: **do you know your matcher's false-merge rate — measured, not vendored?** If the number came from a brochure instead of a seeded test, which direction do you think reality differs?

**Correct is a property you can test. Everything else is hope.**
