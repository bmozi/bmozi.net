# The Tools Were Already There

*Part 2 of The Seams, a series on systems thinking in architecture. Views my own; examples composite and anonymized from years of systems work.*

---

In Part 1, I made a claim: your customers' worst complaints are almost never about your product — they're about the system around it, and they cluster into five failure modes. Black holes. Silent changes. Dropped handoffs. Fragmented truth. Fragile access.

This week, the uncomfortable sequel. Because when leaders accept that diagnosis, their first instinct is almost always the same: *what should we buy?*

Let me tell you about the pattern that cured me of that instinct.

## The audit that changes your mind

Whenever I dig into an organization drowning in those five failure modes, I run the same inventory: what tools do they already own that were supposed to prevent exactly this?

The results are remarkably consistent. The organization with the fragmented-truth complaints — different answers every call — owns a mature, expensively customized CRM whose entire value proposition is "one view of the customer." Often it's been in production for a decade. Often there are hundreds of workflows and thousands of lines of customization in it, built by capable people.

The organization with black-hole submissions owns an enterprise workflow platform and a ticketing system with SLA features — licensed, deployed, and integrated.

The organization with fragile access owns monitoring tools that could detect the login failures... which are dutifully detecting them, into a dashboard nobody is paged on.

Sit with the implication, because it's the whole article: **the failures happened with a world-class toolset fully in operation.** The complaints and the platforms coexisted for years. History already ran the experiment that the next purchase is supposed to settle.

## Why good tools can't see the gap

This isn't an indictment of the tools. It's a category error about what tools can do.

A CRM can only unify what flows into it. If enrollment lives in one system, billing in another, and case history in a third — each with its own idea of who the customer even *is* — the CRM's "360-degree view" is a 120-degree view, three times, disagreeing with itself.

A workflow engine can only escalate work it can see. If a submission enters through a portal, lands in a records system, and stalls waiting on a review that happens in email, no SLA timer anywhere covers the actual journey. Each tool has a green dashboard. The customer is in a black hole *between* the dashboards.

The failures don't live in the tools. They live in the seams:

- **No shared identity.** Three systems, three customer IDs, no authoritative answer to "is this the same person?"
- **No events crossing boundaries.** Something important happened in system A, and systems B and C — and the customer — simply never learned of it.
- **No owner spanning departments.** Every team owns its step; nobody owns the journey. The org chart has seams in exactly the places the customer experience does.
- **No end-to-end measurement.** Every component reports uptime; nobody measures whether a customer can get from intent to outcome.

Every tool you own operates *inside* a boundary. Every failure your customers feel happens *between* boundaries. That asymmetry is why the purchase never fixes it — and why the next purchase adds a seam of its own.

## The vendor won't tell you this

I don't blame the vendors either — but understand their incentive. Every platform sells itself as the center of your universe: the CRM is your single source of truth, the data platform is your single source of truth, the new AI layer is your single source of truth. Three single sources of truth is zero single sources of truth.

The decision your organization actually needs has nothing to do with which platform wins. It's a boundary decision: **which system owns which truth, and how does everyone else learn about it?** For each domain of fact — identity, money, status, history — exactly one system is authoritative, and every change to it is published as a well-named event the rest of the estate (and the customer) can react to. Everything else displays copies, honestly labeled as copies.

That's not a product. You can't buy it. It's a set of agreements, enforced by architecture: shared identity, events at the boundaries, owners for the journeys, and measurement of the whole path rather than the parts.

Which is very good news, actually — because agreements are dramatically cheaper than platforms. The most valuable architecture work I've ever done cost almost nothing in licenses. It was deciding, writing down, and enforcing who owns what truth and how the seams get governed. The expensive part is only the honesty.

## The Monday test

Here's this week's exercise, and it pairs with the Part 1 audit.

Take the most persistent customer-facing failure in your organization — the one that's survived multiple improvement initiatives. Now count how many tool purchases, upgrades, or migrations have been justified, at least in part, by a promise to fix it.

If the answer is two or more, you have your evidence: the failure has *outlived* your purchases. It will outlive the next one too, because it doesn't live where purchases go. It lives in a seam — probably an identity seam, an event seam, or an ownership seam.

Then ask the question no vendor will ask for you: for this specific failure, *which two systems fail to agree, and who owns the journey across them?* When you can answer that in one sentence, you know exactly what to fix — and you'll notice the fix isn't in any product catalog.

Next week: the cheapest trust feature in software — why nothing about a customer should ever change silently, and what it takes to make that a property of your architecture instead of a policy in a binder.

**The tools were never the gap. The seams were.**

---

*What's the failure in your organization that has survived three tool purchases? I'll go first in the comments.*
