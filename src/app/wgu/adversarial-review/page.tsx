import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Swords } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Adversarial Review — USO and Mesh of Meshes on Trial",
  description:
    "A full prosecution of the Unified Student Object and mesh-of-meshes thesis: four contested bets, the strongest opposing evidence, peer comparisons, and honest verdicts.",
  alternates: { canonical: "/wgu/adversarial-review" },
};

type Bet = {
  bet: string;
  claim: string;
  prosecution: string[];
  steelman: string;
  verdict: string;
  verdictLabel: "RESTRUCTURE" | "CONTAIN" | "DEFER" | "KEEP THIN";
};

const bets: Bet[] = [
  {
    bet: "Bet 1 · Event sourcing as the enterprise backbone",
    claim:
      "An append-only event store is the source of truth for the student's entire reality, with CQRS projections for every role.",
    prosecution: [
      "The central-log subscription model couples every consumer to raw event internals — the exact coupling you'd never allow against a shared database. Four role projections on day one means four codebases to touch on every schema change, forever.",
      "Schema evolution is the documented long-term killer. A student record must stay legible for 10–50 years; event versioning across always-on consumers is exactly where practitioners report it 'completely falls apart.'",
      "Append-only collides with erasure rights. Crypto-shredding has a known legal hole — encrypted personal data is still personal data — so the safe pattern keeps PII out of the log, which concedes the 'unified' timeline cannot actually hold the student's reality.",
      "Eventual consistency is a student-experience hazard: submit an assignment, dashboard says 'not submitted'; an advisor or an AI agent acts on a projection that lags the write model. Registration, aid, and grades demand read-your-writes.",
      "The kill-shot question: for which core problem is event sourcing the only solution? If the answer is 'auditability' or 'flexibility,' a history table delivers 80% of the value at a fraction of the cost.",
    ],
    steelman:
      "Competency-based education genuinely is a temporal domain — attempts, masteries, interventions, and what-did-we-know-when questions have real audit and efficacy value. Selectively event-sourcing one bounded context is legitimate and defensible.",
    verdict:
      "Event-source the competency and assessment ledger — the one context where temporal semantics pay rent — with PII kept outside the log. Everywhere else, systems of record stay CRUD with history, publishing intent-shaped events via outbox and CDC. The timeline survives as a governed product, not as enterprise truth.",
    verdictLabel: "RESTRUCTURE",
  },
  {
    bet: "Bet 2 · Kafka as source of truth",
    claim:
      "The Kafka backbone holds durable truth; projections and downstream systems rebuild from the log.",
    prosecution: [
      "Kafka has no indexes, no ad-hoc query, no isolation. The canonical failure: two readers both 'win' the last seat because downstream views lag — directly applicable to enrollment at ~190k-student scale.",
      "Infinite-retention topics as system of record turn every projection rebuild into a full-history replay; compaction, snapshotting, and rebuild windows become their own operational program.",
      "The industry's own trajectory treats the log as transport: Confluent's flagship strategy materializes topics into open table formats because the analytical system of record is the lakehouse, not the log.",
      "Erasure on non-compacted event timelines re-imports the entire GDPR/FERPA problem from Bet 1.",
    ],
    steelman:
      "Kafka as the durable circulatory system — with databases as hearts — is standard and sound. The estate signal is real: streaming plus lakehouse is already the proven pattern at scale here.",
    verdict:
      "Kafka is the integration backbone, never the truth. Operational truth lives in the systems of record; analytical truth lands in the lakehouse via governed materialization. This aligns with the platform estate that already exists rather than fighting it.",
    verdictLabel: "RESTRUCTURE",
  },
  {
    bet: "Bet 3 · Data mesh as the operating model",
    claim:
      "Federated domain ownership: each domain runs its own data products under federated computational governance.",
    prosecution: [
      "Post-2023 retrospectives are brutal: multi-million-dollar failed implementations, catalog graveyards, quality divergence recreating the silos it promised to remove. Even vendors who sold the mesh now publish 'what happened' post-mortems.",
      "Only a small minority of organizations reach the governance maturity federated ownership requires; the common anti-pattern is re-badging system teams as 'domains' — a university would mint 'the SIS domain' and 'the LMS domain' with no real business ownership.",
      "The paradigm's own originator pivoted from paradigm to packaged product — an implicit concession that DIY meshes were failing.",
      "A university is one business, not a conglomerate of independent units; the sociotechnical preconditions (embedded data engineering per domain, product managers per domain, multi-year patience) mostly don't exist.",
    ],
    steelman:
      "What survived the hype cycle is real: data-as-a-product, explicit contracts, named owners, platform-as-product. Clean, contracted, owned data is the prerequisite for trustworthy AI — and some university domains genuinely have distinct regulators and semantics.",
    verdict:
      "Data products without the mesh: domain-aligned products with contracts and owners on one central, self-serve platform. Federated governance only where regulation genuinely demands it. Keep the product thinking; drop the organizational revolution.",
    verdictLabel: "CONTAIN",
  },
  {
    bet: "Bet 4 · Agent mesh as a platform layer",
    claim:
      "A first-class agent mesh — identity, tool brokers, orchestration — as the third mesh, governed by the fabric.",
    prosecution: [
      "Agentic AI sits at the peak of inflated expectations; few organizations run production agents at all. Building a mesh platform for an agent population that doesn't exist yet is premature platformization.",
      "Prompt injection remains the #1 unsolved vulnerability, and agents reading student-submitted content are injection sinks sitting on top of the full student timeline — maximum blast radius by design.",
      "Agent identity standards are drafts in flux; standardizing an institutional trust fabric on them now means betting on moving specifications.",
      "Failure analyses say the real gaps are boring: isolation, observability, cost controls — solved by platform discipline, not a new mesh plane.",
    ],
    steelman:
      "The direction is right: the emerging authorization standards build on exactly the delegation primitives the thesis names. For FERPA-regulated actions, centralized policy evaluation and per-action audit are requirements, not gold-plating. The critique is timing and scope, not direction.",
    verdict:
      "Start with one governed gateway: scoped tools, per-action authorization, human-in-the-loop for anything consequential, full audit. Earn the mesh when there is more than one production agent worth meshing.",
    verdictLabel: "DEFER",
  },
];

const crossCutting = [
  {
    title: "Four bets, multiplied",
    text: "The thesis requires event sourcing as backbone, Kafka as truth, data mesh, and agent mesh to all pay off — four contested bets stacked multiplicatively. Each has documented majority-failure or pre-maturity characteristics. Sound Judgment says: never stack unproven bets you could sequence.",
  },
  {
    title: "Against the industry's direction of travel",
    text: "The 2024–2026 trajectory is consolidation and simplification: lakehouse over mesh, sidecar-less over sidecars, modular monoliths over microservice sprawl, buy-over-build for SIS and CRM. The thesis inverts all four currents and must justify each inversion individually.",
  },
  {
    title: "No peer runs this",
    text: "The mega-scale online peers reached 100k+ students on SIS-of-record + integration bus + CRM engagement layer + selectively built systems. The burden of proof sits on why this institution needs an architecture none of its peers required — 'we are more CBE than they are' answers only the competency ledger, not the whole stack.",
  },
  {
    title: "The shadow system-of-record trap",
    text: "The SIS remains the legal system of record. A Unified Student Object holding 'all of the student's reality' beside it is a second truth — dual-truth reconciliation forever, plus FERPA exposure concentrated in one appetizing target.",
  },
  {
    title: "The fabric's operational bill",
    text: "Self-run workload-identity infrastructure is a 1–3 engineer, multi-year commitment; running two policy engines doubles the audit surface; a central policy plane recreates the bottleneck it replaces. The fabric must be bought-and-thin, not built-and-thick.",
  },
  {
    title: "What survives — and it's a lot",
    text: "Domain events with contracts, data products with owners, workload identity, per-action agent authorization, human-in-the-loop guardrails, SLOs at the student front door, no queue without an owner, immutable audit of consequential change. The ingredients are sound. The prosecution convicts the center of gravity, not the ingredients.",
  },
];

const verdictColors: Record<Bet["verdictLabel"], string> = {
  RESTRUCTURE: "text-[var(--magenta)] border-[var(--magenta)]",
  CONTAIN: "text-[var(--amber)] border-[var(--amber)]",
  DEFER: "text-[var(--amber)] border-[var(--amber)]",
  "KEEP THIN": "text-[var(--signal)] border-[var(--signal)]",
};

export default function AdversarialReviewPage() {
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
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--magenta)]">
            <Swords size={16} aria-hidden="true" />
            Adversarial review · the thesis on trial
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            The strongest case against my own architecture.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            Earn Trust demands examining your strongest convictions with
            humility; Sound Judgment demands evidence over attachment. So the
            USO and mesh-of-meshes thesis gets a real prosecution: the four
            load-bearing bets, the harshest documented evidence against each,
            the honest steelman, and a verdict. The revised architecture that
            results lives on the{" "}
            <Link
              href="/wgu/architecture-v2"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              Architecture v2
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-6">
            {bets.map((item) => (
              <article
                key={item.bet}
                className="border border-white/12 bg-white/[0.035] p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-3xl">
                    <p className="font-mono text-xs uppercase text-[var(--signal)]">
                      {item.bet}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-black leading-tight text-white">
                      {item.claim}
                    </h2>
                  </div>
                  <span
                    className={`border px-3 py-2 font-mono text-xs font-bold uppercase ${verdictColors[item.verdictLabel]}`}
                  >
                    {item.verdictLabel}
                  </span>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                      Prosecution
                    </p>
                    <ul className="mt-3 space-y-3">
                      {item.prosecution.map((point) => (
                        <li
                          key={point}
                          className="border-l-2 border-[var(--magenta)]/50 pl-4 text-sm leading-6 text-[var(--soft)]"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="border border-white/12 bg-black/30 p-5">
                      <p className="font-mono text-xs uppercase text-[var(--signal)]">
                        Steelman
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/85">
                        {item.steelman}
                      </p>
                    </div>
                    <div className="border border-[var(--amber)]/60 bg-black/30 p-5">
                      <p className="font-mono text-xs uppercase text-[var(--amber)]">
                        Verdict
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white">
                        {item.verdict}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Cross-cutting findings
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            What the trial establishes.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {crossCutting.map((item) => (
              <article
                key={item.title}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-black/75">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="border border-[var(--signal)] bg-white/[0.03] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              Final judgment
            </p>
            <p className="mt-4 max-w-4xl text-xl leading-9 text-white">
              The direction was partially right and the center of gravity was
              wrong. Event-sourced truth everywhere, Kafka as truth, a full
              data mesh, and an agent mesh do not survive the evidence. A
              governed student-timeline product, a single event-sourced
              competency ledger, events as circulation, data products with
              contracts, one thin identity-and-policy layer, and one governed
              agent gateway do. That is Architecture v2 — bolder where it
              counts, humbler where the industry already paid the tuition.
            </p>
            <Link
              href="/wgu/architecture-v2"
              className="mt-6 inline-flex h-11 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              Read Architecture v2
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-white/50">
            Evidence base: practitioner retrospectives on event sourcing and
            CQRS, post-2023 data-mesh post-mortems, streaming-vendor lakehouse
            strategy, higher-ed SIS market analyses, peer-institution
            integration case studies, OWASP agentic-AI guidance, and
            workload-identity adoption reports, researched July 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
