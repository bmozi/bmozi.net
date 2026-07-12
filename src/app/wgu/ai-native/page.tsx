import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BrainCircuit } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "AI-Native, Defined — The Test, the Marks, and the Readiness Checks",
  description:
    "What it actually means for this architecture to be AI-native rather than AI-bolted-on: the one-question test, the seven marks of AI-native design, descriptions as infrastructure, and per-domain readiness checks.",
  alternates: { canonical: "/wgu/ai-native" },
};

const contrasts = [
  {
    boltedOn: "A chatbot is wired to screens built for humans, scraping what it can see.",
    native: "Every capability is a registered tool with a machine-readable contract, so an agent acts the way a service does — through the front door, with permissions.",
  },
  {
    boltedOn: "The model is prompted with whatever data an integration could reach this sprint.",
    native: "Context is a governed product: one call returns what is true about this student — complete, current, permissioned, purpose-tagged.",
  },
  {
    boltedOn: "Field names like stat_cd and flag_3 force every AI project to start with archaeology.",
    native: "Every field, event, and tool carries a human-written description in the registry — the schema explains itself to machines and new engineers alike.",
  },
  {
    boltedOn: "Training data is reconstructed from backups and guesswork about what was known when.",
    native: "The ledger replays point-in-time truth — what did we know at the moment we acted — so models train without leakage and evaluations are honest.",
  },
  {
    boltedOn: "AI access is a service account with broad read rights and a prayer.",
    native: "Permissions are machine-legible: purpose, relationship, and action tier evaluated per call, so authorizing an agent is policy, not a security exception.",
  },
];

const marks = [
  {
    mark: "01 · Semantics over strings",
    what: "Events are intent-shaped facts (start_date.changed, with a reason), never CRUD noise (row_updated). Every term means one thing, registered once.",
    why: "Models — and the people who prompt them — learn from meaning. A system that says what happened in domain language is trainable, promptable, and auditable. A system that says which rows changed is none of those.",
    where: "The event catalog and naming rules in the engineering standards; the glossary as the shared semantic base.",
  },
  {
    mark: "02 · Context is a product",
    what: "The Student Timeline is machine-consumable context: an agent asks one governed question — what is true about this student — and gets a complete, current, permissioned answer.",
    why: "Grounding is the difference between an assistant and a hallucination. If assembling context requires bespoke joins across five systems, every AI feature re-does that work and re-makes its mistakes. Context-as-product does it once, governed.",
    where: "Decision 04 in v2; the timeline product and its role-scoped views.",
  },
  {
    mark: "03 · Actions are tools",
    what: "Every capability an agent might exercise is a registered, scoped, described tool with pre-conditions, post-conditions, and an action tier — before any agent exists to call it.",
    why: "Bolted-on agents automate the UI; native agents call contracts. Tool-shaped capabilities mean adding an agent is registration, not integration — and containing one is revocation, not redesign.",
    where: "The agent gateway (Decision 06) and the Tier 0–4 action registry in the trust pack.",
  },
  {
    mark: "04 · Every decision logs its evidence",
    what: "Each automated decision records its inputs, features, model version, and rationale as events — decisions become data the moment they are made.",
    why: "This is the flywheel: a system that logs evidence generates its own training, evaluation, and audit corpus as a by-product of operating. Systems that don't must buy their learning twice — once in incidents, once in retrofits.",
    where: "The decisioning service in the personalization layer; agent.action.* events in the catalog.",
  },
  {
    mark: "05 · Ground truth is replayable",
    what: "The ledger answers what did we know when — point-in-time truth, replayable to any date, with corrections as new events rather than edits.",
    why: "Temporal correctness is the unglamorous foundation of honest ML: training on today's cleaned-up record to predict yesterday's decision is leakage, and leakage is how models look brilliant in evaluation and fail students in production.",
    where: "The Competency Ledger guarantees in the engineering standards.",
  },
  {
    mark: "06 · Permissions are machine-legible",
    what: "Purpose, relationship, and tier are fields a policy engine evaluates per action — not paragraphs a human interprets per project.",
    why: "The fastest way to kill AI velocity is making every use case a bespoke security review. When FERPA is encoded as policy, authorizing a new agent action is minutes of registration inside standing rules — safety and speed stop trading off.",
    where: "The FERPA purpose taxonomy and ReBAC model in the trust pack; the envelope's actor/purpose fields.",
  },
  {
    mark: "07 · The loop closes by design",
    what: "Outcomes flow back as events; the experimentation framework attributes effects; interventions that don't move persistence are retired automatically.",
    why: "AI without a closed loop is opinion at scale. The native system measures itself: every nudge, recommendation, and escalation carries the machinery to learn whether it worked — which is also the only honest answer to 'is the AI helping?'",
    where: "Stages 03–06 of the personalization loop; outcome events in the catalog.",
  },
];

const descriptions = [
  "Every event type, field, data product, and tool in the contract registry carries a description written in plain domain language — because those descriptions are what an LLM reads when it decides which tool to call and what a field means. Documentation stopped being for humans only; it is now runtime infrastructure.",
  "Descriptions follow a discipline: what it is, when it happens or applies, what it must never be confused with. 'aid.status.changed — the student's financial-aid packaging state moved (e.g., packaged → disbursement-scheduled). Not for payment receipts; see payment.received.' That last clause is prompt engineering, done once, at the source.",
  "The glossary and the registry are one semantic system: a term defined on the glossary page is the same term the registry serves to an agent. When a registrar corrects a definition, every future AI interaction inherits the correction.",
  "Quality is enforced like code: a contract without a description fails CI. An ambiguous description found in an incident review gets fixed in the registry, not in a prompt patch — prompts inherit fixes; patches rot.",
];

const readiness = [
  {
    domain: "Enrollment & records",
    test: "Could an agent, with a counselor's delegated authority, answer 'where is this student's file and what happens next?' using only registered tools and governed context — with zero screen-scraping?",
    state: "Slice 1 makes this real for documents; the event catalog covers the lifecycle; readiness arrives with the timeline product.",
  },
  {
    domain: "Competency ledger",
    test: "Could a model train on mastery outcomes as-of any past date without leakage, and could an auditor replay any certification decision with its full evidence chain?",
    state: "Native by construction — the five guarantees exist for exactly this. The most AI-ready asset in the architecture.",
  },
  {
    domain: "Student success & mentoring",
    test: "Could a coach copilot assemble a student's full context in one governed call, cite the evidence for every suggestion, and act only through tiered tools?",
    state: "Depends on timeline + decisioning + gateway (Slices 3–4). The readiness gap is context-as-product, not model capability.",
  },
  {
    domain: "Support operations",
    test: "Could an agent triage a case knowing its full history, ownership, SLA state, and prior commitments — and escalate through a registered Tier 3 action?",
    state: "Requires lifecycle events + case ownership projections. The CRM holds the data today; the seams make it machine-consumable.",
  },
  {
    domain: "Financial aid",
    test: "Could an agent explain a student's aid status in plain language from governed context — while remaining structurally unable to touch a determination (Tier 4)?",
    state: "The explain path is near-term; the Tier 4 wall is already policy. Aid determinations stay human, forever.",
  },
  {
    domain: "Assessment & evaluation",
    test: "Could AI assist evaluators with rubric consistency while the double-blind holds, every assist is logged as evidence, and certification stays a human event?",
    state: "The access model enforces the blind; the ledger logs the assists. Assist-not-decide is the design stance.",
  },
];

export default function AiNativePage() {
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
            <BrainCircuit size={16} aria-hidden="true" />
            AI-native, defined · not a feature — a property of the design
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            AI-native has a test: could a governed agent be a first-class
            citizen here, today?
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            Bolted-on AI consumes a system through interfaces built for
            humans — scraping screens, guessing at fields, borrowing broad
            credentials. AI-native means machine reasoning was a first-class
            consumer in the original design: of the data, the contracts, the
            descriptions, and the permissions. Nothing on this page adds AI to
            the architecture. It shows that the architecture was shaped for it
            from the first event.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Bolted-on vs. native
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Five contrasts that settle the question.
          </h2>
          <div className="mt-8 grid gap-3">
            {contrasts.map((c) => (
              <article
                key={c.native}
                className="grid gap-3 border border-white/12 bg-white/[0.035] p-5 md:grid-cols-2"
              >
                <div className="border-l-2 border-[var(--magenta)] pl-4">
                  <p className="font-mono text-[0.7rem] uppercase text-[var(--magenta)]">
                    Bolted on
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
                    {c.boltedOn}
                  </p>
                </div>
                <div className="border-l-2 border-[var(--signal)] pl-4">
                  <p className="font-mono text-[0.7rem] uppercase text-[var(--signal)]">
                    AI-native
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {c.native}
                  </p>
                </div>
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
                The seven marks
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                What makes a design AI-native — and where each mark lives.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              Each mark names the property, explains why it matters, and
              points to where it is already specified in this architecture —
              because a claim without an address is marketing.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {marks.map((m) => (
              <article
                key={m.mark}
                className="border border-white/12 bg-white/[0.035] p-6"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {m.mark}
                </p>
                <p className="mt-3 text-base font-semibold leading-7 text-white">
                  {m.what}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {m.why}
                </p>
                <p className="mt-3 font-mono text-[0.7rem] uppercase leading-5 text-[var(--signal)]">
                  Lives in · {m.where}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Descriptions are infrastructure
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            The schema now explains itself — to engineers and to models.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {descriptions.map((d) => (
              <p
                key={d}
                className="border border-black/10 bg-white p-5 text-sm leading-7 text-black/75 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                {d}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Readiness, domain by domain
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                One question per domain. No credit for intentions.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              Each domain gets the same style of test: could a governed agent
              do this end to end using only registered tools and governed
              context? The honest current state sits beside each answer.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {readiness.map((r) => (
              <article
                key={r.domain}
                className="border border-white/12 bg-white/[0.035] p-6"
              >
                <p className="font-display text-xl font-black text-white">
                  {r.domain}
                </p>
                <p className="mt-3 border-l-2 border-[var(--signal)]/60 pl-4 text-sm leading-6 text-white/85">
                  {r.test}
                </p>
                <p className="mt-3 font-mono text-[0.72rem] uppercase leading-5 text-[var(--amber)]">
                  Where it stands · {r.state}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 border border-[var(--signal)] bg-white/[0.03] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              The one-sentence version
            </p>
            <p className="mt-4 max-w-4xl text-xl leading-9 text-white">
              AI-native was never about adding intelligence to the system — it
              is the property that intelligence, human or machine, can consume
              the system safely through the same governed contracts. Clean
              seams and honest facts are what make that true; the AI is a
              consequence, exactly as the engineering posture claims.
            </p>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-white/50">
            The seven marks are design review criteria: any new capability
            proposed for this architecture is scored against them, and a
            capability that fails mark 03 or 06 is not ready to ship —
            regardless of whether AI touches it yet.
          </p>
        </div>
      </section>
    </main>
  );
}
