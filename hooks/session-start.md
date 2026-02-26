# Session Start Hook

This hook runs on every session start (startup, resume, clear, compact) to establish the Supernova skill system.

## What it Does

1. Checks for relevant skills before any task begins
2. Reminds the agent to use the `think → plan → build → review → ship` workflow
3. Ensures `context-agent` is always invoked first for any project work

## Session Initialization

On session start, the agent should:

1. **Check for skills** - Before responding to ANY request, check if a Supernova skill applies
2. **Use context-agent first** - For any project work, run `supernova:context-agent` before other agents
3. **Follow the workflow** - For new features: `think → plan → build → review → ship`
4. **Enforce TDD** - Any implementation must follow `supernova:tdd-enforcer`
5. **Verify before claiming** - Use `supernova:verification-gate` before any completion claims

## Skill Priority

When multiple skills could apply:
1. **Process skills first** (design-agent, systematic-debugger) - determine HOW to approach
2. **Implementation skills second** (plan-writer, subagent-engine) - guide execution
3. **Review skills third** (code-review-agent, security-agent) - validate quality

"Build X" → think first, then plan, then build.
"Fix this bug" → debug first, then tdd-enforcer.
