import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Hammer } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Ground-Up, Done Right — The Build Strategy",
  description:
    "Building the new student system from the ground up without the big-bang graveyard: greenfield architecture, chosen ground, cohort-based strangler cutover, the records workstream, and decommission criteria.",
  alternates: { canonical: "/wgu/ground-up" },
};

const meanings = [
  {
    title: "Greenfield architecture, not greenfield university",
    text: "~190,000 students cannot be paused, and higher ed's graveyard is full of big-bang replacements that consumed institutions before delivering a login page. Ground-up means the design carries zero legacy constraints — nothing in v2 exists because 'that's how the current system does it' — while the running institution stays untouched until the new system earns each workload.",
  },
  {
    title: "Greenfield means choosing your ground",
    text: "Even a from-scratch startup buys its CRM and identity resolution. The ground-up decision is not 'custom everything' — it is choosing which ground you build on. Build from zero what defines the institution; buy the commodity layers so the greenfield privilege is spent on differentiation, not plumbing.",
  },
  {
    title: "The privilege claimed loudly",
    text: "A CBE-native data model from day one — competency units as the primitive, not credit hours bent into shape. Event-native lifecycle with owners and SLAs designed in, not retrofitted. One identity spine from the first record. SLOs as birthright. One governance regime with nothing grandfathered in.",
  },
];

const built = [
  "Competency Ledger — the event-sourced record of mastery (the asset no vendor sells)",
  "Student Timeline product — CBE-native journey semantics with lifecycle events, owners, SLAs",
  "Decisioning loop — next-best-action, experimentation, learning-science validation",
  "Seam governance — contracts, universal ID distribution, policy enforcement, audit",
  "Governed agent gateway — one front door for AI action",
];

const bought = [
  "Engagement & case management — Salesforce, per ADR-001",
  "Identity resolution — Data Cloud as the matching engine; the ID is ours",
  "Lakehouse & streaming infrastructure — Databricks, Confluent (already the estate)",
  "Auth/SSO, proctoring, contact center, ITSM — commodity layers with strong vendors",
];

const phases = [
  {
    phase: "Prove",
    text: "Slice 1 goes live as the first heartbeat of the new system — not a patch on the old one. One lifecycle thread, real students, measured against the guardrail metrics.",
  },
  {
    phase: "First cohort",
    text: "The new system runs end to end for new students first — one program or Academy entrants. New enrollees never touch the legacy path; existing students feel nothing. No data big-bang: the cohort starts clean.",
  },
  {
    phase: "Expand by cohort",
    text: "Each term, more programs and populations start on the new core. Success criteria from the previous cohort gate each expansion — adoption is earned by metrics, never mandated by calendar.",
  },
  {
    phase: "Drain, don't migrate",
    text: "The old estate empties by graduation rather than by migration. Long-running students finish on the system they started on unless they opt in to move — One-by-One applies to transitions too.",
  },
  {
    phase: "Decommission on criteria",
    text: "A legacy component retires only when: zero active students depend on it, its record obligations are transferred with audit, its integrations are drained, and a named owner signs the shutdown. Until then it is maintained, not neglected.",
  },
];

const records = [
  "Transcripts are forever: the historical academic record outlives every system that ever held it, so records migration is its own governed workstream — never a side effect of a product rollout.",
  "System-of-record status transfers per domain by explicit, audited cutover — one date, one owner, one direction. There is never a period where 'both' systems are legally true.",
  "Historical records move with full lineage: source, transformation, verification, and registrar sign-off recorded for every batch — accreditation-grade, replayable evidence.",
  "Until cutover, the legacy SIS answers all official questions; the new system serves projections clearly labeled as views. The clear line prevents the shadow-record trap the adversarial review warned against.",
];

export default function GroundUpPage() {
  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/workspace" className="group inline-flex items-center gap-3">
            <BrandLockup markClassName="h-9 w-9" textClassName="text-lg" />
          </Link>
          <Link
            href="/wgu"
            className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            WGU Hub
          </Link>
        </nav>
      </header>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <Hammer size={16} aria-hidden="true" />
            Build strategy · the ground-up mandate
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Ground-up, done right.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            Building the new student system from the ground up is the mandate
            and the privilege — and the wrong reading of &ldquo;ground
            up&rdquo; is the most reliable way large education systems die.
            This is the disciplined version: architecturally greenfield,
            operationally incremental, cut over cohort by cohort, with a
            visible finish line.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            What ground-up means here
          </p>
          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {meanings.map((m) => (
              <article
                key={m.title}
                className="border border-white/12 bg-white/[0.035] p-6"
              >
                <h2 className="font-display text-2xl font-black leading-tight text-white">
                  {m.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {m.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              Built from zero
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none">
              The ground we choose.
            </h2>
            <ul className="mt-8 space-y-3">
              {built.map((item) => (
                <li
                  key={item}
                  className="border border-black/10 bg-white p-4 text-sm leading-6 text-black/80 shadow-[6px_6px_0_rgba(12,17,22,0.06)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              Bought deliberately
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none">
              The plumbing we refuse to rebuild.
            </h2>
            <ul className="mt-8 space-y-3">
              {bought.map((item) => (
                <li
                  key={item}
                  className="border border-black/10 bg-white p-4 text-sm leading-6 text-black/80 shadow-[6px_6px_0_rgba(12,17,22,0.06)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-black/55">
              The full reasoning, costs, and exit-optionality live in ADR-001.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Cohort-based strangler cutover
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                New students first. The old estate drains by graduation.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              The safest ground-up path ever devised for a school: no
              migration big-bang, no dual truth, no student ever stranded
              mid-journey.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {phases.map((p, i) => (
              <article
                key={p.phase}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-black text-white">
                  {p.phase}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            The hard part, named
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            The records workstream.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {records.map((r) => (
              <p
                key={r}
                className="border-l-2 border-[var(--magenta)]/60 bg-white/[0.03] p-4 pl-5 text-sm leading-7 text-[var(--soft)]"
              >
                {r}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The two build questions, answered decisively
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Could we build a better SIS? Should we build a better CRM?
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="border border-[var(--signal)] bg-white/[0.04] p-6 sm:p-8">
              <p className="font-mono text-xs font-bold uppercase text-[var(--signal)]">
                The SIS · YES — scoped, grown, earned
              </p>
              <p className="mt-4 text-base leading-7 text-white/90">
                WGU may be the one institution on earth where building the
                academic-record core is rational. The SIS market is shaped
                around what WGU doesn&apos;t have — course sections, seat
                caps, room scheduling, semester calendars, waitlists — and
                shaped against what WGU is: competency-native, single
                modality, uniform six-month terms at mega-scale. The registrar
                core here is genuinely simpler than a traditional
                university&apos;s, and the market has been bending
                credit-hour systems to fit it for twenty-five years.
              </p>
              <p className="mt-4 text-base leading-7 text-white/90">
                The path is already in the architecture: the Competency Ledger
                is the embryo of the new academic record. A transcript is a
                projection of the ledger. Enrollment states, conferral, and
                degree audit layer onto it domain by domain, and
                system-of-record status transfers by explicit, audited cutover
                as each domain earns trust — the records workstream, promoted
                to center stage.
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--soft)]">
                The hard boundary: never build the compliance edges. Title IV
                financial-aid processing, NSC and IPEDS reporting, and
                transcript interoperability are regulatory churn machines —
                that is what vendors are for. Build the record of mastery;
                buy the paperwork.
              </p>
            </article>
            <article className="border border-[var(--magenta)] bg-white/[0.04] p-6 sm:p-8">
              <p className="font-mono text-xs font-bold uppercase text-[var(--magenta)]">
                The CRM · NO — govern it, never rebuild it
              </p>
              <p className="mt-4 text-base leading-7 text-white/90">
                A CRM is a commodity with an enormous surface — omnichannel
                contact, campaign management, case tooling, telephony, staff
                mobile apps — in a healthy, competitive vendor market, with no
                CBE-specific gap anywhere in it. Rebuilding it would spend the
                greenfield privilege on undifferentiated plumbing and put us
                in a feature race we cannot win and don&apos;t need to enter.
              </p>
              <p className="mt-4 text-base leading-7 text-white/90">
                And the evidence says the CRM was never the problem: it was
                fully in operation during every complaint. A &ldquo;better
                CRM&rdquo; is not a different CRM — it is the same CRM with a
                governed boundary, one universal identity, and one event
                stream, exactly what the ADR-001 playbook enforces.
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--soft)]">
                Build the differentiation on top — timeline views, decisioning,
                mentor tooling reading from governed context — and let the
                vendor keep shipping the plumbing underneath it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="border border-[var(--signal)] bg-white/[0.03] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              The pitch, upgraded
            </p>
            <p className="mt-4 max-w-4xl text-xl leading-9 text-white">
              &ldquo;Modernize the estate&rdquo; is a project. &ldquo;Build
              the new student system from the ground up, cut over cohort by
              cohort, prove it with the first thousand students&rdquo; is a
              transformation with a visible finish line — and Slice 1 is the
              first heartbeat of the new system, not a patch on the old one.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/wgu/architecture-v2"
                className="inline-flex h-11 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                The target architecture
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/wgu/first-90-days"
                className="inline-flex h-11 items-center gap-2 border border-white/20 px-5 font-mono text-sm text-white transition-colors hover:border-[var(--signal)]"
              >
                The 90-day plan
              </Link>
              <Link
                href="/wgu/glossary"
                className="inline-flex h-11 items-center gap-2 border border-white/20 px-5 font-mono text-sm text-white transition-colors hover:border-[var(--signal)]"
              >
                Glossary
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
