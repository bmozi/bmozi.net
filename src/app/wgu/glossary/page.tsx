import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpenText } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";

export const metadata: Metadata = {
  title: "Glossary — Plain Language for the Whole Room",
  description:
    "Every load-bearing term on this site, defined in plain language: SIS, system of record, CDC, CQRS, MDM, lakehouse, competency-based education terms, and more.",
  alternates: { canonical: "/wgu/glossary" },
};

type Term = {
  term: string;
  short: string;
  plain: string;
};

const groups: { group: string; terms: Term[] }[] = [
  {
    group: "The institutional systems",
    terms: [
      {
        term: "SIS",
        short: "Student Information System",
        plain:
          "The registrar's core system — the official database of who is enrolled, in what program, with what start date, what was earned, and what the transcript says. When a court, employer, or accreditor asks 'did this person earn this degree?', the SIS answers. Vendors: Ellucian Banner, Workday Student, Anthology. It is the legal record of a student's academic existence.",
      },
      {
        term: "CRM",
        short: "Customer Relationship Management",
        plain:
          "The system that tracks every interaction with a person — calls, emails, cases, campaigns. In our design, Salesforce is the CRM and owns the relationship: who talked to this student, what was promised, which case is open.",
      },
      {
        term: "LMS",
        short: "Learning Management System",
        plain:
          "Where learning is delivered — courses, materials, activity. It knows what the student did in the courseware; it does not own the official record of what they earned.",
      },
      {
        term: "System of Record (SoR)",
        short: "The single official owner of a fact",
        plain:
          "For any piece of data, exactly one system is legally, officially true. Enrollment status: the SIS. Case history: the CRM. Everything else that displays that data is a copy or a view. The moment two systems both claim to be true, students get different answers on every call.",
      },
      {
        term: "ODS",
        short: "Operational Data Store",
        plain:
          "A read-optimized copy of data pulled from several systems so staff and apps can query one place without hammering the sources. A common way institutions build a 'student 360' view.",
      },
    ],
  },
  {
    group: "The data machinery",
    terms: [
      {
        term: "CDC",
        short: "Change Data Capture",
        plain:
          "A technique that watches a database's own change log and streams every insert/update/delete outward. It lets other systems know what changed without the source application writing any extra code.",
      },
      {
        term: "Outbox pattern",
        short: "Reliable event publishing",
        plain:
          "When a system saves a change, it also writes an 'event' row to its own database in the same transaction; a relay then publishes that event. Guarantees the event and the change always match — no lost or phantom messages.",
      },
      {
        term: "Event backbone (Kafka)",
        short: "The circulatory system",
        plain:
          "A durable pipeline that carries events (facts like 'document received', 'start date changed') between systems. In v2 it is circulation, not truth — everything on it can be rebuilt from the systems of record.",
      },
      {
        term: "Event sourcing",
        short: "Truth as a sequence of events",
        plain:
          "Instead of storing current state ('balance: $40'), store every event that ever happened ('deposited $50', 'spent $10') and derive state by replaying. Powerful for audit and history; expensive to run everywhere. v2 uses it in exactly one place: the Competency Ledger.",
      },
      {
        term: "CQRS / Projection",
        short: "Separate reading from writing",
        plain:
          "Writes go to the owning system; reads come from purpose-built views ('projections') fed by events — a student view, a mentor view, an ops view, each shaped for its reader. The Student Timeline is a projection.",
      },
      {
        term: "Read-your-writes",
        short: "You see your own change immediately",
        plain:
          "If a student submits something and the screen says 'not submitted', trust dies. Anything a student or agent acts on must read from the system that just accepted the write — projections can lag; the action path cannot.",
      },
      {
        term: "Lakehouse",
        short: "The analytical home (Databricks)",
        plain:
          "One big governed store for analytical data — history, reporting, research, AI grounding. In v2 it is the analytical system of record: the place where questions about populations and trends get answered.",
      },
      {
        term: "MDM / Identity resolution",
        short: "One person, one ID",
        plain:
          "Master Data Management: deciding that the applicant from 2024, the Academy learner from 2025, and today's degree student are the same human, and giving that human one universal ID every system shares. Without it, every 'student 360' is actually a student 120 three times.",
      },
      {
        term: "Data product",
        short: "Data treated like a product",
        plain:
          "A dataset with a named owner, a published contract (schema, freshness, quality promises), and consumers it is accountable to — instead of a table someone once made and nobody maintains.",
      },
    ],
  },
  {
    group: "The reliability language",
    terms: [
      {
        term: "SLO",
        short: "Service Level Objective",
        plain:
          "A target we set for ourselves and measure: 'logins succeed 99.9% of the time.' The error budget is how much failure the target allows; spend it and feature work stops until reliability recovers.",
      },
      {
        term: "SLA",
        short: "Service Level Agreement",
        plain:
          "A promise with consequences — often to someone else: 'every submitted document gets a status within 48 hours, or it escalates.' In this architecture, SLA timers on cases are what make 'no black holes' enforceable.",
      },
      {
        term: "RUM",
        short: "Real-User Monitoring",
        plain:
          "Measuring what actual students experience — real page loads, real login attempts — rather than what a test probe sees. Detects degradation before the complaints arrive.",
      },
      {
        term: "HITL",
        short: "Human-in-the-loop",
        plain:
          "A rule that certain actions — anything high-impact or irreversible — require a human decision. AI can recommend; a person decides. The line between the two is always visible to the student.",
      },
    ],
  },
  {
    group: "The WGU-specific terms",
    terms: [
      {
        term: "CBE",
        short: "Competency-Based Education",
        plain:
          "WGU's model: progress by demonstrating mastery, not by seat time. Finish a course as soon as you can prove the competency. This is why generic SIS data models (built around credit hours and semesters) fit WGU badly.",
      },
      {
        term: "CU",
        short: "Competency Unit",
        plain:
          "WGU's unit of academic value — the CBE equivalent of a credit hour. Minimum CUs per term defines On-Time Progress (OTP).",
      },
      {
        term: "OA / PA",
        short: "Objective / Performance Assessment",
        plain:
          "The two ways mastery is demonstrated: proctored exams (OA) and projects or papers scored against rubrics by separate evaluators (PA).",
      },
      {
        term: "UEH",
        short: "Unofficial Evaluation Hold (internal usage)",
        plain:
          "Internal shorthand from the enrollment funnel for transcript/enrollment-history evaluation work — the queue where 'black hole' complaints were born. Not a public term; used here as the students experience it: a document waiting for someone to process it.",
      },
      {
        term: "RSD",
        short: "Rich Skill Descriptor",
        plain:
          "A machine-readable definition of a skill. WGU helped build a library of 13,000+ of them — the semantic map that lets competencies, courses, and careers connect. The skills graph in the personalization layer is built from these.",
      },
      {
        term: "FERPA",
        short: "Family Educational Rights and Privacy Act",
        plain:
          "The U.S. federal law protecting student education records: who may see them, for what purpose, with what consent. The reason purpose limitation, audit trails, and per-action authorization are requirements here, not niceties.",
      },
    ],
  },
  {
    group: "The architecture practice",
    terms: [
      {
        term: "ADR",
        short: "Architecture Decision Record",
        plain:
          "A short written record of a significant decision: the context, the options considered, the choice, and its consequences — so the reasoning survives the meeting. ADR-001 on this site is the buy-vs-build decision.",
      },
      {
        term: "Seam",
        short: "Where two things meet and neither is in charge of the meeting",
        plain:
          "The load-bearing word of this whole body of work. A seam is any place two systems, teams, or parties connect — and like the stitching on a stuffed animal, it's where things fall out: nothing gets lost inside a system, it gets lost between them. Seams are necessary, not bad — they're where you cut so pieces can be owned and replaced separately. The sin is leaving them UNGOVERNED. A governed seam has four things crossing it: a shared identity (both sides agree who this person is), events (each side — and the person affected — learns what happened, structurally), an owner (a human accountable for the journey across, not just the territory on each side), and measurement of the crossing itself. The same pattern repeats at every scale: between systems, between teams, between human and AI, between claims and evidence. One question finds an ungoverned seam anywhere: where do two things meet with no owner, no shared truth, and no notification?",
      },
      {
        term: "Bounded context",
        short: "A domain with one owner of truth",
        plain:
          "A boundary inside which words mean one thing and one team owns the model. 'Enrollment & Records' and 'Financial Aid' are different bounded contexts; the seams between them are where architecture succeeds or fails.",
      },
      {
        term: "Anti-corruption layer",
        short: "A translator at the vendor seam",
        plain:
          "An adapter that translates a vendor's data model into our domain language, so vendor quirks never leak into the core. Swap the vendor, rewrite the adapter, keep the core.",
      },
      {
        term: "Strangler fig",
        short: "Replace by growing around, not ripping out",
        plain:
          "Named for the tree: the new system grows around the old one, taking over workload by workload until the old one can be retired. The cohort-based cutover on the Ground-Up page is this pattern applied to a university.",
      },
      {
        term: "Mesh of meshes",
        short: "The ten-year picture",
        plain:
          "The long-horizon thesis: service mesh (how services talk), data mesh (how data is owned), and agent mesh (how AI acts) unified by one governance and identity fabric at the seams. v2 is the evidence-tested path toward it.",
      },
    ],
  },
];

export default function GlossaryPage() {
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
        imageSrc="/wgu/visuals/glossary-hero.webp"
        imageAlt="Shared vocabulary lattice turning fragmented concepts into a common enterprise language."
        accent="signal"
        minHeight="min-h-[680px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <BookOpenText size={16} aria-hidden="true" />
            Glossary · plain language for the whole room
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            Every load-bearing term, in plain language.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            Architecture only survives if everyone understands it. Registrars
            shouldn&apos;t need to know CQRS, and engineers shouldn&apos;t need
            to guess what a competency unit is — this page is the shared
            vocabulary, written for the person who has never seen the acronym
            before.
          </p>
        </div>
      </WguImmersiveHero>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          {groups.map((g) => (
            <div key={g.group} className="mb-12">
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                {g.group}
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {g.terms.map((t) => (
                  <article
                    key={t.term}
                    className="border border-white/12 bg-white/[0.035] p-5"
                  >
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h2 className="font-display text-2xl font-black text-white">
                        {t.term}
                      </h2>
                      <p className="font-mono text-xs uppercase text-[var(--amber)]">
                        {t.short}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                      {t.plain}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
          <p className="max-w-3xl text-sm leading-6 text-white/50">
            Written to be handed to anyone — a new engineer, a registrar, a
            provost — before any architecture conversation. Inspire &amp;
            Develop, in glossary form.
          </p>
        </div>
      </section>
    </main>
  );
}
