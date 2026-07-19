export type WguStrategyCard = {
  title: string;
  text: string;
};

export type WguStrategyPage = {
  slug: string;
  title: string;
  metadataTitle: string;
  description: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  accent: "signal" | "amber" | "magenta";
  primaryLink?: {
    href: string;
    label: string;
  };
  sections: Array<{
    eyebrow: string;
    title: string;
    body: string;
    cards: WguStrategyCard[];
  }>;
  checks: string[];
  sourceNote: string;
};

export const wguStrategyPages = {
  "student-evidence-protocol": {
    slug: "student-evidence-protocol",
    title: "Student Evidence and Co-Design Protocol",
    metadataTitle: "Student Evidence and Co-Design Protocol",
    description:
      "A WGU-specific protocol for turning sanctioned student voice, front-line evidence, usability testing, and feedback panels into governed architecture decisions.",
    eyebrow: "Build order 02 · student evidence",
    headline: "Make the student a design input, not a rhetorical device.",
    intro:
      "The architecture already starts with student pain. This protocol closes the gap the prosecution found: public complaints and proxy voices are not enough. Student evidence needs sanctioned channels, consent, privacy rules, and a path from observation to decision.",
    image: "/wgu/visuals/student-voice-continuity.webp",
    imageAlt:
      "Student voice evidence flowing into governed architecture decisions and traceable design cards",
    accent: "signal",
    primaryLink: {
      href: "/wgu/voice-of-the-student",
      label: "Return to student voice",
    },
    sections: [
      {
        eyebrow: "Evidence channels",
        title: "Use only channels the institution can defend.",
        body:
          "The rule is simple: no improvised student listening, no private AI processing of student facts, and no verbatim student language copied into personal artifacts. The evidence loop must work inside WGU policy, FERPA, accessibility expectations, and research/IRB boundaries where they apply.",
        cards: [
          {
            title: "Student advisory signal",
            text: "Use sanctioned panels, survey summaries, or product-research sessions to test whether a proposed slice answers a real student question.",
          },
          {
            title: "Front-line proxy signal",
            text: "Treat enrollment counselors, mentors, support, records, and financial-aid staff as student-signal carriers, but label the evidence as proxy evidence.",
          },
          {
            title: "Journey trace signal",
            text: "Trace one real workflow through official tools with permission, recording handoffs, clocks, owners, and visibility gaps rather than student-identifying details.",
          },
          {
            title: "Usability signal",
            text: "Test the first visible status screen with students or approved proxies before calling the slice student-centered.",
          },
        ],
      },
      {
        eyebrow: "Decision path",
        title: "Every student signal needs a route into architecture.",
        body:
          "Student evidence should change artifacts, not decorate them. Each finding becomes a decision candidate: what changed, who owns it, which guardrail it serves, and what measurement will show whether the change mattered.",
        cards: [
          {
            title: "Signal card",
            text: "Observation, source type, confidence tier, affected journey, principle served, and privacy constraints.",
          },
          {
            title: "Architecture response",
            text: "Map the signal to one of the structural answers: identity, event, owner, status, notice, access, escalation, or proof.",
          },
          {
            title: "Student-visible test",
            text: "The test must be stated in student language: what can the student now know, do, appeal, trust, or avoid repeating?",
          },
          {
            title: "Close-the-loop note",
            text: "When evidence changes a decision, report back through the sanctioned channel that supplied it. Trust decays when feedback disappears too.",
          },
        ],
      },
    ],
    checks: [
      "No student-identifying fact leaves WGU-controlled systems or approved research tooling.",
      "Every signal is labeled direct, proxy, public, synthetic, or inferred.",
      "Every student-facing slice has one student-visible success test.",
      "A finding cannot be cited as evidence unless it can change a design decision.",
      "The oldest stuck item remains a standing One-by-One review sample.",
    ],
    sourceNote:
      "Grounded in the local program prosecution's student-voice conviction, WGU's public student-centered mission, and WGU Labs' public use of large-scale student feedback loops.",
  },
  "role-experience-pack": {
    slug: "role-experience-pack",
    title: "Mentor, Instructor, and Evaluator Experience Pack",
    metadataTitle: "Mentor, Instructor, and Evaluator Experience Pack",
    description:
      "A role-by-role adoption pack for mentors, instructors, evaluators, enrollment, records, financial aid, and support teams using the Student Continuity Fabric.",
    eyebrow: "Build order 03 · role adoption",
    headline: "The platform succeeds only if the people carrying students can use it.",
    intro:
      "WGU is not one generic staff experience. Program mentors, course instructors, evaluators, enrollment counselors, records, financial aid, support, and security each need different truth, different controls, and different trust moves.",
    image: "/wgu/visuals/personalization-hero.webp",
    imageAlt:
      "Role-specific student-support views connected to governed context and action boundaries",
    accent: "amber",
    primaryLink: {
      href: "/wgu/personalization",
      label: "Open personalization layer",
    },
    sections: [
      {
        eyebrow: "Role views",
        title: "Design the first useful screen for each role.",
        body:
          "Adoption starts when a role sees time back, clearer responsibility, and less risk. Do not ask teams to trust a platform in the abstract; show them the first screen that makes their week better.",
        cards: [
          {
            title: "Program mentor",
            text: "Student momentum, blockers, commitments, risk signals, next best human conversation, and actions the agent only drafts.",
          },
          {
            title: "Course instructor",
            text: "Course readiness, concept blockers, help-seeking signal, assessment preparation, and intervention history scoped to the teaching relationship.",
          },
          {
            title: "Evaluator",
            text: "Rubric consistency, anonymized submission context, feedback-quality support, conflict flags, and a hard wall around competency certification.",
          },
          {
            title: "Enrollment and records",
            text: "Document status, transcript evaluation queues, ownership, SLA clocks, student-visible state, and clean handoff to academic record authority.",
          },
        ],
      },
      {
        eyebrow: "Adoption promise",
        title: "Each role gets a promise and a boundary.",
        body:
          "The promise earns pull; the boundary earns trust. The platform must say what it gives the role, what it will never take from the role, and what decisions remain human-owned.",
        cards: [
          {
            title: "Time-back promise",
            text: "Reduce status chasing, context rebuilding, duplicate explanation, and manual queue policing before adding new obligations.",
          },
          {
            title: "Judgment boundary",
            text: "AI can summarize, detect, draft, and route. It does not certify mastery, decide aid eligibility, confer credentials, or discipline students.",
          },
          {
            title: "Visibility boundary",
            text: "Relationship and purpose decide what a role can see. Broader curiosity is not a legitimate access path.",
          },
          {
            title: "Feedback boundary",
            text: "Role feedback changes the product through visible decision records, not hallway exception lists.",
          },
        ],
      },
    ],
    checks: [
      "Can each role name the first screen that gives time back?",
      "Can each role name what the system will never automate away?",
      "Is every role view tied to relationship, purpose, and action tier?",
      "Does each handoff have owner, clock, status, and student-visible language?",
      "Can the role reject or correct an AI draft without penalty or shadow work?",
    ],
    sourceNote:
      "Grounded in WGU's public support model language around mentors, instructors, and evaluators, plus the local trust pack's relationship-based access model.",
  },
  "engagement-strategy": {
    slug: "engagement-strategy",
    title: "WGU Engagement Strategy",
    metadataTitle: "WGU Engagement Strategy",
    description:
      "A stakeholder engagement strategy for carrying the Student Continuity Fabric into WGU rooms with trust, useful artifacts, and role-specific value.",
    eyebrow: "Build order 04 · influence and engagement",
    headline: "Earn adoption one decision community at a time.",
    intro:
      "The architecture is cross-boundary by nature. That means adoption cannot be commanded by a diagram. Each partner needs to see their own risk, value, dignity, and decision rights in the work before they will carry it.",
    image: "/wgu/practice-lab/stakeholder-atlas.webp",
    imageAlt:
      "Stakeholder influence atlas centered on student continuity and institutional trust paths",
    accent: "magenta",
    primaryLink: {
      href: "/wgu/practice-lab/stakeholder-atlas",
      label: "Open stakeholder atlas",
    },
    sections: [
      {
        eyebrow: "Decision communities",
        title: "Map the room before moving the system.",
        body:
          "Each community has a currency, fear, useful gift, and first question. The engagement strategy is the operating layer that prevents architecture from becoming a gatekeeping performance.",
        cards: [
          {
            title: "Registrar and records",
            text: "Currency: record integrity. Fear: shadow truth. Gift: audited ownership map and per-domain cutover criteria.",
          },
          {
            title: "Financial aid",
            text: "Currency: compliance confidence and fewer ambiguous student states. Fear: accidental Title IV exposure. Gift: purpose-tagged aid lifecycle events.",
          },
          {
            title: "Mentors and student success",
            text: "Currency: time back for students. Fear: another dashboard. Gift: a student timeline that answers status questions before calls.",
          },
          {
            title: "Engineering and platform",
            text: "Currency: fewer brittle handoffs and clearer ownership. Fear: architecture as slowdown. Gift: paved-road contracts and proof-first slices.",
          },
        ],
      },
      {
        eyebrow: "Engagement moves",
        title: "Give before asking for alignment.",
        body:
          "The first artifact should make the partner's job easier even if the broader architecture never ships. That is how the work becomes useful before it becomes mandatory.",
        cards: [
          {
            title: "One-page risk translation",
            text: "Translate the slice into the partner's risk: audit, workload, student trust, decision latency, cost, or operational resilience.",
          },
          {
            title: "Objection ledger",
            text: "Write the strongest fair objection in the partner's language, then name what evidence would change the answer.",
          },
          {
            title: "No-surprise cadence",
            text: "Never introduce a partner's risk for the first time in a group room. Pre-brief, listen, revise, then convene.",
          },
          {
            title: "Adoption receipt",
            text: "Every commitment has owner, date, expected evidence, and a visible change to a real artifact.",
          },
        ],
      },
    ],
    checks: [
      "Has each affected role received something useful before being asked for commitment?",
      "Is every objection recorded in its strongest fair form?",
      "Are decision rights named before workshops begin?",
      "Does the first slice produce a receipt leadership can inspect?",
      "Can three stakeholders name what architecture did for them this quarter?",
    ],
    sourceNote:
      "Grounded in the local Practice Lab, First 90 Days plan, and the program prosecution's warning against spending others' time without authority.",
  },
  "opportunity-continuity-fabric": {
    slug: "opportunity-continuity-fabric",
    title: "Opportunity Continuity Fabric",
    metadataTitle: "Opportunity Continuity Fabric",
    description:
      "The mission extension beyond student continuity: connecting competency evidence, skills, career pathways, employers, alumni, and workforce outcomes.",
    eyebrow: "Build order 05 · pathway to opportunity",
    headline: "The student record should not stop at completion.",
    intro:
      "WGU's mission is not merely cleaner administration. It is pathways to opportunity. The next architecture horizon connects mastery evidence to career mobility, employer trust, alumni learning, and the leap from learning to work.",
    image: "/wgu/visuals/system-boundary-hero.webp",
    imageAlt:
      "Lifelong learner pathway from admission through competency, credential, career, alumni, and employer trust",
    accent: "signal",
    primaryLink: {
      href: "/wgu/system-boundary",
      label: "Open system boundary",
    },
    sections: [
      {
        eyebrow: "Continuity extension",
        title: "Carry evidence from learning to opportunity.",
        body:
          "The Competency Ledger and skills graph become more valuable when they support opportunity after the term: credentials, career navigation, employer language, alumni growth, and work-learn cycles.",
        cards: [
          {
            title: "Competency evidence",
            text: "Portable, verifiable evidence of what the learner demonstrated, with lineage to rubric, assessment, evaluator process, and program context.",
          },
          {
            title: "Skills graph",
            text: "A semantic bridge from competencies to roles, gaps, pathways, employer language, and future learning recommendations.",
          },
          {
            title: "Achievement Wallet",
            text: "Student-controlled credentials and achievements that remain credible to employers and institutions long after conferral.",
          },
          {
            title: "Alumni loop",
            text: "Career outcomes, continued learning, and employer feedback return as governed signals, not marketing anecdotes.",
          },
        ],
      },
      {
        eyebrow: "Mission metrics",
        title: "Opportunity needs numbers with consequences.",
        body:
          "Persistence is a leading mission metric, not the whole mission. The fabric should ultimately measure whether learning changed work, wages, mobility, confidence, and access.",
        cards: [
          {
            title: "Pathway clarity",
            text: "Can the learner see the next credential, skill gap, job family, and evidence they already hold?",
          },
          {
            title: "Employer legibility",
            text: "Can an employer understand what the credential proves without decoding WGU-internal language?",
          },
          {
            title: "Return without coercion",
            text: "Return is measured with student benefit and debt/cost guardrails, not institutional revenue alone.",
          },
          {
            title: "Equity of opportunity",
            text: "Outcome gains must hold across student groups, access paths, schools, and support needs.",
          },
        ],
      },
    ],
    checks: [
      "Does the architecture connect completion to career evidence?",
      "Can a student carry proof without exposing unnecessary PII?",
      "Can employers trust the record without calling WGU?",
      "Do alumni signals improve future student pathways?",
      "Are opportunity metrics paired with equity and student-benefit guardrails?",
    ],
    sourceNote:
      "Grounded in WGU's public pathway-to-opportunity mission and WGU Labs' public framing of the leap from learning to opportunity.",
  },
  "human-connection-slos": {
    slug: "human-connection-slos",
    title: "Human Connection SLOs for AI Student Support",
    metadataTitle: "Human Connection SLOs for AI Student Support",
    description:
      "A guardrail pack for AI-enabled support that preserves human connection, well-being, escalation, equity, and mentor visibility.",
    eyebrow: "Build order 06 · AI and human connection",
    headline: "AI support must reduce friction without increasing isolation.",
    intro:
      "The site already governs AI authority and security. This page governs the student experience: when AI supports, when it escalates, when humans remain visible, and how the institution knows the tool is helping rather than quietly distancing students.",
    image: "/wgu/visuals/ai-native-hero.webp",
    imageAlt:
      "AI support path with human connection checkpoints, escalation routes, and student trust measures",
    accent: "amber",
    primaryLink: {
      href: "/wgu/ai-native",
      label: "Open AI-native test",
    },
    sections: [
      {
        eyebrow: "Experience SLOs",
        title: "Measure connection as an operating property.",
        body:
          "If AI handles more interactions, the system needs explicit measures that human support remains available, trusted, and effective. Otherwise efficiency can hide abandonment.",
        cards: [
          {
            title: "Human reachability",
            text: "A student can reach the right human path from any AI-supported flow without starting over or re-explaining context.",
          },
          {
            title: "Escalation freshness",
            text: "When an AI escalates, the human receives current context, reason, risk signals, and what the student already tried.",
          },
          {
            title: "Connection preservation",
            text: "Mentors can see AI-supported interactions that matter to their relationship, with student consent and role-appropriate detail.",
          },
          {
            title: "Well-being signal",
            text: "AI support has a clear handoff path for distress, confusion, isolation, repeated failure, or requests outside its scope.",
          },
        ],
      },
      {
        eyebrow: "Boundaries",
        title: "The agent helps; the institution remains responsible.",
        body:
          "AI can explain, summarize, remind, route, draft, and prepare. It cannot become the accountable owner of a student relationship, an appeal, a credential decision, or an aid determination.",
        cards: [
          {
            title: "No relationship laundering",
            text: "The presence of an AI interaction never counts as mentor contact, instructor engagement, or substantive human support by itself.",
          },
          {
            title: "No dark personalization",
            text: "Students can understand why a support action was suggested and can opt out where policy permits.",
          },
          {
            title: "No silent automation",
            text: "Every AI action that changes a student's path creates notice, actor, reason, and audit trail.",
          },
          {
            title: "No unowned queue",
            text: "If an agent creates or triages work, a named human owner remains accountable for queue behavior and escalation quality.",
          },
        ],
      },
    ],
    checks: [
      "Can students reach a human from every AI support path?",
      "Does AI interaction context travel to the human without rework?",
      "Are mentor relationships strengthened rather than hidden behind automation?",
      "Are well-being, confusion, and repeated failure escalation paths tested?",
      "Does every AI support metric pair efficiency with trust and equity?",
    ],
    sourceNote:
      "Grounded in the local AI security work and WGU Labs' public 2025 reporting on AI support, student optimism, well-being concerns, and the priority of human connection.",
  },
  "academic-integrity-regulatory-seams": {
    slug: "academic-integrity-regulatory-seams",
    title: "Academic Integrity and Regulatory Seams",
    metadataTitle: "Academic Integrity and Regulatory Seams",
    description:
      "A WGU-specific seam map for accreditation, Title IV, assessment integrity, proctoring, appeals, accessibility, privacy, and academic-record trust.",
    eyebrow: "Build order 07 · academic trust",
    headline: "Academic trust fails at the seams between policy, evidence, and action.",
    intro:
      "FERPA and security are necessary, not sufficient. A student system also touches accreditation evidence, regular and substantive interaction, assessment integrity, appeals, accessibility, proctoring, state authorization, and transcript credibility.",
    image: "/wgu/visuals/engineering-standards-hero.webp",
    imageAlt:
      "Academic integrity control plane connecting assessments, records, policy, evidence, and accreditation review",
    accent: "magenta",
    primaryLink: {
      href: "/wgu/engineering-standards",
      label: "Open engineering standards",
    },
    sections: [
      {
        eyebrow: "Regulatory seams",
        title: "Treat compliance handoffs as first-class architecture.",
        body:
          "Regulatory work often fails because the policy is correct but the evidence path is not. The system must show what happened, who acted, what policy applied, and what the student could see or appeal.",
        cards: [
          {
            title: "Title IV and aid",
            text: "Aid status, eligibility inputs, counseling, disbursement, warnings, and appeals must carry purpose, owner, clock, and audit.",
          },
          {
            title: "Regular and substantive interaction",
            text: "Human support interactions need evidence without turning every contact into surveillance or replacing substantive support with AI.",
          },
          {
            title: "Accreditation evidence",
            text: "Learning outcomes, rubric changes, evaluator process, and credential claims need replayable evidence to the time of decision.",
          },
          {
            title: "State and program obligations",
            text: "Licensure, clinical, proctoring, background, and state-specific constraints must be modeled as policy, not side spreadsheets.",
          },
        ],
      },
      {
        eyebrow: "Integrity seams",
        title: "Protect the credibility of demonstrated mastery.",
        body:
          "WGU's model depends on credible assessment. The architecture should help prove that mastery was demonstrated fairly, evaluated appropriately, and recorded without hidden mutation.",
        cards: [
          {
            title: "Evaluator independence",
            text: "Double-blind evaluation is enforced by access controls, not local convention. AI assists can improve consistency but cannot certify competence.",
          },
          {
            title: "Assessment provenance",
            text: "Submissions, rubric versions, evaluator actions, originality checks, proctoring events, and corrections form one evidence trail.",
          },
          {
            title: "Appeal path",
            text: "Students can challenge consequential academic outcomes through visible, timed, owned, and auditable workflows.",
          },
          {
            title: "Accessibility and accommodation",
            text: "Accommodation facts are purpose-limited, tightly scoped, and visible only to roles that must act on them.",
          },
        ],
      },
    ],
    checks: [
      "Can an auditor replay what policy applied at the time?",
      "Can a student see and appeal consequential academic state?",
      "Does assessment evidence preserve privacy and evaluator independence?",
      "Are accommodations modeled as governed access, not informal notes?",
      "Does AI assist assessment without becoming the certifier?",
    ],
    sourceNote:
      "Grounded in WGU's competency-based assessment model, the local Competency Ledger design, and the trust pack's FERPA, purpose, and action-tier rules.",
  },
  "engineering-platform": {
    slug: "engineering-platform",
    title: "Engineering Platform and Agentic Delivery System",
    metadataTitle: "Engineering Platform and Agentic Delivery System",
    description:
      "A software-engineering organization and platform strategy for improving engineer efficiency with paved roads, AI tools, agentic workflows, and the Harnessing the Horse discipline.",
    eyebrow: "Build order 08 · engineering organization",
    headline: "Optimize engineering throughput by turning discipline into equipment.",
    intro:
      "The architecture will only move at institutional speed if engineers get a better paved road. AI tools and agentic engineering can accelerate the work, but only when Scope, Prove, Enforce, and Communicate become team equipment rather than personal willpower.",
    image: "/wgu/visuals/engineering-standards-hero.webp",
    imageAlt:
      "Engineering platform with AI-assisted development lanes, proof gates, contract registry, and team operating controls",
    accent: "signal",
    primaryLink: {
      href: "/blog/reference/13-the-harness-in-ten-minutes",
      label: "Open Harness talk",
    },
    sections: [
      {
        eyebrow: "Platform optimization",
        title: "Engineer efficiency is a system property.",
        body:
          "The goal is not merely faster typing. The goal is shorter path from intent to verified change: fewer repeated setup steps, clearer contracts, safer agent delegation, better tests, and less review fatigue.",
        cards: [
          {
            title: "Golden paths",
            text: "Repo templates, service scaffolds, event contracts, auth patterns, observability, and deployment rules are productized by the platform team.",
          },
          {
            title: "Contract registry",
            text: "Events, APIs, tools, prompts, evals, and agent actions are registered with owners, risk tier, descriptions, and compatibility checks.",
          },
          {
            title: "Proof-first workflow",
            text: "Acceptance criteria, tests, evals, or replay checks exist before non-trivial agent generation begins.",
          },
          {
            title: "Review-load control",
            text: "AI-generated volume is throttled by verification capacity. Human review budget is an SLO, not an afterthought.",
          },
        ],
      },
      {
        eyebrow: "Harness discipline",
        title: "Use the horse; build the harness.",
        body:
          "Harnessing the Horse translates directly into engineering-platform policy. Every agentic workflow needs scope, proof, enforcement, and communication receipts.",
        cards: [
          {
            title: "Scope",
            text: "Two-sentence intent, small verifiable work units, repo-level context, and anti-patterns with reasons.",
          },
          {
            title: "Prove",
            text: "Tests, static checks, model evals, replay verification, and acceptance scripts lead the generation instead of chasing it.",
          },
          {
            title: "Enforce",
            text: "CI, policy checks, required artifacts, tool registry rules, and action-tier gates block undisciplined output.",
          },
          {
            title: "Communicate",
            text: "Every agent-assisted change carries a receipt: prompt intent, assumptions, generated scope, verification evidence, and human owner.",
          },
        ],
      },
      {
        eyebrow: "Organization design",
        title: "The platform team serves engineers without owning their business logic.",
        body:
          "A healthy platform reduces cognitive load for stream teams while preserving domain ownership. It measures adoption by pull, path time, defect escape, and engineer confidence.",
        cards: [
          {
            title: "Developer experience SLO",
            text: "Time to scaffold, test, deploy, register an event, add a tool, and replay a projection are measured and improved quarterly.",
          },
          {
            title: "Agent delegation filter",
            text: "Boilerplate, tests, docs, and refactors are low risk. Core domain models, records, APIs, and security-sensitive paths remain human-owned.",
          },
          {
            title: "Skill-building loop",
            text: "Engineers practice prompt intent, test design, threat modeling, and review of generated code through guild sessions and kata nights.",
          },
          {
            title: "Individual growth",
            text: "The highest-value engineer becomes better at specifying, proving, and governing work, not merely faster at accepting generated code.",
          },
        ],
      },
    ],
    checks: [
      "Can any AI-assisted PR state intent in two sentences?",
      "Does a repo-level context file include conventions and anti-patterns?",
      "Did proof exist before generation on non-trivial work?",
      "What machinery blocks unsafe or unverified agent output?",
      "Is there a written delegation filter for each engineering domain?",
      "Are developer-experience SLOs measured as carefully as production SLOs?",
    ],
    sourceNote:
      "Grounded in the adjacent Harnessing the Horse repository, the Harness in Ten Minutes talk, the local engineering standards page, and the agentic security gap analysis.",
  },
} satisfies Record<string, WguStrategyPage>;

