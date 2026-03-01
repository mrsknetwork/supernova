# Session Start Hook

This hook describes expected behavior on every session start (startup, resume, clear, compact) to establish the Supernova skill system.

## What it Does

1. Checks for relevant skills before any task begins
2. Reminds the agent to use the v2.0 workflow: orchestrate, build, guard, modify, ship
3. Ensures `orchestrator` runs first for any project work

## Session Initialization

On session start, the agent should:

1. **Classify SDLC phase first** - Before routing ANY request, determine whether it belongs to
   the lifecycle loop (planning, design, architecture, strategy, post-launch, scaling) or the
   build loop (code implementation, fixes, refactors). Lifecycle loop requests go to
   supernova:lifecycle. Build loop requests proceed to supernova:orchestrator for mode detection.
2. **Check for skills** - Before responding to ANY request, check if a Supernova skill applies
3. **Use orchestrator first** - For any project work, run `supernova:orchestrator` to detect mode and route
4. **Follow the workflow** - For new features: `orchestrate -> build -> guard -> ship`
5. **Enforce TDD** - Builder integrates TDD enforcement automatically
6. **Verify before claiming** - Builder includes verification gates before completion claims

## Skill Priority

When multiple skills could apply:
0. **Lifecycle classification** (orchestrator Step 1) - determine which loop before anything else
1. **Lifecycle partner** (lifecycle) - for all non-build SDLC phases
2. **Orchestration** (orchestrator) - determine build mode and route
3. **Implementation** (builder) - execute with integrated TDD and review
4. **Security** (guard) - validate security
5. **Completion** (ship) - verify, commit, finish

"Build X" - orchestrator detects mode, then builder executes.
"Fix this bug" - orchestrator routes to turbo mode, then builder with inline TDD.

## SDLC Phase Quick Reference

Use this to classify requests at session start:

| Request type | Loop | Skill |
|---|---|---|
| Write/fix/refactor code | Build | orchestrator -> builder |
| PRD, requirements, scope | Lifecycle | lifecycle |
| Architecture decision, ADR | Lifecycle | lifecycle |
| Database schema design | Lifecycle | lifecycle |
| API contract design | Lifecycle | lifecycle |
| Security threat model | Lifecycle | lifecycle |
| Infrastructure planning | Lifecycle | lifecycle |
| Post-launch metrics | Lifecycle | lifecycle |
| Go-to-market strategy | Lifecycle | lifecycle |
| Scaling readiness | Lifecycle | lifecycle |
| Technical debt planning | Lifecycle | lifecycle |
| Unit/integration tests | Build | orchestrator -> builder |
| CI/CD pipeline | Build | orchestrator -> ship |
| Deploy, release | Build | orchestrator -> ship |
| Debug failing code | Build | orchestrator -> debugger |
| Security scan on code | Build | guard (hook or direct) |
| Documentation | Both | docs (or lifecycle for strategy docs) |
