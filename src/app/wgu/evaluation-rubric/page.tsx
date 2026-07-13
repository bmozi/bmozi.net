import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ClipboardCheck, Download } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Student Continuity Evaluation Rubric",
  description:
    "A vendor-neutral rubric for testing whether a CRM, SIS, data, workflow, and AI stack can pass the Student Continuity test.",
  alternates: { canonical: "/wgu/evaluation-rubric" },
};

const criteria = [
  {
    name: "No silent changes",
    weak: "Material changes appear only in staff systems or after a student calls.",
    strong:
      "Every material status change emits an event, sends a student-visible notification, and records actor, reason, and source.",
  },
  {
    name: "Named owner on every queue",
    weak: "Work ages in shared queues with no accountable person or team.",
    strong:
      "Every item has owner, SLA, aging state, escalation path, and an exception report for ownerless work.",
  },
  {
    name: "Student-visible lifecycle",
    weak: "Students can submit, but cannot see what happened next.",
    strong:
      "Students can see received, in review, blocked, approved, rejected, escalated, and resolved states with plain-language reasons.",
  },
  {
    name: "Replayable audit",
    weak: "Audit is scattered across platform logs and cannot reconstruct the journey.",
    strong:
      "The journey can be rebuilt from enveloped events with actor, purpose, correlation, source, schema, and before/after.",
  },
  {
    name: "Per-action AI authorization",
    weak: "AI tools inherit broad application access or act under generic service credentials.",
    strong:
      "Every action evaluates human relationship, FERPA purpose, tool tier, action risk, and on-behalf-of context.",
  },
  {
    name: "System-of-record clarity",
    weak: "The same fact can be changed in multiple places without a single owner.",
    strong:
      "Each domain fact has one authoritative writer, published contract, replication rules, and dispute-resolution owner.",
  },
  {
    name: "Cost per student per term",
    weak: "Reliability and replay costs are invisible until bills arrive.",
    strong:
      "Event volume, retention, replay, storage, and support costs are modeled per student per term and reviewed as scale changes.",
  },
];

const scoring = [
  "0 = absent or manually improvised",
  "1 = present in one tool but not cross-system",
  "2 = present across tools but not enforced",
  "3 = enforced, monitored, and student-visible where appropriate",
];

const scoreBands = [
  {
    range: "0-7",
    label: "Do not trust",
    text: "The stack is still manual, local, or invisible at the seams.",
    width: "33%",
  },
  {
    range: "8-14",
    label: "Pilot only",
    text: "Enough structure exists to test, but not enough to scale or automate.",
    width: "67%",
  },
  {
    range: "15-17",
    label: "Proof-slice ready",
    text: "Run a bounded slice with guardrails, holdouts, and direct student evidence.",
    width: "81%",
  },
  {
    range: "18-21",
    label: "Scale candidate",
    text: "The platform can expand if the paired outcome and guardrail metrics hold.",
    width: "100%",
  },
];

const evidenceFlow = [
  "Material change",
  "Event envelope",
  "Owner + SLA",
  "Student-visible state",
  "Replayable audit",
  "Fund / pause / stop",
];

export default function EvaluationRubricPage() {
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

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <ClipboardCheck size={16} aria-hidden="true" />
              Vendor-neutral evaluation rubric
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,6.6vw,5.2rem)] font-black leading-[0.92] text-white">
              Can your current stack pass the Student Continuity test?
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              This is the architecture audit leaders can run before buying
              another tool. The question is not whether a vendor has a
              dashboard. The question is whether students can disappear
              between systems.
            </p>
            <a
              href="/wgu/student-continuity-fabric-reference-architecture.pdf"
              className="mt-8 inline-flex h-12 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              download
            >
              <Download size={16} aria-hidden="true" />
              Download whitepaper
            </a>
          </div>
          <aside className="overflow-hidden border border-white/12 bg-white/[0.035]">
            <Image
              src="/wgu/visuals/evaluation-evidence-ledger.webp"
              alt="Abstract evidence ledger and neutral evaluation panels for student continuity scoring"
              width={1800}
              height={1013}
              priority
              unoptimized
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-auto w-full"
            />
            <div className="border-t border-white/10 p-6">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              Scoring
            </p>
            <ul className="mt-5 space-y-3">
              {scoring.map((line) => (
                <li
                  key={line}
                  className="border border-white/10 bg-black/25 p-4 text-sm leading-6 text-[var(--soft)]"
                >
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-white/80">
              A credible platform should score 18+ out of 21 for the first
              proof slice before broader AI automation is trusted.
            </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            The rubric
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-[920px] border-collapse bg-white text-left shadow-[10px_10px_0_rgba(12,17,22,0.08)]">
              <thead>
                <tr className="border-b border-black/15">
                  <th className="w-[22%] p-4 font-mono text-xs uppercase text-[var(--magenta)]">
                    Criterion
                  </th>
                  <th className="w-[39%] p-4 font-mono text-xs uppercase text-[var(--magenta)]">
                    Weak signal
                  </th>
                  <th className="w-[39%] p-4 font-mono text-xs uppercase text-[var(--magenta)]">
                    Strong signal
                  </th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((criterion) => (
                  <tr key={criterion.name} className="border-b border-black/10">
                    <th className="p-4 align-top font-display text-lg font-black">
                      {criterion.name}
                    </th>
                    <td className="p-4 align-top text-sm leading-6 text-black/65">
                      {criterion.weak}
                    </td>
                    <td className="p-4 align-top text-sm leading-6 text-black/75">
                      {criterion.strong}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.48fr_0.52fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Score interpretation
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl">
              Twenty-one points, one decision rule.
            </h2>
            <p className="mt-5 leading-7 text-[var(--soft)]">
              The score is not a beauty contest. It decides what the institution
              is allowed to do next: do not trust, pilot only, prove a bounded
              slice, or scale with evidence.
            </p>
          </div>
          <div className="grid gap-3">
            {scoreBands.map((band) => (
              <article
                key={band.range}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-black leading-tight text-white">
                    {band.label}
                  </h3>
                  <span className="font-mono text-sm font-bold text-[var(--amber)]">
                    {band.range} / 21
                  </span>
                </div>
                <div className="mt-4 h-3 border border-white/12 bg-black/35">
                  <div
                    className="h-full bg-[linear-gradient(90deg,var(--magenta),var(--amber),var(--signal))]"
                    style={{ width: band.width }}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {band.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0d1118]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--amber)]">
            Evidence flow
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            A strong score means the same fact survives the whole journey.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {evidenceFlow.map((step, index) => (
              <div
                key={step}
                className="relative border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs text-[var(--signal)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-8 font-display text-xl font-black leading-tight text-white">
                  {step}
                </p>
                {index < evidenceFlow.length - 1 ? (
                  <span className="absolute right-4 top-5 hidden font-mono text-lg text-[var(--amber)] xl:block">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-[var(--soft)]">
            If any step is missing, the score should fall. A platform cannot
            claim continuity if a student-affecting change cannot be traced from
            mutation to owner, student-visible status, replayable audit, and the
            investment decision that follows.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div className="border border-white/12 bg-white/[0.035] p-6">
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Decision rule
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white">
              Fund slices that close measured black holes.
            </h2>
            <p className="mt-5 leading-7 text-[var(--soft)]">
              Start with one document class and one cohort. If black-hole rate,
              silent-change rate, escalation completeness, and status latency
              do not improve, do not scale. If they do, fund the next slice.
            </p>
          </div>
          <div className="border border-white/12 bg-white/[0.035] p-6">
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Formula
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white">
              Cost must be visible per student per term.
            </h2>
            <p className="mt-5 font-mono text-sm leading-7 text-[var(--amber)]">
              continuity cost = event transport + storage + replay + support +
              audit + AI gateway
            </p>
            <p className="mt-5 leading-7 text-[var(--soft)]">
              If the model cannot explain cost at student-term granularity, it
              is not yet ready for enterprise-scale decision making.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
