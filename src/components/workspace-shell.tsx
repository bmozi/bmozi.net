"use client";

import {
  BookOpenText,
  BriefcaseBusiness,
  FileStack,
  FlaskConical,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { evidenceLinks, workspaceGroups } from "@/lib/workspace-nav";

const shellExclusions = [
  "/",
  "/access",
  "/api",
  "/_next",
  "/brand",
  "/favicon.ico",
  "/favicon-32x32.png",
  "/apple-touch-icon.png",
  "/icon-192.png",
  "/icon-512.png",
  "/manifest.webmanifest",
  "/robots.txt",
  "/sitemap.xml",
];

const groupIcons = {
  architecture: FlaskConical,
  writing: BookOpenText,
  reference: FileStack,
};

function isExcluded(pathname: string) {
  return shellExclusions.some((path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path),
  );
}

export function WorkspaceShell() {
  const pathname = usePathname();

  if (isExcluded(pathname)) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#080b0f]/95 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[96rem] flex-col gap-3 px-3 py-3 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/workspace"
            className="group inline-flex h-11 items-center gap-3 border border-white/12 bg-white/[0.045] px-3 transition-colors hover:border-[var(--signal)]"
          >
            <span className="flex h-6 w-6 items-center justify-center bg-[var(--signal)] text-[var(--ink)]">
              <LayoutDashboard size={15} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-sm font-black leading-none">
                Workspace
              </span>
              <span className="mt-1 hidden font-mono text-[0.62rem] uppercase text-[var(--muted)] sm:block">
                private command center
              </span>
            </span>
          </Link>
        </div>

        <nav
          className="flex gap-2 overflow-x-auto pb-1 lg:flex-1 lg:justify-center lg:overflow-visible lg:pb-0"
          aria-label="Protected workspace"
        >
          {workspaceGroups.map((group) => {
            const Icon = groupIcons[group.id as keyof typeof groupIcons];
            return (
              <Link
                key={group.id}
                href={group.href}
                className="group inline-flex h-11 shrink-0 items-center gap-2 border border-white/10 bg-white/[0.035] px-3 font-mono text-xs text-[var(--soft)] transition-colors hover:border-[var(--signal)] hover:text-white"
              >
                <Icon
                  size={15}
                  aria-hidden="true"
                  className="text-[var(--signal)]"
                />
                {group.title}
              </Link>
            );
          })}
          <Link
            href="/wgu/evaluation-rubric"
            className="group inline-flex h-11 shrink-0 items-center gap-2 border border-white/10 bg-white/[0.035] px-3 font-mono text-xs text-[var(--soft)] transition-colors hover:border-[var(--signal)] hover:text-white"
          >
            <ShieldCheck
              size={15}
              aria-hidden="true"
              className="text-[var(--amber)]"
            />
            Evidence
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <details className="group relative">
            <summary className="flex h-11 cursor-pointer list-none items-center gap-2 border border-white/10 bg-white/[0.035] px-3 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] [&::-webkit-details-marker]:hidden">
              <BriefcaseBusiness
                size={15}
                aria-hidden="true"
                className="text-[var(--magenta)]"
              />
              All work
            </summary>
            <div className="fixed left-3 right-3 top-44 z-50 grid max-h-[calc(100vh-12rem)] gap-3 overflow-y-auto overscroll-contain border border-white/12 bg-[#0c1118] p-3 shadow-[0_26px_80px_rgba(0,0,0,0.55)] sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-2 sm:w-[min(42rem,calc(100vw-1.5rem))] sm:max-h-[calc(100vh-6rem)] sm:grid-cols-2">
              {[...workspaceGroups.flatMap((group) => group.items), ...evidenceLinks].map(
                (item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block border border-white/10 bg-white/[0.035] p-3 transition-colors hover:border-[var(--signal)]"
                  >
                    <span className="block font-display text-sm font-black text-white">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">
                      {item.description}
                    </span>
                  </Link>
                ),
              )}
            </div>
          </details>
          <a
            href="/api/access"
            className="inline-flex h-11 items-center gap-2 border border-white/10 px-3 font-mono text-xs text-[var(--soft)] transition-colors hover:border-[var(--amber)] hover:text-white"
          >
            <LogOut size={15} aria-hidden="true" />
            <span className="hidden sm:inline">Lock</span>
          </a>
        </div>
      </div>
    </div>
  );
}
