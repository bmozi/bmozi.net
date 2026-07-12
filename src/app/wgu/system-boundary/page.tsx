import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Landmark } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "WGU System Boundary — Programs, Scale, and Domains",
  description:
    "The researched boundary the platform architecture must serve: schools, programs, non-degree pathways, affiliates, scale, student lifecycle, and the bounded-context map derived from them.",
  alternates: { canonical: "/wgu/system-boundary" },
};

const scale = [
  { stat: "192,613", label: "students enrolled (as of June 30, 2025)" },
  { stat: "59,358", label: "degrees conferred in FY25" },
  { stat: "390K+", label: "alumni since 1997" },
  { stat: "50", label: "states — licensure-ready teacher prep" },
  { stat: "8", label: "state affiliates with chancellors and boards" },
  { stat: "6-month", label: "flat-rate terms starting the 1st of every month" },
];

const schools = [
  {
    name: "School of Business",
    accreditation: "ACBSP · PMI-GAC (Project Management)",
    programs:
      "Bachelor's: Business Management, Healthcare Administration, HR Management, IT Management, Marketing, Project Management (2026, GAC-accredited), Supply Chain & Operations, Communications, UX Design, Accounting, Finance. Master's: MBA (incl. IT Mgmt & Healthcare tracks), Management & Leadership, Accounting, Marketing, HR Management.",
  },
  {
    name: "School of Education",
    accreditation: "CAEP · AAQEP",
    programs:
      "30+ programs: Elementary, Special Education (incl. dual licensure), Secondary Math and Science (Biology, Chemistry, Physics, Earth Science) bachelor's; MAT pathways across subjects; M.S. Curriculum & Instruction, Educational Leadership; M.Ed. EdTech & Instructional Design; ELL programs; endorsement preparation.",
  },
  {
    name: "School of Technology",
    accreditation: "ABET (CS, Cybersecurity) · NSA CAE-CD",
    programs:
      "Bachelor's: AI Engineering (2026 — first at-scale online B.S.), Computer Science, Cybersecurity & Information Assurance, Software Engineering, Cloud & Network Engineering, Data Analytics, IT. Master's: Computer Science (AI/ML), Cybersecurity, Data Analytics, Software Engineering (AI Engineering track), IT Management, IT Product Management. Accelerated B.S.+M.S. pathways.",
  },
  {
    name: "Leavitt School of Health",
    accreditation: "CCNE · CAHIIM",
    programs:
      "Bachelor's: Nursing (RN-to-BSN, Prelicensure in select states), Health Information Management, Health & Human Services, Psychology, Health Science, Public Health. Master's: MSN tracks (Education, Leadership, Informatics, FNP, PMHNP), MHA, MPH; post-master's nursing certificates.",
  },
];

const beyondDegrees = [
  {
    title: "Certificates & single courses",
    text: "Stackable, degree-aligned certificates across all four schools; single courses from ~$25–$99 that convert to degree credit; ~6,000 students completed the new Introductory Term in FY25, with 91% persisting to a second term.",
  },
  {
    title: "WGU Academy",
    text: "Separate 501(c)(3) on-ramp for college readiness. Students with the least prior academic success who complete an on-ramp show a 65% lower drop rate — the boundary of the platform starts before matriculation.",
  },
  {
    title: "WGU Labs",
    text: "Nonprofit EdTech research and incubation affiliate: accelerator investments, the College Innovation Network, and an active AI initiative. A source of experiments the platform must be able to absorb.",
  },
  {
    title: "Craft Education",
    text: "Acquired 2024: degree-aligned apprenticeships and work-based learning. 1,750 future teachers earned credit for on-the-job skills in FY25 — learning events now originate in workplaces, not just courseware.",
  },
  {
    title: "Skills infrastructure",
    text: "13,000+ Rich Skill Descriptors (stewardship moved to Credential Engine in 2025), the Open Skills Network legacy, and the Achievement Wallet (2025) giving 500K+ learners a verifiable, learner-owned record.",
  },
  {
    title: "Early-age and employer pathways",
    text: "Admission from age 14 with a completed diploma/equivalent, employer-funded cohorts, and outcome-based financing (ReNEW Fund) — funding and provenance diversity the student record must model.",
  },
];

const lifecycle = [
  {
    stage: "Discover & apply",
    text: "Application, enrollment-counselor intake, unofficial transcript review. Signals: prospect identity, prior learning, intent.",
  },
  {
    stage: "Evaluate & commit",
    text: "Official transcripts (due the 5th of the month prior), transfer evaluation, admission decision, Commit-to-Start, start date set. The classic black-hole zone the student voice complains about.",
  },
  {
    stage: "Fund",
    text: "FAFSA, Responsible Borrowing counseling, employer funding, payment by the 22nd of the month prior. Aid-status changes are first-class lifecycle events.",
  },
  {
    stage: "Onboard & start",
    text: "Required orientation, mentor assignment, term begins on the 1st. Weekly mentor cadence until On-Time Progress is established.",
  },
  {
    stage: "Learn & assess",
    text: "Competency units, not credit hours. Objective Assessments (proctored) and Performance Assessments (anonymously evaluated against rubrics). Acceleration at no extra cost within the flat-rate term.",
  },
  {
    stage: "Persist or wobble",
    text: "Momentum, pacing risk, aid friction, access reliability. The intervention window where mentors, instructors, and governed outreach either catch the student or lose them.",
  },
  {
    stage: "Graduate & carry forward",
    text: "Conferral any month of the year, regional commencements, Achievement Wallet, alumni network — the record must remain credible to employers for decades.",
  },
];

const estateSignals = [
  {
    title: "Salesforce — the engagement backbone",
    text: "A published Salesforce.org case study (the \"virtual social campus\") documents WGU on Salesforce years back, supporting the student journey enrollment-through-graduation. Current engineering job postings describe the scale of the investment: 300+ flows, 2,000+ Apex classes, serving 150K+ students, with dedicated Salesforce engineering roles.",
  },
  {
    title: "Databricks — the lakehouse",
    text: "A public Databricks customer story: 80+ TB consolidated into a Delta Lake lakehouse, overnight processing cut from 10+ hours to 3–4, explicitly positioned for \"10x growth.\"",
  },
  {
    title: "Confluent / Kafka — event-driven direction",
    text: "A posted Enterprise Architect role for event-driven architecture and Kafka ($157K–$243K) calling out Confluent certification and streaming data governance; engineer postings require Confluent Kafka, Apache Camel, and change data capture alongside AWS, Terraform, and Kubernetes.",
  },
  {
    title: "Genesys & ServiceNow — the operational edges",
    text: "Public customer stories cover the contact-center platform (Genesys) and IT service management (ServiceNow) — the channels where students experience the seams most directly.",
  },
];

const evidenceLedger = [
  {
    claim: "Institution scale",
    confidence: "High · published annual report",
    source: "WGU FY25 annual report and school one-pagers",
    href: "https://www.wgu.edu/blog/outcomes-that-endure-wgus-fy-2025-annual-report2509.html",
    note: "192,613 enrolled students, 59,358 degrees conferred, and 390K+ alumni are public FY25 figures. These are safe sizing anchors, not internal forecasts.",
  },
  {
    claim: "Salesforce estate",
    confidence: "High · live job-market signal",
    source: "WGU Salesforce engineering postings",
    href: "https://wgu.wd5.myworkdayjobs.com/en-US/External/job/Senior-Software-Engineer---Salesforce_JR-025416",
    note: "Current postings describe 300+ flows, 2,000+ Apex classes, Banner, ServiceNow, Kafka, and a large student-lifecycle Salesforce footprint. Treat as a current public signal while the posting remains live.",
  },
  {
    claim: "Lakehouse scale",
    confidence: "High · vendor customer story, older",
    source: "Databricks WGU customer story",
    href: "https://www.databricks.com/customers/western-governors-university",
    note: "The 80+ TB lakehouse and 10+ hour to 3-4 hour overnight processing improvement are public, but date from an older story. Use them to infer platform maturity, not exact 2026 capacity.",
  },
  {
    claim: "Contact-center edge",
    confidence: "High · vendor customer story",
    source: "Genesys WGU customer story",
    href: "https://www.genesys.com/customer-stories/western-governors-university",
    note: "Genesys documents WGU's Genesys Cloud platform and Salesforce integration. This supports the seam argument: the student experience crosses CRM, contact center, and service workflows.",
  },
  {
    claim: "Service-management edge",
    confidence: "High · vendor customer story",
    source: "ServiceNow WGU customer story",
    href: "https://www.servicenow.com/customers/western-governors-university.html",
    note: "ServiceNow publishes WGU metrics including 140+ custom applications, 334 service catalog items, and 5K+ knowledge articles. It is a strong operations-estate signal, not proof of every student-facing workflow.",
  },
  {
    claim: "Skills infrastructure",
    confidence: "High · standards ecosystem source",
    source: "Credential Engine / Open Skills Network",
    href: "https://credentialengine.org/resources/open-skills-and-rich-skill-descriptors-ctdl-enables-connections-and-collaboration/",
    note: "Public Credential Engine material describes WGU's skills library of 13,000+ Rich Skill Descriptors. The 2025 OSMT/RSD transition reinforces the architecture's skills-graph premise.",
  },
];

const unknowns = [
  "Current system-of-record ownership by domain: Banner appears in current job postings, but Days 1-30 must verify what is legal truth today for enrollment, records, aid, and assessment.",
  "Event volume baselines: public sizing proves the order of magnitude; real topic volume, peak shape, retention, and replay throughput must replace assumptions before production funding.",
  "Salesforce boundary health: public postings prove scale; only internal review can determine which flows are business-critical, duplicated, dead, or seam debt.",
  "Student-complaint attribution: public reviews identify failure modes; journey tracing must prove whether each failure ran through CRM, around CRM, or died between systems.",
];

const contexts = [
  {
    domain: "Enrollment & Records",
    truth: "Applications, transcripts, transfer credit, start dates, UEH-style evaluation holds, conferral — the legal student record.",
  },
  {
    domain: "Academic Programs & Competency",
    truth: "Programs, courses, competencies, Rich Skill Descriptors, assessment definitions, rubrics — the CBE semantic core the SIS market serves worst.",
  },
  {
    domain: "Learning Delivery & Assessment",
    truth: "Course activity, OA/PA attempts, evaluation results, proctoring events — the learning-event stream (Caliper-shaped).",
  },
  {
    domain: "Student Success & Mentoring",
    truth: "Mentor relationships, cadence calls, interventions, commitments made to students, momentum and persistence signals.",
  },
  {
    domain: "Financial Aid & Funding",
    truth: "FAFSA state, aid packaging, employer funding, term economics, responsible-borrowing counseling.",
  },
  {
    domain: "Support & Operations",
    truth: "Cases, owners, SLA timers, escalations — every queue with an accountable owner.",
  },
  {
    domain: "Identity, Access & Governance",
    truth: "Student and workforce identity, delegation, consent, FERPA purpose limitation, audit, policy-as-code.",
  },
  {
    domain: "Engagement, Skills & Career",
    truth: "Goals, career pathways, Achievement Wallet credentials, apprenticeship and work-based learning records, alumni relationship.",
  },
];

export default function SystemBoundaryPage() {
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
            <Landmark size={16} aria-hidden="true" />
            System boundary · researched July 2026
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black leading-[0.92] text-white">
            The whole institution the architecture must serve.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            An enterprise architecture is only as honest as its boundary. This
            is the researched map — every school, program family, affiliate,
            pathway, and lifecycle stage — that defines what &ldquo;the
            platform&rdquo; must ultimately address, and the bounded contexts
            derived from it.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3 xl:grid-cols-6">
            {scale.map((item) => (
              <div
                key={item.label}
                className="border border-white/12 bg-white/[0.035] p-4"
              >
                <p className="font-display text-3xl font-black text-[var(--signal)]">
                  {item.stat}
                </p>
                <p className="mt-2 text-xs leading-5 text-[var(--soft)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Four schools
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            The degree portfolio.
          </h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {schools.map((school) => (
              <article
                key={school.name}
                className="border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-black">
                    {school.name}
                  </h3>
                  <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                    {school.accreditation}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-black/75">
                  {school.programs}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-black/55">
            Institutionally accredited by NWCCU. Program lists reflect the
            public catalog as of July 2026 and cross-list across schools; the
            institutional catalog remains authoritative.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Evidence ledger · confidence before conviction
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                What is public, what is inferred, and what must be verified.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              The adversarial standard: every load-bearing fact gets a source
              type and a confidence level. Public evidence is enough to frame
              the architecture; it is not enough to skip discovery.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {evidenceLedger.map((item) => (
              <article
                key={item.claim}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {item.confidence}
                </p>
                <h3 className="mt-3 font-display text-xl font-black text-white">
                  {item.claim}
                </h3>
                <a
                  href={item.href}
                  className="mt-2 inline-flex font-mono text-xs text-[var(--signal)] underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.source}
                </a>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 border border-[var(--amber)]/60 bg-black/30 p-6">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              Discovery tests that can overturn this architecture
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {unknowns.map((item) => (
                <p
                  key={item}
                  className="border-l-2 border-[var(--amber)]/70 pl-4 text-sm leading-6 text-white/80"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Beyond degrees
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                The boundary is wider than matriculation.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              Every human is a student. The platform must model learners who
              arrive years before a degree program and stay decades after one.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {beyondDegrees.map((item) => (
              <article
                key={item.title}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            Student lifecycle
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Seven stages, one timeline.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {lifecycle.map((item, index) => (
              <article
                key={item.stage}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-black text-white">
                  {item.stage}
                </h3>
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
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Two systems, two truths
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
            The SIS keeps the record. The CRM keeps the relationship.
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-white/12 bg-white/[0.035] p-6">
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                A concrete way to hold the difference
              </p>
              <p className="mt-4 text-lg leading-8 text-white/90">
                When a start date was silently deleted in the complaints, that
                change happened in — or failed to sync from — the SIS-side
                world: the registrar&apos;s system, historically a heavily
                configured Ellucian Banner bent to fit competency-based
                education. When a counselor &ldquo;sent a generic scripted
                email with no follow-up,&rdquo; that interaction lived in
                Salesforce, the CRM. The fragmented-truth complaint —
                different answers every call — is precisely what happens when
                those two systems, plus aid and the LMS, don&apos;t share one
                identity and one event stream.
              </p>
              <p className="mt-4 text-lg font-semibold leading-8 text-[var(--signal)]">
                That is the seams argument in one sentence.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-[var(--amber)]/60 bg-black/30 p-5">
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  Caveat 1 · verify, don&apos;t assume
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  The Banner evidence is historical (the Christensen Institute
                  research is from years back). What runs today — and whether
                  the ground-up mandate includes the academic record itself —
                  is a Days 1–30 question. If the SIS is in scope, the records
                  workstream becomes the center of the transformation, not a
                  side workstream.
                </p>
              </div>
              <div className="border border-[var(--amber)]/60 bg-black/30 p-5">
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  Caveat 2 · vendors blur this line
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  Salesforce sells &ldquo;Education Cloud&rdquo; ambitiously,
                  but almost no institution uses Salesforce as its actual
                  system of academic record. Marketing claims about
                  &ldquo;student 360&rdquo; are not statements about legal
                  truth — the boundary in ADR-001 exists precisely because of
                  this blur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Estate signals · public record
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                The platform estate, from published sources.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              Vendor case studies and job postings sketch the estate the
              architecture must work with — and they carry a decisive
              historical fact: these tools were all in operation while the
              student complaints accumulated. The gap was never the tools; it
              was the seams between them.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {estateSignals.map((item) => (
              <article
                key={item.title}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-white/50">
            All from public vendor case studies and job postings as of July
            2026 — the full argument lives in ADR-001 and the adversarial
            review.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Derived bounded contexts
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Where systems exist and how truth is owned.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              Eight domains, each with one owner of truth. Everything in the
              architecture — events, contracts, projections, agents — respects
              these seams.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {contexts.map((item) => (
              <article
                key={item.domain}
                className="min-h-44 border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {item.domain}
                </p>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {item.truth}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-6 text-white/50">
            Public reference framing: figures and program lists come from
            WGU&apos;s published annual report, catalog, and press releases.
            This page describes a boundary for architectural reasoning, not
            WGU internal systems.
          </p>
        </div>
      </section>
    </main>
  );
}
