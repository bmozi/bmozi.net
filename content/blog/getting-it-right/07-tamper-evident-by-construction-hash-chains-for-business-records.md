# Tamper-Evident by Construction: Hash Chains for Business Records

*Part 7 of Getting It Right, a series on the patterns behind reliable systems. Views my own; examples composite and anonymized from years of systems work.*

---

A lender was in a dispute with a former customer over when a hardship notification had been recorded. The date mattered — regulatory obligations hinged on it. The lender's system said one thing; the customer's records suggested another. The lender's counsel asked engineering a simple question: *can you prove this entry hasn't been altered since it was written?*

The honest answer was no. The entry lived in a normal table. Anyone with production database access — a defensible list of about forty people over the record's lifetime, plus every backup restore and migration script — could in principle have changed it, and the system could not demonstrate otherwise. The record was probably fine. "Probably fine" is a sentence that performs very poorly under cross-examination.

In *The Seams* I argued that most domains should be boring transactional systems, and one domain per business — the one where history *is* the product — deserves the full append-only treatment. This article is the implementation depth on that one domain: what construction actually backs the claim "this record has not been altered," and — just as important — what claim that construction does *not* back.

## The naive version

The naive version is policy where construction should be. The audit table that application code never updates — but the database happily would. The `is_locked` flag. The permissions review that concludes "only DBAs can touch it." Sometimes a nightly export to cold storage, which proves at best what the data looked like at 2 a.m., not that the live copy wasn't rewritten at 3.

All of these say the same thing: *we intend* not to modify this. None of them can demonstrate, to a skeptical outsider, that the intention held. Under normal operations that's fine. But the records we're discussing exist precisely for the abnormal day — the dispute, the audit, the investigation — when "we intend" is worth nothing and "we can prove" is worth everything. Note who the skeptic doubts on that day: not the hacker in the movie, but *you*. The insider with access and, suddenly, a motive. Policy cannot clear you, because policy is what you'd claim either way.

## The correct version

The construction is old cryptographic machinery applied with discipline, and it has three parts.

**Append-only storage with a hash chain.** Every entry, when written, includes a cryptographic hash of the previous entry (that hash itself covering *its* predecessor, and so on to the first entry). Each record therefore seals the entire history before it. Change one historic entry — one field, one byte — and its hash no longer matches what its successor recorded; the chain breaks visibly at that exact point. Verification is a linear walk anyone can run: recompute each hash, compare with what the next entry stored. The write path stays cheap — one hash per append. If chain-walk verification gets slow at scale, a Merkle tree over the entries buys logarithmic proofs; same guarantee, better arithmetic.

**Corrections as new entries, never edits.** Real records contain errors, and an append-only log must handle that *without* mutation: a correction is a new entry, stating what it corrects, by reference, with the reason and the actor. `record.corrected: supersedes entry 40213, reason: transcription error, corrected_by: …`. The read model shows the corrected value; the log shows the truth about the truth — what was recorded, when it was found wrong, who fixed it. In a dispute, that layered honesty is *more* credible than a clean history, not less. A record that admits its errors, datably, is a record a court can believe.

**External anchoring — because here is what the chain does not do.** A hash chain makes tampering *evident*, not *impossible*, and even the evidence has a limit: an attacker with full write access can alter an entry and then recompute every subsequent hash, producing a rewritten chain that verifies perfectly. The defense is to periodically publish the chain's head hash somewhere the writer *cannot alter*: a write-once storage bucket under separate administrative control, a different organization, a widely witnessed public location — anywhere outside the attacker's blast radius. Now a full rewrite must also forge the anchors, which is outside the insider's power. The narrower the anchoring interval, the narrower the window a rewrite could hide in.

Be equally precise about the remaining honest limits, because overclaiming here is how architects lose credibility in front of lawyers. Tamper-evident is not tamper-*proof*: nothing stops the deletion of the whole log (anchors prove *that* loudly, but detection isn't prevention — you still need backups and replication). Nothing here validates that an entry was *true* when written; the chain seals lies as faithfully as facts. And a rewrite inside one anchoring interval, before anyone verified, is detectable only by the anchor mismatch afterward — which is why verification must actually run (see below) rather than exist.

When does a record deserve this? The same test as choosing your event-sourced domain: legal or regulatory weight, disputes that hinge on sequence, answers that must outlive the team that wrote them. The lender's hardship notifications. A hospital's medication administration record. A carrier's chain of custody. Grant registries, consent records, trading decisions. For that domain, this construction is cheap insurance. For your product catalog, it's cosplay — the discipline is doing it where it pays and refusing it where it doesn't.

One dependency to flag: entries in a log like this often concern people, and "append-only forever" collides with privacy law head-on. The resolution — personal identifiers out of the log, by reference — is Part 8, and it's not optional.

## THE TEST

A tamper-evidence system that has never detected a tamper is unproven in exactly the property it exists for. So you prove it, on a schedule, in the least dramatic way possible.

Quarterly, in an isolated copy of the production log: have someone play the insider. First, the simple attack — reach beneath the application, mutate one field of one historic entry via raw database access, and run verification. It must fail, and fail *precisely*: at that entry, with output an auditor could read. Then the competent attack — mutate an entry *and* recompute all subsequent hashes, so the internal chain verifies clean — and check against the external anchors. The anchor comparison must catch it. If your verifier only walks the internal chain and never compares anchors, this is the day you find out, at a cost of zero.

Alongside the drills, verification runs continuously — a scheduled job walking the chain and checking anchors, with its *own* liveness monitored (a verifier that silently stopped is Part 10's failure mode wearing Part 7's clothes). And the output of all of it goes in a file: dated verification reports, dated drill results, dated anchors. When counsel asks *can you prove this entry hasn't been altered?*, the answer becomes: here is the construction, here is this quarter's drill where we altered an entry and caught it, here are four years of clean verification runs. That answer wins arguments the schema diagram never could.

For the comments: **which single record in your business would you most dread defending in a dispute — and today, is its integrity a construction or a policy?** If your answer involves the word "permissions," you've answered.

**Correct is a property you can test. Everything else is hope.**
