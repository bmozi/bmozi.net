import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { getArticles, seriesList } from "@/lib/blog";

export const metadata: Metadata = {
  title: "The Writing Room — Series Library",
  description:
    "The private mirror of the article series: The Seams, Getting It Right, Seams for Everyone, The Architect's Mind, and the standing reference documents.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/workspace" className="group inline-flex items-center gap-3">
            <BrandLockup markClassName="h-9 w-9" textClassName="text-lg" />
          </Link>
          <Link
            href="/workspace"
            className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Workspace
          </Link>
        </nav>
      </header>

      <section className="relative isolate min-h-[660px] overflow-hidden border-b border-white/10">
        <Image
          src="/blog/writing-room-hero.webp"
          alt="Dark technical writing desk with system maps, notes, and architectural diagrams"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,17,0.97)_0%,rgba(10,13,17,0.8)_48%,rgba(10,13,17,0.38)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(25,214,197,0.22),transparent_28rem)]" />
        <div className="mx-auto flex min-h-[660px] max-w-7xl flex-col justify-end px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <BookOpen size={16} aria-hidden="true" />
              The writing room · private mirror of the published series
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
              Four series, one reference shelf. Read, review, study.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              The canonical home of every article before and after it ships to
              LinkedIn — plus the operating library behind the work. Gated,
              like everything here.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="space-y-14">
            {seriesList.map((series) => {
              const articles = getArticles(series.slug);
              return (
                <section
                  key={series.slug}
                  className="grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[0.42fr_0.58fr]"
                >
                  <Link
                    href={`/blog/${series.slug}`}
                    className="group block overflow-hidden border border-white/12 bg-white/[0.035] transition-colors hover:border-[var(--signal)]"
                  >
                    <div className="overflow-hidden">
                      <Image
                        src={series.image}
                        alt={series.imageAlt}
                        width={1672}
                        height={941}
                        sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 42vw, 100vw"
                        className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </div>
                    <div className="p-5">
                      <p
                        className="font-mono text-xs uppercase"
                        style={{ color: series.accent }}
                      >
                        {articles.length} pieces
                      </p>
                      <h2 className="mt-3 font-display text-3xl font-black leading-tight text-white sm:text-4xl">
                        {series.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                        {series.tagline}
                      </p>
                      <p className="mt-4 border-l-2 border-white/15 pl-4 font-mono text-xs italic leading-5 text-[var(--amber)]">
                        “{series.signature}”
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-[var(--signal)]">
                        Open shelf
                        <ArrowRight
                          size={14}
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>

                  <div className="grid content-start gap-3 md:grid-cols-2">
                    {articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/blog/${series.slug}/${article.slug}`}
                        className="group flex min-h-32 flex-col overflow-hidden border border-white/12 bg-white/[0.035] transition-colors hover:border-[var(--signal)]"
                      >
                        {series.slug === "reference" ? (
                          <Image
                            src={article.image}
                            alt={article.imageAlt}
                            width={900}
                            height={506}
                            sizes="(min-width: 1024px) 29vw, (min-width: 768px) 50vw, 100vw"
                            className="aspect-[16/7] h-auto w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.025]"
                          />
                        ) : null}
                        <span className="flex flex-1 flex-col p-4">
                        <span className="flex items-center justify-between gap-3 font-mono text-xs text-white/40">
                          <span>{article.isPlan ? "PLAN" : article.order}</span>
                          <span>{article.minutes} min</span>
                        </span>
                        <span className="mt-3 text-sm font-semibold leading-6 text-white">
                          {article.title}
                        </span>
                        <span className="mt-auto inline-flex items-center gap-2 pt-4 font-mono text-xs text-[var(--signal)]">
                          Read
                          <ArrowRight
                            size={14}
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
          <p className="mt-12 max-w-3xl text-sm leading-6 text-white/50">
            Source of truth lives in the products folders; this section renders
            the same markdown. Drop a new series folder into content/blog and
            register it in the series list — no other changes needed.
          </p>
        </div>
      </section>
    </main>
  );
}
