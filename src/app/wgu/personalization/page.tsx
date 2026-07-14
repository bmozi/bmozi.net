import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";

export const metadata: Metadata = {
  title: "The Personalization Layer — Where Recommendations Come From",
  description:
    "The decisioning loop on top of the v2 substrate: governed signals, next-best-action decisioning, an experimentation framework, learning-science validation, and governed actuation — closed by outcome measurement.",
  alternates: { canonical: "/wgu/personalization" },
};

const loop = [
  {
    step: "01 · Signals",
    title: "Governed inputs, never raw data",
    text: "The Student Timeline supplies journey history and lifecycle state; the Competency Ledger supplies mastery truth; the skills graph (Rich Skill Descriptors) supplies the semantic map between competencies, courses, and careers; front-door telemetry supplies access-friction signals. Every signal arrives permissioned, purpose-tagged, and lineage-tracked.",
  },
  {
    step: "02 · Decisioning",
    title: "Next-best-action as a first-class service",
    text: "A decisioning service owns the question 'what should happen next for this student': persistence-risk scoring, pacing guidance, intervention selection, outreach timing, and study-plan adaptation. Models and policy rules live together — a rule can always override a model, and every decision records its features, version, and rationale. This is the answer to 'where does the recommendation actually come from.'",
  },
  {
    step: "03 · Experimentation",
    title: "No intervention scales without a holdout",
    text: "Every personalization tactic runs inside an experimentation framework: randomized assignment where ethical, holdout cohorts, guardrail metrics (equity impact, complaint rate, opt-outs), and pre-registered success criteria. Interventions that cannot demonstrate a persistence or completion effect are retired — activity is not impact.",
  },
  {
    step: "04 · Learning-science validation",
    title: "WGU Labs as the standing partner",
    text: "Efficacy claims are validated with learning-science rigor before scale: study design, effect sizes, and equity analysis reviewed with research partners. The Competency Ledger's replayable history is what makes this possible — what did we know, what did we do, what changed.",
  },
  {
    step: "05 · Governed actuation",
    title: "Every action flows through the agent gateway",
    text: "Recommendations become actions only through the governed gateway: scoped tools, per-action authorization, human-in-the-loop on anything high-impact, and a hard line between AI recommendation and official academic decision. A nudge can be automated; a program change never is.",
  },
  {
    step: "06 · Measurement",
    title: "The loop closes on student outcomes",
    text: "Outcomes write back to the timeline and the lakehouse: persistence, On-Time Progress, time-to-degree, intervention efficacy, equity of impact. The same numbers feed the experimentation framework, the mentor views, and the Key Results review — one truth from decision to outcome.",
  },
];

const answers = [
  {
    q: "Where does the recommendation come from?",
    a: "From the decisioning service — named models and policies over governed signals, each decision logged with features, version, and rationale.",
  },
  {
    q: "How do we know it works?",
    a: "Holdouts and pre-registered criteria. Efficacy is measured against persistence and completion, validated with learning-science partners, and reviewed for equity impact.",
  },
  {
    q: "How does it stay safe and fair?",
    a: "Purpose-tagged signals, per-action authorization, human-in-the-loop on high-impact actions, disparate-impact audits, and a student-visible line between suggestion and official decision.",
  },
  {
    q: "What makes this WGU-shaped?",
    a: "The Competency Ledger and skills graph. Mastery truth plus a machine-readable skills map is the personalization asset no vendor sells — pacing, readiness, and career-path guidance grounded in what the student has actually demonstrated.",
  },
];

export default function PersonalizationPage() {
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
        imageSrc="/wgu/visuals/personalization-hero.webp"
        imageAlt="Personalization decision loop with governed signals, holdouts, rollout paths, and guardrails."
        accent="signal"
        minHeight="min-h-[680px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <Sparkles size={16} aria-hidden="true" />
            Personalization layer · Decision 09, in full
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            A substrate isn&apos;t personalization. This is the loop that is.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            The timeline gives history, the ledger gives competency truth, the
            gateway gives safe actuation — and none of that recommends
            anything. Personalization is an explicit decisioning loop: six
            stages, each owned, each measured, closing on one question — did
            this student persist and progress because of what we did?
          </p>
        </div>
      </WguImmersiveHero>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            Decision loop
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Recommendations become accountable only when the loop closes.
          </h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-6">
            {loop.map((item, index) => (
              <article
                key={item.step}
                className="relative border border-white/12 bg-black/25 p-4"
              >
                <p className="font-mono text-[0.7rem] uppercase text-[var(--amber)]">
                  {item.step}
                </p>
                <h3 className="mt-3 font-display text-lg font-black leading-tight text-white">
                  {item.title}
                </h3>
                <div className="mt-5 h-1 bg-white/10">
                  <div
                    className="h-full bg-[var(--signal)]"
                    style={{ width: `${((index + 1) / loop.length) * 100}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            {loop.map((item) => (
              <article
                key={item.step}
                className="border border-white/12 bg-white/[0.035] p-6"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {item.step}
                </p>
                <h2 className="mt-3 font-display text-2xl font-black leading-tight text-white">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            The executive answers
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            Four questions any sharp product leader will ask.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {answers.map((item) => (
              <article
                key={item.q}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <p className="font-display text-xl font-black leading-tight">
                  {item.q}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/75">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="border border-[var(--signal)] bg-white/[0.03] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              One-by-One, engineered
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-white">
              This layer is the Leadership Principles under load:
              Student Obsessed sets the objective, One-by-One sets the unit of
              decisioning, Advance Equity sets the guardrail metrics, Sound
              Judgment demands the holdouts, and Deliver Results retires
              anything that only produces activity. It runs on the{" "}
              <Link
                href="/wgu/architecture-v2"
                className="text-[var(--signal)] underline underline-offset-4"
              >
                v2 substrate
              </Link>{" "}
              and actuates only through the governed gateway.
            </p>
            <Link
              href="/wgu/adr-timeline-buy-vs-build"
              className="mt-6 inline-flex h-11 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              The buy-vs-build decision record
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
