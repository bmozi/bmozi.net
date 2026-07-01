"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  kind: string;
  status: string;
  tags: string[];
  result: string;
};

type ProjectFilterProps = {
  projects: Project[];
};

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const filters = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((item) => item.tags)))],
    [projects],
  );
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(active));

  return (
    <div>
      <div
        className="mb-6 flex gap-2 overflow-x-auto pb-2"
        aria-label="Project filters"
      >
        {filters.map((filter) => {
          const selected = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={
                selected
                  ? "h-10 shrink-0 border border-[var(--signal)] bg-[var(--signal)] px-4 font-mono text-xs font-bold text-[var(--ink)]"
                  : "h-10 shrink-0 border border-white/15 px-4 font-mono text-xs text-[var(--soft)] transition-colors hover:border-white/35 hover:text-white"
              }
              aria-pressed={selected}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((project) => (
          <article
            key={project.title}
            className="group min-h-80 border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-6 transition-colors hover:border-[var(--signal)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {project.kind}
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-white">
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight
                className="text-[var(--muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--signal)]"
                size={24}
                aria-hidden="true"
              />
            </div>
            <p className="mt-8 leading-7 text-[var(--soft)]">{project.result}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="border border-[var(--magenta)] px-2 py-1 font-mono text-xs text-[var(--magenta)]">
                {project.status}
              </span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-2 py-1 font-mono text-xs text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
