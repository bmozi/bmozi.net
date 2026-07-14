import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";

export const metadata: Metadata = {
  title: "WGU Leadership Principles as Architecture Practice",
  description:
    "All fourteen WGU Leadership Principles translated into enterprise-architecture behavior, with the standard every plan and task in this hub is held to.",
  alternates: { canonical: "/wgu/leadership-principles" },
};

type Principle = {
  name: string;
  essence: string;
  practice: string;
  applied: string;
};

const principles: Principle[] = [
  {
    name: "Aim True",
    essence:
      "Keep the mission core to every decision; think long term; steward WGU's mission, resources, and organization; know the Key Results and own your contribution.",
    practice:
      "Every architecture decision record opens with the mission linkage and the Key Result it moves. Long-lived assets — contracts, identity, the student record — are designed for decades, not sprints.",
    applied:
      "The system-boundary page exists because of this principle: you cannot steward what you have not mapped. Roadmap items with no Key-Result linkage are cut.",
  },
  {
    name: "Student Obsessed",
    essence:
      "Every human is a student; every decision starts with them; impact is measured in lives changed, delivering the WGU promise every day.",
    practice:
      "Architecture reviews start from student failure modes, not system diagrams. Reliability at the student front door (login-success SLOs, graceful degradation) outranks internal elegance.",
    applied:
      "The Voice of the Student page maps real complaint patterns to structural answers, and drove operational lifecycle events into the platform thesis as first-class citizens.",
  },
  {
    name: "Advance Equity",
    essence:
      "Revere the inherent worth of every individual; make opportunity work for everyone; value pluralism; advance unity in diversity.",
    practice:
      "Personalization and risk models are audited for disparate impact. Accessibility, low-bandwidth paths, and device diversity are architectural requirements, not enhancements.",
    applied:
      "Governed-AI guardrails require that any student-facing model decision is explainable and appealable — no silent algorithmic gatekeeping on a pathway to opportunity.",
  },
  {
    name: "Integrity",
    essence:
      "Deliver on commitments; do what is right even when no one is watching; uncompromised integrity in all circumstances.",
    practice:
      "Immutable audit trails — who changed what, when, why, with what result — are part of the model, not an afterthought. Commitments made to students survive staff changes because they are recorded.",
    applied:
      "The adversarial review is this principle applied to my own work: the strongest case against the thesis is published next to the thesis.",
  },
  {
    name: "Sound Judgment",
    essence:
      "Make the right choices a lot: critical thinking, data-driven insight, collaborative reasoning, good instincts; own decisions and adjust effectively.",
    practice:
      "Decisions are framed as reversible or irreversible and paced accordingly. Contested bets are named, scored against evidence, and revisited on a schedule.",
    applied:
      "Architecture v2 exists because the evidence demanded adjustment: four bets were stress-tested, two were restructured, and the record of why is public in this hub.",
  },
  {
    name: "One-by-One",
    essence:
      "Solve for the individual; advance outcomes one student at a time; enable all, exclude none.",
    practice:
      "The unit of design is one student's timeline, one case with one owner, one SLA — never an aggregate dashboard that hides the individual stuck inside it.",
    applied:
      "No queue without an accountable owner is a hub-wide invariant. Projections must answer 'what is true for this student right now', not just cohort trends.",
  },
  {
    name: "Align & Commit",
    essence:
      "Consider interdependencies; synchronize with the right roles and teams; respect the decision owner; commit to and communicate decisions as your own.",
    practice:
      "Contracts and schemas are agreed at the seams before code. ADRs name the decision owner and the consulted parties. Once decided, the architecture speaks with one voice.",
    applied:
      "The v2 target deliberately aligns with the platform estate that already exists — CRM, lakehouse, streaming backbone — instead of routing around teams that own them.",
  },
  {
    name: "Earn Trust",
    essence:
      "Do your job; listen genuinely, speak directly, engage respectfully; examine your strongest convictions with humility; earn your reputation daily.",
    practice:
      "Adoption is earned, never mandated: paved roads, lighthouse slices, and measurable wins before expansion. Publishing the prosecution of my own thesis is the humility test.",
    applied:
      "The mesh-of-meshes review examines my strongest conviction — the event-sourced USO — with the strongest opposing evidence I could find, and concedes what it must.",
  },
  {
    name: "Inspire & Develop",
    essence:
      "Inspire others to do their best work; recognize contributions; everyone is a leader; expand individual and collective positive influence.",
    practice:
      "Architecture is taught, not decreed: diagrams, ADRs, event-storming sessions, and mentoring make the reasoning reproducible by others.",
    applied:
      "This hub is itself the artifact: a worked example of thesis, evidence, prosecution, and revision that any engineer can follow and challenge.",
  },
  {
    name: "Learning",
    essence:
      "Insatiably curious; invite inquiry, seek feedback, listen to understand; expect perpetual growth; benchmark against the best; learn from mistakes.",
    practice:
      "Benchmark against the best: peer institutions, industry retrospectives, and post-mortems feed every review. Being wrong in public, precisely, is the fastest way to get right.",
    applied:
      "The research behind this hub deliberately sought the failure literature — event-sourcing retrospectives, data-mesh post-mortems, agentic-AI incident reports — not just the advocacy.",
  },
  {
    name: "Imagine Boldly",
    essence:
      "Think long term and without constraint while never compromising mission and Key Results; respectfully challenge convention; push to think big.",
    practice:
      "Keep a genuine north star that is ahead of industry consensus — governed agents acting safely on one student timeline — while sequencing the path in provable slices.",
    applied:
      "The mesh-of-meshes fabric remains the bold ten-year picture. The review changed the path and the center of gravity, not the ambition.",
  },
  {
    name: "Create & Innovate",
    essence:
      "Expect fresh thinking; look for ideas everywhere; bias for the future by leveraging the best of the past and sloughing off the rest; be comfortable being first.",
    practice:
      "Invent where the domain is genuinely unserved — competency-based-education semantics, governed agent action — and adopt standards everywhere else.",
    applied:
      "v2 sloughs off the parts industry evidence killed (enterprise-wide event sourcing as truth) and keeps the genuinely novel part: a governed, replayable competency ledger.",
  },
  {
    name: "Urgency",
    essence:
      "Speed matters; decide at a pace relative to risk; respond to challenges in a timely manner; time is the scarcest resource.",
    practice:
      "Reversible decisions ship this week; irreversible ones get the full review. Lighthouse slices are scoped to prove value in one term, not one fiscal year.",
    applied:
      "The v2 roadmap's first slice is deliberately small — one seam, one policy, one measurable student outcome — so learning starts now.",
  },
  {
    name: "Deliver Results",
    essence:
      "Performance excellence; never confuse activity with outcomes; allocate effort to what matters most; continually raise the bar.",
    practice:
      "Every architecture initiative carries a student-outcome metric and an operational metric. Diagrams that never become running, measured systems are activity, not results.",
    applied:
      "Hub convention: each thesis page ends with what would prove it — the measurement that separates a result from a story.",
  },
];

export default function LeadershipPrinciplesPage() {
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
        imageSrc="/wgu/visuals/leadership-principles-hero.webp"
        imageAlt="Leadership operating principles represented as navigation points, evidence routes, and decision markers."
        accent="amber"
        minHeight="min-h-[680px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <Compass size={16} aria-hidden="true" />
            Leadership principles · architecture practice
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Fourteen principles. One standard for every plan.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            All fourteen are critical for success — none is optional. Each card
            gives the principle&apos;s essence, what it means as enterprise-
            architecture practice, and where it is already applied in this hub.
            Every task, plan, and decision record here must name the principles
            it serves.
          </p>
        </div>
      </WguImmersiveHero>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            {principles.map((p, index) => (
              <article
                key={p.name}
                className="border border-white/12 bg-white/[0.035] p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-3xl font-black leading-none text-white">
                    {p.name}
                  </h2>
                  <span className="font-mono text-xs text-white/40">
                    {String(index + 1).padStart(2, "0")} / 14
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {p.essence}
                </p>
                <p className="mt-5 font-mono text-xs uppercase text-[var(--signal)]">
                  As architecture practice
                </p>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  {p.practice}
                </p>
                <p className="mt-5 font-mono text-xs uppercase text-[var(--amber)]">
                  Applied in this hub
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
                  {p.applied}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-6 text-white/50">
            Principle essences are paraphrased from WGU&apos;s published
            Leadership Principles for personal working reference. The practice
            and application interpretations are my own.
          </p>
        </div>
      </section>
    </main>
  );
}
