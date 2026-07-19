# Who Watches the Watcher: Timers, Escalations, and Dead-Man's Switches

*Part 10 of Getting It Right, a series on the patterns behind reliable systems. Views my own; examples composite and anonymized from years of systems work.*

---

A healthcare administrator once showed me a system that had worked perfectly for two years. Referrals came in; if one sat unactioned for 72 hours, a sweep job flagged it and escalated to a supervisor. Simple, effective, and — after two years without incident — completely trusted. Then an infrastructure migration moved the job scheduler, a credential didn't follow, and the sweep stopped running.

Nothing alerted. Why would it? Alerts fire when something *happens*. Nothing was happening — that was the problem. For nineteen days, referrals aged past 72 hours in perfect silence, and the system that existed specifically to make silence impossible was itself silent. They found out from a patient's family.

This is the last article in the series, and it's about the failure mode underneath every other article's machinery. Escalations, SLA timers, the projection-lag alerts from Part 5, the verification job from Part 7, the bundle-staleness monitor from Part 9 — all of them are watchers. And a watcher's failure is uniquely invisible, because a dead watcher and a healthy quiet system look *identical* from the outside. Every other component announces its failure with errors. The watcher announces its failure with peace.

{{visual:watcher-escalation-loop}}

## The naive version

The naive construction is exactly what the referral system had, and it's what nearly everyone builds: a scheduled job that wakes periodically, queries for work past its deadline, and fires the escalation. Deadlines become consequences; queues can't silently rot; Part 6 of *The Seams* ("no queue without an owner") gets its enforcement machinery. All good.

The naive part is the unexamined assumption riding underneath: *that the sweep runs.* The scheduler is a single point of failure for the entire concept of "nothing waits too long," and its failure produces no error, no exception, no failed request — nothing any conventional alert is pointed at. Teams monitor what their monitors *emit*. Nobody monitors what their monitors *fail to emit*.

There's a second naive assumption, subtler and just as costly: that when the sweep runs, it computes breaches from *now*. Written naively — "flag the items that crossed the threshold since the last sweep" — a sweep that's been down for nineteen days comes back up and processes only the *newly* breaching items, silently absolving everything that breached during the outage. Recovery that forgives the backlog isn't recovery; it's amnesty for exactly the cases that waited longest.

## The correct version

Four constructions, stacked. Each one covers the failure of the layer below it.

**First, the watcher emits a heartbeat.** Every run of the sweep — whether it found breaches or not — records a completion pulse: "I ran, I saw 14,212 items, I escalated 3, at 09:00:02." The heartbeat converts the watcher's most dangerous state — silence — into a detectable absence, because now silence has a schedule it's violating.

**Second, an independent system alarms on heartbeat absence.** This is the dead-man's switch, and *independent* is the load-bearing word. The thing that pages when heartbeats stop must share as little fate as possible with the thing it watches: different host, different scheduler, different credentials, ideally a different failure domain entirely — a managed external monitor is a fine choice because your infrastructure migration can't take it down too. If the sweep and its watcher both ride the same scheduler, you've built one failure with two names. The rule generalizes and it's worth saying plainly: *anything that alerts on presence must itself be watched for absence, by something that won't die with it.* The referral system's nineteen days would have been ninety seconds.

**Third, compute breaches from received-at, never from the sweep.** The deadline is a fact about the *work* — this referral arrived Tuesday 09:14, so it breaches Friday 09:14 — not a fact about the sweep that notices it. Every sweep evaluates the full population against absolute deadlines: everything past its deadline that hasn't been escalated *gets* escalated, no matter when the breach occurred. Under this construction, late detection degrades gracefully into late escalation instead of no escalation: the sweep that comes back after nineteen days finds every item that breached during the silence and back-fills every consequence, oldest first. Recovery is complete *by construction* — not because someone remembered to write a backfill script at 2 a.m., but because the sweep's normal logic cannot tell the difference between a fresh breach and a missed one. (Escalations must be idempotent — keyed per item per threshold, Part 2 — or recovery double-pages everyone; and `received_at` must be assigned authoritatively at intake, or clock skew moves your deadlines.)

**Fourth, a missed escalation is an incident — by policy, in writing.** When the dead-man's switch fires, or when back-fill reveals items that breached without consequence, that is not "the tool hiccupped." It's an incident with the same machinery as an outage: paged response, timeline, postmortem asking why the watcher died and why detection took as long as it took. This is the cultural half of the construction, and it's what keeps the technical half honest — because heartbeat monitors and back-fill logic decay like everything else, and only a team that treats watcher-failure as a first-class incident will notice the decay before the next nineteen days. The escalation path is a promise to every person whose referral, claim, shipment, or application sits in a queue; breaking it silently is the original sin this series has argued against, and breaking it *loudly, with a postmortem* is a system learning.

## THE TEST

You already know what it is. The question is whether you've ever actually done it.

In staging, with production-shaped queue data and a clock you can move: **kill the timer.** Not a graceful pause — kill the sweep the way the credential failure killed it, silently, mid-schedule. Then verify three things, in order, with numbers.

First: **the page fires**, within the heartbeat window, from the independent monitor, to a human who acknowledges it. Measure silence-to-page — it should be minutes, and you should know how many. If nothing pages, stop here; you've found the nineteen-day bug for free, and nothing else in this test matters until it's fixed.

Second: while the sweep is down, **advance the clock** (or let staged items age) so a known set of items crosses their deadlines during the outage. Write the list down: these fourteen items *should* escalate.

Third: restart the sweep and **audit the back-fill.** Every one of the fourteen must be escalated, oldest first, exactly once — no amnesty, no double-pages. Then check the paperwork: did the watcher-failure get logged as an incident, per the policy? If the recovery worked but nobody treated the outage as reportable, the fourth construction is decoration.

Run it twice a year, unannounced to the on-call rotation. The first run finds the missing heartbeat monitor or the sweep that forgives backlogs. The fourth run is boring. Boring — as this whole series keeps concluding — is the trophy.

That's the series: ten patterns, ten tests, one conviction — reliability isn't a temperament, a culture deck, or a vendor line-item. It's a set of properties, each with a known correct construction, each provable by an exercise you can put on the calendar. The teams that get it right aren't more careful than yours; they've stopped depending on carefulness.

For the comments, the last challenge: **go find your most important timer — the one whose silence would hurt a customer — and answer one question: what watches it?** If the answer is "nothing," you know what this weekend's chaos exercise is. Post what happened.

**Correct is a property you can test. Everything else is hope.**
