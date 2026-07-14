import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";

export const metadata: Metadata = {
  title: "The Business Case — Persistence Economics and the Funding Narrative",
  description:
    "The economics of the new student system: what one point of persistence is worth, what the failure modes cost, unit-cost targets, slice-level ROI, and the fund-slices-not-programs narrative.",
  alternates: { canonical: "/wgu/business-case" },
};

const mathBlocks = [
  {
    label: "The scale",
    value: "192,613",
    text: "students enrolled (June 30, 2025, public annual report). At this scale, small percentages are large numbers of humans.",
  },
  {
    label: "One persistence point",
    value: "≈ 1,900",
    text: "students continuing who would otherwise have stopped, per single percentage point of persistence improvement.",
  },
  {
    label: "Illustrative tuition",
    value: "~$8,000",
    text: "per student per year at published flat rates (two ~$4,000 terms). Directional public math, not internal finance.",
  },
  {
    label: "One point, one year",
    value: "≈ $15M",
    text: "in continued tuition per persistence point — before counting the mission value of ~1,900 lives staying on a pathway to opportunity.",
  },
];

const failureCosts = [
  {
    title: "The black hole tax",
    text: "Every untracked submission generates chase contacts — calls, emails, escalations — each costing staff time and student trust. A document-status projection replaces an entire class of inbound volume with a screen the student checks themselves. Fewer 'where is my transcript?' calls is a directly measurable contact-center line item.",
  },
  {
    title: "The silent-change premium",
    text: "A silently deleted start date doesn't cost one student — it costs the review readers who never apply. At mega-scale, reputation is an acquisition-cost multiplier: complaint patterns visible in public reviews raise the cost of every future enrollment. Zero silent changes is brand protection with a CAC denominator.",
  },
  {
    title: "The fragmented-truth surcharge",
    text: "Different answers every call means repeat contacts per resolved issue. Case continuity from one governed context cuts handle time and repeat-contact rate — the two numbers every contact-center CFO already tracks.",
  },
  {
    title: "The login toll",
    text: "A student who can't log in on their one free evening loses a study session; enough lost sessions become a lost term. Login-success SLO improvements convert directly into engaged minutes — the leading indicator every persistence model feeds on.",
  },
];

const sliceRoi = [
  {
    slice: "Slice 1 · Document status (Sep–Oct 2026)",
    invest: "One team, one term",
    returns:
      "Black-hole rate → 0 for the covered document class; measurable contact-volume drop; first silent-change audit trail live. Pays for itself in contact-center math alone — the persistence effect is upside.",
  },
  {
    slice: "Slice 2 · Competency ledger",
    invest: "Complicated-subsystem team, 2–3 quarters",
    returns:
      "Accreditation evidence on demand; efficacy research unlocked; the SIS-succession option created — an option whose value is a meaningful fraction of a future SIS replacement program.",
  },
  {
    slice: "Slice 3 · Governed agent gateway",
    invest: "Platform + AI governance, 1–2 quarters",
    returns:
      "First safe automation of outreach and coaching capacity; mentor time shifted from paperwork to students (the amplify-mentors guardrail, measured); the trust infrastructure every future AI use case rides on.",
  },
  {
    slice: "Slice 4 · Timeline at portfolio scale",
    invest: "Stream teams, 2–4 quarters",
    returns:
      "Persistence economics arrive in force: proactive interventions on momentum signals across all populations. This is where the ≈$15M-per-point lever engages, with the experimentation framework proving attribution.",
  },
];

const principles = [
  {
    title: "Fund slices, not programs",
    text: "No nine-figure transformation ask. Each slice is separately funded, separately measured, and separately survivable — the program is never one budget cycle from worthless, and leadership buys evidence, not promises.",
  },
  {
    title: "Unit cost is a Key Result",
    text: "Platform cost per student per term is tracked beside persistence and completion. Consumption budgets (streaming, Data Cloud, LLM tokens) get ceilings and alerts — the ADR-001 cost rule, promoted to the executive dashboard.",
  },
  {
    title: "Attribution or it didn't happen",
    text: "Every claimed return runs through the experimentation framework's holdouts. The business case never borrows credit from secular trends — Deliver Results means the counterfactual is measured, not assumed.",
  },
  {
    title: "Mission math is the tiebreaker",
    text: "When two investments score equally in dollars, the one that changes more lives wins. The annual report counts lives changed; so does this program's scorecard.",
  },
];

export default function BusinessCasePage() {
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
        imageSrc="/wgu/visuals/business-case-hero.webp"
        imageAlt="Enterprise value model with continuity flows, retained-student signals, and decision evidence."
        accent="amber"
        minHeight="min-h-[680px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <TrendingUp size={16} aria-hidden="true" />
            The business case · persistence economics
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            The architecture pays in the currency the mission counts.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            Every failure mode in the student complaints has a price, every
            guardrail has a payback, and the whole program is funded slice by
            slice against measured returns. Illustrative math built on public
            numbers — the internal model gets real figures in Days 31–60.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {mathBlocks.map((m) => (
              <div
                key={m.label}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {m.label}
                </p>
                <p className="mt-2 font-display text-4xl font-black text-[var(--signal)]">
                  {m.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-[var(--soft)]">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </WguImmersiveHero>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            What the failure modes cost
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            The complaints have a P&amp;L.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {failureCosts.map((f) => (
              <article
                key={f.title}
                className="border border-white/12 bg-white/[0.035] p-6"
              >
                <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                  {f.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {f.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Slice-level returns
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            Each slice carries its own payback.
          </h2>
          <div className="mt-8 space-y-3">
            {sliceRoi.map((s) => (
              <article
                key={s.slice}
                className="grid gap-3 border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)] lg:grid-cols-[0.4fr_0.25fr_1fr]"
              >
                <p className="font-display text-lg font-black leading-tight">
                  {s.slice}
                </p>
                <p className="font-mono text-xs uppercase leading-5 text-[var(--magenta)]">
                  {s.invest}
                </p>
                <p className="text-sm leading-6 text-black/75">{s.returns}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The funding narrative
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Four principles that survive any CFO.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((p) => (
              <article
                key={p.title}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {p.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 border border-[var(--signal)] bg-white/[0.03] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              The one-paragraph case
            </p>
            <p className="mt-4 max-w-4xl text-xl leading-9 text-white">
              At ~190,000 students, one point of persistence is roughly 1,900
              lives staying on a pathway and ~$15M in continued tuition per
              year. The complaints tell us exactly where persistence leaks:
              black holes, silent changes, dropped handoffs, fragmented
              answers, failed logins. Every slice of this architecture closes
              a named leak, measures its own effect with holdouts, and funds
              the next slice with the evidence. That is the whole case — the
              mission and the math point the same direction.
            </p>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-white/50">
            All figures are illustrative, from public sources (annual report
            enrollment, published tuition rates). Internal persistence,
            contact-cost, and CAC figures replace these in the Days 31–60
            model — the structure of the argument is what this page commits
            to.
          </p>
        </div>
      </section>
    </main>
  );
}
