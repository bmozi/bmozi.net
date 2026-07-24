export type PracticeLabIcon =
  | "briefcase"
  | "map"
  | "dashboard"
  | "route"
  | "chart"
  | "casebook"
  | "messages"
  | "users";

export type PracticeLabItem = {
  label: string;
  text: string;
};

export type PracticeLabPage = {
  slug: string;
  order: number;
  icon: PracticeLabIcon;
  label: string;
  title: string;
  eyebrow: string;
  signature: string;
  image: string;
  imageAlt: string;
  summary: string;
  why: string;
  promise: string;
  operatingFrame: PracticeLabItem[];
  artifacts: PracticeLabItem[];
  drills: PracticeLabItem[];
  selfAudit: string[];
  diagramTitle: string;
  diagramSteps: PracticeLabItem[];
};

export const practiceLabPages: PracticeLabPage[] = [
  {
    slug: "executive-briefing-room",
    order: 1,
    icon: "briefcase",
    label: "Executive Briefing Room",
    title: "Brief the room that funds the work.",
    eyebrow: "Priority 1 · executive translation",
    signature:
      "Architecture becomes leadership when mission, money, risk, and time fit on one page.",
    image: "/wgu/practice-lab/executive-briefing-room.webp",
    imageAlt:
      "Executive decision room with architecture, mission, risk, and timing briefs connected to an investment map",
    summary:
      "A rehearsal space for converting architecture into executive decision material. The goal is not to sound less technical; it is to make the technical truth usable by the people who fund, sequence, sponsor, and defend the work.",
    why:
      "Enterprise architects lose influence when they bring architecture-shaped artifacts into money-and-mission rooms. This page trains the translation layer: the same decision, expressed for provost, CFO, CIO, counsel, registrar, and board altitude without changing the underlying truth.",
    promise:
      "Every major architecture argument can be delivered in three sentences with no technology nouns, then defended with evidence when the room asks for depth.",
    operatingFrame: [
      {
        label: "Mission line",
        text: "Start with the student or institutional outcome. If the first sentence could be true at any company, it is not ready for this room.",
      },
      {
        label: "Money line",
        text: "Name cost, avoided waste, option value, persistence economics, or capacity unlocked. Do not let value stay qualitative when the decision is financial.",
      },
      {
        label: "Risk line",
        text: "Translate architectural risk into institutional risk: audit exposure, student trust, outage blast radius, vendor lock-in, or decision latency.",
      },
      {
        label: "Ask line",
        text: "Close with the decision needed now: fund, sequence, stop, sponsor, unblock, or accept a named risk.",
      },
    ],
    artifacts: [
      {
        label: "One-page provost brief",
        text: "Outcome, student failure mode, intervention, leading indicator, guardrail, and what leadership must protect.",
      },
      {
        label: "CFO translation sheet",
        text: "Run cost, avoided rework, option value, persistence sensitivity, and the explicit cost of doing nothing.",
      },
      {
        label: "CIO pressure brief",
        text: "System boundary, integration pattern, operational risk, reuse posture, and the engineering decision that needs air cover.",
      },
      {
        label: "Board altitude narrative",
        text: "Why this work matters, why now, why this sequence, what evidence will prove it, and how failure will be contained.",
      },
    ],
    drills: [
      {
        label: "No technology nouns",
        text: "Explain the current top initiative in three sentences without saying event, API, CRM, SIS, data, platform, or AI.",
      },
      {
        label: "CFO objection",
        text: "The CFO says the program is too expensive. Answer with one number, one risk, one option, and one reversible next step.",
      },
      {
        label: "Executive impatience",
        text: "A sponsor wants the whole transformation at once. Defend the first slice without sounding small.",
      },
    ],
    selfAudit: [
      "Can the executive repeat the decision in their own words after five minutes?",
      "Did the brief name what changes for students this term, not someday?",
      "Did the numbers expose assumptions instead of hiding behind precision?",
      "Did the ask fit the authority of the room?",
    ],
    diagramTitle: "The executive translation stack",
    diagramSteps: [
      {
        label: "Architecture fact",
        text: "What is technically true about the system, boundary, tradeoff, or failure mode.",
      },
      {
        label: "Institutional consequence",
        text: "What that fact does to students, risk, capacity, money, trust, or time.",
      },
      {
        label: "Decision needed",
        text: "The concrete leadership action required now, with the smallest evidence-producing step attached.",
      },
    ],
  },
  {
    slug: "stakeholder-atlas",
    order: 2,
    icon: "map",
    label: "Stakeholder Atlas",
    title: "Map the people before you move the system.",
    eyebrow: "Priority 2 · influence terrain",
    signature:
      "Influence starts when each partner can see their own risk, value, and dignity in the architecture.",
    image: "/wgu/practice-lab/stakeholder-atlas.webp",
    imageAlt:
      "Stakeholder influence atlas with institutional nodes around a student-centered continuity path",
    summary:
      "A structured map of who must trust the work, what each group values, what each group fears, and what the architecture can offer before it asks. This is the influence counterpart to the system boundary.",
    why:
      "Enterprise architecture is usually cross-boundary work without command authority. The stakeholder map prevents the common failure of treating departments as boxes on a diagram instead of decision communities with currencies, constraints, and histories.",
    promise:
      "No proposal moves forward until the people affected by it have been mapped as decision partners, not implementation dependencies.",
    operatingFrame: [
      {
        label: "Currency",
        text: "Name what each stakeholder values: time back, risk reduction, clearer ownership, fewer escalations, funding confidence, or student trust.",
      },
      {
        label: "Fear",
        text: "Name what the work could cost them: loss of control, public exposure, more work, missed compliance detail, or blame for historical seams.",
      },
      {
        label: "Gift before ask",
        text: "Offer something useful before asking for alignment: a clearer map, a solved ambiguity, a risk surfaced early, or a decision made easier.",
      },
      {
        label: "Room design",
        text: "Decide who needs a 1:1, who needs a working session, who needs an executive brief, and who should never be surprised in public.",
      },
    ],
    artifacts: [
      {
        label: "Stakeholder card",
        text: "Role, decision rights, currency, fears, current pain, likely objection, trust move, and first question.",
      },
      {
        label: "Influence heat map",
        text: "High-support, low-support, high-authority, and high-impact groups with next relationship action attached.",
      },
      {
        label: "Objection ledger",
        text: "Every serious objection written in the strongest fair form, with the evidence that would change the answer.",
      },
      {
        label: "Partner promise list",
        text: "The commitments architecture makes to each partner so adoption is earned rather than requested.",
      },
    ],
    drills: [
      {
        label: "Registrar lens",
        text: "Present the same slice as record integrity and audit confidence, not as event projection.",
      },
      {
        label: "Mentor lens",
        text: "Present the same slice as time back for student conversations, not as operational telemetry.",
      },
      {
        label: "Engineering lens",
        text: "Present the same slice as fewer brittle handoffs and cleaner ownership, not as governance.",
      },
    ],
    selfAudit: [
      "Whose work gets harder before it gets better?",
      "Who can quietly stall this without ever saying no?",
      "Who has been asked to trust architecture before and regretted it?",
      "What useful artifact can this person receive before I ask for anything?",
    ],
    diagramTitle: "The stakeholder trust loop",
    diagramSteps: [
      {
        label: "Listen",
        text: "Capture the stakeholder's words, constraints, fears, and success measures.",
      },
      {
        label: "Translate",
        text: "Express the architecture in their currency without diluting the technical truth.",
      },
      {
        label: "Return value",
        text: "Give back a clearer decision, reduced risk, or solved ambiguity before asking for commitment.",
      },
    ],
  },
  {
    slug: "architects-operating-system",
    order: 3,
    icon: "dashboard",
    label: "The Architect's Operating System",
    title: "Run the role, not just the architecture.",
    eyebrow: "Priority 3 · personal command center",
    signature:
      "The job is too ambiguous to survive on memory, mood, or calendar gravity.",
    image: "/wgu/practice-lab/architects-operating-system.webp",
    imageAlt:
      "Enterprise architect operating system workbench with cadence board, decision cards, ledgers, and feedback loops",
    summary:
      "A weekly system for managing judgment, relationships, open decisions, risks, artifacts, and learning loops. It turns the mastery curriculum into something that runs without requiring heroic attention every day.",
    why:
      "Enterprise architects often fail by becoming meeting routers. This operating system makes the work inspectable: what decisions are open, what predictions are pending, what stakeholders need attention, what risks are growing, and what evidence changed your mind.",
    promise:
      "At any point, you can show what you are deciding, who you are serving, what you believe, what could prove you wrong, and what would keep operating if you went silent.",
    operatingFrame: [
      {
        label: "Daily capture",
        text: "One line for significant judgments, open risks, stakeholder signals, and claims that could later be scored.",
      },
      {
        label: "Weekly review",
        text: "Resolve closed predictions, inspect open decisions, choose the most important relationship move, and name the adaptive challenge of the week.",
      },
      {
        label: "Monthly calibration",
        text: "Review misses, run one case or rehearsal, update the stakeholder atlas, and retire stale work.",
      },
      {
        label: "Quarterly prosecution",
        text: "Run the fired-EA checklist, score the six-month test, and publish what changed because evidence corrected you.",
      },
    ],
    artifacts: [
      {
        label: "Monday check-in",
        text: "One-page operating review: priorities, decisions, stakeholder moves, risks, predictions, and the question of the week.",
      },
      {
        label: "Decision journal",
        text: "ADR-style entries with prediction clauses and review dates, so reality can grade the decision.",
      },
      {
        label: "Influence ledger",
        text: "Evidence that thinking is moving without you: adopted language, reused artifacts, decisions made in your absence.",
      },
      {
        label: "Absence inventory",
        text: "Artifacts, rituals, and people that would keep architectural judgment alive for six months without your attendance.",
      },
    ],
    drills: [
      {
        label: "Calendar altitude audit",
        text: "Classify every meeting this week as executive, partner, engineering, student evidence, or solitary synthesis. Fix altitude imbalance.",
      },
      {
        label: "Prediction cleanup",
        text: "Find three vague beliefs and rewrite them as probability, date, and observable outcome.",
      },
      {
        label: "Delete one ritual",
        text: "Name one meeting or artifact that no longer changes decisions. Retire or redesign it.",
      },
    ],
    selfAudit: [
      "What did I learn this week that changed a position?",
      "What decision is pretending to be alignment work?",
      "What relationship has gone quiet and should not have?",
      "What artifact would still help if I were not in the room?",
    ],
    diagramTitle: "The weekly operating loop",
    diagramSteps: [
      {
        label: "Capture",
        text: "Record judgments, signals, risks, and open decisions while they are fresh.",
      },
      {
        label: "Review",
        text: "Convert raw notes into priorities, predictions, stakeholder moves, and decision work.",
      },
      {
        label: "Prove",
        text: "Ship one artifact, one relationship move, or one decision improvement that can survive inspection.",
      },
    ],
  },
  {
    slug: "governance-without-tollbooths",
    order: 4,
    icon: "route",
    label: "Governance Without Tollbooths",
    title: "Replace gates with decision clarity.",
    eyebrow: "Priority 4 · decision rights",
    signature:
      "Good governance makes the right path easier, not the architect harder to avoid.",
    image: "/wgu/practice-lab/governance-without-tollbooths.webp",
    imageAlt:
      "Federated governance board with decision cards moving through open advisory lanes and policy checkpoints",
    summary:
      "A playbook for deciding who decides, who advises, when architecture can block, when it must only recommend, and how exceptions move without turning the practice into a tollbooth.",
    why:
      "Architecture teams often earn resentment by confusing review authority with decision authority. This page makes the authority model explicit, so governance becomes a service that improves decisions rather than a ceremony that delays them.",
    promise:
      "No team waits on architecture unless a named, pre-agreed risk boundary has been crossed.",
    operatingFrame: [
      {
        label: "Decision owner",
        text: "Every decision names the person or body that owns the call. Architecture can advise strongly without stealing ownership.",
      },
      {
        label: "Consulted parties",
        text: "The right partners are consulted before commitment, especially where data, policy, student experience, or operations are affected.",
      },
      {
        label: "Block conditions",
        text: "Architecture can block only for explicit non-negotiables: student harm, regulatory exposure, security breach, irreversible record corruption, or unowned operational risk.",
      },
      {
        label: "Exception path",
        text: "Exceptions are allowed when recorded with owner, reason, expiry, compensating control, and review date.",
      },
    ],
    artifacts: [
      {
        label: "Decision-rights matrix",
        text: "For each decision class: owner, architecture role, required consults, evidence needed, and escalation path.",
      },
      {
        label: "ADR lifecycle",
        text: "Proposed, reviewed, accepted, superseded, expired, or reversed - with no hidden approval state.",
      },
      {
        label: "Exception register",
        text: "All deviations with reason, owner, expiry, risk accepted, and the date the exception must die or be renewed.",
      },
      {
        label: "Review-as-service SLA",
        text: "Architecture response time commitments so teams know review is a reliable service, not a discretionary favor.",
      },
    ],
    drills: [
      {
        label: "Strong advice, no theft",
        text: "Tell a team their design carries major risk while preserving their ownership of the decision.",
      },
      {
        label: "Real block",
        text: "Practice blocking only when the published boundary is crossed. Name the boundary, consequence, and fastest recovery path.",
      },
      {
        label: "Expired exception",
        text: "A temporary exception became permanent. Reopen it without blame and force a decision.",
      },
    ],
    selfAudit: [
      "Did anyone wait for architecture because the process was unclear?",
      "Did architecture veto something without a published boundary?",
      "Are exceptions expiring, or are they becoming undocumented architecture?",
      "Is review demand voluntary because it helps?",
    ],
    diagramTitle: "The no-tollbooth decision path",
    diagramSteps: [
      {
        label: "Classify",
        text: "Identify the decision type and its owner before discussing the answer.",
      },
      {
        label: "Advise",
        text: "Bring tradeoffs, policy, standards, risks, and comparable cases to the owner.",
      },
      {
        label: "Record",
        text: "Write the decision, dissent, exception, expiry, and evidence trigger so the organization can learn.",
      },
    ],
  },
  {
    slug: "portfolio-investment-lab",
    order: 5,
    icon: "chart",
    label: "Portfolio & Investment Lab",
    title: "Turn architecture into portfolio choices.",
    eyebrow: "Priority 5 · sequencing and funding",
    signature:
      "A roadmap is a financial argument with outcomes, decisions, dependencies, risk, and proof attached.",
    image: "/wgu/practice-lab/portfolio-investment-lab.webp",
    imageAlt:
      "Architecture portfolio investment board with capability slices, funding tokens, dependencies, and outcome gauges",
    summary:
      "A lab for ranking slices, tracing work from institutional intent to execution, pricing option value, defining kill criteria, and making quarterly investment choices that connect architecture to mission economics and institutional capacity.",
    why:
      "Enterprise architecture earns strategic influence when it shapes what the organization funds, pauses, sequences, and stops. This page converts technical dependency thinking into portfolio discipline.",
    promise:
      "Every proposed slice has a student outcome, an institutional value case, dependency logic, evidence target, and stop rule.",
    operatingFrame: [
      {
        label: "Trace before fund",
        text: "Can this work walk from Key Result to product outcome to requirement to ADR to architecture delta to measured result?",
      },
      {
        label: "Student value",
        text: "What named student pain does this reduce, and how soon would a student feel the difference?",
      },
      {
        label: "Institutional value",
        text: "What cost, risk, capacity, persistence, compliance, or decision-quality lever does it move?",
      },
      {
        label: "Option value",
        text: "What future choices does the slice keep open or make cheaper? What choices would it foreclose?",
      },
      {
        label: "Evidence gate",
        text: "What result would earn expansion, force revision, or stop the work before sunk-cost gravity takes over?",
      },
    ],
    artifacts: [
      {
        label: "Vision-to-work trace",
        text: "Key Result, product outcome, initiative, product owner, architecture owner, evidence, requirement, ADRs, factory package, metric, guardrail, and review date.",
      },
      {
        label: "Slice scorecard",
        text: "Student pain, owner, dependency, cost range, leading metric, guardrail, evidence date, and decision rule.",
      },
      {
        label: "Fund-pause-stop rubric",
        text: "A visible rule for whether each investment grows, waits, or ends after the evidence review.",
      },
      {
        label: "Capability investment map",
        text: "Capabilities by build/buy posture, maturity, value, risk, and strategic differentiation.",
      },
      {
        label: "Quarterly portfolio memo",
        text: "What changed, what proved out, what got cheaper, what got riskier, and what leadership should decide next.",
      },
    ],
    drills: [
      {
        label: "OKR-to-PR walk",
        text: "Pick one active project and trace it from institutional result to the pull request or software-factory task. Stop at the first missing owner or receipt.",
      },
      {
        label: "Kill your favorite slice",
        text: "Write the evidence that would make you stop the slice you like most. If none exists, it is faith, not strategy.",
      },
      {
        label: "Two good choices",
        text: "Compare two valuable investments and explain which waits without pretending the waiting option is bad.",
      },
      {
        label: "Dependency challenge",
        text: "A team says a large platform must come first. Find the smallest evidence-producing path that does not require the whole platform.",
      },
    ],
    selfAudit: [
      "Can finance see the value path without a translator?",
      "Can engineering see why the sequence is technically honest?",
      "Can student-facing partners see what improves first?",
      "Can the software-factory work package prove its upstream intent?",
      "Does every expansion have earned evidence?",
    ],
    diagramTitle: "The investment decision loop",
    diagramSteps: [
      {
        label: "Propose",
        text: "Frame the slice by student pain, capability value, cost range, and dependency claim.",
      },
      {
        label: "Measure",
        text: "Run the smallest useful proof with paired outcome and guardrail metrics.",
      },
      {
        label: "Decide",
        text: "Fund, pause, stop, or re-sequence based on evidence, not narrative momentum.",
      },
    ],
  },
  {
    slug: "architects-casebook",
    order: 6,
    icon: "casebook",
    label: "The Architect's Casebook",
    title: "Train judgment on cases, not slogans.",
    eyebrow: "Practice 6 · scenario library",
    signature:
      "The architect gets better when hard calls become reusable case law.",
    image: "/wgu/practice-lab/architects-casebook.webp",
    imageAlt:
      "Enterprise architecture casebook with decision records, evidence exhibits, diagrams, and outcome markers",
    summary:
      "A reusable case library for vendor pressure, ownership disputes, AI risk, migration scope, policy exceptions, and executive tradeoffs. Each case records the facts, options, hard part, decision, and follow-up evidence.",
    why:
      "Tacit judgment is hard to teach directly. Cases make it visible: what mattered, what was tempting, what weak architecture would have done, and what evidence eventually graded the call.",
    promise:
      "Every serious decision becomes a future training case once enough evidence exists to learn from it.",
    operatingFrame: [
      {
        label: "Facts",
        text: "Record what was known, unknown, disputed, and time-sensitive before interpretation starts.",
      },
      {
        label: "Options",
        text: "Name at least three viable paths, including the politically easy one and the technically clean one.",
      },
      {
        label: "Hard part",
        text: "State why smart people disagree. If the case has no real tension, it is not a case.",
      },
      {
        label: "Follow-up",
        text: "Attach the evidence date and what would prove the decision right, wrong, or merely lucky.",
      },
    ],
    artifacts: [
      {
        label: "Case template",
        text: "Scenario, facts, parties, options, weak move, strong move, decision, prediction, and review date.",
      },
      {
        label: "Case index",
        text: "Cases tagged by decision type: vendor, data, policy, AI, funding, operations, ownership, and migration.",
      },
      {
        label: "Comparison notes",
        text: "What a novice saw, what a senior saw, what the evidence showed later, and what changed in practice.",
      },
      {
        label: "Case rounds",
        text: "A recurring review where one case is argued before the outcome is revealed.",
      },
    ],
    drills: [
      {
        label: "Vendor already does it",
        text: "The vendor claims the platform has the capability. Decide what must be tested before accepting the claim.",
      },
      {
        label: "Data ownership fight",
        text: "Two departments use the same word differently and both claim truth. Draw the boundary without declaring a loser.",
      },
      {
        label: "Scope creep with sponsor pressure",
        text: "A sponsor asks to add one more system to the migration. Answer with case evidence, not stubbornness.",
      },
    ],
    selfAudit: [
      "Did the case preserve the uncertainty that existed at the time?",
      "Can another architect learn from the reasoning without needing the author present?",
      "Did the follow-up evidence change policy, standards, or a future decision?",
      "Are we only writing victory cases?",
    ],
    diagramTitle: "The reusable case arc",
    diagramSteps: [
      {
        label: "Capture",
        text: "Record the scenario while uncertainty and tradeoffs are still visible.",
      },
      {
        label: "Argue",
        text: "Compare options and name the weak-but-tempting path before deciding.",
      },
      {
        label: "Teach",
        text: "Revisit after evidence arrives and turn the case into reusable judgment.",
      },
    ],
  },
  {
    slug: "influence-rehearsals",
    order: 7,
    icon: "messages",
    label: "Influence Rehearsals",
    title: "Practice the rooms before they happen.",
    eyebrow: "Practice 7 · room readiness",
    signature:
      "The right answer is not enough if the room cannot receive it.",
    image: "/wgu/practice-lab/influence-rehearsals.webp",
    imageAlt:
      "Influence rehearsal table with scenario cards and branching response paths converging on a calm central route",
    summary:
      "A rehearsal system for high-stakes conversations: executive objections, team resistance, vendor claims, exception requests, and moments where a trusted partner is wrong in public.",
    why:
      "Influence is perishable under pressure. Rehearsal makes language available before status, surprise, or adrenaline narrows the response to defensiveness or over-explanation.",
    promise:
      "For the rooms that matter most, the first sentence is prepared, the evidence path is ready, and the relationship is protected.",
    operatingFrame: [
      {
        label: "Name the room",
        text: "Identify the decision altitude, authority, emotional stakes, and what the room needs to leave able to do.",
      },
      {
        label: "Prepare first sentence",
        text: "The opening sentence should lower threat, name the shared goal, and avoid premature technical defense.",
      },
      {
        label: "Hold the line",
        text: "Know the principle or risk boundary that cannot move, and the flexible path that can.",
      },
      {
        label: "Leave a next step",
        text: "Every difficult room exits with a concrete next action, owner, and evidence to gather.",
      },
    ],
    artifacts: [
      {
        label: "Room card",
        text: "Audience, decision, likely objection, shared value, first sentence, evidence path, and next step.",
      },
      {
        label: "Objection script bank",
        text: "Bad, better, and best responses to recurring objections, written in natural language.",
      },
      {
        label: "Principle line",
        text: "The non-negotiable principle named without sounding theatrical or moralizing.",
      },
      {
        label: "After-action note",
        text: "What landed, what missed, what was misunderstood, and what to change before the next room.",
      },
    ],
    drills: [
      {
        label: "Architecture is slowing us down",
        text: "Respond by naming the speed architecture protects, the current friction, and the service-level fix.",
      },
      {
        label: "Skip the slice",
        text: "A sponsor wants the big program now. Defend evidence-first sequencing without sounding timid.",
      },
      {
        label: "Trusted partner is wrong",
        text: "Correct the claim in public while preserving dignity and forward motion.",
      },
    ],
    selfAudit: [
      "Did I answer the emotional concern before the technical objection?",
      "Did I preserve the relationship while protecting the boundary?",
      "Did the room leave with a decision or only a better explanation?",
      "What sentence should I have prepared?",
    ],
    diagramTitle: "The rehearsal path",
    diagramSteps: [
      {
        label: "Anticipate",
        text: "Write the objection in the strongest fair form before the meeting.",
      },
      {
        label: "Respond",
        text: "Use shared value, evidence, boundary, and next step in that order.",
      },
      {
        label: "Learn",
        text: "Capture what the room actually heard and revise the script bank.",
      },
    ],
  },
  {
    slug: "build-the-bench",
    order: 8,
    icon: "users",
    label: "Build the Bench",
    title: "Make architectural judgment ambient.",
    eyebrow: "Practice 8 · leadership multiplication",
    signature:
      "The strongest architect is the one whose judgment keeps operating through other people.",
    image: "/wgu/practice-lab/build-the-bench.webp",
    imageAlt:
      "Architecture guild workroom with shared model, distributed ownership tokens, and progression cards",
    summary:
      "A practical extension of the guild plan: how to identify future architects, coach through real work, hand off rituals, distribute language ownership, and measure whether judgment is spreading.",
    why:
      "An enterprise architect who remains the sole carrier of the reasoning has not built an enterprise capability. Bench-building converts individual influence into institutional muscle.",
    promise:
      "By design, every useful ritual, artifact, and vocabulary term gets a path to non-founder ownership.",
    operatingFrame: [
      {
        label: "Find inclination",
        text: "Look for people who naturally ask boundary, ownership, risk, and student-impact questions before they have the title.",
      },
      {
        label: "Coach through work",
        text: "Use ADR rounds, design clinics, case reviews, and slice decisions as the development path. Avoid abstract mentoring detached from real stakes.",
      },
      {
        label: "Hand off healthy rituals",
        text: "Transfer ownership of rituals while they are working, not after they are stale or politically risky.",
      },
      {
        label: "Measure absence",
        text: "Track which decisions, reviews, and teaching moments happen well without you in the room.",
      },
    ],
    artifacts: [
      {
        label: "Bench map",
        text: "People, strengths, current evidence, next stretch opportunity, and what authority they can safely receive next.",
      },
      {
        label: "Ritual handoff plan",
        text: "For each ritual: current host, next host, co-host date, solo date, and quality signal.",
      },
      {
        label: "Competency evidence ladder",
        text: "First ADR, first review, first clinic, first case, first prosecution, first executive translation.",
      },
      {
        label: "Founder-gravity tripwires",
        text: "Signals that the practice is orbiting one person: all language attributed to one author, all hard decisions escalated, no non-me hosts.",
      },
    ],
    drills: [
      {
        label: "Give away the good room",
        text: "Choose one visible meeting someone else should lead while you attend only as support.",
      },
      {
        label: "Coach the question",
        text: "Turn a junior architect's weak answer into a stronger question rather than supplying your own answer.",
      },
      {
        label: "Credit transfer",
        text: "Practice naming the person who advanced the architecture, not the artifact you produced.",
      },
    ],
    selfAudit: [
      "Which ritual would degrade fastest if I stopped attending?",
      "Who has authored architectural reasoning that others now cite?",
      "What authority am I still holding because it is comfortable?",
      "What language has become ours, not mine?",
    ],
    diagramTitle: "The bench-building loop",
    diagramSteps: [
      {
        label: "Spot",
        text: "Notice people already practicing architectural judgment before the title catches up.",
      },
      {
        label: "Stretch",
        text: "Give real decision work with support, not artificial exercises with no consequence.",
      },
      {
        label: "Transfer",
        text: "Move rituals, language, and decision authority outward until the practice survives absence.",
      },
    ],
  },
];

export function getPracticeLabPage(slug: string) {
  return practiceLabPages.find((page) => page.slug === slug);
}

export function getPracticeLabParams() {
  return practiceLabPages.map((page) => ({ slug: page.slug }));
}
