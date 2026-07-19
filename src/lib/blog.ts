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
    slug: "talks",
    title: "The Podium",
    signature: "Never assert on stage what the corpus can't demonstrate in writing.",
    tagline:
      "The conference-talk portfolio: full talk kits — scripts, one-slide summaries, and Q&A drills — each downstream of written work that survived adversarial review first.",
    image: "/blog/reference-cover.webp",
    imageAlt:
      "Speaker's podium with talk kits, slide outlines, and question drill cards",
    accent: "var(--amber)",
  },
  {
    slug: "reference",
    title: "Reference",
    signature: "Hold me to these. That's what they're for.",
    tagline:
      "The operating shelf behind the work: charter, mastery system, field kit, guild plan, study guide, prosecution record, decision discipline, provenance, WGU readiness, and agentic security.",
    image: "/blog/reference-cover.webp",
    imageAlt:
      "Disciplined reference archive with binders, field cards, and technical diagrams",
    accent: "var(--magenta)",
  },
];

const articleVisuals: Record<
  string,
  Record<string, { image: string; imageAlt: string }>
> = {
  reference: {
    "01-the-architects-charter": {
      image: "/blog/reference/architects-charter.webp",
      imageAlt:
        "Signed architecture charter on a technical workbench with principle markers and governance instruments",
    },
    "02-editorial-north-star": {
      image: "/blog/reference/editorial-north-star.webp",
      imageAlt:
        "Editorial north-star compass guiding storyboard cards and architecture diagrams across a dark worktable",
    },
    "03-ea-mastery-curriculum": {
      image: "/blog/reference/ea-mastery-curriculum.webp",
      imageAlt:
        "Enterprise architecture mastery map with six learning stations around a central system model",
    },
    "04-reading-canon": {
      image: "/blog/reference/reading-canon.webp",
      imageAlt:
        "Architecture reading canon table where books, tabs, and diagrams form a layered synthesis model",
    },
    "05-field-guide": {
      image: "/blog/reference/field-guide.webp",
      imageAlt:
        "Enterprise architecture field guide table with stakeholder pins, seam traces, and diagnostic cards",
    },
    "06-field-kit": {
      image: "/blog/reference/field-kit.webp",
      imageAlt:
        "Technical worktable with blank interview cards, evidence paths, and seam audit materials",
    },
    "07-day-zero-baseline": {
      image: "/blog/reference/day-zero-baseline.webp",
      imageAlt:
        "Sealed calibration ledger with probability instruments and evidence lockbox",
    },
    "08-build-the-guild": {
      image: "/blog/reference/build-the-guild.webp",
      imageAlt:
        "Architecture guild design clinic table with shared model, decision tokens, and review paths",
    },
    "09-study-guide": {
      image: "/blog/reference/study-guide.webp",
      imageAlt:
        "Compact technical study surface with knowledge map, blank cards, and synthesis board",
    },
    "10-program-prosecution": {
      image: "/blog/reference/program-prosecution.webp",
      imageAlt:
        "Architecture program model under adversarial inspection with evidence blocks, verdict markers, and correction paths",
    },
    "11-the-decision-layer": {
      image: "/blog/reference/decision-layer.webp",
      imageAlt:
        "Governed decision layer with rollout lanes, policy gates, continuity thread, and evidence signals",
    },
    "12-provenance-record": {
      image: "/blog/reference/provenance-record.webp",
      imageAlt:
        "Tamper-evident provenance ledger with linked evidence packets, hash blocks, and revision trails",
    },
  },
};

export type ArticleMeta = {
  slug: string;
  title: string;
  order: string;
  isPlan: boolean;
  dek: string;
  minutes: number;
  image: string;
  imageAlt: string;
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
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^\*|\*$/g, "")
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ");
}

export function articleBody(markdown: string) {
  let body = markdown.replace(/^# .*(?:\r?\n)+/, "").trimStart();
  const [firstLine = "", ...rest] = body.split(/\r?\n/);
  const trimmedFirstLine = firstLine.trim();

  if (trimmedFirstLine.startsWith("*") && trimmedFirstLine.endsWith("*")) {
    body = rest.join("\n").trimStart();
  }

  return body.replace(/^---(?:\r?\n)+/, "").trimStart();
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
  const series = getSeries(seriesSlug);

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const heading = raw.split("\n").find((l) => l.startsWith("# "));
      const slug = file.replace(/\.md$/, "");
      const visual = articleVisuals[seriesSlug]?.[slug];
      return {
        slug,
        title: heading ? heading.replace(/^#\s+/, "") : slug,
        order: slug.slice(0, 2),
        isPlan: /series-plan/.test(slug),
        dek: extractDek(raw),
        minutes: readingMinutes(raw),
        image: visual?.image ?? series?.image ?? "",
        imageAlt: visual?.imageAlt ?? series?.imageAlt ?? "",
      };
    });
}

export function getArticle(seriesSlug: string, slug: string) {
  const file = path.join(seriesDir(seriesSlug), `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const markdown = fs.readFileSync(file, "utf8");
  const heading = markdown.split("\n").find((l) => l.startsWith("# "));
  const series = getSeries(seriesSlug);
  const visual = articleVisuals[seriesSlug]?.[slug];

  return {
    slug,
    title: heading ? heading.replace(/^#\s+/, "") : slug,
    markdown,
    body: articleBody(markdown),
    dek: extractDek(markdown),
    minutes: readingMinutes(markdown),
    image: visual?.image ?? series?.image ?? "",
    imageAlt: visual?.imageAlt ?? series?.imageAlt ?? "",
  };
}

export function getAllParams() {
  return seriesList.flatMap((series) =>
    getArticles(series.slug).map((a) => ({ series: series.slug, slug: a.slug })),
  );
}
