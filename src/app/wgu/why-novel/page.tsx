import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers3, Split } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Why The Student Continuity Fabric Is Novel",
  description:
    "A vendor-neutral argument for why the Student Continuity Fabric is not another CRM, SIS, data warehouse, workflow queue, or dashboard.",
  alternates: { canonical: "/wgu/why-novel" },
};

const contrasts = [
  {
    system: "Salesforce",
    does: "Manages relationships, engagement, outreach, and many operational interactions.",
    seam: "It does not own the academic record, guarantee cross-system lifecycle truth, or make every external mutation student-visible.",
  },
  {
    system: "SIS",
    does: "Owns official academic records and regulatory reporting obligations.",
    seam: "It does not usually operate as a real-time student continuity product across CRM, records, support, identity, and AI action.",
  },
  {
    system: "Databricks / lakehouse",
    does: "Analyzes history, models cohorts, and powers research, reporting, and AI grounding.",
    seam: "It answers population questions better than it closes an individual student's active black hole in the next 60 seconds.",
  },
  {
    system: "ServiceNow / Genesys",
    does: "Manages cases, queues, contact-center workflows, and staff service operations.",
    seam: "It can process work without proving that every student-facing state, owner, SLA, and audit fact is coherent across the institution.",
  },
  {
    system: "Dashboard layer",
    does: "Summarizes metrics and exposes trend signals to leaders or staff.",
    seam: "It observes fragmentation after the fact. The fabric prevents fragmentation by governing the state changes themselves.",
  },
];

const noveltyClaims = [
  "It governs transitions, not just records.",
  "It treats student-visible status as a first-class system output.",
  "It binds every lifecycle state to owner, SLA, purpose, and audit.",
  "It makes AI authorization per-action, not per-application.",
  "It preserves sovereign systems of record while adding continuity across them.",
];

export default function WhyNovelPage() {
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

      <section className="relative isolate min-h-[660px] overflow-hidden border-b border-white/10">
        <Image
          src="/wgu/visuals/why-novel-fabric-layer.webp"
          alt="A governed continuity layer woven between separate institutional systems without replacing them"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,17,0.96)_0%,rgba(10,13,17,0.78)_48%,rgba(10,13,17,0.32)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(255,79,216,0.22),transparent_26rem)]" />
        <div className="mx-auto flex min-h-[660px] max-w-7xl flex-col justify-end px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <Split size={16} aria-hidden="true" />
              Novelty wedge · govern the seams
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,6.6vw,5.2rem)] font-black leading-[0.92] text-white">
              This is not another CRM, SIS, lakehouse, queue, or dashboard.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              Those systems are necessary. The invention is the governed layer
              between them: the place where a student&apos;s lifecycle remains
              coherent even when ownership, data, workflow, and AI action span
              multiple platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Separation from existing tools
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            The fabric respects the tools. It refuses to let their boundaries
            become the student&apos;s problem.
          </h2>
          <div className="mt-8 grid gap-3">
            {contrasts.map((item) => (
              <article
                key={item.system}
                className="grid gap-4 border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.06)] lg:grid-cols-[0.28fr_0.36fr_0.36fr]"
              >
                <p className="font-display text-xl font-black">
                  {item.system}
                </p>
                <p className="text-sm leading-6 text-black/70">
                  <span className="font-mono text-xs font-bold uppercase text-[var(--magenta)]">
                    What it does ·{" "}
                  </span>
                  {item.does}
                </p>
                <p className="text-sm leading-6 text-black/70">
                  <span className="font-mono text-xs font-bold uppercase text-[var(--magenta)]">
                    What remains ·{" "}
                  </span>
                  {item.seam}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              The claim
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl">
              Novel because it governs continuity itself.
            </h2>
            <p className="mt-5 leading-7 text-[var(--soft)]">
              The Student Continuity Fabric does not win by becoming another
              destination app. It wins by making the gaps between destination
              apps explicit, testable, and governable.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {noveltyClaims.map((claim) => (
              <div
                key={claim}
                className="flex min-h-32 flex-col justify-between border border-white/12 bg-white/[0.035] p-5"
              >
                <Layers3 size={18} className="text-[var(--amber)]" />
                <p className="mt-4 font-display text-xl font-black leading-tight text-white">
                  {claim}
                </p>
              </div>
            ))}
            <Link
              href="/wgu/evaluation-rubric"
              className="group flex min-h-32 flex-col justify-between border border-[var(--signal)] bg-[var(--signal)] p-5 text-[var(--ink)]"
            >
              <p className="font-mono text-xs font-bold uppercase">
                Next proof
              </p>
              <p className="mt-4 inline-flex items-center gap-2 font-display text-xl font-black leading-tight">
                Test your current stack
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </p>
            </Link>
          </div>
          <div className="mt-10 border border-[var(--magenta)] bg-white/[0.03] p-6">
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              This page is advocacy. The trial is separate.
            </p>
            <p className="mt-3 max-w-4xl text-base leading-7 text-white/90">
              These comparisons face the easy opponents. The hard ones —
              adaptive case management, ServiceNow configured well, Temporal,
              airline IROPS, and the charge that this is &ldquo;just
              event-driven case management with better manners&rdquo; — get
              full steelman treatment on the{" "}
              <Link
                href="/wgu/prior-art"
                className="text-[var(--signal)] underline underline-offset-4"
              >
                prior-art page
              </Link>
              , with honest verdicts on what is known, what is
              novel-in-combination, and the two claims that are genuinely new.
              The novelty case is stronger after that trial, not weaker.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
