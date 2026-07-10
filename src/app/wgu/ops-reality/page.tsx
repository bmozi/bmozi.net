import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Siren } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "The Ops Reality Pack — Runbooks, Acceptance Criteria, Threat Model",
  description:
    "Designing for failure: five runbooks for the ways this architecture breaks, the Slice-1 definition of done with its demo script, and the agent-gateway threat model.",
  alternates: { canonical: "/wgu/ops-reality" },
};

const runbooks = [
  {
    name: "Poison message on the backbone",
    symptom: "A consumer group stalls or crash-loops on one event; projection lag SLO burns.",
    steps:
      "Quarantine, don't discard: after N failed deliveries the event routes to a dead-letter topic with full envelope intact. The consumer resumes on the next offset — one bad event never stops the student's timeline. DLT triage is a named on-call duty; every quarantined event gets a disposition (fix + replay, or documented drop) within one business day.",
    principle: "One bad fact must never black-hole everyone else's facts.",
  },
  {
    name: "Projection rebuild",
    symptom: "Timeline corruption, bad deploy of projection logic, or schema upgrade requiring reprocessing.",
    steps:
      "Projections are disposable by design: stand up the new projection version beside the old, replay from offset zero (~minutes at current scale — see the scale math), verify counts and spot-checks against the SoR, then cut reads over atomically and retire the old version. Never rebuild in place; never serve a half-rebuilt view. The reference implementation demonstrates rebuildFrom as a one-liner.",
    principle: "A view you can't rebuild is a system of record you didn't mean to create.",
  },
  {
    name: "Identity mis-merge",
    symptom: "Two students' records resolved into one universal ID (false merge) or one student split across two (false split).",
    steps:
      "Halt propagation first: freeze the affected ID(s) from new event association. Merge/split events are themselves audited events, so the resolution history replays exactly — un-merge by reversing the merge event and re-keying affected events by correlation. Every downstream projection rebuilds for the affected IDs only. Registrar review is mandatory before closure because record integrity is a Tier-Critical concern (see the risk register).",
    principle: "Identity operations are events too — reversible because they are recorded.",
  },
  {
    name: "Backbone outage",
    symptom: "The event transport is down or degraded; outboxes grow; projections go stale.",
    steps:
      "Nothing student-critical breaks: commands still hit systems of record synchronously (read-your-writes never depended on the backbone). Outboxes buffer durably at the source — that is the point of the outbox. On recovery, relays drain in order and projections catch up; staleness banners show on timeline views past the lag SLO so nobody quietly trusts old context. Post-incident: burn-rate review against the projection-lag error budget.",
    principle: "Degradation is designed: the command path survives, context labels its own staleness.",
  },
  {
    name: "SLA timer failure",
    symptom: "The escalation sweep itself fails — the watcher stops watching.",
    steps:
      "The timer is monitored by a second, independent heartbeat check (who watches the watchman is a solved problem: something else does). A missed sweep beyond one interval pages on-call at the same severity as a student-facing outage, because per the trust pack a missed escalation IS a student-facing failure. Recovery replays the sweep across the full window — SLA breaches are computed from receivedAt, so late detection still escalates everything it should have.",
    principle: "The guardrail that guards the guardrails gets the same SLO as the front door.",
  },
];

const acceptance = [
  "A student-visible status appears within 60 seconds of document receipt (P95), measured by RUM on the status view — not by a synthetic probe.",
  "Every status change carries actor, reason, and before/after in the audit trail; a reasonless mutation is rejected at the API, demonstrated live.",
  "Kill a projection instance mid-demo; the status view rebuilds from the backbone and returns identical content — shown, not asserted.",
  "Deliver a duplicate event on purpose; the timeline shows exactly one entry (idempotency proven in front of the audience).",
  "Age a test document past its SLA in a compressed clock; the escalation event fires with a named owner and appears on the student's timeline.",
  "The black-hole rate for the covered document class reads 0% on the metrics dashboard for the pilot cohort across one full month.",
  "One enrollment counselor and one student (or proxy) confirm in writing that the status view answers 'what did I send and where is it' without a phone call.",
];

const demoScript = [
  "Minute 0–2 · The complaint: read one anonymized black-hole review aloud. State the claim: this class of story becomes impossible.",
  "Minute 2–5 · Submit a transcript live; the status view shows received, owner, and expected timeline before the audience finishes reading it.",
  "Minute 5–8 · Change its status without a reason — watch the system refuse. Change it with a reason — watch the student's view and the audit trail update together.",
  "Minute 8–10 · Fast-forward the demo clock past the SLA; the escalation lands on a supervisor's queue with the full context. Close: 'no owner, no silence, no black hole — and every step you just watched is an auditable event.'",
];

const threats = [
  {
    threat: "Prompt injection via student content",
    vector: "Essay, discussion post, or email containing instructions aimed at an agent that reads it.",
    control:
      "Tier registry caps blast radius: content-reading agents hold Tier 0–1 tools only; the lethal trifecta is separated so the same context never holds private data + untrusted input + an exfiltration path. Injection success is assumed; containment is measured in red-team exercises each term.",
  },
  {
    threat: "Confused deputy — agent exceeds its human's authority",
    vector: "An agent with service-level credentials acts beyond what the requesting mentor could do.",
    control:
      "Delegation is structural: agents cannot emit events without on_behalf_of (the envelope rejects them — see the reference implementation test), and per-action policy evaluates the human's relationship and purpose, not the agent's identity. The agent inherits limits, not just authority.",
  },
  {
    threat: "Tool-scope creep",
    vector: "A convenient 'temporary' broad tool grant that outlives its justification.",
    control:
      "Tools are registered with tiers and owners; unregistered tools cannot be called; quarterly access recertification diffs actual grants against registered need. The risk-register tripwire: any agent action outside its scoped tool set — even harmless — is an incident.",
  },
  {
    threat: "Context exfiltration through legitimate channels",
    vector: "An injected agent summarizes sensitive context into an outbound message it is allowed to send.",
    control:
      "Outbound tools (notifications, messages) are template-constrained at Tier 2 — free-text generation to external channels requires Tier 3 human approval. The template boundary turns 'send anything' into 'fill in these fields.'",
  },
  {
    threat: "Poisoned context — attacking the projection, not the agent",
    vector: "Manipulating upstream data so every agent reasons from corrupted context.",
    control:
      "Context provenance: timeline entries carry their source events, so any suspicious context traces to an auditable origin in one query. Write paths into projections accept only enveloped, validated events from registered producers — there is no side door to season the context.",
  },
  {
    threat: "Audit-trail tampering",
    vector: "Covering tracks after misuse by editing history.",
    control:
      "The ledger's hash chain makes tampering mathematically evident (run the verify() test yourself); operational audit logs are append-only with retention locks. The reference implementation demonstrates detection in its final test.",
  },
];

export default function OpsRealityPage() {
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
            <Siren size={16} aria-hidden="true" />
            The ops reality pack · designing for the bad day
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Every architecture works on the whiteboard. This is the bad-day
            page.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            Senior work is failure design: what breaks, what the blast radius
            is, and what the named procedure does about it. Five runbooks, the
            Slice-1 definition of done with its ten-minute demo script, and
            the threat model for the agent gateway — each tied back to a
            mechanism that already exists in the{" "}
            <Link
              href="/wgu/engineering-standards"
              className="text-[var(--signal)] underline underline-offset-4"
            >
              standards
            </Link>{" "}
            or runs in the reference implementation.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The five runbooks
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            How it breaks, and what we do.
          </h2>
          <div className="mt-8 grid gap-4">
            {runbooks.map((r) => (
              <article
                key={r.name}
                className="grid gap-4 border border-white/12 bg-white/[0.035] p-6 lg:grid-cols-[0.35fr_1fr]"
              >
                <div>
                  <p className="font-display text-xl font-black leading-tight text-white">
                    {r.name}
                  </p>
                  <p className="mt-2 font-mono text-[0.72rem] uppercase leading-5 text-[var(--magenta)]">
                    Symptom · {r.symptom}
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-[var(--soft)]">
                    {r.steps}
                  </p>
                  <p className="mt-3 font-mono text-[0.72rem] uppercase text-[var(--signal)]">
                    Principle · {r.principle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              Slice 1 · definition of done
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none">
              Seven exit criteria. No partial credit.
            </h2>
            <ul className="mt-8 space-y-3">
              {acceptance.map((a, i) => (
                <li
                  key={a}
                  className="flex gap-3 border border-black/10 bg-white p-4 text-sm leading-6 text-black/80 shadow-[6px_6px_0_rgba(12,17,22,0.06)]"
                >
                  <span className="font-mono text-xs font-bold text-[var(--magenta)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              The ten-minute demo script
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none">
              Show, don&apos;t assert.
            </h2>
            <div className="mt-8 space-y-3">
              {demoScript.map((d) => (
                <p
                  key={d}
                  className="border border-black/10 bg-white p-4 text-sm leading-7 text-black/80 shadow-[6px_6px_0_rgba(12,17,22,0.06)]"
                >
                  {d}
                </p>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-black/55">
              The runnable version of this script exists today: the reference
              implementation&apos;s demo walks the same story end to end, with
              nine passing tests behind it.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The gateway threat model
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Six threats, six standing controls.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {threats.map((t) => (
              <article
                key={t.threat}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-display text-lg font-black leading-tight text-white">
                  {t.threat}
                </p>
                <p className="mt-2 font-mono text-[0.72rem] uppercase leading-5 text-[var(--magenta)]">
                  Vector · {t.vector}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {t.control}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-6 text-white/50">
            Runbooks are exercised, not archived: each gets a game-day
            rehearsal before its component reaches a student-facing cohort,
            and every real incident feeds its runbook back — the postmortem
            edits this page.
          </p>
        </div>
      </section>
    </main>
  );
}
