# Projections Are Cattle: Rebuilds as a Rehearsed Operation

*Part 5 of Getting It Right, a series on the patterns behind reliable systems. Views my own; examples composite and anonymized from years of systems work.*

---

A retail analytics team found a bug in their revenue-by-region view: a currency conversion applied twice for one country, going back seven months. The fix was a one-line change to the projection code. Then someone said the sentence that turned a bug into a crisis: "So… how do we rebuild the view?"

Silence. The projection had been built once, two years earlier, by an engineer who had since left, using a script nobody could find, and it had been *updated incrementally ever since*. It was derived state in theory and a hand-raised pet in practice — unique, irreplaceable, and wrong. They spent eleven days writing corrective SQL against the live table, during which the executive dashboard showed numbers everyone knew were somewhere between the old wrong and the new right.

The whole promise of deriving read models from an event log — the promise that justified the architecture — is that derived state is disposable. You can always rebuild it from the log. That sentence appears in every design doc. Almost nobody has ever actually done it.

## The naive version

The naive stance isn't a bad design; it's an untested assumption. The projection is built once, consumes events forever after, and "we can rebuild from the log" remains a belief held with the same confidence, and the same evidential basis, as "our backups are restorable."

When a rebuild finally becomes unavoidable — a bug like the double conversion, a new field needed historically, corruption — the naive execution is in-place: stop the projector, truncate the table, replay from event zero into the live target, and apologize for the downtime.

## Why it breaks

In-place rebuilds fail on three separate axes, which is impressive for one operation.

First, *the read model is down for the whole replay* — and replay length is a number you've never measured, because you've never done this. Teams guess hours and discover days: replaying three years of events through projection logic that makes a database round-trip per event is often slower than the original system was at writing them. Now the dashboard is blank, or worse, half-populated and being read as if it were whole — mid-rebuild state looks exactly like normal state to anyone you forgot to tell.

Second, *there's no rollback*. You truncated the old state. If the rebuild has a bug — and the rebuild is running code paths that have never processed year-old events, so see Part 3 — your options are "fix forward under pressure" or "restore from a backup of state you just declared wrong."

Third, and this is the one that compounds: because rebuilds are terrifying, teams avoid them, so projection code accretes patches (like eleven days of corrective SQL) that exist *only in the state, not in the logic*. The projection drifts from what the log plus the code would produce. Which makes the next rebuild scarier. The fear is self-reinforcing, and it converts your cattle into pets one incident at a time.

## The correct version

The correct version is a single principle with operational teeth: **a rebuild is a routine, rehearsed, side-by-side operation — never an in-place one.**

Side-by-side means the running projection is never touched. You stand up the *new* projection against a new target — `revenue_by_region_v9` — and replay the full log into it while the old version keeps serving every query. Nobody experiences downtime, because nothing that serves traffic is being rebuilt. The projector runs at full replay speed with batched writes, catches up to the head of the log, and then keeps consuming live events in tandem with the old one.

Then — and this is the step that separates the professionals — you *verify before you cut over*. Row counts per partition between old and new. Checksums over stable subsets. Spot reconciliation of known aggregates against the source of record. Where old and new disagree, you investigate *before* anyone depends on the answer: sometimes the new one is wrong; sometimes, delightfully, you discover the old one had been wrong for months. Either way you learn it in a diff, not in a board meeting.

Cutover is atomic and boring: a view or alias flip — `revenue_by_region` now points at `_v9` — one transaction, zero downtime. Keep the old table consuming events for a grace period, so rollback is the same alias flip in reverse. Then drop it.

Two supporting disciplines make the pattern honest. **Staleness is labeled**: every projection-backed surface exposes "as of" — its position or timestamp in the log — because a consumer who can see freshness can make correct decisions about trusting it, and one who can't will assume it's real-time until the day it isn't. **Lag has an SLO**: projection lag is a first-class metric with an alert threshold, because a projector that silently died is indistinguishable, to every reader, from a world where nothing is happening. (And per Part 2, the projector itself must be idempotent — replays and redeliveries are its daily weather.)

Notice what falls out for free: schema changes to read models stop being migrations. Want the new column, historically populated? That's not an `ALTER TABLE` plus a backfill script — it's projection v10, built side-by-side, verified, flipped. The rebuild machinery, once it exists, becomes how you *evolve* read models, not just how you repair them.

## THE TEST

You don't get to claim your projections are cattle until you've shot one on purpose.

Once a month, in staging seeded with a production-scale copy of the log: pick a projection — rotate through them, including the scary one, *especially* the scary one — and delete it. Not gracefully. Drop the table. Then run your rebuild procedure and measure two things.

**Time-to-identical**: wall-clock from drop to a verified, cut-over replacement whose contents reconcile with a pre-drop snapshot. Not time-to-exists — time to *proven identical*, checksums and counts, because a fast rebuild to subtly different state is the worst outcome wearing the best costume. Track this number over months; it degrades as the log grows, and the trend tells you when replay performance needs investment *before* an incident makes it urgent.

**Procedure-runs-without-archaeology**: the rebuild must execute from the runbook, by an engineer who didn't write the projector, without Slack-searching for how it works. If it can't, the gap is the finding.

The first drill is always educational — missing runbooks, replay bugs on old events, an alias someone hard-coded around. Every one of those discoveries is an incident that now won't happen. By the fourth drill it's boring, and boring is the goal: the analytics team with the double-converted currency should have been able to say "projection bug — fix the line, rebuild v9 side-by-side, verify, flip, done by Thursday," and mean it, because they'd done exactly that eleven times in rehearsal.

For the comments: **when did your team last rebuild a projection from the log — actually, not theoretically?** If the answer is "never," you don't have derived state. You have a primary database with an origin myth.

**Correct is a property you can test. Everything else is hope.**
