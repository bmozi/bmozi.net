import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ClipboardCheck } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Student System Architecture Priorities — Seven Guardrails",
  description:
    "Voice-of-the-Student architecture priorities for the new student system: seven design guardrails, the capabilities each implies, and the test every design is held against.",
  alternates: { canonical: "/wgu/student-system-priorities" },
};

type Guardrail = {
  number: string;
  name: string;
  quote: string;
  guardrail: string;
  capabilities: string[];
  test: string;
};

const guardrails: Guardrail[] = [
  {
    number: "01",
    name: "No student record is ever a black hole",
    quote:
      "I submitted all required documentation… my file remained unprocessed for weeks with no clear timeline, no updates, and no indication it was being reviewed.",
    guardrail:
      "Every document, application, and request a student submits is tracked as a first-class object with a visible state, an owner, and an expected timeline — to both the student and the staff serving them.",
    capabilities: [
      "A document/case intake service assigning every submission a durable ID and lifecycle state (received → in review → needs info → resolved).",
      "A student-facing status view: here is what you sent, where it is, and what happens next.",
      "SLA timers on each state, with automatic escalation when a case ages past threshold.",
      "No queue without an owner — every pending item resolves to a named, accountable role.",
    ],
    test: "Can the student always see what they sent and where it is?",
  },
  {
    number: "02",
    name: "Nothing changes silently",
    quote:
      "My start date was removed from the system without explanation, and no one took responsibility for correcting the error.",
    guardrail:
      "Every material change to a student's record is attributable, reversible, and communicated. The system never mutates a student's reality without telling them who changed what, when, and why.",
    capabilities: [
      "An immutable, queryable audit trail on all student-record changes (actor, timestamp, before/after, reason).",
      "Event-driven notifications to the student on any change to enrollment status, start date, or program.",
      "Soft-delete and restore semantics — no hard deletion of student-facing state without an audited, reversible path.",
      "Clear system-of-record ownership per data domain so changes cannot originate from ambiguous sources.",
    ],
    test: "If the record changed, does the student know who, what, and why?",
  },
  {
    number: "03",
    name: "Handoffs never drop the student",
    quote:
      "I was supposed to start in May, but now it's June and no one has contacted me. I've emailed several departments with no response.",
    guardrail:
      "Enrollment, financial aid, and the registrar are one orchestrated journey, not a relay of disconnected inboxes. Every step has an owner, and the process cannot silently stall.",
    capabilities: [
      "A workflow-orchestration layer spanning enrollment, financial aid, and records — with explicit ownership at each stage.",
      "Automatic reassignment and escalation when a stage stalls or a counselor is unresponsive.",
      "Journey-level status the student can see end to end, not siloed per department.",
      "Instrumentation on stuck cases so leadership sees stalls as they form, not after a review is posted.",
    ],
    test: "Does every step have an owner and an escalation if it stalls?",
  },
  {
    number: "04",
    name: "One student, one truth",
    quote:
      "Support gave me a different answer each call… the counselor was dismissive and sent only a generic, scripted email with no follow-up.",
    guardrail:
      "Staff and students look at the same real-time, complete picture of the student. Continuity of context is a system responsibility, not something a student has to re-explain on every call.",
    capabilities: [
      "A unified student profile (360° view) aggregating enrollment, documents, aid, academic, and interaction history.",
      "Case-management continuity so any staff member picks up with full context and prior commitments visible.",
      "Integration over duplication — departments read from shared sources of truth rather than divergent copies.",
      "A record of commitments made to the student that survives staff changes.",
    ],
    test: "Do staff and student see the same complete picture?",
  },
  {
    number: "05",
    name: "The system stays up and lets students in",
    quote:
      "The system crashed constantly, logging in took multiple attempts every time, and I was calling IT every other day.",
    guardrail:
      "Reliable access is a feature, not an afterthought. Availability, resilient authentication, and observability are designed in and measured against explicit targets.",
    capabilities: [
      "Resilient authentication / SSO with graceful retry and clear error handling — login is not a daily obstacle.",
      "Defined availability and latency SLOs with error budgets for the student-facing surfaces.",
      "Proactive observability (real-user monitoring, alerting) detecting degradation before students report it.",
      "Graceful degradation — a partial outage never blocks a student from the one thing they came to do.",
    ],
    test: "Can the student always get in and do the one thing they came for?",
  },
  {
    number: "06",
    name: "Proactive over reactive",
    quote:
      "I feel unheard and without meaningful options… my concerns have repeatedly gone unresolved.",
    guardrail:
      "The system reaches out before the student has to chase. Transparency about what's happening and when is designed into every workflow, not delivered only when a student escalates.",
    capabilities: [
      "Event-driven, plain-language notifications at each meaningful step: we received it, we're reviewing it, we need one thing.",
      "Published expected timelines per process, with proactive alerts when we're at risk of missing them.",
      "A transparent, trackable path for disputes, appeals, and requirements so process never feels arbitrary.",
      "Escalation routes that are visible and real — a student always has a next step that leads to a human.",
    ],
    test: "Does the system reach out before the student has to chase?",
  },
  {
    number: "07",
    name: "Preserve and amplify what already works",
    quote:
      "My mentor sounds enthusiastic, and I'm excited to see what I can do.",
    guardrail:
      "The mentor relationship is WGU's signature strength. The system should make mentors more effective, not bury them in administrative gaps the platform should have handled.",
    capabilities: [
      "Mentor tooling with the same 360° student context, so mentors coach instead of chasing paperwork.",
      "Early-warning signals — stalled enrollment, unprocessed docs, access failures — surfaced to the mentor before they derail a student.",
      "Automation of the administrative friction so the human relationship stays the focus.",
    ],
    test: "Does this make the human relationship stronger, not busier?",
  },
];

const failureModes = [
  {
    name: "Black-hole submissions",
    text: "Transcripts, financial aid, and enrollment-history documents submitted and then invisible — no status, no timeline.",
  },
  {
    name: "Silent state changes",
    text: "Start dates and program selections removed or altered with no notification, no audit trail, no one accountable.",
  },
  {
    name: "Dropped handoffs",
    text: "Students enroll and then simply stop hearing from anyone; the process has no owner and no dead-man's-switch.",
  },
  {
    name: "Fragmented truth",
    text: "Different staff give different answers to the same question, because no one sees the same complete picture.",
  },
  {
    name: "Fragile access",
    text: "The platform crashes and logins fail repeatedly, blocking students from work they are otherwise ready to do.",
  },
];

export default function StudentSystemPrioritiesPage() {
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
            <ClipboardCheck size={16} aria-hidden="true" />
            Architecture priorities · the new student system
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Seven guardrails for building from the ground up.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            We are building the student system from the ground up — a rare
            privilege that carries an obligation: build for the person on the
            other end of the screen, often working full time and raising a
            family. These priorities start from their words. Each guardrail is
            a line we hold; each capability is what we actually build; each
            test is the question every design must answer.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            The pattern beneath the reviews
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Five failure modes. All architecture problems wearing a
            customer-service costume.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {failureModes.map((item) => (
              <article
                key={item.name}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                  {item.name}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-5">
            {guardrails.map((g) => (
              <article
                key={g.number}
                className="border border-white/12 bg-white/[0.035] p-6 sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
                  <div>
                    <p className="font-mono text-xs text-white/40">
                      Principle {g.number}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black leading-tight text-white">
                      {g.name}
                    </h2>
                    <p className="mt-5 border-l-2 border-[var(--magenta)] pl-4 text-base leading-7 text-[var(--soft)]">
                      &ldquo;{g.quote}&rdquo;
                    </p>
                    <p className="mt-5 font-mono text-xs uppercase text-[var(--signal)]">
                      Design guardrail
                    </p>
                    <p className="mt-2 text-base leading-7 text-white/90">
                      {g.guardrail}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-mono text-xs uppercase text-[var(--amber)]">
                      Capabilities this implies
                    </p>
                    <ul className="mt-3 space-y-2">
                      {g.capabilities.map((c) => (
                        <li
                          key={c}
                          className="border border-white/10 bg-black/30 p-3 text-sm leading-6 text-[var(--soft)]"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 border border-[var(--signal)]/60 bg-black/30 p-4">
                      <p className="font-mono text-xs uppercase text-[var(--signal)]">
                        The test
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white">
                        {g.test}
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
            From principles to target state
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            Six of seven guardrails already have a home in the student
            timeline.
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]">
              <p className="text-lg leading-8">
                These principles point to a concrete target: one governed
                student timeline projected into role-specific views — student,
                mentor, instructor, operations — with an immutable audit trail
                and governed next-best-action. One truth, nothing silent, no
                black holes, no dropped handoffs, amplified mentors, and fair
                transparent process all land naturally in that model.
              </p>
              <p className="mt-4 text-base leading-7 text-black/70">
                Two gaps had to be closed for it to answer the reviews end to
                end: front-door reliability (login-success SLOs and real-user
                monitoring, because event internals don&apos;t fix auth UX) and
                first-class operational events — document received, case
                assigned, aging breached, start date changed, aid status
                changed — with owner projections and SLA-driven escalation.
              </p>
            </div>
            <div className="flex flex-col justify-between gap-4 border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]">
              <p className="text-base leading-7 text-black/75">
                The original USO thesis, its adversarial prosecution, and the
                revised v2 target — where the timeline survives as the flagship
                governed data product with read-your-writes on anything a
                student acts on — are kept honest side by side.
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/wgu/adversarial-review"
                  className="inline-flex items-center gap-2 font-mono text-sm text-[var(--magenta)] underline underline-offset-4"
                >
                  Adversarial review
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <Link
                  href="/wgu/architecture-v2"
                  className="inline-flex items-center gap-2 font-mono text-sm text-[var(--magenta)] underline underline-offset-4"
                >
                  Architecture v2
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <Link
                  href="/wgu/first-90-days"
                  className="inline-flex items-center gap-2 font-mono text-sm text-[var(--magenta)] underline underline-offset-4"
                >
                  The first 90 days — scheduled plan
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="border border-[var(--signal)] bg-white/[0.03] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              The standard
            </p>
            <p className="mt-4 max-w-4xl text-xl leading-9 text-white">
              Students rarely complain about the teaching or the value of the
              degree — they complain about the system around it. Those aren&apos;t
              customer-service problems. They&apos;re architecture problems, and we
              get the rare chance to build the system that makes those stories
              obsolete. The standard is not &ldquo;is this elegant&rdquo; but
              &ldquo;does this serve the student on the other end of it.&rdquo;
            </p>
            <p className="mt-4 text-sm leading-6 text-white/50">
              Student quotes are paraphrased and anonymized from public
              reviews — directional evidence of systemic pain, not verified
              individual claims. Internal working reference.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
