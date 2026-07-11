# The Hotel Key Card

*Part 6 of Seams for Everyone — big system ideas, explained with things you already understand. Views my own.*

---

The front desk slides a thin plastic card across the marble, and it's worth pausing on what an odd little object it is.

It opens room 412. Not 411, not 413 — yours. It works from this afternoon until Thursday at eleven, and at 11:01 on Thursday it becomes a bookmark. It didn't have to be collected, deactivated, chased down. It simply *expired*, because the key was never really a key to a room — it was a key to a *stay*. Your relationship with the hotel ends Thursday, so the plastic does too.

Lose it in a taxi? The desk shrugs, taps a keyboard, and the lost card dies while a new one is born. Nobody re-cores the lock. Nobody panics. The card in the taxi now opens nothing.

And the housekeeping master key — the one that *does* open every room? Look closer at it, because it's the most carefully designed key in the building. It logs every door it opens, with a time stamp. It's tied to a person and a shift, not to "housekeeping" in general. If a guest reports something missing from 412, the hotel can answer, precisely: which keys opened that door, when, carried by whom. The powerful key isn't powerful *and* anonymous. Its power is exactly why it's watched.

The whole building runs on one quiet principle: **a key should match a relationship, not a door.** You get access because you're the guest of 412 until Thursday — and your key encodes precisely that. Not more, not longer, not off the record.

Now, the other tradition: the janitor's ring. A great jangling loop of brass — every door, every closet, every office. Issued years ago, to someone. Copied once or twice, probably. Which doors has it opened? No one knows; brass doesn't log. When does it expire? Never. When the janitor changed jobs, did the ring come back? Nobody's sure. Somewhere, right now, a ring like that is in a drawer, still opening everything, remembered by no one.

The ring wasn't issued out of recklessness. It was issued out of convenience — one key that always works is so much *easier* than fussing with expiry and logs. That convenience is precisely its danger: the ring keeps working long after anyone remembers why it exists, and it will open every door for whoever happens to be holding it.

## In your organization…

Your systems talk to each other constantly, and each connection holds a key. The question is which kind.

Most organizations, when they wire system A to system B, cut a janitor's ring: a credential that opens everything, created years ago for a project nobody remembers, that never expires, and that no one is quite sure is safe to take away — so it stays. Ask your teams how many of these exist and watch the pause. Then ask which doors those keys opened last month, and watch the longer pause. Brass doesn't log.

The hotel's alternative is fussier and worth every bit of the fuss: every key scoped to one relationship and one purpose, dying on its own schedule, with every powerful key logging every door.

## Engineers call this…

…**least-privilege access** with **scoped, expiring credentials** and an **audit log** — and the janitor's ring has a name too: the over-privileged **service account**, the key that opens everything forever and remembers nothing. When your security team asks for budget to "rotate credentials" and "scope permissions," they are proposing to run your building like a hotel instead of like a janitor's closet. The fussiness is the feature.

Honest guess: how many janitor's rings is your organization carrying right now?

That's the whole idea. The rest is engineering.
