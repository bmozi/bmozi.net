import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Braces,
  Code2,
  Cpu,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  Radar,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import { BrandLockup } from "@/components/brand-lockup";
import { ProjectFilter } from "@/components/project-filter";
import { SignalField } from "@/components/signal-field";

const capabilities = [
  {
    name: "Product interfaces",
    text: "Dashboards, portals, apps, and decision surfaces that let teams operate complex systems without needing to understand every backend detail.",
    icon: Layers3,
  },
  {
    name: "Trustworthy AI workflows",
    text: "Agents, retrieval, scoped tools, eval loops, and human review paths that make AI useful without handing it blind authority.",
    icon: Cpu,
  },
  {
    name: "Integration architecture",
    text: "SOA-rooted contracts, events, adapters, APIs, and unified objects that let systems change without breaking the business.",
    icon: Workflow,
  },
  {
    name: "Reference systems",
    text: "Working prototypes, case studies, architecture portfolios, and deployable proof that leaders can evaluate before committing spend.",
    icon: Sparkles,
  },
];

const proofPoints = [
  ["1.59M+", "AI-assisted production lines personally shipped"],
  ["Contracts", "Explicit service, tool, and data boundaries"],
  ["Guardrails", "Policy, audit, review, and human accountability"],
  ["SOA Roots", "UCO, Sentinel, Merlin, governed services"],
];

const projects = [
  {
    title: "Greenix operating layer",
    kind: "Product system",
    status: "Conversion design",
    tags: ["UX", "Design system", "SaaS"],
    result:
      "A cleaner product narrative, reusable pricing modules, and homepage flow built around user decisions.",
  },
  {
    title: "Resonance frequency lab",
    kind: "Interactive tool",
    status: "Prototype",
    tags: ["Audio", "Visualization", "Web app"],
    result:
      "A browser-native exploration space for sound patterns, timing, and generative visual feedback.",
  },
  {
    title: "Fiction Forge",
    kind: "AI workspace",
    status: "Build track",
    tags: ["AI", "Editor", "Workflow"],
    result:
      "A structured authoring environment for project memory, generation control, and draft iteration.",
  },
  {
    title: "PestGenie field flow",
    kind: "Service platform",
    status: "Discovery",
    tags: ["Ops", "Forms", "Automation"],
    result:
      "A practical service interface concept for intake, triage, scheduling, and field-ready handoff.",
  },
];

const operatingModes = [
  "Start with the business decision the system needs to support, then work backward into the interface, data, contracts, and controls.",
  "Use SOA principles as the foundation: explicit contracts, loose coupling, reuse, discoverability, and governance.",
  "Build AI into bounded workflows with auditable tools, policy checks, and human accountability for high-impact decisions.",
  "Ship the proof all the way to production infrastructure so architecture can be judged by working behavior, not diagrams alone.",
];

const buyerOutcomes = [
  {
    icon: Blocks,
    title: "Less integration chaos",
    text: "A clear operating model for how systems talk, where truth lives, and which contracts teams can safely build against.",
  },
  {
    icon: TerminalSquare,
    title: "Safer AI adoption",
    text: "AI connected to real work through scoped tools, audit trails, review gates, and policies leaders can explain.",
  },
  {
    icon: Braces,
    title: "Working proof faster",
    text: "A deployable product surface, reference architecture, or prototype that turns strategy into something people can inspect and use.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BMOZI",
  url: "https://bmozi.net",
  description:
    "BMOZI builds governed digital systems: product interfaces, AI workflows, integration architecture, and deployable reference systems.",
  founder: {
    "@type": "Person",
    name: "John Briggs",
  },
  sameAs: ["https://github.com/bmozi"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "business inquiries",
    email: "hello@bmozi.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(10,13,17,0.78)] backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-8 sm:py-4">
            <a href="#top" className="group flex items-center gap-3">
              <BrandLockup
                markClassName="h-8 w-8 sm:h-10 sm:w-10"
                textClassName="text-base sm:text-lg"
              />
            </a>
            <div className="hidden items-center gap-6 font-mono text-xs text-[var(--muted)] md:flex">
              <a className="transition-colors hover:text-white" href="#systems">
                systems
              </a>
              <a className="transition-colors hover:text-white" href="#work">
                work
              </a>
              <a
                className="transition-colors hover:text-white"
                href="/case-studies/wgu-unified-student-object"
              >
                case study
              </a>
              <a className="transition-colors hover:text-white" href="#contact">
                contact
              </a>
            </div>
            <a
              href="mailto:hello@bmozi.com?subject=BMOZI%20technical%20project"
              className="inline-flex h-9 items-center gap-2 border border-white/15 px-3 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)] sm:h-10 sm:px-4"
            >
              <Mail size={15} aria-hidden="true" />
              Start
            </a>
          </nav>
        </header>

        <section
          id="top"
          className="relative isolate overflow-hidden border-b border-white/10"
        >
          <SignalField />
          <div className="mx-auto grid min-h-[calc(100svh-53px)] max-w-7xl items-center gap-4 px-4 pb-5 pt-7 sm:min-h-[calc(100svh-73px)] sm:gap-10 sm:px-8 sm:pb-12 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-16">
            <div className="relative z-10 max-w-4xl">
              <p className="mb-4 inline-flex items-center gap-2 border border-white/15 bg-black/20 px-2 py-1.5 font-mono text-[0.58rem] uppercase text-[var(--signal)] backdrop-blur sm:mb-6 sm:px-3 sm:py-2 sm:text-xs">
                <Radar size={15} aria-hidden="true" />
                AI-enabled architecture and product systems
              </p>
              <h1 className="font-display text-[clamp(2.05rem,10.5vw,3.05rem)] font-black leading-[0.9] text-white sm:text-[clamp(3rem,6.4vw,4.8rem)] 2xl:text-[clamp(4.8rem,8vw,7.2rem)]">
                BMOZI turns architecture into governed software.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--soft)] sm:mt-7 sm:text-xl sm:leading-8">
                Founded by John Briggs, BMOZI builds the visible product layer
                and the hidden operating layer behind it: interfaces, AI
                workflows, integration contracts, and production-ready proof.
              </p>
              <div className="mt-5 grid grid-cols-[1fr_auto] gap-2 sm:mt-9 sm:flex sm:flex-row sm:gap-3">
                <a
                  href="#work"
                  className="inline-flex h-10 items-center justify-center gap-2 bg-[var(--signal)] px-3 font-mono text-[0.68rem] font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5 sm:h-12 sm:px-5 sm:text-sm"
                >
                  View system work
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/bmozi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 border border-white/15 px-3 font-mono text-[0.68rem] text-white transition-colors hover:border-white/35 hover:bg-white/10 sm:h-12 sm:px-5 sm:text-sm"
                >
                  <Code2 size={17} aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>

            <aside className="relative z-10 grid gap-3 border border-white/12 bg-[rgba(11,15,19,0.72)] p-2 backdrop-blur-xl sm:p-4">
              <div className="hidden border border-white/10 bg-black/30 p-4 lg:block">
                <BrandLockup
                  markClassName="h-20 w-20"
                  textClassName="text-[2.35rem]"
                />
                <p className="mt-4 whitespace-nowrap border-t border-white/10 pt-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Founder-led technical studio
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {proofPoints.map(([value, label]) => (
                  <div
                    key={label}
                    className="min-w-0 border border-white/10 p-2 sm:min-h-28 sm:p-4"
                  >
                    <p className="whitespace-nowrap font-display text-[clamp(1.25rem,5.6vw,1.5rem)] font-black leading-none text-white sm:text-[clamp(2rem,2.4vw,2.35rem)]">
                      {value}
                    </p>
                    <p className="mt-1 font-mono text-[0.48rem] leading-tight text-[var(--muted)] sm:mt-2 sm:text-xs">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="systems" className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Capability map
              </p>
              <h2 className="mt-4 max-w-xl font-display text-5xl font-black leading-none text-white">
                What BMOZI truly builds.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-[var(--soft)]">
                The website is only the surface. The deeper work is making
                complicated operations usable, governable, and ready for AI.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.name}
                    className="group min-h-56 border border-white/12 bg-white/[0.035] p-6 transition-colors hover:border-[var(--signal)] hover:bg-white/[0.055]"
                  >
                    <Icon
                      className="mb-9 text-[var(--signal)] transition-transform group-hover:scale-110"
                      size={28}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-2xl font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="mt-4 leading-7 text-[var(--soft)]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                Service surface
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                From SOA principles to AI-enabled software people can actually
                use.
              </h2>
            </div>
            <div className="grid gap-3">
              {operatingModes.map((mode) => (
                <div
                  key={mode}
                  className="flex gap-4 border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
                >
                  <BadgeCheck
                    className="mt-1 shrink-0 text-[var(--magenta)]"
                    size={19}
                    aria-hidden="true"
                  />
                  <p className="text-base leading-7">{mode}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--signal)]">
                <GraduationCap size={16} aria-hidden="true" />
                Featured architecture case study
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                The Unified Student Object.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--soft)]">
                A pre-employment WGU reference architecture mapping the
                GreenixOS Unified Customer Object pattern onto
                competency-based, personalized learning with governed AI and
                human accountability, rooted in SOA principles: contracts,
                loose coupling, reuse, and governance.
              </p>
              <a
                href="/case-studies/wgu-unified-student-object"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Read the case study
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <a
              href="/case-studies/wgu-unified-student-object"
              className="group block overflow-hidden border border-white/12 bg-white/[0.035]"
              aria-label="Read the Unified Student Object case study"
            >
              <Image
                src="/brand/unified-student-object-case-study.png"
                alt="Unified Student Object architecture diagram showing event-sourced student timeline, projections, governed AI, and human oversight"
                width={1672}
                height={941}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.025]"
              />
            </a>
          </div>
        </section>

        <section id="work" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase text-[var(--signal)]">
                  Portfolio signals
                </p>
                <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                  Project directions that show the range.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--soft)]">
                A living portfolio for public case studies, product prototypes,
                and technical demonstrations as BMOZI ships new work.
              </p>
            </div>
            <ProjectFilter projects={projects} />
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-20 sm:px-8 lg:grid-cols-3">
            {buyerOutcomes.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="border border-white/12 bg-white/[0.035] p-6"
                >
                  <Icon size={25} className="text-[var(--amber)]" aria-hidden />
                  <h3 className="mt-10 font-display text-3xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--soft)]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="bg-[var(--signal)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase">
                Founder: John Briggs
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                Turn architecture into software your teams can trust.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="mailto:hello@bmozi.com?subject=BMOZI%20technical%20project"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[var(--ink)] px-5 font-mono text-sm font-bold text-white"
              >
                <Mail size={17} aria-hidden="true" />
                hello@bmozi.com
              </a>
              <a
                href="/api/signal"
                className="inline-flex h-12 items-center justify-center gap-2 border border-[var(--ink)] px-5 font-mono text-sm font-bold"
              >
                <Globe2 size={17} aria-hidden="true" />
                Signal API
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
            <div className="inline-flex border border-[var(--ink)]/20 bg-[var(--ink)] p-4">
              <BrandLockup
                markClassName="h-16 w-16"
                textClassName="text-3xl"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
