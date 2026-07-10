import type { Metadata } from "next";
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

export default function EvaluationRubricPage() {
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
          <aside className="border border-white/12 bg-white/[0.035] p-6">
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

