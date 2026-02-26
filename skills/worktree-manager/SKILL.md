---
name: worktree-manager
description: "Use when starting feature work that needs isolation or before executing implementation plans. Creates isolated git worktrees with smart directory selection and safety verification. Triggers - worktree, isolate, new branch, workspace."
license: MIT
metadata:
  version: "1.0.0"
disable-model-invocation: false
user-invocable: true
context: fork
agent: general-purpose
allowed-tools: Read Glob Grep Bash(git:*) Bash(find:*) Bash(ls:*) Bash(mkdir:*) Bash(npm:*) Bash(cargo:*) Bash(pip:*) Bash(go:*)
---

# WorktreeManager - Git Worktree Isolation

Git worktrees create isolated workspaces sharing the same repository, allowing work on multiple branches simultaneously without switching.

**Core principle:** Systematic directory selection + safety verification = reliable isolation.

**Announce at start:** "I'm using the worktree-manager skill to set up an isolated workspace."

---

## Directory Selection Process

Follow this priority order:

### 1. Check Existing Directories

```bash
ls -d .worktrees 2>/dev/null     # Preferred (hidden)
ls -d worktrees 2>/dev/null      # Alternative
```

**If found:** Use that directory. If both exist, `.worktrees` wins.

### 2. Check CLAUDE.md

```bash
grep -i "worktree.*director" CLAUDE.md 2>/dev/null
```

**If preference specified:** Use it without asking.

### 3. Ask User

If no directory exists and no CLAUDE.md preference:

```
No worktree directory found. Where should I create worktrees?

1. .worktrees/ (project-local, hidden)
2. worktrees/ (project-local, visible)

Which would you prefer?
```

---

## Safety Verification

**MUST verify directory is ignored before creating worktree:**

```bash
git check-ignore -q .worktrees 2>/dev/null
```

**If NOT ignored:**
1. Add to `.gitignore`
2. Commit the change
3. Proceed with worktree creation

**Why critical:** Prevents accidentally committing worktree contents.

---

## Creation Steps

### 1. Detect Project Name

```bash
project=$(basename "$(git rev-parse --show-toplevel)")
```

### 2. Create Worktree

```bash
git worktree add "$path" -b "$BRANCH_NAME"
cd "$path"
```

### 3. Run Project Setup

Auto-detect and run appropriate setup:

```bash
# Node.js
if [ -f package.json ]; then npm install; fi

# Rust
if [ -f Cargo.toml ]; then cargo build; fi

# Python
if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
if [ -f pyproject.toml ]; then poetry install; fi

# Go
if [ -f go.mod ]; then go mod download; fi
```

### 4. Verify Clean Baseline

Run tests to ensure worktree starts clean:

```bash
npm test / cargo test / pytest / go test ./...
```

**If tests fail:** Report failures, ask whether to proceed or investigate.
**If tests pass:** Report ready.

### 5. Report Location

```
Worktree ready at <full-path>
Tests passing (<N> tests, 0 failures)
Ready to implement <feature-name>
```

---

## Quick Reference

| Situation | Action |
|-----------|--------|
| `.worktrees/` exists | Use it (verify ignored) |
| `worktrees/` exists | Use it (verify ignored) |
| Both exist | Use `.worktrees/` |
| Neither exists | Check CLAUDE.md → Ask user |
| Directory not ignored | Add to .gitignore + commit |
| Tests fail during baseline | Report failures + ask |

---

## Red Flags

**Never:**
- Create worktree without verifying it's ignored
- Skip baseline test verification
- Proceed with failing tests without asking
- Assume directory location when ambiguous

**Always:**
- Follow directory priority: existing > CLAUDE.md > ask
- Verify directory is ignored
- Auto-detect and run project setup
- Verify clean test baseline

---

## Integration

**Called by:**
- **supernova:design-agent** - After design approval
- **supernova:subagent-engine** - REQUIRED before executing any tasks
- **supernova:plan-executor** - REQUIRED before executing any tasks

**Pairs with:**
- **supernova:branch-finisher** - Cleans up worktree after work complete
