import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Student Continuity Fabric Whitepaper",
  description:
    "Download The Student Continuity Fabric: A Reference Architecture for Online Competency-Based Institutions.",
  alternates: { canonical: "/wgu/whitepaper" },
};

const contents = [
  "The failure modes: black holes, silent changes, ownerless queues, fragmented truth, and unsafe AI action.",
  "The target architecture: governed timeline, identity spine, event contracts, owner/SLA projections, competency ledger, and AI action gateway.",
  "The proof slice: transcript/document intake to visible status, named owner, SLA timer, escalation, and audit trail.",
  "The trust model: FERPA purpose, relationship-based access, data classification, and AI action tiers.",
  "The scale math: event volume, storage, replay, and cost per student per term.",
  "The adoption path: 90 days to prove the first slice, then fund the next slice with evidence.",
  "The evidence ledger and IP caution: confidence before conviction, disclosure before deep publication.",
];

export default function WhitepaperPage() {
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <FileText size={16} aria-hidden="true" />
              Public artifact · reference whitepaper
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,6.6vw,5.2rem)] font-black leading-[0.92] text-white">
              The Student Continuity Fabric.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              A reference architecture for online competency-based
              institutions: the named category, the proof slice, the trust
              model, the economics, and the evaluation test in one shareable
              artifact.
            </p>
            <a
              href="/wgu/student-continuity-fabric-reference-architecture.pdf"
              className="mt-8 inline-flex h-12 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              download
            >
              <Download size={16} aria-hidden="true" />
              Download PDF
            </a>
          </div>
          <aside className="border border-white/12 bg-white/[0.035] p-6">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              Inside the paper
            </p>
            <ul className="mt-5 space-y-3">
              {contents.map((item) => (
                <li
                  key={item}
                  className="border border-white/10 bg-black/25 p-4 text-sm leading-6 text-[var(--soft)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-16 sm:px-8 lg:grid-cols-3">
          <Link
            href="/wgu/student-continuity-fabric"
            className="border border-white/12 bg-white/[0.035] p-6 transition-colors hover:border-[var(--signal)]"
          >
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Category
            </p>
            <h2 className="mt-4 font-display text-2xl font-black text-white">
              Read the invention page
            </h2>
          </Link>
          <Link
            href="/wgu/why-novel"
            className="border border-white/12 bg-white/[0.035] p-6 transition-colors hover:border-[var(--signal)]"
          >
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Novelty
            </p>
            <h2 className="mt-4 font-display text-2xl font-black text-white">
              See the wedge
            </h2>
          </Link>
          <Link
            href="/wgu/evaluation-rubric"
            className="border border-white/12 bg-white/[0.035] p-6 transition-colors hover:border-[var(--signal)]"
          >
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Rubric
            </p>
            <h2 className="mt-4 font-display text-2xl font-black text-white">
              Run the continuity test
            </h2>
          </Link>
        </div>
      </section>
    </main>
  );
}

