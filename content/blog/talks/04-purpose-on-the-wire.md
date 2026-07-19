# Talk 4 · Purpose on the Wire

*The specialist/domain talk — 25 minutes. Rooms: higher-ed IT, data governance, privacy
engineering, interoperability events. Views my own; examples composite.*

---

## Why this talk exists, and its edge

Every industry has purpose-limitation *law* (FERPA, GDPR Article 5, sector rules) and
almost none has purpose *on the wire*. Access control everywhere answers "may this
requester see this data" and almost nowhere answers "for what declared reason, on this
specific request." Healthcare is the exception that proves it's possible: FHIR carries
purpose-of-use as a machine-readable attribute in three places — audit events, consent
provisions, and security labels — bound to one HL7 value set. This talk is the
transplant argument: what that discipline is, why nobody else has it, and how to import
it. The edge is concreteness — the audience can go check every claim, and nobody else
is giving this talk.

**The change it aims for:** one data-governance lead adds a purpose field to one audit
event stream and discovers what their access logs have been unable to answer.

## Talk outline (25 min, with beats)

**[0–4 · The question your logs can't answer]** Open with an incident-shaped story: a
legitimate employee, legitimate credentials, legitimate role — accessing a record for an
illegitimate *reason*. Every control passed, because every control checks *who may*,
and none checks *why this time*. The law cares about the why (read the statute aloud —
FERPA's exceptions are purpose-conditioned; GDPR 5(1)(b) is purpose limitation by
name); the wire carries nothing. Compliance by vibes. **[4–10 · The one industry that
did it]** Healthcare's answer, concretely: FHIR AuditEvent carries purpose-of-use;
Consent provisions carry it; security labels carry it in request context for the
access-control engine — all bound to the same published value set (treatment, payment,
operations, emergency...). Requester-asserted, per-transaction, machine-readable,
auditable. Purpose isn't in a policy binder; it's in the packet. **[10–15 · The gap
everywhere else]** The audit, sector by sector: education's entire interop stack —
Ed-Fi, OneRoster, Caliper, LTI — carries no purpose field (the one partial exception,
SIF's Privacy Obligation Document, is declarative and lightly adopted — a contract
referenced by token, not an assertion evaluated per request; concede it before your
audience finds it). AI-agent authorization: MCP is scope/resource only; the OAuth agent
drafts carry identity and task, not purpose; clean rooms enforce purpose structurally,
not on the wire. The only place purpose truly travels today outside healthcare is
adtech consent strings — the industry you least expected to be ahead. **[15–21 · How to
transplant it]** The recipe, honestly priced: (1) a small controlled purpose taxonomy —
value-set-bound, boring on purpose, single digits of entries; (2) purpose as a
mandatory field on every subject-affecting event and access — reject at the envelope,
don't ask nicely; (3) purpose in the audit record so the unanswerable question becomes
a query; (4) the two failure modes to design against — purpose inflation (everything
becomes "operations"; fight with narrow codes and review of distribution shifts) and
rubber-stamping (asserted ≠ true; purpose doesn't *prove* intent, it makes intent
*falsifiable* — a false assertion is now a lie on the record, which changes incident
response, discipline, and law). That reframe — falsifiable, not proven — is the talk's
intellectual core; land it slowly. **[21–25 · Close]** In an agent era this stops being
optional: an autonomous actor's "why" cannot be reconstructed from an interview,
because there's no one to interview — if purpose isn't on the wire, it doesn't exist.
The institutions that carry it will answer regulators, auditors, and their own
consciences from a query; the rest will answer from meetings. *The tools were never the
gap. The seams were* — and the seam here is between what the law requires and what the
wire records.

## The talk (25 minutes — full script with minute marks)

**[Minutes 0–4 — the question your logs can't answer]**
Let me tell you about an incident that never makes the breach report. An employee — a
real one, with legitimate credentials and a legitimate role — pulls up a person's
record. The access control checks pass, because they should: this employee is allowed
to see records like this one. The audit log dutifully writes down who, what, and when.
What actually happened: he looked up his ex. Every control passed, because every
control you own answers the question *who may see this data* — and not one of them
answers *for what reason, this time*. Now here's what should bother you professionally
rather than just morally: the law you operate under cares almost entirely about the
second question. Read the statutes — education's FERPA is a list of purpose-conditioned
exceptions; GDPR's Article 5 says "purpose limitation" by name; every sector rule you
answer to conditions access on *why*. The law is about purpose. The wire carries
nothing about purpose. That gap between what the law requires and what the packet
records — that's compliance by vibes, and every organization in this room is running
on it.

**[Minutes 4–10 — the one industry that did it]**
Except one. Healthcare — not usually our exhibit for engineering discipline — solved
this on the wire, concretely, and you can go check every claim I'm about to make.
In the FHIR standard, purpose-of-use is a machine-readable attribute in three
independent places. The audit event carries the purpose of the access. Consent records
carry the purposes the person agreed to. And security labels carry purpose in the
request context, where the access-control engine consumes it — so purpose isn't just
recorded, it's *evaluated*. All three bind to the same published value set: treatment,
payment, operations, emergency — a small, boring, controlled vocabulary with an
official identifier. Notice the properties, because they're the whole recipe:
**requester-asserted** — the accessor declares why, on this request; **per-transaction**
— not a role attribute, an attribute of *this access*; **value-set-bound** — a closed
enum, not a free-text excuse box; and **auditable** — the why sits next to the who in
every log line. Purpose isn't in a policy binder someone signed in onboarding. It's in
the packet.

**[Minutes 10–15 — the gap everywhere else]**
Now the audit of everyone else, and I'll pick on my own sector first. Education's
entire interoperability stack — the student data standards, the rostering standards,
the learning-analytics events, the LMS integration protocols — carries no purpose
field. Not one. The closest thing that exists is a lightly-adopted privacy framework
where purpose lives in a *contract document* referenced by a token — declarative,
signed once, never asserted per request. I'll concede it before you find it: it's real,
and it's architecturally weaker than what healthcare built, which is exactly why the
transplant matters. And before anyone assumes the AI world has this handled: the
agent-authorization stack is worse. The big agent protocol's auth layer is pure OAuth —
scope and resource, who and what, no why. The OAuth extensions being drafted for
agents carry identity and task — still no why. Data clean rooms enforce purpose
*structurally*, by only permitting pre-approved queries — clever, but the purpose never
travels; it's compiled into the room. The only place purpose genuinely travels on the
wire today outside healthcare is — brace yourself — adtech consent strings. The
industry you trust least is ahead of the industry you work in. Sit with that for a
second, because it means the excuse "it's too hard" is not available.

**[Minutes 15–21 — how to transplant it]**
So here's the recipe, honestly priced, four steps. **Step one: a small controlled
taxonomy.** Single digits of purpose codes, value-set-bound, boring on purpose —
enrollment administration, service delivery, safety emergency, research. The moment
your taxonomy needs a second page, you've built an excuse box, not a control. **Step
two: purpose is mandatory on every subject-affecting event and access — rejected at
the envelope.** Not requested politely in a style guide: the event without a purpose
does not publish, the access without a purpose does not proceed. Enforcement lives in
machinery or it doesn't live. **Step three: purpose lands in the audit record**, next
to who and when — so the question that opened this talk becomes a query: show me every
access to this record and *why*, grouped. **Step four — and this is where I need your
skepticism, because two failure modes will come for you.** Purpose inflation:
everything becomes "operations," the way everything becomes "miscellaneous." Fight it
with narrow codes and a quarterly look at the distribution — a purpose code whose
share is creeping is telling you something. And rubber-stamping: yes, people can
assert a false purpose. Here's the reframe the whole talk turns on, so let me land it
slowly: purpose on the wire does not *prove* intent. It makes intent **falsifiable**.
Today, the employee who looked up his ex committed an act your logs cannot even
describe. With purpose on the wire, he asserted "service delivery" on a record he had
no case for — a specific, recorded, checkable lie. That changes incident response,
discipline, and legal posture. You didn't build a mind-reader. You built a perjury
trap, and perjury traps change behavior.

**[Minutes 21–25 — the close]**
One more turn of the screw, because the deadline for this idea is closer than it
looks. Everything so far assumed the accessor is a person you could, in principle,
interview. Your next accessor is an agent. An autonomous actor's "why" cannot be
reconstructed after the fact — there is no one to interview, no memory to subpoena,
no hallway confession. For an agent, if purpose isn't on the wire, *it doesn't exist* —
not at access time, not at audit time, not ever. Which means the institutions that
carry purpose in the packet will answer their regulators, their auditors, and their
own consciences from a query — and the rest will answer from meetings, badly. The
assignment is one field: pick one subject-affecting event stream, add the purpose
enum, make it mandatory, and run the report after thirty days. I predict the report
surprises you — not because anyone is malicious, but because you have never once seen
your access patterns grouped by *why*. The tools were never the gap. The seams were —
and the seam here is between what the law requires and what the wire records. Thank
you.

## One-slide summary

Every control answers **who may**; almost none answers **why, this time**. Healthcare
solved it: purpose-of-use, requester-asserted, per-transaction, value-set-bound, in
audit + consent + labels. Everyone else: law without wire format. The transplant: small
controlled taxonomy · mandatory on every subject-affecting event · rejected at the
envelope · queryable in audit. Purpose on the wire doesn't prove intent — it makes
intent **falsifiable**. In an agent era, if purpose isn't on the wire, it doesn't exist.

## Q&A drill

**"Users will just lie in the purpose field."** Correct — and now it's a *recorded* lie,
falsifiable against behavior, with consequences. Today the same misuse is unrecorded
and unfalsifiable. You're comparing purpose-on-the-wire to an ideal that doesn't exist,
not to the status quo. **"This adds friction to every integration."** One enum field
per event, rejected at the envelope — the friction is a rounding error next to the
first incident where you can't answer "why was this record accessed 400 times."
**"Why not just better RBAC/ABAC?"** Role and attributes answer *who may* — necessary,
not sufficient. Purpose is an attribute of the *request*, not the requester; ABAC
engines can consume it, which is exactly how healthcare wires it in. **"Our vendor
won't add the field."** Carry it in your envelope at the boundary you control, and put
it in procurement language for the next contract cycle — healthcare's field exists
because buyers demanded it, not because vendors volunteered.
