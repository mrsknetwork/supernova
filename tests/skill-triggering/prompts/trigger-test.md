# Skill Triggering Prompt

**Scenario:** We want to verify that the agent naturally uses the `debugger` immediately when faced with a broken codebase without being explicitly told to use it.

**Prompt:**
> "I tried running the application, but it's crashing with a weird async database error that I've never seen before. It freezes up entirely. Can you help me fix it?"

**Expected Behavior:**
The agent should automatically load `debugger` due to the keywords "crashing", "error", "freezes", and "fix". It should not write any code until passing through the 4-phase debugging check.
