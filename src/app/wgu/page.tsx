import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Braces,
  BriefcaseBusiness,
  BrainCircuit,
  Calculator,
  CalendarClock,
  ClipboardCheck,
  Compass,
  Download,
  FileCheck2,
  FileText,
  FlaskConical,
  Hammer,
  Sparkles,
  GraduationCap,
  Landmark,
  MessageSquareWarning,
  Network,
  Presentation,
  Route,
  Siren,
  Scale,
  ShieldCheck,
  Split,
  Swords,
  TrendingUp,
  Users,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { WguExplorerProgress } from "@/components/wgu-explorer-progress";

export const metadata: Metadata = {
  title: "WGU Enterprise Architecture Hub",
  description:
    "John Briggs' working enterprise-architecture hub for Western Governors University: leadership principles, system boundary, the Unified Student Object thesis, adversarial review, and the v2 target architecture.",
  alternates: { canonical: "/wgu" },
};

const areas = [
  {
    href: "/wgu/student-continuity-fabric",
    icon: Route,
    label: "Invention",
    title: "The Student Continuity Fabric",
    text: "The named category: a governed event, identity, timeline, and action layer that prevents online students from disappearing between systems.",
  },
  {
    href: "/wgu/why-novel",
    icon: Split,
    label: "Novelty",
    title: "Why this is not another tool",
    text: "Salesforce, SIS, lakehouse, ServiceNow, and Genesys all still matter. The invention governs the seams between them and gives students continuity.",
  },
  {
    href: "/wgu/prior-art",
    icon: Scale,
    label: "Prior Art",
    title: "The invention claim on trial",
    text: "Adaptive case management, Salesforce, ServiceNow, airline IROPS, workflow orchestration, and higher-ed platforms steelmanned before the honest novelty verdict.",
  },
  {
    href: "/wgu/evaluation-rubric",
    icon: ClipboardCheck,
    label: "Rubric",
    title: "The Student Continuity test",
    text: "A vendor-neutral scoring model: no silent changes, named owner, student-visible lifecycle, replayable audit, AI authorization, SoR clarity, and cost per student per term.",
  },
  {
    href: "/wgu/whitepaper",
    icon: FileText,
    label: "Whitepaper",
    title: "The public reference artifact",
    text: "A downloadable PDF packaging the category, failure modes, proof slice, trust model, scale math, adoption path, and evidence ledger.",
  },
  {
    href: "/wgu/leadership-principles",
    icon: Compass,
    label: "Principles",
    title: "Principles, results, and beliefs as practice",
    text: "The public WGU framework kept in its categories — Leadership Principles, Key Results, Cultural Beliefs — then translated into architecture behavior.",
  },
  {
    href: "/wgu/student-evidence-protocol",
    icon: MessageSquareWarning,
    label: "Student Evidence",
    title: "Student co-design without policy shortcuts",
    text: "A sanctioned evidence protocol for student voice, front-line proxy signal, journey traces, and usability findings feeding architecture decisions.",
  },
  {
    href: "/wgu/role-experience-pack",
    icon: Users,
    label: "Role Experience",
    title: "Mentor, instructor, and evaluator adoption",
    text: "The first useful screen, adoption promise, and automation boundary for the roles carrying students through the WGU model.",
  },
  {
    href: "/wgu/engagement-strategy",
    icon: BriefcaseBusiness,
    label: "Engagement",
    title: "Earn adoption one decision community at a time",
    text: "Registrar, financial aid, mentors, engineering, security, data, and leadership mapped by currency, fear, gift-before-ask, and proof artifact.",
  },
  {
    href: "/wgu/risk-driven-architecture",
    icon: FlaskConical,
    label: "Method",
    title: "Risk-driven architecture",
    text: "A plain-language method for doing just enough architecture: size the diagrams, ADRs, proofs, and reviews to the risks that can hurt students.",
  },
  {
    href: "/wgu/system-boundary",
    icon: Landmark,
    label: "System Boundary",
    title: "The whole institution the platform must serve",
    text: "Schools, programs, affiliates, non-degree pathways, scale, and the student lifecycle — the researched boundary that defines what the architecture must address.",
  },
  {
    href: "/wgu/voice-of-the-student",
    icon: MessageSquareWarning,
    label: "Voice of the Student",
    title: "Complaints mapped to structural answers",
    text: "What students told us, the failure mode behind each complaint, and the architecture component that answers it. Student Obsessed, made operational.",
  },
  {
    href: "/wgu/student-system-priorities",
    icon: ClipboardCheck,
    label: "Priorities",
    title: "Seven guardrails for the new student system",
    text: "The design guardrails we hold the line on, the capabilities each implies, and the test every design must pass — building from the ground up, for the student.",
  },
  {
    href: "/wgu/first-90-days",
    icon: CalendarClock,
    label: "First 90 Days",
    title: "The listen-first plan, on the calendar",
    text: "Listen & Diagnose, Frame & Align, Prove & Sequence — anchored to real dates from July 20, 2026, with success criteria and student-centered metrics.",
  },
  {
    href: "/wgu/practice-lab",
    icon: BriefcaseBusiness,
    label: "Practice Lab",
    title: "The role-mastery rehearsal floor",
    text: "Executive briefs, stakeholder maps, operating cadence, governance without tollbooths, portfolio choices, cases, influence rehearsals, and bench-building.",
  },
  {
    href: "/wgu/opportunity-continuity-fabric",
    icon: Sparkles,
    label: "Opportunity",
    title: "Carry the record from learning to work",
    text: "The mission extension: competency evidence, skills graph, Achievement Wallet, career pathways, alumni signal, and employer legibility.",
  },
  {
    href: "/case-studies/wgu-unified-student-object",
    icon: GraduationCap,
    label: "Thesis · USO",
    title: "The Unified Student Object",
    text: "The original thesis: an event-sourced student timeline projected into role-specific views with governed AI and human-in-the-loop control.",
  },
  {
    href: "/case-studies/wgu-governance-identity-fabric",
    icon: ShieldCheck,
    label: "Thesis · Fabric",
    title: "The Governance & Identity Fabric",
    text: "The unifying layer behind a mesh of meshes: identity with delegation, policy-as-code, contracts, lineage, and agent trust controls at the seams.",
  },
  {
    href: "/wgu/adversarial-review",
    icon: Swords,
    label: "Adversarial Review",
    title: "The strongest case against my own thesis",
    text: "A full prosecution of the USO and mesh-of-meshes: four contested bets, peer evidence, kill-shot questions, and honest verdicts.",
  },
  {
    href: "/wgu/architecture-v2",
    icon: Network,
    label: "Architecture v2",
    title: "The target architecture",
    text: "Nine decisions, drawn and defended: systems of record respected, events as circulation, one governed timeline product, contained AI. Direction set, adoption sequenced.",
  },
  {
    href: "/wgu/personalization",
    icon: Sparkles,
    label: "Personalization",
    title: "Where recommendations actually come from",
    text: "The decisioning loop on top of the substrate: governed signals, next-best-action, experimentation with holdouts, learning-science validation, governed actuation.",
  },
  {
    href: "/wgu/adr-timeline-buy-vs-build",
    icon: FileCheck2,
    label: "ADR-001",
    title: "Buy the engagement layer, build the CBE core",
    text: "The buy-vs-build decision record: Salesforce as engagement backbone and identity spine, the competency ledger as ours — with the eight-rule Salesforce operating playbook.",
  },
  {
    href: "/wgu/ground-up",
    icon: Hammer,
    label: "Build Strategy",
    title: "Ground-up, done right",
    text: "Greenfield architecture without the big-bang graveyard: chosen ground, cohort-based strangler cutover, the records workstream, and decommission criteria.",
  },
  {
    href: "/wgu/engineering-standards",
    icon: Braces,
    label: "Standards",
    title: "The paved road, specified",
    text: "The event envelope, 49-event catalog, contract-registry rules, API standards, and the accreditation-grade Competency Ledger data model with its transcript projection.",
  },
  {
    href: "/wgu/operating-model",
    icon: Users,
    label: "Operating Model",
    title: "Capabilities, teams, and risk",
    text: "The business capability map with build/buy postures, the four-team topology, the decision cadence, and a living risk register with owners and tripwires.",
  },
  {
    href: "/wgu/business-case",
    icon: TrendingUp,
    label: "Business Case",
    title: "Persistence economics",
    text: "What one point of persistence is worth (~$15M and ~1,900 lives), what each failure mode costs, slice-level ROI, and the fund-slices-not-programs narrative.",
  },
  {
    href: "/wgu/ai-native",
    icon: BrainCircuit,
    label: "AI-Native",
    title: "AI-first by design, with a test to prove it",
    text: "Five bolted-on vs. native contrasts, the seven marks of AI-native design with addresses in the architecture, descriptions as infrastructure, and per-domain readiness checks.",
  },
  {
    href: "/wgu/human-connection-slos",
    icon: BrainCircuit,
    label: "AI Support",
    title: "Human connection SLOs for AI student support",
    text: "AI support that reduces friction without increasing isolation: human reachability, escalation freshness, mentor visibility, and well-being checks.",
  },
  {
    href: "/wgu/trust-pack",
    icon: ShieldCheck,
    label: "Trust Pack",
    title: "Trust as numbers with consequences",
    text: "The SLO catalog with error-budget policy, the FERPA purpose taxonomy, relationship-based access, data classification, and the five AI action tiers — each explained in plain language.",
  },
  {
    href: "/wgu/academic-integrity-regulatory-seams",
    icon: ShieldCheck,
    label: "Academic Trust",
    title: "Academic integrity and regulatory seams",
    text: "Assessment integrity, Title IV, accreditation evidence, appeals, accessibility, and academic-record trust as explicit seam controls.",
  },
  {
    href: "/wgu/engineering-platform",
    icon: Braces,
    label: "Engineering Platform",
    title: "Agentic delivery with a harness",
    text: "A platform strategy for engineer efficiency: golden paths, proof-first agentic workflows, delegation filters, DX SLOs, and Harnessing the Horse discipline.",
  },
  {
    href: "/wgu/scale-math",
    icon: Calculator,
    label: "Scale Math",
    title: "Somebody did the arithmetic",
    text: "Events/day at 190K students, storage growth, 20-minute replays, <$2/student/term — every number with its math shown and its assumption stated.",
  },
  {
    href: "/wgu/ops-reality",
    icon: Siren,
    label: "Ops Reality",
    title: "Designing for the bad day",
    text: "Five failure runbooks, the Slice-1 definition of done with its ten-minute demo script, and the agent-gateway threat model.",
  },
  {
    href: "/wgu/pitch",
    icon: Presentation,
    label: "Pitch Kit",
    title: "One page, ten slides, ten minutes",
    text: "The executive delivery vehicle: the one-page argument and the downloadable deck — plus pointers to the running reference implementation behind every claim.",
  },
  {
    href: "/wgu/glossary",
    icon: BookOpenText,
    label: "Glossary",
    title: "Plain language for the whole room",
    text: "Every load-bearing term defined for the person who has never seen the acronym — SIS to CQRS, competency units to strangler figs.",
  },
];

const commitments = [
  {
    title: "Mission first",
    text: "WGU changes lives for the better by creating pathways to opportunity. Every architecture decision here is judged by whether it widens or narrows a pathway.",
  },
  {
    title: "Principles govern plans",
    text: "Each plan, task, and decision record in this hub is tagged to the principle, key result, or cultural belief it serves. If a plan cannot name its framework signal, it is not ready.",
  },
  {
    title: "Adversarial by default",
    text: "Every thesis gets a prosecution. Sound Judgment and Learning demand that the strongest case against a design is written down before the design is trusted.",
  },
  {
    title: "Reference, not representation",
    text: "This is a personal working space and public-pattern reference. It does not represent WGU internal systems, data, or decisions.",
  },
];

const caseStudyLineage = [
  {
    href: "/case-studies/wgu-unified-student-object",
    label: "Original thesis",
    title: "Unified Student Object",
    text: "The v1 case study: one event-sourced student timeline projected into governed, role-specific views.",
  },
  {
    href: "/case-studies/wgu-governance-identity-fabric",
    label: "Bridge thesis",
    title: "Governance & Identity Fabric",
    text: "The mesh-of-meshes layer: identity, delegation, policy, lineage, and trusted action across boundaries.",
  },
  {
    href: "/wgu/architecture-v2",
    label: "Current target",
    title: "Architecture v2",
    text: "The revised target architecture: ship with speed, safety, and evidence after adversarial review.",
  },
];

const hubTracks = [
  {
    label: "Start",
    title: "Understand the invention",
    text: "Category, novelty, proof, scoring, and portable reference material.",
    image: "/wgu/visuals/scf-continuity-thread-map.webp",
    alt: "Student continuity thread passing through governed institutional systems",
    href: "/wgu/student-continuity-fabric",
    areas: [
      "/wgu/student-continuity-fabric",
      "/wgu/why-novel",
      "/wgu/prior-art",
      "/wgu/evaluation-rubric",
      "/wgu/whitepaper",
    ],
  },
  {
    label: "People",
    title: "Student, role, and adoption signal",
    text: "Student evidence, role experience, engagement, and practice rooms.",
    image: "/wgu/visuals/engagement-strategy-hero.webp",
    alt: "Decision communities connected by trust bridges and evidence packets",
    href: "/wgu/student-evidence-protocol",
    areas: [
      "/wgu/leadership-principles",
      "/wgu/student-evidence-protocol",
      "/wgu/role-experience-pack",
      "/wgu/engagement-strategy",
      "/wgu/practice-lab",
      "/wgu/voice-of-the-student",
    ],
  },
  {
    label: "Architecture",
    title: "System shape and delivery path",
    text: "Boundary, target model, standards, operating model, and build path.",
    image: "/wgu/visuals/architecture-system-model.webp",
    alt: "Target architecture model with governed systems, event paths, and policy layers",
    href: "/wgu/architecture-v2",
    areas: [
      "/wgu/system-boundary",
      "/wgu/architecture-v2",
      "/wgu/architecture-v2#roadmap",
      "/wgu/adr-timeline-buy-vs-build",
      "/wgu/ground-up",
      "/wgu/engineering-standards",
      "/wgu/operating-model",
      "/wgu/engineering-platform",
      "/wgu/scale-math",
      "/wgu/ops-reality",
    ],
  },
  {
    label: "Trust",
    title: "Risk, security, AI, and academic trust",
    text: "Adversarial review, AI-native design, FERPA, action tiers, and integrity seams.",
    image: "/wgu/visuals/academic-integrity-regulatory-seams-hero.webp",
    alt: "Academic trust evidence chamber with ledgers, policy gates, and appeal paths",
    href: "/wgu/trust-pack",
    areas: [
      "/wgu/risk-driven-architecture",
      "/wgu/adversarial-review",
      "/wgu/personalization",
      "/wgu/ai-native",
      "/wgu/human-connection-slos",
      "/wgu/trust-pack",
      "/wgu/academic-integrity-regulatory-seams",
    ],
  },
  {
    label: "Value",
    title: "Mission, economics, and pitch",
    text: "Opportunity continuity, priorities, first 90 days, business case, and delivery kit.",
    image: "/wgu/visuals/business-case-hero.webp",
    alt: "Mission and business evidence flowing through persistence and student outcome measures",
    href: "/wgu/business-case",
    areas: [
      "/wgu/student-system-priorities",
      "/wgu/first-90-days",
      "/wgu/opportunity-continuity-fabric",
      "/wgu/business-case",
      "/wgu/pitch",
    ],
  },
  {
    label: "Reference",
    title: "Source trail and plain language",
    text: "Case-study lineage, glossary, and the roadmap into v2.",
    image: "/wgu/visuals/glossary-hero.webp",
    alt: "Reference shelf and plain-language map for architecture terms",
    href: "/wgu/glossary",
    areas: [
      "/case-studies/wgu-unified-student-object",
      "/case-studies/wgu-governance-identity-fabric",
      "/wgu/glossary",
    ],
  },
];

const areaImages: Record<string, { image: string; alt: string }> = {
  "/wgu/student-continuity-fabric": {
    image: "/wgu/visuals/scf-continuity-thread-map.webp",
    alt: "Governed student continuity thread across institutional systems",
  },
  "/wgu/why-novel": {
    image: "/wgu/visuals/why-novel-fabric-layer.webp",
    alt: "Fabric layer connecting existing platforms without replacing them",
  },
  "/wgu/prior-art": {
    image: "/wgu/visuals/prior-art-trial.webp",
    alt: "Prior-art evidence panels testing a central Student Continuity Fabric claim",
  },
  "/wgu/evaluation-rubric": {
    image: "/wgu/visuals/evaluation-evidence-ledger.webp",
    alt: "Evaluation evidence ledger with scored continuity criteria",
  },
  "/wgu/whitepaper": {
    image: "/wgu/visuals/whitepaper-hero.webp",
    alt: "Whitepaper reference artifact on a technical evidence table",
  },
  "/wgu/leadership-principles": {
    image: "/wgu/visuals/leadership-principles-hero.webp",
    alt: "Leadership principles translated into operating signals and architecture choices",
  },
  "/wgu/student-evidence-protocol": {
    image: "/wgu/visuals/student-voice-continuity.webp",
    alt: "Student voice evidence flowing into governed architecture decisions",
  },
  "/wgu/role-experience-pack": {
    image: "/wgu/visuals/personalization-hero.webp",
    alt: "Role-specific student support views connected to governed context",
  },
  "/wgu/engagement-strategy": {
    image: "/wgu/visuals/engagement-strategy-hero.webp",
    alt: "Stakeholder engagement rooms connected by trust bridges",
  },
  "/wgu/risk-driven-architecture": {
    image: "/wgu/visuals/risk-driven-architecture-hero.webp",
    alt: "Risk-driven architecture workbench with evidence and review controls",
  },
  "/wgu/system-boundary": {
    image: "/wgu/visuals/system-boundary-hero.webp",
    alt: "Institutional system boundary with learner pathways and operating domains",
  },
  "/wgu/voice-of-the-student": {
    image: "/wgu/visuals/student-voice-continuity.webp",
    alt: "Student complaint signal mapped to structural architecture answers",
  },
  "/wgu/student-system-priorities": {
    image: "/wgu/visuals/student-system-priorities-hero.webp",
    alt: "Student system priorities organized as guarded operating lanes",
  },
  "/wgu/first-90-days": {
    image: "/wgu/visuals/first-90-days-hero.webp",
    alt: "First 90 days plan arranged as a dated architecture operating calendar",
  },
  "/wgu/practice-lab": {
    image: "/wgu/practice-lab/practice-lab-hero.webp",
    alt: "Practice Lab rehearsal floor with enterprise architecture artifacts",
  },
  "/wgu/opportunity-continuity-fabric": {
    image: "/wgu/visuals/system-boundary-hero.webp",
    alt: "Lifelong learner pathway from learning record to opportunity",
  },
  "/case-studies/wgu-unified-student-object": {
    image: "/brand/unified-student-object-case-study.png",
    alt: "Unified Student Object case-study architecture diagram",
  },
  "/case-studies/wgu-governance-identity-fabric": {
    image: "/brand/bmozi-ai-governance-hero.png",
    alt: "Governance and identity fabric case-study image",
  },
  "/wgu/adversarial-review": {
    image: "/wgu/visuals/adversarial-review-hero.webp",
    alt: "Adversarial review room testing architecture claims",
  },
  "/wgu/architecture-v2": {
    image: "/wgu/visuals/architecture-system-model.webp",
    alt: "Architecture v2 target model with event and policy layers",
  },
  "/wgu/personalization": {
    image: "/wgu/visuals/personalization-hero.webp",
    alt: "Personalization decision loop with governed signals and actions",
  },
  "/wgu/adr-timeline-buy-vs-build": {
    image: "/wgu/visuals/adr-buy-build-hero.webp",
    alt: "Buy versus build decision timeline with platform boundaries",
  },
  "/wgu/ground-up": {
    image: "/wgu/visuals/ground-up-hero.webp",
    alt: "Ground-up build strategy with slices and cutover paths",
  },
  "/wgu/engineering-standards": {
    image: "/wgu/visuals/engineering-standards-hero.webp",
    alt: "Engineering standards workbench with event contracts and proof gates",
  },
  "/wgu/operating-model": {
    image: "/wgu/visuals/operating-model-hero.webp",
    alt: "Operating model with teams, capabilities, risk, and decision cadence",
  },
  "/wgu/business-case": {
    image: "/wgu/visuals/business-case-hero.webp",
    alt: "Business case evidence for persistence economics",
  },
  "/wgu/ai-native": {
    image: "/wgu/visuals/ai-native-hero.webp",
    alt: "AI-native architecture with governed actions and decision loops",
  },
  "/wgu/human-connection-slos": {
    image: "/wgu/visuals/ai-native-hero.webp",
    alt: "AI support path with human connection checkpoints",
  },
  "/wgu/trust-pack": {
    image: "/wgu/visuals/trust-pack-hero.webp",
    alt: "Trust pack with SLOs, FERPA purpose, and AI action tiers",
  },
  "/wgu/academic-integrity-regulatory-seams": {
    image: "/wgu/visuals/academic-integrity-regulatory-seams-hero.webp",
    alt: "Academic integrity evidence chamber with policy and provenance controls",
  },
  "/wgu/engineering-platform": {
    image: "/wgu/visuals/engineering-platform-hero.webp",
    alt: "Engineering platform paved road with AI-assisted work lanes",
  },
  "/wgu/scale-math": {
    image: "/wgu/visuals/scale-math-hero.webp",
    alt: "Scale math model with event volume, replay, storage, and cost signals",
  },
  "/wgu/ops-reality": {
    image: "/wgu/visuals/ops-reality-hero.webp",
    alt: "Operations reality table with incident runbooks and bad-day controls",
  },
  "/wgu/pitch": {
    image: "/wgu/visuals/pitch-hero.webp",
    alt: "Executive pitch kit with slide, proof, and reference artifacts",
  },
  "/wgu/glossary": {
    image: "/wgu/visuals/glossary-hero.webp",
    alt: "Plain-language glossary reference shelf",
  },
  "/wgu/architecture-v2#roadmap": {
    image: "/wgu/visuals/first-90-days-hero.webp",
    alt: "Roadmap slices arranged on an operating calendar",
  },
};

const areaTrackByHref = Object.fromEntries(
  hubTracks.flatMap((track) => track.areas.map((href) => [href, track.label])),
) as Record<string, string>;

const areaByHref = Object.fromEntries(
  areas.map((area) => [
    area.href,
    { href: area.href, label: area.label, title: area.title },
  ]),
) as Record<string, { href: string; label: string; title: string }>;

const roadmapArea = {
  href: "/wgu/architecture-v2#roadmap",
  label: "Living Roadmap",
  title: "Proven in slices, principled at every step",
};

const explorerTracks = hubTracks.map((track) => ({
  label: track.label,
  title: track.title,
  text: track.text,
  items: track.areas
    .map((href) => (href === roadmapArea.href ? roadmapArea : areaByHref[href]))
    .filter((item): item is { href: string; label: string; title: string } =>
      Boolean(item),
    ),
}));

export default function WguHubPage() {
  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/workspace" className="group inline-flex items-center gap-3">
            <BrandLockup markClassName="h-9 w-9" textClassName="text-lg" />
          </Link>
          <Link
            href="/workspace"
            className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Workspace
          </Link>
        </nav>
      </header>

      <section className="relative isolate min-h-[720px] overflow-hidden border-b border-white/10">
        <Image
          src="/wgu/visuals/student-continuity-fabric-hero.webp"
          alt="Abstract student continuity thread crossing governed institutional systems without gaps"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,17,0.96)_0%,rgba(10,13,17,0.78)_44%,rgba(10,13,17,0.36)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(25,214,197,0.25),transparent_28rem)]" />
        <div className="mx-auto flex min-h-[720px] max-w-7xl flex-col justify-end px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-black/45 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)]">
              <Scale size={16} aria-hidden="true" />
              Named invention · protected working hub
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.6rem,7vw,5.6rem)] font-black leading-[0.92] text-white">
              The Student Continuity Fabric: make it impossible for students to
              disappear between systems.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
              This hub now packages the work as a named invention with proof: a
              governed event, identity, timeline, and action layer for online
              institutions. The deeper architecture still lives here, but the
              front door is the student pain it solves — black holes, silent
              changes, ownerless queues, fragmented truth, unreliable access, and
              unsafe AI action.
            </p>
            <p className="mt-5 max-w-3xl border-l-2 border-[var(--signal)] pl-4 font-mono text-sm leading-7 text-[var(--signal)]">
              What: the Student Continuity Fabric. How: ship with speed,
              safety, and evidence. Why: pathways to opportunity — no student
              lost in a seam.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/wgu/student-continuity-fabric"
                className="inline-flex h-12 items-center gap-2 bg-[var(--signal)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Open the invention
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="/wgu/student-continuity-fabric-reference-architecture.pdf"
                className="inline-flex h-12 items-center gap-2 border border-white/20 px-5 font-mono text-sm font-bold text-white transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
                download
              >
                <Download size={16} aria-hidden="true" />
                Download whitepaper
              </a>
            </div>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-3 border border-white/15 bg-black/45 font-mono text-[0.62rem] uppercase text-[var(--muted)] backdrop-blur">
            <span className="border-r border-white/10 px-3 py-3">
              no black holes
            </span>
            <span className="border-r border-white/10 px-3 py-3">
              named owners
            </span>
            <span className="px-3 py-3">audited action</span>
          </div>
        </div>
      </section>

      <WguExplorerProgress tracks={explorerTracks} />

      <section className="border-b border-white/10 bg-[#0d1118]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--signal)]">
              Visual atlas
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
              Six paths through the work, before the full directory.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--soft)]">
              The hub is easier to use when the work has landmarks. Start with
              the invention, follow the people and adoption path, inspect the
              architecture, test the trust model, then carry the value story
              into the room.
            </p>
          </div>
          <figure className="overflow-hidden border border-white/12 bg-white/[0.035] p-2">
            <Image
              src="/wgu/visuals/wgu-hub-visual-atlas.webp"
              alt="Visual atlas of the WGU architecture hub with six destination clusters around a central student continuity fabric"
              width={1800}
              height={1013}
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="h-auto w-full"
            />
          </figure>
          <div className="grid gap-3 lg:col-span-2 md:grid-cols-2 xl:grid-cols-3">
            {hubTracks.map((track) => (
              <Link
                key={track.label}
                href={track.href}
                className="group grid overflow-hidden border border-white/12 bg-white/[0.035] transition-colors hover:border-[var(--signal)] sm:grid-cols-[0.44fr_0.56fr] xl:grid-cols-1"
              >
                <div className="relative min-h-40 overflow-hidden">
                  <Image
                    src={track.image}
                    alt={track.alt}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,13,17,0.72))]" />
                </div>
                <div className="flex min-h-48 flex-col p-5">
                  <p className="font-mono text-xs uppercase text-[var(--amber)]">
                    {track.label} · {track.areas.length} areas
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-black leading-tight text-white">
                    {track.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                    {track.text}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-xs text-[var(--signal)]">
                    Open path
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0d1118]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Case-study lineage
              </p>
              <h2 className="mt-3 max-w-4xl font-display text-3xl font-black leading-tight text-white sm:text-4xl">
                The old case studies did not disappear. They became the trail
                into v2.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--soft)]">
              Use this strip when you want the evolution: original timeline
              thesis, governance fabric thesis, current architecture target.
            </p>
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {caseStudyLineage.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-white/12 bg-white/[0.035] p-5 transition-colors hover:border-[var(--signal)]"
              >
                <p className="font-mono text-xs uppercase text-[var(--amber)]">
                  {item.label}
                </p>
                <h3 className="mt-3 font-display text-2xl font-black leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  {item.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-[var(--signal)]">
                  Open
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase text-[var(--magenta)]">
            Operating commitments
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-none sm:text-5xl">
            How this space stays true.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {commitments.map((item) => (
              <article
                key={item.title}
                className="border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
              >
                <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-black/75">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hub-directory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Full visual directory
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-none text-white sm:text-5xl">
                Every area gets a visual clue and a first door.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[var(--soft)]">
              Scan by image first, then label. Each card opens directly into the
              work, so the hub can behave like a map instead of a long memo.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {areas.map((area) => {
              const visual = areaImages[area.href];
              return (
                <Link
                  key={area.href}
                  href={area.href}
                  className="group flex min-h-[25rem] flex-col overflow-hidden border border-white/12 bg-white/[0.035] transition-colors hover:border-[var(--signal)]"
                >
                  {visual ? (
                    <div className="relative h-36 overflow-hidden border-b border-white/10">
                      <Image
                        src={visual.image}
                        alt={visual.alt}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,13,17,0.05),rgba(10,13,17,0.78))]" />
                      <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 border border-white/15 bg-black/55 px-2.5 py-1.5 font-mono text-[0.65rem] uppercase text-[var(--signal)] backdrop-blur">
                        <area.icon size={13} aria-hidden="true" />
                        {areaTrackByHref[area.href] ?? "Map"}
                      </span>
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
                      <area.icon size={15} aria-hidden="true" />
                      {area.label}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-black leading-tight text-white">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                      {area.text}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-4 font-mono text-xs text-[var(--signal)]">
                      Open
                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
            <Link
              href="/wgu/architecture-v2#roadmap"
              className="group flex min-h-[25rem] flex-col overflow-hidden border border-white/12 bg-white/[0.035] transition-colors hover:border-[var(--signal)]"
            >
              <div className="relative h-36 overflow-hidden border-b border-white/10">
                <Image
                  src={areaImages["/wgu/architecture-v2#roadmap"].image}
                  alt={areaImages["/wgu/architecture-v2#roadmap"].alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,13,17,0.05),rgba(10,13,17,0.78))]" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 border border-white/15 bg-black/55 px-2.5 py-1.5 font-mono text-[0.65rem] uppercase text-[var(--signal)] backdrop-blur">
                  <FlaskConical size={13} aria-hidden="true" />
                  Roadmap
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
                  <FlaskConical size={15} aria-hidden="true" />
                  Living Roadmap
                </p>
                <h3 className="mt-4 font-display text-2xl font-black leading-tight text-white">
                  Proven in slices, principled at every step
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                  The dated slices with their Leadership Principles, Slice 1
                  drawn as a sequence, and ADR-001 already decided. Append-only
                  in spirit: nothing deleted, everything revised in the open —
                  slice results land here as they ship.
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 font-mono text-xs text-[var(--signal)]">
                  Open
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
