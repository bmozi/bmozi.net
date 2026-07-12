import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Presentation } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "The Pitch Kit — One Page, Ten Slides, Ten Minutes",
  description:
    "The executive delivery vehicle: the one-page argument, the ten-slide deck, and the pointers to the running proof behind every claim.",
  alternates: { canonical: "/wgu/pitch" },
};

const onePager = [
  {
    head: "The problem, in their words",
    text: "Students rarely complain about the teaching — they complain about the system around it: documents that vanish, records that change silently, handoffs that drop them, different answers every call, logins that fail. Five failure modes, all architecture problems wearing a customer-service costume.",
  },
  {
    head: "The decisive fact",
    text: "A world-class toolset — CRM, SIS, lakehouse, streaming — was fully in operation during every one of those complaints. The gap was never the tools; it was the ungoverned seams between them. Buying more tools cannot fix what tools were never positioned to see.",
  },
  {
    head: "The target",
    text: "Sovereign systems of record; events as governed circulation; one Student Timeline product with owners and SLAs on every lifecycle step; one event-sourced Competency Ledger (the embryo of the academic record); one governed gateway for all AI action; one thin identity-and-policy layer. Nine decisions, each with its prosecution published.",
  },
  {
    head: "The proof",
    text: "It runs: a reference implementation passes nine tests — envelope law, outbox flow, idempotent projections, SLA escalation, tamper-evident ledger. The math is done: ~600 events/sec peak, ~20-minute full replays, under $2 per student per term. The failure modes have runbooks before the system has users.",
  },
  {
    head: "The economics",
    text: "One point of persistence ≈ 1,900 students staying on a pathway and ~$15M/year in continued tuition. Slices are funded individually and prove their own returns with holdouts — Slice 1 pays for itself in contact-center math alone.",
  },
  {
    head: "The ask",
    text: "One team, one term: document intake → tracked status → student-visible state, live for a pilot cohort by mid-October. Hold it to the numbers: black-hole rate zero, silent changes zero, escalations 100%. Then fund the next slice with the evidence.",
  },
];

export default function PitchPage() {
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
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <Presentation size={16} aria-hidden="true" />
            The pitch kit · the ten-minute vehicle
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Twenty-one areas of depth. One page. Ten slides.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            A provost gets ten minutes; the depth on this hub is for what
            comes after. This page is the one-page argument, and the deck is
            the room-ready version — dark, tight, every number backed by a
            page or a passing test.
          </p>
          <a
            href="/wgu/wgu-pitch-deck.pptx"
            className="mt-8 inline-flex h-12 items-center gap-2 bg-[var(--signal)] px-6 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            download
          >
            <Download size={16} aria-hidden="true" />
            Download the deck (.pptx, 10 slides, speaker notes included)
          </a>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            The one-pager
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            The whole argument, six paragraphs.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {onePager.map((p, i) => (
              <article
                key={p.head}
                className="border border-white/12 bg-white/[0.035] p-6"
              >
                <p className="font-mono text-xs text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-black text-white">
                  {p.head}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 border border-[var(--signal)] bg-white/[0.03] p-6">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              Behind every slide
            </p>
            <p className="mt-3 max-w-4xl text-base leading-7 text-white/90">
              The running proof lives in the{" "}
              <span className="font-mono text-[var(--signal)]">
                uso-reference-implementation
              </span>{" "}
              repo (nine passing tests, a live demo of the black hole
              closing); the arithmetic on the{" "}
              <Link
                href="/wgu/scale-math"
                className="text-[var(--signal)] underline underline-offset-4"
              >
                scale-math page
              </Link>
              ; the bad-day answers in the{" "}
              <Link
                href="/wgu/ops-reality"
                className="text-[var(--signal)] underline underline-offset-4"
              >
                ops reality pack
              </Link>
              ; and the full argument across the{" "}
              <Link
                href="/wgu"
                className="text-[var(--signal)] underline underline-offset-4"
              >
                hub
              </Link>
              . Nothing in the deck is asserted that isn&apos;t demonstrated
              somewhere you can click.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
