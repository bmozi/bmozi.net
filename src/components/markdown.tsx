import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { ArticleVisual } from "@/components/article-visuals";

/**
 * Zero-dependency markdown renderer covering exactly the constructs used in
 * the blog articles: h1–h3, hr, blockquote, ul/ol, pipe tables, code fences,
 * paragraphs, and inline bold / italic / code / links.
 */

function renderInline(text: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let rest = text;
  let i = 0;

  const patterns: {
    regex: RegExp;
    render: (m: RegExpMatchArray, key: string) => ReactNode;
  }[] = [
    {
      regex: /`([^`]+)`/,
      render: (m, key) => (
        <code
          key={key}
          className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[var(--signal)]"
        >
          {m[1]}
        </code>
      ),
    },
    {
      regex: /\*\*([^*]+)\*\*/,
      render: (m, key) => (
        <strong key={key} className="font-bold text-white">
          {renderInline(m[1], `${key}-b`)}
        </strong>
      ),
    },
    {
      regex: /\*([^*]+)\*/,
      render: (m, key) => (
        <em key={key}>{renderInline(m[1], `${key}-i`)}</em>
      ),
    },
    {
      regex: /\[([^\]]+)\]\(([^)]+)\)/,
      render: (m, key) => {
        const href = m[2];
        const className =
          "text-[var(--signal)] underline underline-offset-4";
        return href.startsWith("/") ? (
          <Link key={key} href={href} className={className}>
            {m[1]}
          </Link>
        ) : (
          <a key={key} href={href} className={className} rel="noreferrer">
            {m[1]}
          </a>
        );
      },
    },
  ];

  while (rest.length > 0) {
    let earliest: { index: number; match: RegExpMatchArray; p: (typeof patterns)[number] } | null =
      null;

    for (const p of patterns) {
      const match = rest.match(p.regex);
      if (match && match.index !== undefined) {
        if (!earliest || match.index < earliest.index) {
          earliest = { index: match.index, match, p };
        }
      }
    }

    if (!earliest) {
      nodes.push(rest);
      break;
    }

    if (earliest.index > 0) {
      nodes.push(rest.slice(0, earliest.index));
    }
    nodes.push(earliest.p.render(earliest.match, `${keyBase}-${i++}`));
    rest = rest.slice(earliest.index + earliest.match[0].length);
  }

  return nodes;
}

export function Markdown({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  const paraClass = "text-[1.05rem] leading-8 text-[var(--soft)]";

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    // article visual shortcode: {{visual:slug}}
    const visualMatch = line.trim().match(/^\{\{visual:([a-z0-9-]+)\}\}$/);
    if (visualMatch) {
      blocks.push(<ArticleVisual key={key++} slug={visualMatch[1]} />);
      i++;
      continue;
    }

    // code fence
    if (line.startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++; // closing fence
      blocks.push(
        <pre
          key={key++}
          className="my-8 overflow-x-auto border border-white/12 bg-black/50 p-5 font-mono text-sm leading-7 text-[var(--signal)] shadow-[8px_8px_0_rgba(25,214,197,0.08)]"
        >
          {buf.join("\n")}
        </pre>,
      );
      continue;
    }

    // headings
    if (/^#{1,3}\s/.test(line)) {
      const level = line.match(/^#+/)![0].length;
      const text = line.replace(/^#+\s*/, "");
      if (level === 1) {
        blocks.push(
          <h1
            key={key++}
            className="mb-8 mt-2 font-display text-4xl font-black leading-tight text-white sm:text-5xl"
          >
            {renderInline(text, `h${key}`)}
          </h1>,
        );
      } else if (level === 2) {
        blocks.push(
          <h2
            key={key++}
            className="mb-5 mt-14 border-t border-white/10 pt-9 font-display text-2xl font-black leading-tight text-white sm:text-3xl"
          >
            {renderInline(text, `h${key}`)}
          </h2>,
        );
      } else {
        blocks.push(
          <h3
            key={key++}
            className="mb-4 mt-9 font-display text-xl font-black text-white"
          >
            {renderInline(text, `h${key}`)}
          </h3>,
        );
      }
      i++;
      continue;
    }

    // hr
    if (/^(---+|\*\*\*+)\s*$/.test(line)) {
      blocks.push(
        <div key={key++} className="my-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/10" />
          <span className="h-2 w-2 bg-[var(--signal)]" />
          <span className="h-px flex-1 bg-white/10" />
        </div>,
      );
      i++;
      continue;
    }

    // blockquote
    if (line.startsWith(">")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(
        <blockquote
          key={key++}
          className="my-8 border-l-2 border-[var(--magenta)] bg-white/[0.035] px-5 py-4 text-lg italic leading-8 text-white/85"
        >
          {renderInline(buf.join(" "), `q${key}`)}
        </blockquote>,
      );
      continue;
    }

    // table
    if (line.trim().startsWith("|")) {
      const rows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(lines[i]);
        i++;
      }
      const parsed = rows
        .filter((r) => !/^\s*\|[\s\-:|]+\|\s*$/.test(r))
        .map((r) =>
          r
            .trim()
            .replace(/^\||\|$/g, "")
            .split("|")
            .map((c) => c.trim()),
        );
      const [head, ...body] = parsed;
      blocks.push(
        <div key={key++} className="my-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {head.map((c, ci) => (
                  <th
                    key={ci}
                    className="border border-white/12 bg-white/[0.06] px-3 py-2 text-left font-mono text-xs uppercase text-[var(--amber)]"
                  >
                    {renderInline(c, `th${key}-${ci}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri}>
                  {row.map((c, ci) => (
                    <td
                      key={ci}
                      className="border border-white/12 px-3 py-2 leading-6 text-[var(--soft)]"
                    >
                      {renderInline(c, `td${key}-${ri}-${ci}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    // lists
    if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
      const ordered = /^\s*\d+\./.test(line);
      const items: string[] = [];
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ""));
        i++;
      }
      const itemNodes = items.map((item, ii) => (
        <li key={ii} className="leading-8 text-[var(--soft)]">
          {renderInline(item, `li${key}-${ii}`)}
        </li>
      ));
      blocks.push(
        ordered ? (
          <ol key={key++} className="my-6 list-decimal space-y-2 border-l border-white/10 pl-7">
            {itemNodes}
          </ol>
        ) : (
          <ul key={key++} className="my-6 list-disc space-y-2 border-l border-white/10 pl-7">
            {itemNodes}
          </ul>
        ),
      );
      continue;
    }

    // paragraph — accumulate until blank line or structural line
    const buf: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^(#{1,3}\s|>|```|---+\s*$|\s*([-*]|\d+\.)\s+|\{\{visual:[a-z0-9-]+\}\}$)/.test(
        lines[i].trim(),
      ) &&
      !lines[i].trim().startsWith("|")
    ) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={key++} className={`my-6 ${paraClass}`}>
        {renderInline(buf.join(" "), `p${key}`)}
      </p>,
    );
  }

  return <Fragment>{blocks}</Fragment>;
}
