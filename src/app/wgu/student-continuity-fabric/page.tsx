import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  Clock3,
  FileText,
  Fingerprint,
  GaugeCircle,
  GitBranch,
  LockKeyhole,
  Route,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "The Student Continuity Fabric",
  description:
    "A named invention for online institutions: a governed event, identity, timeline, and action layer that prevents students from disappearing between systems.",
  alternates: { canonical: "/wgu/student-continuity-fabric" },
};

const components = [
  {
    icon: Route,
    title: "Governed timeline",
    text: "A student-visible lifecycle for documents, decisions, commitments, and status changes. The timeline is a product, not a report.",
  },
  {
    icon: Fingerprint,
    title: "Identity spine",
    text: "The thin resolution layer that knows who the student is across CRM, SIS, LMS, records, support, and data systems without stealing ownership from them.",
  },
  {
    icon: GitBranch,
    title: "Event contracts",
    text: "Every material change travels with actor, purpose, source, schema, correlation, and replay rules. Silent mutation is treated as a defect.",
  },
  {
    icon: UserCheck,
    title: "Owner/SLA projections",
    text: "Operational views that prove every queue item has an accountable owner, clock, threshold, and escalation path.",
  },
  {
    icon: ShieldCheck,
    title: "Competency ledger",
    text: "The event-sourced academic-progress substrate: durable enough for accreditation and precise enough for personalization.",
  },
  {
    icon: GaugeCircle,
    title: "Decision layer",
    text: "Experimentation, progressive rollout, dynamic configuration, and impact measurement treated as one governed institutional learning loop.",
  },
  {
    icon: LockKeyhole,
    title: "AI action gateway",
    text: "Per-action authorization, tiered autonomy, purpose-bound access, and audit so AI can help without becoming an ungoverned actor.",
  },
];

const failures = [
  "Documents enter a black hole.",
  "Students hear different answers from different systems.",
  "Start dates, aid states, or requirements change silently.",
  "A queue ages with no named owner.",
  "AI can recommend or act without purpose, authority, or replay.",
];

const promises = [
  "No black holes",
  "Nothing silent",
  "No ownerless queue",
  "No ungoverned AI action",
];

const audiencePaths = [
  {
    label: "President / Provost",
    title: "Student trust, persistence, and mission economics",
    text: "Lead with the student experience and the persistence case: one point of retention is thousands of lives and a meaningful economic lever.",
    href: "/wgu/business-case",
  },
  {
    label: "CIO / CTO",
    title: "System boundary, build/buy, and scale math",
    text: "Inspect the integration pattern, event contracts, replay math, and the decision to buy engagement while building the CBE core.",
    href: "/wgu/architecture-v2",
  },
  {
    label: "CISO / Counsel / Registrar",
    title: "FERPA, audit, SoR clarity, and AI action tiers",
    text: "Start with the trust pack: purpose-bound access, relationship permissions, audit, data classification, and hard AI automation limits.",
    href: "/wgu/trust-pack",
  },
];

export default function StudentContinuityFabricPage() {
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <Route size={16} aria-hidden="true" />
              Named invention · Student Continuity Fabric
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,6.6vw,5.3rem)] font-black leading-[0.92] text-white">
              Make it impossible for students to disappear between systems.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              The Student Continuity Fabric is a governed event, identity,
              timeline, and action layer for online institutions. Its job is
              not to replace CRM, SIS, data, or support platforms. Its job is
              to govern the seams where students lose trust.
            </p>
            <p className="mt-5 max-w-3xl border-l-2 border-[var(--signal)] pl-4 font-mono text-sm leading-7 text-[var(--signal)]">
              Program banner: ship with speed, safety, and evidence. Speed
              comes from progressive rollout, safety from governed gates, and
              evidence from replayable measurement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/wgu/whitepaper"
                className="inline-flex h-12 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Read the whitepaper
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/wgu/evaluation-rubric"
                className="inline-flex h-12 items-center gap-2 border border-white/20 px-5 font-mono text-sm font-bold text-white transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
              >
                Take the continuity test
              </Link>
            </div>
          </div>
          <figure className="overflow-hidden border border-white/12 bg-white/[0.03] shadow-[12px_12px_0_rgba(25,214,197,0.12)]">
            <Image
              src="/wgu/visuals/scf-speed-safety-evidence.webp"
              alt="Continuous student journey thread passing through rollout lanes, policy gates, and evidence ledgers"
              width={1800}
              height={1013}
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              The category
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none sm:text-5xl">
              Online institutions lose students at system seams.
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/70">
              The seam is where a fact changes in one system before it becomes
              visible, owned, authorized, explained, or acted on in another.
              The fabric turns each seam into a governed contract.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {failures.map((failure) => (
              <div
                key={failure}
                className="border border-black/10 bg-white p-5 text-sm font-semibold leading-6 text-black/75 shadow-[6px_6px_0_rgba(12,17,22,0.06)]"
              >
                {failure}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                The components
              </p>
              <h2 className="mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Seven mechanisms, one continuity promise.
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {promises.map((promise) => (
                  <span
                    key={promise}
                    className="border border-[var(--signal)] px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]"
                  >
                    {promise}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {components.map((component) => (
                <article
                  key={component.title}
                  className="border border-white/12 bg-white/[0.035] p-5"
                >
                  <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
                    <component.icon size={15} aria-hidden="true" />
                    {component.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                    {component.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Lead with Slice 1
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            The proof is not a deck. It is a document black hole closing in
            front of the room.
          </h2>
          <figure className="mt-8 overflow-hidden border border-black/10 bg-white p-2 shadow-[10px_10px_0_rgba(12,17,22,0.08)]">
            <Image
              src="/wgu/visuals/proof-slice-document-intake.webp"
              alt="Abstract document intake lifecycle moving through status, owner, timer, escalation, and audit checkpoints"
              width={1800}
              height={1013}
              sizes="100vw"
              className="h-auto w-full"
            />
          </figure>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Transcript received",
                text: "The student sees receipt and status within 60 seconds.",
              },
              {
                icon: Clock3,
                title: "Owner and clock",
                text: "The queue item has a named owner, SLA, and escalation threshold.",
              },
              {
                icon: BellRing,
                title: "Escalation and audit",
                text: "Aging work moves automatically, and every transition is replayable.",
              },
            ].map((step) => (
              <article
                key={step.title}
                className="border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <step.icon size={24} aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl font-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/70">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            Audience paths
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Three rooms, one architecture.
          </h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {audiencePaths.map((path) => (
              <Link
                key={path.label}
                href={path.href}
                className="group flex min-h-64 flex-col border border-white/12 bg-white/[0.035] p-6 transition-colors hover:border-[var(--signal)]"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {path.label}
                </p>
                <h3 className="mt-4 font-display text-2xl font-black leading-tight text-white">
                  {path.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {path.text}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-xs text-[var(--signal)]">
                  Open path
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
