import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Network, ShieldCheck } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { Slice1Diagram, V2TargetDiagram } from "./diagrams";

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
      "PII lives outside the ledger by reference, keeping erasure trivial and the ledger replayable for efficacy research, accreditation audit, and what-did-we-know-when questions. This is the genuinely novel CBE asset no vendor sells — and it carries more weight than its size: a transcript is a projection of this ledger, which makes it the embryo of a possible academic-record succession (see the SIS verdict on the Ground-Up page).",
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
  {
    layer: "09 · Personalization is a decisioning loop, not a byproduct",
    rule: "The timeline, ledger, and skills graph are the substrate; an explicit decisioning layer — models, experimentation, learning-science validation — is where recommendations actually come from.",
    detail:
      "Next-best-action models read governed signals and write governed actions through the agent gateway; every intervention runs inside an experimentation framework with holdouts and guardrail metrics, validated with learning-science partners before scale. No recommendation ships that cannot name its evidence.",
  },
];

const defenseMap = [
  {
    objection: "Event sourcing collapses under schema evolution.",
    answer:
      "Only one bounded context is event-sourced — the competency ledger, with a small, domain-stable, versioned vocabulary. Every other system stays CRUD with history tables. The blast radius of event versioning is one team, not the enterprise.",
  },
  {
    objection: "Append-only violates FERPA/GDPR erasure rights.",
    answer:
      "PII never enters the ledger — it is referenced, not embedded. Erasure is a row delete in the reference store. The Timeline product is a rebuildable projection, not a record, so it simply re-projects without the erased subject.",
  },
  {
    objection: "Eventual consistency breaks student UX and agent actions.",
    answer:
      "By decree of layer 04: anything a student or agent acts on reads through to the system of record — read-your-writes. Projections carry context and history; they are never the command path.",
  },
  {
    objection: "Kafka is not a database.",
    answer:
      "Agreed — and v2 never treats it as one. The backbone is circulation: rebuildable transport. Operational truth lives in the systems of record; analytical truth lands in the lakehouse.",
  },
  {
    objection: "Data mesh fails organizationally almost everywhere.",
    answer:
      "There is no federated-governance revolution here. Data products with contracts and named owners run on one central platform; federation applies only where regulators genuinely demand separate stewardship.",
  },
  {
    objection: "You're building a shadow SIS.",
    answer:
      "The SIS remains the sole legal record. The Timeline is a projection product with lineage back to sources — there is no second truth to reconcile, because only one thing is ever truth.",
  },
  {
    objection: "Agent platforms are premature and prompt injection is unsolved.",
    answer:
      "One gateway, scoped tools, per-action authorization, human-in-the-loop on anything consequential — agents treated as injectable by default with the lethal trifecta structurally broken. The mesh is deferred until a second production agent earns it.",
  },
  {
    objection: "An identity fabric is a multi-year PKI program in disguise.",
    answer:
      "Managed workload identity instead of self-run infrastructure, one policy engine instead of two, a thin control plane with local enforcement. The fabric governs the seams and is forbidden from becoming a platform.",
  },
  {
    objection: "No peer institution runs anything like this.",
    answer:
      "Look again: sovereign SoRs + integration backbone + engagement layer + selective builds is exactly the proven mega-university skeleton. The only invention is the competency ledger — the one asset no SIS vendor sells to a competency-based university.",
  },
  {
    objection: "A history table gets you 80% of event sourcing for 5% of the cost.",
    answer:
      "Correct — which is why every system of record uses exactly that. The ledger's replay and temporal queries are the 20% CBE actually needs: efficacy research, accreditation audit, and what-did-we-know-when accountability.",
  },
  {
    objection: "Salesforce Data Cloud gives you 70% of the Student Timeline off the shelf.",
    answer:
      "Taken seriously enough to get its own decision record: a buy-vs-build ADR scores Data Cloud, full build, and a hybrid on cost, lock-in, and CBE fit — including the identity-resolution/MDM dependency the timeline quietly requires. Buy where the vendor is strong; build only the CBE core no vendor sells.",
  },
  {
    objection: "Where does the recommendation actually come from? A substrate isn't personalization.",
    answer:
      "Decision 09 and the personalization layer: an explicit decisioning loop — next-best-action models over governed signals, an experimentation framework with holdouts, learning-science validation — acting only through the governed agent gateway. The timeline feeds it; it doesn't pretend to be it.",
  },
  {
    objection: "A better CRM rollout would fix the student complaints without any of this.",
    answer:
      "History already ran that experiment: a mature, deeply invested CRM was fully in operation during the very period the complaints describe. The failures live at the seams — records workflows, aid processing, auth, cross-department handoffs — where no single tool can see. Governed lifecycle events, owner/SLA semantics, and one identity across systems are the fix a tool cannot be.",
  },
];

const postures = [
  {
    tag: "API-first",
    line: "Every capability is a contract, not a screen.",
  },
  {
    tag: "Event-driven",
    line: "Every state change is a fact, not a side effect.",
  },
  {
    tag: "AI-native",
    line: "Every contract and fact is machine-legible by design — so agents are first-class consumers, not a bolt-on.",
  },
];

const machineLegibleCriteria = [
  {
    name: "Schema-registered & versioned",
    test: "Is there a published schema in a registry, with an explicit version and a compatibility rule?",
    detail:
      "Every event and API payload is typed (JSON Schema / Avro / Protobuf) and lives in a registry. No untyped blobs, no “we'll document it later.” A consumer — human or model — can validate before it acts.",
  },
  {
    name: "Semantically named",
    test: "Do fields carry stable, documented meaning — not position, not overloaded strings?",
    detail:
      "masteryAttainedAt, not field7. Closed, documented enumerations (status is one of packaging, awarded, disbursed) — not a magic integer a model has to guess at.",
  },
  {
    name: "Self-describing & addressable",
    test: "Does the fact carry its own type, source, time, subject, and correlation/purpose ID — and can every entity be resolved by a stable URI?",
    detail:
      "A fact explains itself out of context. Interpreting it needs no tribal knowledge and no side lookup table.",
  },
  {
    name: "Grounded with lineage",
    test: "Do references resolve to a system of record, with provenance — no dangling IDs?",
    detail:
      "PII by reference, and the reference resolves. An agent can trace any claim back to its source — which is what makes its output auditable rather than merely plausible.",
  },
  {
    name: "Discoverable",
    test: "Is it in a catalog with an owner, SLA, description, and worked examples?",
    detail:
      "If an engineer or an agent cannot find it and learn to use it without asking a person, it is machine-legible only in theory.",
  },
  {
    name: "Access-scoped & auditable",
    test: "Does machine-readable authorization travel with it — who may read, who may act, what is PII?",
    detail:
      "The gateway enforces scope from metadata, not from a human reading a wiki. Every read and action is logged against a purpose ID.",
  },
  {
    name: "Deterministically actionable",
    test: "Are actions exposed as typed tools with declared inputs, preconditions, effects, and idempotency keys?",
    detail:
      "An agent can call request_missing_document safely; a human can review exactly what it did. Described without side effects, executed idempotently.",
  },
];

const legibleFact = [
  {
    field: "type",
    value: "financial_aid.status.changed · v2",
    note: "registered, versioned schema",
  },
  {
    field: "occurredAt",
    value: "2026-09-22T14:03:11Z",
    note: "the fact timestamps itself",
  },
  {
    field: "subject",
    value: "urn:wgu:student:8f2c… (resolvable)",
    note: "PII by reference; resolves to the SIS",
  },
  {
    field: "transition",
    value: "packaging → disbursed",
    note: "closed, documented enumeration",
  },
  {
    field: "source",
    value: "SIS · system of record",
    note: "lineage and provenance",
  },
  {
    field: "correlationId · purposeId",
    value: "propagated end to end",
    note: "why the data may be used",
  },
  {
    field: "scope",
    value: "read: student-self, mentor, finance-ops",
    note: "authorization travels with the fact",
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
    text: "Event-source the assessment/competency context with PII by reference. Replayable efficacy queries and accreditation-grade audit become possible. This is the invention slice — the CBE asset nobody sells — and the most strategically loaded slice on the board: the ledger began as 'the one place event sourcing pays rent' and became the seed of a possible SIS succession. A transcript is a projection of this ledger; if the ground-up mandate reaches the academic record, this slice is where the new record of mastery is born. Build it accreditation-grade from day one.",
    lps: "Create & Innovate · Integrity · Aim True · Imagine Boldly",
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
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
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
              : nine decisions, built from the ground up on documented industry
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
            <div className="mt-8 border border-[var(--amber)] bg-black/40 p-5">
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Direction: set · Adoption: sequenced
              </p>
              <p className="mt-3 max-w-4xl text-base leading-7 text-white/90">
                This is the target architecture. The Days 31–60 working sessions
                of the{" "}
                <Link
                  href="/wgu/first-90-days"
                  className="text-[var(--signal)] underline underline-offset-4"
                >
                  90-day plan
                </Link>{" "}
                exist to make the team co-owners and to refine details against
                current-state findings — not to reopen the direction. It walks
                into every room with its prosecution attached, because a
                direction that has already survived the strongest opposing case
                is how transformation is led: decisively, with receipts.
              </p>
            </div>
          </div>
          <div className="overflow-hidden border border-white/12 bg-white/[0.035] shadow-[0_30px_120px_rgba(25,214,197,0.12)]">
            <Image
              src="/wgu/visuals/architecture-system-model.webp"
              alt="Abstract technical model of sovereign systems connected by a governed event backbone and policy layer"
              width={1800}
              height={1013}
              priority
              unoptimized
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-auto w-full"
            />
            <div className="border-t border-white/10 px-4 py-3 font-mono text-[0.68rem] uppercase text-[var(--muted)]">
              Visual metaphor only. Exact architecture is rendered below as
              readable page markup.
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The engineering posture
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            How I build, in three lines.
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-[var(--soft)]">
            Read it top to bottom as a dependency chain: clean contracts and
            honest facts are what earn the third line. AI-native is a
            consequence of the first two — not a claim bolted on beside them.
          </p>
          <div className="mt-8 space-y-3">
            {postures.map((posture, index) => (
              <article
                key={posture.tag}
                className="grid gap-3 border border-white/12 bg-white/[0.035] p-6 md:grid-cols-[0.3fr_1fr] md:items-center"
              >
                <p className="inline-flex items-baseline gap-3 font-display text-2xl font-black text-white">
                  <span className="font-mono text-sm text-[var(--amber)]">
                    0{index + 1}
                  </span>
                  {posture.tag}
                </p>
                <p className="text-lg leading-7 text-[var(--soft)]">
                  {posture.line}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                The target picture
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                One diagram, every verdict visible.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              Sovereign records, circulation not truth, one event-sourced
              ledger, one flagship timeline product, one agent front door, one
              thin governing layer — the review, drawn.
            </p>
          </div>
          <div className="overflow-hidden border border-white/12 bg-white/[0.02]">
            <V2TargetDiagram />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The nine decisions
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

      <section id="machine-legible" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                The AI-native line, made concrete
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                What “machine-legible by design” actually means.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              “AI-native” is diluted to near-meaninglessness. Here it earns the
              word: seven properties every contract and event must have before
              an agent is allowed to depend on it. Miss one and the agent is
              guessing — which is how bolt-ons are born.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            {machineLegibleCriteria.map((item, index) => (
              <article
                key={item.name}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs text-white/40">
                  Criterion {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-black leading-tight text-white">
                  {item.name}
                </h3>
                <p className="mt-3 border-l-2 border-[var(--signal)] pl-4 text-sm font-semibold leading-6 text-white/90">
                  {item.test}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden border border-white/12 bg-black/40">
              <div className="border-b border-white/10 px-5 py-3">
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  One fact, drawn legibly — financial_aid.status.changed
                </p>
              </div>
              <div className="divide-y divide-white/5">
                {legibleFact.map((row) => (
                  <div
                    key={row.field}
                    className="grid gap-1 px-5 py-3 sm:grid-cols-[0.9fr_1.1fr] sm:gap-4"
                  >
                    <p className="font-mono text-xs text-[var(--signal)]">
                      {row.field}
                    </p>
                    <div>
                      <p className="font-mono text-sm text-white">
                        {row.value}
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-white/45">
                        {row.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="border border-[var(--magenta)]/30 bg-[var(--magenta)]/[0.06] p-5">
                <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                  The bolt-on version
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  A nightly CSV, or status=3 scraped off a screen. The model has
                  to guess what changed, for whom, when, and whether it may even
                  look — so a human hand-writes a bespoke integration for every
                  agent, forever. That is AI-enabled: intelligence stapled to a
                  system built for people clicking buttons.
                </p>
              </div>
              <div className="border border-[var(--signal)]/30 bg-[var(--signal)]/[0.06] p-5">
                <p className="font-mono text-xs uppercase text-[var(--signal)]">
                  Why it makes agents first-class
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  Because the fact passes all seven tests, the coach copilot can
                  read it through the gateway, explain the change to the student
                  in plain language, and — if scope allows — call the typed
                  action request_missing_document with an idempotency key and a
                  human in the loop. No new integration. Any authorized agent
                  consumes it the day it ships.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-6 text-white/50">
            That is the whole claim: agents are first-class consumers because
            the contracts and facts were legible before any agent existed. Layer
            02 and the competency ledger produce the legibility; the governed
            gateway of layer 06 enforces the scope. AI-native is simply what
            API-first and event-driven add up to.
          </p>
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

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--magenta)]">
                <ShieldCheck size={15} aria-hidden="true" />
                The defense map
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Every objection, answered by design — not by debate.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              The ten strongest critiques from the adversarial review, each
              neutralized structurally. Bring the skeptic; the architecture
              answers before I do.
            </p>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            {defenseMap.map((item, index) => (
              <article
                key={item.objection}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs text-white/40">
                  Objection {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 border-l-2 border-[var(--magenta)] pl-4 text-base font-semibold leading-7 text-white">
                  &ldquo;{item.objection}&rdquo;
                </p>
                <p className="mt-3 font-mono text-xs uppercase text-[var(--signal)]">
                  Answered by design
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="scroll-mt-20">
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
          <div className="mb-10 overflow-hidden border border-white/12 bg-white/[0.02]">
            <div className="border-b border-white/10 px-5 py-4">
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Slice 1, drawn — the lighthouse thread (Days 61–90 · Sep 18 –
                Oct 17, 2026)
              </p>
            </div>
            <Slice1Diagram />
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
