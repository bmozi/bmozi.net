"use client";

import Link from "next/link";
import { Check, Circle, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export type WguExplorerItem = {
  href: string;
  label: string;
  title: string;
};

export type WguExplorerTrack = {
  label: string;
  title: string;
  text: string;
  items: WguExplorerItem[];
};

type WguExplorerProgressProps = {
  tracks: WguExplorerTrack[];
};

const storageKey = "bmozi-wgu-explored-v1";

function readStoredProgress() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];

    return Array.isArray(parsed)
      ? new Set(parsed.filter((item): item is string => typeof item === "string"))
      : new Set<string>();
  } catch {
    return new Set<string>();
  }
}

export function WguExplorerProgress({ tracks }: WguExplorerProgressProps) {
  const [activeTrack, setActiveTrack] = useState(tracks[0]?.label ?? "");
  const [explored, setExplored] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setExplored(readStoredProgress());
      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(storageKey, JSON.stringify([...explored]));
  }, [explored, ready]);

  const allItems = useMemo(
    () => tracks.flatMap((track) => track.items),
    [tracks],
  );
  const selectedTrack = tracks.find((track) => track.label === activeTrack) ?? tracks[0];
  const totalExplored = allItems.filter((item) => explored.has(item.href)).length;
  const totalPercent = allItems.length
    ? Math.round((totalExplored / allItems.length) * 100)
    : 0;
  const selectedExplored =
    selectedTrack?.items.filter((item) => explored.has(item.href)).length ?? 0;
  const selectedPercent = selectedTrack?.items.length
    ? Math.round((selectedExplored / selectedTrack.items.length) * 100)
    : 0;

  function toggle(href: string) {
    setExplored((current) => {
      const next = new Set(current);

      if (next.has(href)) {
        next.delete(href);
      } else {
        next.add(href);
      }

      return next;
    });
  }

  function markTrack() {
    if (!selectedTrack) return;
    setExplored((current) => {
      const next = new Set(current);
      selectedTrack.items.forEach((item) => next.add(item.href));
      return next;
    });
  }

  function resetProgress() {
    setExplored(new Set());
  }

  return (
    <section className="border-b border-white/10 bg-[#090d13]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p className="font-mono text-xs uppercase text-[var(--amber)]">
            Explorer checklist
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Know what path you are on, and what remains.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--soft)]">
            Mark an area when you have read enough to explain its purpose,
            evidence, and next link. Progress is saved in this browser.
          </p>
          <div className="mt-7 border border-white/12 bg-white/[0.035] p-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase text-white/45">
                  Whole hub
                </p>
                <p className="mt-1 font-display text-3xl font-black text-white">
                  {totalExplored}/{allItems.length}
                </p>
              </div>
              <p className="font-mono text-sm text-[var(--signal)]">
                {totalPercent}%
              </p>
            </div>
            <div className="mt-4 h-2 bg-white/10">
              <div
                className="h-full bg-[var(--signal)] transition-[width]"
                style={{ width: `${totalPercent}%` }}
              />
            </div>
            <button
              type="button"
              onClick={resetProgress}
              className="mt-5 inline-flex h-10 items-center gap-2 border border-white/15 px-3 font-mono text-xs uppercase text-white transition-colors hover:border-[var(--magenta)] hover:text-[var(--magenta)]"
            >
              <RotateCcw size={14} aria-hidden="true" />
              Reset marks
            </button>
          </div>
        </div>

        <div className="grid gap-3 xl:grid-cols-[0.34fr_0.66fr]">
          <div className="grid gap-2">
            {tracks.map((track) => {
              const done = track.items.filter((item) => explored.has(item.href)).length;
              const isActive = track.label === selectedTrack?.label;
              return (
                <button
                  key={track.label}
                  type="button"
                  onClick={() => setActiveTrack(track.label)}
                  className={
                    isActive
                      ? "border border-[var(--signal)] bg-[rgba(25,214,197,0.1)] p-4 text-left"
                      : "border border-white/12 bg-white/[0.035] p-4 text-left transition-colors hover:border-[var(--signal)]"
                  }
                >
                  <span className="font-mono text-xs uppercase text-[var(--amber)]">
                    {track.label}
                  </span>
                  <span className="mt-2 block font-display text-xl font-black leading-tight text-white">
                    {track.title}
                  </span>
                  <span className="mt-3 block font-mono text-xs text-white/45">
                    {done}/{track.items.length} explored
                  </span>
                </button>
              );
            })}
          </div>

          {selectedTrack ? (
            <div className="border border-white/12 bg-white/[0.035]">
              <div className="border-b border-white/10 p-5">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="font-mono text-xs uppercase text-[var(--signal)]">
                      {selectedTrack.label} path
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-black leading-none text-white">
                      {selectedTrack.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                      {selectedTrack.text}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={markTrack}
                    className="inline-flex h-10 shrink-0 items-center gap-2 bg-[var(--signal)] px-3 font-mono text-xs font-bold uppercase text-[var(--ink)] transition-transform hover:-translate-y-0.5"
                  >
                    <Check size={14} aria-hidden="true" />
                    Mark path
                  </button>
                </div>
                <div className="mt-5 h-2 bg-white/10">
                  <div
                    className="h-full bg-[var(--amber)] transition-[width]"
                    style={{ width: `${selectedPercent}%` }}
                  />
                </div>
              </div>
              <ol className="divide-y divide-white/10">
                {selectedTrack.items.map((item, index) => {
                  const isDone = explored.has(item.href);
                  return (
                    <li
                      key={item.href}
                      className="grid gap-4 p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                    >
                      <button
                        type="button"
                        onClick={() => toggle(item.href)}
                        aria-pressed={isDone}
                        className={
                          isDone
                            ? "flex h-10 w-10 items-center justify-center border border-[var(--signal)] bg-[rgba(25,214,197,0.16)] text-[var(--signal)]"
                            : "flex h-10 w-10 items-center justify-center border border-white/15 text-white/45 transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
                        }
                      >
                        {isDone ? (
                          <Check size={16} aria-hidden="true" />
                        ) : (
                          <Circle size={16} aria-hidden="true" />
                        )}
                        <span className="sr-only">
                          {isDone ? "Mark not explored" : "Mark explored"}
                        </span>
                      </button>
                      <div>
                        <p className="font-mono text-xs uppercase text-white/45">
                          Stop {index + 1} · {item.label}
                        </p>
                        <Link
                          href={item.href}
                          className="mt-1 inline-block font-display text-xl font-black leading-tight text-white transition-colors hover:text-[var(--signal)]"
                        >
                          {item.title}
                        </Link>
                      </div>
                      <Link
                        href={item.href}
                        className="inline-flex h-10 items-center justify-center border border-white/15 px-3 font-mono text-xs uppercase text-white transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
                      >
                        Open
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
