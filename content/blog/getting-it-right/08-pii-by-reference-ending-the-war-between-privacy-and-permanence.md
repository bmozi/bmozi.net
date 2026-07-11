# PII by Reference: Ending the War Between Privacy and Permanence

*Part 8 of Getting It Right, a series on the patterns behind reliable systems. Views my own; examples composite and anonymized from years of systems work.*

---

A retailer received an erasure request — a former customer exercising their legal right to be forgotten. The privacy team routed it to engineering with a two-week clock. Engineering's investigation came back with a finding nobody enjoyed reading: the customer's name and email appeared in the customer database (deletable), in eleven downstream projections (rebuildable, in principle — see Part 5), in the data warehouse (findable, eventually), and in four years of immutable events on a log whose entire design guarantee — the one Part 7 was built on — was that nothing in it can ever change.

The privacy officer asked the reasonable question: "So delete them from the log." The architect gave the honest answer: "The log's value *is* that we can't." Both of them were right, which is what made it a war.

Most organizations discover this collision exactly this way — with a statutory deadline already running. The answer, it turns out, is not to pick a side. It's to notice the two obligations apply to different things, and to stop storing them in the same place.

## The naive versions

The first naive version is the one everyone builds by default: events carry the person. `order.placed` with the customer's name, email, and shipping address inline. It's convenient — consumers need that data, so ship it where they'll look. Every article in this series so far would let you build this; nothing about outboxes, versioning, or naming stops PII from riding along in every payload, replicated into every consumer, warehouse, and backup, forever. Which is the problem: you've distributed unerasable copies of exactly the data you may be legally ordered to erase.

The second naive version is the industry's favorite escape hatch, and it deserves its own paragraph: **crypto-shredding**. Encrypt each person's fields with a per-person key; to "erase" them, delete the key. The immutable log keeps its bytes; the bytes become undecryptable; everyone claims victory.

## Why it breaks

Crypto-shredding's engineering is fine. Its legal theory is the weak joint. The claim it rests on — *undecryptable equals erased* — is an assertion regulators have never squarely blessed, and it has three structural cracks. The ciphertext still exists, so you're arguing the data is "anonymized" by key deletion; but anonymization is judged against *future* capability, and you're betting a statutory obligation on today's algorithm resisting decades of cryptanalysis and tomorrow's hardware. Key deletion must itself be provable everywhere — including every key backup, escrow copy, and HSM replica, which quietly recreates the original "find every copy" problem one level down, with objects that are far easier to overlook than rows. And metadata typically survives outside the encrypted fields: timestamps, event types, aggregate linkages — a shape of a person that can itself be identifying.

Maybe crypto-shredding survives its eventual test case. But "maybe" is a strange foundation for a compliance program when a construction exists that doesn't need the argument at all.

Meanwhile the brute-force alternative — actually rewriting the log to remove people — destroys the append-only guarantee, breaks every hash chain from Part 7, invalidates consumer positions, and turns each erasure request into a bespoke surgery on your most critical data structure. Nobody does this twice.

## The correct version

The construction that ends the war: **personal data never enters the immutable log in the first place.**

Events carry opaque references — `party_ref: 9f3a…` — pointing into a separate **reference store**: a boring, mutable, transactional database that maps each reference to the person's actual identifiers and attributes. The log records that *party 9f3a placed an order, was admitted, signed the consent* — the business fact, the sequence, the timestamps, everything Part 7's chain protects. The reference store records *who party 9f3a is*. Consumers that legitimately need the person resolve the reference at read time, through an interface that can enforce purpose and permission (Part 9 will have opinions here); consumers that don't need the person — most of them — never see more than the opaque token.

Erasure then becomes what it always should have been: **a row delete plus a re-projection.** Delete (or blank to a tombstone — keep the row's existence so old references resolve to "erased person" rather than dangling) the party's row in the reference store. Then rebuild every projection and derived view that had previously *resolved* the reference and materialized the person's details — which is precisely the rehearsed, side-by-side operation Part 5 made routine. The events never change. The chain never breaks. The history says, honestly and forever, that *someone* — party 9f3a — placed those orders on those dates. It has simply, and irreversibly, stopped being able to say who. That's not a workaround of the law's intent; it *is* the law's intent: the person is gone, the accounting survives.

Three disciplines keep the construction honest. First, the boundary needs enforcement, not convention: schema-level validation on event publication — a linter that rejects any payload field carrying names, emails, phone numbers, addresses, free text — because one team shipping `customer_note` inline quietly re-poisons the log. (Free-text fields are the classic breach: "call Mrs. Haverford about the gate code" is PII no schema saw coming; free text about people belongs in the reference store too, referenced like everything else.) Second, the reference store is now crown jewels — the one place the mapping lives — so it gets the estate's best access control, auditing, and backup discipline; you've concentrated the risk precisely so you can defend it properly. Third, backups: the reference store's backups need a retention window aligned with your erasure obligations, or a documented restore procedure that re-applies erasures after any restore — a detail that sounds pedantic until a restore quietly resurrects forty deleted people.

## THE TEST

Erasure is a claim about *absence*, and absence is only provable by searching. So the test is an end-to-end rehearsal with a hunt at the end.

In staging, seeded with production-shaped data: create a synthetic person with distinctive, greppable values — a name, email, phone, and address that appear nowhere else. Run them through real life for a while: orders, support tickets, events, projections, warehouse loads. Then execute your actual erasure procedure — the runbook, not an engineer improvising — and start the clock.

Then hunt. Grep the entire estate for the distinctive values: the event log (must be clean *by construction* — if the name appears in any event payload, your boundary enforcement has a hole), every projection and read model (clean after re-projection), the warehouse and its staging tables, application logs (the classic residue: some service helpfully logged the request body four months ago), caches, search indexes, dead-letter queues, and a restored copy of last month's backup. Every hit is a finding with a specific fix. Run it quarterly, and after any new consumer or pipeline joins the estate.

The first run of this hunt finds residue — every time, in my experience, usually in application logs and the warehouse's staging schema. That's the test working. The goal is the fourth run: distinctive values in, full life simulated, erasure executed, grep returns nothing but the tombstone. *That* is what you show the regulator — not an architecture diagram, but a rehearsal log proving the person disappears on demand.

For the comments: **if you received an erasure request today, could you list every system where that person's data lives — or would the list itself be the first two weeks of work?** The inventory is the confession.

**Correct is a property you can test. Everything else is hope.**
