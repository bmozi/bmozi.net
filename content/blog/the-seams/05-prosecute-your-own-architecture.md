# Prosecute Your Own Architecture

*Part 5 of The Seams, a series on systems thinking in architecture. Views my own; examples composite and anonymized from years of systems work.*

---

The most useful document I have ever written about an architecture I loved was the case against it.

I mean a real case. Not a "risks and mitigations" slide with three bullet points that all end in "…which we will monitor." A prosecution: the strongest arguments a hostile, well-informed skeptic could make against my design, researched properly, written in their voice, at full strength — published next to the design itself.

I started doing this out of self-defense, honestly. I'd fallen in love with an elegant design, and I knew I'd fallen in love, and I knew what architects in love do: they discount every objection as "not getting it." So I made myself write the objections as if I were paid to kill the project.

What happened next changed how I work.

## What the prosecution found

Some of my design survived beautifully. Under the harshest framing I could construct, backed by the failure retrospectives of teams who'd tried similar things, parts of the architecture stood there undamaged — and I now *knew* they were strong rather than hoped it.

Some of it died. There were bets in my design that, once I honestly assembled the evidence against them, I couldn't defend. Patterns the industry had quietly walked back from. Complexity whose benefits I'd been asserting rather than demonstrating. Killing those pieces stung for about a day. The design that remained was better in every way that mattered.

And some of it transformed. The most interesting outcome wasn't survive-or-die — it was pieces that survived *in a different role*. An idea I'd positioned as the center of the architecture turned out to be defensible only as one component among several. Demoted, it became genuinely great. The prosecution didn't just filter the design; it re-weighted it.

Try to name another practice that reliably does all three of those things to a design before a single line ships.

## Why the room changes

Here's the second effect, and it may matter more than the first.

When you present an architecture the normal way, the room's sharpest people spend the meeting doing one thing: hunting for the flaw you missed. It's adversarial by structure — your job is to look bulletproof, theirs is to shoot. The dynamic wastes the very expertise you most need.

Now present it with the prosecution attached: "Here's the design. Here are the eleven strongest objections I could construct, with sources. Here's which parts of my original thinking they killed, and what I changed."

The dynamic inverts. The skeptics find their objections *already written down* — often stronger than they'd have put them, because you researched what they'd only have intuited. There's nothing left to ambush. So the room's energy goes where you actually want it: not "is he wrong?" but "is objection #7 answered well enough, and is there a twelfth?"

You also earn a kind of trust that no amount of polish buys. Anyone can present a design they believe in. Presenting the best case against it, at full strength, tells the room you value being right *next year* over looking right *today*. People remember that. They bring you their doubts early, instead of after the outage.

## How to do it properly

A few rules from doing this badly before doing it well:

**Steelman, don't strawman.** The objections must be the *best* versions — the ones a brilliant, motivated critic would make. Research them: the retrospectives, the post-mortems, the "we tried this and here's what happened" posts. If your prosecution contains no argument that genuinely worries you, you wrote a defense with costume changes.

**Every charge gets a verdict, and not all verdicts are acquittals.** For each objection: does the design survive it as-is, survive it with changes, or not survive it? Write the verdict down. A prosecution where the architecture wins every count is a sign you went easy — real designs lose some counts, and losing them on paper is the cheapest place to lose.

**Publish it.** The prosecution attached to the design, visible to everyone who sees the design. Kept private, it's a thought exercise. Published, it's a standing invitation: *if you can argue better than this, I want to hear it* — and a record that keeps future-you honest when convenient amnesia sets in.

**Make it a habit, not a crisis response.** Post-incident reviews are prosecutions run too late, on evidence written in downtime. The whole point is to run the trial while the defendant is still a diagram.

One caution: this is not a license for self-flagellation or endless second-guessing. The prosecution runs once, thoroughly, at the decision point — then you commit. In fact that's what makes decisive commitment *legitimate*: you've earned the right to stop debating precisely because the debate was real.

## The deeper principle

This series keeps circling one idea: the failures that hurt organizations live in the seams — the ungoverned spaces between systems, between teams, between what we claim and what we verify. The prosecution is that idea applied to your own reasoning. The most dangerous ungoverned seam in any architecture is the one between the architect's confidence and the evidence.

Govern it the same way you'd govern any seam: make the crossing explicit, make it inspectable, write it down.

## The Monday test

Write one page — one — prosecuting your current architecture, or the design you're about to propose. The three strongest charges, researched, in a skeptic's voice, each with an honest verdict.

Two outcomes, both valuable. Either you produce a page that makes your design stronger and your next design review completely different — or you discover you *can't* construct the case against it. And if you can't argue against your architecture, you don't fully understand it yet. The person in the room who can will be arguing against a design even its author hasn't examined.

Next week we go back to the operational trenches: the single rule that kills black holes — no queue without an owner — and the machinery that enforces it.

**The tools were never the gap. The seams were.**

---

*Have you ever formally argued against your own design? What survived, and what didn't? The comments are open — verdicts welcome.*
