# The Hospital Chart

*Part 1 of Seams for Everyone — big system ideas, explained with things you already understand. Views my own.*

---

There's a clipboard hanging at the foot of the hospital bed.

At six in the morning, the night nurse writes on it: blood pressure, temperature, the dose she gave at 2 a.m. At seven, the cardiologist picks it up, flips back two pages, reads what the nurse wrote, and adds a note of her own. At nine, the surgeon reads the cardiologist's note before he says a single word to the patient. At noon, a physical therapist nobody has met yet walks in, lifts the same clipboard, and knows the story.

Different specialists. Different training. Different shifts. One chart.

Nobody thinks this is remarkable, and that's the point. The chart works so well it's invisible. Every person who touches the patient reads the same record and writes to the same record, so the record *is* the patient, as far as the hospital is concerned. When the surgeon asks "any allergies?", he isn't asking the patient to remember under stress. He's asking the chart, and the chart doesn't forget, doesn't go off shift, and doesn't give a different answer depending on who's asking.

Now imagine the alternative, because it should make your skin crawl.

Three charts. The cardiologist keeps her own, in her own binder, at her own desk. The surgical team keeps a second. The nurses keep a third. The cardiologist's chart says *allergic to penicillin*. The surgeon's chart doesn't, because the allergy was discovered on a Tuesday and Tuesdays are when his assistant is out. The nurse's chart says the dose was already given; the surgeon's says it wasn't.

Nobody in this scenario is lazy. Nobody is careless. Every person is diligently maintaining their own chart. And the patient is in danger anyway — not because anyone failed, but because *the truth has three homes*, and the homes have stopped agreeing.

Ask that hospital's staff a simple question — "is this patient allergic to penicillin?" — and the honest answer is: *it depends which chart you ask.* That sentence, in a hospital, is a lawsuit. In your company, it's Tuesday.

{{visual:hospital-chart}}

## In your organization…

Your customer has three charts. Probably more.

Sales keeps one. Billing keeps another. Support keeps a third, and there's a spreadsheet somewhere that the operations team swears is the real one. Each chart is lovingly maintained by people doing their jobs well. And when the customer calls and gets a different answer from every department — a different address, a different balance, a different status — they aren't experiencing bad customer service. They're experiencing three charts disagreeing, out loud, in real time.

The fix isn't asking departments to synchronize harder, any more than the hospital's fix is asking doctors to photocopy each other's binders faster. The fix is the clipboard at the foot of the bed: for every fact about the customer, one agreed place where that fact lives — and everyone reads it there and writes it there.

## Engineers call this…

…a **unified view**, built on a **single source of truth** — the discipline that every fact has exactly one authoritative home, and every screen, report, and department reads that fact from its home instead of keeping a private copy. When your architect asks for budget to "consolidate customer data" or "master the customer record," this is what they're buying you: one chart, one patient, no arguments.

It is rarely glamorous work. It is the clipboard. But every dangerous, embarrassing, expensive disagreement about a customer traces back to the same disease: a fact with two homes.

So, honest count: how many charts does your customer have?

That's the whole idea. The rest is engineering.
