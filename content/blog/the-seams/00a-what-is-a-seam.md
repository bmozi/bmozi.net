# What Is a Seam?

*Part 0 of The Seams — start here. Everything that follows in this series builds on one word; this piece teaches it whole, and teaches you how to find one before dinner. Views my own; examples composite and anonymized from years of systems work.*

---

I'm about to spend an entire series arguing that the most expensive failures in your organization live in a place most people have never named. Before I argue anything, I owe you the word itself — from a five-year-old's version to the one I'd defend in front of a hostile review board. And then I owe you something more useful: a way to find one yourself, today, even if you've never noticed one in your life.

## Start with the stuffed animal

A stuffed animal is made of pieces of fabric. The pieces are strong — you can pull on them all day. The places where pieces are *sewn together* are where the stuffing falls out. Nobody has ever lost stuffing through the middle of a panel. Always at the stitching.

That's this entire series in one toy: your organization's pieces — the CRM, the records system, the support team, the engineering team — are mostly fine. Decades of investment made them strong. What nobody sewed properly is the stitching between them, and that is precisely where your customers, your data, and your accountability fall out. **Things don't get lost in systems. They get lost between them.**

{{visual:stuffed-animal-seam}}

## Now the definition, precisely

A seam is any place where two things meet and *neither one is in charge of the meeting.* Two systems that each work correctly but disagree about what "active" means. Two departments that each do their jobs but where the handoff between them belongs to no one. Two facts — the claim on the slide and the number in production — that nobody reconciles.

Notice the defining property: the seam isn't located *in* either thing. You can't point to it on either system's architecture diagram or either team's org chart. It exists only in the relationship — which is exactly why it's unowned, unmeasured, and unblamed. When a customer falls through one, each side's dashboard stays green, each side's postmortem honestly concludes "we did our part," and the failure has no address. The seam is the place failure goes to be nobody's fault.

## The nuance almost everyone misses: seams are not defects

Seams are not bad. Seams are *necessary* — they're where you deliberately cut so that pieces can be owned, replaced, understood, and staffed separately. A system with no seams isn't a triumph; it's a monolith where everything touches everything and no piece can ever be replaced. The whole discipline of architecture is substantially the art of placing seams *well*.

So the sin is never *having* seams. The sin is leaving them **ungoverned** — cut, but not sewn. Don't fear boundaries, and don't chase "seamlessness," which is a marketing word for *the seams are hidden from you*. Place your seams deliberately, then govern every one you place.

## What "governed" means — the four crossings

A governed seam has exactly four things crossing it. Memorize these; they're the whole checklist.

**A shared identity.** Both sides agree on who or what this is. If two systems have different answers to "is this the same person?", every other guarantee collapses.

**Events.** When something material happens on one side, the other side — and the person affected — learns of it *structurally*, as a consequence of the change itself, not through luck, heroics, or a weekly sync.

**An owner.** A human accountable for the *journey across*, not merely the territory on each side. Everyone owning their step while no one owns the crossing is how everyone does their job and the customer still gets lost.

**Measurement of the crossing itself.** The end-to-end promise — "a submission becomes a visible status within a minute" — measured as its own number, because each side's local uptime can be perfect while the journey across takes six silent weeks.

Identity, events, ownership, measurement. When someone shows you an integration, a reorg, or an AI deployment, ask which of the four cross each new gap it creates.

{{visual:seam-four-crossings}}

## How to find one — because you can't see them, and neither can anyone else

Here's the confession that should relieve you: **nobody sees seams directly. Ever.** A seam is a gap, and gaps are invisible by definition. The people who seem to "see" them have trained themselves on something else entirely — the *exhaust*. You never see wind; you see what it moves. Same here. So stop trying to spot seams and learn the symptoms instead:

Every time someone says *"let me check with the other team,"* a seam just spoke. Every time a person must *re-explain their story* to a second party, they just crossed an ungoverned one. Every **spreadsheet that exists to reconcile two systems** is a seam made visible — spreadsheets are seam scar tissue. Every worker copying data from one screen into another by hand is a human standing inside a seam, holding it closed with their fingers. The *status-check call* ("just wondering where my thing is") is a seam announcing that no event crossed it. The silence after *"who owns this?"* in a meeting. Two decks showing *different numbers for the same metric*. The colleague everyone calls "the one who knows how X talks to Y" — that's human middleware, a seam held shut by one person's memory, and it opens the day they take vacation. And after every incident: *blame with no address* — "their side" versus "our side" means the failure happened in territory neither side owns.

When symptoms aren't enough, there's a method, and it requires zero talent: **don't hunt seams — trace journeys.** Pick one item — a document, a request, a person — and follow it end to end, writing down what happens. You will not see seams while doing this. But every time you have to *ask a second person what happened next*, mark the spot: you just crossed one. The trace does the seeing for you. This is how all expertise works — the novice runs the procedure, and after twenty traces the seams start jumping out unbidden. The expert is just someone whose checklist moved into their eyes. You're not deficient if you can't spot one today. You're pre-training.

One warning from recent, humbling experience: the most dangerous seams are the ones that *pass inspection*. I found one in my own publishing pipeline — two copies of every article, source and published, checked and found perfectly in sync. Victory? No: they were in sync because one person had been manually copying files after every edit, diligently, for weeks. Shared identity, yes. Events on drift? None. Owner? "Someone remembers" — which is human middleware. Measurement? The check I'd just run was the first ever. The seam was being held closed by vigilance — a hand on a leash, not equipment — and vigilance fails precisely when it matters: the busy week, the handoff, the vacation. If your answer to "how does this stay correct?" is *someone is careful*, you haven't found governance. You've found the seam.

## The generalization — where this becomes a worldview

The same failure shape repeats at every scale, and the same four crossings govern all of them. *Between systems:* the classic case. *Between teams:* every handoff on the org chart is a seam, which is why reorgs that shrink teams without redesigning handoffs just move coordination cost into the dark. *Between human and machine:* the boundary where you delegate to AI is a seam — what crosses it determines whether the tool amplifies your judgment or quietly replaces it. *Between claims and evidence:* a trust statement with no number behind it is an ungoverned seam between story and reality. *And inside yourself:* the gap between your confidence and your track record is a seam too — the person who writes predictions down and grades them is sewing it; the person who doesn't is losing stuffing there and calling it experience.

One diagnostic works at every scale, and it's the most useful question I know: **where do two things meet with no owner, no shared truth, and no notification?** Ask it of an architecture, an org chart, an AI rollout, or your own reasoning, and it points — reliably — at where the next loss is already in progress.

## Why this is the cornerstone

Every era invests in the pieces: better databases, better platforms, better models, better hires. Sensible — and now largely done. The pieces are, mostly, excellent. What remains ungoverned in almost every organization is the stitching — and that's where the returns have moved. It's also, not coincidentally, where the *people* are: the customer between departments, the patient between providers, the student between offices. Governing seams isn't an integration strategy. It's the structural form of caring about the person in the gap.

## Your first trace

Don't wait for the rest of the series. This week, pick one thing that recently went wrong-ish in your world — a delayed request, a lost thread, a surprise — and trace it end to end. Mark every spot where you had to ask someone else what happened next. Then run the four crossings on the worst spot you marked. You will find an ungoverned seam on your first attempt — everyone does, because everyone is standing next to one. Naming it is the first stitch. The rest of this series is how to sew.

**The tools were never the gap. The seams were.**

---

*What did your first trace find — and which of the four crossings was missing? Post it. I'll wager it's the owner, two times out of three.*
