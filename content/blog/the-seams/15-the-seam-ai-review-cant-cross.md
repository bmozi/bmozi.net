# The Seam AI Review Can't Cross

*A special edition of The Seams. Views my own; examples composite and anonymized from years of systems work.*

---

Here is the new consensus, and I mostly believe it: generation outran human review years ago — four hundred lines in ninety seconds, and no honest person claims to read them all — so the answer is to let the machines review the machines. AI writes it, AI reviews it, the gates catch what humans no longer can. The instinct is correct. Reading your way to safety at machine volume is arithmetic that stopped closing a long time ago, and pretending otherwise is how teams ship on hope.

But there's one strap this reasoning always skips, and skipping it is how "let AI review it" curdles from wisdom into the most confident mistake on the roadmap. So let me say the part the consensus leaves out: verification didn't die when generation got cheap. It **moved up a level** — and the level it landed on is a seam that no reviewer, human or machine, can cross.

## Verification moved; it didn't leave

Start by refusing a false choice. "Humans can't review at this volume" is true. "So delegate verification to AI" does not follow to *all* verification — only to one kind of it. There are two, and they are not the same job.

The first kind is **conformance**: does the code do what it says, safely, without known failure modes? Races, injection, null assumptions, contract violations, missing tests, style drift. This is exactly what machines are now better at than you, at any hour, at any volume. Delegate it completely — test suites, static analysis, AI reviewers, property checks, CI gates that block. Feel no guilt. A human hand-reviewing for a race condition at four hundred lines a minute isn't being diligent; he's being decorative.

The second kind is **correctness against intent**: does the code do what it *should* — meaning, does it match the clarity you were actually trying to produce? And here the delegation quietly hits a floor, because of a fact about machine review that the consensus never states out loud: **an AI reviewer checks the code against the spec. It cannot check whether the spec was right.** If your clarity was wrong — a misframed invariant, a false assumption about how enrollment actually works, a "this can't be null" that can — the generator implements your mistake faithfully and the reviewer certifies it faithfully, because *they share your premise.* Both are reasoning from the same wrong sentence. Neither can see outside it. Every green check in the pipeline lights up, and the defect ships wearing a full set of passing tests.

## The seam, named precisely

That gap has a shape, and by now you know the shape. Two things meet — the generator that writes and the reviewer that checks — and each does its job correctly. But neither one owns the crossing that actually matters: *was the intent true in the first place?* The generator owns "code matches spec." The reviewer owns "code matches spec." Nobody in the automated loop owns "spec matches the world." Everyone does their step; the person still falls through — except now the person who falls through is you, three sprints later, discovering that a system everyone verified was built on a sentence nobody checked.

Run the four crossings on it, the way we run them on everything. **Shared identity?** Yes — generator and reviewer agree on what the code is. **Events?** Yes — the pipeline fires on every change. **Owner?** Here it fails: there is no owner for *is the clarity correct*, only owners for *is the code correct*. **Measurement of the crossing itself?** Also failed: you measure test pass rates and coverage — conformance metrics, every one — and nothing measures whether the specification matched reality. Two of four crossings missing, at the newest and most expensive boundary in software. That is a textbook ungoverned seam, and "let AI review the AI" doesn't close it. It paves over it and paints the pavement green.

{{visual:ai-review-intent-seam}}

## The trap inside the solution: correlated reviewers

There's a second failure folded into the first, and it's the one that turns a good idea dangerous. When you let AI review AI, remember what the reviewer *is*: another generator, failing the same plausible-looking way. AI-written code fails by looking excellent — subtle, confident, wrong. An AI reviewer sharing the generator's model produces exactly the same excellence in its verdict: a confident green check on subtly wrong code, and now *no human ever looked.* You didn't add a verification layer. You added a second witness who was standing next to the first, seeing the same thing, agreeing for the same reason. Two correlated checks are not two checks. They're one check with more self-assurance.

The mitigation is not "go back to reading every line" — that door is closed. The mitigation is **independence**, engineered on purpose. The reviewer should not share the generator's context, prompt, or assumptions; a verifier that inherited the premise inherits the blind spot. The tests should be authored *against the specification*, not derived from the code — because tests generated from the code merely confirm the code does what it does, which is not a question anyone was asking. And the spec itself — the clarity — gets a human owner who checks it against reality, precisely because that is the one crossing no amount of automated verification can make. Diverse, independent checks catch what a single confident pass misses. Correlated verifiers are a false floor, and false floors are worse than no floor: you stop bracing for a fall you've been told can't happen.

## What this means for the work

Say it plainly, because it reframes the whole job. The old craft was producing code and reviewing lines. That craft is over at the top of the volume curve, and no nostalgia brings it back. The new craft — the one that's actually yours now — is producing *clarity*, and then verifying the two things machines can't: that the clarity was true, and that the machines checking the code were independent enough to be believed. You're not reviewing the code anymore. You're reviewing whether reality matches your model, and whether your verifiers can disagree with each other. The AI proves the code matches the spec. Only a human can prove the spec matches the world — and only a skeptic keeps the verifiers honest.

This is not lowering the bar on rigor. At this volume it's the only place rigor can still live. You moved it up, off the lines and onto the clarity and the independence — which happen to be the two things you were always uniquely for.

## The Monday test

Take your team's "let AI review it" setup — there is one, or there's about to be — and ask three questions. One: does anything in the loop verify that the *specification* was correct, or does every check assume the spec and only test the code against it? If every check assumes the spec, you have conformance with no owner for intent — name that owner, in a person. Two: is your AI reviewer independent of your AI generator — different context, different assumptions, tests written from the spec rather than the code — or are they the same model agreeing with itself? If they're correlated, your second opinion isn't one. Three: for the handful of decisions that are irreversible or consequential-for-people, is a human structurally in the loop no matter how good the tooling gets — or has "let AI review it" quietly swallowed the tier that was supposed to stay human?

A setup that passes all three earns the speed the consensus promises, and keeps it, because the failures it can't see are owned by someone who can. A setup that fails them is the old story in new clothes: generation got cheap, verification got automated, everyone cheered — and the one seam that mattered, the gap between the spec and the world, went to the place seams always go. To be nobody's fault.

Automate the review of the code. Never automate away the owner of the intent.

**The tools were never the gap. The seams were.**

---

*Run the three questions on your team's AI-review setup and post which one it failed. My prediction: question one, nearly every time — everything checks the code against the spec, and nothing checks the spec against the world.*
