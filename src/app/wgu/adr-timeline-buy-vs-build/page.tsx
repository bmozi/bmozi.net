import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileCheck2 } from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguImmersiveHero } from "@/components/wgu-immersive-hero";

export const metadata: Metadata = {
  title: "ADR-001: Student Timeline — Buy, Build, or Hybrid",
  description:
    "Architecture decision record: Salesforce Data Cloud vs full build vs hybrid for the Student Timeline product — with the identity-resolution/MDM design and the Salesforce operating playbook.",
  alternates: { canonical: "/wgu/adr-timeline-buy-vs-build" },
};

const options = [
  {
    name: "Option A · Buy — Salesforce Education Cloud + Data Cloud end-to-end",
    rows: [
      ["Complexity", "Low-to-medium — configuration over construction"],
      ["Cost", "High and consumption-based; per-student economics at ~190k scale need hard caps"],
      ["Lock-in", "Severe — journey, identity, and decisioning all inside one vendor"],
      ["CBE fit", "Weak at the core — no vendor model for competency mastery, evaluator workflow, or ledger replay"],
      ["Time-to-value", "Fastest for engagement views; slowest for CBE semantics"],
    ],
    pros: "Vendor-supported student 360, native identity resolution, fastest engagement wins, proven peer pattern (mega-university CRM layers).",
    cons: "CBE core doesn't exist off the shelf; consumption pricing compounds with event volume; academic truth inside a vendor wall surrenders the differentiating asset; Agentforce governance would sit outside our policy regime.",
  },
  {
    name: "Option B · Build — full custom timeline on streaming + lakehouse",
    rows: [
      ["Complexity", "High — identity resolution, consent, and engagement UX all become our code"],
      ["Cost", "High in engineering-years; low in licenses"],
      ["Lock-in", "None to vendors; total to our own backlog"],
      ["CBE fit", "Perfect — we model exactly what competency-based education needs"],
      ["Time-to-value", "Slowest — rebuilding what Salesforce already does well before touching what it doesn't"],
    ],
    pros: "Full control, vendor-neutral truth, no per-student license drag on the differentiating asset.",
    cons: "Re-implements identity resolution, case management, and engagement tooling the estate already owns and staff already use — the classic build trap the adversarial review warned against.",
  },
  {
    name: "Option C · Hybrid — buy the engagement layer, build the CBE core  ★ DECIDED",
    rows: [
      ["Complexity", "Medium — one integration contract between two well-understood halves"],
      ["Cost", "Balanced — licenses where the vendor is strong, engineers where we are"],
      ["Lock-in", "Contained — academic truth stays vendor-neutral; engagement is swappable in principle"],
      ["CBE fit", "Strong — ledger and timeline model CBE exactly; Salesforce never has to"],
      ["Time-to-value", "Fast on both fronts — engagement wins now, ledger slice in one term"],
    ],
    pros: "Leverages the existing estate (Salesforce journey backbone, Databricks lakehouse, Kafka) instead of fighting it; each side does what it is best at; exit-optionality preserved where it matters.",
    cons: "Demands real integration discipline — the contract between the halves is the architecture; weak governance here recreates fragmented truth.",
  },
];

const mdm = [
  {
    title: "Data Cloud identity resolution is the MDM backbone",
    text: "Person resolution — matching the applicant, the Academy learner, the Craft apprentice, and the returning alumnus into one person — is Data Cloud's core strength and our build trap. We buy it. Resolution rules are configuration, match/merge events are audited, and stewardship queues own the ambiguous cases.",
  },
  {
    title: "One universal student ID, published as a governed product",
    text: "The resolved identity is published as a cross-reference data product on the backbone: every system of record, the ledger, the timeline, and the lakehouse key on it. Salesforce owns resolution; it does not own the ID's distribution — that belongs to the platform, so no consumer integrates with Salesforce just to know who a student is.",
  },
  {
    title: "Academic truth never depends on CRM identity internals",
    text: "The Competency Ledger references the universal ID, not Salesforce record IDs. If resolution moves vendors in 2030, the ledger and timeline re-key without rewriting history — exit-optionality engineered in from day one.",
  },
];

const playbook = [
  {
    rule: "01 · Salesforce is the engagement system of record — exactly that, no more",
    text: "Cases, interactions, counselor workflows, commitments to students, outreach journeys: Salesforce owns them, and owns them fully. Competency semantics, assessment truth, and the ledger never enter the org. The boundary is written down in the contract registry, and every request to blur it gets answered with this ADR.",
  },
  {
    rule: "02 · Events in, events out — no point-to-point integrations",
    text: "Salesforce publishes intent events (case.assigned, commitment.made, outreach.sent) via Platform Events / Change Data Capture relayed onto the Kafka backbone, and consumes lifecycle events the same way. No direct API calls between Salesforce and other systems of record — the backbone is the only seam, so the org never becomes the enterprise's hidden integration hub.",
  },
  {
    rule: "03 · Treat the org as a product with config-as-code",
    text: "The publicly documented scale of the estate — hundreds of flows, thousands of Apex classes — is tech debt unless governed. Unlocked packages, source-driven CI/CD, sandbox discipline, a flow/Apex review board, and a paved-road template for new automation. Declarative before code, code only with an owner and a test.",
  },
  {
    rule: "04 · Data Cloud for identity and segmentation — the lakehouse stays analytical truth",
    text: "Use zero-copy sharing between Data Cloud and the lakehouse rather than duplicating data into consumption-priced storage. Data Cloud resolves and segments; Databricks stores, computes, and grounds AI. One copy, two engines, no drift.",
  },
  {
    rule: "05 · Consumption cost is an SLO",
    text: "Data Cloud and API pricing scale with volume, and at ~190k students volume is the business model. Forecast credits per use case before enabling it, set consumption budgets with alerts like error budgets, and review unit cost per student per term at the same table as the Key Results.",
  },
  {
    rule: "06 · One governance regime for agents — regardless of runtime",
    text: "If Agentforce or any Salesforce-native AI acts on students, it acts under the same rules as everything else: per-action authorization, purpose-tagged delegation, human-in-the-loop on high-impact actions, audit to the same trail. A vendor runtime never gets a policy exemption — the gateway's rules are enforced at the Salesforce boundary too.",
  },
  {
    rule: "07 · Skills over headcount-matching the vendor",
    text: "Staff a small, senior Salesforce platform team (architect, DevOps, stewardship) rather than an army of admins. Their mandate is the paved road and the boundary — the measure of their success is how little custom code the org accumulates, not how much.",
  },
  {
    rule: "08 · Leverage the relationship, keep the leverage",
    text: "Salesforce is a strategic partner: use their higher-ed roadmap, push CBE requirements into it, take co-innovation where offered. But the ledger, the event contracts, and the universal ID stay ours — partnership works best when walking away is survivable, and this design keeps it survivable.",
  },
];

const consequences = [
  {
    title: "Easier",
    items: [
      "Engagement improvements ship immediately on a platform staff already use",
      "Identity resolution is configuration, not a multi-year build",
      "The CBE core is small enough to build well in slices",
      "Vendor strength and internal invention stop competing for the same budget",
    ],
  },
  {
    title: "Harder",
    items: [
      "The integration contract becomes load-bearing and needs real ownership",
      "Two operating models (org governance + platform engineering) must both stay healthy",
      "Cost governance is continuous work, not a one-time negotiation",
    ],
  },
  {
    title: "Revisit if",
    items: [
      "Data Cloud consumption cost per student breaches the agreed ceiling for two consecutive terms",
      "Salesforce ships credible CBE/competency primitives worth re-scoring Option A",
      "Identity-resolution quality (match precision/recall) misses target after tuning",
      "The ledger slice proves out and argues for pulling more journey state inward",
    ],
  },
];

export default function AdrTimelinePage() {
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
        imageSrc="/wgu/visuals/adr-buy-build-hero.webp"
        imageAlt="Abstract buy-versus-build decision timeline with governed evidence checkpoints."
        accent="amber"
        minHeight="min-h-[700px]"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
            <FileCheck2 size={16} aria-hidden="true" />
            ADR-001 · Status: Accepted (direction) · July 2026
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.2rem,6vw,4.6rem)] font-black leading-[0.94] text-white">
            Buy the engagement layer. Build the CBE core. One contract between
            them.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
            The strongest objection to the Student Timeline was never
            technical — it was &ldquo;Salesforce Data Cloud gives you 70% of
            this off the shelf.&rdquo; The decisive answer: take the 70% —
            engagement, cases, identity resolution — and spend every
            engineering hour on the 30% no vendor sells: the competency
            ledger, the CBE timeline semantics, and the decisioning loop.
          </p>
        </div>
      </WguImmersiveHero>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            Context
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white">
            The estate is already chosen. The question is the boundary.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--soft)]">
            The public record shows Salesforce as the student-journey backbone
            at scale, a Databricks lakehouse as the analytical platform, and
            Confluent/Kafka event-driven architecture investment. The Student
            Timeline product needs identity resolution across applicant,
            Academy, degree, apprenticeship, and alumni populations — a
            dependency the v2 target assumed and this record designs. The real
            decision is not &ldquo;Salesforce or not&rdquo; — it is where the
            vendor boundary sits and who owns what truth.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="border border-[var(--magenta)] bg-black/40 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[var(--magenta)]">
              The decisive historical fact
            </p>
            <h2 className="mt-3 max-w-4xl font-display text-3xl font-black leading-tight text-white sm:text-4xl">
              The tools were present. The seams were ungoverned.
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--soft)]">
              Salesforce was fully in operation — mature, deeply invested,
              supporting the student journey at scale — during the same period
              the public reviews describe black-hole documents, silent
              start-date changes, dropped handoffs, fragmented answers, and
              failed logins. That is not an indictment of the CRM; it is proof
              of where the failures actually live. Black holes and silent
              changes are records-side workflow problems; aid stalls live in
              aid processing; crashes live in the portal and auth layer. A CRM
              only helps if the workflow passes through it, the data flows
              into it, and every department acts from it. Fragmented truth
              with a 360° platform in the building means the 360 was never
              actually unified across the seams.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-white/90">
              So when someone says &ldquo;just use more Salesforce,&rdquo; the
              answer is history: the tool was present for every one of these
              failures. What was missing is exactly what this record
              decides — lifecycle events crossing system boundaries, owner and
              SLA semantics that span departments, one universal identity, and
              a journey-level view someone is accountable to. Tools were never
              the gap. Governed seams were.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            Options considered
          </p>
          <div className="mt-6 grid gap-4">
            {options.map((opt) => (
              <article
                key={opt.name}
                className={`border p-6 ${opt.name.includes("DECIDED") ? "border-[var(--signal)] bg-white/[0.05]" : "border-white/12 bg-white/[0.03]"}`}
              >
                <h3 className="font-display text-2xl font-black leading-tight text-white">
                  {opt.name}
                </h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {opt.rows.map(([dim, val]) => (
                    <div
                      key={dim}
                      className="border border-white/10 bg-black/30 p-3"
                    >
                      <p className="font-mono text-[0.65rem] uppercase text-[var(--amber)]">
                        {dim}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[var(--soft)]">
                        {val}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-white/85">
                  <span className="font-mono text-xs uppercase text-[var(--signal)]">
                    Pros ·{" "}
                  </span>
                  {opt.pros}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
                  <span className="font-mono text-xs uppercase text-[var(--magenta)]">
                    Cons ·{" "}
                  </span>
                  {opt.cons}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            The identity spine — the dependency v2 assumed, now designed
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white">
            One person, one ID, every system.
          </h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {mdm.map((item) => (
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

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            The Salesforce operating playbook
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none sm:text-5xl">
            How to work with Salesforce and stay in command.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/70">
            Staying with Salesforce is a strength when the boundary is
            governed. Eight operating rules make the partnership
            work for the students instead of for the org chart.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {playbook.map((item) => (
              <article
                key={item.rule}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                  {item.rule}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/75">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            Consequences & revisit triggers
          </p>
          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {consequences.map((c) => (
              <article
                key={c.title}
                className="border border-white/12 bg-white/[0.035] p-5"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {c.items.map((i) => (
                    <li
                      key={i}
                      className="border-l-2 border-white/20 pl-3 text-sm leading-6 text-[var(--soft)]"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 border border-[var(--signal)] bg-white/[0.03] p-6">
            <p className="font-mono text-xs uppercase text-[var(--amber)]">
              Decision, in one line
            </p>
            <p className="mt-3 max-w-4xl text-lg leading-8 text-white">
              Salesforce runs the relationship; we build the record of
              mastery; the backbone carries the contract between them — and
              the student sees one coherent system either way. Ratified with
              the team in the Days 31–60 sessions; the direction stands.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/wgu/architecture-v2"
                className="inline-flex h-11 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Architecture v2
              </Link>
              <Link
                href="/wgu/personalization"
                className="inline-flex h-11 items-center gap-2 border border-white/20 px-5 font-mono text-sm text-white transition-colors hover:border-[var(--signal)]"
              >
                Personalization layer
              </Link>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-white/50">
            Deciders: enterprise architecture with platform, data, and CRM
            leadership. Public reference framing — estate facts from public
            vendor case studies and job postings; not a representation of WGU
            internal decisions.
          </p>
        </div>
      </section>
    </main>
  );
}
