import fs from "node:fs";
import path from "node:path";

const CONTENT_ROOT = path.join(process.cwd(), "content", "blog");

export type Series = {
  slug: string;
  title: string;
  signature: string;
  tagline: string;
  image: string;
  imageAlt: string;
  accent: string;
};

export const seriesList: Series[] = [
  {
    slug: "the-seams",
    title: "The Seams",
    signature: "The tools were never the gap. The seams were.",
    tagline:
      "The flagship series: letting go of tool thinking. Complaints as system outputs, governed seams, prosecution as practice, slices over programs.",
    image: "/blog/the-seams-cover.webp",
    imageAlt:
      "Abstract enterprise systems connected by fragile bridges over dark gaps",
    accent: "var(--signal)",
  },
  {
    slug: "getting-it-right",
    title: "Getting It Right",
    signature: "Correct is a property you can test. Everything else is hope.",
    tagline:
      "The technical sequel, at implementation depth: naive version → why it breaks → correct version → the test that proves it.",
    image: "/blog/getting-it-right-cover.webp",
    imageAlt:
      "Precision test bench showing event flow, checkpoints, and verification lights",
    accent: "var(--amber)",
  },
  {
    slug: "seams-for-everyone",
    title: "Seams for Everyone",
    signature: "That's the whole idea. The rest is engineering.",
    tagline:
      "Big system ideas explained with things you already understand — hospital charts, ticket rails, flight recorders, key cards.",
    image: "/blog/seams-for-everyone-cover.webp",
    imageAlt:
      "Everyday operating artifacts connected by glowing architecture lines",
    accent: "var(--signal)",
  },
  {
    slug: "architects-mind",
    title: "The Architect's Mind",
    signature: "Patterns are free. Judgment is earned.",
    tagline:
      "Essays on judgment for senior technologists: decision pacing, hype-cycle reading, saying no, and systems that process people.",
    image: "/blog/architects-mind-cover.webp",
    imageAlt:
      "Decision map with doors, compass, and routes through architectural choices",
    accent: "var(--amber)",
  },
  {
    slug: "reference",
    title: "Reference",
    signature: "Hold me to these. That's what they're for.",
    tagline:
      "The standing documents behind the writing: the Architect's Charter and the private editorial north star.",
    image: "/blog/reference-cover.webp",
    imageAlt:
      "Disciplined reference archive with binders, field cards, and technical diagrams",
    accent: "var(--magenta)",
  },
];

export type ArticleMeta = {
  slug: string;
  title: string;
  order: string;
  isPlan: boolean;
  dek: string;
  minutes: number;
};

function words(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`|[\]()\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function readingMinutes(markdown: string) {
  return Math.max(1, Math.ceil(words(markdown).length / 230));
}

function extractDek(markdown: string) {
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const candidate =
    lines.find(
      (line) =>
        !line.startsWith("#") &&
        !line.startsWith("---") &&
        !line.startsWith("|") &&
        !line.startsWith("```"),
    ) ?? "";

  return candidate
    .replace(/^\*|\*$/g, "")
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ");
}

export function articleBody(markdown: string) {
  return markdown
    .replace(/^# .*(?:\r?\n)+/, "")
    .replace(/^\*[^*\n]+\*(?:\r?\n)+/, "")
    .replace(/^(?:\r?\n)*---(?:\r?\n)+/, "")
    .trimStart();
}

function seriesDir(seriesSlug: string) {
  return path.join(CONTENT_ROOT, seriesSlug);
}

export function getSeries(slug: string): Series | undefined {
  return seriesList.find((s) => s.slug === slug);
}

export function getArticles(seriesSlug: string): ArticleMeta[] {
  const dir = seriesDir(seriesSlug);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const heading = raw.split("\n").find((l) => l.startsWith("# "));
      const slug = file.replace(/\.md$/, "");
      return {
        slug,
        title: heading ? heading.replace(/^#\s+/, "") : slug,
        order: slug.slice(0, 2),
        isPlan: /series-plan/.test(slug),
        dek: extractDek(raw),
        minutes: readingMinutes(raw),
      };
    });
}

export function getArticle(seriesSlug: string, slug: string) {
  const file = path.join(seriesDir(seriesSlug), `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const markdown = fs.readFileSync(file, "utf8");
  const heading = markdown.split("\n").find((l) => l.startsWith("# "));

  return {
    slug,
    title: heading ? heading.replace(/^#\s+/, "") : slug,
    markdown,
    body: articleBody(markdown),
    dek: extractDek(markdown),
    minutes: readingMinutes(markdown),
  };
}

export function getAllParams() {
  return seriesList.flatMap((series) =>
    getArticles(series.slug).map((a) => ({ series: series.slug, slug: a.slug })),
  );
}
