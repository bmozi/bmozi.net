import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarClock } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "The First 90 Days — A Listen-First Plan, Scheduled",
  description:
    "The listen-first plan for the new student system, anchored to real dates: Listen & Diagnose, Frame & Align, Prove & Sequence — with success criteria and student-centered metrics.",
  alternates: { canonical: "/wgu/first-90-days" },
};

type Phase = {
  window: string;
  days: string;
  name: string;
  purpose: string;
  objectives: string[];
  activities: string[];
  good: string[];
};

const phases: Phase[] = [
  {
    window: "Jul 20 – Aug 18, 2026",
    days: "Days 1–30",
    name: "Listen & Diagnose",
    purpose:
      "Understand the system, the team, and the student — as they actually are.",
    objectives: [
      "Build trust with the architecture team and key partners in enrollment, financial aid, records, and IT/support.",
      "Map the real current-state architecture and the actual student journey, including where it silently breaks.",
      "Ground the team in the student's voice as shared evidence, not opinion.",
    ],
    activities: [
      "1:1s with every architect and with leaders across the student-lifecycle departments — mostly listening.",
      "Trace two or three real journeys end to end (enrollment, document/evaluation processing, financial aid) and document every handoff and failure point.",
      "Run the seam audit: for each traced failure mode, determine whether the workflow ran through the CRM, around it, or died between systems — the tools were present when the complaints happened, so the diagnosis must name the seam, not the tool.",
      "Inventory current systems, data ownership, integration points, and known reliability pain (auth/login, outages) — including verifying the current SIS estate and whether the ground-up mandate includes the academic record itself, which decides whether the records workstream is a side effort or the center of the transformation.",
      "Stand up a lightweight voice-of-the-student evidence log the team can keep adding to.",
    ],
    good: [
      "A shared, honest current-state map — including the black holes, silent state changes, and dropped handoffs.",
      "The team feels heard; the constraints and decisions already made are understood.",
      "A short written diagnosis of the top systemic failure modes, in the students' words.",
    ],
  },
  {
    window: "Aug 19 – Sep 17, 2026",
    days: "Days 31–60",
    name: "Frame & Align",
    purpose:
      "Turn diagnosis into shared principles and a target picture the team owns.",
    objectives: [
      "Ratify the design principles as a team so they're ours, not mine.",
      "Agree on a target-state architecture direction and the biggest bets.",
      "Establish the decision-making cadence and how decisions are recorded.",
    ],
    activities: [
      "Facilitate working sessions to refine and adopt the seven guardrails: no black holes, nothing silent, no dropped handoffs, one truth, stays up, proactive, amplify mentors.",
      "Bring the student-timeline target state pressure-tested against Days 1–30 reality through event storming — the adversarial review, v2, and ADR-001 come with it, armed with the seam-audit evidence: if the failures ran around the CRM, the seams argument is proven internally, not just from public reviews.",
      "Close the two known gaps: define access-layer availability and login-success SLOs, and make administrative lifecycle events first-class with owner projections.",
      "Start an ADR practice so choices and trade-offs are written down and visible.",
      "Identify the first end-to-end thread worth proving — candidate: document intake → tracked status → student-visible state.",
    ],
    good: [
      "Team-owned principles and a target-state direction leadership has seen and supports.",
      "A living decision log; ambiguity about who owns which data materially reduced.",
      "A chosen first thread with clear success criteria.",
    ],
  },
  {
    window: "Sep 18 – Oct 17, 2026",
    days: "Days 61–90",
    name: "Prove & Sequence",
    purpose:
      "Show one thread working end to end, and lay out the roadmap.",
    objectives: [
      "Demonstrate a thin, real slice that eliminates one class of student pain.",
      "Publish a sequenced roadmap tied to the principles and student outcomes.",
      "Define the metrics that tell us we're actually serving students better.",
    ],
    activities: [
      "Deliver the thin vertical slice — a document-received event projected into the student view so a student can see its status, with an immutable audit trail and an accountable owner. One black hole, provably gone.",
      "Use the slice as the lighthouse for the adoption strategy: paved roads, one lighthouse team, incremental adapters.",
      "Produce a phased roadmap for the next 2–4 quarters, sequencing capabilities by student impact and dependency, not convenience.",
      "Define student-centered success metrics and socialize the roadmap with team and leadership; fold feedback in.",
    ],
    good: [
      "A working proof point the team is proud of and students would feel.",
      "A credible, sequenced roadmap with owners and success metrics.",
      "Shared confidence in direction — momentum that's real, not just planned.",
    ],
  },
];

const metrics = [
  {
    metric: "Black-hole rate",
    definition: "Untracked submissions as a share of all student submissions.",
  },
  {
    metric: "Case-resolution time",
    definition: "Intake to resolution, per lifecycle state, against SLA.",
  },
  {
    metric: "Silent-change incidents",
    definition:
      "Material record changes without student notification — target: zero.",
  },
  {
    metric: "Login success rate",
    definition: "Front-door SLO with error budget, measured by real users.",
  },
  {
    metric: "Proactive-notification coverage",
    definition:
      "Share of meaningful process steps that notify the student unprompted.",
  },
];

export default function First90DaysPage() {
  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="group inline-flex items-center gap-3">
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

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <CalendarClock size={16} aria-hidden="true" />
            First 90 days · Day 1 = July 20, 2026
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Listen first. Earn the right to propose. Then prove one thread.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            This plan sequences the work behind the{" "}
            <Link
              href="/wgu/student-system-priorities"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              Voice-of-the-Student priorities
            </Link>
            . The goal of the first month is to earn the right to propose
            direction, not to arrive with answers. Nothing here commits the
            team to my conclusions — these are the questions we answer together
            and the cadence I&apos;ll drive to get us there. Timeboxes are a
            cadence, not a contract; the sequence matters more than the exact
            dates.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-6">
            {phases.map((phase, index) => (
              <article
                key={phase.name}
                className="border border-white/12 bg-white/[0.035] p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs uppercase text-[var(--signal)]">
                      Phase {index + 1} · {phase.days}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black leading-tight text-white sm:text-4xl">
                      {phase.name}
                    </h2>
                    <p className="mt-2 text-base italic leading-7 text-[var(--soft)]">
                      {phase.purpose}
                    </p>
                  </div>
                  <span className="border border-[var(--amber)] px-3 py-2 font-mono text-sm font-bold text-[var(--amber)]">
                    {phase.window}
                  </span>
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                  <div>
                    <p className="font-mono text-xs uppercase text-[var(--signal)]">
                      Objectives
                    </p>
                    <ul className="mt-3 space-y-2">
                      {phase.objectives.map((o) => (
                        <li
                          key={o}
                          className="border-l-2 border-[var(--signal)]/50 pl-3 text-sm leading-6 text-[var(--soft)]"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase text-[var(--amber)]">
                      Key activities
                    </p>
                    <ul className="mt-3 space-y-2">
                      {phase.activities.map((a) => (
                        <li
                          key={a}
                          className="border-l-2 border-[var(--amber)]/50 pl-3 text-sm leading-6 text-[var(--soft)]"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                      What good looks like
                    </p>
                    <ul className="mt-3 space-y-2">
                      {phase.good.map((g) => (
                        <li
                          key={g}
                          className="border-l-2 border-[var(--magenta)]/50 pl-3 text-sm leading-6 text-white/85"
                        >
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Student-centered success metrics
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            How we know we&apos;re serving students better.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {metrics.map((m) => (
              <article
                key={m.metric}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                  {m.metric}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/75">
                  {m.definition}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="border border-[var(--signal)] bg-white/[0.03] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              How this connects
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-white">
              The Days 61–90 lighthouse thread is Slice 1 of the{" "}
              <Link
                href="/wgu/architecture-v2"
                className="text-[var(--signal)] underline underline-offset-4"
              >
                Architecture v2 roadmap
              </Link>{" "}
              — one seam, one lifecycle event, one visible status, one owner.
              The mapped{" "}
              <Link
                href="/wgu/system-boundary"
                className="text-[var(--signal)] underline underline-offset-4"
              >
                student journey
              </Link>{" "}
              is the starting frame for the Days 1–30 journey traces, and every
              phase is accountable to the{" "}
              <Link
                href="/wgu/leadership-principles"
                className="text-[var(--signal)] underline underline-offset-4"
              >
                leadership principles
              </Link>{" "}
              — listen-first is Earn Trust and Learning; the ratification
              sessions are Align &amp; Commit; the thin slice is Urgency and
              Deliver Results.
            </p>
            <Link
              href="/wgu/student-system-priorities"
              className="mt-6 inline-flex h-11 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              The seven guardrails
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-white/50">
            Working draft to align the architecture team and set expectations
            with leadership. A weekly Monday check-in reviews progress against
            this cadence and the guardrail metrics.
          </p>
        </div>
      </section>
    </main>
  );
}
