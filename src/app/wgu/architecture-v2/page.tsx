import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Network } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Architecture v2 — The Revised Target",
  description:
    "The ground-up revised target architecture after the adversarial review: systems of record respected, events as circulation, one governed student-timeline product, a single event-sourced competency ledger, and contained governed AI.",
  alternates: { canonical: "/wgu/architecture-v2" },
};

const decisions = [
  {
    layer: "01 · Systems of record stay sovereign",
    rule: "The SIS remains the legal student record; CRM remains the engagement record; the LMS remains the learning-delivery record.",
    detail:
      "No shadow system of record. Custom capability is built where the market genuinely underserves competency-based education — not where vendors are already strong. Anti-corruption adapters wrap every vendor seam so domain language never leaks.",
  },
  {
    layer: "02 · Events are circulation, not truth",
    rule: "Every system of record publishes intent-shaped domain events via transactional outbox and CDC onto the streaming backbone.",
    detail:
      "Kafka carries facts between contexts and feeds the lakehouse; it holds nothing that cannot be rebuilt from the sources. Learning events adopt open standards (Caliper-shaped vocabulary) instead of inventing one.",
  },
  {
    layer: "03 · One event-sourced context: the competency ledger",
    rule: "Competency attempts, assessment results, masteries, and interventions form an append-only ledger — the single context where temporal semantics pay rent.",
    detail:
      "PII lives outside the ledger by reference, keeping erasure trivial and the ledger replayable for efficacy research, accreditation audit, and what-did-we-know-when questions. This is the genuinely novel CBE asset no vendor sells.",
  },
  {
    layer: "04 · The Student Timeline as a governed product",
    rule: "The USO survives — demoted from source of truth to the flagship data product: a governed, near-real-time projection of the student's journey assembled from the streams.",
    detail:
      "Role-scoped views (student, mentor, instructor, operations) read from it; anything a student or agent acts on immediately reads through to the system of record for read-your-writes consistency. Lifecycle events — document received, aid status changed, case assigned, SLA breached — are first-class citizens with owners.",
  },
  {
    layer: "05 · Data products without the mesh",
    rule: "Domain-aligned data products with contracts, named owners, and SLAs — published on one central self-serve platform, landing in the lakehouse as analytical truth.",
    detail:
      "Product thinking without the federated-governance revolution. Federation applies only where regulation demands it. The platform team is a product team; the catalog is curated, not a graveyard.",
  },
  {
    layer: "06 · One governed agent gateway",
    rule: "All AI actions flow through a single gateway: scoped tools, per-action authorization, delegation via token exchange, human-in-the-loop on anything consequential or irreversible, full audit.",
    detail:
      "Agents are treated as prompt-injectable by default: capability scoping, blast-radius limits, and structural separation of private data, untrusted input, and exfiltration paths. The mesh is earned when a second production agent exists.",
  },
  {
    layer: "07 · A thin identity and policy layer",
    rule: "Managed workload identity over self-run infrastructure; one policy engine, authored centrally, enforced locally; one correlation-and-purpose ID propagated end to end.",
    detail:
      "The fabric governs the seams and nothing else. It is bought-and-thin, not built-and-thick: no central chokepoint, no second policy language, no bespoke PKI program competing with the student roadmap for engineers.",
  },
  {
    layer: "08 · Reliability at the front door",
    rule: "Login-success SLOs, real-user monitoring, and graceful degradation are architecture, not operations afterthought.",
    detail:
      "The most common student complaint is access. Availability at the student front door outranks internal elegance in every trade-off, and the SLO dashboard is reviewed like a Key Result.",
  },
];

const survived = [
  "Domain events with explicit contracts",
  "Data products with named owners",
  "Role-scoped projections of one student journey",
  "Workload identity and delegated authority",
  "Per-action agent authorization and audit",
  "Human-in-the-loop on high-impact decisions",
  "No queue without an accountable owner",
  "Immutable audit of consequential change",
  "SLOs at the student front door",
  "Adoption earned seam by seam, never mandated",
];

const changed = [
  {
    was: "Append-only event store as enterprise source of truth",
    now: "Systems of record sovereign; one event-sourced competency ledger",
  },
  {
    was: "Kafka as durable truth with rebuild-from-log",
    now: "Kafka as circulation; lakehouse as analytical truth",
  },
  {
    was: "Data mesh with federated domain ownership",
    now: "Data products with contracts on one central platform",
  },
  {
    was: "Agent mesh as a third platform plane",
    now: "One governed agent gateway; mesh deferred until earned",
  },
  {
    was: "Self-run identity fabric with dual policy engines",
    now: "Managed workload identity; one policy engine, thin fabric",
  },
  {
    was: "USO as the system holding all of the student's reality",
    now: "Student Timeline as flagship governed data product",
  },
];

const roadmap = [
  {
    phase: "Slice 1 · One seam, one term",
    text: "Outbox + CDC from one system of record; lifecycle events (document received, aid status changed) flowing to a minimal Student Timeline view; one SLO at the front door. Proves the circulation pattern and answers the loudest student complaint — the black hole. This is the Days 61–90 lighthouse thread of the first-90-days plan, targeted for Sep 18 – Oct 17, 2026.",
    lps: "Urgency · Student Obsessed · Deliver Results",
  },
  {
    phase: "Slice 2 · The competency ledger",
    text: "Event-source the assessment/competency context with PII by reference. Replayable efficacy queries and accreditation-grade audit become possible. This is the invention slice — the CBE asset nobody sells.",
    lps: "Create & Innovate · Integrity · Aim True",
  },
  {
    phase: "Slice 3 · The governed agent gateway",
    text: "One agent (coach copilot or outreach orchestrator) acting through scoped tools with per-action authorization, delegation, human-in-the-loop, and full audit. Measure policy correctness, latency, and student outcomes before any second agent.",
    lps: "Sound Judgment · Earn Trust · One-by-One",
  },
  {
    phase: "Slice 4 · Timeline as product, portfolio-wide",
    text: "Student Timeline product generalized across schools, Academy, and Craft work-based learning; data products with contracts landing in the lakehouse; mentor and operations views at parity. Expansion is earned by slice-3 metrics, not mandated.",
    lps: "Align & Commit · Advance Equity · Inspire & Develop",
  },
  {
    phase: "Horizon · The bold picture, intact",
    text: "Governed agents acting safely on one trustworthy student timeline for every learner — from age 14 to alumni — with identity, purpose, and audit propagated end to end. The mesh of meshes remains the ten-year picture; v2 is the path that survives contact with evidence.",
    lps: "Imagine Boldly · Learning",
  },
];

export default function ArchitectureV2Page() {
  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="group inline-flex items-center gap-3">
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
            <Network size={16} aria-hidden="true" />
            Architecture v2 · post-review target
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Bolder where it counts. Humbler where the industry paid the
            tuition.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            This is the architecture that survives the{" "}
            <Link
              href="/wgu/adversarial-review"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              adversarial review
            </Link>
            : eight decisions, built from the ground up on documented industry
            evidence, scoped to the full{" "}
            <Link
              href="/wgu/system-boundary"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              system boundary
            </Link>
            , and accountable to the{" "}
            <Link
              href="/wgu/leadership-principles"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              leadership principles
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The eight decisions
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            The v2 target, layer by layer.
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {decisions.map((item) => (
              <article
                key={item.layer}
                className="border border-white/12 bg-white/[0.035] p-6"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {item.layer}
                </p>
                <h3 className="mt-3 font-display text-2xl font-black leading-tight text-white">
                  {item.rule}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {item.detail}
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
              What survived the review
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none">
              Kept, verbatim.
            </h2>
            <ul className="mt-8 space-y-3">
              {survived.map((item) => (
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
              What changed
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none">
              Was → now.
            </h2>
            <div className="mt-8 space-y-3">
              {changed.map((item) => (
                <div
                  key={item.was}
                  className="border border-black/10 bg-white p-4 shadow-[6px_6px_0_rgba(12,17,22,0.06)]"
                >
                  <p className="text-sm leading-6 text-black/50 line-through">
                    {item.was}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-black/85">
                    {item.now}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                The living roadmap
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Proven in slices, principled at every step.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              Every slice names the leadership principles it serves and the
              measurement that separates a result from a story.
            </p>
          </div>
          <div className="space-y-4">
            {roadmap.map((item) => (
              <article
                key={item.phase}
                className="grid gap-4 border border-white/12 bg-white/[0.035] p-6 lg:grid-cols-[0.35fr_1fr_0.4fr]"
              >
                <p className="font-display text-xl font-black text-white">
                  {item.phase}
                </p>
                <p className="text-sm leading-6 text-[var(--soft)]">
                  {item.text}
                </p>
                <p className="font-mono text-xs uppercase leading-5 text-[var(--amber)] lg:text-right">
                  {item.lps}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-6 text-white/50">
            Public reference architecture and personal working thesis — not a
            representation of WGU internal systems or decisions. Revised in the
            open as evidence accumulates; the previous thesis remains published
            alongside its prosecution.
          </p>
        </div>
      </section>
    </main>
  );
}
