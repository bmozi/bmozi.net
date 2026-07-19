import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type Step = {
  label: string;
  detail: string;
  tone?: "signal" | "amber" | "magenta" | "muted";
};

type Visual =
  | {
      kind: "flow";
      title: string;
      eyebrow: string;
      caption: string;
      steps: Step[];
      aside?: string;
    }
  | {
      kind: "matrix";
      title: string;
      eyebrow: string;
      caption: string;
      rows: { label: string; cells: string[] }[];
      headers: string[];
    }
  | {
      kind: "image";
      title: string;
      eyebrow: string;
      caption: string;
      src: string;
      alt: string;
    };

const toneStyles = {
  signal: {
    border: "border-[var(--signal)]",
    text: "text-[var(--signal)]",
    background: "bg-[rgba(25,214,197,0.1)]",
  },
  amber: {
    border: "border-[var(--amber)]",
    text: "text-[var(--amber)]",
    background: "bg-[rgba(242,184,75,0.12)]",
  },
  magenta: {
    border: "border-[var(--magenta)]",
    text: "text-[var(--magenta)]",
    background: "bg-[rgba(255,79,216,0.1)]",
  },
  muted: {
    border: "border-white/20",
    text: "text-white/65",
    background: "bg-white/[0.045]",
  },
} as const;

const visuals: Record<string, Visual> = {
  "seam-four-crossings": {
    kind: "flow",
    eyebrow: "Seam Map",
    title: "A seam is governed when all four crossings are owned.",
    caption:
      "The failure rarely lives inside one box. It lives where identity, state, ownership, and promises cross boundaries without a named rule.",
    steps: [
      {
        label: "Identity",
        detail: "Who is this person across tools?",
        tone: "signal",
      },
      {
        label: "State",
        detail: "What changed, and who heard it?",
        tone: "amber",
      },
      {
        label: "Ownership",
        detail: "Who owns the item right now?",
        tone: "magenta",
      },
      {
        label: "Promise",
        detail: "What clock is running?",
        tone: "signal",
      },
    ],
    aside: "Ungoverned seam: everyone did their part; nobody owns the crossing.",
  },
  "silent-change-alarm": {
    kind: "flow",
    eyebrow: "Continuity Control",
    title: "A consequential change must leave a governed trace.",
    caption:
      "The source of record can change, but it cannot change silently. A missing event is not cleanup work; it is an incident.",
    steps: [
      { label: "Source Change", detail: "Official state mutates", tone: "amber" },
      { label: "Outbox Fact", detail: "Event written in the same boundary", tone: "signal" },
      { label: "Projection", detail: "Timeline, queue, and SLA update", tone: "muted" },
      { label: "Detector", detail: "Delta without event pages the owner", tone: "magenta" },
    ],
    aside: "No silent transitions.",
  },
  "event-circulation": {
    kind: "flow",
    eyebrow: "Event Architecture",
    title: "Events circulate facts; they are not the source of truth.",
    caption:
      "Systems of record stay sovereign. Events make the fact travel to views, alerts, AI policy, and analytics without pretending the stream is the database.",
    steps: [
      { label: "System of Record", detail: "Read-your-writes truth", tone: "amber" },
      { label: "Outbox", detail: "Fact exits the boundary", tone: "signal" },
      { label: "Backbone", detail: "Circulation, not command", tone: "muted" },
      { label: "Projection", detail: "Purpose-built view", tone: "signal" },
      { label: "Audit", detail: "Replay proves behavior", tone: "magenta" },
    ],
    aside: "Truth stays boring. Movement gets governed.",
  },
  "queue-owner-clock": {
    kind: "flow",
    eyebrow: "Queue Invariant",
    title: "No queue item exists without owner, clock, and escalation.",
    caption:
      "A backlog is not a queue until each item has accountable state. Ownerless work is where trust disappears.",
    steps: [
      { label: "Item", detail: "Durable ID at arrival", tone: "muted" },
      { label: "Owner", detail: "Named accountable human or team", tone: "signal" },
      { label: "Clock", detail: "SLA age visible to everyone", tone: "amber" },
      { label: "Escalation", detail: "Breach creates a new event", tone: "magenta" },
    ],
    aside: "A queue with no owner is just a hiding place.",
  },
  "slice-funding-loop": {
    kind: "flow",
    eyebrow: "Funding Loop",
    title: "Fund the next slice with evidence from the last one.",
    caption:
      "A thin production slice earns the next slice by retiring one complaint class, proving replay, and showing measurable movement.",
    steps: [
      { label: "Thin Slice", detail: "One workflow, one promise", tone: "signal" },
      { label: "Proof", detail: "Live behavior and replay", tone: "amber" },
      { label: "Retire Pain", detail: "Complaint class reduced", tone: "magenta" },
      { label: "Next Slice", detail: "Funding follows evidence", tone: "signal" },
    ],
    aside: "Never one budget cycle from worthless.",
  },
  "ai-review-intent-seam": {
    kind: "flow",
    eyebrow: "AI Review Boundary",
    title: "AI can inspect implementation; intent still needs an owner.",
    caption:
      "Generated code, tests, and reviews can agree with each other while all missing the same wrong requirement. The seam moved up to the truth of the spec.",
    steps: [
      { label: "Prompt", detail: "Instruction and context", tone: "muted" },
      { label: "Code", detail: "Generated implementation", tone: "signal" },
      { label: "Verifier", detail: "Tests and AI review", tone: "amber" },
      { label: "Intent", detail: "Human-owned truth boundary", tone: "magenta" },
    ],
    aside: "Verification moved; it did not disappear.",
  },
  "delegation-chain": {
    kind: "flow",
    eyebrow: "Authority Flow",
    title: "Delegation must narrow as it moves.",
    caption:
      "Agent chains are safest when every hop is attenuated by purpose, audience, tool, action tier, expiry, and revocation.",
    steps: [
      { label: "Human", detail: "Original accountable principal", tone: "signal" },
      { label: "Token", detail: "Purpose and expiry signed", tone: "amber" },
      { label: "Agent Hop", detail: "Scope narrowed again", tone: "muted" },
      { label: "Tool", detail: "Typed action, no ambient authority", tone: "magenta" },
    ],
    aside: "The chain is the object to govern.",
  },
  "outbox-correctness": {
    kind: "flow",
    eyebrow: "Reliability Pattern",
    title: "The outbox makes the local commit and the published fact inseparable.",
    caption:
      "Exactly-once is the wrong promise. The useful promise is: the state change and the fact to publish are committed together, then consumers are idempotent.",
    steps: [
      { label: "Command", detail: "Validate and authorize", tone: "muted" },
      { label: "Transaction", detail: "Write state plus outbox", tone: "signal" },
      { label: "Publisher", detail: "Retry until acknowledged", tone: "amber" },
      { label: "Consumer", detail: "Deduplicate by event ID", tone: "magenta" },
    ],
    aside: "At-least-once delivery. Exactly-once effect.",
  },
  "idempotency-boundary": {
    kind: "flow",
    eyebrow: "Idempotency",
    title: "The key protects the whole effect, not just the retry.",
    caption:
      "A retry flag is local optimism. A design stance records the intended effect, external calls, and final response behind one durable key.",
    steps: [
      { label: "Request Key", detail: "Caller intent is stable", tone: "signal" },
      { label: "Effect Ledger", detail: "Work is reserved once", tone: "amber" },
      { label: "External Edge", detail: "Side effects guarded", tone: "magenta" },
      { label: "Same Answer", detail: "Replay returns the result", tone: "muted" },
    ],
    aside: "Idempotency is where retries meet money, records, and trust.",
  },
  "hash-chain-ledger": {
    kind: "flow",
    eyebrow: "Tamper Evidence",
    title: "Each record carries the shadow of the record before it.",
    caption:
      "A hash chain does not prevent every bad act. It changes the argument by making alteration detectable, drillable, and reportable.",
    steps: [
      { label: "Entry A", detail: "Payload hash", tone: "signal" },
      { label: "Entry B", detail: "Previous hash included", tone: "signal" },
      { label: "Anchor", detail: "Checkpoint outside the app", tone: "amber" },
      { label: "Verifier", detail: "Continuous chain walk", tone: "magenta" },
    ],
    aside: "The proof is the rehearsal log.",
  },
  "pii-by-reference": {
    kind: "flow",
    eyebrow: "Privacy Architecture",
    title: "Permanent records point at PII; they do not carry it.",
    caption:
      "Events and ledgers keep stable references. The restricted vault owns the sensitive values, retention rules, erasure drill, and access audit.",
    steps: [
      { label: "PII Vault", detail: "Restricted raw values", tone: "magenta" },
      { label: "Reference", detail: "Stable opaque pointer", tone: "signal" },
      { label: "Event", detail: "Business fact without raw PII", tone: "amber" },
      { label: "Deletion Drill", detail: "Residue hunt proves removal", tone: "muted" },
    ],
    aside: "Privacy is easier when permanence does not mean replication.",
  },
  "purpose-on-wire": {
    kind: "flow",
    eyebrow: "Purpose-Bound Access",
    title: "The reason for access travels with the request.",
    caption:
      "Identity answers who. Purpose answers why now. Policy needs both at the moment a request crosses a sensitive boundary.",
    steps: [
      { label: "Actor", detail: "Known identity", tone: "signal" },
      { label: "Purpose", detail: "Reason on this request", tone: "amber" },
      { label: "Policy Gate", detail: "Allow, deny, or step up", tone: "magenta" },
      { label: "Audit", detail: "Decision recorded with context", tone: "muted" },
    ],
    aside: "Access without purpose is ambient authority.",
  },
  "org-equipment": {
    kind: "matrix",
    eyebrow: "Organization Design",
    title: "The org chart is equipment when it changes flow behavior.",
    caption:
      "The useful question is not whether the boxes look modern. It is whether the structure improves interfaces, ownership, review quality, and response time.",
    headers: ["Question", "Healthy signal", "Failure signal"],
    rows: [
      {
        label: "Interface",
        cells: ["Teams know the contract", "Handoffs happen by folklore"],
      },
      {
        label: "Ownership",
        cells: ["Every queue has a named owner", "Groups absorb accountability"],
      },
      {
        label: "Review",
        cells: ["Decisions get prosecuted early", "Escalation is the first review"],
      },
      {
        label: "Load",
        cells: ["Capacity changes are visible", "Heroics hide demand"],
      },
    ],
  },
  "dashboard-comic": {
    kind: "image",
    eyebrow: "Visual Break",
    title: "All dashboards green. One work item gone.",
    caption:
      "The old joke is funny because it is usually true: every local surface can be healthy while the student or customer falls between them.",
    src: "/blog/illustrations/all-dashboards-green.webp",
    alt: "Three green status dashboards on separate system islands while a document packet falls into an unowned gap between them",
  },
};

function FlowGraphic({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-7 overflow-x-auto pb-2">
      <div
        className="grid min-w-[46rem] grid-cols-[repeat(var(--step-count),minmax(0,1fr))] gap-3"
        style={{ "--step-count": steps.length } as CSSProperties}
      >
        {steps.map((step, index) => {
          const tone = toneStyles[step.tone ?? "muted"];
          return (
            <div key={step.label} className="relative">
              {index < steps.length - 1 ? (
                <span className="absolute left-[calc(100%-0.25rem)] top-7 z-0 h-px w-4 bg-white/25" />
              ) : null}
              <div
                className={`relative z-10 h-full border ${tone.border} ${tone.background} p-4`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-8 w-8 place-items-center border ${tone.border} bg-black/35 font-mono text-xs ${tone.text}`}
                  >
                    {index + 1}
                  </span>
                  <h4 className="font-display text-lg font-black leading-tight text-white">
                    {step.label}
                  </h4>
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MatrixGraphic({
  visual,
}: {
  visual: Extract<Visual, { kind: "matrix" }>;
}) {
  return (
    <div className="mt-7 overflow-x-auto">
      <table className="min-w-[42rem] w-full border-collapse text-sm">
        <thead>
          <tr>
            {visual.headers.map((header) => (
              <th
                key={header}
                className="border border-white/12 bg-white/[0.06] px-4 py-3 text-left font-mono text-xs uppercase text-[var(--amber)]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visual.rows.map((row) => (
            <tr key={row.label}>
              <th className="border border-white/12 px-4 py-3 text-left font-display text-base text-white">
                {row.label}
              </th>
              {row.cells.map((cell, index) => (
                <td
                  key={cell}
                  className={`border border-white/12 px-4 py-3 leading-6 ${
                    index === 0 ? "text-[var(--signal)]" : "text-[var(--soft)]"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleVisualFrame({
  visual,
  children,
}: {
  visual: Visual;
  children: ReactNode;
}) {
  return (
    <figure className="my-10 overflow-hidden border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.065),rgba(255,255,255,0.02))] shadow-[10px_10px_0_rgba(25,214,197,0.08)]">
      <div className="border-b border-white/10 px-5 py-4 sm:px-6">
        <p className="font-mono text-xs uppercase text-[var(--signal)]">
          {visual.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-2xl font-black leading-tight text-white">
          {visual.title}
        </h3>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-[var(--soft)] sm:px-6">
        {visual.caption}
      </figcaption>
    </figure>
  );
}

export function ArticleVisual({ slug }: { slug: string }) {
  const visual = visuals[slug];

  if (!visual) {
    return null;
  }

  if (visual.kind === "image") {
    return (
      <ArticleVisualFrame visual={visual}>
        <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-black/30">
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            unoptimized
            sizes="(min-width: 1024px) 720px, calc(100vw - 40px)"
            className="object-cover"
          />
        </div>
      </ArticleVisualFrame>
    );
  }

  if (visual.kind === "matrix") {
    return (
      <ArticleVisualFrame visual={visual}>
        <MatrixGraphic visual={visual} />
      </ArticleVisualFrame>
    );
  }

  return (
    <ArticleVisualFrame visual={visual}>
      <FlowGraphic steps={visual.steps} />
      {visual.aside ? (
        <p className="mt-5 border-l-2 border-[var(--magenta)] pl-4 font-mono text-xs uppercase leading-5 text-white/70">
          {visual.aside}
        </p>
      ) : null}
    </ArticleVisualFrame>
  );
}
