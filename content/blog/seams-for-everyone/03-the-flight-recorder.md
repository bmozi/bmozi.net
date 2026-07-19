# The Flight Recorder

*Part 3 of Seams for Everyone — big system ideas, explained with things you already understand. Views my own.*

---

Somewhere in the tail of every airliner rides a bright orange box whose only job is to remember.

It doesn't summarize. It doesn't tidy. It never goes back and fixes an earlier line. Second after second, it writes down what the aircraft knew — altitude, speed, what the pilots said, which switches moved — and then it writes the next second, and the next. It only ever adds. Nothing is ever taken away.

That one stubborn habit is why, months after an incident, investigators in a quiet room can do something that sounds like magic: they can *replay the flight*. Not reconstruct it from fading memories and best guesses — replay it. They can sit at minute thirty-seven and know exactly what the crew could see, what the instruments claimed, what happened in which order. When two witnesses remember it differently, nobody has to win the argument. They roll the tape.

Notice what makes this possible. It isn't clever analysis. It's a decision made *before* the flight, about how to remember: never edit, only append. The box doesn't know which second will turn out to matter, so it keeps them all, in order, untouched.

Now picture the opposite way of remembering. A whiteboard in a break room. All day, people write on it, erase it, update it. It's genuinely useful — it always shows the current plan. But ask it a question about *yesterday* and it has nothing for you. Ask it "when did this number change, and what did it say before?" and it stares back, blank by design. Every night the whiteboard is wiped, and every morning it wakes up with no past. It can only ever tell you what's true *now* — never how you got here, never what you knew *when*.

Most of the time, "now" is all you need. Then something goes wrong — and the only questions worth asking are about the past. What did we believe on the 14th? What changed between Tuesday and Thursday? Who saw what, and in what order? A whiteboard can't answer. It already ate the evidence, one well-meaning erase at a time.

{{visual:flight-recorder}}

## In your organization…

Most business systems are whiteboards. The customer's record shows their *current* address, their *current* status, their *current* balance — with each update politely erasing the value before it. It feels tidy. It is tidy. And the day a customer says "you changed my account and I never agreed to that," tidy becomes a problem: you have the *now* and nothing else. The meeting devolves into memory against memory, and the customer's memory is angrier than yours.

The organizations that handle these moments calmly carry a flight recorder alongside the whiteboard: every meaningful change written down as a new line — what changed, when, in what order — with nothing overwritten. When the hard question comes, they don't argue. They replay.

## Engineers call this…

…an **append-only history**, kept in an **event log** — and the magical trick of rolling the tape is called **replay**. When your engineers push to "log every event" or "make the history immutable," they're asking to install the orange box: a version of your systems that can answer *what did we know, and when did we know it* — the question every dispute, audit, and post-mortem eventually turns on. The whiteboard stays; it's great at *now*. The recorder is for the day *now* isn't the question.

When something went wrong last quarter, could your team replay it — or only argue about it?

That's the whole idea. The rest is engineering.
