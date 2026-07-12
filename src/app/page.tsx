import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  DoorOpen,
  Eye,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { SignalField } from "@/components/signal-field";

const northStar = [
  {
    title: "Make complexity usable",
    text: "Turn tangled operations into clear product surfaces, explicit contracts, and decisions people can actually make.",
    icon: Layers3,
  },
  {
    title: "Make AI accountable",
    text: "Connect AI to real work through scoped tools, review paths, audit trails, and human authority where it matters.",
    icon: BrainCircuit,
  },
  {
    title: "Make proof inspectable",
    text: "Ship diagrams, prototypes, reference systems, tests, and written reasoning so architecture can be evaluated by behavior.",
    icon: BadgeCheck,
  },
];

const practice = [
  ["Product interfaces", "Portals, dashboards, workflows, and decision surfaces for complex teams."],
  ["Trustworthy AI systems", "Agents, retrieval, tool gateways, evaluations, and human-in-the-loop controls."],
  ["Integration architecture", "APIs, events, adapters, unified objects, contracts, and source-of-truth boundaries."],
  ["Reference implementations", "Working proof that lets leaders and engineers inspect the idea before scaling it."],
];

const principles = [
  "Contracts before coupling",
  "Evidence before confidence",
  "Human authority before automation",
  "Readable systems before clever systems",
  "Production proof before theater",
];

const privateLinks = [
  {
    href: "/access?next=/wgu",
    label: "WGU architecture hub",
    text: "Student Continuity Fabric, architecture v2, trust pack, scale math, operating model.",
  },
  {
    href: "/access?next=/blog",
    label: "Writing room",
    text: "The Seams series, technical essays, reference shelf, field documents, and study guide.",
  },
  {
    href: "/access?next=/blog/reference",
    label: "Reference shelf",
    text: "Charter, curriculum, canon, field kit, baseline, guild plan, and prosecution record.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BMOZI Technical",
  url: "https://bmozi.net",
  description:
    "BMOZI Technical is a governed systems studio for product interfaces, trustworthy AI workflows, integration architecture, and deployable reference systems.",
  founder: {
    "@type": "Person",
    name: "John Briggs",
  },
  sameAs: ["https://bmozi.com", "https://bmozi.org", "https://github.com/bmozi"],
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
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(10,13,17,0.82)] backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
            <a href="#top" className="group flex items-center gap-3">
              <BrandLockup
                markClassName="h-9 w-9 sm:h-10 sm:w-10"
                textClassName="text-base sm:text-lg"
              />
            </a>
            <div className="hidden items-center gap-6 font-mono text-xs text-[var(--muted)] md:flex">
              <a className="transition-colors hover:text-white" href="#mission">
                mission
              </a>
              <a className="transition-colors hover:text-white" href="#practice">
                practice
              </a>
              <a className="transition-colors hover:text-white" href="#workspace">
                workspace
              </a>
              <a className="transition-colors hover:text-white" href="#contact">
                contact
              </a>
            </div>
            <Link
              href="/access?next=/wgu"
              className="inline-flex h-10 items-center gap-2 border border-white/15 px-3 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)] sm:px-4"
            >
              <LockKeyhole size={15} aria-hidden="true" />
              Enter
            </Link>
          </nav>
        </header>

        <section
          id="top"
          className="relative isolate overflow-hidden border-b border-white/10"
        >
          <div className="hidden sm:block">
            <SignalField />
          </div>
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative z-10">
              <p className="inline-flex items-center gap-2 border border-white/15 bg-black/25 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)] backdrop-blur">
                <Network size={16} aria-hidden="true" />
                BMOZI Technical · governed systems studio
              </p>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.55rem,7.2vw,6.5rem)] font-black leading-[0.9] text-white">
                Build systems that earn trust when the work gets real.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--soft)] sm:text-xl">
                BMOZI Technical is the engineering and architecture arm of
                BMOZI: a place for product interfaces, trustworthy AI,
                integration architecture, and deployable proof systems. The
                north star is simple: make complex work usable, accountable,
                and inspectable.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/access?next=/wgu"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
                >
                  Enter private workspace
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <a
                  href="#mission"
                  className="inline-flex h-12 items-center justify-center gap-2 border border-white/15 px-5 font-mono text-sm text-white transition-colors hover:border-white/35 hover:bg-white/10"
                >
                  <Eye size={17} aria-hidden="true" />
                  Read the north star
                </a>
              </div>
            </div>

            <figure className="relative z-10 overflow-hidden border border-white/12 bg-[rgba(11,15,19,0.72)] p-2 shadow-[0_30px_140px_rgba(25,214,197,0.13)] backdrop-blur-xl sm:p-3">
              <Image
                src="/brand/bmozi-technical-home-hero.webp"
                alt="Abstract governed software architecture with event streams, policy gates, and product interfaces"
                width={1800}
                height={1013}
                priority
                unoptimized
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="grid gap-3 border-x border-b border-white/10 bg-black/35 px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    North star
                  </p>
                  <p className="mt-1 font-display text-xl font-black leading-tight text-white">
                    Governed software for consequential work.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--signal)]">
                  <ShieldCheck size={15} aria-hidden="true" />
                  private workspace gated
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="mission" className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                North star mission
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Help serious teams move from architecture intent to trusted
                operating reality.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {northStar.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="border border-white/12 bg-white/[0.035] p-5"
                  >
                    <Icon className="text-[var(--signal)]" size={25} />
                    <h3 className="mt-8 font-display text-2xl font-black leading-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="practice"
          className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                What BMOZI Technical is about
              </p>
              <h2 className="mt-4 font-display text-4xl font-black leading-none sm:text-5xl">
                The studio sits where product, architecture, AI, and operations
                meet.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
                It is not a slide factory. It is a working-systems practice:
                name the boundary, design the contract, build the proof, test
                the risk, and make the result usable by the people who carry
                the work.
              </p>
            </div>
            <div className="grid gap-3">
              {practice.map(([title, text]) => (
                <article
                  key={title}
                  className="flex gap-4 border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
                >
                  <BadgeCheck
                    className="mt-1 shrink-0 text-[var(--magenta)]"
                    size={19}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-xl font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/70">
                      {text}
                    </p>
                  </div>
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
                  Operating stance
                </p>
                <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                  A technical practice with clear rules.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--soft)]">
                These are the habits behind the private workspace: practical
                enough to ship, strict enough to trust.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-5">
              {principles.map((principle, index) => (
                <article
                  key={principle}
                  className="flex min-h-36 flex-col justify-between border border-white/12 bg-white/[0.035] p-4"
                >
                  <p className="font-mono text-xs text-[var(--amber)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-8 font-display text-xl font-black leading-tight text-white">
                    {principle}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workspace" className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
                <LockKeyhole size={15} aria-hidden="true" />
                Private by default
              </p>
              <h2 className="mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl">
                The public page is the lobby. The workbench is gated.
              </h2>
              <p className="mt-5 leading-7 text-[var(--soft)]">
                The deeper workspace contains active architecture thinking,
                reference documents, diagrams, and invention packaging. It is
                intentionally behind authentication while it matures.
              </p>
            </div>
            <div className="grid gap-3 lg:grid-cols-3">
              {privateLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex min-h-64 flex-col border border-white/12 bg-white/[0.035] p-5 transition-colors hover:border-[var(--signal)]"
                >
                  <DoorOpen
                    className="text-[var(--signal)]"
                    size={24}
                    aria-hidden="true"
                  />
                  <h3 className="mt-8 font-display text-2xl font-black leading-tight text-white">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                    {item.text}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-xs text-[var(--signal)]">
                    Authenticate
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

        <section id="contact" className="bg-[var(--signal)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase">
                Founder-led · John Briggs
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                Make the system worthy of the mission.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="https://bmozi.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 border border-[var(--ink)] px-5 font-mono text-sm font-bold"
              >
                <Globe2 size={17} aria-hidden="true" />
                BMOZI.com
              </a>
              <a
                href="mailto:hello@bmozi.com?subject=BMOZI%20Technical"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[var(--ink)] px-5 font-mono text-sm font-bold text-white"
              >
                <Mail size={17} aria-hidden="true" />
                hello@bmozi.com
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="inline-flex border border-[var(--ink)]/20 bg-[var(--ink)] p-4">
                <BrandLockup
                  markClassName="h-16 w-16"
                  textClassName="text-3xl"
                />
              </div>
              <p className="max-w-xl font-mono text-xs leading-5 text-[var(--ink)]/70">
                Everything beyond this front door is a protected working space:
                no public index, no public crawl, no casual browsing.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
