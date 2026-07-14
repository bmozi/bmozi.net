import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";

export const metadata: Metadata = {
  title: "The Trust Pack — SLOs, FERPA Purposes, Access, and AI Action Tiers",
  description:
    "The operational spine of governed trust: the SLO catalog with concrete numbers, the FERPA purpose taxonomy, relationship-based access, data classification and retention, and the five AI action risk tiers — each explained in plain language.",
  alternates: { canonical: "/wgu/trust-pack" },
};

const slos = [
  {
    surface: "Student login success",
    target: "99.9% weekly",
    means:
      "Out of every 1,000 login attempts by real students, no more than one fails for a system reason. Measured by real-user monitoring, not synthetic probes — because the complaint was 'logging in took multiple attempts every time,' and only real attempts settle whether that's fixed.",
  },
  {
    surface: "Student front door availability",
    target: "99.95% monthly",
    means:
      "The portal, submission flows, and status views — everything a student touches — down no more than ~22 minutes per month. Staff tools carry a slightly looser 99.9% (~43 min): when trade-offs bite, the student side wins by policy.",
  },
  {
    surface: "Document status visibility",
    target: "< 60 seconds from receipt",
    means:
      "From the moment a transcript hits the records system to the moment the student's status view shows 'received' — under a minute. This is the anti-black-hole number: the window during which a submission is invisible is the window in which trust decays.",
  },
  {
    surface: "Timeline projection lag",
    target: "P95 < 5 seconds",
    means:
      "95% of events appear in the Student Timeline views within 5 seconds of happening. Context views may lag this much; anything a student acts on doesn't lag at all, because the action path reads the system of record directly (read-your-writes, Decision 04).",
  },
  {
    surface: "Change notification delivery",
    target: "< 5 minutes",
    means:
      "Any material change to a student's record — start date, aid status, enrollment state — generates a student-facing notification within five minutes. 'Nothing changes silently' is enforceable only if the notification pipeline has its own number.",
  },
  {
    surface: "Policy decision latency",
    target: "P99 < 100 ms",
    means:
      "Authorization checks — human or agent — add no perceptible delay. This preempts the classic objection that centralized policy becomes the bottleneck: enforcement is local, and this number proves it stays that way.",
  },
  {
    surface: "SLA case escalation",
    target: "100% within threshold",
    means:
      "Not an availability number — a completeness one. Every case that ages past its SLA threshold escalates automatically, every time. A single missed escalation is an incident with a postmortem, because one missed escalation is one student back in a black hole.",
  },
];

const budgetPolicy = [
  "Each SLO carries an error budget — the amount of failure the target permits. Budgets make reliability a resource you spend deliberately instead of a virtue you claim.",
  "Budget exhausted → feature work on that surface pauses and the team ships reliability until the budget recovers. No exceptions by seniority; the policy is what makes the number real.",
  "SLOs are reviewed beside the Key Results, quarterly, in the open. A target nobody reviews is a decoration.",
];

const purposes = [
  {
    purpose: "enrollment-administration",
    covers: "Processing applications, transcripts, start dates, conferral",
    explain:
      "The registrar's work. The broadest legitimate access to records data, and the reason most staff can see most enrollment state — but tagged, so 'why did this person access this record' always has an answer.",
  },
  {
    purpose: "academic-delivery",
    covers: "Teaching, assessment, competency certification",
    explain:
      "What instructors and evaluators need to do their jobs — scoped to the students they actually teach or evaluate. An evaluator sees submissions anonymized; an instructor sees their course roster, not the college.",
  },
  {
    purpose: "student-support",
    covers: "Mentoring, coaching, case resolution, outreach",
    explain:
      "The mentor and counselor purpose. Includes momentum and risk signals — but the purpose tag means a support query can't be repurposed for, say, research without re-authorization. Purpose limitation is the FERPA concept doing the work here.",
  },
  {
    purpose: "financial-aid-processing",
    covers: "Aid packaging, disbursement, Title IV compliance",
    explain:
      "Aid staff see financial detail no one else needs. Kept separate from student-support deliberately: a mentor knows aid friction exists (a flag), not the student's family finances (the data).",
  },
  {
    purpose: "institutional-research",
    covers: "Efficacy studies, accreditation evidence, learning science",
    explain:
      "De-identified or cohort-level by default. The ledger's replay serves this purpose without exposing individuals — which is exactly why PII lives outside it.",
  },
  {
    purpose: "health-safety-emergency",
    covers: "Imminent risk to a student or others",
    explain:
      "FERPA's emergency exception, modeled explicitly rather than handled ad hoc: elevated access, automatic audit, mandatory after-action review. Rare by design, accountable by construction.",
  },
];

const rebac = [
  {
    rel: "mentor-of",
    grants: "Timeline view, momentum signals, commitments, case status for their assigned students",
    explain:
      "Access follows the assignment, automatically: reassign the mentor, and access moves the same hour. No orphaned permissions, no 'former mentor can still see everything' — the relationship is the permission.",
  },
  {
    rel: "instructor-of",
    grants: "Course progress, assessment readiness, blockers for enrolled students in their courses",
    explain:
      "Scoped to the course relationship, not the person's job title. Teaching two courses grants two rosters — not a college-wide view.",
  },
  {
    rel: "evaluator-of",
    grants: "Anonymized submissions and rubrics for assigned evaluations",
    explain:
      "The double blind is structural: evaluators never see identity; students never see evaluator identity. WGU's evaluation integrity model, enforced by the access layer instead of by procedure.",
  },
  {
    rel: "case-owner-of",
    grants: "Full case context, prior commitments, related documents while the case is theirs",
    explain:
      "Whoever owns the case sees everything needed to resolve it — and ownership transfer moves that access with it. 'No queue without an owner' has an access-control mirror: no access without ownership.",
  },
  {
    rel: "self",
    grants: "The student's own timeline, documents, statuses, commitments made to them, and audit of who accessed what",
    explain:
      "The most important relationship. Students see their own record — including who changed it and who looked at it. Transparency to the data subject is the trust signal that costs least and means most.",
  },
];

const classifications = [
  {
    tier: "Restricted",
    examples: "SSN, financial account detail, health information",
    rule: "Field-level encryption, named-purpose access only, shortest legal retention. Never in events, never in prompts, never in projections — reference-only everywhere.",
  },
  {
    tier: "Protected education record",
    examples: "Grades, competency results, enrollment status, aid status",
    rule: "FERPA-governed: purpose tag + relationship required to read. Retained per the academic-record schedule (transcripts: permanent). PII-by-reference in all streams.",
  },
  {
    tier: "Internal operational",
    examples: "Case metadata, SLA timers, queue depths, staff assignments",
    rule: "Staff-visible per role, no special handling — but still audited, because operational data reveals student circumstances by inference.",
  },
  {
    tier: "De-identified / aggregate",
    examples: "Cohort trends, efficacy results, dashboard metrics",
    rule: "Freely usable for research and decisioning once k-anonymity thresholds pass. The default currency of analytics — individuals only with purpose and relationship.",
  },
];

const aiTiers = [
  {
    tier: "Tier 0 · Retrieve & summarize",
    policy: "Automatic",
    examples: "Answering a mentor's question from governed context; summarizing a case history",
    explain:
      "Reads only, through permissioned projections, inside the caller's own access rights. The agent can never summarize what the human asking couldn't see themselves — delegation means inheriting limits, not just authority.",
  },
  {
    tier: "Tier 1 · Suggest to staff",
    policy: "Automatic, logged",
    examples: "Coach copilot drafting outreach; next-best-action surfacing a risk",
    explain:
      "The human is the actuator. Every suggestion logs its evidence (which signals, which model version) so a staff member can always ask 'why is it telling me this' and get an answer.",
  },
  {
    tier: "Tier 2 · Student-facing nudge",
    policy: "Automatic within budgets",
    examples: "Pacing reminders, status updates, study-plan prompts",
    explain:
      "Direct-to-student automation, bounded three ways: frequency caps (no nagging), opt-out honored absolutely, and content templates approved by humans. The experimentation framework watches whether nudges help — nudges that don't move outcomes get retired.",
  },
  {
    tier: "Tier 3 · Consequential action",
    policy: "Human-in-the-loop, always",
    examples: "Case escalations affecting standing, aid-related outreach, intervention plans",
    explain:
      "The agent prepares, a named human approves, the approval is itself an audited event (human.approval.recorded). 'High-impact' is defined in the action registry, not judged in the moment — if an action type isn't registered as Tier ≤2, it's Tier 3 by default.",
  },
  {
    tier: "Tier 4 · Prohibited to automate",
    policy: "Human only, forever",
    examples: "Grades and competency certification, aid decisions, conferral, discipline",
    explain:
      "The line that never moves: official academic and financial determinations are human decisions. AI may inform the human's view; it may never take the action. This is the clear line between AI recommendation and official decision, made structural.",
  },
];

const containment = [
  "Assume injection succeeds: agents read student-submitted content, so containment — not prevention — is the design stance. Scoped tools mean a compromised agent can only do what its registered tools allow.",
  "The lethal trifecta is kept structurally apart: an agent with access to private data gets no untrusted input in the same context; an agent processing untrusted input gets no exfiltration path. No single agent context ever holds all three.",
  "Every tool call carries the full envelope — actor, on-behalf-of, purpose, correlation — so a red-team exercise or a real incident replays exactly like a student journey does.",
  "Red-team each term, before each new tier-2+ action type, and after every model change. Findings feed the risk register with owners and tripwires like everything else.",
];

export default function TrustPackPage() {
  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/workspace" className="group inline-flex items-center gap-3">
            <BrandLockup markClassName="h-9 w-9" textClassName="text-lg" />
          </Link>
          <Link
            href="/wgu"
            className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            WGU Hub
          </Link>
        </nav>
      </header>

      <WguImmersiveHero
        imageSrc="/wgu/visuals/trust-pack-hero.webp"
        imageAlt="Trust pack evidence ledger with control proofs, risk gates, and audit-ready artifacts."
        accent="signal"
        minHeight="min-h-[700px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <ShieldCheck size={16} aria-hidden="true" />
            The trust pack · the operational spine of governed trust
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Trust is a set of numbers with consequences.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            Every trust claim on this site — reliable access, nothing silent,
            governed AI, FERPA by design — resolves here into a measurable
            signal with an explanation of what it means and why it matters.
            Written for the CISO, the registrar, and the engineer to read
            together.
          </p>
        </div>
      </WguImmersiveHero>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The SLO catalog
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Seven numbers that make the guardrails real.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {slos.map((s) => (
              <article
                key={s.surface}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-lg font-black text-white">
                    {s.surface}
                  </p>
                  <span className="border border-[var(--signal)] px-2 py-1 font-mono text-xs font-bold text-[var(--signal)]">
                    {s.target}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {s.means}
                </p>
              </article>
            ))}
            <article className="border border-[var(--amber)] bg-black/30 p-5">
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Error-budget policy — what makes these real
              </p>
              <ul className="mt-3 space-y-2">
                {budgetPolicy.map((b) => (
                  <li
                    key={b}
                    className="border-l-2 border-[var(--amber)]/50 pl-3 text-sm leading-6 text-[var(--soft)]"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The FERPA purpose taxonomy
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Six purposes. Every access names one.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--soft)]">
            Purpose limitation is FERPA&apos;s core idea: education records are
            used for the reason they were collected, by people with a
            legitimate interest in that reason. In this architecture the
            purpose is a tag on every token, event, and query — so compliance
            is a property of the data flow, not a training slide.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {purposes.map((p) => (
              <article
                key={p.purpose}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-sm font-bold text-[var(--signal)]">
                  {p.purpose}
                </p>
                <p className="mt-2 font-mono text-[0.7rem] uppercase text-[var(--amber)]">
                  {p.covers}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {p.explain}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Relationship-based access
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            Access follows relationships, not job titles.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/70">
            Roles answer &ldquo;what kind of employee is this?&rdquo;
            Relationships answer the question FERPA actually asks:
            &ldquo;what is this person to this student?&rdquo; The access
            model is built on the second question.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {rebac.map((r) => (
              <article
                key={r.rel}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <p className="font-mono text-sm font-bold text-[var(--magenta)]">
                    {r.rel}
                  </p>
                  <p className="font-mono text-[0.7rem] uppercase text-black/50">
                    {r.grants}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-black/75">
                  {r.explain}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {classifications.map((c) => (
              <article
                key={c.tier}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <p className="font-mono text-xs font-bold uppercase text-[var(--magenta)]">
                  {c.tier}
                </p>
                <p className="mt-2 font-mono text-[0.7rem] uppercase text-black/50">
                  {c.examples}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/75">
                  {c.rule}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The AI action tiers
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Five tiers, one unmovable line.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--soft)]">
            Every action an agent can take is registered to a tier before it
            can be taken at all. The tiers decide the approval path; the
            registry decides the tier; nothing is judged in the moment.
          </p>
          <div className="mt-8 grid gap-3">
            {aiTiers.map((t) => (
              <article
                key={t.tier}
                className="grid gap-3 border border-white/12 bg-white/[0.035] p-6 lg:grid-cols-[0.35fr_0.2fr_1fr]"
              >
                <p className="font-display text-lg font-black leading-tight text-white">
                  {t.tier}
                </p>
                <div>
                  <span
                    className={`border px-2 py-1 font-mono text-[0.7rem] font-bold uppercase ${
                      t.policy.includes("Prohibited") ||
                      t.policy.includes("Human only")
                        ? "border-[var(--magenta)] text-[var(--magenta)]"
                        : t.policy.includes("loop")
                          ? "border-[var(--amber)] text-[var(--amber)]"
                          : "border-[var(--signal)] text-[var(--signal)]"
                    }`}
                  >
                    {t.policy}
                  </span>
                  <p className="mt-2 font-mono text-[0.7rem] uppercase leading-5 text-white/50">
                    {t.examples}
                  </p>
                </div>
                <p className="text-sm leading-6 text-[var(--soft)]">
                  {t.explain}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 border border-[var(--magenta)] bg-black/30 p-6">
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              Injection containment — the working assumptions
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {containment.map((c) => (
                <p
                  key={c}
                  className="border-l-2 border-[var(--magenta)]/50 pl-4 text-sm leading-6 text-[var(--soft)]"
                >
                  {c}
                </p>
              ))}
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-6 text-white/50">
            Targets and taxonomies are the proposal carried into the Days
            31–60 ratification; numbers tighten as real-user baselines arrive.
            Enforcement mechanics live in the identity &amp; policy layer of{" "}
            <Link
              href="/wgu/architecture-v2"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              Architecture v2
            </Link>
            ; the envelope that carries purpose and delegation is specified in
            the{" "}
            <Link
              href="/wgu/engineering-standards"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              engineering standards
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
