/*
 * Inline SVG diagrams for the Architecture v2 page.
 * Colors use the site CSS variables so they inherit the theme.
 */

const ink = "#0a0d11";
const paper = "#e8eef2";
const signal = "#19d6c5";
const magenta = "#ff4fd8";
const amber = "#f2b84b";

export function V2TargetDiagram() {
  const experiences = [
    ["Student App", "journey status · submissions", "live SoR reads"],
    ["Mentor Workspace", "cohort momentum", "commitments visible"],
    ["Instructor View", "blockers", "readiness"],
    ["Ops Console", "cases", "owners · SLA timers"],
    ["Front Door", "resilient SSO", "login SLO · RUM"],
  ];

  const records = [
    ["SIS", "legal student record", "enrollment · records", "outbox / CDC"],
    ["CRM", "engagement record", "interactions · cases", "outbox / CDC"],
    ["LMS / Courseware", "learning delivery", "Caliper-shaped events", "outbox / CDC"],
    ["Aid & Finance", "aid packaging · billing", "aid.status.changed", "outbox / CDC"],
    [
      "Competency Ledger",
      "the one event-sourced context",
      "attempts · masteries · interventions",
      "append-only · PII by reference",
    ],
  ];

  const products = [
    [
      "Student Timeline Product",
      "Flagship governed projection of the whole journey. Role-scoped views expose lifecycle events, owners, SLA timers, escalation, and context for humans and agents.",
    ],
    [
      "Domain Data Products",
      "Enrollment, aid, learning, and support products with explicit contracts, named owners, SLAs, and federation only where regulation demands it.",
    ],
    [
      "Lakehouse",
      "Analytical system of record for lineage, efficacy research, accreditation, and grounded retrieval over governed data.",
    ],
  ];

  const Card = ({
    title,
    lines,
    accent = "border-l-[var(--signal)]",
  }: {
    title: string;
    lines: string[];
    accent?: string;
  }) => (
    <article
      className={`min-h-28 border border-white/12 bg-white/[0.035] p-4 ${accent}`}
    >
      <h3 className="font-display text-lg font-black leading-tight text-white">
        {title}
      </h3>
      <div className="mt-3 space-y-1 font-mono text-[0.72rem] leading-5 text-[var(--soft)]">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );

  return (
    <div
      role="img"
      aria-label="Architecture v2 target diagram: experiences and front door on top; sovereign systems of record publishing intent-shaped events via outbox and CDC onto an event backbone that is circulation, not truth; one event-sourced competency ledger with PII by reference; the Student Timeline as a governed data product with role-scoped views; the lakehouse as analytical truth; a single governed agent gateway; and a thin identity and policy layer spanning everything, with read-your-writes paths for anything a student acts on."
      className="space-y-5 bg-[var(--ink)] p-4 sm:p-6 lg:p-8"
    >
      <div className="flex flex-wrap gap-2 font-mono text-[0.68rem] uppercase text-white/55">
        <span className="border border-[var(--amber)]/45 px-2 py-1 text-[var(--amber)]">
          Amber = authority / command paths
        </span>
        <span className="border border-[var(--signal)]/45 px-2 py-1 text-[var(--signal)]">
          Teal = projected context
        </span>
        <span className="border border-[var(--magenta)]/45 px-2 py-1 text-[var(--magenta)]">
          Magenta = policy / agent boundary
        </span>
      </div>

      <section>
        <p className="mb-3 font-mono text-xs uppercase text-[var(--amber)]">
          Experiences · read-your-writes for anything a student acts on
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {experiences.map(([title, ...lines], index) => (
            <Card
              key={title}
              title={title}
              lines={lines}
              accent={
                index === experiences.length - 1
                  ? "border-l-[var(--magenta)]"
                  : "border-l-[var(--signal)]"
              }
            />
          ))}
        </div>
      </section>

      <div className="grid gap-3 lg:grid-cols-[1fr_0.82fr]">
        <div className="border border-[var(--amber)]/55 bg-[rgba(242,184,75,0.08)] p-4">
          <p className="font-display text-xl font-black text-white">
            Student actions read live system-of-record state.
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
            Projections provide journey context, but submissions, status
            changes, aid movement, and consequential actions read through to the
            sovereign source before the student or agent acts.
          </p>
        </div>
        <div className="border border-[var(--signal)]/55 bg-[rgba(25,214,197,0.08)] p-4">
          <p className="font-display text-xl font-black text-white">
            Timeline views carry context, not command authority.
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
            The flagship product makes lifecycle, owner, SLA, and escalation
            state visible without becoming a shadow record.
          </p>
        </div>
      </div>

      <section>
        <p className="mb-3 font-mono text-xs uppercase text-[var(--amber)]">
          Sovereign systems of record · CRUD + history · outbox/CDC at every seam
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {records.map(([title, ...lines], index) => (
            <Card
              key={title}
              title={title}
              lines={lines}
              accent={
                index === records.length - 1
                  ? "border-l-[var(--magenta)]"
                  : "border-l-[var(--amber)]"
              }
            />
          ))}
        </div>
      </section>

      <section className="border border-[var(--signal)] bg-[rgba(25,214,197,0.06)] p-5 text-center">
        <p className="font-display text-2xl font-black text-[var(--signal)]">
          Event Backbone — circulation, not truth
        </p>
        <p className="mx-auto mt-2 max-w-5xl font-mono text-xs leading-6 text-[var(--soft)]">
          intent-shaped domain events · document.received · case.assigned ·
          startdate.changed · competency.mastered · replayable transport ·
          rebuildable from sources
        </p>
      </section>

      <section>
        <p className="mb-3 font-mono text-xs uppercase text-[var(--amber)]">
          Governed data products · contracts · named owners · one central platform
        </p>
        <div className="grid gap-3 lg:grid-cols-[1.15fr_0.9fr_0.9fr]">
          {products.map(([title, text]) => (
            <article
              key={title}
              className="border border-white/12 border-l-[var(--signal)] bg-white/[0.035] p-5"
            >
              <h3 className="font-display text-xl font-black leading-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-[0.75fr_1.5fr_0.75fr] lg:items-stretch">
        <div className="border border-[var(--signal)]/45 bg-[rgba(25,214,197,0.06)] p-4">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            governed context
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
            Timeline and product context is passed down to tools as bounded
            evidence, never as blanket authority.
          </p>
        </div>
        <div className="border border-[var(--magenta)] bg-[rgba(255,79,216,0.06)] p-5">
          <h3 className="font-display text-2xl font-black text-white">
            Governed Agent Gateway — one front door for AI action
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
            Scoped tools, never raw credentials. Per-action authorization,
            delegated authority with purpose, human review on consequential or
            irreversible actions, and full audit for who acted, on whose
            authority, against which data, why, and with what result.
          </p>
          <p className="mt-4 border-t border-white/10 pt-4 font-mono text-xs text-[var(--amber)]">
            Commands route back to the system of record. They never write to
            the log or the timeline as if either were truth.
          </p>
        </div>
        <div className="border border-[var(--signal)]/45 bg-[rgba(25,214,197,0.06)] p-4">
          <p className="font-mono text-xs uppercase text-[var(--signal)]">
            grounded retrieval
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--soft)]">
            Analytical claims ground in governed lakehouse data with lineage and
            purpose-aware access controls.
          </p>
        </div>
      </section>

      <section className="border border-[var(--magenta)] bg-[rgba(255,79,216,0.055)] p-5 text-center">
        <p className="font-display text-xl font-black text-[var(--magenta)]">
          Thin Identity & Policy Layer — governs the seams, and nothing else
        </p>
        <p className="mx-auto mt-2 max-w-5xl font-mono text-xs leading-6 text-[var(--soft)]">
          managed workload identity · one policy engine · central authoring ·
          local enforcement · one correlation and purpose ID end to end ·
          immutable audit
        </p>
      </section>

      <section className="border border-[var(--amber)] bg-[rgba(242,184,75,0.055)] p-5 text-center">
        <p className="font-display text-xl font-black text-[var(--amber)]">
          Reliability is architecture
        </p>
        <p className="mx-auto mt-2 max-w-5xl font-mono text-xs leading-6 text-[var(--soft)]">
          login-success SLO · availability and latency error budgets · real-user
          monitoring · graceful degradation · reviewed like a Key Result
        </p>
      </section>
    </div>
  );
}

export function Slice1Diagram() {
  const laneY = [70, 170, 270, 370, 470];
  const laneLabels = [
    "Student",
    "Records SoR (SIS)",
    "Event Backbone",
    "Student Timeline Product",
    "Accountable Owner / Ops",
  ];
  return (
    <svg
      viewBox="0 0 1400 560"
      role="img"
      aria-label="Slice 1 lighthouse sequence: a student uploads a transcript; the records system of record stores it, writes an audit entry, and emits a document.received event through its outbox; the event flows over the backbone into the Student Timeline projection; the student immediately sees received status, the named owner, and the expected timeline; if the SLA timer breaches, a case.aging.breached event escalates to the accountable owner."
      className="h-auto w-full"
    >
      <defs>
        <marker
          id="s1arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={signal} />
        </marker>
      </defs>
      <rect x={0} y={0} width={1400} height={560} fill={ink} />

      {laneLabels.map((label, i) => (
        <g key={label}>
          <text
            x={24}
            y={laneY[i] + 4}
            fill={amber}
            fontSize={12.5}
            fontWeight={700}
            fontFamily="var(--font-space-grotesk), sans-serif"
          >
            {label}
          </text>
          <line
            x1={230}
            y1={laneY[i]}
            x2={1376}
            y2={laneY[i]}
            stroke="rgba(255,255,255,0.14)"
            strokeWidth={1}
          />
        </g>
      ))}

      {/* steps */}
      {[
        { x: 260, from: 0, to: 1, label: "1 · uploads transcript" },
        { x: 470, from: 1, to: 1, label: "2 · store + immutable audit entry", self: true },
        { x: 640, from: 1, to: 2, label: "3 · outbox → document.received" },
        { x: 850, from: 2, to: 3, label: "4 · projection updates" },
        { x: 1040, from: 3, to: 0, label: "5 · status: received · owner · ETA" },
        { x: 1210, from: 3, to: 4, label: "6 · SLA breach → escalation", color: magenta },
      ].map((s) => (
        <g key={s.label}>
          {s.self ? (
            <>
              <circle cx={s.x} cy={laneY[s.from]} r={7} fill={signal} />
            </>
          ) : (
            <line
              x1={s.x}
              y1={laneY[s.from]}
              x2={s.x}
              y2={laneY[s.to]}
              stroke={s.color ?? signal}
              strokeWidth={1.6}
              markerEnd="url(#s1arrow)"
            />
          )}
          <text
            x={s.x}
            y={Math.min(laneY[s.from], laneY[s.to]) - 12}
            fill={s.color ?? paper}
            fontSize={11.5}
            textAnchor="middle"
            fontFamily="var(--font-ibm-plex-mono), monospace"
          >
            {s.label}
          </text>
        </g>
      ))}

      <text
        x={24}
        y={532}
        fill="rgba(255,255,255,0.45)"
        fontSize={11}
        fontFamily="var(--font-ibm-plex-mono), monospace"
      >
        one black hole, provably gone: the student can always see what they sent, where it is, who owns it, and what happens next — measured by
        black-hole rate, case-resolution time, and silent-change incidents
      </text>
    </svg>
  );
}
