# Pipeline Definitions

Detailed behavior for each named pipeline.

## `full-review`
**When to use:** Complete project audit - architecture through documentation.
**Sequence:** context → architect → debug → code-review → security → docs-agent
**Output:** Full report with architecture ADRs, bug list, code quality score, security findings, and auto-generated docs.

## `build-feature` (New in v2.0)
**When to use:** Full end-to-end development of a new feature using subagents.
**Sequence:** context → design-agent → plan-writer → worktree-manager → subagent-engine → branch-finisher
**Focus:** Socratic design, explicit planning, TDD-driven execution in an isolated worktree.

## `tdd-session` (New in v2.0)
**When to use:** Pure test-driven implementation session.
**Sequence:** context → worktree-manager → tdd-enforcer → verification-gate → branch-finisher
**Focus:** Strict Red-Green-Refactor loop with evidence-based verification before completion.

## `full-lifecycle` (New in v2.0)
**When to use:** Deepest level of execution + review for critical features.
**Sequence:** context → design-agent → plan-writer → worktree-manager → subagent-engine → [debug + code-review + security] → docs-agent → branch-finisher
**Focus:** Full development lifecycle immediately followed by a parallel audit from three specialized agents.

## `parallel-review`
**When to use:** Fast comprehensive review when time matters.
**Sequence:** context → [debug + code-review + security] (parallel)
**Focus:** All three review agents run simultaneously for faster feedback.

## `parallel-deep`
**When to use:** Maximum coverage for critical code or production releases.
**Sequence:** context → [debug + code-review + security + architect + docs-agent] (parallel)
**Focus:** Five agents in parallel for comprehensive analysis.

## Custom Pipelines
Users can request custom agent sequences:
> "Run architect, then web-search, then security on this design doc"

Honor these requests by activating agents in the specified order.
