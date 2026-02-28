# Simplified Supernova - Production-Optimized Implementation Plan

**Goal:** Reduce Supernova from 20+ agents to 5 core agents with tiered execution modes, cutting token usage by ~60% while maintaining quality through progressive ceremony.

**Architecture:** Consolidate overlapping responsibilities into focused agents with mode-aware behavior (turbo/standard/audit). Add LLM security hardening and safe modification guards.

---

## Token Optimization Strategy

| Current Waste | Solution | Savings |
|-------------|----------|---------|
| 20 agents with duplicate context | 5 agents with shared context | ~40% |
| 3 subagent dispatches per task | 1 dispatch + inline review | ~25% |
| Mandatory full pipeline | Tiered ceremony | ~35% |

---

## Simplified Agent Architecture

```
                    TIERED MODES
   TURBO         STANDARD        AUDIT
   (1-3 files)   (3-10 files)    (10+ files/security)
   Skip design   Brief design     Full design
   No subagents  1 subagent       Multi-agent
   Inline review Basic review     Full audit
   ~70% tokens   ~100% tokens     ~150% tokens

         |
         v
   5 CORE AGENTS
   1. ORCH      2. BUILD      3. GUARD      4. MODIFY
   (Think/Plan) (Execute)     (Security)    (Safe Ops)

         |
         v
   5. SHIP (Finish & Merge)
```

---

## Task 2: Core Orchestrator Agent

**Purpose:** Unified entry point replacing context-agent, design-agent, plan-writer, and architect-agent.

**Files to Create:**
- `skills/core-orchestrator/SKILL.md`
- `skills/core-orchestrator/config.json`

**Capabilities:**
- Auto-detect mode (turbo/standard/audit) based on scope
- Shared context across phases (no re-scanning)
- Single invocation for think+plan
- Route to appropriate agent

---

## Task 3: Build Agent

**Purpose:** Execute implementation with TDD and review built-in.

**Files to Create:**
- `skills/build-agent/SKILL.md`

**Replaces:** subagent-engine, tdd-enforcer, code-review-agent, verification-gate

---

## Task 4: Guard Agent

**Purpose:** Security scanning with LLM-specific protections.

**Features:**
- LLM injection detection
- Secret scanning (20+ patterns)
- Dangerous operation blocking
- Pre-execution guards

---

## Task 5: Modify Agent

**Purpose:** Safe delete, rename, bulk update operations.

**Features:**
- Dry-run mode
- Impact analysis
- Confirmation gates
- Git stash + rollback

---

## Task 6: Ship Agent

**Purpose:** Verify, commit, and finish work.

**Replaces:** branch-finisher, worktree-manager

---

## Commands (Reduced from 10 to 5)

| Old | New |
|-----|-----|
| think, plan, build | `/supernova [turbo\|standard\|audit]` |
| review, slop | `/supernova review` |
| guard | `/supernova guard` |
| debug | `/supernova debug` |
| ship | `/supernova ship` |
| modify (NEW) | `/supernova modify` |
