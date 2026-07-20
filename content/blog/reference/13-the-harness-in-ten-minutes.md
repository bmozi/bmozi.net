# The Harness in Ten Minutes

*A talk kit derived from* Harnessing the Horse *— for team meetings, guild sessions,
brown-bags, and any room that needs the discipline without the twenty chapters.
Contains: why this exists (the genre comparison), the talk script, the one-slide
summary, and the pocket instrument. Generic by design: no employer names, no tool
worship, works for any engineering team.*

---

{{visual:reference-harness-talk-kit}}

## Why this exists — the genre comparison, honestly

The internet is full of nine-minute "five principles for AI coding" videos, and the
right response to them is not disdain — it's attention. A recent representative
example teaches: think before you prompt; maintain a rules/context file; shrink the
blast radius; always have a feedback loop (test-first); protect your architectural
judgment with a delegation filter. **All five are correct.** They are, in fact, a
compressed echo of the Harness Framework — which should be encouraging: independent
practitioners keep converging on the same discipline, and the listicle format
demonstrably travels. Nine minutes, no prerequisites, memorable — that's a delivery
vehicle worth stealing, exactly the way we stole "ship with speed, safety, and
evidence."

What the genre reliably lacks — and where this kit earns its existence — is four
things. **Enforcement:** the videos teach personal habits; habits without gates are
wishes. Nothing fires when the principle is skipped at 11 PM before a demo — and the
entire lesson of every governance system we've ever built is that virtue held by
willpower fails exactly when it matters. **The team:** five personal principles
don't survive contact with six engineers of varying discipline; only shared,
checkable standards do. **Evidence:** anecdote carries the video ("I lost hours
once…"); nothing distinguishes it from the opposite anecdote. **Coherence:** five
tips are a list; a framework tells you what to do when two tips conflict. So the
talk below keeps the genre's brevity and concreteness, and adds precisely those
four missing pieces. That's the whole design.

---

## The talk (10 minutes, ~1,200 words spoken)

**[Minute 1 — the hook, told as a story]**
The first time I used a coding agent with real intent, it generated four hundred
lines in ninety seconds. I spent forty-five minutes reviewing it and almost missed
a race condition that would have fired exactly under production load. I felt two
things at once: excitement — the code was largely good — and fear. Not of the tool.
Of myself. Fear that I couldn't review as fast as it could generate. That asymmetry
— generation is now nearly free, verification is not — is the single fact this
whole talk hangs on. Everything else follows from it.

**[Minute 2 — the frame]**
The agent is a horse: enormously powerful, genuinely fast, and completely
indifferent to where you need to go. The harness is what converts that power into
forward progress — and a harness is not a leash held by hand; it's *equipment*.
That distinction is the talk. Personal discipline is holding the leash; it works
until you're tired, rushed, or impressed. Equipment works at 11 PM before the demo.
Four straps: **Scope, Prove, Enforce, Communicate.**

**[Minutes 3–4 — SCOPE]**
Rule one: if you can't say what you want in two sentences, you're not ready to
prompt. The agent is a very fast contractor with zero product context — it fills
every blank with whatever is most *conventional*, not what's correct for your
system. So you fill the blanks first: what goes in, what comes out, what must never
happen. And you keep each generation small enough to verify in minutes, because
errors don't add across a big generation — they *compound*. One wrong assumption
early ("this can't be null") shapes every decision after it, and you get code
that's internally consistent with a false premise: clean to read, wrong in
production. Small scope isn't caution. It's how you keep the error surface smaller
than your attention.

**[Minutes 4–5 — Scope's second half: context that persists]**
The engineers who do this well spend ten minutes so they stop spending hours. Every
serious tool reads a standing context file — your stack, your conventions, your
architectural decisions, and critically, your *anti-patterns*: the approaches you
already tried and rolled back, with reasons. An agent without that file will
happily re-discover your 2023 mistakes with 2026 speed. Write it once, as a team,
in the repo — not in anyone's head — because context that lives in one person's
prompts is context the team doesn't have.

**[Minutes 5–6 — PROVE]**
Never accept what you can't verify. The practical form: the test exists before the
generation does. Not because test-first is sacred, but because AI code fails in a
specific way — it *looks* excellent; the bugs are subtle: off-by-one, null
assumptions, races under load. Human review alone is exactly the wrong tool for
plausible-looking code, and the volume makes it worse: you cannot read your way to
safety at four hundred lines per ninety seconds. So the objective signal comes
first, and the agent's job is to satisfy it. Proof scales. Attention doesn't.

**[Minutes 6–7 — ENFORCE, the strap the videos skip]**
Here's the uncomfortable question for every "principles" list: what happens when
you skip one? If the answer is "nothing," you have wishes, not standards. Enforce
means the discipline lives in *machinery*: the CI gate that won't merge ungenerated
tests, the lint rule that catches the banned pattern, the review checklist that
blocks, the pipeline that requires the spec artifact before the code artifact.
Enforcement is what makes the discipline survive the person having a bad day — and
it's the difference between a team that has principles and a team that has
*properties*. If you take one thing from these ten minutes, take this: move one
principle from your head into a gate this week.

**[Minutes 7–8 — COMMUNICATE, and the delegation filter]**
Last strap: the humans stay synchronized about what the horse did. Every
significant generation carries its receipt — what was asked, what was assumed, what
was verified. And the team maintains a shared **delegation filter**, which is just
a tiered answer to "what do we hand the agent?": boilerplate, tests, docs,
refactors of well-understood code — hand it over freely. Core business logic, data
models, API contracts — agent drafts, human owns. Security-sensitive, irreversible,
or user-facing-consequential — human decides, always, structurally. Notice that's
not a limit on the tool; it's a map of where *your judgment* must stay in the loop
— because there are two futures for you as an engineer: the one where you're the
architect and the agent executes, and the one where you've become a PR approver
who can no longer explain the codebase. The filter is how you choose the first
future on purpose.

**[Minutes 9–10 — the close]**
The most valuable engineers of the next decade won't be the fastest prompters.
They'll be the ones who think clearly about systems, put their standards into
equipment rather than willpower, and use the horse to go far because the harness
lets them steer. Code is the receipt. Clarity is the product. The harness is how
you keep producing it at horse speed. — Questions.

---

## The one-slide summary

**The fact:** generation is nearly free; verification is not. Speed makes
discipline non-negotiable.
**The frame:** agent = horse · standards = harness · you = rider.
**SCOPE** — two sentences or you're not ready; small, verifiable units; standing
context file with anti-patterns, in the repo.
**PROVE** — the test precedes the generation; never accept what you can't verify;
proof scales, attention doesn't.
**ENFORCE** — principles become gates: CI, lint, checklists, pipelines. What
survives your bad day is what you actually believe.
**COMMUNICATE** — every generation carries its receipt; the team shares one
delegation filter.
**The line:** *code is the receipt, clarity is the product.*

## The pocket instrument (score your team, 0–2 each, today)

1. **Two-sentence test** — can the author of any recent AI-assisted PR state, in
   two sentences, what they asked for and why? (0: no · 1: sometimes · 2: it's in
   the PR description, always)
2. **Context file** — does a standing repo-level context file exist with stack,
   conventions, and *anti-patterns with reasons*? (0: none · 1: stale/personal ·
   2: maintained, in the repo, agent reads it)
3. **Proof-first** — do tests/acceptance criteria exist before generation on
   non-trivial work? (0: after, if ever · 1: usually after · 2: before, by norm)
4. **A real gate** — name one piece of machinery that *blocks* undisciplined AI
   output. (0: none · 1: a checklist someone reads · 2: CI/pipeline enforces it)
5. **Delegation filter** — is there a written, shared answer to "what do we never
   fully delegate"? (0: individual vibes · 1: discussed once · 2: written, used in
   review)

**8–10:** you have a harness. **4–7:** you have habits — move one to a gate.
**0–3:** you have speed without control; start with the context file this week.

---

*Derived from* Harnessing the Horse *(manuscript). The book carries the evidence
base, the failure catalog, the team-transformation playbook, and the receipts this
talk asserts; the talk carries what a room can hold. Same discipline, two
altitudes — teach the ten minutes, and let the pull decide who reads the chapters.*
