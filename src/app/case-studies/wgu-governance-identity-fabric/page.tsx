import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Braces,
  Fingerprint,
  GitBranch,
  KeyRound,
  Languages,
  Layers3,
  Network,
  Radar,
  Repeat,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";

export const metadata: Metadata = {
  title: "Governance and Identity Fabric Thesis",
  description:
    "A BMOZI Technical discussion draft exploring a governance and identity fabric for service, data, and agent meshes in student personalization.",
  alternates: {
    canonical: "/case-studies/wgu-governance-identity-fabric",
  },
  openGraph: {
    title: "Governance and Identity Fabric | BMOZI Technical",
    description:
      "A discussion thesis for making service, data, and agent meshes interoperable through governed identity, policy, lineage, and local enforcement.",
    images: ["/brand/bmozi-ai-governance-hero.png"],
  },
};

const pillars = [
  {
    title: "Unified identity with delegation",
    text: "Every human, service, data product, and agent is a verifiable principal. Purpose and on-behalf-of delegation travel across the chain so an agent cannot act with more authority than the person or workflow that invoked it.",
    icon: Fingerprint,
  },
  {
    title: "Policy authored centrally, enforced locally",
    text: "One purpose-aware authorization model can be distributed to service sidecars, data-product gateways, and agent tool brokers. The fabric coordinates decisions without becoming a runtime chokepoint.",
    icon: ShieldCheck,
  },
  {
    title: "Contract and semantic registry",
    text: "APIs, events, data products, and agent tools need shared contracts and vocabulary. Student should mean the same thing to a service, projection, and governed AI tool.",
    icon: Braces,
  },
  {
    title: "End-to-end lineage and audit",
    text: "A correlation, causation, and purpose trail follows the interaction so the institution can answer who did what, on whose authority, against which data, and why.",
    icon: GitBranch,
  },
  {
    title: "Agent-specific trust controls",
    text: "Agents are probabilistic and prompt-injectable, so the fabric scopes tools, limits blast radius, requires human approval for high-impact actions, and structurally separates private data from exfiltration paths.",
    icon: Radar,
  },
];

const grammarPrinciples = [
  {
    tag: "1",
    title: "Domain-oriented ownership",
    text: "The teams that know a domain own its products end to end.",
  },
  {
    tag: "2",
    title: "X-as-a-product",
    text: "Every unit is discoverable, addressable, contracted, and held to SLOs — built for consumers, not for its producer.",
  },
  {
    tag: "3",
    title: "Self-serve platform",
    text: "A paved road lets domains produce and consume products without bespoke plumbing each time.",
  },
  {
    tag: "4",
    title: "Federated computational governance",
    text: "Global policies agreed centrally, computed and enforced locally at each product — so autonomy and interoperability coexist. This is the load-bearing beam.",
    beam: true,
  },
  {
    tag: "+1",
    title: "Observability and trust",
    text: "Lineage, quality, and audit are part of the model, not a bolt-on, so consumers can trust what they use.",
  },
];

const meshGrammarRows = [
  ["Domain ownership", "Domain-owned services", "Domain-owned data products (the USO)", "Domain-owned agents and tools"],
  ["X-as-a-product", "Service-as-a-product", "Data-as-a-product", "Tool-as-a-product"],
  ["Self-serve platform", "Sidecar and mesh control plane", "Data-product gateways and templates", "Tool broker and agent registry"],
  ["Federated governance", "Policy at the sidecar", "Policy at the data product", "Policy at the tool broker"],
  ["Observability and trust", "Traces and SLOs", "Lineage and data quality", "Injection, drift, blast-radius telemetry"],
];

const refinements = [
  {
    title: "The grammar is shared, but the agent dialect adds a clause",
    text: "All meshes follow the same principles at the level of principle — but agents are the outlier. Data-as-a-product never had to reason about a probabilistic, prompt-injectable consumer, which is exactly why agent-specific trust controls have no equivalent in the other meshes. The commonality is real; the risk lives in the difference.",
    icon: ShieldAlert,
  },
  {
    title: "Shared principles interoperate only if they share meaning",
    text: "Shared grammar without shared vocabulary produces meshes that agree on syntax while disagreeing on semantics — failing silently and expensively. The contract-and-semantic registry is what makes the commonality more than nominal, and it is quietly what makes federated governance computable across meshes at all.",
    icon: Languages,
  },
];

const lighthouseSteps = [
  "Delegated identity, on behalf of the student",
  "Purpose policy checked at access time",
  "A correlated lineage and audit event",
  "Human approval for high-impact actions",
  "Scoped tools, with blast radius contained",
];

const capabilityRows = [
  ["Workload and human-to-service identity", "Solvable now", "SPIFFE/SPIRE plus OAuth token exchange patterns."],
  ["Policy-as-code with local enforcement", "Solvable now", "OPA or Cedar enforced at sidecars, gateways, and tool brokers."],
  ["End-to-end lineage and audit", "Solvable now", "OpenTelemetry-style propagation extended with purpose and data/agent hops."],
  ["Agent identity and multi-hop delegation", "Frontier", "Buildable with token exchange and custom claims while standards mature."],
  ["Unified cross-plane semantics", "Frontier", "Contracts plus active ontology and governance work, not a one-time product install."],
  ["Prompt injection and probabilistic actors", "Contain only", "Sandbox, scope, approve, monitor, and break unsafe data/tool/input combinations."],
];

const receipts = [
  {
    title: "Sentinel",
    text: "A concrete AI trust layer pattern: agents reach systems through scoped, audited tools rather than raw vendor credentials.",
  },
  {
    title: "UCO services",
    text: "Domain-owned operational truth exposed through event streams, projections, contracts, and anti-corruption adapters.",
  },
  {
    title: "Merlin",
    text: "A governed software-factory pattern: quality gates, provenance, human review, and auditable delivery for AI-assisted engineering.",
  },
];

const roadmap = [
  ["0", "Lighthouse seam", "Tutor agent to Unified Student Object with identity, purpose, policy, lineage, and human approval."],
  ["1", "Paved road", "Self-serve identity issuance, policy SDKs, reusable audit hooks, and two or three more onboarded seams."],
  ["2", "Federated governance", "Domain-owned policies inside global guardrails, with shared contract and semantic registries."],
  ["3", "Agent mesh scale", "Agent registry, blast-radius controls, injection monitoring, drift telemetry, and lifecycle governance."],
];

const targetOptions = [
  "Thin federated overlay: the recommended core because it reuses existing mesh investment and keeps enforcement local.",
  "Portable identity spine: purpose-carrying identity tokens become the backbone for policy and audit decisions.",
  "Governance broker for high-risk agent traffic: the Sentinel pattern, kept off latency-critical hot paths.",
  "Policy at the data: student-data products enforce identity and purpose at access time.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Governance and Identity Fabric Thesis",
  description:
    "A discussion draft exploring a thin governance and identity fabric across service, data, and agent meshes.",
  author: {
    "@type": "Organization",
    name: "BMOZI",
  },
  publisher: {
    "@type": "Organization",
    name: "BMOZI",
  },
  url: "https://bmozi.net/case-studies/wgu-governance-identity-fabric",
};

export default function GovernanceIdentityFabricPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
        <header className="border-b border-white/10 bg-[rgba(10,13,17,0.86)]">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <Link href="/workspace" className="group inline-flex items-center gap-3">
              <BrandLockup markClassName="h-9 w-9" textClassName="text-lg" />
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/wgu"
                className="inline-flex h-10 items-center gap-2 border border-[var(--signal)] px-4 font-mono text-xs text-[var(--signal)] transition-colors hover:bg-[var(--signal)] hover:text-[var(--ink)]"
              >
                WGU Hub
              </Link>
              <Link
                href="/wgu/architecture-v2"
                className="hidden h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)] sm:inline-flex"
              >
                v2
              </Link>
              <Link
                href="/case-studies/wgu-unified-student-object"
                className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-xs text-white transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                USO
              </Link>
            </div>
          </nav>
        </header>

        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 -z-10 opacity-60">
            <Image
              src="/brand/bmozi-ai-governance-hero.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,13,17,0.92)_0%,rgba(10,13,17,0.72)_44%,rgba(10,13,17,0.4)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,13,17,0.72)_0%,rgba(10,13,17,0.08)_50%,rgba(10,13,17,0.42)_100%)]" />
          </div>

          <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-end gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.78fr]">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 border border-white/15 bg-black/25 px-3 py-2 font-mono text-xs uppercase text-[var(--signal)] backdrop-blur">
                <Waypoints size={16} aria-hidden="true" />
                Discussion draft / mesh-of-meshes study
              </p>
              <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] text-white">
                Governance and Identity Fabric
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--soft)]">
                A proposed control plane for the seams between service mesh,
                data mesh, and the emerging agent mesh.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Identity spine", "Purpose policy", "Auditable seams"].map(
                  (item) => (
                    <div
                      key={item}
                      className="border border-white/12 bg-white/[0.045] p-4 font-mono text-xs uppercase text-white backdrop-blur"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>

            <aside className="border border-[var(--signal)] bg-[rgba(11,15,19,0.82)] p-5 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Honest framing
              </p>
              <p className="mt-4 text-lg leading-8 text-white">
                This does not claim to originate WGU&apos;s mesh-of-meshes work
                or describe internal systems. It is a learning thesis and
                partnership proposal: a way to reason about the seams and offer
                a buildable path forward.
              </p>
            </aside>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                Thesis
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                The hard part is not the meshes. It is the seams.
              </h2>
            </div>
            <div className="border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]">
              <p className="text-xl leading-9">
                A mesh of meshes should not become a fourth mesh. It should be
                a thin governance-and-identity fabric that makes service, data,
                and agent meshes interoperable through governed interactions.
              </p>
              <p className="mt-5 text-lg leading-8 text-black/70">
                Every human, service, data, or agent call carries identity,
                delegation, purpose, a policy decision, and a correlated audit
                event. Governance is coordinated centrally and enforced locally.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--signal)]">
                  <Boxes size={15} aria-hidden="true" />
                  The shared grammar
                </p>
                <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                  One governance grammar: the 4 + 1 principles of data mesh.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--soft)]">
                What makes a mesh of meshes cohere is not a shared runtime but a
                shared governance grammar. These are principles, not a storage
                pattern — which is exactly what lets them travel beyond data.
              </p>
            </div>
            <div className="grid gap-3 lg:grid-cols-5">
              {grammarPrinciples.map((p) => (
                <article
                  key={p.title}
                  className={`min-h-72 border p-5 ${p.beam ? "border-[var(--amber)] bg-white/[0.05]" : "border-white/12 bg-white/[0.035]"}`}
                >
                  <div
                    className={`mb-6 inline-flex h-11 w-11 items-center justify-center border font-display text-xl font-black ${p.beam ? "border-[var(--amber)] text-[var(--amber)]" : "border-[var(--signal)] text-[var(--signal)]"}`}
                  >
                    {p.tag}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                    {p.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--magenta)]">
                <Network size={15} aria-hidden="true" />
                One grammar, three meshes
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                The same principle, in a domain-appropriate form.
              </h2>
              <p className="mt-6 leading-7 text-black/70">
                The principles apply to each mesh as an isomorphism, not a literal
                copy. This mapping is the heart of the thesis.
              </p>
            </div>
            <div className="overflow-hidden border border-black/10 bg-white">
              <div className="grid bg-black/[0.04] font-mono text-xs uppercase text-black/60 md:grid-cols-4">
                <div className="border-b border-black/10 p-4 md:border-r">
                  Principle
                </div>
                <div className="border-b border-black/10 p-4 md:border-r">
                  Service mesh
                </div>
                <div className="border-b border-black/10 p-4 md:border-r">
                  Data mesh
                </div>
                <div className="border-b border-black/10 p-4">Agent mesh</div>
              </div>
              {meshGrammarRows.map((row) => (
                <div
                  key={row[0]}
                  className="grid border-b border-black/10 last:border-b-0 md:grid-cols-4"
                >
                  <div className="p-4 font-display text-lg font-bold md:border-r md:border-black/10">
                    {row[0]}
                  </div>
                  <div className="p-4 text-sm leading-6 text-black/70 md:border-r md:border-black/10">
                    {row[1]}
                  </div>
                  <div className="p-4 text-sm leading-6 text-black/70 md:border-r md:border-black/10">
                    {row[2]}
                  </div>
                  <div className="p-4 text-sm leading-6 text-black/70">
                    {row[3]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-8 max-w-3xl">
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--amber)]">
                <Repeat size={15} aria-hidden="true" />
                The load-bearing idea
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-[0.95] text-white">
                The master mesh is federated computational governance applied
                recursively.
              </h2>
              <p className="mt-6 leading-8 text-[var(--soft)]">
                Four principles describe how each mesh is shaped. Only one operates
                across meshes — federated computational governance — and the fabric
                is that principle, instantiated for the seams. The same principle
                that federates data products into one data mesh, applied one level
                up, federates whole meshes into a mesh of meshes. It is fractal.
              </p>
            </div>
            <figure className="border border-white/12 bg-[rgba(10,13,17,0.6)]">
              <div className="overflow-x-auto">
                <Image
                  src="/brand/mesh-of-meshes-fabric.png"
                  alt="Three meshes — service, data, and agent — sharing one governance grammar, with the Unified Student Object as the shared data product and the governance and identity fabric governing the seams."
                  width={1720}
                  height={968}
                  sizes="(min-width: 1024px) 80vw, 100vw"
                  className="h-auto w-full min-w-[920px] max-w-none lg:min-w-0"
                />
              </div>
              <figcaption className="border-t border-white/10 px-5 py-3 font-mono text-xs uppercase text-[var(--soft)]">
                Three meshes, one grammar · the USO is the anchor data product ·
                the fabric governs the seams
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase text-[var(--signal)]">
                  Five pillars
                </p>
                <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                  A fabric that governs interaction, not ownership.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--soft)]">
                The design constraint is practical: centralize identity, policy,
                and telemetry; keep enforcement close to the workload, data
                product, or tool broker.
              </p>
            </div>
            <div className="grid gap-3 lg:grid-cols-5">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className="min-h-80 border border-white/12 bg-white/[0.035] p-5"
                  >
                    <Icon
                      className="mb-8 text-[var(--signal)]"
                      size={24}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-2xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[var(--soft)]">
                      {pillar.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Where the USO fits
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                The Unified Student Object is the anchor data product.
              </h2>
              <p className="mt-6 leading-8 text-[var(--soft)]">
                The USO is the highest-value node in the grammar — the canonical
                data product: domain-owned operational truth exposed as governed
                projections with contracts. It does not need to become mesh-aware.
                It needs only to be a well-formed product, governed at access time.
              </p>
            </div>
            <aside className="border border-[var(--signal)] bg-white/[0.035] p-6">
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                The lighthouse seam
              </p>
              <p className="mt-4 text-lg leading-8 text-white">
                A tutor or mentor agent reaching the USO through the fabric is the
                whole mesh of meshes in miniature:
              </p>
              <ul className="mt-5 grid gap-2">
                {lighthouseSteps.map((step) => (
                  <li key={step} className="flex gap-3 text-[var(--soft)]">
                    <Share2
                      className="mt-1 shrink-0 text-[var(--signal)]"
                      size={16}
                      aria-hidden="true"
                    />
                    <span className="leading-7">{step}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                Credibility map
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                Be precise about what is proven and what is frontier.
              </h2>
            </div>
            <div className="overflow-hidden border border-black/10 bg-white">
              <div className="grid bg-black/[0.04] font-mono text-xs uppercase text-black/60 md:grid-cols-[0.9fr_0.45fr_1.15fr]">
                <div className="border-b border-black/10 p-4 md:border-r">
                  Capability
                </div>
                <div className="border-b border-black/10 p-4 md:border-r">
                  Status
                </div>
                <div className="border-b border-black/10 p-4">What it takes</div>
              </div>
              {capabilityRows.map(([capability, status, detail]) => (
                <div
                  key={capability}
                  className="grid border-b border-black/10 last:border-b-0 md:grid-cols-[0.9fr_0.45fr_1.15fr]"
                >
                  <div className="p-4 font-display text-xl font-bold md:border-r md:border-black/10">
                    {capability}
                  </div>
                  <div className="p-4 font-mono text-xs uppercase text-[var(--magenta)] md:border-r md:border-black/10">
                    {status}
                  </div>
                  <div className="p-4 leading-7 text-black/70">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                WGU lighthouse
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                Prove the fabric on one student-personalization seam.
              </h2>
              <p className="mt-6 leading-7 text-[var(--soft)]">
                The most useful MVP is not a big-bang platform. It is one
                governed path: an AI tutor or mentor assistant reaching the
                Unified Student Object through delegated identity, purpose
                policy, lineage, and human approval.
              </p>
            </div>
            <div className="grid gap-3">
              {roadmap.map(([phase, title, text]) => (
                <article
                  key={phase}
                  className="grid gap-4 border border-white/12 bg-white/[0.035] p-5 sm:grid-cols-[4rem_1fr]"
                >
                  <div className="flex h-16 w-16 items-center justify-center border border-[var(--signal)] font-display text-3xl font-black text-[var(--signal)]">
                    {phase}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 leading-7 text-[var(--soft)]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                Two refinements
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                What keeps the thesis honest.
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {refinements.map((r) => {
                const Icon = r.icon;
                return (
                  <article
                    key={r.title}
                    className="border border-black/10 bg-white p-6 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
                  >
                    <Icon
                      className="mb-6 text-[var(--magenta)]"
                      size={22}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-2xl font-bold">
                      {r.title}
                    </h3>
                    <p className="mt-4 leading-7 text-black/70">{r.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--amber)]">
                Receipts
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                Ground the thesis in systems already built.
              </h2>
              <div className="mt-8 overflow-hidden border border-white/12 bg-white/[0.035]">
                <Image
                  src="/brand/bmozi-ai-governance-hero.png"
                  alt="Abstract governance control plane connecting agents, events, and audited tool calls"
                  width={1672}
                  height={941}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="grid content-start gap-3">
              {receipts.map((receipt) => (
                <article
                  key={receipt.title}
                  className="border border-white/12 bg-white/[0.035] p-6"
                >
                  <BadgeCheck
                    className="mb-7 text-[var(--signal)]"
                    size={21}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-3xl font-bold text-white">
                    {receipt.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--soft)]">
                    {receipt.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--magenta)]">
                Target shape
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                Thin overlay, identity spine, governed agent traffic.
              </h2>
            </div>
            <div className="grid gap-3">
              {targetOptions.map((option) => (
                <div
                  key={option}
                  className="flex gap-4 border border-black/10 bg-white p-5 shadow-[8px_8px_0_rgba(12,17,22,0.08)]"
                >
                  <KeyRound
                    className="mt-1 shrink-0 text-[var(--magenta)]"
                    size={19}
                    aria-hidden="true"
                  />
                  <p className="leading-7 text-black/75">{option}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--signal)]">
                Adoption
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                The fabric only wins if it becomes the paved road.
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Earn adoption seam by seam instead of mandating a platform rewrite.",
                "Keep brokers off latency-critical paths and make local enforcement the norm.",
                "Treat prompt injection as a condition to contain and monitor, not a solved problem.",
                "Curate contracts and semantics continuously because they drift when ownership gets vague.",
              ].map((item) => (
                <article
                  key={item}
                  className="border border-white/12 bg-white/[0.035] p-5"
                >
                  <Layers3
                    className="mb-7 text-[var(--amber)]"
                    size={22}
                    aria-hidden="true"
                  />
                  <p className="leading-7 text-[var(--soft)]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--signal)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase">BMOZI Technical</p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                A thesis for partnership, not a claim of ownership.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/case-studies/wgu-unified-student-object"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[var(--ink)] px-5 font-mono text-sm font-bold text-white"
              >
                Unified Student Object
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a
                href="mailto:hello@bmozi.com?subject=Governance%20Identity%20Fabric"
                className="inline-flex h-12 items-center justify-center gap-2 border border-[var(--ink)] px-5 font-mono text-sm font-bold"
              >
                Discuss the thesis
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
