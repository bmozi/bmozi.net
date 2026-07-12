import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Beaker, Braces, LockKeyhole } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Private Implementation Memo — Student Continuity Fabric",
  description:
    "Private pre-disclosure implementation notes for the Student Continuity Fabric.",
  alternates: { canonical: "/wgu/scf-private-implementation-memo" },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
};

const coreClaims = [
  {
    title: "Continuity is a governed projection, not a dashboard.",
    text: "The fabric does not merely read operational systems and display their current state. It accepts material lifecycle events from sovereign systems, validates them against contracts, writes append-only continuity facts, and produces projections that students, staff, auditors, and agents can trust for their own purpose.",
  },
  {
    title: "Owner and SLA are first-class state, not workflow metadata.",
    text: "Every actionable lifecycle state has an ownerRef, ownerType, queueRef, slaStartedAt, threshold, escalationPolicyRef, and visibilityClass. A state without ownership is invalid for any queue that can affect a student's pathway.",
  },
  {
    title: "AI cannot act unless the event envelope can explain it.",
    text: "Agent action is authorized at the action level using actor, onBehalfOf, purpose, relationship, tool tier, action tier, evidence refs, policy version, and human approval status where required. The output of an AI action is just another governed event.",
  },
  {
    title: "The competency ledger and continuity timeline cross-reference, but do not collapse.",
    text: "The competency ledger records durable academic mastery events. The continuity timeline records operational lifecycle and trust events. They connect through correlation and student identity, but official academic truth remains protected from operational convenience.",
  },
];

const eventEnvelope = `{
  "eventId": "evt_01J...",
  "eventType": "document.status.changed",
  "schemaVersion": "2026-07-10.1",
  "occurredAt": "2026-07-10T18:21:31Z",
  "receivedAt": "2026-07-10T18:21:33Z",
  "producer": {
    "system": "records-intake",
    "boundedContext": "student-records",
    "contractVersion": "document-status-v3"
  },
  "subject": {
    "studentRef": "stu_ref_token",
    "relationshipScope": ["self", "case-owner-of"]
  },
  "actor": {
    "actorType": "human|system|agent",
    "actorRef": "staff_ref_or_agent_ref",
    "onBehalfOf": "human_ref_when_agentic"
  },
  "purpose": "enrollment-administration",
  "correlation": {
    "journeyId": "journey_transcript_eval_...",
    "caseId": "case_...",
    "causationEventId": "evt_..."
  },
  "state": {
    "from": "received",
    "to": "in_review",
    "reasonCode": "transcript_ready_for_eval",
    "studentVisible": true,
    "visibilityText": "Your transcript is being reviewed."
  },
  "ownership": {
    "ownerType": "team",
    "ownerRef": "records-evaluation",
    "queueRef": "transfer-eval-standard",
    "slaStartedAt": "2026-07-10T18:21:33Z",
    "slaDueAt": "2026-07-12T18:21:33Z",
    "escalationPolicyRef": "records-eval-tier-1"
  },
  "evidence": {
    "sourceRecordRefs": ["sis:doc:..."],
    "hash": "sha256:...",
    "piiMode": "reference-only"
  },
  "policy": {
    "decisionId": "pdp_...",
    "policyVersion": "student-continuity-2026.07",
    "allowed": true
  }
}`;

const tables = [
  {
    name: "continuity_event",
    rows: [
      "event_id pk",
      "event_type",
      "schema_version",
      "occurred_at",
      "received_at",
      "producer_system",
      "student_ref",
      "journey_id",
      "case_id",
      "actor_ref",
      "on_behalf_of",
      "purpose",
      "payload_json",
      "payload_hash",
      "prev_hash",
      "hash",
    ],
  },
  {
    name: "continuity_projection",
    rows: [
      "projection_id pk",
      "student_ref",
      "journey_type",
      "current_state",
      "student_visible_text",
      "owner_ref",
      "queue_ref",
      "sla_due_at",
      "escalation_state",
      "last_event_id",
      "last_projected_at",
    ],
  },
  {
    name: "agent_action_registry",
    rows: [
      "action_type pk",
      "tier",
      "allowed_purposes",
      "required_relationships",
      "tool_refs",
      "human_approval_required",
      "template_ref",
      "evidence_required",
      "retention_class",
    ],
  },
];

const algorithms = [
  {
    name: "Owner completeness guard",
    text: "Reject any event moving a journey into actionable states such as received, blocked, in_review, pending_student, escalated, or exception unless ownership.ownerRef, queueRef, and slaDueAt are present and resolvable.",
  },
  {
    name: "Silent-change detector",
    text: "Compare material SoR deltas against continuity events within a bounded window. A delta without a matching student-visible event becomes a silent-change incident, not a reporting discrepancy.",
  },
  {
    name: "Replay verifier",
    text: "Rebuild a projection from offset zero or from the last checkpoint, compare terminal state, owner, SLA, and visible text against the served projection, then publish the checksum. Drift blocks release.",
  },
  {
    name: "Agent action preflight",
    text: "For every tool call, evaluate human relationship, FERPA purpose, action tier, tool tier, evidence refs, prompt provenance, and output channel before the call. Approval produces its own event; denial produces its own event.",
  },
  {
    name: "Competency/continuity bridge",
    text: "Permit continuity events to reference competency-ledger events for explanation and support, but forbid operational events from mutating mastery. Academic truth changes only through ledger-approved command paths.",
  },
];

const patentableCombinations = [
  "A governed student continuity timeline that requires owner, SLA, reason, visibility, and replay metadata for material lifecycle states across sovereign higher-education systems.",
  "A split ledger design where competency mastery events and operational continuity events are separately governed but cross-reference through correlation, identity, and evidence hashes.",
  "An AI action gateway for online education that binds on-behalf-of identity, FERPA purpose, relationship-based access, action tier, tool tier, and student-visible audit into one preflight decision.",
  "A black-hole closure loop that detects unprojected system-of-record changes, generates silent-change incidents, and measures continuity debt as a student trust metric.",
  "A vendor-neutral scoring method that evaluates CRM/SIS/lakehouse/workflow stacks by continuity properties rather than platform feature inventory.",
];

const proofTests = [
  "Envelope rejects missing actor, purpose, schemaVersion, correlation, or studentRef.",
  "Actionable state rejects missing ownerRef, queueRef, or slaDueAt.",
  "Duplicate event is idempotent in the projection.",
  "Projection rebuild from events returns identical student-visible lifecycle state.",
  "Silent SoR delta without continuity event creates an incident.",
  "SLA aging emits escalation event with named owner.",
  "Agent action without onBehalfOf is denied.",
  "Tier 3 action without human approval is denied.",
  "Tampered event hash breaks chain verification.",
  "Competency ledger cannot be mutated by operational continuity event.",
  "Student view hides restricted evidence while preserving visible status.",
  "Cost model reports event, storage, replay, and support cost per student per term.",
];

export default function PrivateImplementationMemoPage() {
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
          <p className="inline-flex items-center gap-2 border border-[var(--magenta)] bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--magenta)]">
            <LockKeyhole size={16} aria-hidden="true" />
            Private easter egg · pre-disclosure memo
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Student Continuity Fabric implementation details.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            This unlinked page is for private review behind the site access
            gate. It is intentionally deeper than the public whitepaper and
            should be treated as invention-disclosure prep, not legal advice
            and not final patent language.
          </p>
          <p className="mt-5 max-w-3xl border border-white/12 bg-white/[0.035] p-5 font-mono text-xs leading-6 text-[var(--amber)]">
            Access path: /wgu/scf-private-implementation-memo. Do not link it
            from public navigation unless the IP strategy changes.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Implementation claims
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {coreClaims.map((claim) => (
              <article
                key={claim.title}
                className="border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.06)]"
              >
                <h2 className="font-display text-2xl font-black leading-tight">
                  {claim.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-black/70">
                  {claim.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--signal)]">
            <Braces size={16} aria-hidden="true" />
            Canonical envelope
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            The event has to explain the journey, the authority, and the
            student-visible consequence.
          </h2>
          <pre className="mt-8 overflow-x-auto border border-white/12 bg-black/45 p-5 text-[0.78rem] leading-6 text-[var(--soft)]">
            <code>{eventEnvelope}</code>
          </pre>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Minimal data shape
          </p>
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {tables.map((table) => (
              <article
                key={table.name}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.06)]"
              >
                <h2 className="font-mono text-sm font-bold text-[var(--magenta)]">
                  {table.name}
                </h2>
                <ul className="mt-4 space-y-2">
                  {table.rows.map((row) => (
                    <li
                      key={row}
                      className="border border-black/10 bg-black/[0.03] px-3 py-2 font-mono text-xs text-black/70"
                    >
                      {row}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Mechanisms
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl">
              The checks that make continuity enforceable.
            </h2>
          </div>
          <div className="grid gap-3">
            {algorithms.map((item) => (
              <article
                key={item.name}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <h3 className="font-display text-xl font-black text-white">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--magenta)]">
            <Beaker size={16} aria-hidden="true" />
            Possible claim combinations to review
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {patentableCombinations.map((item) => (
              <p
                key={item}
                className="border border-black/10 bg-white p-5 text-sm leading-7 text-black/75 shadow-[8px_8px_0_rgba(12,17,22,0.06)]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            Proof tests
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Tests that turn the memo into a defensible invention record.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {proofTests.map((test, index) => (
              <div
                key={test}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs text-[var(--amber)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {test}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

