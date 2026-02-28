---
name: orchestrator
description: "Unified entry point. Analyzes request, determines mode (turbo/standard/audit), routes to appropriate workflow. Replaces context-agent, design-agent, plan-writer, architect-agent."
license: MIT
metadata:
  version: "1.0.1"
  replaces: ["context-agent", "design-agent", "plan-writer", "architect-agent"]
  modes: ["turbo", "standard", "audit"]
argument-hint: "[request]"
disable-model-invocation: false
user-invocable: true
context: fork
agent: general-purpose
allowed-tools: Read Glob Grep Bash(git:*) Task
---

# Orchestrator

**Purpose:** Single entry point for all Supernova workflows. Analyzes scope, determines appropriate ceremony level, and routes to specialized agents.

**Token Optimizations:**
- Shared context across phases (no re-scanning)
- Single invocation for think+plan+route
- Mode-appropriate ceremony level

---

## Mode Detection

Auto-detect based on scope analysis:

| Mode | Criteria | Token Budget |
|------|----------|--------------|
| **Turbo** | 1-3 files, simple change, no new deps | Minimal |
| **Standard** | 3-10 files, new feature, new patterns | Moderate |
| **Audit** | 10+ files, security-sensitive, architecture change | Full |

### Detection Logic

```
IF files_affected <= 3 AND complexity == "low" AND no_new_deps:
    MODE = turbo
ELSE IF files_affected <= 10 AND complexity == "medium":
    MODE = standard
ELSE:
    MODE = audit
```

---

## Turbo Mode Flow

**For:** Bug fixes, refactors, small additions (1-3 files)

1. **Analyze** (30 seconds)
   - Parse request
   - Identify affected files
   - Check if fits turbo criteria

2. **Skip Design**
   - No design document
   - Brief mental model only

3. **Route Directly**
   - Dispatch to builder with turbo flag
   - Inline execution, no subagents

**Output:** Direct execution, ~70% token savings

---

## Standard Mode Flow

**For:** New features, moderate changes (3-10 files)

1. **Analyze** (1-2 minutes)
   - Parse request
   - Scan existing codebase patterns
   - Identify integration points

2. **Brief Design** (1-2 questions max)
   - One clarifying question if needed
   - 2-3 sentence design summary
   - No formal document

3. **Create Task List**
   - 3-7 bite-sized tasks
   - Each task: 1 file, 5-10 minutes
   - RED-GREEN-REFACTOR per task

4. **Route to Build Agent**
   - Single subagent execution
   - Basic review built-in

**Output:** `docs/.turbo/design.md`, task list, ~40% token savings

---

## Audit Mode Flow

**For:** Complex features, security-critical, architecture changes (10+ files)

1. **Deep Analysis** (2-3 minutes)
   - Full codebase scan
   - Dependency mapping
   - Constraint identification

2. **Socratic Design** (as needed)
   - Explore 2-3 approaches
   - Discuss trade-offs
   - Validate assumptions

3. **Architecture Review**
   - Pattern recommendations
   - Anti-pattern warnings
   - ADR if significant decision

4. **Detailed Planning**
   - 5-15 tasks
   - Exact file paths
   - Test strategy per task

5. **Multi-Agent Pipeline**
   - Sequential subagent execution
   - Dedicated reviewers
   - Security scan

**Output:** `docs/adr/`, detailed plan, full quality gates

---

## Quick Reference

### Turbo Examples
```
"Fix the typo in README"
"Add console.log for debugging"
"Rename variable x to userCount"
"Fix off-by-one error in loop"
```

### Standard Examples
```
"Add email validation to signup"
"Create user profile component"
"Add pagination to list view"
```

### Audit Examples
```
"Implement OAuth authentication"
"Add payment processing"
"Refactor database layer"
"Create plugin system"
```

---

## Integration

**Routes to:**
- `builder` (turbo/standard)
- `guard` (security check)
- Full pipeline (audit mode)

**Invocation Note:**
- Claude Code hooks do not currently support SessionStart events. `orchestrator` must be manually invoked by the user at the start of a session (e.g., using `/nova`) or implicitly triggered by commands relating to orchestration or context gathering.

**Required Context:**
- Current git status
- Existing file patterns
- User's intent

---

## Templates

- **Task list schema:** see `assets/TASK-LIST-TEMPLATE.json` for structured task planning

---

## Rules

1. **Always analyze first** - Never assume mode
2. **Default to turbo** - When in doubt, start minimal
3. **Escalate if needed** - Turbo can become standard mid-flight
4. **One orchestration per request** - Don't nest orchestrators
5. **Preserve context** - Pass accumulated context to next agent

