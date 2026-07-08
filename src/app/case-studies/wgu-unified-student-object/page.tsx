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
    "A John Briggs enterprise architecture case study mapping a production Unified Customer Object pattern onto competency-based learning, operational accountability, and reliable student access.",
  alternates: {
    canonical: "/case-studies/wgu-unified-student-object",
  },
  openGraph: {
    title: "Unified Student Object | John Briggs",
    description:
      "A reference architecture for event-sourced student personalization, administrative lifecycle events, reliable access, governed AI, and human-in-the-loop support.",
    images: ["/brand/unified-student-object-case-study.png"],
  },
};

const mapping = [
  {
    uco: "Identity",
    uso: "Student identity, program, enrollment, documents, start dates, transfer credits, prior learning",
    value: "Start from real context, not a generic experience",
  },
  {
    uco: "Conversation thread",
    uso: "Mentor, instructor, advising, financial-aid interactions",
    value: "Students never repeat themselves across support roles",
  },
  {
    uco: "Service timeline",
    uso: "Course activity, competency attempts, applications, documents, aid changes, cases, SLA breaches",
    value: "Understand learning progress and operational blockers over time",
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
    label: "Bounded contexts",
    text: "LMS, assessment, enrollment and records, financial aid, mentor CRM, support, career",
    icon: Layers3,
  },
  {
    label: "Domain events",
    text: "competency.mastered, assessment.attempted, document.received, application.submitted, start_date.changed, aid_status.changed, case.assigned, sla.breached, auth.login.failed",
    icon: GitBranch,
  },
  {
    label: "Unified Student Object",
    text: "Append-only event store holding both learning journey and operational lifecycle truth.",
    icon: UserRoundCheck,
  },
  {
    label: "Projections",
    text: "Student dashboard, mentor workspace, instructor blockers, operations case and SLA view, next-best-action, analytics warehouse.",
    icon: Network,
  },
  {
    label: "Experiences",
    text: "Reliable access, study plan, support outreach, escalations, assessment-readiness, AI assistant, mentor coaching prompts.",
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
    text: "Student, mentor, instructor, evaluator, enrollment staff, financial-aid staff, program leader, and AI experiences can each get the projection they need from one event stream.",
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

const stakeholderValue = [
  {
    stakeholder: "Students",
    value:
      "A clearer path through enrollment, aid, courses, support, and login issues without repeating context across every handoff.",
  },
  {
    stakeholder: "Mentors and success teams",
    value:
      "One reliable view of momentum, blockers, prior outreach, open cases, and the next accountable action.",
  },
  {
    stakeholder: "Instructors and evaluators",
    value:
      "Cleaner signals on readiness, assessment attempts, competency gaps, and where academic help should be focused.",
  },
  {
    stakeholder: "Enrollment and records",
    value:
      "Document, UEH, start-date, and transfer-credit events become visible lifecycle facts instead of hidden queue work.",
  },
  {
    stakeholder: "Financial aid and funding",
    value:
      "Aid-status changes, employer funding, and billing friction become part of the student risk picture before they derail progress.",
  },
  {
    stakeholder: "Support services",
    value:
      "Cases have owners, SLA timers, escalation paths, and an audit trail, so operational breakdowns are measurable and routable.",
  },
  {
    stakeholder: "Academic and product leaders",
    value:
      "Program, pacing, access, support, and lifecycle trends can be compared through projections without forcing one team’s schema on everyone.",
  },
  {
    stakeholder: "Platform, security, and governance",
    value:
      "Domain-owned events, RBAC, consent, lineage, audit, and scoped AI tools create control without blocking useful personalization.",
  },
];

const governance = [
  "Role-based access by relationship to the student",
  "Field-level permissions for sensitive data",
  "Purpose limitation and consent where needed",
  "Audit logs for data access and AI recommendations",
  "Data minimization in AI prompts",
  "Human-in-the-loop for high-impact decisions",
  "No queue without an accountable owner",
  "SLA timers and escalations for open cases",
  "Availability and login-success SLOs at the student front door",
  "Clear line between AI recommendation and official academic decision",
  "Retention by data category",
];

const meshReceipts = [
  {
    title: "Sentinel",
    text: "An early agent-mesh control plane: agents reach systems through scoped, audited tools, never raw credentials.",
  },
  {
    title: "Production UCO pattern",
    text: "Domain-owned operational truth served as projections: UCO events, anti-corruption adapters, and independently evolvable read models.",
  },
  {
    title: "Merlin",
    text: "An express software factory pattern with quality gates, provenance, review loops, and auditable delivery discipline.",
  },
];

const talkTracks = [
  {
    label: "30-second architecture brief",
    text: "The same UCO pattern maps directly to WGU as a Unified Student Object: an event-sourced student timeline projected into student, mentor, instructor, and analytics views, with governed AI for next-best-action and human-in-the-loop control on anything high-impact.",
  },
  {
    label: "Agent Mesh / Sentinel MCP",
    text: "The Agent Mesh can coordinate support, operations, and next-best actions, but it should act through governed tools. Sentinel MCP is the controlled interface: scoped access, policy checks, audit events, and human escalation instead of raw credentials.",
  },
  {
    label: "Mesh of meshes vision",
    text: "Mesh-of-meshes thinking becomes practical when service mesh, data mesh, and the emerging agent mesh share a thin governance and identity fabric at the seams.",
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
    "A John Briggs enterprise architecture reference for competency-based personalized learning, operational accountability, reliable access, governed AI, and human-in-the-loop oversight.",
  author: {
    "@type": "Person",
    name: "John Briggs",
  },
  publisher: {
    "@type": "Person",
    name: "John Briggs",
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
            <div className="flex items-center gap-2">
              <Link
                href="/wgu"
                className="inline-flex h-10 items-center gap-2 border border-[var(--signal)] px-4 font-mono text-xs text-[var(--signal)] transition-colors hover:bg-[var(--signal)] hover:text-[var(--ink)]"
              >
                WGU Hub
              </Link>
              <Link
                href="/wgu/architecture-v2"
                className="hidden h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)] sm:inline-flex"
              >
                v2
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/"
                className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                Home
              </Link>
            </div>
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
            <div className="absolute inset-0 bg-[rgba(10,13,17,0.08)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_24%_62%,rgba(10,13,17,0.94)_0%,rgba(10,13,17,0.88)_28%,rgba(10,13,17,0.5)_48%,rgba(10,13,17,0.16)_68%,rgba(10,13,17,0)_88%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,13,17,0.96)_0%,rgba(10,13,17,0.9)_27%,rgba(10,13,17,0.5)_43%,rgba(10,13,17,0.16)_63%,rgba(10,13,17,0.02)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,13,17,0.38)_0%,rgba(10,13,17,0.16)_30%,rgba(10,13,17,0.02)_62%,rgba(10,13,17,0.12)_100%)]" />
          </div>

          <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-end gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.78fr]">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)] backdrop-blur">
                <GraduationCap size={16} aria-hidden="true" />
                Enterprise architecture reference
              </p>
              <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7.6rem)] font-black leading-[0.9] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.72)]">
                The Unified Student Object
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)] drop-shadow-[0_4px_18px_rgba(0,0,0,0.72)]">
                A proven Unified Customer Object pattern mapped onto
                competency-based, personalized learning.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-4">
                {[
                  "Event sourced",
                  "Reliable access",
                  "Governed AI",
                  "Human accountable",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/18 bg-black/40 p-4 font-mono text-xs uppercase text-white backdrop-blur-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="border border-[var(--signal)] bg-[rgba(11,15,19,0.82)] p-5 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Reference framing
              </p>
              <p className="mt-4 text-lg leading-8 text-white">
                This is a public reference architecture, not a representation
                of WGU internal systems. It takes a production Unified Customer
                Object pattern and reasons it onto a competency-based,
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
                The production UCO pattern answers{" "}
                <strong>
                  “what is the complete operational truth about this customer,
                  and what should we do next?”
                </strong>{" "}
                A Unified Student Object answers the same for a student:
                learning progress, competency mastery, mentor interactions,
                enrollment records, financial-aid status, support cases,
                access reliability, goals, and risk.
              </p>
              <p className="mt-5 text-lg leading-8 text-black/70">
                The result is personalized pacing, proactive mentor outreach,
                administrative accountability, routed escalation, reliable
                access, and AI coaching, with human-in-the-loop control on
                anything high-impact.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase text-[var(--signal)]">
                  Stakeholder value
                </p>
                <h2 className="mt-4 max-w-4xl font-display text-5xl font-black leading-none text-white">
                  The same timeline creates different wins for each role.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--soft)]">
                A USO is not valuable because every team sees the same screen.
                It is valuable because each stakeholder gets a trustworthy
                projection from the same governed operational truth.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {stakeholderValue.map((item) => (
                <article
                  key={item.stakeholder}
                  className="min-h-56 border border-white/12 bg-white/[0.035] p-5"
                >
                  <p className="font-mono text-xs uppercase text-[var(--amber)]">
                    {item.stakeholder}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-[var(--soft)]">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase text-[var(--signal)]">
                  Updated architecture picture
                </p>
                <h2 className="mt-4 max-w-4xl font-display text-5xl font-black leading-none text-white">
                  One timeline for learning, operations, access, and
                  accountability.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--soft)]">
                The USO is not only a learning-journey engine. It also carries
                administrative lifecycle events, login reliability signals,
                case ownership, SLA timers, escalation, audit, and human
                guardrails.
              </p>
            </div>
            <div className="overflow-hidden border border-white/12 bg-white/[0.035]">
              <Image
                src="/brand/unified-student-object-case-study.png"
                alt="Unified Student Object architecture diagram showing student access reliability, learning and operational event lanes, operations case and SLA projections, administrative bounded contexts, governed AI escalation, audit, and human oversight"
                width={1672}
                height={941}
                sizes="(min-width: 1280px) 1216px, calc(100vw - 40px)"
                className="h-auto w-full"
              />
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
                needs to do, including administrative staff who own cases and
                service levels.
              </p>
            </div>

            <div className="overflow-hidden border border-white/12">
              <div className="grid bg-white/[0.06] font-mono text-xs uppercase text-[var(--amber)] md:grid-cols-[0.65fr_1fr_1fr]">
                <div className="border-b border-white/10 p-4 md:border-r">
                  Production UCO cluster
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
              enrollment, records, financial aid, support, product, and
              engineering in a room and map the domain events on a timeline.”
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
                permissions, audit, case ownership, and human accountability
                stay in the platform.”
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
                This is a public architecture thesis, not a representation of
                internal plans. It takes an emerging idea, reasons about the
                seams, and shows how governed AI patterns could make it
                operational.
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
                  Architecture language
                </p>
                <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                  Vision plus receipts, not buzzwords.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--soft)]">
                These concise explanations connect the reference architecture
                to enterprise leadership, AI governance, and adoption.
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
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                  Architecture talk track
                </p>
                <h2 className="mt-4 max-w-4xl font-display text-5xl font-black leading-none">
                  Say it in systems, then translate it into outcomes.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-black/70">
                Foundation, governed agent capability, then adoption path: the
                order mirrors how the architecture becomes real.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Unified Student Object pattern",
                  text: "First, create the trusted student picture: learning progress, enrollment, records, aid, cases, access events, and support history projected from one governed event timeline.",
                },
                {
                  icon: BrainCircuit,
                  title: "Agent Mesh / Sentinel MCP",
                  text: "Then let agents use that context safely. Sentinel MCP gives the Agent Mesh scoped tools, policy checks, audit trails, and human escalation instead of direct system access.",
                },
                {
                  icon: Network,
                  title: "Adoption path",
                  text: "Finally, make it real through one useful workflow, measurable wins, paved roads, templates, self-service patterns, and incremental adapters instead of a big-bang rewrite.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
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
              <p className="font-mono text-xs uppercase">
                John Briggs / Enterprise Architect
              </p>
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
