# The Delegation Seam

*A special edition of The Seams. Views my own; examples composite and anonymized from years of systems work.*

---

Every seam I've written about in this series was already in your building when you started reading. The ungoverned handoff between departments, the two systems disagreeing about "active," the gap between the spec and the world — old seams, newly named. This one is different. This one is being *installed right now*, at scale, mostly by people who don't know they're installing a seam at all. It's the boundary where one AI agent hands authority to another — and I think it's the purest example of the thesis this series has ever produced.

Let me show you why, and then show you how to govern it before it governs you.

## The setup: authority used to travel with a person

For all of computing history until roughly now, authority moved through systems attached to someone. You logged in; your session carried your identity; when a system acted, it acted *as you*, and the audit trail — however sloppy — had a person at the end of it. Even service accounts, the classic loophole, were at least static: one named non-person, one scope, one place to look when something went wrong.

Agents break this quietly and completely. Here's the shape of it, and you can find this pattern in production somewhere in your organization within the year, if it isn't there already: a person asks an assistant agent to resolve something. The assistant, to do its job, calls a specialist agent — say, one that handles records. The specialist calls a tool, which touches a system, which fires a webhook, which wakes a third agent at a vendor you've never audited. Somewhere in hop three, an action happens — a record changes, an email sends, money moves, a status flips.

Now the question this series has taught you to ask: **who owns that crossing?**

The person authorized the *first* hop, vaguely ("handle this for me"). The assistant authorized the second, implicitly (it needed the specialist). Nobody authorized the third — it was just how the vendor's integration works. Each agent did its job. Each hop looks reasonable in isolation. And the authority that arrived at the final action is something no one ever granted: it's the *accumulated residue* of a chain of plausible delegations, each slightly broader than it needed to be, none owned by anyone, none measured, and — this is the part that should raise the hair on your neck — **none revocable mid-flight.**

That's the delegation seam: the boundary where authority passes between autonomous actors, and no single human owns any individual hop.

## Why this is the purest seam in the series

Run the definition from Part 0 against it. A seam is where two things meet and neither is in charge of the meeting — and its defining property is that the failure has no address. Watch how perfectly the delegation chain fits.

Each agent's builder can prove their agent behaved correctly: it received a request with apparent authority and executed within its permissions. Each system's owner can prove their system enforced its access controls: the caller presented valid credentials. Every dashboard is green. Every component passes its audit. And the outcome — an action taken with authority nobody actually granted, for a purpose nobody actually approved — belongs to no one. It happened *between* the components, in the handoffs, in territory that appears on no architecture diagram because each diagram ends at its own boundary.

In the classic seams of Parts 1 through 10, what fell through the gap was a customer, a document, a piece of state. Here, the thing falling through the seam is **authority itself**. That's an escalation. When a document gets lost in a seam, you have an angry customer. When authority leaks through a seam, you have an actor in your systems doing things no one decided to let it do — and every log entry says everything is fine.

{{visual:delegation-chain}}

## The attack that lives here — and why it's worse than it sounds

Security people have a name for the core failure, and it's fifty years old: the **confused deputy**. A deputy — any component holding authority on someone's behalf — gets tricked into using *its* authority for an attacker's purpose. The classic defense was to keep deputies few, simple, and carefully reviewed.

Agents demolish both defenses at once. First, an agent is the most confusable deputy ever built: it takes instructions in natural language, from documents, from web pages, from the *content it processes* — which means anyone who can get text in front of your agent can attempt to steer the authority it carries. A poisoned document in a queue isn't just bad data anymore; it's a potential instruction to the deputy reading it. Second, delegation chains manufacture deputies wholesale. Every hop mints a new one, each holding a copy of borrowed authority, each processing untrusted content, each a fresh surface for the same old trick.

And here's the compounding factor that makes this seam urgent rather than theoretical: the authority in these chains is almost always **too broad by default**. When a builder wires agent A to agent B, the path of least resistance is to grant B whatever A had — because narrowing it takes thought, and the demo works either way. Chain three of those together and the specialist agent at hop three is carrying the human's full authority to do a task that needed a sliver of it. Nobody chose that. It's what un-thought-about delegation *does*: authority doesn't attenuate on its own. It accumulates.

## The four crossings, plus one

So govern it. The four crossings from Part 0 apply — with agent-shaped content — and this seam demands a fifth.

**Shared identity.** Both sides of every hop must know, verifiably, who is calling — not "an agent from the platform" but *this* agent, cryptographically, with the full chain visible: acting for whom, via whom, at whose original request. The emerging standards here are real and worth knowing: workload identity for the agents themselves, and token formats that carry the *chain* of actors — not just "on behalf of the user" but the nested sequence of every party the authority passed through. If your agent integration can't answer "show me the full chain of who-for-whom on this action," it has failed the first crossing. A single "on-behalf-of" field was fine when there was one hop. There are no longer one hop.

**Events.** Every delegation — every hop where authority passes — is itself a material event, logged as a first-class fact: who delegated what scope to whom, when, for what task. Not buried in application logs. The delegation *is* the story; treat it like one. When something goes wrong at hop four, the question "how did this agent come to hold this authority?" should be answerable from the record in minutes, not reconstructed from six systems' logs over a forensic week.

**An owner.** Here's the subtlety — the honest version of this crossing, not the comfortable one. You cannot put a human owner on *each hop*; the entire point of agent delegation is that hops happen at machine speed without per-hop approval, and a design that pretends otherwise will be bypassed by Tuesday. What a human must own instead is the **chain's envelope**: the policy that says what may be delegated at all, how much authority attenuates at each hop, which actions are chain-terminal (no re-delegation, ever), and which actions must surface to a person no matter how long the chain. The owner owns the *rules of delegation*, and is accountable when the rules permit something they shouldn't have. Unowned hops inside an owned envelope: that's the workable shape. An unowned envelope is just the seam wearing a policy document as a costume.

**Measurement of the crossing.** Measure the chains themselves: how long do they get, how much authority reaches the final hop compared to what the task needed, how often does a chain touch systems the original request never contemplated? A chain that grows a hop, or an authority-at-terminus that creeps upward over weeks, is drift in the world's most consequential metric — and today, almost nobody has a dashboard for it. Your uptime is measured. Your latency is measured. The amount of borrowed human authority currently circulating through your agent mesh at this moment? In most shops: not even estimated.

**And the fifth question — the one this seam adds to the canon: *can this authority be attenuated and revoked mid-flight?*** Attenuation means every hop passes along *less* than it received — scoped to the sub-task, nothing more — so accumulation is structurally impossible rather than procedurally discouraged. Revocation means when something looks wrong, you can kill the authority *now* — mid-chain, mid-task — not wait for a token to expire while a compromised deputy keeps its borrowed keys. Ask a vendor these two questions about their agent platform and you will learn more from the pause before the answer than from the answer. Grants that can only expand and can't be recalled aren't delegation. They're abdication with better branding.

## The Monday test

Three questions for the agent integration nearest you — and there is one, or there's about to be.

One: for any action an agent took last week, can you produce the full delegation chain — every actor, every for-whom, every scope granted at every hop — from one record? If the answer involves the phrase "we'd have to correlate the logs," the first crossing is failing and the events crossing was never built.

Two: does authority attenuate along your chains, or does each hop inherit what the previous one had? Look at an actual grant, not the design doc. If hop three is carrying the human's full permissions to do a narrow task, you're accumulating exactly the residue this piece describes — and you're one poisoned document away from a confused deputy with a master key.

Three: name the human who owns your delegation envelope — the policy of what may be delegated, where it attenuates, what's chain-terminal, and what always surfaces to a person. Not the agent platform team; a *name*, accountable when the rules permit what they shouldn't. If the room goes quiet, you've heard the silence from Part 0 — the sound a seam makes when you ask who owns it.

The organizations that get this right won't be the ones that deployed agents fastest or the ones that banned them longest. They'll be the ones that noticed, early, that they were installing a new kind of boundary at industrial speed — and sewed it while the stitching was still cheap. Authority is the most dangerous thing your systems move. It deserves at least the governance you give your shipping labels.

**The tools were never the gap. The seams were.**

---

*Run the three questions on your nearest agent integration and post which one failed. My prediction: question two — nobody attenuates. Authority accumulates by default, and default is what ships.*
