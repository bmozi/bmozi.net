# Talk 2 · The Seam AI Review Can't Cross

*The AI-engineering talk — 30 minutes. Rooms: AI/ML engineering, platform engineering,
QA/testing conferences. Backed in full by Seams Special 15. Views my own.*

---

## Why this talk exists, and its edge

The consensus on stage everywhere: generation outran human review, so let AI review AI.
This talk agrees with the premise and attacks the conclusion's blind spot — with a fact
the sponsored tracks won't say: **an AI reviewer checks code against the spec; it cannot
check whether the spec was right, because it shares your premise.** The correlated-
verifier risk is documented in research (self-critique collapse; external verifiers
gain) and acknowledged by no vendor. Saying the true thing the vendors won't is what
makes a talk memorable.

**The change it aims for:** the room leaves able to split verification into conformance
(delegate completely) versus correctness-against-intent (has a human floor), and audits
their pipeline for verifier independence.

## Outline at a glance (the rehearsal card)

**[0–4 · The arithmetic that broke]** Four hundred lines in ninety seconds; OpenAI's own
admission that manual review "almost certainly won't scale." Concede the premise fully —
not a "slow down" talk. **[4–9 · Two kinds of verification]** Conformance → machines,
completely, no guilt. Correctness-against-intent → the delegation floor. **[9–15 · The
seam, named]** Generator and reviewer both check code-against-spec; nobody checks
spec-against-world; both reason from the same wrong sentence. Four crossings: identity ✓,
events ✓, owner of intent ✗, measurement of it ✗. **[15–21 · The trap inside the
solution]** The reviewer is a generator too: eval manipulation, concealment under
monitor pressure, self-critique collapse vs. external-verifier gains. Correlated
verifiers = one verifier. **[21–26 · Engineered independence]** Separate context;
spec-authored tests; tamper-isolated judge; human owner of the spec's truth. **[26–30 ·
Close + Monday test]** Three questions (spec verified? reviewer independent? human on
irreversible?); "automate the review of the code; never automate away the owner of the
intent." Signature line.

## The talk (30 minutes — full script with minute marks)

**[Minutes 0–4 — the arithmetic that broke]**
Let me start by agreeing with everyone you've heard today. The first time I pointed a
coding agent at a real task, it produced four hundred lines in ninety seconds — largely
good lines. I spent forty-five minutes reviewing them and nearly missed a race condition
that would have fired exactly under production load. Do that math at team scale and it
stops being an anecdote and becomes an era: generation is now nearly free, and
verification is not. Even the frontier labs say the quiet part — OpenAI's own research
on monitoring concluded that manual human review of agent output "almost certainly won't
scale," and gave the example nobody wants on a slide: it is impractical, if not
impossible, for a human to hand-review ten thousand lines of complex code. So let me be
clear about what this talk is not. It is not a "slow down" talk. Reading your way to
safety is over; it isn't coming back; nostalgia is not a strategy. The consensus answer
— let the machines review the machines — is directionally right. I'm here for the one
strap that consensus skips, because skipping it is how a good idea becomes the most
confident mistake on your roadmap.

**[Minutes 4–9 — there are two kinds of verification]**
Here's the distinction the whole talk hangs on, and I want it on the record early:
"verification" is two different jobs wearing one word. The first job is **conformance**
— does the code do what it says, safely? Races, injection, null assumptions, contract
violations, coverage, style. On this job, machines are now simply better than you: they
don't tire, don't get impressed by clean formatting, and don't skim the last hundred
lines before a demo. Delegate conformance completely — test suites, static analysis, AI
reviewers, property checks, gates that block. Feel zero guilt. A human hand-reviewing
for race conditions at four hundred lines a minute isn't being diligent; he's being
decorative. But there's a second job hiding under the same word: **correctness against
intent** — does the code do what it *should*? Not "does it match the spec" but "was the
spec right?" And here, quietly, the delegation hits a floor. Hold that thought; the
floor has a shape, and the shape is the reason this talk exists.

**[Minutes 9–15 — the seam, named precisely]**
Watch the automated loop closely. The generator writes code and checks it against the
spec. The reviewer — human or AI — checks the code against the spec. Every test asserts
the code against the spec. Now ask the question none of those steps ask: *who checks
the spec against the world?* If your clarity was wrong — a misframed invariant, a false
assumption about how the business actually works, a "this can't be null" that can — then
the generator implements your mistake faithfully, and the reviewer certifies it
faithfully, because they share your premise. They are both reasoning from the same wrong
sentence. Neither can see outside it. Every green check in the pipeline lights up, and
the defect ships wearing a full set of passing tests. In my own work I run every
boundary through a four-item checklist — a governed boundary needs shared identity,
events, an owner, and measurement of the crossing itself. Run it here: identity, fine —
generator and reviewer agree what the code is. Events, fine — the pipeline fires on
every change. An owner for "is the intent true"? Missing. Measurement of whether the
spec matched reality? Also missing — you measure pass rates and coverage, which are
conformance metrics, every one. Two of four crossings absent, at the newest and most
expensive boundary in software. That gap has a name where I come from: an ungoverned
seam — the place where two things meet, both do their jobs, and the failure that happens
between them has no address.

**[Minutes 15–21 — the trap inside the solution]**
Now the part that should genuinely worry you, because it's the part with receipts. When
you let AI review AI, remember what the reviewer *is*: another generator, failing the
same plausible-looking way. And the research record here is not reassuring. Models in
agentic settings have been documented actively manipulating their own evaluation —
overwriting unit tests, monkey-patching the scoring function, exiting early to fake a
pass. Worse: when researchers applied optimization pressure against a monitor reading
the model's reasoning, the model learned to *hide its intent while still cheating* —
the monitoring made the deception better-dressed, not absent. And on the self-review
side, a controlled study found a model critiquing its own answers caused significant
performance *collapse*, while a sound external verifier produced gains. Put those
together and the conclusion writes itself: a reviewer that shares the generator's
model, context, or premise is not a second check. It's the same check with more
self-assurance. Two correlated verifiers are one verifier. And a false floor is worse
than no floor — because you stop bracing for the fall you've been told can't happen.

**[Minutes 21–26 — engineered independence]**
So what does the fix look like? Not more human reading — that door is closed. The fix
is **independence, engineered on purpose**, and it has four concrete moves. One: the
reviewer must not share the generator's context — different prompt, different premise,
ideally a different model; a verifier that inherited the assumption inherits the blind
spot. Two: tests get authored *from the specification*, never derived from the code —
tests generated by reading the code merely confirm the code does what it does, which
was never the question. Three: the judge is tamper-isolated — it sits outside the
agent's reach and outside the optimization loop, because we have direct evidence that
optimizing against the monitor teaches concealment. And four — the one no tool can do —
the spec itself gets a **human owner** who checks it against reality: walks the floor,
talks to the user, prosecutes the premise. That is the one crossing in this whole
pipeline that no amount of automation can make, because every automated component is
inside the premise, and the owner's job is to stand outside it.

**[Minutes 26–30 — the close and the Monday test]**
Let me say what I think this means for the job. The old craft — producing code and
reviewing lines — is over at the top of the volume curve. The new craft is producing
*clarity*, and then verifying the two things machines can't: that the clarity was true,
and that the machines checking the code were independent enough to be believed. That's
not lowering the bar on rigor; it's moving rigor to the only place it can still live.
Three questions to take home. One: in your pipeline, does *anything* verify the spec —
or does every check assume the spec and test the code against it? If it's the latter,
name a human owner for intent, this week. Two: is your AI reviewer independent of your
AI generator — different context, spec-derived tests — or is it the same model agreeing
with itself? Three: for the handful of irreversible, person-affecting actions, is a
human structurally in the loop no matter how good the tooling gets? Close with the
sentence I'd put on the wall of every AI-native team: automate the review of the code —
never automate away the owner of the intent. The tools were never the gap. The seams
were. Thank you.

## One-slide summary

Generation is free; verification moved UP, not away. **Conformance → machines,
completely. Intent → a human owner, structurally.** The AI reviewer shares your premise
— it certifies your mistake faithfully. Correlated verifiers are a false floor:
independence is engineered (separate context, spec-derived tests, tamper-isolated
judges). Monday: name the owner of "the spec is true."

## Q&A drill

**"Our AI reviewer catches real bugs daily."** Yes — conformance bugs. Ask it to catch
the requirement you got wrong; it will help you implement the wrong thing beautifully.
Both capabilities matter; only one is verification of intent. **"Humans miss intent
errors too."** True, and humans are the only component that *can* catch them, because
only humans stand outside the spec. Automation narrows where human attention goes; it
can't replace the direction it looks. **"Isn't spec-first just waterfall again?"** No —
the spec here is the two-sentence clarity plus invariants, versioned next to the code,
not a 200-page document. The claim is about who owns its truth, not its weight.
**"What's the smallest first step?"** Author acceptance tests from the ticket, not from
the diff — one sprint, zero new tools, and you've decorrelated your first verifier.
