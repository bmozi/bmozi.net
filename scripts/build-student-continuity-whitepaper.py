from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


OUTPUT = "public/wgu/student-continuity-fabric-reference-architecture.pdf"
TITLE = "The Student Continuity Fabric"
SUBTITLE = "A Reference Architecture for Online Competency-Based Institutions"


def on_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(colors.HexColor("#0a0d11"))
    canvas.setFont("Helvetica-Bold", 8)
    canvas.drawString(0.72 * inch, 0.45 * inch, "BMOZI / Student Continuity Fabric")
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(7.78 * inch, 0.45 * inch, str(doc.page))
    canvas.restoreState()


def styles():
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "Title",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=34,
            leading=37,
            textColor=colors.HexColor("#0a0d11"),
            spaceAfter=12,
        ),
        "subtitle": ParagraphStyle(
            "Subtitle",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=15,
            leading=21,
            textColor=colors.HexColor("#47616c"),
            spaceAfter=18,
        ),
        "h1": ParagraphStyle(
            "H1",
            parent=base["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=19,
            leading=23,
            textColor=colors.HexColor("#0a0d11"),
            spaceBefore=16,
            spaceAfter=8,
        ),
        "h2": ParagraphStyle(
            "H2",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=13,
            leading=17,
            textColor=colors.HexColor("#0a0d11"),
            spaceBefore=10,
            spaceAfter=5,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=colors.HexColor("#26343b"),
            spaceAfter=7,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.7,
            leading=12,
            textColor=colors.HexColor("#344750"),
        ),
        "label": ParagraphStyle(
            "Label",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=8,
            leading=10,
            textColor=colors.HexColor("#ff4fd8"),
            spaceAfter=5,
        ),
        "quote": ParagraphStyle(
            "Quote",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=14,
            leading=19,
            textColor=colors.HexColor("#0a0d11"),
            leftIndent=12,
            borderColor=colors.HexColor("#19d6c5"),
            borderWidth=2,
            borderPadding=8,
            spaceBefore=10,
            spaceAfter=14,
        ),
    }


def p(text, style):
    return Paragraph(text, style)


def bullet_list(items, style):
    story = []
    for item in items:
        story.append(p(f"- {item}", style))
    return story


def make_table(rows, col_widths):
    table = Table(rows, colWidths=col_widths, hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0a0d11")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, 0), 8),
                ("LEADING", (0, 0), (-1, 0), 10),
                ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#bac6ce")),
                ("BACKGROUND", (0, 1), (-1, -1), colors.white),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return table


def build():
    style = styles()
    doc = BaseDocTemplate(
        OUTPUT,
        pagesize=letter,
        leftMargin=0.7 * inch,
        rightMargin=0.7 * inch,
        topMargin=0.65 * inch,
        bottomMargin=0.72 * inch,
        title=TITLE,
        author="BMOZI",
        subject=SUBTITLE,
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=on_page)])

    story = [
        Spacer(1, 0.45 * inch),
        p(TITLE, style["title"]),
        p(SUBTITLE, style["subtitle"]),
        p(
            "Online universities do not need another dashboard. They need a continuity layer that makes it impossible for students to disappear between systems.",
            style["quote"],
        ),
        p(
            "The Student Continuity Fabric is a governed event, identity, timeline, and action layer for online institutions. Its job is not to replace CRM, SIS, data, workflow, or support platforms. Its job is to govern the seams where students lose trust.",
            style["body"],
        ),
        p("Public reference artifact. Deeper implementation details should remain in a private invention-disclosure packet until IP strategy is settled.", style["small"]),
        PageBreak(),
        p("1. The Failure Modes", style["h1"]),
        p(
            "The named pain is not generic digital transformation. It is the repeated student experience of being dropped between systems: documents vanish, statuses change silently, queues have no visible owner, different teams give different answers, and AI action can be unsafe when authority is unclear.",
            style["body"],
        ),
        *bullet_list(
            [
                "Black holes: a submission is received somewhere but visible nowhere.",
                "Silent changes: material student state changes without notice, reason, or audit context.",
                "Fragmented truth: CRM, SIS, records, support, and analytics each hold partial context.",
                "Ownerless queues: work ages without a named accountable person or team.",
                "Unsafe AI action: an agent can recommend or act without purpose, relationship, and tiered authority.",
            ],
            style["body"],
        ),
        p("2. The Target Architecture", style["h1"]),
        p(
            "The fabric is deliberately thin. It lets systems of record stay sovereign while requiring material transitions to become governed continuity events.",
            style["body"],
        ),
    ]

    component_rows = [
        [p("Component", style["label"]), p("Purpose", style["label"])],
        [p("Governed timeline", style["small"]), p("Student-visible lifecycle for documents, decisions, commitments, and status changes.", style["small"])],
        [p("Identity spine", style["small"]), p("Resolution layer across CRM, SIS, LMS, records, support, and data systems.", style["small"])],
        [p("Event contracts", style["small"]), p("Actor, purpose, source, schema, correlation, replay, and visibility rules.", style["small"])],
        [p("Owner/SLA projections", style["small"]), p("Views proving every queue item has owner, clock, threshold, and escalation path.", style["small"])],
        [p("Competency ledger", style["small"]), p("Durable academic-progress substrate for mastery and accreditation evidence.", style["small"])],
        [p("AI action gateway", style["small"]), p("Per-action authorization, tiered autonomy, purpose-bound access, and audit.", style["small"])],
    ]
    story.extend([make_table(component_rows, [1.7 * inch, 4.9 * inch]), PageBreak()])

    story.extend(
        [
            p("3. Proof Slice", style["h1"]),
            p(
                "Lead with one slice: transcript or document intake -> student-visible status -> named owner -> SLA timer -> escalation -> audit trail. This proves the category in a way executives, engineers, and students can all understand.",
                style["body"],
            ),
        ]
    )
    story.extend(
        bullet_list(
            [
                "Status appears within 60 seconds of receipt.",
                "Every status has owner, queue, SLA, reason, and visibility state.",
                "A reasonless material change is rejected.",
                "Aging work escalates automatically before trust decays.",
                "The student journey can be rebuilt from the event stream.",
            ],
            style["body"],
        )
    )
    story.extend(
        [
            p("4. Trust Model", style["h1"]),
            p(
                "Trust is not a statement of intent. It is a set of enforceable controls: FERPA purpose tags, relationship-based access, data classification, retention, no restricted data in prompts, and AI action tiers that keep official decisions human.",
                style["body"],
            ),
        ]
    )
    trust_rows = [
        [p("Tier", style["label"]), p("Rule", style["label"])],
        [p("Tier 0", style["small"]), p("Retrieve and summarize inside the human caller's own access rights.", style["small"])],
        [p("Tier 1", style["small"]), p("Suggest to staff; human remains the actuator.", style["small"])],
        [p("Tier 2", style["small"]), p("Student-facing nudge inside approved templates, caps, and opt-out rules.", style["small"])],
        [p("Tier 3", style["small"]), p("Consequential action requires named human approval.", style["small"])],
        [p("Tier 4", style["small"]), p("Academic, aid, conferral, and discipline decisions remain human only.", style["small"])],
    ]
    story.extend([make_table(trust_rows, [1.2 * inch, 5.4 * inch]), PageBreak()])

    story.extend(
        [
            p("5. Scale Math", style["h1"]),
            p(
                "Continuity has to be credible at institutional scale. The event volume, replay time, retention, storage, support, and AI gateway costs should be modeled per student per term before broad rollout.",
                style["body"],
            ),
            p("Continuity cost = event transport + storage + replay + support + audit + AI gateway.", style["quote"]),
            p("6. 90-Day Adoption Path", style["h1"]),
        ]
    )
    adoption_rows = [
        [p("Window", style["label"]), p("Work", style["label"]), p("Exit criteria", style["label"])],
        [p("Days 1-30", style["small"]), p("Map one document journey, owner model, event contract, and student-visible states.", style["small"]), p("Current black-hole rate and silent-change baseline agreed.", style["small"])],
        [p("Days 31-60", style["small"]), p("Build Slice 1 with intake, status, owner, SLA, escalation, and audit.", style["small"]), p("Demo closes the black hole end to end.", style["small"])],
        [p("Days 61-90", style["small"]), p("Pilot one cohort, monitor SLOs, measure contact deflection and trust signals.", style["small"]), p("Fund next slice only if measured failures decline.", style["small"])],
    ]
    story.extend([make_table(adoption_rows, [1.1 * inch, 2.75 * inch, 2.75 * inch]), PageBreak()])

    story.extend(
        [
            p("7. Evidence Ledger", style["h1"]),
            p(
                "Confidence comes before conviction. Public evidence supports the need for this reference architecture: large online enrollment scale, complex CRM and automation estates, cloud data platforms, contact-center integrations, service-management footprints, and skills infrastructure. Exact implementation choices still require internal discovery.",
                style["body"],
            ),
        ]
    )
    story.extend(
        bullet_list(
            [
                "Verify current system-of-record ownership by domain.",
                "Replace illustrative event-volume baselines with actual topic volume, peak, retention, and replay data.",
                "Inspect Salesforce boundary health and duplicated workflow logic.",
                "Trace student complaints through CRM, SIS, records, support, data, and identity boundaries.",
            ],
            style["body"],
        )
    )
    story.extend(
        [
            p("8. Evaluation Rubric", style["h1"]),
            p(
                "Can the current stack pass the Student Continuity test? Score it against no silent changes, named owner on every queue, student-visible lifecycle, replayable audit, per-action AI authorization, system-of-record clarity, and cost per student per term.",
                style["body"],
            ),
            p("9. IP Caution", style["h1"]),
            p(
                "If this combination is commercially protectable, complete an invention disclosure and patent/prior-art review before publishing deep implementation detail. This paper is not legal advice. The deepest material belongs in a private disclosure packet until strategy is settled.",
                style["body"],
            ),
        ]
    )

    doc.build(story)


if __name__ == "__main__":
    build()
