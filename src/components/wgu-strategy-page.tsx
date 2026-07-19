import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";
import type { WguStrategyPage as WguStrategyPageData } from "@/lib/wgu-strategy-pages";

type WguStrategyPageProps = {
  page: WguStrategyPageData;
};

export function WguStrategyPage({ page }: WguStrategyPageProps) {
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
        imageSrc={page.image}
        imageAlt={page.imageAlt}
        accent={page.accent}
        minHeight="min-h-[680px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            {page.eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            {page.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            {page.intro}
          </p>
          {page.primaryLink ? (
            <Link
              href={page.primaryLink.href}
              className="mt-8 inline-flex h-12 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              {page.primaryLink.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </WguImmersiveHero>

      {page.sections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={
            sectionIndex % 2 === 0
              ? "border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]"
              : "border-b border-white/10"
          }
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p
                className={
                  sectionIndex % 2 === 0
                    ? "font-mono text-xs uppercase text-[var(--magenta)]"
                    : "font-mono text-xs uppercase text-[var(--signal)]"
                }
              >
                {section.eyebrow}
              </p>
              <h2
                className={
                  sectionIndex % 2 === 0
                    ? "mt-4 font-display text-4xl font-black leading-none sm:text-5xl"
                    : "mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl"
                }
              >
                {section.title}
              </h2>
              <p
                className={
                  sectionIndex % 2 === 0
                    ? "mt-5 text-lg leading-8 text-black/70"
                    : "mt-5 text-lg leading-8 text-[var(--soft)]"
                }
              >
                {section.body}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {section.cards.map((card) => (
                <article
                  key={card.title}
                  className={
                    sectionIndex % 2 === 0
                      ? "border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
                      : "border border-white/12 bg-white/[0.035] p-5"
                  }
                >
                  <h3
                    className={
                      sectionIndex % 2 === 0
                        ? "font-display text-2xl font-black leading-tight"
                        : "font-display text-2xl font-black leading-tight text-white"
                    }
                  >
                    {card.title}
                  </h3>
                  <p
                    className={
                      sectionIndex % 2 === 0
                        ? "mt-3 text-sm leading-6 text-black/68"
                        : "mt-3 text-sm leading-6 text-[var(--soft)]"
                    }
                  >
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
              <CheckCircle2 size={15} aria-hidden="true" />
              Operating checks
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white">
              Hold the page to a test.
            </h2>
            <p className="mt-5 leading-7 text-[var(--soft)]">
              This is the working checklist. If these checks are not true, the
              strategy is still an assertion.
            </p>
          </div>
          <div className="grid gap-3">
            {page.checks.map((check) => (
              <div
                key={check}
                className="border border-white/12 bg-white/[0.035] p-4 text-sm leading-6 text-[var(--soft)]"
              >
                {check}
              </div>
            ))}
            <p className="mt-4 border-l-2 border-[var(--signal)] pl-4 text-xs leading-5 text-white/45">
              {page.sourceNote}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

