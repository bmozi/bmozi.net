# Choose Your Ground

*Part 7 of The Seams, a series on systems thinking in architecture. Views my own; examples composite and anonymized from years of systems work.*

---

Every ambitious systems program eventually faces the same fork, usually framed as a war between two camps.

The build camp: "Our business is unique. Vendors don't understand it. We should own our core systems." The buy camp: "Building is hubris. Look at the graveyard of internal platforms. Configure what the market already perfected."

Both camps are right about half the estate and catastrophically wrong about the other half — and the actual skill is knowing *which half is which*. I've watched organizations get this wrong in both directions, and the failures rhyme.

The build-everything failure: five years into a bespoke CRM-replacement, the team is maintaining commodity features — contact management, case routing, email templates — that a vendor ships better, while the genuinely unique parts of the business wait in the backlog behind bug fixes to the address-book.

The buy-everything failure: the organization's one truly differentiating capability — the thing its business model depends on and no vendor has ever modeled properly — is jammed into a product built for a different industry's assumptions, held together with customization so extensive that nobody, including the vendor, can upgrade it. They own all the maintenance burden of a build with none of the fit.

## The test that settles it

Here's the question that cuts through the war, and it has nothing to do with technology:

**Does any vendor sell this to your business model — not your industry, your *model*?**

The distinction matters enormously. Vendors sell to industries. If your business model is the standard one for your industry, the vendor's product embodies decades of accumulated fit, compliance, and edge cases you'd spend years rediscovering. Buying is not weakness there; building is vanity.

But if some part of your model diverges from the industry standard — you sell outcomes where everyone sells time, you serve a population everyone else ignores, you certify something nobody else certifies — then for *that part*, every product on the market encodes assumptions that are wrong for you. You'll fight the tool forever. That capability is your ground. Build it.

Notice the corollary most people miss: **your differentiating core is usually small.** Far smaller than pride suggests. The unique thing about your business is almost never the contact management, the ticketing, the payroll, the content delivery — it's one or two domains where your model genuinely departs from the world's. An honest inventory typically finds 80–90% of the estate is commodity. That's not a defeat. That's where the leverage is: it means your best engineers can concentrate entirely on the 10% no one will ever sell you.

And a warning for the builders: the ugliest build traps wear compliance clothing. Regulatory processing — tax, financial aid, healthcare claims — feels core because it's critical. It isn't core; it's *mandatory commodity with a regulator attached*, and its rules churn every year. Vendors amortize that churn across hundreds of customers. Build it yourself and you've hired a permanent regulatory-tracking team to reproduce what a license fee buys. Critical ≠ differentiating. Never build the paperwork.

## The part both camps forget

Here's the deeper point, and it's where this connects to everything earlier in the series: once you've split the estate into built and bought, **the boundary between them becomes the most important thing you own.** Not the build. Not the purchase. The seam.

The governed boundary has three disciplines:

**Your language stops at the border.** The vendor's data model never leaks into your core, and your domain language never depends on vendor internals. A translation layer at every seam — so when the vendor changes, or you change vendors, you rewrite an adapter, not your business.

**Facts cross as events; identity is yours.** The bought systems publish and consume the same well-named business events as everything else (Part 4), keyed to an identity *you* control. The vendor resolves, matches, processes — fine. But the authoritative "who is this person" and "what happened" are assets you never surrender, because they're what makes leaving possible.

**Partnership with exit-optionality.** The healthiest vendor relationships I've seen are the ones where walking away would be survivable — not because you plan to walk, but because optionality changes the conversation. You engage the roadmap, push your requirements, take the co-innovation — from a position where your differentiating core and your identity spine are yours regardless. Dependence without optionality isn't partnership; it's tenancy.

## "Greenfield" reconsidered

This reframes the most seductive phrase in enterprise software: *building from the ground up.* Teams hear it as permission to build everything. It isn't. Even a from-scratch startup buys its CRM, its payments, its email.

Greenfield means something better: **no legacy constraints on what you choose to build.** The privilege isn't unlimited construction — it's a clean choice of ground. Nothing in your design exists because "that's how the old system did it"; and nothing in your backlog exists because pride demanded you rebuild an address book.

Spend the privilege on the domain that is genuinely yours, buy the rest deliberately, and put your architectural energy where this whole series keeps pointing: into the seams.

## The Monday test

Two lists, one page.

List one: the capability you would build from zero if you could — the one where every vendor demo makes your domain experts wince because the model is subtly, fundamentally wrong for how your business works.

List two: everything your engineers currently build or maintain that a vendor sells to your industry off the shelf.

The gap between those lists is your misallocation, priced in engineer-years. In my experience the second list funds the first with room to spare. Next week: the test for whether all of this is ready for AI — and why "AI-native" is a property you can verify, not a slide you can claim.

**The tools were never the gap. The seams were.**

---

*What's the one capability no vendor sells to your business model? If you can name it in a sentence, you've found your ground.*
