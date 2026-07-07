/*
 * Inline SVG diagrams for the Architecture v2 page.
 * Colors use the site CSS variables so they inherit the theme.
 */

const ink = "#0a0d11";
const paper = "#e8eef2";
const soft = "#bac6ce";
const signal = "#19d6c5";
const magenta = "#ff4fd8";
const amber = "#f2b84b";
const boxFill = "rgba(255,255,255,0.04)";
const boxStroke = "rgba(255,255,255,0.18)";

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines?: string[];
  accent?: string;
  dashed?: boolean;
};

function Box({ x, y, w, h, title, lines = [], accent = signal, dashed }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={boxFill}
        stroke={boxStroke}
        strokeWidth={1}
        strokeDasharray={dashed ? "5 4" : undefined}
      />
      <rect x={x} y={y} width={4} height={h} fill={accent} opacity={0.9} />
      <text
        x={x + 14}
        y={y + 22}
        fill={paper}
        fontSize={14}
        fontWeight={700}
        fontFamily="var(--font-space-grotesk), sans-serif"
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + 14}
          y={y + 42 + i * 16}
          fill={soft}
          fontSize={11.5}
          fontFamily="var(--font-ibm-plex-mono), monospace"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function Band({
  x,
  y,
  w,
  h,
  title,
  subtitle,
  accent,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={boxFill}
        stroke={accent}
        strokeWidth={1.2}
      />
      <text
        x={x + w / 2}
        y={y + 24}
        fill={accent}
        fontSize={14}
        fontWeight={700}
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), sans-serif"
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + 44}
        fill={soft}
        fontSize={11.5}
        textAnchor="middle"
        fontFamily="var(--font-ibm-plex-mono), monospace"
      >
        {subtitle}
      </text>
    </g>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  color = soft,
  dashed,
  label,
  labelDx = 8,
  labelDy = -6,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  dashed?: boolean;
  label?: string;
  labelDx?: number;
  labelDy?: number;
}) {
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={1.4}
        strokeDasharray={dashed ? "6 4" : undefined}
        markerEnd="url(#v2arrow)"
      />
      {label ? (
        <text
          x={(x1 + x2) / 2 + labelDx}
          y={(y1 + y2) / 2 + labelDy}
          fill={color}
          fontSize={10.5}
          fontFamily="var(--font-ibm-plex-mono), monospace"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

export function V2TargetDiagram() {
  return (
    <svg
      viewBox="0 0 1400 1010"
      role="img"
      aria-label="Architecture v2 target diagram: experiences and front door on top; sovereign systems of record publishing intent-shaped events via outbox and CDC onto an event backbone that is circulation, not truth; one event-sourced competency ledger with PII by reference; the Student Timeline as a governed data product with role-scoped views; the lakehouse as analytical truth; a single governed agent gateway; and a thin identity and policy layer spanning everything, with read-your-writes paths for anything a student acts on."
      className="h-auto w-full"
    >
      <defs>
        <marker
          id="v2arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={soft} />
        </marker>
      </defs>

      <rect x={0} y={0} width={1400} height={1010} fill={ink} />

      {/* Row A: experiences + front door */}
      <text x={24} y={30} fill={amber} fontSize={12} fontFamily="var(--font-ibm-plex-mono), monospace">
        EXPERIENCES · READ-YOUR-WRITES FOR ANYTHING A STUDENT ACTS ON
      </text>
      <Box x={24} y={44} w={250} h={78} title="Student App" lines={["journey status · submissions", "acts on live SoR state"]} accent={signal} />
      <Box x={290} y={44} w={250} h={78} title="Mentor Workspace" lines={["cohort momentum · context", "commitments visible"]} accent={signal} />
      <Box x={556} y={44} w={250} h={78} title="Instructor View" lines={["blockers · readiness"]} accent={signal} />
      <Box x={822} y={44} w={250} h={78} title="Ops Console" lines={["cases · owners · SLA timers"]} accent={signal} />
      <Box
        x={1088}
        y={44}
        w={288}
        h={78}
        title="Front Door"
        lines={["resilient SSO · login SLO", "RUM · graceful degradation"]}
        accent={magenta}
      />

      {/* Row B: systems of record + competency ledger */}
      <text x={24} y={190} fill={amber} fontSize={12} fontFamily="var(--font-ibm-plex-mono), monospace">
        SOVEREIGN SYSTEMS OF RECORD · CRUD + HISTORY · OUTBOX/CDC AT EVERY SEAM
      </text>
      <Box x={24} y={204} w={236} h={96} title="SIS" lines={["legal student record", "enrollment · records", "→ outbox / CDC"]} accent={amber} />
      <Box x={276} y={204} w={236} h={96} title="CRM" lines={["engagement record", "interactions · cases", "→ outbox / CDC"]} accent={amber} />
      <Box x={528} y={204} w={236} h={96} title="LMS / Courseware" lines={["learning delivery", "Caliper-shaped events", "→ outbox / CDC"]} accent={amber} />
      <Box x={780} y={204} w={236} h={96} title="Aid & Finance" lines={["aid packaging · billing", "aid.status.changed", "→ outbox / CDC"]} accent={amber} />
      <Box
        x={1064}
        y={204}
        w={312}
        h={96}
        title="Competency Ledger"
        lines={["the ONE event-sourced context", "attempts · masteries · interventions", "append-only · PII by reference"]}
        accent={magenta}
      />

      {/* arrows SoR -> bus */}
      <Arrow x1={142} y1={300} x2={142} y2={356} />
      <Arrow x1={394} y1={300} x2={394} y2={356} />
      <Arrow x1={646} y1={300} x2={646} y2={356} />
      <Arrow x1={898} y1={300} x2={898} y2={356} />
      <Arrow x1={1220} y1={300} x2={1220} y2={356} label="ledger events" labelDx={-150} labelDy={30} />

      {/* Row C: event backbone */}
      <Band
        x={24}
        y={358}
        w={1352}
        h={58}
        title="Event Backbone — circulation, not truth"
        subtitle="intent-shaped domain events · document.received · case.assigned · startdate.changed · competency.mastered · replayable transport, rebuildable from sources"
        accent={signal}
      />

      {/* arrows bus -> products */}
      <Arrow x1={300} y1={416} x2={300} y2={470} />
      <Arrow x1={800} y1={416} x2={800} y2={470} />
      <Arrow x1={1180} y1={416} x2={1180} y2={470} />

      {/* Row D: products */}
      <text x={24} y={462} fill={amber} fontSize={12} fontFamily="var(--font-ibm-plex-mono), monospace">
        GOVERNED DATA PRODUCTS · CONTRACTS · NAMED OWNERS · ONE CENTRAL PLATFORM
      </text>
      <Box
        x={24}
        y={472}
        w={552}
        h={118}
        title="Student Timeline Product  ★ flagship"
        lines={[
          "near-real-time projection of the whole journey",
          "role-scoped views: student · mentor · instructor · ops",
          "lifecycle events first-class: owner · SLA · escalation",
          "context for humans and agents — never the command path",
        ]}
        accent={signal}
      />
      <Box
        x={600}
        y={472}
        w={368}
        h={118}
        title="Domain Data Products"
        lines={[
          "enrollment · aid · learning · support",
          "explicit contracts + SLAs",
          "federated governance only where",
          "regulation demands it",
        ]}
        accent={signal}
      />
      <Box
        x={992}
        y={472}
        w={384}
        h={118}
        title="Lakehouse"
        lines={[
          "analytical system of record",
          "open table format · lineage",
          "efficacy research · accreditation",
          "grounding for AI over governed data",
        ]}
        accent={signal}
      />

      {/* read paths from experiences */}
      <Arrow x1={149} y1={122} x2={149} y2={200} color={amber} label="read-your-writes" labelDx={10} labelDy={4} />
      <Arrow x1={415} y1={122} x2={300} y2={470} color={signal} dashed label="timeline views" labelDx={-114} labelDy={-150} />

      {/* Row E: agent gateway */}
      <Arrow x1={300} y1={590} x2={300} y2={648} dashed color={signal} label="governed context" labelDx={10} labelDy={4} />
      <Arrow x1={1180} y1={590} x2={1180} y2={648} dashed color={signal} label="grounded retrieval" labelDx={10} labelDy={4} />

      <Box
        x={24}
        y={650}
        w={1352}
        h={108}
        title="Governed Agent Gateway — the ONE front door for AI action"
        lines={[
          "scoped tools, never raw credentials · per-action authorization · on-behalf-of delegation with purpose · human-in-the-loop on anything consequential or irreversible",
          "agents treated as prompt-injectable by default: capability scoping · blast-radius limits · private data, untrusted input and exfiltration paths kept structurally apart",
          "every action audited: who · on whose authority · to which data · why · result        →  a second production agent is what earns the mesh",
        ]}
        accent={magenta}
      />

      {/* command path from gateway back to SoRs */}
      <Arrow x1={700} y1={650} x2={700} y2={598} color={amber} />
      <Arrow x1={700} y1={598} x2={700} y2={420} color={amber} />
      <Arrow x1={700} y1={420} x2={700} y2={304} color={amber} label="commands → SoR (never the log)" labelDx={12} labelDy={-88} />

      {/* Row F: identity & policy */}
      <Band
        x={24}
        y={790}
        w={1352}
        h={58}
        title="Thin Identity & Policy Layer — governs the seams, and nothing else"
        subtitle="managed workload identity · one policy engine, authored centrally, enforced locally · one correlation + purpose ID end to end · immutable audit"
        accent={magenta}
      />

      {/* Row G: SLO strip */}
      <Band
        x={24}
        y={872}
        w={1352}
        h={58}
        title="Reliability is architecture"
        subtitle="login-success SLO · availability + latency error budgets · real-user monitoring · graceful degradation — reviewed like a Key Result"
        accent={amber}
      />

      <text
        x={24}
        y={972}
        fill="rgba(255,255,255,0.45)"
        fontSize={11}
        fontFamily="var(--font-ibm-plex-mono), monospace"
      >
        solid amber = authoritative / command paths · dashed teal = projected context paths · truth lives in the systems of record (operational) and the
        lakehouse (analytical); the backbone and timeline are rebuildable
      </text>
    </svg>
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
