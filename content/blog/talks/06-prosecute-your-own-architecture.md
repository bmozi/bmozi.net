# Talk 6 · Prosecute Your Own Architecture

*The engineering-culture talk — 30 minutes. Rooms: staff-plus tracks, architecture
conferences, engineering-culture tracks. Backed by Seams Part 5 and the live
prosecution record. Views my own.*

---

## Why this is a good conference talk

**The edge is receipts.** Most talks about intellectual honesty are sermons; this one
is a demonstration — the speaker walks on stage with the published record of arguing
against his own designs: real verdicts, real convictions, real corrections, including
the mechanisms the prosecution killed. Nobody else's talk can be borrowed for this,
because the credibility *is* the content. It's also the rare talk that gets more
compelling the more it admits — the audience trusts the surviving claims precisely
because they watched the others die.

**The change it aims for:** one attendee writes a one-page prosecution of their current
architecture. The dare that lands it: *if you can't make the case against your design,
you don't understand it yet.*

## Talk outline (30 min, with beats)

**[0–5 · The most useful document I ever wrote about a design I loved]** Open with the
confession: the case *against* it. What happened when it was published next to the
design: the room's posture changed — dissent became collaboration, because the
prosecution had already said the hard things out loud. **[5–12 · The procedure]**
Steelman every opponent at full strength — real vendors, real standards, real
critiques, named and dated; if your steelman would embarrass you in front of that
vendor's engineers, it isn't one. Score honestly with three verdicts: HOLDS / NEEDS
EXTENSION / AT RISK. Publish verdicts *next to* the design, not in a drawer. Show a
real (composited) example including a conviction: a claimed novelty that a vendor
commoditized, retired publicly — and what that retirement bought in trust. **[12–19 ·
Why it works — the mechanism, not the virtue]** Three effects. Design quality: what
survives is stronger, what dies deserved to, and extensions get named before opponents
name them. Room dynamics: a team that watches you argue against yourself stops
performing agreement — your dissent becomes welcome, theirs becomes safe. Personal
calibration: the prosecution record is a graded prediction log; you learn your own
overconfidence patterns the only way anyone does — in writing, against outcomes.
**[19–26 · The failure modes, honestly]** Performative prosecution (soft charges,
guaranteed acquittals — worse than none, because it inoculates against the real
thing); prosecution as procrastination (the review that never ends — timebox it, ship
verdicts); prosecution without patching (verdicts that don't change the artifact are
theater — every conviction lands as a correction, and the artifacts must never drift
from the verdicts); and doing it only in crisis (it's standing procedure on a clock,
or it's damage control wearing a robe). **[26–30 · Close + assignment]** The quarterly
rhythm; the self-reference test (prosecute your *program*, not just your designs). The
dare, stated slowly: one page, this week, against the architecture you're proudest of.
*The tools were never the gap. The seams were* — and the seam between your confidence
and your evidence is the one this practice sews.

## The talk (30 minutes — full script with minute marks)

**[Minutes 0–5 — the most useful document I ever wrote about a design I loved]**
I want to start with a confession about the best design work I've ever done. I had an
architecture I believed in completely — researched, elegant, the kind you defend with
your hands moving. And the most useful document I ever produced about it was not the
design. It was the case *against* it: six of its strongest opponents, argued at full
strength, with honest verdicts published next to the design itself. Some claims held.
Some needed extension. And some died — including one I'd been proud of, which it turned
out a vendor had commoditized while I wasn't looking. Here's what happened when I
published the losses along with the wins: the room changed. People who had been
politely nodding started actually engaging — because the document had already said the
hard things out loud, disagreement stopped being an attack and became a contribution.
That's the talk: a procedure for arguing against yourself, in public, on a schedule —
and why it's the highest-leverage credibility instrument an architect owns.

**[Minutes 5–12 — the procedure]**
Four steps, and the first is where most people fail. **Steelman every opponent at full
strength.** Not the cartoon version — the version that opponent's own engineers would
sign. If you're proposing a custom platform, the steelman is the real vendor product
with its real capabilities, named, dated, current. Here's my test: if reading your
steelman to that vendor's team would embarrass you, it isn't a steelman yet. **Score
with three verdicts, honestly:** HOLDS — the claim survived its strongest opponent;
NEEDS EXTENSION — right, but incomplete in a way you now must name; AT RISK — the
frontier moved, and the claim survives only in a weaker form or not at all. The
three-verdict scale matters because binary scoring lies — almost nothing is simply
right or wrong, and a scale with a middle forces you to say *what kind* of right.
**Publish the verdicts next to the design.** Not in a drawer, not in an appendix
nobody opens — on the same page, so every reader sees the claims and their trial
together. **And let me show you what a conviction looks like,** because the losses are
the point: I once claimed a per-action authorization pattern as novel. Eighteen months
later, two major platforms shipped it as a product feature. The prosecution caught it;
the page now says, in public, "we no longer lead with this claim." That sentence cost
me a talking point and bought me something worth far more — every *other* claim on
that page became believable, because readers watched one die.

**[Minutes 12–19 — why it works: the mechanism, not the virtue]**
This isn't about being humble; humility is a byproduct. Three mechanisms do the work.
**Design quality:** what survives prosecution is genuinely stronger — you found the
extensions before your opponents did, priced the risks before your CFO did, and
retired the weak claims before a conference Q&A did it for you. What dies deserved to
die, and better it dies on your desk than in production. **Room dynamics:** a team
that watches you argue against yourself stops performing agreement. Your dissent from
their work becomes welcome, because you've demonstrated dissent is how you treat work
you love. Their dissent from yours becomes safe, because you've published harder
attacks on yourself than they were going to make. That's not a culture slide; it's an
observed, repeatable effect — hostile review rooms turn collaborative in one cycle of
published self-prosecution. **Personal calibration:** the verdict record is a graded
prediction log. Over cycles, you learn your own bias signature — where you
systematically overclaim (for me: novelty), where you underclaim (for most people:
cost). No feedback mechanism I know teaches an architect's blind spots faster,
because it's your own confident writing, graded against outcomes, in your own hand.

**[Minutes 19–26 — the failure modes, honestly]**
Now the ways this goes wrong, because a corrupted prosecution is worse than none.
**Performative prosecution:** soft charges, guaranteed acquittals — steelmen built to
lose. Worse than nothing, because it inoculates the organization against the real
practice; everyone learns "adversarial review" means theater. The tell: a prosecution
record where everything HOLDS. Mine doesn't. Yours shouldn't. **Prosecution as
procrastination:** the review that never ends, the architect who keeps prosecuting
instead of shipping. Timebox it — one page and an afternoon for a design, a day per
quarter for a program — and ship the verdicts on the clock. **Verdicts without
patches:** the most subtle one. If a conviction doesn't change the artifact — the
page, the diagram, the code — you've built a court with no enforcement, and your
verdicts and your artifacts drift apart until the prosecution is a museum. Every
conviction lands as a correction, same week, and the artifacts can never be allowed
to disagree with the verdicts. **And crisis-only prosecution:** if you only argue
against yourself when something's already on fire, that's not a practice — it's
damage control wearing a judge's robe. It runs on a schedule or it isn't real.

**[Minutes 26–30 — the close and the dare]**
Last escalation, then the assignment. Once the practice works on designs, aim it at
the thing you'll least want to: your *program* — your roadmap, your method, your role.
The self-reference test is the whole game: the moment you exempt your own operation
from the standard you apply to designs, the practice becomes a weapon you point
outward, and everyone can tell. Prosecute the prosecutor, quarterly, in writing. So
here's the dare, and I mean for you to actually do it. This week: one page, against
the architecture you're proudest of. Steelman its strongest opponent at full
strength. Verdict every major claim on the three-point scale. Show one person. I'll
tell you what I tell everyone, and what I've never once seen falsified: if you can't
write the case against your design, you don't understand it yet — and if you can, and
you publish it, you will be trusted in a way that no amount of being right can buy.
The tools were never the gap. The seams were — and the seam between your confidence
and your evidence is the one this practice sews. Thank you.

## One-slide summary

**Procedure:** steelman opponents at full strength (named, dated) → verdict every claim:
HOLDS / NEEDS EXTENSION / AT RISK → publish verdicts beside the design → every
conviction becomes a correction → repeat on a clock. **Effects:** stronger surviving
claims · safe dissent · personal calibration. **Failure modes:** soft charges ·
endless review · verdicts without patches · crisis-only. **The dare:** if you can't
write the case against your design, you don't understand it yet.

## Q&A drill

**"Won't publishing weaknesses arm my critics / competitors?"** Your critics already
have the weaknesses; publishing proves you found them first and priced them. The
alternative isn't strength — it's being corrected in public by someone else, later,
with interest. **"My leadership reads acknowledged risk as incompetence."** Then lead
with the verdict distribution: a prosecution where most claims HOLD is the strongest
competence signal there is, because it's checkable. Unprosecuted confidence is the
thing that should read as incompetence. **"How long should this take?"** One page and
one afternoon for a design; a day per quarter for a program. Timeboxed, because the
review that never ends is a failure mode, not rigor. **"Who prosecutes? The author is
biased."** The author drafts it (the exercise is half the value), then one hostile
reader red-teams the steelmen. Never outsource it entirely — a prosecution you didn't
write teaches you nothing about your own blind spots.
