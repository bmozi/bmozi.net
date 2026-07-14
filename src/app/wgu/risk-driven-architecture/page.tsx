import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  FlaskConical,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";

export const metadata: Metadata = {
  title: "Risk-Driven Architecture Method — Just Enough for Student Continuity",
  description:
    "A WGU method page translating risk-driven architecture into plain language: how much architecture is enough, what to document, what to prove, and how to size the work to student, delivery, audit, and cost risk.",
  alternates: { canonical: "/wgu/risk-driven-architecture" },
};

const plainLanguage = [
  {
    term: "Architecture",
    eli5: "The set of hard-to-change choices that decide how the system behaves when real life gets messy.",
    wgu: "For WGU, those choices decide whether a student can see status, whether a queue has an owner, whether a record can be trusted, and whether AI is allowed to act.",
  },
  {
    term: "Risk",
    eli5: "A thing that might go wrong, plus how bad it would be if it did.",
    wgu: "A black-hole document, a silent record change, a false identity match, an unsafe AI action, or a cost model that escapes its budget are all architecture risks.",
  },
  {
    term: "Just enough architecture",
    eli5: "Do enough design work to avoid the expensive mistake. Stop before the design work becomes its own project.",
    wgu: "A low-risk UI copy change may need no architecture. A new student timeline event needs a contract. A ledger cutover needs parallel run, replay proof, registrar signoff, and rollback rehearsal.",
  },
  {
    term: "Risk-driven",
    eli5: "Start with what can hurt you, then decide which diagrams, tests, records, or prototypes are worth making.",
    wgu: "The question is not 'which framework should we use?' The question is 'which student, audit, delivery, security, or cost failure are we reducing?'",
  },
  {
    term: "Architecture hoisting",
    eli5: "Pull the scary hidden problem into the light early, while it is still cheap to learn.",
    wgu: "That is why the hub has scale math, adversarial review, proof slices, trust tiers, and operating runbooks before asking for broad rollout.",
  },
];

const riskLadder = [
  {
    level: "Tiny",
    question: "Can this be reversed quickly if we are wrong?",
    response: "Use team judgment, a lightweight note, and normal code review.",
    example: "A wording change in a mentor-facing projection.",
  },
  {
    level: "Local",
    question: "Could one team or workflow be disrupted?",
    response: "Add a small design sketch, owner, success metric, and rollback plan.",
    example: "A new support-case status surfaced in the student timeline.",
  },
  {
    level: "Cross-system",
    question: "Will this change a contract between systems or teams?",
    response: "Write an ADR, event contract, compatibility rule, and observability check.",
    example: "A document.received event that flows from intake to CRM, timeline, and alerting.",
  },
  {
    level: "Institutional",
    question: "Can this affect records, aid, equity, privacy, or official student action?",
    response:
      "Run adversarial review, proof slice, policy review, holdout/guardrail plan, and named executive ownership.",
    example: "Competency Ledger cutover or AI-assisted next-best-action at scale.",
  },
];

const architectureArtifacts = [
  {
    artifact: "One-page decision brief",
    when: "When leaders need the tradeoff before they need the mechanism.",
    explains:
      "The problem, the options, the decision, what gets safer, what remains risky, and what would make us revisit it.",
  },
  {
    artifact: "ADR",
    when: "When a decision is hard to reverse or will shape multiple teams.",
    explains:
      "Why this option was chosen, what was rejected, who owns the consequences, and what evidence could overturn the decision.",
  },
  {
    artifact: "Risk-first diagram",
    when: "When a picture must answer a failure question.",
    explains:
      "What can fail, where authority lives, who owns each handoff, where evidence is recorded, and where a student sees state.",
  },
  {
    artifact: "Proof slice",
    when: "When debate is cheaper to settle by building the smallest real version.",
    explains:
      "A working path through the riskiest seam: event, owner, status, escalation, audit, and rollback.",
  },
  {
    artifact: "Trust pack",
    when: "When privacy, AI action, or official student consequence is involved.",
    explains:
      "Purpose, relationship, authorization, action tier, guardrail metric, audit trail, and red-team trigger.",
  },
  {
    artifact: "Operating runbook",
    when: "When the good-day design is not enough.",
    explains:
      "How the team detects failure, who responds, what students see, how escalation works, and how evidence survives the incident.",
  },
];

const wguRisks = [
  {
    risk: "Student continuity risk",
    plain: "A student falls between teams or systems and nobody owns the next step.",
    architecture:
      "Student Timeline product, lifecycle events, named owners, SLA clocks, and student-visible state.",
    evidence: "Black-hole rate, aging queue count, escalation completion, and student status visibility.",
  },
  {
    risk: "Academic-record risk",
    plain: "The institution cannot prove what was known, decided, earned, or changed.",
    architecture:
      "Competency Ledger as the one event-sourced context, with immutable mastery facts and replayable projections.",
    evidence: "Replay verification, transcript reconciliation, tamper checks, and registrar-controlled cutover.",
  },
  {
    risk: "AI action risk",
    plain: "A model recommends or does something consequential without enough authority, context, or review.",
    architecture:
      "Governed gateway, action tiers, purpose tags, relationship-based access, and human review for high-impact moves.",
    evidence: "Denied unsafe actions, audit traces, red-team results, and paired outcome plus guardrail metrics.",
  },
  {
    risk: "Delivery risk",
    plain: "The program becomes a big architecture story with no working slice students can feel.",
    architecture:
      "Fund slices, not a monolith: start with document intake to visible status to escalation to proof.",
    evidence: "Slice demo, production cohort metrics, rollback readiness, and adoption by the stream team.",
  },
  {
    risk: "Cost risk",
    plain: "The architecture works technically but becomes too expensive to operate at WGU scale.",
    architecture:
      "Unit-cost SLOs, managed services where differentiation is low, and budgeted action tiers for consumption-priced services.",
    evidence: "Cost per student per term, model-call budgets, replay cost, storage growth, and support cost avoided.",
  },
];

const operatingRules = [
  "If nobody can name the risk, do not create an architecture artifact yet.",
  "If the risk can hurt students, the artifact must name the student-visible failure.",
  "If the decision is hard to reverse, write the ADR before the work spreads.",
  "If the debate lasts too long, build the smallest proof slice that can decide it.",
  "If AI can act, the trust pack is part of the architecture, not a compliance add-on.",
  "If a diagram cannot show ownership, evidence, or failure behavior, redraw it.",
];

export default function RiskDrivenArchitecturePage() {
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
        imageSrc="/wgu/visuals/risk-driven-architecture-hero.webp"
        imageAlt="Risk-driven architecture workbench with a risk dial, proof-slice rail, decision tiles, and compact system map."
        accent="amber"
        minHeight="min-h-[700px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--amber)]">
            <FlaskConical size={16} aria-hidden="true" />
            Method · risk-driven architecture
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.35rem,6.4vw,5rem)] font-black leading-[0.92] text-white">
            Just enough architecture for the decisions that can hurt students.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            George Fairbanks&apos; risk-driven framing is the right lens for
            this WGU work: architecture is not ceremony, and it is not a stack
            of impressive diagrams. It is the amount of design, evidence, and
            decision record needed to reduce the risks that matter.
          </p>
          <div className="mt-8 grid max-w-4xl gap-3 md:grid-cols-3">
            {["Student harm", "Audit exposure", "Delivery drag"].map((item) => (
              <p
                key={item}
                className="border border-white/12 bg-black/35 px-4 py-3 font-mono text-xs uppercase text-white/80"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </WguImmersiveHero>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            ELI5 first
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            Architecture is how you avoid expensive surprise.
          </h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-5">
            {plainLanguage.map((item) => (
              <article
                key={item.term}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <h3 className="font-display text-2xl font-black leading-tight">
                  {item.term}
                </h3>
                <p className="mt-4 text-sm leading-6 text-black/75">
                  <span className="font-bold text-black">Plainly: </span>
                  {item.eli5}
                </p>
                <p className="mt-4 border-l-2 border-[var(--magenta)] pl-4 text-sm leading-6 text-black/70">
                  {item.wgu}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--amber)]">
            The risk ladder
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            The amount of architecture should rise with the blast radius.
          </h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-4">
            {riskLadder.map((item) => (
              <article
                key={item.level}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {item.level}
                </p>
                <h3 className="mt-3 font-display text-xl font-black leading-tight text-white">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {item.response}
                </p>
                <p className="mt-4 border-l-2 border-[var(--signal)] pl-4 text-xs leading-5 text-white/65">
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0d1118]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Artifact selection
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl">
              Do not document everything. Document what reduces the risk.
            </h2>
            <p className="mt-6 text-base leading-7 text-[var(--soft)]">
              A beginner mistake is to think architecture means making every
              possible diagram. The more useful move is to ask which artifact
              would make the next decision safer, faster, or more testable.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {architectureArtifacts.map((item) => (
              <article
                key={item.artifact}
                className="border border-white/12 bg-black/25 p-5"
              >
                <h3 className="font-display text-xl font-black text-white">
                  {item.artifact}
                </h3>
                <p className="mt-3 font-mono text-xs uppercase text-[var(--amber)]">
                  {item.when}
                </p>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {item.explains}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            WGU application
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            The risks are not abstract. They are student-facing.
          </h2>
          <div className="mt-8 grid gap-3">
            {wguRisks.map((item) => (
              <article
                key={item.risk}
                className="grid gap-4 border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)] lg:grid-cols-[0.8fr_1.1fr_1.1fr]"
              >
                <div>
                  <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                    {item.risk}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/75">
                    {item.plain}
                  </p>
                </div>
                <div className="border-l border-black/10 pl-4">
                  <p className="font-mono text-xs uppercase text-black/45">
                    Architecture response
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/75">
                    {item.architecture}
                  </p>
                </div>
                <div className="border-l border-black/10 pl-4">
                  <p className="font-mono text-xs uppercase text-black/45">
                    Evidence to demand
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/75">
                    {item.evidence}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Operating rules
              </p>
              <h2 className="mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl">
                How I should operate as the enterprise architect.
              </h2>
              <p className="mt-6 text-base leading-7 text-[var(--soft)]">
                The role is not to be the person with the biggest diagram. The
                role is to make risk visible, get the right people around it,
                choose the smallest useful artifact, and keep the organization
                moving with evidence.
              </p>
            </div>
            <div className="grid gap-3">
              {operatingRules.map((rule) => (
                <p
                  key={rule}
                  className="border-l-2 border-[var(--signal)] bg-white/[0.035] p-4 pl-5 text-sm leading-6 text-[var(--soft)]"
                >
                  {rule}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="border border-[var(--signal)] bg-white/[0.03] p-6 sm:p-8">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
              <ClipboardCheck size={16} aria-hidden="true" />
              The method in one sentence
            </p>
            <p className="mt-4 max-w-4xl text-xl leading-9 text-white">
              Start with the student-facing failure, size the architecture work
              to the blast radius, write only the decision records that future
              teams will need, and prove the riskiest assumption with the
              smallest slice that can produce evidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/wgu/operating-model"
                className="inline-flex h-11 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Apply it to the operating model
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/wgu/adversarial-review"
                className="inline-flex h-11 items-center gap-2 border border-white/20 px-5 font-mono text-sm text-white transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
              >
                See it under prosecution
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
