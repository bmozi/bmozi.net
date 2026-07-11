# The Kitchen Ticket Rail

*Part 2 of Seams for Everyone — big system ideas, explained with things you already understand. Views my own.*

---

Friday night, seven-thirty, and the printer by the pass starts chattering.

A ticket curls out — table twelve, two orders, one allergy note — and the expediter slaps it onto the rail in the next open slot. The rail runs the length of the kitchen at eye level, and every ticket on it is a promise with a location. The grill cook glances up, sees the ticket is his, and calls it: "Twelve, mine." From that second, everyone in the kitchen knows two things about table twelve's dinner: *where it is* and *whose it is*.

And one more thing: *how old it is.* The tickets march down the rail in order, and every cook can read time off that rail at a glance. A ticket that's been hanging too long isn't a secret. It's hanging right there, going stale in public, and the expediter — whose entire job is watching the rail — pulls it, holds it up, and says the five words that keep restaurants alive: "Where are we on twelve?"

Nobody is offended. The question isn't an accusation; it's the system working. The stale ticket got noticed *because the rail makes stale tickets impossible to hide*, and it got escalated because one person owns the watching.

Now walk into the other restaurant. No printer, no rail. The server leans through the kitchen door and shouts: "Two specials, one no-dairy!" A cook nods — probably. Which cook? Was it heard over the fryer? Is anyone timing it? Twenty minutes later the server is back, and now the shout is a fight: "I called it in!" "Nobody called that in!" The table waits. The kitchen and the front of house each believe, sincerely, that the other one dropped it.

Here's the thing: the shouted order and the ticket contain *exactly the same information* at the moment they're created. The difference is everything that happens after. The ticket has a place, an owner, and a visible age. The shout has none of those, so the moment it fades, the order exists only in someone's memory — and memory, on a Friday night, is where dinners go to die.

## In your organization…

Every request that arrives by email is a shouted order.

Someone sends it, someone probably reads it, and from that moment it has no place, no owner, and no clock. It sits in an inbox among two hundred others, aging invisibly. When the customer follows up three weeks later, your team has the kitchen-door fight: "I forwarded that to you." "I never saw it." Both sincere. Both right, in their way. The order is simply *gone*, and no one dropped it, because no one was ever holding it.

The fix is the rail: every incoming request becomes a ticket the moment it arrives — a visible item, in a visible line, with one named person who owns it and a clock everyone can see. And someone plays expediter: when a ticket goes stale, it gets pulled into the light *automatically*, not when the customer finally calls to complain.

## Engineers call this…

…a **queue with owners**, wired with **SLA timers** and **automatic escalation** — SLA meaning service-level agreement, the promise of how long a ticket may hang before it's officially late. When your engineers propose replacing an email-driven process with "proper workflow tooling," this is the whole pitch: they are installing a ticket rail in a kitchen that currently runs on shouting. Same orders, same cooks — but now nothing can be lost, unowned, or quietly old.

Where in your organization are orders still being shouted through the kitchen door?

That's the whole idea. The rest is engineering.
