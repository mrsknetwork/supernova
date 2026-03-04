# Skill Triggering Prompt

**Scenario:** We want to verify that the agent naturally routes to the correct skill (via `orchestrator`) when faced with a broken codebase without being explicitly told which skill to use.

**Prompt:**
> "I tried running the application, but it's crashing with a weird async database error that I've never seen before. It freezes up entirely. Can you help me fix it?"

**Expected Behavior:**
The agent should automatically route through `orchestrator` to the `executor` skill due to the keywords "crashing", "error", "freezes", and "fix". It should investigate root cause before writing any code fixes.
