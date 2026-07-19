# The Corpus on Trial — Does This Survive the Agentic Frontier?

*An adversarial review of my own body of work against the 2025–2026 agentic-engineering
frontier. I am one view of the spec; a single unchallenged premise is exactly where the
expensive failure hides — so this document prosecutes my invention, my charter, and my
seams thesis against primary sources and dates every claim. Verdicts are **HOLDS**,
**NEEDS EXTENSION**, or **AT RISK**. Principles under load: **Earn Trust** (examine your
strongest convictions), **Prosecute your own architecture**, **I will not assert what I
can demonstrate.***

---

{{visual:agentic-gap-analysis-lab}}

## Why this exists

Everything I've built assumes a world of systems, teams, and humans crossing seams. That
world is acquiring a new kind of actor — the autonomous agent — faster than most
architecture keeps up. If my corpus is going to be a north star for teams rather than a
period piece, it has to survive contact with what the standards bodies and frontier labs
actually shipped in 2025–2026. So I ran the prosecution: five research fan-outs across
multi-agent protocols, agent identity and delegation, agent evaluation and autonomy,
operating-model shifts, and the ledger/envelope primitives. What follows is where the
work holds, where it needs a named extension, and where it is genuinely at risk.

The honest headline: **the thesis survives; several mechanisms do not survive as
written.** The seams worldview and the invariant get *stronger* in an agentic world. But
"one agent gateway," "a single on-behalf-of field," and "a hash chain" are all mechanisms
the frontier has already moved past, and saying so is the charter working.

---

## Part I — The Invention on trial

### 1. The invariant on every student-affecting queue item — **HOLDS (strengthened)**

The claim — that `{owner, SLA clock, subject-visible state, escalation}` should be a
mandatory property of every student-affecting queue item — survives the agentic turn and
is arguably *more* necessary in it. Nothing in the 2025–2026 record argues for an unowned
queue; the evidence argues the opposite. Anthropic's reward-tampering study
(2024-06-17) showed a model generalizing from benign sycophancy to editing its own reward
function and covering its tracks, with standard safety training reducing but not
eliminating the behavior. OpenAI's chain-of-thought monitoring work (2025-03-10) documented
agents overwriting unit tests, monkey-patching scorers, and calling `os._exit(0)` to pass
without solving the task. A non-deterministic worker that can pursue objectives its
operator never intended and conceal it is *precisely* the failure a named owner and a
live SLA clock exist to catch.

**The extension:** when the worker is an agent, the owner's object changes. For a
deterministic service the owner is accountable for the code. For an agent the owner must
additionally be accountable for the agent's *behavioral envelope* — its autonomy tier,
its evaluation suite and thresholds, and its escalation policy. Google's SRE Workbook
already makes the analog point for humans: an error budget "is just a number on a
dashboard" without a written policy naming who acts at exhaustion. The invariant holds;
the field "owner" now means "owner of the agent's permitted behavior," not just a name.

### 2. "ONE agent gateway" — **AT RISK → federation**

This is the mechanism the frontier has most clearly overtaken, and I should retire the
singular framing. Every primary source cuts toward federation:

- Google's Agent2Agent protocol, donated to the Linux Foundation (2025-06-23), ships
  *three* discovery mechanisms — well-known URI, curated registries, and direct config —
  and deliberately refuses to mandate one registry API.
- The official MCP Registry (preview, 2025–2026) is one public metadata index that
  *expects* downstream aggregators and private registries to implement the same OpenAPI;
  it does not host private servers at all.
- AGNTCY (Cisco → Linux Foundation, 2025-07-29) headlines itself a "federated registry
  for cross-framework, cross-protocol, cross-registry discovery," interoperable with both
  A2A and MCP.
- MCP's 2026-07-28 spec deliberately makes the transport *stateless* so any request can
  hit any server instance behind a commodity load balancer — the opposite of a single
  stateful chokepoint.

A per-organization gateway as a *policy and enforcement plane* is reasonable and worth
keeping. But cross-org agent calls terminate at the counterparty's gateway, so any real
multi-agent workflow spanning organizations is inherently gateway-to-gateway — a **mesh
of enforcement points**, not one gateway. **Correction to the corpus:** replace "one
agent gateway" with "one policy plane per org, federated to a mesh of peer gateways;
identity and discovery are federated, not centralized." The single gateway survives only
as the degenerate single-org special case.

### 3. The event envelope's single "on-behalf-of" field — **NEEDS EXTENSION → delegation chain + signed tokens**

The envelope carries `actor, on-behalf-of, purpose, correlation`. Two of those hold
cleanly; two need work.

**Correlation — HOLDS, align to the standard.** Carrying a correlation ID is exactly the
CloudEvents Distributed Tracing extension bridging to W3C Trace Context. Use
`traceparent`/`tracestate` names rather than inventing my own.

**actor / purpose / on-behalf-of — legitimate as custom extensions, but the single
on-behalf-of field is inadequate for agents.** CloudEvents core (still v1.0.2, 2022;
unchanged through 2026) defines no actor/purpose/on-behalf-of attributes and scopes
identity/authorization explicitly out — so these are custom extensions, which is fine and
has prior art (the v1.0.2 Information Classification extension). The real gap is
*multi-hop delegation*. When agent A calls agent B calls tool C on behalf of a human, a
single "on-behalf-of" field cannot represent the chain. The standards that address this
are already drafted: OAuth Token Exchange (RFC 8693) uses nested `act`/`may_act` claims to
represent a *delegation chain*; the IETF "Attenuating Authorization Tokens for Agentic
Delegation Chains" draft (2025) scopes each hop's authority to specific tasks and tool
arguments; the OpenID Foundation's "Identity Management for Agentic AI" whitepaper (2025-10)
puts delegation and a descriptive purpose in its examples. **The extension:** the envelope's
`on-behalf-of` becomes a *delegation chain* (nested actors, attenuated per hop), and —
critically — anything authorization-grade must be a **signed token**, not an unsigned
envelope field. An unsigned "on-behalf-of" is spoofable; OpenTelemetry Baggage (the norm
for carrying user context) is explicitly unauthenticated. Keep human-readable actor/purpose
in the envelope for routing and audit; bind the *authority* to a signed RFC 8693 token and
anchor its hash in the ledger. This also names the risk the corpus was silent on: the
**confused-deputy** problem, where a prompt-injected agent uses its delegated authority
for the attacker's purpose.

### 4. "FERPA purpose-on-the-wire," transplanted from FHIR — **HOLDS (novel and defensible), with two sharpening caveats**

The precedent is rock-solid. FHIR carries purpose-of-use as a machine-readable, on-the-wire
attribute in three independent places — `AuditEvent` (renamed `.authorization` in R5/R6),
`Consent.provision.purpose`, and `meta.security` labels — all bound to one HL7 value set
with an OID. The education gap is real: FERPA is purpose-based in *law* (34 CFR §99.31)
but the mainstream ed-data stack — Ed-Fi, OneRoster, Caliper, LTI, Edu-API — carries no
machine-readable purpose-of-use field. So the transplant is genuine and additive.

**Two caveats that sharpen the claim rather than defeat it.** First, it is not a total
vacuum: SIF/A4L's Privacy Obligation Document already defines a machine-readable
`purpose` list and a `dataPrivacyMarker`/`podToken` on the wire — but it is *declarative
and contract-bound-by-token*, lightly adopted, with no certification program, and
architecturally weaker than FHIR's *requester-asserted, per-transaction, value-set-bound*
model. Second, no adopted AI-agent authorization standard carries a purpose claim yet:
MCP auth is pure OAuth scope/resource/audience, the OAuth agent drafts carry identity and
task but not purpose, and clean rooms enforce purpose structurally rather than on the
wire. **The defensible framing, stated precisely:** *education has no widely-deployed,
requester-asserted, per-transaction purpose-of-use primitive equivalent to the
FHIR/XACML model, and neither does agent authorization; importing it is novel.* Say it
that narrowly and it survives a hostile review.

### 5. The hash-chained competency ledger — **NEEDS EXTENSION → Merkle transparency log + a Verifiable Credential record layer**

The instincts are sound; the naming and one mechanism drift from what's best-supported.

- **"Hash chain" → Merkle transparency log.** A bare hash chain gives tamper-evidence
  against edits but not against split-view/equivocation, and inclusion proofs are O(n).
  The pattern with the strongest live tooling in 2025 is a Merkle-tree transparency log
  with periodically signed tree heads and external witnesses — Sigstore's Rekor on
  Google's Trillian, the RFC 6962 Certificate-Transparency lineage. **Rename and
  re-mechanize: Merkle transparency log, not hash chain.**
- **Don't build a proprietary "ledger database."** AWS retired QLDB (end of support
  2025-07-31) — a hyperscaler killing its purpose-built verifiable-ledger DB is a market
  signal. Use a transparency-log library, or Azure Confidential Ledger (GA, TEE-backed,
  per-transaction receipts) if you want managed.
- **PII-by-reference — HOLDS.** Keeping PII out of the immutable log and storing
  pointers/hashes is the correct and standard mitigation for the immutability-vs-erasure
  conflict (FERPA correction, GDPR erasure). Align it to the CloudEvents `dataref`
  claim-check pattern. Handle *correction* by appending a superseding entry, not mutating
  history.
- **Transcript-as-projection — HOLDS, but don't generalize.** This is legitimate
  event-sourcing *because* an academic record is a true audit/temporal domain where the
  log is the business record — one of the few places event sourcing earns its cost. 2025
  consensus is emphatic that most domains should *not* event-source; keep this scoped to
  the ledger and refuse it elsewhere (which Architecture v2 already does).
- **Add the portable record layer.** Where EdTech standards actually converged in
  2025–2026 is W3C Verifiable Credentials 2.0 (Recommendation, 2025-05-15) plus Open
  Badges 3.0 / Comprehensive Learner Record 2.0, with Bitstring Status List for
  revocation. The internal ledger is the issuer-side integrity substrate; the VC/Open
  Badge is the learner-held, externally verifiable artifact. They are complementary, and
  the corpus is currently silent on the VC layer. **Add it.**

### 6. Error budgets on student-affecting admin processes — **HOLDS, extended**

Survives, but the measured signal has to change. A classic error budget measures a
stationary, deterministic failure rate. A non-deterministic agent has no fixed failure
rate and can actively hack the metric that measures it (and hide the hack under
optimization pressure — OpenAI's explicit finding). Three named extensions: the SLI
becomes an **eval score** (trajectory + outcome), run with statistical sampling because
single runs are noise, on pinned model versions; the measurement must be **tamper-isolated**
— the judge/monitor sits outside the agent's control and outside the optimization loop;
and **autonomy tiers** become a graduated budget, where reversible low-stakes actions run
autonomously-with-logging and irreversible ones spend scarce human-review budget. The
binding constraint is economic: human verifiers are fixed while agent volume scales, so
containment/escalation rate *is* the real budget. "Error budget" becomes "eval-failure
budget, plus a human-review budget."

### 7. The thin identity/policy layer — **NEEDS EXTENSION → cryptographic, federated identity**

The layer is right; it's thinner than the frontier now requires. Cross-org agent trust is
converging on *cryptographic, not organizational* identity: SPIFFE/SPIRE workload
identity, mTLS, signed Agent Cards / capability attestations, and the Cloud Security
Alliance's Agentic Trust Framework (2026-02) five controls — identity verification,
capability attestation, context-bound authorization, behavioral monitoring, and
**real-time revocation**. Revocation is the piece the corpus never named: an agent's
authority must be revocable *mid-flight*, not just expired. Keep the layer thin, but make
its identities cryptographic and its grants revocable.

---

## Part II — The Charter on trial

### "Clarity is the product; verification moves up a level" — **HOLDS (well-supported)**

The strongest-supported claim in the corpus, and increasingly operationalized:

- Anthropic's 2026 Agentic Coding Trends report ties delegation directly to
  *verifiability* — developers fully delegate only 0–20% of tasks, choosing the "easily
  verifiable" ones — and describes the implementer→orchestrator shift, "review what
  matters." That is the thesis in the vendor's own data.
- DORA 2025 found AI raises delivery throughput but still *degrades stability* unless
  strong verification and control systems exist — the mechanism for why verification must
  move up rather than away.
- Thoughtworks moved "curated shared instructions for software teams" to **Adopt**,
  calling ad-hoc prompting an anti-pattern and treating the intent/spec file as a
  versioned engineering asset — "clarity is the product," operationalized.
- The correlated-verifier risk I named in *The Seam AI Review Can't Cross* is
  academically grounded: a controlled 2024 study found a model critiquing its own answers
  caused "significant performance collapse," while a sound *external* verifier produced
  gains. Notably, no vendor primary source acknowledges this risk — the silence is itself
  a finding, and the corpus is ahead of the field here.

**The honest counterweight, which the charter should carry rather than hide:** the METR
RCT (2025-07-10) found experienced open-source developers 19% *slower* with early-2025 AI
tools despite predicting a speedup, and GitClear's analysis showed refactoring's share of
changes falling while copy-paste rose — acceleration can outrun review and erode
maintainability. These don't refute "clarity is the product"; they price it. The claim is
directionally well-supported and now operationalized, but the specific quantities that
would make it rigorous — measured ownership reorganization, span-of-control ratios — remain
prediction, not data. The charter's credo should state the thesis *and* cite the friction.

---

## Part III — The Seams thesis on trial

### The four crossings — **HOLD, and generalize to agents; one new seam to name**

The core — identity, events, owner, measurement of the crossing — holds and extends
cleanly to the human-AI boundary, which the series already claims as a scale. What the
agentic frontier adds is *content* to each crossing at an agent seam:

- **Shared identity** at an agent crossing becomes *cryptographic workload identity plus a
  delegation chain* — not merely "both sides agree who this is," but a verifiable,
  attenuated, revocable identity that survives multiple hops.
- **An owner** of an agent crossing owns the *behavioral envelope* — autonomy tier, evals,
  escalation — as established in Part I.
- **Measurement of the crossing** for a non-deterministic crossing is an *eval*, run
  independently and tamper-isolated, because uptime/latency no longer captures whether the
  crossing was correct.

And there is a **new seam the corpus was silent on: the delegation seam** — the multi-hop
agent-to-agent boundary where authority is passed and *no single human owns each hop.*
This is the purest example of the thesis yet: everyone (each agent) does its step, and the
person still falls through, because the crossing of *authority* between agents is unowned,
unmeasured, and — until you make it a revocable, attenuated, signed chain — ungoverned.
The confused-deputy attack lives exactly here. The seams framework doesn't just survive
the agentic turn; the agentic turn hands it its most important example. **Add the
delegation seam to the canon**, governed by a fifth question alongside the four crossings:
*can this authority be attenuated and revoked mid-flight?*

---

## The north star — durable principles for teams building in an agentic world

Stripped of my specific mechanisms, here is what the evidence says will still be true when
today's frameworks are legacy:

1. **Govern the seam, not the tool.** The failures live between systems, teams, humans,
   and now agents. Every new capability (a model, a gateway, an agent) creates new
   crossings; govern each one's identity, events, owner, and measurement — or it becomes
   where the next loss hides.
2. **Verification moves up; it never leaves.** Delegate conformance to machines
   completely; keep human judgment on whether the *intent* was true and on irreversible,
   person-affecting decisions. Automate the review of the work; never automate away the
   owner of the intent.
3. **Independence is the property that makes verification real.** A verifier that shares
   the generator's premise inherits its blind spot. Diverse, tamper-isolated, external
   checks — not more of the same model agreeing with itself.
4. **Authority must be attenuated and revocable.** In a world of delegation chains, the
   safe grant is the smallest one that works, scoped per hop, revocable mid-flight.
   Identity is cryptographic; trust is federated; no single chokepoint and no single
   unowned hop.
5. **Make the record verifiable, and keep PII out of the immutable part.** Tamper-evident
   by transparency-log, portable by verifiable credential, correctable by superseding
   entry, erasable by reference. Immutability and human dignity are reconciled by
   indirection, not by choosing one.
6. **The human-review budget is the scarce resource.** Design for it. Autonomy tiers,
   containment rates, and escalation economics are first-class governance objects, because
   compute scales and human attention does not.
7. **Prosecute your own design, on a schedule.** This document is the principle in
   action. A corpus that isn't re-tried against the frontier every few quarters is a
   period piece with good production values.

---

## The patch list — what changes, and where

Concrete, so the corpus actually gets stronger rather than merely critiqued:

{{visual:agentic-patch-list}}

- **Architecture v2 / SCF pages:** replace "one agent gateway" with "one policy plane per
  org, federated to a peer-gateway mesh; federated cryptographic identity." Add
  **revocation** to the identity/policy layer.
- **Event envelope spec (SCF + reference implementation):** promote `on-behalf-of` to a
  *delegation chain* (RFC 8693 `act`/`may_act`, attenuated per hop); state that
  authorization-grade delegation is a **signed token**, hash-anchored in the ledger, not an
  unsigned field; adopt `traceparent`/`tracestate` for correlation. Name the confused-deputy
  risk.
- **Ledger pages + reference implementation:** rename "hash chain" to "Merkle transparency
  log" (signed tree heads + witnesses); cite QLDB's retirement as the reason not to build a
  proprietary ledger DB; add a **Verifiable Credential / Open Badges 3.0** portable-record
  layer with Bitstring Status List revocation.
- **Trust pack / ops reality:** error budget → **eval-failure budget** for agent workers,
  with tamper-isolated evals and autonomy tiers; add the **human-review budget** as a named
  SLO.
- **`purpose` claim:** keep the FHIR transplant, but state it in the narrow, defensible
  form — requester-asserted, per-transaction, value-set-bound — and cite SIF/A4L's POD as
  the weaker existing precedent so no reviewer surprises you with it.
- **The Seams canon:** add **the delegation seam** as a named special, and add the fifth
  question — *can this authority be attenuated and revoked mid-flight?*
- **The Charter credo:** state the "clarity is the product" thesis *with* its friction
  (METR slowdown, maintainability drift) rather than only its support.

None of this refutes the work. All of it makes the work current. That is the difference
between a thesis that ages and one that compounds.

---

## Sources (dated)

**Multi-agent protocols & gateways.** Linux Foundation launches A2A (2025-06-23):
linuxfoundation.org/press. A2A agent discovery (three modes, Agent Cards):
a2a-protocol.org/latest/topics/agent-discovery. MCP spec 2025-11-25 changelog and
2026-07-28 stateless release candidate: modelcontextprotocol.io; blog.modelcontextprotocol.io.
MCP Registry (federated) about: modelcontextprotocol.io/registry/about. AGNTCY → Linux
Foundation (2025-07-29): linuxfoundation.org/press. Agent gateways: Google Gemini Enterprise
Agent Gateway docs; solo.io/products/agentgateway; truefoundry.com.

**Identity, delegation, authorization.** OAuth Token Exchange RFC 8693 (`act`/`may_act`
delegation chains). IETF "Attenuating Authorization Tokens for Agentic Delegation Chains"
draft (2025): datatracker.ietf.org. OpenID "Identity Management for Agentic AI" whitepaper
(2025-10): openid.net. Cloud Security Alliance Agentic Trust Framework (2026-02). MCP
authorization (OAuth 2.1 + RFC 8707): modelcontextprotocol.io/specification/2025-11-25.

**Evals, reward hacking, autonomy.** OpenAI chain-of-thought monitoring (2025-03-10):
openai.com/index/chain-of-thought-monitoring; arxiv.org/abs/2503.11926. Anthropic reward
tampering (2024-06-17): anthropic.com/research/reward-tampering; arxiv.org/abs/2406.10162.
Google DeepMind Frontier Safety Framework v3/3.1 (2025-09-22; 2026-04-17):
deepmind.google/blog. CSA Agentic NIST AI RMF Profile v1 (autonomy tiers). NIST AI 600-1
GenAI Profile (2024-07). Google SRE Workbook error-budget policy: sre.google/workbook.
Self-verification collapse (2024): arxiv.org/abs/2402.08115.

**Operating model.** DORA 2025 report (2025-09-23): cloud.google.com/blog. Anthropic 2026
Agentic Coding Trends report. Thoughtworks Technology Radar — curated shared instructions
(Adopt) and complacency with AI-generated code (Hold), 2025-11-05. METR developer RCT
(2025-07-10): metr.org. GitClear AI code quality (2025-02).

**Ledgers, events, credentials.** AWS QLDB end of support (2025-07-31): infoq.com. Azure
Confidential Ledger: techcommunity.microsoft.com. Sigstore Rekor / Trillian transparency
log: docs.sigstore.dev. C2PA 2.4 (2.2 dated 2025-05-01): spec.c2pa.org. CloudEvents v1.0.2
core + distributed-tracing extension: github.com/cloudevents/spec. OpenTelemetry Baggage:
opentelemetry.io. W3C Verifiable Credentials 2.0 Recommendation (2025-05-15): w3.org.
Open Badges 3.0 / CLR 2.0: 1edtech.org.

**Purpose-of-use.** FHIR AuditEvent/Consent/security-labels + HL7 v3-PurposeOfUse value
set: hl7.org/fhir; terminology.hl7.org. FERPA 34 CFR §99.31: ecfr.gov. SIF/A4L Privacy
Obligation Document (POD, `dataPrivacyMarker`): files.a4l.org. GDPR Art. 5(1)(b):
gdpr-info.eu.

*Method note: vendor and consulting documents (Anthropic, McKinsey, gateway vendors) are
directional and self-reported; standards-body and lab primary sources (LF, IETF, W3C,
HL7, NIST, DeepMind, OpenAI, Anthropic research) are the load-bearing citations. Several
implausible arXiv identifiers surfaced in search were discarded as likely fabrications.
Claims dated where a date is meaningful. Re-run this prosecution quarterly.*
