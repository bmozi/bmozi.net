# Vision-to-Work Trace Kit

*A Day-5 architecture reference for making sure AI-assisted product and software-factory work starts from clear institutional intent, not just faster execution. Purpose: give architects a reusable way to trace Key Results, product outcomes, active initiatives, requirements, ADRs, architecture deltas, software-factory work, and measured results without exposing internal meeting notes or procurement details.*

---

{{visual:vision-to-work-trace-kit}}

## The problem this kit prevents

AI-assisted delivery can make teams faster at producing requirements, designs, tasks, code, tests, and documentation. That is useful only if the upstream intent is clear.

The failure mode is simple:

> The software factory builds quickly, but nobody can prove the work in flight maps to a current institutional outcome, an accountable product decision, or a metric that matters.

That is not an AI problem. It is a traceability problem. The faster the factory gets, the more expensive this gap becomes.

The architect's first contribution is to govern the chain of intent before governing the chain of automation.

## The trace

Every meaningful product or platform effort should be able to walk this path:

| Layer | Question | Minimum receipt |
| --- | --- | --- |
| Key Result | Which institutional result does this serve? | Named result, current target or baseline, owner |
| Product outcome | What learner, staff, or institutional outcome moves? | Outcome statement, affected population, leading metric |
| Initiative | What work is already in flight? | Initiative name, sponsor, product owner, architecture owner |
| Evidence | Why do we believe this is worth doing? | Student/staff signal, usage data, operational pain, research, or risk |
| Requirement | What must be true for the work to count? | PRD/story/spec with definition of done and non-goals |
| Decision | What hard choice constrains the build? | ADR with options, owner, dissent, revisit trigger |
| Architecture delta | What changes in systems, data, tools, ownership, or policy? | Model delta, dependency impact, risk tier, approval path |
| Factory work | What will agents or engineers produce? | Plan, code, tests, documentation, runbook, review evidence |
| Result | How will we know whether it mattered? | Metric, guardrail, review date, fund/pause/stop rule |

If one row has no owner or receipt, that is the seam to govern before acceleration.

## Kaepora/Merlin pattern, stated generically

In an agentic product-and-delivery system, split the work cleanly:

**Product-intent agents** help research, synthesize, question, draft, and maintain the product model: outcomes, opportunities, assumptions, evidence, risks, open questions, PRDs, and delivery-ready stories.

**Software-factory agents** help plan, implement, test, document, and prepare changes once intent is approved.

The first group answers: **Should we build this, and what would make it valuable?**

The second group answers: **Given approved intent, how do we build it safely and efficiently?**

Do not let the second group compensate for missing answers from the first. A generated task list is not a product vision. A generated design is not evidence that the work matters. A generated PR is not proof that the requirement was worth satisfying.

The handoff should be explicit:

**Outcome + evidence + approved requirement + ADR context + architecture model → software-factory work package.**

## The first meeting questions

Use these without accusing anyone of missing anything:

1. Where is the current source of truth for institutional OKRs or Key Results?
2. Which team owns the mapping from those results to active product initiatives?
3. For this project, who owns the product decision and who owns the architecture decision?
4. What evidence says this problem is worth solving now?
5. What artifact counts as the approved requirement before software-factory work begins?
6. Which ADRs or standards constrain the build?
7. What metric would prove the work moved the intended outcome?
8. What guardrail would stop or revise the work if it creates harm, waste, or drift?
9. Where will the final trace live so future teams and agents can find it?

The tone matters. The point is not "who failed to document this?" The point is "I am trying to avoid wasting WGU time by making the chain from outcome to build visible."

## The one-page artifact

Use this as the working table for a project review.

| Field | Current answer | Missing / risk | Owner | Next action |
| --- | --- | --- | --- | --- |
| Key Result served |  |  |  |  |
| Product outcome |  |  |  |  |
| Learner/staff evidence |  |  |  |  |
| Initiative / project |  |  |  |  |
| Product owner |  |  |  |  |
| Architecture owner |  |  |  |  |
| Requirement artifact |  |  |  |  |
| ADRs / standards |  |  |  |  |
| Architecture delta |  |  |  |  |
| Software-factory package |  |  |  |  |
| Metric and guardrail |  |  |  |  |
| Review date / decision rule |  |  |  |  |

## Anti-patterns

**Starting with the factory.** "Let's see what the agents can build" is fine for a sandbox. It is not a production operating model.

**Treating generated requirements as approved requirements.** AI can draft. Product, architecture, security, and affected operators still approve.

**Using OKR language as decoration.** If a work item says it supports a Key Result but has no current metric, owner, or review cadence, the link is aspirational.

**Letting contextual memory become truth.** Agent observations, interviews, and summaries inform decisions. They become authoritative only through a reviewed promotion path.

**Skipping the stop rule.** A project with no evidence that would stop it is not governed. It is protected by momentum.

## What this changes in the architecture practice

The architect should become the person who can ask, calmly and repeatedly:

> Can we trace this work from institutional intent to measured result?

That question fits every page in this corpus. It is the Decision Layer applied before work begins, the Method applied to product intent, the Harness applied upstream of code, and the Seams thesis applied to the space between strategy and delivery.

If the trace is visible, software factories become leverage.

If the trace is missing, software factories become an expensive way to make ambiguity executable.

---

*Use this kit before any agentic product, platform, or software-factory pilot. The goal is not more documentation. The goal is to prevent unclear intent from becoming fast, polished waste.*
