import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageSquareWarning } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Voice of the Student — Complaints Mapped to Architecture",
  description:
    "What students told us, the failure mode behind each complaint, and the architecture component that answers it structurally.",
  alternates: { canonical: "/wgu/voice-of-the-student" },
};

type Complaint = {
  quote: string;
  failure: string;
  answer: string;
  gap: string;
};

const complaints: Complaint[] = [
  {
    quote:
      "No one has contacted me. My transcripts and financial aid just disappeared.",
    failure: "Black-hole submission",
    answer:
      "Every submission becomes a recorded lifecycle event with live status projected to the student. Financial and support streams surface aid and case state the moment they change.",
    gap: "Operational events — document received, aid status changed — must be first-class, not side effects.",
  },
  {
    quote: "My evaluation stayed unprocessed for weeks — no timeline, no updates.",
    failure: "No owner, no SLA",
    answer:
      "Visible workflow state with a risk queue and next-best-action surfacing aging work before students feel it.",
    gap: "Case-assigned and aging-breached events with an owner projection and automatic escalation.",
  },
  {
    quote:
      "My start date was removed with no explanation, and no one took responsibility.",
    failure: "Silent state change",
    answer:
      "An immutable audit trail — who, what, when, why, result — makes every change attributable, and the student is notified as part of the change itself.",
    gap: "Start-date changes modeled as audited events with built-in student notification.",
  },
  {
    quote:
      "I got a different answer every call; the counselor sent a scripted email with no follow-up.",
    failure: "Fragmented truth",
    answer:
      "One timeline projected into student, mentor, and instructor views. A conversation-thread cluster means students never re-explain across roles.",
    gap: "Commitments made to the student must persist so they survive staff changes.",
  },
  {
    quote:
      "The system crashed constantly; logging in took multiple attempts every time.",
    failure: "Fragile access",
    answer:
      "A resilient, decoupled backbone with replay and partitioned scale keeps internals healthy under load.",
    gap: "Pair with explicit login-success SLOs, real-user monitoring, and graceful degradation at the student front door.",
  },
  {
    quote: "I feel unheard and without meaningful options.",
    failure: "Reactive, not proactive",
    answer:
      "Inactivity and momentum signals feed a persistence-risk score and a governed outreach orchestrator that nudges before the cliff.",
    gap: "Publish expected timelines; alert proactively when a student is at risk of missing them.",
  },
  {
    quote:
      "The requirement feels coercive; my refund dispute went unresolved.",
    failure: "Opaque, unfair process",
    answer:
      "Governance fabric: consent, purpose limitation, human-in-the-loop on high-impact decisions, audited outcomes, and a clear line between AI recommendation and official decision.",
    gap: "Expose a trackable, transparent appeals and requirements status to the student.",
  },
  {
    quote:
      "My mentor sounds enthusiastic — I'm excited to see what I can do.",
    failure: "The bright spot to protect",
    answer:
      "Mentor views of cohort and student momentum, plus a coach copilot working from the same governed context.",
    gap: "Surface early-warning signals to mentors before a student derails.",
  },
];

export default function VoiceOfTheStudentPage() {
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
        <div className="mx-auto grid max-w-7xl gap-9 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <MessageSquareWarning size={16} aria-hidden="true" />
              Voice of the student · Student Obsessed, operationalized
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
              Almost none of the complaints are about the teaching.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              They are about the system around it: black-hole submissions,
              ownerless queues, silent state changes, fragmented answers, fragile
              login. Each pattern below is paraphrased and anonymized from public
              reviews, named as a failure mode, and answered structurally —
              because empathy that doesn&apos;t change the architecture is just
              sympathy.
            </p>
          </div>
          <figure className="overflow-hidden border border-white/12 bg-white/[0.035] shadow-[0_30px_120px_rgba(25,214,197,0.12)]">
            <Image
              src="/wgu/visuals/student-voice-continuity.webp"
              alt="Abstract fragmented student support signals converging into one accountable continuity timeline"
              width={1800}
              height={1013}
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            {complaints.map((item) => (
              <article
                key={item.failure}
                className="border border-white/12 bg-white/[0.035] p-6"
              >
                <p className="border-l-2 border-[var(--magenta)] pl-4 text-lg leading-8 text-white">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-4 font-mono text-xs uppercase text-[var(--magenta)]">
                  Failure mode · {item.failure}
                </p>
                <p className="mt-4 font-mono text-xs uppercase text-[var(--signal)]">
                  Structural answer
                </p>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  {item.answer}
                </p>
                <p className="mt-4 font-mono text-xs uppercase text-[var(--amber)]">
                  Gap / next step
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
                  {item.gap}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 border border-[var(--signal)] bg-white/[0.03] p-6">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              The 30-second version
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-white">
              The complaints are answered structurally: one governed student
              timeline projected into role-specific views, governed AI for
              next-best-action, and human-in-the-loop control on anything
              high-impact. Two things make it complete — reliable front-door
              access with SLOs, and first-class administrative events with
              accountable owners.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/50">
              Student quotes are paraphrased and anonymized from public
              reviews, used as directional evidence. Internal working
              reference. These complaints are formalized into seven design
              guardrails on the{" "}
              <Link
                href="/wgu/student-system-priorities"
                className="text-[var(--signal)] underline underline-offset-4"
              >
                Student System Priorities
              </Link>{" "}
              page, and sequenced on the{" "}
              <Link
                href="/wgu/first-90-days"
                className="text-[var(--signal)] underline underline-offset-4"
              >
                First 90 Days
              </Link>{" "}
              plan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
