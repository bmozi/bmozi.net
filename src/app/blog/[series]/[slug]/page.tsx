import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { Markdown } from "@/components/markdown";
import { getAllParams, getArticle, getArticles, getSeries } from "@/lib/blog";

type Params = { series: string; slug: string };

export function generateStaticParams() {
  return getAllParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { series, slug } = await params;
  const article = getArticle(series, slug);
  return {
    title: article ? `${article.title} — The Writing Room` : "The Writing Room",
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { series: seriesSlug, slug } = await params;
  const series = getSeries(seriesSlug);
  const article = getArticle(seriesSlug, slug);

  if (!series || !article) notFound();

  const articles = getArticles(seriesSlug);
  const index = articles.findIndex((a) => a.slug === slug);
  const prev = index > 0 ? articles[index - 1] : null;
  const next = index >= 0 && index < articles.length - 1 ? articles[index + 1] : null;

  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/workspace" className="group inline-flex items-center gap-3">
            <BrandLockup markClassName="h-9 w-9" textClassName="text-lg" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Writing Room
          </Link>
        </nav>
      </header>

      <section className="relative isolate min-h-[620px] overflow-hidden border-b border-white/10">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,17,0.97)_0%,rgba(10,13,17,0.82)_50%,rgba(10,13,17,0.4)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(255,79,216,0.18),transparent_28rem)]" />
        <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-4xl">
            <p
              className="font-mono text-xs uppercase"
              style={{ color: series.accent }}
            >
              {series.title} · {article.minutes} min read
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.35rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
              {article.title}
            </h1>
            {article.dek ? (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--soft)]">
                {article.dek}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <article className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[17rem_minmax(0,58rem)] lg:justify-center xl:gap-14">
        <aside className="hidden lg:block">
          <div className="sticky top-8 border border-white/12 bg-white/[0.035] p-5">
            <p
              className="font-mono text-xs uppercase"
              style={{ color: series.accent }}
            >
              Series
            </p>
            <p className="mt-3 font-display text-2xl font-black leading-tight text-white">
              {series.title}
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
              {series.signature}
            </p>
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="font-mono text-[0.68rem] uppercase text-white/40">
                Shelf
              </p>
              <div className="mt-3 space-y-2">
                {articles.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${seriesSlug}/${item.slug}`}
                    className={`block border-l-2 py-1.5 pl-3 text-xs leading-5 transition-colors ${
                      item.slug === slug
                        ? "border-[var(--signal)] text-white"
                        : "border-white/10 text-[var(--muted)] hover:border-[var(--signal)] hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Link
                href={`/blog/${seriesSlug}`}
                className="mt-4 inline-flex font-mono text-xs text-[var(--signal)] transition-colors hover:text-white"
              >
                Open series shelf
              </Link>
            </div>
          </div>
        </aside>
        <div className="min-w-0">
          <Markdown markdown={article.body} />
        </div>
      </article>

      <nav className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-10 sm:flex-row sm:justify-between sm:px-8 lg:max-w-[78rem]">
          {prev ? (
            <Link
              href={`/blog/${seriesSlug}/${prev.slug}`}
              className="inline-flex items-center gap-2 font-mono text-sm text-[var(--soft)] transition-colors hover:text-[var(--signal)]"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/blog/${seriesSlug}/${next.slug}`}
              className="inline-flex items-center gap-2 text-right font-mono text-sm text-[var(--soft)] transition-colors hover:text-[var(--signal)]"
            >
              {next.title}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </main>
  );
}
