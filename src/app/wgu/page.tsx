import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Braces,
  BrainCircuit,
  Calculator,
  CalendarClock,
  ClipboardCheck,
  Compass,
  Download,
  FileCheck2,
  FileText,
  FlaskConical,
  Hammer,
  Sparkles,
  GraduationCap,
  Landmark,
  MessageSquareWarning,
  Network,
  Presentation,
  Route,
  Siren,
  Scale,
  ShieldCheck,
  Split,
  Swords,
  TrendingUp,
  Users,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "WGU Enterprise Architecture Hub",
  description:
    "John Briggs' working enterprise-architecture hub for Western Governors University: leadership principles, system boundary, the Unified Student Object thesis, adversarial review, and the v2 target architecture.",
  alternates: { canonical: "/wgu" },
};

const areas = [
  {
    href: "/wgu/student-continuity-fabric",
    icon: Route,
    label: "Invention",
    title: "The Student Continuity Fabric",
    text: "The named category: a governed event, identity, timeline, and action layer that prevents online students from disappearing between systems.",
  },
  {
    href: "/wgu/why-novel",
    icon: Split,
    label: "Novelty",
    title: "Why this is not another tool",
    text: "Salesforce, SIS, lakehouse, ServiceNow, and Genesys all still matter. The invention governs the seams between them and gives students continuity.",
  },
  {
    href: "/wgu/evaluation-rubric",
    icon: ClipboardCheck,
    label: "Rubric",
    title: "The Student Continuity test",
    text: "A vendor-neutral scoring model: no silent changes, named owner, student-visible lifecycle, replayable audit, AI authorization, SoR clarity, and cost per student per term.",
  },
  {
    href: "/wgu/whitepaper",
    icon: FileText,
    label: "Whitepaper",
    title: "The public reference artifact",
    text: "A downloadable PDF packaging the category, failure modes, proof slice, trust model, scale math, adoption path, and evidence ledger.",
  },
  {
    href: "/wgu/leadership-principles",
    icon: Compass,
    label: "Leadership Principles",
    title: "Fourteen principles as architecture practice",
    text: "All fourteen WGU Leadership Principles, each translated into concrete enterprise-architecture behavior. Every task and plan in this hub traces back to these.",
  },
  {
    href: "/wgu/system-boundary",
    icon: Landmark,
    label: "System Boundary",
    title: "The whole institution the platform must serve",
    text: "Schools, programs, affiliates, non-degree pathways, scale, and the student lifecycle — the researched boundary that defines what the architecture must address.",
  },
  {
    href: "/wgu/voice-of-the-student",
    icon: MessageSquareWarning,
    label: "Voice of the Student",
    title: "Complaints mapped to structural answers",
    text: "What students told us, the failure mode behind each complaint, and the architecture component that answers it. Student Obsessed, made operational.",
  },
  {
    href: "/wgu/student-system-priorities",
    icon: ClipboardCheck,
    label: "Priorities",
    title: "Seven guardrails for the new student system",
    text: "The design guardrails we hold the line on, the capabilities each implies, and the test every design must pass — building from the ground up, for the student.",
  },
  {
    href: "/wgu/first-90-days",
    icon: CalendarClock,
    label: "First 90 Days",
    title: "The listen-first plan, on the calendar",
    text: "Listen & Diagnose, Frame & Align, Prove & Sequence — anchored to real dates from July 20, 2026, with success criteria and student-centered metrics.",
  },
  {
    href: "/case-studies/wgu-unified-student-object",
    icon: GraduationCap,
    label: "Thesis · USO",
    title: "The Unified Student Object",
    text: "The original thesis: an event-sourced student timeline projected into role-specific views with governed AI and human-in-the-loop control.",
  },
  {
    href: "/case-studies/wgu-governance-identity-fabric",
    icon: ShieldCheck,
    label: "Thesis · Fabric",
    title: "The Governance & Identity Fabric",
    text: "The unifying layer behind a mesh of meshes: identity with delegation, policy-as-code, contracts, lineage, and agent trust controls at the seams.",
  },
  {
    href: "/wgu/adversarial-review",
    icon: Swords,
    label: "Adversarial Review",
    title: "The strongest case against my own thesis",
    text: "A full prosecution of the USO and mesh-of-meshes: four contested bets, peer evidence, kill-shot questions, and honest verdicts.",
  },
  {
    href: "/wgu/architecture-v2",
    icon: Network,
    label: "Architecture v2",
    title: "The target architecture",
    text: "Nine decisions, drawn and defended: systems of record respected, events as circulation, one governed timeline product, contained AI. Direction set, adoption sequenced.",
  },
  {
    href: "/wgu/personalization",
    icon: Sparkles,
    label: "Personalization",
    title: "Where recommendations actually come from",
    text: "The decisioning loop on top of the substrate: governed signals, next-best-action, experimentation with holdouts, learning-science validation, governed actuation.",
  },
  {
    href: "/wgu/adr-timeline-buy-vs-build",
    icon: FileCheck2,
    label: "ADR-001",
    title: "Buy the engagement layer, build the CBE core",
    text: "The buy-vs-build decision record: Salesforce as engagement backbone and identity spine, the competency ledger as ours — with the eight-rule Salesforce operating playbook.",
  },
  {
    href: "/wgu/ground-up",
    icon: Hammer,
    label: "Build Strategy",
    title: "Ground-up, done right",
    text: "Greenfield architecture without the big-bang graveyard: chosen ground, cohort-based strangler cutover, the records workstream, and decommission criteria.",
  },
  {
    href: "/wgu/engineering-standards",
    icon: Braces,
    label: "Standards",
    title: "The paved road, specified",
    text: "The event envelope, 49-event catalog, contract-registry rules, API standards, and the accreditation-grade Competency Ledger data model with its transcript projection.",
  },
  {
    href: "/wgu/operating-model",
    icon: Users,
    label: "Operating Model",
    title: "Capabilities, teams, and risk",
    text: "The business capability map with build/buy postures, the four-team topology, the decision cadence, and a living risk register with owners and tripwires.",
  },
  {
    href: "/wgu/business-case",
    icon: TrendingUp,
    label: "Business Case",
    title: "Persistence economics",
    text: "What one point of persistence is worth (~$15M and ~1,900 lives), what each failure mode costs, slice-level ROI, and the fund-slices-not-programs narrative.",
  },
  {
    href: "/wgu/ai-native",
    icon: BrainCircuit,
    label: "AI-Native",
    title: "AI-first by design, with a test to prove it",
    text: "Five bolted-on vs. native contrasts, the seven marks of AI-native design with addresses in the architecture, descriptions as infrastructure, and per-domain readiness checks.",
  },
  {
    href: "/wgu/trust-pack",
    icon: ShieldCheck,
    label: "Trust Pack",
    title: "Trust as numbers with consequences",
    text: "The SLO catalog with error-budget policy, the FERPA purpose taxonomy, relationship-based access, data classification, and the five AI action tiers — each explained in plain language.",
  },
  {
    href: "/wgu/scale-math",
    icon: Calculator,
    label: "Scale Math",
    title: "Somebody did the arithmetic",
    text: "Events/day at 190K students, storage growth, 20-minute replays, <$2/student/term — every number with its math shown and its assumption stated.",
  },
  {
    href: "/wgu/ops-reality",
    icon: Siren,
    label: "Ops Reality",
    title: "Designing for the bad day",
    text: "Five failure runbooks, the Slice-1 definition of done with its ten-minute demo script, and the agent-gateway threat model.",
  },
  {
    href: "/wgu/pitch",
    icon: Presentation,
    label: "Pitch Kit",
    title: "One page, ten slides, ten minutes",
    text: "The executive delivery vehicle: the one-page argument and the downloadable deck — plus pointers to the running reference implementation behind every claim.",
  },
  {
    href: "/wgu/glossary",
    icon: BookOpenText,
    label: "Glossary",
    title: "Plain language for the whole room",
    text: "Every load-bearing term defined for the person who has never seen the acronym — SIS to CQRS, competency units to strangler figs.",
  },
];

const commitments = [
  {
    title: "Mission first",
    text: "WGU changes lives for the better by creating pathways to opportunity. Every architecture decision here is judged by whether it widens or narrows a pathway.",
  },
  {
    title: "Principles govern plans",
    text: "Each plan, task, and decision record in this hub is tagged to the Leadership Principles it serves. If a plan cannot name its principles, it is not ready.",
  },
  {
    title: "Adversarial by default",
    text: "Every thesis gets a prosecution. Sound Judgment and Learning demand that the strongest case against a design is written down before the design is trusted.",
  },
  {
    title: "Reference, not representation",
    text: "This is a personal working space and public-pattern reference. It does not represent WGU internal systems, data, or decisions.",
  },
];

export default function WguHubPage() {
  return (
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

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <Scale size={16} aria-hidden="true" />
              Named invention · protected working hub
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.6rem,7vw,5.6rem)] font-black leading-[0.92] text-white">
              The Student Continuity Fabric: make it impossible for students to
              disappear between systems.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              This hub now packages the work as a named invention with proof: a
              governed event, identity, timeline, and action layer for online
              institutions. The deeper architecture still lives here, but the
              front door is the student pain it solves — black holes, silent
              changes, ownerless queues, fragmented truth, unreliable access, and
              unsafe AI action.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/wgu/student-continuity-fabric"
                className="inline-flex h-12 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Open the invention
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="/wgu/student-continuity-fabric-reference-architecture.pdf"
                className="inline-flex h-12 items-center gap-2 border border-white/20 px-5 font-mono text-sm font-bold text-white transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
                download
              >
                <Download size={16} aria-hidden="true" />
                Download whitepaper
              </a>
            </div>
          </div>
          <div className="overflow-hidden border border-white/12 bg-white/[0.035] shadow-[0_30px_140px_rgba(25,214,197,0.13)]">
            <Image
              src="/wgu/visuals/student-continuity-fabric-hero.webp"
              alt="Abstract student continuity thread crossing governed institutional systems without gaps"
              width={1800}
              height={1013}
              priority
              unoptimized
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-auto w-full"
            />
            <div className="grid grid-cols-3 border-t border-white/10 font-mono text-[0.62rem] uppercase text-[var(--muted)]">
              <span className="border-r border-white/10 px-3 py-3">
                no black holes
              </span>
              <span className="border-r border-white/10 px-3 py-3">
                named owners
              </span>
              <span className="px-3 py-3">audited action</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Operating commitments
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-none sm:text-5xl">
            How this space stays true.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {commitments.map((item) => (
              <article
                key={item.title}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-black/75">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                The hub
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Twenty-five connected areas, one line of reasoning.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              The category names the pain, the proof slice makes it legible,
              the rubric makes it testable, the whitepaper makes it portable,
              and the deep architecture shows the work behind the claim.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group flex min-h-56 flex-col border border-white/12 bg-white/[0.035] p-5 transition-colors hover:border-[var(--signal)]"
              >
                <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
                  <area.icon size={15} aria-hidden="true" />
                  {area.label}
                </p>
                <h3 className="mt-4 font-display text-2xl font-black leading-tight text-white">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {area.text}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 font-mono text-xs text-[var(--signal)]">
                  Open
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
            <Link
              href="/wgu/architecture-v2#roadmap"
              className="group flex min-h-56 flex-col border border-white/12 bg-white/[0.035] p-5 transition-colors hover:border-[var(--signal)]"
            >
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
                <FlaskConical size={15} aria-hidden="true" />
                Living Roadmap
              </p>
              <h3 className="mt-4 font-display text-2xl font-black leading-tight text-white">
                Proven in slices, principled at every step
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                The dated slices with their Leadership Principles, Slice 1
                drawn as a sequence, and ADR-001 already decided. Append-only
                in spirit: nothing deleted, everything revised in the open —
                slice results land here as they ship.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-4 font-mono text-xs text-[var(--signal)]">
                Open
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
