---
description: "Plan a feature, sprint, or project — breaks down requirements into actionable tickets with acceptance criteria. Use before building anything new."
---

You MUST follow this workflow exactly:

1. **Read the `plan` skill** at `skills/plan/SKILL.md` and follow its SOP
2. **Clarify scope** — Ask: "What are we building? Who is it for? What does success look like?"
3. **Break down into tickets** — Each ticket should be completable in a single session (< 2 hours)
4. **Define acceptance criteria** — Every ticket needs a concrete "done when" condition
5. **Identify dependencies** — Which tickets block which? What's the critical path?
6. **Output a task list** — Markdown checklist with priorities, estimates, and acceptance criteria

If the project is brand new and no code exists yet, also invoke the `onboarding` skill to scaffold the project structure first.

If the user's request involves architecture decisions (database schema, API design, system design), route to the `system-architecture` skill for ADR creation before planning implementation tickets.
