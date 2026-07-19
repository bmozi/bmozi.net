import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";
import { WguMechanismDiagram } from "@/components/wgu-mechanism-diagram";

export const metadata: Metadata = {
  title: "The Scale Math — Capacity, Storage, and Cost, Computed",
  description:
    "Honest capacity arithmetic for the architecture at ~190K students: events per day, throughput vs. platform capability, storage growth, ledger sizing, rebuild times, and the cost envelope — with every assumption stated.",
  alternates: { canonical: "/wgu/scale-math" },
};

const assumptions = [
  "192,613 enrolled (public FY25 figure); assume ~130K active in any given month (six-month terms starting monthly smooth the load).",
  "Learning activity dominates volume: assume 40 Caliper-shaped events per active student per day (page views, submissions, assessments) — deliberately generous.",
  "Lifecycle/operational events are rare by comparison: ~10 per student per month (documents, cases, aid changes, notifications).",
  "Average enveloped event size ~2 KB serialized; replication factor 3 on the backbone.",
  "Ledger events: ~30 CUs earned per student-year, ~10 ledger events per competency (attempts, evaluations, mastery, progress).",
  "All figures rounded aggressively — this is an envelope, not a quote. Real baselines replace assumptions in Days 31–60.",
];

const volume = [
  {
    metric: "Learning events / day",
    value: "~5.2M",
    math: "130K active × 40/day. Average ~60/sec; assume 10× peak concentration (evenings) → ~600/sec sustained peak.",
    verdict:
      "A single modest Kafka cluster handles 100× this. Throughput is a non-problem — stated plainly because skeptics assume otherwise.",
  },
  {
    metric: "Operational events / day",
    value: "~65K",
    math: "195K students × 10/month ÷ 30. Under 1/sec average.",
    verdict:
      "The events that answer the complaints — document.received, case.assigned, aging.breached — are a rounding error on the backbone. The black-hole fix costs nearly nothing in capacity.",
  },
  {
    metric: "Ledger events / year",
    value: "~58M",
    math: "195K students × 30 CUs × 10 events. ~1.8/sec average across the institution.",
    verdict:
      "The most important data in the architecture is also among the smallest. Accreditation-grade rigor costs single-digit gigabytes per year.",
  },
  {
    metric: "Backbone storage / year",
    value: "~12 TB replicated",
    math: "~1.9B events/year × 2 KB × 3 replicas ≈ 11.4 TB, before compression (typically 3–5× on JSON).",
    verdict:
      "Against a publicly documented 80+ TB lakehouse estate, the entire event backbone adds ~15% per year uncompressed — comfortably inside existing platform economics.",
  },
  {
    metric: "Ledger storage / year",
    value: "~120 GB",
    math: "58M events × 2 KB, Merkle log overhead included. A decade of every mastery fact at WGU fits on a laptop.",
    verdict:
      "Permanence is cheap. Retaining the academic record forever — the transcript obligation — is a storage non-event.",
  },
  {
    metric: "Full ledger rebuild",
    value: "~20 min",
    math: "58M events/year × 5 years ≈ 290M events; replay at a conservative 250K events/sec (single-threaded JSON + hash verify) ≈ 20 minutes.",
    verdict:
      "The scariest event-sourcing objection — 'replays take days' — is measured in coffee breaks at this scale. Per-student rebuilds (a few thousand events) are milliseconds.",
  },
  {
    metric: "Timeline projection lag budget",
    value: "P95 < 5s at ~600/sec peak",
    math: "Consumer groups partitioned by student_id; each partition processes hundreds/sec against a target of tens.",
    verdict:
      "The SLO in the trust pack is conservative by an order of magnitude. Lag risk is operational (consumer bugs, rebalances), not architectural — which is what the runbooks are for.",
  },
  {
    metric: "Platform cost envelope",
    value: "< $2 / student / term",
    math: "Managed streaming + projection compute + ledger storage at list prices ≈ $500–700K/year ÷ (195K students × 2 terms).",
    verdict:
      "Against ~$4,000 flat-rate terms, the entire event platform costs less than 0.05% of tuition — and less than a single support call per student per term. The unit-cost SLO (ADR-001) polices consumption pricing (Data Cloud, LLM tokens) separately, because that is where cost actually escapes.",
  },
];

const capacityChain = [
  {
    label: "Events",
    value: "~5.3M/day",
    note: "Learning plus lifecycle traffic after generous peak shaping.",
  },
  {
    label: "Backbone",
    value: "~600/sec peak",
    note: "Comfortably below ordinary managed streaming limits.",
  },
  {
    label: "Storage",
    value: "~12 TB/year",
    note: "Replicated before compression; ledger permanence is smaller.",
  },
  {
    label: "Unit Cost",
    value: "< $2/term",
    note: "The platform envelope that ADR-001 protects.",
  },
];

const conclusions = [
  "This is small data by modern standards. The architecture's challenge was never throughput — it is governance, semantics, and seams, exactly where the design spends its effort.",
  "The expensive risks are priced elsewhere: consumption-billed services (identity resolution, LLM inference) carry the cost tripwires in ADR-001 and the risk register — not the backbone.",
  "Every number here is falsifiable on purpose: Days 1–30 baselines replace assumptions, and any figure off by more than 2× triggers a re-sequencing review. An envelope that can't be wrong proves nothing.",
];

const redTeamTests = [
  {
    test: "Peak shape is wrong",
    failure:
      "If evening or term-start peaks exceed the 10x assumption by more than 2x, projection SLOs move from capacity planning to product sequencing: Slice 1 narrows to fewer event classes until partitioning and consumer lag are proven.",
  },
  {
    test: "Replay throughput is fantasy",
    failure:
      "If real ledger verification is below 50K events/sec on representative hardware, full replays become a maintenance-window operation and every projection must support per-student and per-cohort rebuild first.",
  },
  {
    test: "Consumption pricing escapes",
    failure:
      "If Data Cloud, API gateway, or LLM costs exceed the <$2/student/term platform envelope, the architecture does not get bigger; it gets stricter: cache governed context, batch identity resolution, and move model calls behind budgeted action tiers.",
  },
  {
    test: "The lakehouse is not the analytical SoR",
    failure:
      "If discovery finds a different analytical truth platform or fragmented data estate, the materialization pattern survives but the roadmap changes: establish analytical ownership before scaling personalization.",
  },
];

export default function ScaleMathPage() {
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
        imageSrc="/wgu/visuals/scale-math-hero.webp"
        imageAlt="Capacity and cost model with symbolic throughput, storage, replay, and unit economics indicators."
        accent="amber"
        minHeight="min-h-[680px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <Calculator size={16} aria-hidden="true" />
            The scale math · somebody did the arithmetic
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            At 190,000 students, this is small data — and that is the point.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            Skeptics probe capacity first, so here is the arithmetic in the
            open: events per day, storage per year, rebuild times, and the
            cost envelope — each with its math shown and its assumption
            stated, so any number can be checked, challenged, and corrected.
          </p>
        </div>
      </WguImmersiveHero>

      <WguMechanismDiagram
        eyebrow="Capacity chain"
        title="The argument moves from assumptions to unit economics."
        caption="The scale page is readable because each estimate shows its ingredients: student base, activity volume, storage, replay, lag, and cost per term."
        steps={[
          { label: "Students", detail: "Start with public enrollment and active-month assumptions.", tone: "signal" },
          { label: "Events", detail: "Separate learning volume from operational lifecycle facts.", tone: "amber" },
          { label: "Storage", detail: "Compute replicated backbone and ledger growth.", tone: "muted" },
          { label: "Replay", detail: "Test rebuild time against conservative throughput.", tone: "magenta" },
          { label: "Cost", detail: "Convert platform spend into per-student term cost.", tone: "signal" },
        ]}
        aside="A number without its assumption is theater."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--amber)]">
            Stated assumptions — the part most capacity claims hide
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {assumptions.map((a) => (
              <p
                key={a}
                className="border-l-2 border-[var(--amber)]/50 bg-white/[0.03] p-4 pl-5 text-sm leading-6 text-[var(--soft)]"
              >
                {a}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0d1118]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            Capacity envelope
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            The load path fits in four checks.
          </h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-4">
            {capacityChain.map((item, index) => (
              <article
                key={item.label}
                className="relative border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-black text-white">
                  {item.label}
                </h3>
                <p className="mt-2 font-mono text-lg font-bold text-[var(--amber)]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The eight numbers
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Volume, storage, rebuilds, and cost — computed.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {volume.map((v) => (
              <article
                key={v.metric}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-lg font-black text-white">
                    {v.metric}
                  </p>
                  <span className="border border-[var(--signal)] px-2 py-1 font-mono text-sm font-bold text-[var(--signal)]">
                    {v.value}
                  </span>
                </div>
                <p className="mt-3 font-mono text-[0.75rem] leading-5 text-white/60">
                  {v.math}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {v.verdict}
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
              What the arithmetic settles
            </p>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {conclusions.map((c) => (
                <p key={c} className="text-base leading-7 text-white/90">
                  {c}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-6 border border-[var(--amber)]/60 bg-black/30 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              Red-team tests — what would force re-sequencing
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {redTeamTests.map((item) => (
                <article key={item.test} className="border-l-2 border-[var(--amber)]/70 pl-4">
                  <h3 className="font-display text-lg font-black text-white">
                    {item.test}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
                    {item.failure}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-white/50">
            Companion pages: the{" "}
            <Link
              href="/wgu/ops-reality"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              ops reality pack
            </Link>{" "}
            for what happens when components fail, and the{" "}
            <Link
              href="/wgu/business-case"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              business case
            </Link>{" "}
            for the value side of the same ledger.
          </p>
        </div>
      </section>
    </main>
  );
}
