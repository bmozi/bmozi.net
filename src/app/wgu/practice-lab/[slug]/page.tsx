import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  SearchCheck,
  Users,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import {
  getPracticeLabPage,
  getPracticeLabParams,
  practiceLabPages,
  type PracticeLabIcon,
} from "@/lib/practice-lab";

type Params = { slug: string };

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

export function generateStaticParams() {
  return getPracticeLabParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPracticeLabPage(slug);

  return {
    title: page ? `${page.label} — Practice Lab` : "Practice Lab",
    description: page?.summary,
    alternates: page ? { canonical: `/wgu/practice-lab/${page.slug}` } : undefined,
  };
}

export default async function PracticeLabDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getPracticeLabPage(slug);

  if (!page) notFound();

  const index = practiceLabPages.findIndex((item) => item.slug === page.slug);
  const prev = index > 0 ? practiceLabPages[index - 1] : null;
  const next =
    index >= 0 && index < practiceLabPages.length - 1
      ? practiceLabPages[index + 1]
      : null;
  const Icon = iconMap[page.icon];

  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/workspace" className="group inline-flex items-center gap-3">
            <BrandLockup markClassName="h-9 w-9" textClassName="text-lg" />
          </Link>
          <Link
            href="/wgu/practice-lab"
            className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Practice Lab
          </Link>
        </nav>
      </header>

      <section className="relative isolate min-h-[680px] overflow-hidden border-b border-white/10">
        <Image
          src={page.image}
          alt={page.imageAlt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,17,0.97)_0%,rgba(10,13,17,0.8)_50%,rgba(10,13,17,0.38)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_18%,rgba(25,214,197,0.22),transparent_28rem)]" />
        <div className="mx-auto flex min-h-[680px] max-w-7xl flex-col justify-end px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <Icon size={16} aria-hidden="true" />
              {page.eyebrow}
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5.15rem)] font-black leading-[0.92] text-white">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              {page.summary}
            </p>
            <p className="mt-5 max-w-3xl border-l-2 border-[var(--signal)] pl-4 font-mono text-sm leading-7 text-[var(--signal)]">
              {page.signature}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              Why this lab exists
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none sm:text-5xl">
              {page.promise}
            </h2>
          </div>
          <p className="text-lg leading-8 text-black/72">{page.why}</p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Operating frame
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white">
              The repeatable moves.
            </h2>
            <p className="mt-5 leading-7 text-[var(--soft)]">
              Use this frame before turning the lab into templates. The method
              matters more than the artifact.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.operatingFrame.map((item) => (
              <article
                key={item.label}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-display text-2xl font-black leading-tight text-white">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0d1118]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
                <ClipboardList size={15} aria-hidden="true" />
                Artifacts
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                What this lab should produce.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              These are not documents for their own sake. Each one should make a
              decision easier, safer, or more inspectable.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {page.artifacts.map((artifact) => (
              <article
                key={artifact.label}
                className="flex min-h-56 flex-col border border-white/12 bg-white/[0.035] p-5"
              >
                <BadgeCheck
                  size={22}
                  aria-hidden="true"
                  className="text-[var(--signal)]"
                />
                <h3 className="mt-5 font-display text-2xl font-black leading-tight text-white">
                  {artifact.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {artifact.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              {page.diagramTitle}
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none sm:text-5xl">
              The diagram to keep in mind.
            </h2>
          </div>
          <div className="grid gap-3">
            {page.diagramSteps.map((step, stepIndex) => (
              <article
                key={step.label}
                className="grid gap-4 border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)] sm:grid-cols-[auto_1fr]"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-[var(--ink)] font-mono text-sm font-bold text-[var(--signal)]">
                  {String(stepIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-black leading-tight">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/68">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.58fr_0.42fr]">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--signal)]">
              <MessageSquare size={15} aria-hidden="true" />
              Rehearsals
            </p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
              Practice prompts for the real room.
            </h2>
            <div className="mt-8 grid gap-3">
              {page.drills.map((drill) => (
                <article
                  key={drill.label}
                  className="border border-white/12 bg-white/[0.035] p-5"
                >
                  <p className="font-display text-2xl font-black leading-tight text-white">
                    {drill.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                    {drill.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <aside className="border border-white/12 bg-white/[0.035] p-6 lg:sticky lg:top-8 lg:self-start">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
              <SearchCheck size={15} aria-hidden="true" />
              Self-audit
            </p>
            <h3 className="mt-4 font-display text-3xl font-black leading-none text-white">
              Questions that keep it honest.
            </h3>
            <div className="mt-6 grid gap-3">
              {page.selfAudit.map((question) => (
                <p
                  key={question}
                  className="border-l-2 border-[var(--signal)]/60 pl-4 text-sm leading-6 text-[var(--soft)]"
                >
                  {question}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <nav>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
          {prev ? (
            <Link
              href={`/wgu/practice-lab/${prev.slug}`}
              className="inline-flex items-center gap-2 font-mono text-sm text-[var(--soft)] transition-colors hover:text-[var(--signal)]"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              {prev.label}
            </Link>
          ) : (
            <Link
              href="/wgu/practice-lab"
              className="inline-flex items-center gap-2 font-mono text-sm text-[var(--soft)] transition-colors hover:text-[var(--signal)]"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Practice Lab
            </Link>
          )}
          {next ? (
            <Link
              href={`/wgu/practice-lab/${next.slug}`}
              className="inline-flex items-center gap-2 text-right font-mono text-sm text-[var(--soft)] transition-colors hover:text-[var(--signal)]"
            >
              {next.label}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ) : (
            <Link
              href="/wgu"
              className="inline-flex items-center gap-2 text-right font-mono text-sm text-[var(--soft)] transition-colors hover:text-[var(--signal)]"
            >
              WGU Hub
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
