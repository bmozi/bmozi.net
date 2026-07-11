# The Tracking Number

*Part 5 of Seams for Everyone — big system ideas, explained with things you already understand. Views my own.*

---

The label printer buzzes, and a strip of paper wraps around your package: a barcode and a long string of digits.

It takes two seconds and it changes what the package *is*. Because from that moment — before the truck, before the first mile — your package has acquired a superpower it can never lose: **it can never again be nowhere.**

Think about what those digits actually buy you. Every time the package crosses a threshold — leaves the store, enters a depot, rides a belt, lands on a truck — someone points a scanner at it, and that beep becomes a fact you can see from your kitchen table: *Departed facility, 6:42 a.m.* The package might be delayed. It might be sitting in the wrong depot in the wrong city. But it is always, provably, *somewhere*, and the somewhere is written down where you can read it.

Notice what you stop doing the moment you have that number. You stop calling. You stop wondering whether anyone still knows your package exists. You've stopped trusting a *person* — some stranger in a warehouse you'll never meet — and started trusting a *number*. The stranger can go off shift, forget, quit. The number can't.

Now the other counter. You hand your package across it, and the person on the far side smiles, takes it, sets it on a shelf behind them, and says the sentence that should terrify you:

"We'll see what we can do."

No number. No receipt. Nothing that proves the handoff happened. Your package now exists in exactly one place: that person's memory. If they're excellent, it'll be fine. If they're busy, distracted, on vacation next week — your package hasn't been *lost*, exactly. It's something worse. It's *nowhere*: a thing with no name, no location, and no evidence it was ever received. And when you come back to ask about it, your only move is to describe it and hope: brown box, about so big, dropped it off Tuesday? Maybe?

The whole difference between the two counters is two seconds and a strip of paper.

## In your organization…

People hand your organization packages all day long — applications, claims, requests, complaints, documents you *required* them to send. The only question that matters is which counter they're standing at.

If the submission gets a number the moment it arrives — a reference they can check, with visible progress at every step — you've given them the tracking page, and they'll extend you the same patience they extend the parcel company. But if it disappears into an inbox with a cheerful "we'll get back to you," you've said *we'll see what we can do*, and their submission is now nowhere: no name, no location, no proof of receipt. Every anxious "just checking in" call your team fields is a person standing at the counter, describing a brown box, hoping someone remembers.

Nobody at that counter is careless. The counter just has no label printer.

## Engineers call this…

…**durable identifiers** — an ID assigned at the moment of arrival, before any human touches the item — combined with **status visibility**, where every step emits an event the sender can see. It's the anti-black-hole pattern: things with numbers can be delayed, misrouted, even mishandled, but they cannot silently cease to exist. When your engineers ask for budget so that "every request gets an ID and a status page," they are asking for a label printer. It is among the cheapest trust your money can buy.

What do people hand your organization that never gets a number?

That's the whole idea. The rest is engineering.
