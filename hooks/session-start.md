# Session Start Hook

This hook describes expected behavior on every session start (startup, resume, clear, compact) to establish the Supernova skill system.

## What it Does

1. Checks for relevant skills before any task begins
2. Reminds the agent to use the v2.0 workflow: orchestrate, build, guard, modify, ship
3. Ensures `orchestrator` runs first for any project work

## Session Initialization

On session start, the agent should:

1. **Check for skills** - Before responding to ANY request, check if a Supernova skill applies
2. **Use orchestrator first** - For any project work, run `supernova:orchestrator` to detect mode and route
3. **Follow the workflow** - For new features: `orchestrate -> build -> guard -> ship`
4. **Enforce TDD** - Builder integrates TDD enforcement automatically
5. **Verify before claiming** - Builder includes verification gates before completion claims

## Skill Priority

When multiple skills could apply:
1. **Orchestration first** (orchestrator) - determine mode and route
2. **Implementation second** (builder) - execute with integrated TDD and review
3. **Security third** (guard) - validate security
4. **Completion last** (ship) - verify, commit, finish

"Build X" - orchestrator detects mode, then builder executes.
"Fix this bug" - orchestrator routes to turbo mode, then builder with inline TDD.
