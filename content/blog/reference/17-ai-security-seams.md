# AI Security and the Seams — What AI Finds First

*A WGU security reference note. Purpose: preserve the current AI-cyber evidence, translate it into the Student Continuity Fabric threat model, and turn the Trust Pack into a review instrument. The claim is deliberately narrow: AI does not make every system automatically breakable; it makes existing weaknesses cheaper to find, faster to exploit, and harder to ignore.*

---

## The claim, stated carefully

The careless sentence is "AI can find vulnerabilities in any system." That is not precise enough to build on.

The defensible sentence is this:

> If a vulnerability exists in a high-value system, AI will make it easier to find, cheaper to exploit, and faster to weaponize.

That is the design assumption that matters for WGU. AI changes the economics of attack. Vulnerability discovery, exploit drafting, phishing, fuzzing, variant analysis, social engineering, and patch generation are all moving down the cost curve. The safe response is not panic and not vendor theater. It is to ask where the WGU architecture carries valuable authority, student data, tool access, memory, or event truth across a seam, and then govern that crossing before an attacker does.

The seams thesis gets sharper under AI pressure: the model is rarely the whole failure. The failure is usually at the crossing where a model reads untrusted content, receives delegated authority, calls a tool, stores memory, emits an event, or persuades a human.

## What the evidence says

The evidence is now strong enough to treat AI-assisted vulnerability discovery as operational reality, not speculation.

**NIST AI 600-1, the Generative AI Profile,** says generative AI can lower barriers for offensive cyber work, that reports already show LLMs discovering some vulnerabilities and writing exploit code, and that generative-AI systems add new attack surfaces such as prompt injection and data poisoning.

**Google Project Zero / DeepMind Big Sleep** publicly reported an AI agent finding a real, exploitable SQLite vulnerability before release. The important lesson is not that every bug is now easy. It is that AI-assisted variant analysis can find issues fuzzing and existing tests missed.

**DARPA AIxCC** moved this from anecdote to scale. In the final competition, automated cyber reasoning systems analyzed tens of millions of lines of real-world software, found 54 of 63 synthetic vulnerabilities, patched 43, and also found 18 real non-synthetic vulnerabilities under responsible disclosure.

**OWASP's LLM Top 10** names the application risks that map directly to WGU's AI surfaces: prompt injection, insecure output handling, training/data poisoning, model denial of service, supply-chain vulnerabilities, sensitive information disclosure, insecure plugin/tool design, excessive agency, overreliance, and model theft.

**CISA/NSA/FBI AI Data Security guidance** focuses on the data lifecycle: reliable sources, provenance tracking, cryptographic integrity, digital signatures, trusted infrastructure, data classification, access controls, encryption, secure deletion, and ongoing risk assessment. That is exactly the language of governed seams.

**The White House Gold Eagle initiative** is a policy signal, not proof by itself, but it confirms the operational direction: coordinated vulnerability intake, scanning verification, prioritization, and remediation are being organized around AI-accelerated discovery.

So the answer is yes, with the caveat above. AI is not magic. It is leverage. Leverage helps defenders who instrument their systems and hurts organizations that rely on obscurity, manual review, implicit trust, and heroic vigilance.

## Where WGU's risk concentrates

### 1. Prompt injection into student-facing agents

The highest-risk surface is any agent that reads student-controlled or third-party content: documents, appeals, support messages, emails, transcripts, PDFs, web pages, LMS submissions, ticket attachments, chat logs, or copied text from another system.

The design posture must be: **assume injection succeeds**.

That does not mean agents are unusable. It means prevention is not the trust boundary. Containment is. The Trust Pack already points the right way: keep private data, untrusted input, and exfiltration paths structurally apart.

**Required controls:**

- No agent context may contain all three: private student data, untrusted input, and an external write or exfiltration channel.
- Student documents pass through extraction, normalization, malware scanning, and prompt-injection screening before model context.
- Agents processing untrusted content get read-only tools or no tools by default.
- Every model/tool boundary labels input provenance: `trusted_system`, `staff_input`, `student_input`, `external_content`.
- Findings from prompt-injection red teams become owned risk-register items, not demo notes.

### 2. Confused deputy and delegation abuse

This is the most important architecture correction. A simple `onBehalfOf` field is fine for audit narration, but not for authorization.

The attack shape is straightforward: a prompt-injected agent uses legitimate staff authority for an attacker-controlled purpose. The system sees "mentor action" or "support action"; the attacker sees a confused deputy doing the work.

**Required controls:**

- Replace single `onBehalfOf` authorization with a signed delegation chain.
- Each hop is attenuated: actor, human principal, purpose, audience, tool, action tier, expiry, and revocation handle.
- No agent inherits staff authority wholesale.
- Authorization-grade authority lives in signed tokens; envelope fields are for routing, explanation, and audit.
- Delegation must be revocable mid-flight, not merely short-lived.

The event envelope should still carry human-readable actor, purpose, and correlation. But the policy decision cannot trust unsigned envelope text. It trusts a token, verifies audience and scope, checks purpose and relationship, and records the hash of the authority used.

{{visual:delegation-chain}}

### 3. Excessive agency

The core security question is not "is the model smart?" It is "what can it do when it is wrong, compromised, rushed, or overconfident?"

This is where the Tier 0-4 action model earns its keep.

**Required controls:**

- Keep Tier 0 retrieve/summarize inside the caller's own access rights.
- Keep Tier 1 suggestions logged, evidenced, and human-actuated.
- Keep Tier 2 student nudges bounded by frequency, templates, opt-out, and outcome guardrails.
- Tier 3 consequential actions always require named human approval.
- Tier 4 remains human-only: grades, competency certification, aid decisions, conferral, discipline.
- All tools are typed, scoped, idempotent, rate-limited, and registered.
- No generic browser, SQL, email, shell, admin, or bulk-export tool is available in a student-data context.

Unregistered tools are denied. Unregistered action types default to Tier 3 until reviewed. Unknown authority defaults to no authority.

### 4. FERPA leakage through RAG, memory, logs, and embeddings

The dangerous surface is not only the database. It is every derived place student facts can land: vector stores, prompt logs, model traces, agent memory, analytics exports, support transcripts, evaluation datasets, screenshots, and vendor observability pipelines.

The rule is simple:

> Persistent agent memory about a student is an education record.

**Required controls:**

- Apply FERPA purpose, relationship, retention, deletion, and audit rules to memory and embeddings.
- Never embed restricted raw PII.
- Use PII-by-reference in retrieval stores; store stable references and governed summaries, not unrestricted student facts.
- Prompt logs and model traces need FERPA classification, redaction, retention limits, and access review.
- Vendor model settings prohibit training and retention unless explicitly approved.
- Student-visible audit should eventually include meaningful AI access and action history, not only human reads.

An agent remembering "this student disclosed a family crisis" is not harmless because it lives outside the SIS. It is student information, created in an educational context, used to shape educational service. Govern it accordingly.

### 5. Data poisoning and provenance attacks

AI makes poisoned inputs more useful. A malicious document, stale web page, compromised vendor feed, poisoned rubric, manipulated transcript metadata, or contaminated eval set can steer recommendations or hide failures.

**Required controls:**

- Provenance on every input used for AI decisions.
- Hash and sign authoritative datasets, eval sets, prompts, policies, and tool definitions.
- Quarantine untrusted content before retrieval.
- Version prompts, tools, policies, models, evals, datasets, and retrieval indexes together.
- Re-run validation after new data sources, model changes, feedback loops, or prompt changes.
- Monitor data drift, because benign drift can produce the same operational harm as malicious poisoning.

The question for any AI recommendation should be answerable: what sources, versions, policy, model, prompt, and tool definitions produced this output?

### 6. Event and projection tampering

The Student Continuity Fabric depends on events. If an attacker can forge, suppress, reorder, or poison lifecycle events, they can create false student status, false SLA state, false ownership, false notifications, or false audit trails.

This is not only a data-quality problem. It is a security problem.

**Required controls:**

- Producer identity on every event.
- Schema registry with compatibility gates.
- Signed event envelope or signed payload hash for consequential events.
- Merkle transparency log or equivalent append-only audit for high-impact records.
- Silent-change detector: a system-of-record delta without a matching continuity event becomes an incident.
- Projection replay verification before release.
- Separation between operational continuity events and official academic truth; operational workflow cannot mutate mastery.

Events are circulation, not truth; but circulation can still be attacked. The system must prove that what it circulated came from the right producer, matched the right schema, and produced the same projection on replay.

{{visual:event-circulation}}

### 7. Identity, account recovery, and help desk social engineering

AI improves phishing, voice imitation, fake documents, deepfake escalation, and persuasive support attacks. For WGU, student front-door access is both a reliability surface and a security surface.

**Required controls:**

- Phishing-resistant MFA for staff and privileged roles.
- Strong student account recovery with risk scoring and step-up verification.
- Help desk scripts hardened against deepfake and social-engineering escalation.
- Real-user login SLO paired with account-takeover monitoring.
- Session anomaly detection, impossible-travel checks where appropriate, token binding where feasible, and high-risk action reauthentication.
- Verified staff workflows for changing student contact information, aid-related data, enrollment state, and recovery factors.

The student complaint "I cannot get in" and the security incident "someone else got in" live on the same seam: identity proof, recovery, session trust, and support process.

### 8. Human-review budget

The subtle failure is review theater. Agents can create more drafts, recommendations, escalations, cases, nudges, and exception summaries than humans can responsibly review. Then "human-in-the-loop" becomes rubber-stamping.

**Required controls:**

- Human-review budget as an SLO.
- Queue limits for Tier 3 actions.
- Sampling and second-review requirements for high-risk categories.
- Review UI that shows evidence, source versions, policy decision, and counterarguments, not only the model's polished recommendation.
- If review backlog exceeds capacity, automation sheds load or narrows scope; it never silently downgrades review quality.

Human attention is the scarce resource. Compute scales. Responsibility does not.

## The Monday review checklist

Any WGU AI feature that touches student data, student status, staff action, or student communication should answer these before it ships:

1. **Untrusted input:** What content can the agent read, and which of it is student-controlled or third-party?
2. **Lethal trifecta:** Can one agent context ever hold private data, untrusted input, and an exfiltration/write path together?
3. **Delegation:** Is authority represented as a signed, attenuated, revocable chain, or merely as text in an envelope?
4. **Purpose:** What FERPA purpose is asserted per action, and is it checked by policy rather than implied by role?
5. **Relationship:** What relationship grants access, and how quickly does access change when the relationship changes?
6. **Tool scope:** Are tools typed, registered, idempotent, rate-limited, and deny-by-default?
7. **Action tier:** What tier is this action, and what human approval is required?
8. **Memory:** Where can this interaction persist: memory, embeddings, logs, traces, analytics, vendor systems?
9. **Provenance:** What sources, model, prompt, policy, eval, and tool versions produced the output?
10. **Event integrity:** Can events be forged, suppressed, or replayed without detection?
11. **Projection integrity:** Can the served projection be rebuilt from source events and produce the same student-visible state?
12. **Account recovery:** Could a persuasive attacker use help desk or recovery flows to gain access or alter contact factors?
13. **Human review:** Is the approval queue sized to real human capacity, with evidence visible and escalation rules explicit?
14. **Incident replay:** If this goes wrong, can we reconstruct who acted, on whose authority, for what purpose, using what evidence?

If any answer is "we trust the model," "we trust the user," "we trust the staff member," or "we will review it manually," the seam is not governed yet.

## What this changes in the WGU design

The design is directionally strong because it already names the right primitives: scoped tools, purpose-bound access, relationship-based authorization, action tiers, audit, owner/SLA state, projection replay, and PII-by-reference.

The five tightening moves are now mandatory:

1. **Signed delegation chains** instead of simple `onBehalfOf` for authorization.
2. **Agent memory, RAG, logs, and embeddings as FERPA-governed records** where they contain student facts.
3. **Prompt-injection containment as a hard invariant**, not a best-effort filter.
4. **Tool/action registry with deny-by-default enforcement** and no generic tools in student-data contexts.
5. **Event authenticity and projection replay as security controls**, not merely data-quality controls.

This is the security version of the seams thesis. AI does not break everything. It finds ungoverned seams faster.

---

## Sources

- [NIST AI 600-1, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), July 2024.
- [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) and [LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/).
- [Google Project Zero, "From Naptime to Big Sleep: Using Large Language Models To Catch Vulnerabilities In Real-World Code"](https://projectzero.google/2024/10/from-naptime-to-big-sleep.html), November 1, 2024.
- [DARPA, "AI Cyber Challenge marks pivotal inflection point for cyber defense"](https://www.darpa.mil/news/2025/aixcc-results), 2025.
- [NSA/CISA/FBI and international partners, "AI Data Security: Best Practices for Securing Data Used to Train & Operate AI Systems"](https://media.defense.gov/2025/May/22/2003720601/-1/-1/0/CSI_AI_DATA_SECURITY.PDF), May 2025.
- [The White House, "White House Launches Gold Eagle Initiative for Unprecedented Cybersecurity Vulnerability Coordination"](https://www.whitehouse.gov/releases/2026/07/white-house-launches-gold-eagle-initiative-for-unprecedented-cybersecurity-vulnerability-coordination/), July 14, 2026.
