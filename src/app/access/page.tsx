import type { Metadata } from "next";
import { ArrowRight, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Access",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

type AccessPageProps = {
  searchParams: Promise<{
    error?: string;
    next?: string;
  }>;
};

function safeNextPath(value?: string) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  if (value.startsWith("/access") || value.startsWith("/api/access")) {
    return "/";
  }

  return value;
}

export default async function AccessPage({ searchParams }: AccessPageProps) {
  const params = await searchParams;
  const nextPath = safeNextPath(params.next);
  const hasError = params.error === "1";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute left-1/2 top-0 h-px w-[min(42rem,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--signal)] to-transparent opacity-80" />
      <div className="absolute bottom-0 right-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.15),transparent_68%)]" />

      <section className="relative w-full max-w-[28rem] border border-white/14 bg-[#0d1118]/92 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="h-1 w-full bg-gradient-to-r from-[var(--signal)] via-[var(--magenta)] to-[var(--amber)]" />
        <div className="px-6 py-7 sm:px-8 sm:py-8">
          <div className="mb-8 flex items-center justify-between gap-5">
            <BrandLockup
              mode="single"
              markClassName="h-9 w-9"
              textClassName="text-lg"
            />
            <div className="flex h-10 w-10 items-center justify-center border border-[var(--signal)]/45 bg-[var(--signal)]/10 text-[var(--signal)]">
              <ShieldCheck size={20} aria-hidden="true" />
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--signal)]">
              Private systems access
            </p>
            <h1 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Enter the workspace.
            </h1>
          </div>

          <form action="/api/access" method="post" className="space-y-4">
            <input type="hidden" name="next" value={nextPath} />
            <label className="block">
              <span className="mb-2 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--soft)]">
                <KeyRound size={14} aria-hidden="true" />
                User
              </span>
              <input
                name="username"
                autoComplete="username"
                required
                className="h-12 w-full border border-white/14 bg-white/[0.06] px-4 font-sans text-base text-white outline-none transition focus:border-[var(--signal)] focus:bg-white/[0.09]"
              />
            </label>

            <label className="block">
              <span className="mb-2 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--soft)]">
                <LockKeyhole size={14} aria-hidden="true" />
                Password
              </span>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="h-12 w-full border border-white/14 bg-white/[0.06] px-4 font-sans text-base text-white outline-none transition focus:border-[var(--signal)] focus:bg-white/[0.09]"
              />
            </label>

            {hasError ? (
              <p className="border border-[var(--magenta)]/40 bg-[var(--magenta)]/10 px-4 py-3 text-sm font-medium text-white">
                Access was not granted. Check the user and password.
              </p>
            ) : null}

            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-between border border-[var(--signal)] bg-[var(--signal)] px-4 font-display text-base font-semibold text-[var(--ink)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--amber)]"
            >
              Continue
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition group-hover:translate-x-0.5"
              />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center border-t border-white/10 px-6 py-4 sm:px-8">
          <span className="h-px bg-white/12" />
          <span className="px-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            No public index
          </span>
          <span className="h-px bg-white/12" />
        </div>
      </section>
    </main>
  );
}
