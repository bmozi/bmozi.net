import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Braces } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";

export const metadata: Metadata = {
  title: "Engineering Standards — Events, Contracts, APIs, and the Ledger",
  description:
    "The concrete engineering standards behind Architecture v2: the event envelope, naming and versioning rules, the initial event catalog, contract-registry governance, API standards, and the competency-ledger data model.",
  alternates: { canonical: "/wgu/engineering-standards" },
};

const envelope = `{
  "event_id":       "uuid-v7 — time-ordered, globally unique",
  "event_type":     "records.start_date.changed",
  "event_version":  2,
  "occurred_at":    "2026-09-22T14:03:11Z  — when it happened in the domain",
  "recorded_at":    "2026-09-22T14:03:12Z  — when the platform accepted it",
  "correlation_id": "one id for the whole business journey",
  "causation_id":   "the event_id that directly caused this one",
  "purpose":        "enrollment-administration  — FERPA purpose tag",
  "actor": {
    "type":         "human | service | agent",
    "id":           "workforce or workload identity",
    "on_behalf_of": "present when delegated (agent acting for a mentor)"
  },
  "subject":        { "student_id": "universal id — never SIS/CRM record ids" },
  "payload":        { "before": "...", "after": "...", "reason": "..." },
  "pii":            "none — payloads reference, never embed, protected fields",
  "schema_ref":     "registry://records/start_date.changed/v2"
}`;

const eventRules = [
  {
    rule: "Names are domain.entity.verb — past tense, because events are facts",
    text: "records.start_date.changed, docs.document.received, aid.status.changed. Never commands (set_start_date) and never technical noise (row_updated). If the registrar wouldn't recognize the sentence, the name is wrong.",
  },
  {
    rule: "Versioning: additive is free, breaking is a new version",
    text: "New optional fields ship without ceremony; consumers must tolerate unknown fields. Renaming, retyping, or removing a field mints event_version+1, published alongside the old version for a two-term sunset. No consumer is ever broken by a producer's deploy.",
  },
  {
    rule: "Every event answers who, why, and on-whose-authority",
    text: "actor, purpose, and on_behalf_of are mandatory, not optional metadata. This is what makes 'nothing changes silently' enforceable and gives the audit trail its FERPA answer for free.",
  },
  {
    rule: "Correlation and causation ride every hop",
    text: "One correlation_id from the student's click to the last projection update — across services, topics, and agent tool calls. A stalled journey is findable in one query; a silent change is traceable to its origin in one chain.",
  },
  {
    rule: "PII by reference, everywhere — not just the ledger",
    text: "Payloads carry the universal student ID and field references, never names, addresses, or protected attributes. Erasure stays a row operation in the reference store; topics never need scrubbing.",
  },
];

const catalog = [
  {
    domain: "Enrollment & Records",
    events:
      "application.submitted · admission.decided · commit_to_start.completed · start_date.set · start_date.changed · program.changed · enrollment.status.changed · conferral.completed",
  },
  {
    domain: "Documents & Cases",
    events:
      "document.received · document.review.started · document.needs_info · document.resolved · case.opened · case.assigned · case.reassigned · case.aging.warned · case.aging.breached · case.resolved",
  },
  {
    domain: "Financial Aid & Funding",
    events:
      "aid.application.received · aid.status.changed · aid.packaged · aid.disbursement.scheduled · payment.received · funding.source.changed",
  },
  {
    domain: "Learning & Assessment",
    events:
      "course.started · activity.recorded (Caliper-aligned) · assessment.attempt.registered · assessment.submitted · assessment.evaluated · competency.mastered · cu.awarded · term.progress.evaluated",
  },
  {
    domain: "Success & Engagement",
    events:
      "mentor.assigned · mentor.checkin.completed · commitment.made · outreach.sent · momentum.score.changed · inactivity.detected · persistence_risk.changed",
  },
  {
    domain: "Access & Platform",
    events:
      "auth.login.succeeded · auth.login.failed · slo.breach.detected · notification.sent · consent.granted · consent.revoked",
  },
  {
    domain: "Agent Actions",
    events:
      "agent.action.proposed · agent.action.authorized · agent.action.executed · agent.action.blocked · agent.escalation.raised · human.approval.recorded",
  },
];

const contractRules = [
  "Every event type, API, and agent tool schema lives in one registry with an owner, a version, and consumers on record — an unregistered interface is an outage waiting for a name.",
  "Contract tests run in CI on both sides: producers prove they still emit what they promised; consumers prove they tolerate everything the contract allows.",
  "Deprecation is a process, not an email: two-term sunset, consumer checklist, and the registry blocks retirement while a registered consumer remains.",
  "Semantics live with the schema: each registered contract links its glossary terms, so 'student' and 'term' mean one thing from SIS to agent tool.",
];

const apiRules = [
  {
    rule: "Commands are synchronous; facts are asynchronous",
    text: "Anything a student or staff member does — submit, register, change — is a synchronous API against the owning system with read-your-writes semantics. What happened then flows as events. Nobody waits on a topic to know their click worked.",
  },
  {
    rule: "Idempotency everywhere writes happen",
    text: "Every command carries an idempotency key; retries are safe by construction. A double-clicked submit or a replayed message can never create two applications.",
  },
  {
    rule: "One gateway, one error model, one auth pattern",
    text: "OpenAPI-specified REST at the gateway, RFC 9457 problem+json errors, OAuth with purpose-scoped tokens. No service exposes its own bespoke door, and no consumer integrates twice.",
  },
  {
    rule: "No shared databases, ever",
    text: "The only ways in are the API and the event stream. A team reading another team's tables is the first step back to the fragmented truth the students complained about.",
  },
];

const ledgerEvents = [
  "attempt.registered — student enters an assessment window",
  "assessment.submitted — work received, hash recorded",
  "assessment.evaluated — evaluator result against rubric, anonymized evaluator id",
  "competency.mastered — the fact the institution certifies",
  "cu.awarded — competency units credited toward program",
  "progress.evaluated — OTP standing computed for the term",
  "record.amended — the only correction path: a new event citing the old, never an edit",
  "conferral.recommended — program completion asserted to the registrar",
];

const projections = [
  {
    name: "Transcript",
    text: "The projection that could one day be the official record: competencies mastered, CUs awarded, conferrals — rendered per program, replayable to any date, exportable to CLR 2.0. Built accreditation-grade from day one because the SIS-succession option depends on it.",
  },
  {
    name: "Degree audit",
    text: "Live requirements-remaining per student per program — what's mastered, what's left, what's in flight. The pacing engine and mentor views read this, not raw events.",
  },
  {
    name: "On-Time Progress",
    text: "Term-standing projection: CUs earned vs. required, trajectory, risk flags. Feeds mentor cadence rules and the decisioning loop's guardrails.",
  },
  {
    name: "Efficacy research",
    text: "De-identified, cohort-level replay for learning science and accreditation evidence: what did we know, when, what did we do, what changed.",
  },
];

const ledgerGuarantees = [
  "Append-only with hash-chaining: each event carries the hash of its predecessor — tampering is mathematically evident, which is what accreditation-grade means.",
  "Corrections are events: record.amended cites what it corrects and why. History is never rewritten; it is extended. The audit story survives any dispute.",
  "PII by reference: the ledger knows universal IDs and facts of mastery, never names. Erasure requests touch the reference store; the chain stays intact.",
  "Snapshots every N events per student for fast rebuilds; a full projection rebuild is a scheduled, tested operation — not an emergency procedure.",
  "Schema evolution is upcasting at read: old events are never migrated in place. The version-2 reader understands version-1 facts forever.",
];

export default function EngineeringStandardsPage() {
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

      <WguImmersiveHero
        imageSrc="/wgu/visuals/engineering-standards-hero.webp"
        imageAlt="Engineering standards workbench with validated interfaces, evidence checks, and deployment gates."
        accent="signal"
        minHeight="min-h-[680px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <Braces size={16} aria-hidden="true" />
            Engineering standards · where sentences become schemas
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            The paved road, specified.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            Architecture that stays in prose gets reinterpreted by every team
            that touches it. This page is the concrete layer under{" "}
            <Link
              href="/wgu/architecture-v2"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              v2
            </Link>
            : the envelope every event wears, the rules that keep contracts
            honest, the API discipline, and the data model of the asset that
            matters most — the Competency Ledger.
          </p>
        </div>
      </WguImmersiveHero>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                The event envelope
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Every event answers who, what, when, why, and on whose
                authority.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              One envelope for every domain, every producer, every consumer.
              The guardrails — nothing silent, no black holes, FERPA purpose —
              are fields, not aspirations.
            </p>
          </div>
          <pre className="overflow-x-auto border border-white/12 bg-black/50 p-6 font-mono text-[0.8rem] leading-6 text-[var(--signal)]">
            {envelope}
          </pre>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {eventRules.map((r) => (
              <article
                key={r.rule}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {r.rule}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {r.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The initial event catalog · v1
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Forty-nine events. Seven domains. One student.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {catalog.map((c) => (
              <article
                key={c.domain}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {c.domain}
                </p>
                <p className="mt-3 font-mono text-[0.78rem] leading-7 text-[var(--soft)]">
                  {c.events}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-white/50">
            Learning events align to the Caliper vocabulary where one exists;
            we invent names only where CBE has no standard. The catalog is
            versioned in the contract registry — this page is its
            human-readable mirror.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              Contract registry rules
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none">
              Contracts are governed, or they are folklore.
            </h2>
            <ul className="mt-8 space-y-3">
              {contractRules.map((r) => (
                <li
                  key={r}
                  className="border border-black/10 bg-white p-4 text-sm leading-6 text-black/80 shadow-[6px_6px_0_rgba(12,17,22,0.06)]"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              API standards
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none">
              Four rules cover ninety percent of decisions.
            </h2>
            <div className="mt-8 space-y-3">
              {apiRules.map((r) => (
                <div
                  key={r.rule}
                  className="border border-black/10 bg-white p-4 shadow-[6px_6px_0_rgba(12,17,22,0.06)]"
                >
                  <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                    {r.rule}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black/75">
                    {r.text}
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
                The Competency Ledger · data model
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Accreditation-grade from the first event.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              One aggregate per student per program. Eight event types. Four
              projections. Five guarantees. This is the embryo of the academic
              record, engineered like it.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border border-white/12 bg-white/[0.035] p-6">
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Ledger event types
              </p>
              <ul className="mt-4 space-y-2">
                {ledgerEvents.map((e) => (
                  <li
                    key={e}
                    className="border-l-2 border-[var(--signal)]/50 pl-3 font-mono text-[0.8rem] leading-6 text-[var(--soft)]"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {projections.map((p) => (
                <article
                  key={p.name}
                  className="border border-white/12 bg-white/[0.035] p-5"
                >
                  <p className="font-mono text-xs uppercase text-[var(--signal)]">
                    Projection · {p.name}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                    {p.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 border border-[var(--magenta)] bg-black/30 p-6">
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              The five guarantees
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {ledgerGuarantees.map((g) => (
                <p
                  key={g}
                  className="border border-white/10 bg-black/30 p-4 text-sm leading-6 text-[var(--soft)]"
                >
                  {g}
                </p>
              ))}
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-6 text-white/50">
            Standards are ratified through the ADR practice in the Days 31–60
            sessions and versioned thereafter — this page is the current
            proposal, written precisely enough to be disagreed with
            productively.
          </p>
        </div>
      </section>
    </main>
  );
}
