import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Scale } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Prior Art, Honestly — The Fabric on Trial",
  description:
    "The hard opponents examined at full strength: adaptive case management, Salesforce, ServiceNow, airline IROPS, and workflow orchestration — with honest verdicts on what is known, what is novel-in-combination, and what is genuinely new.",
  alternates: { canonical: "/wgu/prior-art" },
};

type Opponent = {
  name: string;
  steelman: string;
  departs: string;
  verdict: "KNOWN" | "NOVEL-IN-COMBINATION" | "NOVEL IN DOMAIN";
  note: string;
};

const opponents: Opponent[] = [
  {
    name: "Adaptive Case Management & CMMN",
    steelman:
      "OMG's CMMN standard (2014) formalized nearly the whole state machinery: task lifecycles, milestones, roles, discretionary runtime tasks. The ACM literature made the case — not the process — the accountable unit, with timers and escalation standard in commercial products. 'Lifecycle states with owners and escalation' is fifteen-year-old, standardized ground.",
    departs:
      "CMMN never modeled the case SUBJECT — the student appears nowhere in the metamodel. No subject-visible status, no purpose-bound access, no event envelope, and SLAs were optional modeling elements, never invariants. And CMMN died in the market (Camunda dropped it in 2019) — a warning that heavyweight case standards get rejected.",
    verdict: "KNOWN",
    note: "The fabric is partly CMMN's missing governance layer. Cite it as ancestry, and learn from its funeral.",
  },
  {
    name: "Salesforce (Flow Orchestration, Education Cloud, Agent Fabric)",
    steelman:
      "Flow Orchestration creates durable work items with assignees, statuses, and notifications; Entitlements + Milestones give real SLA clocks with escalation; Education Cloud runs advising cases with success teams; and Agent Fabric (Sept 2025) is a governance control plane for multi-vendor AI agents. Configured well, this is per-item owner + SLA + escalation — inside the Salesforce boundary.",
    departs:
      "The guarantees end at the vendor's edge, and the classic student loss happens BETWEEN SIS, LMS, aid, and CRM. Student-visible lifecycle is optional decoration, not an invariant. CRUD with field history — no replayable record. Purpose-of-access is absent from the event model. Their answer to cross-system is 'move everything into Data Cloud' — vendor capture, not vendor-neutral truth.",
    verdict: "NOVEL-IN-COMBINATION",
    note: "Owner+SLA per item is their bread and butter. Cross-system, subject-visible, replayable is not what they sell.",
  },
  {
    name: "ServiceNow (SLA engine, CSM, AI Control Tower, Action Fabric)",
    steelman:
      "The strongest single opponent. A mature, general SLA engine with pause/resume, breach clocks, staged escalation; durable case IDs with requester-visible portal status; Education Operations for universities; and in 2026, AI Control Tower governing agents across 30+ third-party systems plus Action Fabric — identity-verified, permission-scoped, fully audited agent actions. Configured well: perhaps 60–70% of the fabric.",
    departs:
      "It is a platform you configure, not an invariant — every student-affecting queue it doesn't wrap stays dark, and the SIS/LMS queues usually aren't wrapped. No event-sourced record, no hash-chained ledger, no replay-to-transcript. Purpose is not a mandatory event field. Accountability defaults to assignment groups, not a named human per item.",
    verdict: "NOVEL-IN-COMBINATION",
    note: "Their 2026 AI-governance launches erode the per-action-authorization plank badly — we no longer claim it as novel.",
  },
  {
    name: "Airline IROPS recovery",
    steelman:
      "Aviation solved 'no traveler lost between systems' decades ago: the PNR as a durable cross-system ID honored by every subsystem; reaccommodation engines that work the ENTIRE manifest — exhaustive-set processing, not best-effort; proactive passenger-facing status and options; codified prioritization policy. The proof this pattern works at massive scale.",
    departs:
      "No named accountable human owner per passenger — accountability is to the operation, not to your case. No purpose-limited access (PNR data access is notoriously promiscuous). You see status, never who owns your recovery or their deadline. The manifest invariant holds within a disruption event, not across a years-long lifecycle.",
    verdict: "KNOWN",
    note: "Cite aviation as validation of the durable-ID + exhaustive-coverage core — never claim it.",
  },
  {
    name: "Workflow orchestration (Camunda, Temporal) + CloudEvents",
    steelman:
      "The 'event-driven case management with better manners' charge, steelmanned: Camunda runs months-long cases with SLA tracking and escalating human tasks; Temporal's durable execution replays every workflow's full history — arguably a stronger 'nothing is ever lost' guarantee than the fabric specifies; CloudEvents standardizes the envelope; correlation IDs are table stakes. An engineer could build most of the fabric on this stack in a quarter.",
    departs:
      "CloudEvents has no actor, no on-behalf-of, no purpose — and no enforcement semantics for custom extensions. Temporal's history is operational plumbing, not a governed academic record. The case subject doesn't exist in these tools' models. The only mature purpose-on-the-wire precedent anywhere is healthcare: FHIR AuditEvent's purposeOfUse. Education has nothing like it.",
    verdict: "NOVEL-IN-COMBINATION",
    note: "The mechanics are known and we should say so proudly — boring, proven parts are a feature. The binding is the claim.",
  },
  {
    name: "Higher-ed platforms (Navigate360, Civitas, CLR/Blockcerts, closed-loop referrals)",
    steelman:
      "Navigate360 runs alert-to-case workflows with assigned staff at 850+ institutions and real student-facing To-Dos. Civitas measures intervention efficacy with actual statistical rigor. CLR 2.0 and Blockcerts issue verifiable, tamper-evident credentials; the Achievement Wallet gives half a million learners an owned record. Closed-loop referral networks (Unite Us, NCCARE360) already implement 'no one lost between handoffs' as a network-level guarantee in social care.",
    departs:
      "Nobody binds lifecycle state + named owner + SLA clock + student-visible status as a MANDATORY invariant on every queue item across all systems. Navigate360 has assignees but no SLA engine and sits beside the SIS, not over it. The credential systems are terminal artifacts — issued at the end — not the operational record from which the transcript is projected. Caliper events carry no purpose, no delegation, no accountability.",
    verdict: "NOVEL-IN-COMBINATION",
    note: "The strongest section for the fabric: every ingredient exists somewhere; the binding exists nowhere in this sector.",
  },
];

const survives = [
  {
    claim: "The invariant, not the features",
    text: "Making {owner, SLA clock, student-visible state, escalation} a mandatory property of every student-affecting queue item across ALL systems — vendor-neutral, above the SIS/LMS/CRM — rather than a configurable feature inside one product. Every opponent sells the parts; none makes the guarantee institutional and cross-system. A governance stance assembled from known mechanics: genuinely valuable, honestly not a new mechanism.",
    tier: "NOVEL-IN-COMBINATION",
  },
  {
    claim: "Transcript as a projection of the governed ledger",
    text: "Blockcerts and CLR issue verifiable end artifacts; Temporal replays operational history. Nobody found makes the institution's operative academic record an event-sourced, hash-chained, PII-by-reference ledger whose projections include the transcript itself. Event-sourcing practitioners will call it an obvious application; registrars will call it radical. The strongest architecture-level claim the fabric has.",
    tier: "NOVEL-IN-COMBINATION",
  },
  {
    claim: "FERPA purpose-of-use on the wire, in education",
    text: "Healthcare solved purpose-in-the-event (FHIR AuditEvent purposeOfUse, ATNA lineage); GDPR research explored it. No education event standard — Caliper, Ed-Fi, OneRoster — carries purpose, delegation, or accountability on the wire. Claimed precisely: the first transplant of healthcare's purpose-of-use discipline into the education event layer. A transplant, not an invention — and it survives scrutiny stated that way.",
    tier: "NOVEL IN DOMAIN",
  },
  {
    claim: "Error budgets on student-affecting administrative processes",
    text: "SRE's SLO/error-budget machinery is thoroughly known in engineering and unpracticed in student services — Civitas measures intervention efficacy, nobody measures process reliability with budgets that halt feature work. Novel in domain, technically trivial, rhetorically strong.",
    tier: "NOVEL IN DOMAIN",
  },
];

const conceded = [
  "Durable IDs, lifecycle states, named owners, SLA clocks, auto-escalation — ITSM/CSM/ACM, fifteen-plus years old.",
  "Actor + reason audit on record changes — field history and change management, everywhere.",
  "Event envelopes and correlation — CloudEvents; on-behalf-of delegation — OAuth token exchange.",
  "Subject-visible case status as a pattern — USCIS case tracker, airline self-service, Navigate360 To-Dos.",
  "'No one lost between handoffs' as a network guarantee — closed-loop referral systems, IROPS manifests.",
  "Per-action AI authorization with tiered, registered tools — arguably novel in 2024; commoditizing fast by mid-2026 (ServiceNow AI Control Tower + Action Fabric, Salesforce Agent Fabric, NIST agent-standards work). We no longer lead with this claim.",
];

const naming = [
  {
    risk: "“Fabric” is the most crowded suffix in enterprise software",
    detail:
      "Microsoft Fabric leads a $3B+ data-fabric market; Salesforce shipped Agent Fabric (Sept 2025); ServiceNow shipped Action Fabric (May 2026) — both incumbents this page competes against now own Fabrics in the adjacent governance space. And CaseFabric is an existing CMMN case-management platform: close in name AND domain.",
  },
  {
    risk: "“SCF” is taken in the buyer's vocabulary",
    detail:
      "The Secure Controls Framework (1,500+ controls, CMMC ecosystem) owns the acronym with exactly the compliance-minded CIO audience this work addresses. Avoid the bare acronym in external material; spell the name out.",
  },
  {
    risk: "“Continuity” primes the wrong category in higher ed",
    detail:
      "“Academic continuity” already means pandemic/disaster continuity planning to provosts. Expect first-parse confusion; the exact three-word phrase “Student Continuity Fabric” shows no existing usage or product collision, but a formal USPTO clearance search is warranted before any public circulation of the whitepaper.",
  },
];

export default function PriorArtPage() {
  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/workspace" className="group inline-flex items-center gap-3">
            <BrandLockup markClassName="h-9 w-9" textClassName="text-lg" />
          </Link>
          <Link
            href="/wgu/student-continuity-fabric"
            className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            The Fabric
          </Link>
        </nav>
      </header>

      <section className="relative isolate min-h-[700px] overflow-hidden border-b border-white/10">
        <Image
          src="/wgu/visuals/prior-art-trial.webp"
          alt="Prior-art evidence panels testing a central Student Continuity Fabric claim"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,17,0.97)_0%,rgba(10,13,17,0.78)_50%,rgba(10,13,17,0.34)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_18%,rgba(255,79,216,0.24),transparent_28rem)]" />
        <div className="mx-auto flex min-h-[700px] max-w-7xl flex-col justify-end px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--magenta)]">
              <Scale size={16} aria-hidden="true" />
              Prior art · the fabric on trial · researched July 2026
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
              Every invention claim, tested against the hardest opponents we
              could find.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              The{" "}
              <Link href="/wgu/why-novel" className="text-[var(--signal)] underline underline-offset-4">
                why-novel page
              </Link>{" "}
              differentiates against the easy opponents. This page faces the hard
              ones — at full steelman strength — and renders honest verdicts.
              The result: the fabric does NOT survive as a collection of novel
              mechanisms. It survives as a set of invariants no vendor enforces
              cross-system, one genuine domain transplant, and one contrarian
              architectural claim. That narrower claim is stronger, because it
              has already survived this page.
            </p>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-3 border border-white/15 bg-black/45 font-mono text-[0.62rem] uppercase text-[var(--muted)] backdrop-blur">
            <span className="border-r border-white/10 px-3 py-3">known parts</span>
            <span className="border-r border-white/10 px-3 py-3">novel binding</span>
            <span className="px-3 py-3">domain transplant</span>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            The six hard opponents
          </p>
          <div className="mt-6 grid gap-4">
            {opponents.map((o) => (
              <article key={o.name} className="border border-white/12 bg-white/[0.035] p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="max-w-3xl font-display text-2xl font-black leading-tight text-white">
                    {o.name}
                  </h2>
                  <span
                    className={`border px-3 py-1.5 font-mono text-xs font-bold uppercase ${
                      o.verdict === "KNOWN"
                        ? "border-[var(--magenta)] text-[var(--magenta)]"
                        : o.verdict === "NOVEL IN DOMAIN"
                          ? "border-[var(--signal)] text-[var(--signal)]"
                          : "border-[var(--amber)] text-[var(--amber)]"
                    }`}
                  >
                    {o.verdict}
                  </span>
                </div>
                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div>
                    <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                      What it genuinely does (steelman)
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--soft)]">{o.steelman}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase text-[var(--signal)]">
                      Where the fabric actually departs
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/85">{o.departs}</p>
                  </div>
                </div>
                <p className="mt-4 font-mono text-[0.72rem] uppercase leading-5 text-[var(--amber)]">
                  Note · {o.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            What survives — the honest claims
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            Four claims. Stated at exactly their earned strength.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {survives.map((s) => (
              <article key={s.claim} className="border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-black leading-tight">{s.claim}</h3>
                  <span className="font-mono text-[0.68rem] font-bold uppercase text-[var(--magenta)]">
                    {s.tier}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-black/75">{s.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]">
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              Conceded — known parts we deliberately use and no longer claim
            </p>
            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {conceded.map((c) => (
                <li key={c} className="border-l-2 border-black/15 pl-4 text-sm leading-6 text-black/70">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-black/60">
              Conceding these strengthens the pitch: the CMMN and closed-loop-referral
              prior art proves the parts work. Only the binding is missing from the
              world — and the binding is what we build.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--amber)]">
            Naming risk · checked July 2026
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            The name carries baggage. Know it before the whitepaper circulates.
          </h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {naming.map((n) => (
              <article key={n.risk} className="border border-[var(--amber)]/50 bg-white/[0.03] p-5">
                <p className="font-display text-lg font-black leading-tight text-white">{n.risk}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">{n.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 border border-[var(--signal)] bg-white/[0.03] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              The verdict, in one paragraph
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-white">
              Reviewers who know ServiceNow, Temporal, or adaptive case
              management will correctly identify seventy percent of the fabric
              as assembled from proven parts — and this page says so before
              they do. What remains is the real invention: the cross-system
              invariant no vendor enforces, the transcript as a projection of
              a governed ledger, purpose-of-use transplanted from healthcare
              into education&apos;s event layer, and error budgets on the
              processes that decide whether a student is seen. Lead with
              those. Concede the rest proudly. Boring, proven parts are how
              you ship with speed, safety, and evidence.
            </p>
            <Link
              href="/wgu/why-novel"
              className="mt-6 inline-flex h-11 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              The novelty case, post-trial
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
