import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ClipboardList,
  LayoutDashboard,
  Map,
  MessageSquare,
  Route,
  Scale,
  Users,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { practiceLabPages, type PracticeLabIcon } from "@/lib/practice-lab";

export const metadata: Metadata = {
  title: "Practice Lab — Enterprise Architecture Role Mastery",
  description:
    "A role-mastery lab for enterprise architects: executive briefs, stakeholder maps, operating cadence, governance, portfolio choices, cases, rehearsals, and leadership bench-building.",
  alternates: { canonical: "/wgu/practice-lab" },
};

const iconMap = {
  briefcase: BriefcaseBusiness,
  map: Map,
  dashboard: LayoutDashboard,
  route: Route,
  chart: ChartNoAxesCombined,
  casebook: ClipboardList,
  messages: MessageSquare,
  users: Users,
} satisfies Record<PracticeLabIcon, typeof BriefcaseBusiness>;

const principles = [
  {
    title: "Move decisions",
    text: "The work is successful only when better decisions happen in rooms you do and do not attend.",
  },
  {
    title: "Translate without dilution",
    text: "Mission, money, risk, and timing are not soft versions of architecture. They are architecture at executive altitude.",
  },
  {
    title: "Practice before pressure",
    text: "Hard rooms should not be the first place you discover your first sentence, evidence path, or boundary line.",
  },
  {
    title: "Design for absence",
    text: "Influence matures when artifacts, rituals, and people keep operating without the original author present.",
  },
];

const masteryLinks = [
  "Decision quality",
  "Influence without authority",
  "Financial fluency",
  "Technical credibility",
  "Boundary judgment",
  "Feedback manufacturing",
];

export default function PracticeLabPage() {
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

      <section className="relative isolate min-h-[700px] overflow-hidden border-b border-white/10">
        <Image
          src="/wgu/practice-lab/practice-lab-hero.webp"
          alt="Enterprise architecture practice system with executive room, stakeholder map, decision ledger, and portfolio board connected by luminous threads"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,17,0.97)_0%,rgba(10,13,17,0.78)_48%,rgba(10,13,17,0.34)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_18%,rgba(25,214,197,0.22),transparent_28rem)]" />
        <div className="mx-auto flex min-h-[700px] max-w-7xl flex-col justify-end px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <Scale size={16} aria-hidden="true" />
              Practice Lab · role mastery and influence
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.45rem,6.7vw,5.35rem)] font-black leading-[0.92] text-white">
              Master the rooms where architecture becomes organizational change.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              The architecture hub proves the invention and the method. The
              Practice Lab trains the role: briefing executives, mapping
              stakeholders, running the week, governing without gates, making
              portfolio choices, arguing cases, rehearsing hard rooms, and
              building the bench.
            </p>
            <p className="mt-5 max-w-3xl border-l-2 border-[var(--signal)] pl-4 font-mono text-sm leading-7 text-[var(--signal)]">
              Current priority: executive translation, stakeholder influence,
              personal operating cadence, decision rights, then portfolio
              discipline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/wgu/practice-lab/executive-briefing-room"
                className="inline-flex h-12 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Start with executive briefs
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/blog/reference/03-ea-mastery-curriculum"
                className="inline-flex h-12 items-center gap-2 border border-white/20 px-5 font-mono text-sm font-bold text-white transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
              >
                Return to curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              What this adds
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none sm:text-5xl">
              From knowing the architecture to leading with it.
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/70">
              The next competence is not another diagram. It is a repeatable
              way to move decisions, earn trust, shape funding, and grow
              architectural judgment in other people.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <p className="font-display text-2xl font-black leading-tight">
                  {principle.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/68">
                  {principle.text}
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
                Priority path
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Eight labs, sequenced by influence leverage.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              Work them in order. The first five are the core operating layer;
              the last three compound judgment across cases, rooms, and people.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {practiceLabPages.map((page) => {
              const Icon = iconMap[page.icon];
              return (
                <Link
                  key={page.slug}
                  href={`/wgu/practice-lab/${page.slug}`}
                  className="group flex min-h-72 flex-col border border-white/12 bg-white/[0.035] p-5 transition-colors hover:border-[var(--signal)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-xs uppercase text-[var(--amber)]">
                      {String(page.order).padStart(2, "0")}
                    </p>
                    <Icon size={22} aria-hidden="true" className="text-[var(--signal)]" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-black leading-tight text-white">
                    {page.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                    {page.signature}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-xs text-[var(--signal)]">
                    Open lab
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
              <BadgeCheck size={15} aria-hidden="true" />
              Mastery domains
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white">
              The curriculum now has a rehearsal floor.
            </h2>
            <p className="mt-5 leading-7 text-[var(--soft)]">
              Each lab turns a mastery domain into artifacts and conversations
              that can be practiced, inspected, and improved.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {masteryLinks.map((domain) => (
              <div
                key={domain}
                className="border border-white/12 bg-white/[0.035] px-5 py-4 font-display text-xl font-black text-white"
              >
                {domain}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
