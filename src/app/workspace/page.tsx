import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  FileStack,
  FlaskConical,
  LayoutDashboard,
  LockKeyhole,
  Presentation,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { evidenceLinks, workspaceGroups } from "@/lib/workspace-nav";

export const metadata: Metadata = {
  title: "Workspace",
  description:
    "The private BMOZI Technical workspace for architecture, writing, reference material, and proof artifacts.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const groupIcons = {
  architecture: FlaskConical,
  writing: BookOpenText,
  talks: Presentation,
  reference: FileStack,
  practice: BriefcaseBusiness,
};

const fastLanes = [
  {
    href: "/wgu/student-continuity-fabric",
    label: "Open the invention",
    text: "Start with the named category and proof slice.",
  },
  {
    href: "/blog/reference/09-study-guide",
    label: "Study the system",
    text: "Use the compact path through the full body of work.",
  },
  {
    href: "/wgu/architecture-v2",
    label: "Inspect the architecture",
    text: "Review the target-state diagram and decision set.",
  },
  {
    href: "/wgu/practice-lab",
    label: "Practice the role",
    text: "Rehearse briefs, stakeholders, governance, and influence.",
  },
];

export default function WorkspacePage() {
  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <section className="relative isolate min-h-[720px] overflow-hidden border-b border-white/10">
        <Image
          src="/brand/bmozi-technical-home-hero.webp"
          alt="Governed technical systems map with connected product interfaces and policy gates"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,17,0.97)_0%,rgba(10,13,17,0.8)_48%,rgba(10,13,17,0.34)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(25,214,197,0.24),transparent_28rem)]" />
        <div className="mx-auto flex min-h-[720px] max-w-[96rem] flex-col justify-end px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-[var(--signal)]/35 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)] backdrop-blur">
              <LayoutDashboard size={16} aria-hidden="true" />
              Private workspace
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,6vw,5.4rem)] font-black leading-[0.92] text-white">
              Everything in one protected workbench.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--soft)]">
              This is the authenticated home base for BMOZI Technical work:
              architecture, writing, reference documents, evidence, and
              invention packaging. Use it as the private map instead of
              returning to the public lobby.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 border border-white/15 bg-black/45 px-4 py-3 font-mono text-xs uppercase text-[var(--muted)] backdrop-blur">
              <LockKeyhole size={14} aria-hidden="true" />
              Private map · no public index · authenticated
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {fastLanes.map((lane) => (
              <Link
                key={lane.href}
                href={lane.href}
                className="group flex min-h-36 flex-col justify-between border border-white/15 bg-black/45 p-4 backdrop-blur transition-colors hover:border-[var(--signal)]"
              >
                <span className="font-display text-lg font-black leading-tight text-white">
                  {lane.label}
                </span>
                <span className="mt-4 text-xs leading-5 text-[var(--muted)]">
                  {lane.text}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-[var(--signal)]">
                  Go
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

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-[96rem] px-5 py-12 sm:px-8">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                Main work areas
              </p>
              <h2 className="mt-3 font-display text-4xl font-black leading-none sm:text-5xl">
                Five doors, one body of work.
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-black/65">
              The workspace groups the material by how you use it: build the
              architecture, shape the writing, pull from the reference shelf,
              package the talks, or practice the role.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
            {workspaceGroups.map((group) => {
              const Icon = groupIcons[group.id as keyof typeof groupIcons];
              return (
                <article
                  key={group.id}
                  className="flex min-h-[34rem] flex-col border border-black/10 bg-white p-5 shadow-[10px_10px_0_rgba(12,17,22,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                        {group.eyebrow}
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-black leading-none">
                        {group.title}
                      </h3>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--ink)] text-[var(--signal)]">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-black/68">
                    {group.description}
                  </p>
                  <Link
                    href={group.href}
                    className="mt-6 inline-flex h-11 items-center justify-center gap-2 bg-[var(--ink)] px-4 font-mono text-xs font-bold text-white transition-colors hover:bg-black"
                  >
                    Open {group.title}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>

                  <div className="mt-6 grid gap-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group border border-black/10 bg-black/[0.025] p-3 transition-colors hover:border-[var(--magenta)] hover:bg-[var(--magenta)]/5"
                      >
                        <span className="block font-display text-base font-black">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-black/62">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[96rem] gap-7 px-5 py-12 sm:px-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
              <SearchCheck size={15} aria-hidden="true" />
              Evidence and review
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white">
              The proof objects stay one click away.
            </h2>
            <p className="mt-5 leading-7 text-[var(--soft)]">
              Case studies, rubrics, and pitch materials are surfaced here so
              the work can be inspected from executive, architecture, and
              adversarial-review angles.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {evidenceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-44 flex-col border border-white/12 bg-white/[0.035] p-5 transition-colors hover:border-[var(--signal)]"
              >
                <ShieldCheck
                  size={22}
                  aria-hidden="true"
                  className="text-[var(--signal)]"
                />
                <span className="mt-5 font-display text-2xl font-black leading-tight text-white">
                  {item.label}
                </span>
                <span className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {item.description}
                </span>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-xs text-[var(--signal)]">
                  Open
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
