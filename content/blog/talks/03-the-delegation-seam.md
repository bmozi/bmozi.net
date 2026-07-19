# Talk 3 · The Delegation Seam

*The security/agentic talk — 30 minutes. Rooms: security conferences, identity/IAM
events, agentic-AI tracks. Backed in full by Seams Special 16. Views my own.*

---

## Why this talk exists, and its edge

Security talks about agents are mostly prompt-injection demos. This talk goes one layer
down, to the thing injection *spends*: authority. Its claims ride directly on 2025–2026
standards work — RFC 8693 delegation chains, the IETF attenuating-agent-token drafts,
A2A/MCP federation — which makes it timely for exactly the window when every org in the
audience is wiring its first agent chains. The hook: this is the first seam being
*installed* at industrial speed rather than discovered — and the thing that falls
through it isn't a document. It's authority itself.

**The change it aims for:** attendees go home and ask two questions of their agent
platform: does authority attenuate per hop, and can it be revoked mid-flight?

## Outline at a glance (the rehearsal card)

**[0–5 · Authority used to travel with a person]** Login→session→audit-with-a-person;
then the new shape drawn live: human → assistant → specialist → tool → webhook → vendor
agent. Who owns hop three? Authority as accumulated residue. **[5–10 · The purest seam
yet]** Every component passes its audit; the outcome belongs to no one; what falls
through is authority itself. **[10–16 · The confused deputy at scale]** Fifty-year-old
failure; agents take instructions from content (poisoned document = command); chains
mint deputies wholesale; authority too broad by default — it accumulates. **[16–23 ·
Four crossings + one]** Cryptographic identity with full for-whom chain · delegation as
first-class events · human owns the chain's ENVELOPE, not each hop · measure chain
length and authority-at-terminus · fifth question: attenuate and revoke mid-flight?
**[23–30 · Standards + Monday test + close]** RFC 8693 chains, attenuating-token
drafts, workload identity, federation → procurement. Three questions (one-record chain?
attenuation? envelope owner's name?). Shipping-labels line; signature close.

## The talk (30 minutes — full script with minute marks)

**[Minutes 0–5 — authority used to travel with a person]**
For the entire history of computing until roughly last year, authority moved through
systems attached to someone. You logged in. Your session carried your identity. When a
system acted, it acted as you, and the audit trail — however sloppy — had a person at
the end of it. Even service accounts, our classic loophole, were at least *static*: one
named non-person, one scope, one place to look when things went wrong. Now let me draw
you the new shape — and I want you to check it against something already running, or
about to run, in your own shop. A person asks an assistant agent to resolve something.
The assistant, to do its job, calls a specialist agent. The specialist calls a tool.
The tool touches a system. The system fires a webhook, and the webhook wakes a third
agent at a vendor you've never audited. Somewhere at hop three, an *action* happens — a
record changes, an email sends, money moves. Now the only question that matters: who
owns that crossing? The person authorized hop one, vaguely — "handle this for me." The
assistant authorized hop two, implicitly. Nobody authorized hop three; it's just how
the vendor's integration works. The authority arriving at that final action is the
accumulated residue of a chain of plausible delegations — each slightly broader than it
needed to be, none owned by anyone, none measured, and none revocable mid-flight.

**[Minutes 5–10 — the purest seam yet]**
Here's what makes this failure special, and why I call it the purest example of a
pattern I've spent years writing about. When this goes wrong — and it will — watch the
postmortem. Each agent's builder proves their agent behaved correctly: it received a
request with apparent authority and executed within its permissions. Each system's
owner proves their access controls held: the caller presented valid credentials. Every
dashboard is green. Every component passes its audit. And the outcome — an action taken
with authority nobody actually granted, for a purpose nobody actually approved —
belongs to *no one*. It happened between the components, in handoffs that appear on no
architecture diagram, because each diagram politely ends at its own boundary. I call
that shape a seam: a place where two things meet and neither is in charge of the
meeting — the place failure goes to be nobody's fault. In the classic version, what
falls through the seam is a customer, a document, a piece of state. Here, the thing
falling through is **authority itself**. That's an escalation. A lost document gets you
an angry customer. Leaked authority gets you an actor inside your systems doing things
no one decided to let it do — while every log entry says everything is fine.

{{visual:delegation-chain}}

**[Minutes 10–16 — the confused deputy, at industrial scale]**
Security veterans in the room are already thinking of the right name, and it's fifty
years old: the **confused deputy**. A deputy — any component holding authority on
someone's behalf — gets tricked into spending its authority for an attacker's purpose.
Our classic defenses were two: keep deputies *few*, and keep them *simple* enough to
review. Agents demolish both in the same year. First, an agent is the most confusable
deputy ever built, because it takes instructions from the *content it processes* —
natural language, documents, web pages. Sit with that: anyone who can get text in
front of your agent can attempt to steer the authority it carries. A poisoned document
sitting in a queue used to be bad data. Now it's a potential *command* to the deputy
reading it. Second, delegation chains manufacture deputies wholesale — every hop mints
a new one, each holding a copy of borrowed authority, each processing untrusted
content, each a fresh surface for the same old trick. And here's the compounding
factor that turns this from theoretical to urgent: the authority in these chains is
almost always too broad *by default*. When a builder wires agent A to agent B, the
path of least resistance is to hand B whatever A had — narrowing takes thought, and
the demo works either way. Chain three of those together and hop three is carrying the
human's full authority to do a task that needed a sliver. Nobody chose that. It's what
un-thought-about delegation does. Authority doesn't attenuate on its own. It
accumulates.

**[Minutes 16–23 — governing it: four crossings, plus one]**
So govern the seam. I govern every boundary with four crossings, and this one demands a
fifth. **Identity:** every hop must know, verifiably, who is calling — not "an agent
from the platform" but *this* agent, cryptographically, with the full chain visible:
acting for whom, via whom, at whose original request. A single "on-behalf-of" field
was fine when there was one hop; there are no longer one hop — you need the nested
chain, every actor recorded. **Events:** every delegation — every hop where authority
passes — is logged as a first-class fact: who delegated what scope to whom, when, for
what task. Not buried in application logs. The delegation *is* the story; when hop
four goes wrong, "how did this agent come to hold this authority?" should be a
one-record query, not a forensic week. **Owner** — and here's the honest version, not
the comfortable one. You cannot put a human on each hop; machine-speed delegation is
the entire point, and a design that pretends otherwise gets bypassed by Tuesday. What
a human must own is the chain's **envelope**: the policy of what may be delegated at
all, how much authority attenuates at each hop, which actions are chain-terminal — no
re-delegation, ever — and which actions surface to a person no matter how long the
chain. Unowned hops inside an owned envelope: that's the workable shape. An unowned
envelope is just the seam wearing a policy document as a costume. **Measurement:**
measure the chains themselves — how long they get, how much authority reaches the
final hop compared to what the task needed, how often a chain touches systems the
original request never contemplated. Your uptime is measured. Your latency is
measured. The amount of borrowed human authority circulating through your agent mesh
right now? In most shops, not even estimated. And then the fifth question, the one
this seam adds to my entire canon: **can this authority be attenuated and revoked
mid-flight?** Attenuation means every hop passes along *less* than it received, so
accumulation is structurally impossible. Revocation means when something looks wrong
you can kill the authority *now* — mid-chain — not wait out a token expiry while a
compromised deputy keeps its borrowed keys. Ask your vendor those two questions and
learn more from the pause than the answer. Grants that only expand and can't be
recalled aren't delegation. They're abdication with better branding.

**[Minutes 23–30 — the standards, the Monday test, the close]**
Ninety seconds of hope, because the primitives exist and they're recent. OAuth token
exchange already represents delegation chains with nested actor claims. The IETF has
drafts specifically for attenuating agent tokens — scoping each hop's authority to
tasks and tool arguments. Workload identity gives agents cryptographic names. And the
big agent protocols are federated by construction — cross-org calls terminate at the
counterparty's gateway — which means your envelope policy is also a *procurement*
requirement, not just an architecture one. None of this is exotic; all of it is
ignorable, and default is what ships. So, three questions for Monday. One: for any
action an agent took last week, can you produce the full delegation chain — every
actor, every for-whom, every scope at every hop — from one record? If the answer
involves "correlate the logs," the events crossing was never built. Two: does
authority attenuate along your chains, or does each hop inherit what the last one had?
Look at an actual grant, not the design doc. Three: name the human who owns your
delegation envelope. A name — accountable when the rules permit something they
shouldn't. If the room goes quiet, you've heard the sound a seam makes when you ask
who owns it. The organizations that get this right won't be the ones that deployed
agents fastest or banned them longest — they'll be the ones that noticed they were
installing a new kind of boundary at industrial speed, and sewed it while the
stitching was cheap. Authority is the most dangerous thing your systems move. It
deserves at least the governance you give your shipping labels. The tools were never
the gap. The seams were. Thank you.

## One-slide summary

Agent chains move **authority**, and authority accumulates by default. Confused deputy
× wholesale deputies × instructions-in-content = the new attack surface. Govern the
chain: cryptographic identity with the full for-whom chain · delegation logged as
first-class events · a named human owning the chain's *envelope* (not each hop) ·
measurement of chain length and authority-at-terminus · **attenuate and revoke
mid-flight.** Two vendor questions: does it attenuate? Can you revoke now?

## Q&A drill

**"Doesn't human approval per hop kill the point of agents?"** Yes — which is why the
ownable object is the envelope (the rules of delegation), not the hop. Machine-speed
inside human-owned rails. **"We use OAuth already."** OAuth tells you *who*; the chain
question is *via whom, with what shrinking scope*. Single-token on-behalf-of collapses
the chain into one hop — exactly the information an incident needs and won't have.
**"Isn't this premature? We have one agent."** One agent is the cheapest possible time
to install attenuation — the demo works either way, and default is what ships. Retrofit
pricing is what this talk is trying to save you from. **"What about agent-to-agent
across companies?"** That's where it bites hardest: the standards are federated by
construction (gateway-to-gateway), so your envelope policy is also your *counterparty*
requirement — put the two vendor questions in procurement, not just architecture.
