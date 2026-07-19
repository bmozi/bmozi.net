export type WorkspaceItem = {
  href: string;
  label: string;
  description: string;
};

export type WorkspaceGroup = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  items: WorkspaceItem[];
};

export const workspaceGroups: WorkspaceGroup[] = [
  {
    id: "architecture",
    title: "Architecture lab",
    eyebrow: "Invention and proof",
    description:
      "The continuity architecture, operating model, trust pack, scale math, and executive-ready proof artifacts.",
    href: "/wgu",
    items: [
      {
        href: "/wgu/student-continuity-fabric",
        label: "Student Continuity Fabric",
        description: "Named invention, category frame, and proof slice.",
      },
      {
        href: "/wgu/architecture-v2",
        label: "Target architecture",
        description: "Systems, events, timelines, governance, and AI action.",
      },
      {
        href: "/wgu/whitepaper",
        label: "Whitepaper",
        description: "Reference architecture packaged as a portable artifact.",
      },
      {
        href: "/wgu/trust-pack",
        label: "Trust pack",
        description: "FERPA purposes, access tiers, SLOs, and audit posture.",
      },
      {
        href: "/wgu/student-evidence-protocol",
        label: "Student evidence protocol",
        description: "Sanctioned student voice, co-design, and evidence loops.",
      },
      {
        href: "/wgu/role-experience-pack",
        label: "Role experience pack",
        description: "Mentor, instructor, evaluator, and support adoption surfaces.",
      },
      {
        href: "/wgu/engagement-strategy",
        label: "WGU engagement strategy",
        description: "Stakeholder currencies, risks, trust moves, and proof artifacts.",
      },
      {
        href: "/wgu/opportunity-continuity-fabric",
        label: "Opportunity continuity",
        description: "Competency evidence, skills, careers, alumni, and employer trust.",
      },
      {
        href: "/wgu/human-connection-slos",
        label: "Human connection SLOs",
        description: "AI support guardrails for reachability, escalation, and trust.",
      },
      {
        href: "/wgu/academic-integrity-regulatory-seams",
        label: "Academic integrity seams",
        description: "Regulatory, assessment, appeal, and accreditation trust seams.",
      },
      {
        href: "/wgu/engineering-platform",
        label: "Engineering platform",
        description: "Agentic delivery, proof gates, DX SLOs, and harness discipline.",
      },
      {
        href: "/wgu/scale-math",
        label: "Scale math",
        description: "Volumes, storage, replay, cost, and operational arithmetic.",
      },
      {
        href: "/wgu/operating-model",
        label: "Operating model",
        description: "Capability map, team topology, cadence, and risk register.",
      },
    ],
  },
  {
    id: "writing",
    title: "Writing room",
    eyebrow: "Series and essays",
    description:
      "The private mirror of the article series, technical essays, plain-language explainers, and architectural judgment work.",
    href: "/blog",
    items: [
      {
        href: "/blog/the-seams",
        label: "The Seams",
        description: "The flagship series on system seams over tool thinking.",
      },
      {
        href: "/blog/getting-it-right",
        label: "Getting It Right",
        description: "Implementation-depth essays with tests and corrections.",
      },
      {
        href: "/blog/seams-for-everyone",
        label: "Seams for Everyone",
        description: "Plain-language versions of the core architecture ideas.",
      },
      {
        href: "/blog/architects-mind",
        label: "The Architect's Mind",
        description: "Judgment, decision pacing, and senior technical practice.",
      },
    ],
  },
  {
    id: "talks",
    title: "The Podium",
    eyebrow: "Talk kits",
    description:
      "The conference-talk portfolio: scripts, slide-ready arguments, Q&A drills, and podium versions of the strongest architecture ideas.",
    href: "/blog/talks",
    items: [
      {
        href: "/blog/talks/00-talk-portfolio",
        label: "Talk portfolio",
        description: "The full conference-track map and talk development plan.",
      },
      {
        href: "/blog/talks/01-the-tools-were-never-the-gap",
        label: "The Tools Were Never the Gap",
        description: "The opening keynote frame for seams over tool thinking.",
      },
      {
        href: "/blog/talks/02-the-seam-ai-review-cant-cross",
        label: "The Seam AI Review Can't Cross",
        description: "Why AI review still needs governed system evidence.",
      },
      {
        href: "/blog/talks/03-the-delegation-seam",
        label: "The Delegation Seam",
        description: "The authority boundary that agentic systems cannot hand-wave.",
      },
      {
        href: "/blog/talks/04-purpose-on-the-wire",
        label: "Purpose on the Wire",
        description: "Purpose-bound authorization as live system equipment.",
      },
      {
        href: "/blog/talks/05-the-harness-conference-notes",
        label: "Harness conference notes",
        description: "The conference version of the Harness talk kit.",
      },
      {
        href: "/blog/talks/06-prosecute-your-own-architecture",
        label: "Prosecute Your Own Architecture",
        description: "How adversarial review becomes design practice.",
      },
      {
        href: "/blog/talks/07-the-org-chart-is-equipment-too",
        label: "The Org Chart Is Equipment Too",
        description: "Operating model design as part of the architecture.",
      },
      {
        href: "/blog/talks/08-fund-slices-not-programs",
        label: "Fund Slices, Not Programs",
        description: "A talk on bounded proof, funding, and delivery discipline.",
      },
      {
        href: "/blog/talks/09-no-queue-without-an-owner",
        label: "No Queue Without an Owner",
        description: "Ownership, queues, and accountability in live operations.",
      },
    ],
  },
  {
    id: "reference",
    title: "Reference shelf",
    eyebrow: "Continuity library",
    description:
      "The field documents, study materials, prosecution record, and reusable operating references behind the work.",
    href: "/blog/reference",
    items: [
      {
        href: "/blog/reference/06-field-kit",
        label: "Field kit",
        description: "Reusable interview, evidence, and seam-audit materials.",
      },
      {
        href: "/blog/reference/07-day-zero-baseline",
        label: "Day-zero baseline",
        description: "Calibration record before the solution is allowed to win.",
      },
      {
        href: "/blog/reference/08-build-the-guild",
        label: "Build the guild",
        description: "How the architecture practice scales beyond one person.",
      },
      {
        href: "/blog/reference/09-study-guide",
        label: "Study guide",
        description: "The compact learning path for the whole body of work.",
      },
      {
        href: "/blog/reference/10-program-prosecution",
        label: "Program prosecution",
        description: "Adversarial review record and correction path.",
      },
      {
        href: "/blog/reference/11-the-decision-layer",
        label: "Decision layer",
        description:
          "Experimentation, rollout, configuration, and impact measurement as one governed learning loop.",
      },
    ],
  },
  {
    id: "practice",
    title: "Practice Lab",
    eyebrow: "Role mastery",
    description:
      "Executive briefs, stakeholder maps, operating cadence, governance, portfolio choices, cases, rehearsals, and bench-building.",
    href: "/wgu/practice-lab",
    items: [
      {
        href: "/wgu/practice-lab/executive-briefing-room",
        label: "Executive Briefing Room",
        description: "Translate architecture into mission, money, risk, and timing.",
      },
      {
        href: "/wgu/practice-lab/stakeholder-atlas",
        label: "Stakeholder Atlas",
        description: "Map currencies, fears, trust moves, and influence paths.",
      },
      {
        href: "/wgu/practice-lab/architects-operating-system",
        label: "Architect's Operating System",
        description: "Run the week, decision journal, prediction log, and feedback loops.",
      },
      {
        href: "/wgu/practice-lab/governance-without-tollbooths",
        label: "Governance Without Tollbooths",
        description: "Clarify decision rights without turning architecture into a gate.",
      },
      {
        href: "/wgu/practice-lab/influence-rehearsals",
        label: "Influence Rehearsals",
        description: "Practice the rooms before they happen.",
      },
    ],
  },
];

export const evidenceLinks: WorkspaceItem[] = [
  {
    href: "/case-studies/wgu-unified-student-object",
    label: "Unified Student Object",
    description: "Original thesis and student timeline pattern.",
  },
  {
    href: "/case-studies/wgu-governance-identity-fabric",
    label: "Governance and Identity Fabric",
    description: "The trust layer behind the mesh of systems.",
  },
  {
    href: "/wgu/evaluation-rubric",
    label: "Evaluation rubric",
    description: "The vendor-neutral continuity test.",
  },
  {
    href: "/wgu/pitch",
    label: "Pitch kit",
    description: "One-page argument, ten-slide path, and executive briefing.",
  },
];
