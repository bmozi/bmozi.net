import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";

export const metadata: Metadata = {
  title: "WGU Principles, Results, and Beliefs as Architecture Practice",
  description:
    "WGU's public leadership principles, key results, and cultural beliefs translated into enterprise-architecture behavior, with a working crosswalk for this hub.",
  alternates: { canonical: "/wgu/leadership-principles" },
};

type Principle = {
  name: string;
  essence: string;
  practice: string;
  applied: string;
};

const frameworkGroups = [
  {
    title: "Leadership Principles",
    items: [
      "Student Obsession",
      "Innovation",
      "Learning",
      "Inspire & Develop",
      "Urgency",
      "Courage",
      "Ownership",
      "Deliver Results",
      "Integrity",
      "Earn Trust",
    ],
  },
  {
    title: "Key Results",
    items: ["Completion", "Return", "Equity", "One-by-One", "Advance Equity"],
  },
  {
    title: "Cultural Beliefs",
    items: [
      "Aim True",
      "Own It",
      "Trust Generously",
      "Engage Respectfully",
      "Achieve Together",
    ],
  },
];

const principles: Principle[] = [
  {
    name: "Aim True",
    essence:
      "Keep the mission core to every decision; think long term; steward WGU's mission, resources, and organization; know the Key Results and own your contribution.",
    practice:
      "Runs as the mission-gate loop — link, sign, cut: every decision record opens by naming the mission linkage and the Key Result it moves; work that cannot name its linkage doesn't get a signature; each quarter, roadmap items whose linkage has gone stale are cut, out loud. Long-lived assets — contracts, identity, the student record — are designed for decades, not sprints.",
    applied:
      "The system-boundary page exists because you cannot steward what you have not mapped; the ADR template opens with mission linkage; and the pitch's ask ends with 'hold me to the numbers' — the gate, applied to its own author first.",
  },
  {
    name: "Student Obsessed",
    essence:
      "Every human is a student; every decision starts with them; impact is measured in lives changed, delivering the WGU promise every day.",
    practice:
      "Runs as the complaint loop — hear, name, answer, measure: read complaints as system outputs, not service anecdotes; name the failure mode behind each; answer it structurally so the story becomes impossible, not apologized for; measure the leak closed. Reliability at the student front door outranks internal elegance in every trade-off.",
    applied:
      "The loop's full circuit is on the record: public reviews became the Voice of the Student page, its five failure modes became the seven guardrails, the guardrails became the fabric, and Slice 1 closes the first leak with a black-hole rate the student can feel.",
  },
  {
    name: "Advance Equity",
    essence:
      "Revere the inherent worth of every individual; make opportunity work for everyone; value pluralism; advance unity in diversity.",
    practice:
      "Runs as the paired-metric loop — outcome AND guardrail, or no launch: every experiment, model, and nudge ships with its outcome metric and its equity guardrail (subgroup impact, opt-out rates, appeal paths) evaluated together; disparate impact fails the launch review, never waits for the postmortem. Accessibility and low-bandwidth paths are requirements, not enhancements.",
    applied:
      "The decision layer's standing policy — 'the outcome moved AND the guardrails held' — is this loop as law; the personalization stage gates and the Tier-4 wall (no algorithmic gatekeeping of consequential decisions) enforce it structurally.",
  },
  {
    name: "Integrity",
    essence:
      "Deliver on commitments; do what is right even when no one is watching; uncompromised integrity in all circumstances.",
    practice:
      "Runs as the nothing-silent loop — actor, reason, notice, append: every material change carries who, why, and notification at the gate; history is extended, never rewritten; and the rule applies to the author before it applies to any system. Commitments made to students survive staff changes because they are recorded.",
    applied:
      "The provenance record freezes the pre-Day-1 corpus with verifiable dates; the program prosecution published eleven convictions against this program on its own site; corrections across the hub are appended, never scrubbed. Honesty with no witness required.",
  },
  {
    name: "Sound Judgment",
    essence:
      "Make the right choices a lot: critical thinking, data-driven insight, collaborative reasoning, good instincts; own decisions and adjust effectively.",
    practice:
      "Runs as the calibration loop — claim, probability, seal, grade, post-mortem: significant judgments get explicit probabilities, sealed before outcomes; resolved predictions are graded; high-confidence misses get a written post-mortem of what was over-trusted. Decisions are paced by reversibility, and contested bets are revisited on a schedule.",
    applied:
      "The Day-0 baseline seals 28+ probability-tagged beliefs to be graded at Day 30 and Day 90; the Monday check-in collects the grades; v2 itself is the loop's product — four bets stress-tested, two restructured, the record public.",
  },
  {
    name: "One-by-One",
    essence:
      "Solve for the individual; advance outcomes one student at a time; enable all, exclude none.",
    practice:
      "Runs as the oldest-item loop — past the median, to the person: dashboards report medians, so deliberately pull the oldest item in the queue, trace that one person's journey end to end, and fix the class of failure their story reveals. The unit of design is one timeline, one case, one owner, one clock — never an aggregate that hides the individual stuck inside it.",
    applied:
      "The Days 1–30 journey traces are this loop as fieldwork; cohort cutover exists so no individual student is ever stranded by a migration; and 'no queue without an owner' is the invariant that makes the oldest item impossible to hide.",
  },
  {
    name: "Align & Commit",
    essence:
      "Consider interdependencies; synchronize with the right roles and teams; respect the decision owner; commit to and communicate decisions as your own.",
    practice:
      "Runs as the disagree-commit loop — voice fully, decide once, carry it, reopen in writing: full honest position before the decision, at full strength; the named owner decides; afterward the decision is carried without daylight, as your own; new evidence reopens it through the same written door it came in — never through quiet non-compliance. Contracts are agreed at the seams before code.",
    applied:
      "Charter commitments four and five are this loop signed in public; the Days 31–60 sessions are built on it — the team ratifies with a named owner per decision, and the v2 target aligns with the estate teams already own rather than routing around them.",
  },
  {
    name: "Earn Trust",
    essence:
      "Do your job; listen genuinely, speak directly, engage respectfully; examine your strongest convictions with humility; earn your reputation daily.",
    practice:
      "Runs as the prosecution loop — propose, prosecute, verdict, publish, repeat: anything significant arrives with the strongest case against it, researched and steelmanned; every charge gets an honest verdict including the losses; the prosecution is published beside the design; and the trial reruns on a schedule with harder opponents. Adoption is earned, never mandated.",
    applied:
      "The loop has run four times on this site alone: the mesh-of-meshes review, the program prosecution (eleven convictions, fixes owned), the prior-art trial of the fabric itself, and the standing quarterly self-prosecution. The room trusts what has already survived its own opposition.",
  },
  {
    name: "Inspire & Develop",
    essence:
      "Inspire others to do their best work; recognize contributions; everyone is a leader; expand individual and collective positive influence.",
    practice:
      "Runs as the serve-first loop — ask, move, report, teach: every 1:1 ends with 'what's in your way that someone like me could move?'; one thing gets moved; the result gets reported back; and the reasoning behind every decision is taught — diagrams, ADRs, katas — until it is reproducible without its author. Credit flows outward by name.",
    applied:
      "The field kit hard-codes the closing question into every conversation; the guild's ladder measures growth by demonstrated evidence and its success by how little the founder is needed; three article series exist at three altitudes so everyone gets a rung.",
  },
  {
    name: "Learning",
    essence:
      "Insatiably curious; invite inquiry, seek feedback, listen to understand; expect perpetual growth; benchmark against the best; learn from mistakes.",
    practice:
      "Learning runs here as a named operational loop — encounter, verify, prosecute, absorb, claim: encounter new evidence anywhere; verify it before commenting; prosecute it against this corpus (and this corpus against it); absorb what survives into the pages, in the open; and claim early what the verification earned. Benchmark against the best; being wrong in public, precisely, is the fastest way to get right.",
    applied:
      "The loop has a timestamped worked example: an agent-state survey (arXiv 2606.30306) crossed the feed, was verified against arXiv, exposed a real gap — agent memory as an ungoverned surface — and within the hour became the trust pack's 'agent memory is a student record' tier, a reading-canon entry with honest evidence tiers, and an early claim registered before the sector says it. Encounter to claim, one sitting, revised in the open.",
  },
  {
    name: "Imagine Boldly",
    essence:
      "Think long term and without constraint while never compromising mission and Key Results; respectfully challenge convention; push to think big.",
    practice:
      "Runs as the horizon-hold loop — fix the picture, revise the path: the ten-year north star stays fixed and ahead of industry consensus; the path to it is re-derived from evidence every quarter; and no tactical defeat is ever allowed to be read as a verdict on the ambition. Bold pictures die of a thousand path-detail arguments — separate the two explicitly, every time.",
    applied:
      "The mesh-of-meshes fabric survived its own prosecution as the horizon while v2 completely rebuilt the path beneath it; the roadmap's final entry is titled 'the bold picture, intact' — the loop, printed.",
  },
  {
    name: "Create & Innovate",
    essence:
      "Expect fresh thinking; look for ideas everywhere; bias for the future by leveraging the best of the past and sloughing off the rest; be comfortable being first.",
    practice:
      "Runs as the ground-choosing loop — ask, verdict, slough: for each capability, ask 'does anyone sell this to our business model?'; buy the commodity proudly, build the genuinely unserved, and slough off what evidence has killed — including your own prior inventions. Look for ideas everywhere: the fabric borrowed from healthcare's purpose-of-use and aviation's manifests without embarrassment.",
    applied:
      "ADR-001 is the loop as a decision record; the prior-art trial ran the loop against the fabric itself — 'known' claims conceded proudly, two genuinely novel claims kept; enterprise-wide event sourcing was this author's own idea, sloughed by his own evidence.",
  },
  {
    name: "Urgency",
    essence:
      "Speed matters; decide at a pace relative to risk; respond to challenges in a timely manner; time is the scarcest resource.",
    practice:
      "Runs as the pacing loop — classify, then move at the class's speed: every decision is tagged reversible or irreversible first; reversible ships this week without ceremony, irreversible gets the full trial without apology; and the shedding order — what gets dropped under load, in what sequence — is published before the load arrives, so speed degrades gracefully instead of collapsing silently.",
    applied:
      "Slice 1 is scoped to prove value in one term, not one fiscal year; the program prosecution's time-insolvency conviction produced a published shedding order with a never-shed core — urgency with a survival plan.",
  },
  {
    name: "Deliver Results",
    essence:
      "Performance excellence; never confuse activity with outcomes; allocate effort to what matters most; continually raise the bar.",
    practice:
      "Runs as the proof loop — name the proof, measure against a counterfactual, retire what can't demonstrate: every initiative names, in advance, the measurement that separates a result from a story; effects are claimed only against holdouts or baselines, never borrowed from trends; and anything that only produces activity — a ritual, a report, an initiative — is retired publicly at the quarterly review.",
    applied:
      "Every thesis page ends with what would prove it; the business case's law is 'attribution or it didn't happen'; and the guild charter includes its own retirement rule for rituals that stop changing decisions — the proof loop, aimed at ourselves.",
  },
];

export default function LeadershipPrinciplesPage() {
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
        imageSrc="/wgu/visuals/leadership-principles-hero.webp"
        imageAlt="Leadership operating principles represented as navigation points, evidence routes, and decision markers."
        accent="amber"
        minHeight="min-h-[680px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <Compass size={16} aria-hidden="true" />
            Public framework · architecture practice
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Principles, results, and beliefs. One standard for every plan.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            WGU&apos;s public framework separates Leadership Principles, Key
            Results, and Cultural Beliefs. This page keeps that taxonomy visible,
            then translates the working behaviors used in this hub into
            enterprise-architecture practice. Every task, plan, and decision
            record here must name the framework signals it serves.
          </p>
        </div>
      </WguImmersiveHero>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              Taxonomy correction
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none sm:text-5xl">
              Do not flatten the framework.
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/70">
              The earlier page treated the working crosswalk as fourteen
              official Leadership Principles. The safer architecture move is to
              keep the public categories separate, then show how the work maps
              to them.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {frameworkGroups.map((group) => (
              <article
                key={group.title}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <h2 className="font-display text-2xl font-black leading-tight">
                  {group.title}
                </h2>
                <div className="mt-4 grid gap-2">
                  {group.items.map((item) => (
                    <p
                      key={item}
                      className="border border-black/10 bg-black/[0.025] px-3 py-2 font-mono text-xs"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Working architecture crosswalk
            </p>
            <h2 className="mt-3 font-display text-4xl font-black leading-none text-white">
              The behaviors this hub uses to operationalize the framework.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {principles.map((p, index) => (
              <article
                key={p.name}
                className="border border-white/12 bg-white/[0.035] p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-3xl font-black leading-none text-white">
                    {p.name}
                  </h2>
                  <span className="font-mono text-xs text-white/40">
                    {String(index + 1).padStart(2, "0")} / 14
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {p.essence}
                </p>
                <p className="mt-5 font-mono text-xs uppercase text-[var(--signal)]">
                  As architecture practice
                </p>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  {p.practice}
                </p>
                <p className="mt-5 font-mono text-xs uppercase text-[var(--amber)]">
                  Applied in this hub
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
                  {p.applied}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-6 text-white/50">
            The framework categories are drawn from WGU&apos;s public character
            framework. The fourteen cards are this hub&apos;s working architecture
            crosswalk: they preserve the behavior names already used throughout
            the corpus, but they should not be read as a verbatim official list.
          </p>
        </div>
      </section>
    </main>
  );
}
