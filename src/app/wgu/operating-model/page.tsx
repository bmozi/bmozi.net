import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";
import { WguMechanismDiagram } from "@/components/wgu-mechanism-diagram";

export const metadata: Metadata = {
  title: "Operating Model — Capabilities, Teams, and Risk",
  description:
    "The EA leadership pack: the business capability map, the team topology that builds and runs the platform, the decision cadence, and the living risk register.",
  alternates: { canonical: "/wgu/operating-model" },
};

const capabilities = [
  {
    tier: "Student acquisition",
    caps: "Marketing & outreach · Prospect nurture · Application intake",
    home: "CRM (Salesforce) + marketing stack",
    posture: "Buy & configure",
  },
  {
    tier: "Enrollment & records",
    caps: "Admission · Transfer evaluation · Start-date management · Registration states · Conferral · Transcripts",
    home: "SIS today → Competency Ledger projections as domains earn cutover",
    posture: "The succession candidate",
  },
  {
    tier: "Financial services",
    caps: "Aid application & packaging · Title IV compliance · Billing · Employer & outcome-based funding",
    home: "Aid/finance systems of record",
    posture: "Buy the compliance edges — never build",
  },
  {
    tier: "Learning delivery",
    caps: "Curriculum & courseware · Course activity · Learning resources",
    home: "LMS / courseware vendors",
    posture: "Buy & integrate (Caliper events out)",
  },
  {
    tier: "Assessment & credentialing",
    caps: "OA/PA delivery · Evaluation · Competency certification · CU awards · Achievement Wallet / CLR export",
    home: "Competency Ledger + assessment systems",
    posture: "Build — the differentiating core",
  },
  {
    tier: "Student success",
    caps: "Mentoring · Momentum & risk signals · Interventions · Personalization decisioning",
    home: "Timeline product + decisioning loop + CRM execution",
    posture: "Build the brain, buy the hands",
  },
  {
    tier: "Support operations",
    caps: "Cases · SLA management · Escalation · Contact center · ITSM",
    home: "CRM + Genesys + ServiceNow, fed by lifecycle events",
    posture: "Buy & govern the seams",
  },
  {
    tier: "Platform, data & AI",
    caps: "Event backbone · Contract registry · Identity spine · Lakehouse · Agent gateway · Observability",
    home: "The platform team's product",
    posture: "Build thin, run well",
  },
  {
    tier: "The decision layer",
    caps: "Experimentation with holdouts · Progressive rollout (slices, cohorts) · Dynamic configuration & action tiers · Impact measurement with paired outcome + guardrail metrics",
    home: "One named owner — the institutional learning loop, productized (spans decisioning service, backbone, lakehouse)",
    posture: "Build the loop, buy the plumbing — this is how we ship with speed, safety, and evidence",
  },
  {
    tier: "Governance & trust",
    caps: "Policy-as-code · Consent & FERPA purpose · Audit · SLOs · AI guardrails",
    home: "Identity & policy layer, enforced locally everywhere",
    posture: "Build once, enforce everywhere",
  },
];

const teams = [
  {
    type: "Stream-aligned teams — one per student-facing domain",
    text: "Enrollment & records, aid experience, success & mentoring, support ops. Each owns its bounded context end to end: the service, its events, its data product, its SLOs, its on-call. Organized around student outcomes, not systems.",
  },
  {
    type: "Platform team — the paved road as a product",
    text: "Owns the backbone, contract registry, identity spine, gateway, observability, and golden-path templates. Its customers are the other teams; its KPI is how fast a stream team ships safely without asking permission. It never owns business logic.",
  },
  {
    type: "Complicated-subsystem teams — the ledger and the decisioning loop",
    text: "Two deep-expertise teams for the two assets that demand it: the accreditation-grade Competency Ledger and the personalization decisioning service. Small, senior, measured on correctness and evidence — not feature velocity.",
  },
  {
    type: "Enabling team — architecture as a service",
    text: "The architecture guild: ADR facilitation, event-storming, contract review, threat modeling. It teaches and unblocks; it holds no gate. Review is something teams want because it makes their design better, not something they queue for.",
  },
];

const cadence = [
  "ADRs for anything hard to reverse — decision, options, consequences, owner — written in days, not quarters; the record is the meeting.",
  "Weekly design clinic: any team brings any seam problem; architecture attends every time, decides only when asked.",
  "Contract changes ride the registry workflow — review is automatic where compatibility is provable, human only where semantics change.",
  "Quarterly: roadmap re-sequencing against slice metrics and the risk register — in the open, on this site's cadence pages.",
];

const risks = [
  {
    risk: "Adoption stalls — teams route around the paved road",
    sev: "High",
    mitigation:
      "Paved road must be genuinely faster than the workaround; lighthouse wins published; no mandates before Slice 1 proves value. Owner: platform team.",
    trigger: "Two consecutive slices where a team ships off-road",
  },
  {
    risk: "Identity resolution quality misses (false merges/splits)",
    sev: "High",
    mitigation:
      "Precision/recall targets set before go-live; stewardship queue with human review on low-confidence matches; merge events auditable and reversible. Owner: data platform.",
    trigger: "Match precision below target for one month",
  },
  {
    risk: "Records cutover error — the one unforgivable failure",
    sev: "Critical",
    mitigation:
      "Registrar co-owns the workstream; dual-verification replays before any SoR transfer; audited one-way cutover per domain; rollback rehearsed. Owner: records workstream lead + registrar.",
    trigger: "Any transcript discrepancy in parallel-run verification",
  },
  {
    risk: "Consumption cost runaway (Data Cloud / streaming / LLM)",
    sev: "Medium",
    mitigation:
      "Unit-cost SLO per student per term; consumption budgets with alerts; every new use case forecast before enablement (ADR-001 rule 05). Owner: FinOps + platform.",
    trigger: "Unit cost above ceiling two consecutive terms",
  },
  {
    risk: "Ledger scope creep — everything wants to be an event-sourced context",
    sev: "Medium",
    mitigation:
      "The adversarial review is policy: one event-sourced context. Any second one requires its own prosecution and ADR. Owner: architecture.",
    trigger: "Any design doc proposing event sourcing outside the ledger",
  },
  {
    risk: "Prompt-injection incident through an agent",
    sev: "High",
    mitigation:
      "Gateway-only actuation, scoped tools, per-action authz, HITL on consequential actions, trifecta separation, red-team exercises each term. Owner: AI governance.",
    trigger: "Any agent action outside its scoped tool set — even harmless",
  },
  {
    risk: "Talent gap — streaming/policy/ledger skills are scarce",
    sev: "Medium",
    mitigation:
      "Buy managed services aggressively (ADR-001); complicated-subsystem teams kept small and senior; guild teaches the rest. Owner: engineering leadership.",
    trigger: "Key-person risk flagged on ledger or platform team",
  },
  {
    risk: "Vendor roadmap shift (SIS market consolidation, CRM pricing)",
    sev: "Medium",
    mitigation:
      "Exit-optionality engineered in: universal ID ours, contracts vendor-neutral, anti-corruption layers at every seam; ADR revisit triggers standing. Owner: architecture.",
    trigger: "Any ADR-001 revisit trigger fires",
  },
  {
    risk: "Dual-run cost fatigue during cohort drain",
    sev: "Medium",
    mitigation:
      "Decommission criteria set before each cohort expansion; legacy maintenance budgeted explicitly; drain progress reported quarterly with an end date. Owner: program leadership.",
    trigger: "Drain timeline slips two quarters",
  },
  {
    risk: "Leadership or sponsorship change mid-transformation",
    sev: "High",
    mitigation:
      "Everything on this site: the reasoning is written, public to the team, and survives any single person — including me. Slices deliver student value independently, so the program is never one budget cycle from worthless. Owner: me.",
    trigger: "Sponsor transition announced",
  },
];

export default function OperatingModelPage() {
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
        imageSrc="/wgu/visuals/operating-model-hero.webp"
        imageAlt="Operating model capability map with named ownership, decision loops, and delivery paths."
        accent="signal"
        minHeight="min-h-[680px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <Users size={16} aria-hidden="true" />
            Operating model · capabilities, teams, risk
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Architecture is an org chart with consequences.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            Conway&apos;s law is not a warning, it&apos;s a tool: design the
            teams and the seams together and the architecture builds itself
            twice as fast. This page maps the business capabilities, the team
            topology that owns them, the decision cadence that keeps them
            aligned, and the risks that get managed instead of discovered.
          </p>
        </div>
      </WguImmersiveHero>

      <WguMechanismDiagram
        eyebrow="Operating mechanism"
        title="Capability, team, cadence, and risk must move together."
        caption="The operating model is a governing loop: map the capability, assign a team home, choose the build posture, run the cadence, and keep the risk visible."
        steps={[
          { label: "Capability", detail: "Name the business function students depend on.", tone: "signal" },
          { label: "Team Home", detail: "Assign end-to-end ownership instead of shared fog.", tone: "amber" },
          { label: "Posture", detail: "Build, buy, configure, or govern the seam explicitly.", tone: "magenta" },
          { label: "Cadence", detail: "Use decision forums that match the risk level.", tone: "muted" },
          { label: "Risk", detail: "Keep the open threats visible until retired.", tone: "signal" },
        ]}
        aside="An org model is equipment when it changes flow."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The capability map
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Nine capability tiers, each with a home and a posture.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((c) => (
              <article
                key={c.tier}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-display text-xl font-black text-white">
                    {c.tier}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {c.caps}
                </p>
                <p className="mt-3 font-mono text-[0.7rem] uppercase text-[var(--amber)]">
                  Home · {c.home}
                </p>
                <p className="mt-1 font-mono text-[0.7rem] uppercase text-[var(--signal)]">
                  Posture · {c.posture}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Team topology
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            Four team types. No gates, one paved road.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {teams.map((t) => (
              <article
                key={t.type}
                className="border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <p className="font-display text-xl font-black leading-tight">
                  {t.type}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/75">
                  {t.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]">
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              Decision cadence
            </p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {cadence.map((c) => (
                <li
                  key={c}
                  className="border-l-2 border-[var(--magenta)]/50 pl-4 text-sm leading-6 text-black/75"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                The living risk register
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Ten risks, each with an owner and a tripwire.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              A risk without an owner and a trigger is a worry. These are
              reviewed at the quarterly re-sequencing and updated as reality
              reports in.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {risks.map((r) => (
              <article
                key={r.risk}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="max-w-[75%] font-display text-lg font-black leading-tight text-white">
                    {r.risk}
                  </p>
                  <span
                    className={`border px-2 py-1 font-mono text-[0.65rem] font-bold uppercase ${
                      r.sev === "Critical"
                        ? "border-[var(--magenta)] text-[var(--magenta)]"
                        : r.sev === "High"
                          ? "border-[var(--amber)] text-[var(--amber)]"
                          : "border-white/30 text-white/60"
                    }`}
                  >
                    {r.sev}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {r.mitigation}
                </p>
                <p className="mt-3 font-mono text-[0.7rem] uppercase text-[var(--magenta)]">
                  Tripwire · {r.trigger}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-6 text-white/50">
            Team names and ownership assignments are the proposal I bring to
            the Days 31–60 sessions — the topology is ratified with the people
            in it, per Align &amp; Commit.
          </p>
        </div>
      </section>
    </main>
  );
}
