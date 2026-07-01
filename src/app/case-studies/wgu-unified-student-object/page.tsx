import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  GitBranch,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Unified Student Object Case Study",
  description:
    "A BMOZI Technical case study mapping the GreenixOS Unified Customer Object pattern onto competency-based personalized learning.",
  alternates: {
    canonical: "/case-studies/wgu-unified-student-object",
  },
  openGraph: {
    title: "Unified Student Object | BMOZI Technical",
    description:
      "A reference architecture for event-sourced student personalization, governed AI, and human-in-the-loop learning support.",
    images: ["/brand/unified-student-object-case-study.png"],
  },
};

const mapping = [
  {
    uco: "Identity",
    uso: "Student identity, program, enrollment, transfer credits, prior learning",
    value: "Start from real context, not a generic experience",
  },
  {
    uco: "Conversation thread",
    uso: "Mentor, instructor, advising, financial-aid interactions",
    value: "Students never repeat themselves across support roles",
  },
  {
    uco: "Service timeline",
    uso: "Course activity, competency attempts, assessments, milestones",
    value: "Understand progress and blockers over time",
  },
  {
    uco: "Financial stream",
    uso: "Tuition, aid, employer funding, term pacing economics",
    value: "Detect financial friction that threatens persistence",
  },
  {
    uco: "Contract state",
    uso: "Degree plan, term plan, course commitments, policies",
    value: "Keep goals and requirements explicit",
  },
  {
    uco: "Health score",
    uso: "Momentum, persistence risk, pacing risk, confidence",
    value: "Prioritize outreach and interventions",
  },
  {
    uco: "Behavioral profile",
    uso: "Learning preferences, study patterns, preferred channels",
    value: "Personalize nudges, study plans, and support",
  },
];

const eventFlow = [
  {
    label: "Student systems",
    text: "LMS, assessment, mentor CRM, support, aid, career",
    icon: Layers3,
  },
  {
    label: "Domain events",
    text: "course.started, competency.mastered, assessment.evaluation.returned, mentor.checkin.completed, student.inactivity.detected, momentum.score.changed, career.goal.set",
    icon: GitBranch,
  },
  {
    label: "Unified Student Object",
    text: "Append-only event store with per-student concurrency and replayable student history.",
    icon: UserRoundCheck,
  },
  {
    label: "Projections",
    text: "Student dashboard, mentor workspace, instructor blockers, risk queue, next-best-action, analytics warehouse.",
    icon: Network,
  },
  {
    label: "Experiences",
    text: "Study plan, support outreach, assessment-readiness, AI assistant, mentor coaching prompts.",
    icon: Sparkles,
  },
];

const reasons = [
  {
    title: "Personalization requires history, not current state.",
    text: "How long stuck? Struggled before and recovered? Which interventions worked? Is this slowdown normal for a working adult? CRUD shows now; event sourcing preserves the story.",
  },
  {
    title: "Many roles need many read models.",
    text: "Student, mentor, instructor, evaluator, program leader, and AI experiences can each get the projection they need from one event stream.",
  },
  {
    title: "Trust and audit are part of the model.",
    text: "Academic and support decisions need explainability; the event log is the evidence trail behind every recommendation.",
  },
  {
    title: "AI needs grounded context.",
    text: "Governed, permissioned projections and scoped tools keep AI useful without turning every student signal into raw prompt material.",
  },
];

const governance = [
  "Role-based access by relationship to the student",
  "Field-level permissions for sensitive data",
  "Purpose limitation and consent where needed",
  "Audit logs for data access and AI recommendations",
  "Data minimization in AI prompts",
  "Human-in-the-loop for high-impact decisions",
  "Clear line between AI recommendation and official academic decision",
  "Retention by data category",
];

const meshReceipts = [
  {
    title: "Sentinel",
    text: "An early agent-mesh control plane: agents reach systems through scoped, audited tools, never raw credentials.",
  },
  {
    title: "GreenixOS",
    text: "Domain-owned operational truth served as projections: UCO events, anti-corruption adapters, and independently evolvable read models.",
  },
  {
    title: "Merlin",
    text: "An express software factory pattern with quality gates, provenance, review loops, and auditable delivery discipline.",
  },
];

const talkTracks = [
  {
    label: "30-second WGU application",
    text: "The same UCO pattern maps directly to WGU as a Unified Student Object: an event-sourced student timeline projected into student, mentor, instructor, and analytics views, with governed AI for next-best-action and human-in-the-loop control on anything high-impact.",
  },
  {
    label: "Sentinel MCP proof",
    text: "Sentinel is the AI trust layer and owner of governed vendor integrations. Sentinel MCP exposes those capabilities to AI agents as scoped tools; agents never get vendor keys. Each tool call can become a durable governed command with policy validation, audit events, dead-letter handling, and replay.",
  },
  {
    label: "Mesh of meshes vision",
    text: "WGU appears to be exploring mesh-of-meshes thinking. My contribution is a discussion thesis: service mesh, data mesh, and the emerging agent mesh need a thin governance and identity fabric at the seams.",
  },
  {
    label: "Architecture communication",
    text: "The architecture only survives if everyone understands it: up in ROI, OKRs, and risk; across through shared contracts and event storming; down through ADRs, diagrams, and mentoring.",
  },
  {
    label: "Adoption strategy",
    text: "Make the platform the path of least resistance first: paved roads, templates, real self-serve, one lighthouse team, measurable wins, and adapters that let teams move incrementally instead of through a big-bang rewrite.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "The Unified Student Object",
  description:
    "A BMOZI Technical reference architecture for competency-based personalized learning using event sourcing, governed AI, and human-in-the-loop oversight.",
  author: {
    "@type": "Organization",
    name: "BMOZI",
  },
  publisher: {
    "@type": "Organization",
    name: "BMOZI",
  },
  url: "https://bmozi.net/case-studies/wgu-unified-student-object",
};

export default function UnifiedStudentObjectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
        <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <Link href="/" className="group inline-flex items-center gap-3">
              <BrandLockup markClassName="h-9 w-9" textClassName="text-lg" />
            </Link>
            <Link
              href="/"
              className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Home
            </Link>
          </nav>
        </header>

        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 -z-10 opacity-100">
            <Image
              src="/brand/unified-student-object-case-study.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,13,17,0.9)_0%,rgba(10,13,17,0.5)_38%,rgba(10,13,17,0.08)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,13,17,0.55)_0%,rgba(10,13,17,0)_46%,rgba(10,13,17,0.22)_100%)]" />
          </div>

          <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-end gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.78fr]">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 border border-white/15 bg-black/25 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)] backdrop-blur">
                <GraduationCap size={16} aria-hidden="true" />
                Pillar 3 / reference architecture portfolio
              </p>
              <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7.6rem)] font-black leading-[0.9] text-white">
                The Unified Student Object
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
                A proven Unified Customer Object pattern mapped onto
                competency-based, personalized learning.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Event sourced", "Governed AI", "Human accountable"].map(
                  (item) => (
                    <div
                      key={item}
                      className="border border-white/12 bg-white/[0.045] p-4 font-mono text-xs uppercase text-white backdrop-blur"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>

            <aside className="border border-[var(--signal)] bg-[rgba(11,15,19,0.82)] p-5 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Honest framing
              </p>
              <p className="mt-4 text-lg leading-8 text-white">
                This is not a claim to know WGU&apos;s internal systems. It is a
                reference architecture: take a pattern already built in
                GreenixOS and reason it onto a competency-based,
                personalized-learning domain.
              </p>
            </aside>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                The bridge
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                The same question, moved into the student domain.
              </h2>
            </div>
            <div className="border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]">
              <p className="text-xl leading-9">
                The GreenixOS UCO answers{" "}
                <strong>
                  “what is the complete operational truth about this customer,
                  and what should we do next?”
                </strong>{" "}
                A Unified Student Object answers the same for a student:
                learning progress, competency mastery, mentor interactions,
                support, engagement, goals, and risk.
              </p>
              <p className="mt-5 text-lg leading-8 text-black/70">
                The result is personalized pacing, proactive mentor outreach,
                and AI coaching, with human-in-the-loop control on anything
                high-impact.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase text-[var(--signal)]">
                  UCO to USO mapping
                </p>
                <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                  A familiar architecture becomes a student-personalization
                  engine.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--soft)]">
                The point is not a perfect schema. It is a domain model that
                starts from events, bounded contexts, and the jobs each role
                needs to do.
              </p>
            </div>

            <div className="overflow-hidden border border-white/12">
              <div className="grid bg-white/[0.06] font-mono text-xs uppercase text-[var(--amber)] md:grid-cols-[0.65fr_1fr_1fr]">
                <div className="border-b border-white/10 p-4 md:border-r">
                  GreenixOS UCO cluster
                </div>
                <div className="border-b border-white/10 p-4 md:border-r">
                  WGU Unified Student Object analog
                </div>
                <div className="border-b border-white/10 p-4">
                  Personalization value
                </div>
              </div>
              {mapping.map((row) => (
                <div
                  key={row.uco}
                  className="grid border-b border-white/10 last:border-b-0 md:grid-cols-[0.65fr_1fr_1fr]"
                >
                  <div className="bg-white/[0.035] p-4 font-display text-xl font-bold text-white md:border-r md:border-white/10">
                    {row.uco}
                  </div>
                  <div className="p-4 leading-7 text-[var(--soft)] md:border-r md:border-white/10">
                    {row.uso}
                  </div>
                  <div className="p-4 leading-7 text-white">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Event-driven shape
            </p>
            <h2 className="mt-4 max-w-4xl font-display text-5xl font-black leading-none text-white">
              Before a schema, start with the timeline.
            </h2>
            <div className="mt-10 grid gap-3 lg:grid-cols-5">
              {eventFlow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.label}
                    className="relative min-h-72 border border-white/12 bg-white/[0.035] p-5"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <Icon className="text-[var(--signal)]" size={24} />
                      <span className="font-mono text-xs text-[var(--muted)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {step.label}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                      {step.text}
                    </p>
                  </article>
                );
              })}
            </div>
            <blockquote className="mt-8 border-l-2 border-[var(--signal)] bg-white/[0.035] p-6 text-lg leading-8 text-white">
              “Event storming is how I&apos;d start the student-personalization
              work. Before anyone designs a schema, you put mentors, faculty,
              product, and engineering in a room and map the domain events on a
              timeline.”
            </blockquote>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                Why event sourcing fits
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                Personalization needs the story, not just the latest row.
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {reasons.map((reason) => (
                <article
                  key={reason.title}
                  className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
                >
                  <BadgeCheck
                    className="mb-7 text-[var(--magenta)]"
                    size={20}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-2xl font-bold">
                    {reason.title}
                  </h3>
                  <p className="mt-4 leading-7 text-black/70">
                    {reason.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Governance answer
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                Personalization should support the student, not surveil them.
              </h2>
              <blockquote className="mt-8 border border-[var(--signal)] bg-white/[0.04] p-6 text-lg leading-8 text-white">
                “I wouldn&apos;t personalize by dumping every student signal into
                an LLM. The Unified Student Object exposes governed projections
                and scoped tools. AI assists mentors and students, but policy,
                permissions, audit, and human accountability stay in the
                platform.”
              </blockquote>
            </div>
            <div className="grid gap-3">
              {governance.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border border-white/12 bg-white/[0.035] p-4"
                >
                  <LockKeyhole
                    className="mt-1 shrink-0 text-[var(--signal)]"
                    size={18}
                    aria-hidden="true"
                  />
                  <p className="leading-7 text-[var(--soft)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Mesh of meshes thesis
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                Exploration, grounded in receipts.
              </h2>
              <p className="mt-6 leading-7 text-[var(--soft)]">
                This is not a claim to originate WGU&apos;s mesh-of-meshes
                thinking or to know internal plans. It is a learning thesis and
                partnership proposal: take an emerging idea, reason about the
                seams, and show how governed AI patterns could make it real.
              </p>
              <Link
                href="/case-studies/wgu-governance-identity-fabric"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 border border-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--signal)] transition-colors hover:bg-[var(--signal)] hover:text-[var(--ink)]"
              >
                Read the fabric thesis
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-4">
              <div className="relative overflow-hidden border border-white/12 bg-white/[0.035]">
                <Image
                  src="/brand/bmozi-ai-governance-hero.png"
                  alt="Abstract BMOZI AI governance control plane with event streams, scoped tools, and audit paths"
                  width={1672}
                  height={941}
                  loading="eager"
                  className="h-auto w-full"
                />
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {meshReceipts.map((receipt) => (
                  <article
                    key={receipt.title}
                    className="border border-white/12 bg-white/[0.035] p-5"
                  >
                    <h3 className="font-display text-2xl font-bold text-white">
                      {receipt.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                      {receipt.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase text-[var(--signal)]">
                  Interview-ready language
                </p>
                <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                  Vision plus receipts, not buzzwords.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--soft)]">
                These are the concise explanations that connect the reference
                architecture to enterprise leadership, AI governance, and
                adoption.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-5">
              {talkTracks.map((track) => (
                <article
                  key={track.label}
                  className="border border-white/12 bg-white/[0.035] p-5"
                >
                  <p className="font-mono text-xs uppercase text-[var(--amber)]">
                    {track.label}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-[var(--soft)]">
                    {track.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                Architecture talk track
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                Say it in systems, then translate it into outcomes.
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: BrainCircuit,
                  title: "Sentinel MCP",
                  text: "Sentinel is the AI trust layer and owner of governed vendor integrations. MCP exposes those capabilities as scoped tools, so agents never get vendor keys.",
                },
                {
                  icon: ShieldCheck,
                  title: "GreenixOS",
                  text: "A metadata-driven platform engine plus an event-sourced operational core. Vendors sit behind anti-corruption adapters with reconciliation.",
                },
                {
                  icon: Network,
                  title: "Adoption",
                  text: "Make the platform the path of least resistance: paved roads, self-serve templates, one lighthouse team, measurable wins, and incremental migration.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="border border-black/10 bg-white p-5"
                  >
                    <Icon
                      className="mb-5 text-[var(--magenta)]"
                      size={22}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-black/70">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[var(--signal)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase">BMOZI Technical</p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                Enterprise architecture with working proof.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[var(--ink)] px-5 font-mono text-sm font-bold text-white"
              >
                Back to BMOZI
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a
                href="mailto:hello@bmozi.com?subject=Unified%20Student%20Object"
                className="inline-flex h-12 items-center justify-center gap-2 border border-[var(--ink)] px-5 font-mono text-sm font-bold"
              >
                Discuss the architecture
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
