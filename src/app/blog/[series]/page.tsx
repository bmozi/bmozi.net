import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpenText, LibraryBig } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { getArticles, getSeries, seriesList } from "@/lib/blog";

type Params = { series: string };

const referenceGroups = [
  {
    title: "Foundations",
    description:
      "The commitments and editorial rules that make the body of work accountable.",
    slugs: ["01-the-architects-charter", "02-editorial-north-star"],
  },
  {
    title: "Mastery System",
    description:
      "The curriculum, canon, and field guide for growing enterprise-architecture judgment deliberately.",
    slugs: [
      "03-ea-mastery-curriculum",
      "04-reading-canon",
      "05-field-guide",
    ],
  },
  {
    title: "Day-1 Execution",
    description:
      "The instruments for first-month listening, evidence capture, and calibrated belief grading.",
    slugs: ["06-field-kit", "07-day-zero-baseline"],
  },
  {
    title: "Leadership Scale",
    description:
      "The plan for building shared architectural judgment, plus the one-sitting study guide.",
    slugs: ["08-build-the-guild", "09-study-guide"],
  },
  {
    title: "Evidence & Prosecution",
    description:
      "The record of hostile review, verdicts, fixes, decision discipline, and the habit of revising in the open.",
    slugs: [
      "10-program-prosecution",
      "11-the-decision-layer",
      "12-provenance-record",
    ],
  },
];

export function generateStaticParams() {
  return seriesList.map((series) => ({ series: series.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { series: seriesSlug } = await params;
  const series = getSeries(seriesSlug);

  return {
    title: series ? `${series.title} — The Writing Room` : "The Writing Room",
    description: series?.tagline,
    alternates: series ? { canonical: `/blog/${series.slug}` } : undefined,
  };
}

export default async function BlogSeriesPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { series: seriesSlug } = await params;
  const series = getSeries(seriesSlug);

  if (!series) notFound();

  const articles = getArticles(seriesSlug);
  const groups =
    seriesSlug === "reference"
      ? referenceGroups.map((group) => ({
          ...group,
          articles: group.slugs
            .map((slug) => articles.find((article) => article.slug === slug))
            .filter((article): article is (typeof articles)[number] =>
              Boolean(article),
            ),
        }))
      : [
          {
            title: "All Pieces",
            description: series.tagline,
            articles,
          },
        ];

  const featured =
    seriesSlug === "reference"
      ? articles.find((article) => article.slug === "09-study-guide")
      : articles.at(-1);

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
          src={series.image}
          alt={series.imageAlt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,17,0.97)_0%,rgba(10,13,17,0.8)_48%,rgba(10,13,17,0.38)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(25,214,197,0.2),transparent_28rem)]" />
        <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <LibraryBig size={16} aria-hidden="true" />
              {series.title} · {articles.length} pieces
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
              {series.title === "Reference"
                ? "The operating library behind the work."
                : series.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              {series.tagline}
            </p>
            <p className="mt-6 max-w-2xl border-l-2 border-[var(--amber)] pl-4 font-mono text-sm italic leading-6 text-[var(--amber)]">
              “{series.signature}”
            </p>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                Start here
              </p>
              <h2 className="mt-4 font-display text-4xl font-black leading-none sm:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-black/70">
                {featured.dek}
              </p>
              <Link
                href={`/blog/${seriesSlug}/${featured.slug}`}
                className="mt-7 inline-flex h-11 items-center gap-2 bg-[var(--ink)] px-4 font-mono text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                Read this piece
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              width={1672}
              height={941}
              loading="eager"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[16/9] h-auto w-full border border-black/10 object-cover shadow-[10px_10px_0_rgba(12,17,22,0.08)]"
            />
          </div>
        </section>
      ) : null}

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="space-y-12">
            {groups.map((group) =>
              group.articles.length ? (
                <section key={group.title}>
                  <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                      <p
                        className="font-mono text-xs uppercase"
                        style={{ color: series.accent }}
                      >
                        {group.title}
                      </p>
                      <h2 className="mt-3 max-w-3xl font-display text-3xl font-black leading-tight text-white sm:text-4xl">
                        {group.description}
                      </h2>
                    </div>
                    <p className="font-mono text-xs text-white/40">
                      {group.articles.length}{" "}
                      {group.articles.length === 1 ? "piece" : "pieces"}
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {group.articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/blog/${seriesSlug}/${article.slug}`}
                        className="group flex min-h-full flex-col overflow-hidden border border-white/12 bg-white/[0.035] transition-colors hover:border-[var(--signal)]"
                      >
                        <Image
                          src={article.image}
                          alt={article.imageAlt}
                          width={900}
                          height={506}
                          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
                          className="aspect-[16/8] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                        />
                        <span className="flex flex-1 flex-col p-5">
                          <span className="flex items-center justify-between gap-3 font-mono text-xs text-white/40">
                            <span>{article.order}</span>
                            <span>{article.minutes} min</span>
                          </span>
                          <span className="mt-3 font-display text-2xl font-black leading-tight text-white">
                            {article.title}
                          </span>
                          <span className="mt-4 text-sm leading-6 text-[var(--soft)]">
                            {article.dek}
                          </span>
                          <span className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-xs text-[var(--signal)]">
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
              ) : null,
            )}
          </div>

          <div className="mt-14 border border-[var(--signal)]/45 bg-[rgba(25,214,197,0.07)] p-6">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--signal)]">
              <BookOpenText size={15} aria-hidden="true" />
              Navigation principle
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-white">
              Every produced document should have a shelf, a card, a route, and
              a next step. This page is the shelf; the article pages carry the
              reading experience; the sidebar keeps the library traversable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
