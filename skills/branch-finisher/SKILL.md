---
name: branch-finisher
description: "Use when implementation is complete and all tests pass. Guides completion by presenting structured options for merge, PR, keep, or discard. Triggers - done, finish, ship, merge, complete, land."
license: MIT
metadata:
  version: "1.0.0"
disable-model-invocation: false
user-invocable: true
context: fork
agent: general-purpose
allowed-tools: Read Glob Grep Bash(git:*) Bash(gh:*)
---

# BranchFinisher - Complete Development Work

Guide completion of development work by presenting clear options and handling the chosen workflow.

**Core principle:** Verify tests → Present options → Execute choice → Clean up.

**Announce at start:** "I'm using the branch-finisher skill to complete this work."

---

## The Process

### Step 1: Verify Tests

**Before presenting options, verify tests pass:**

```bash
npm test / cargo test / pytest / go test ./...
```

**If tests fail:**
```
Tests failing (<N> failures). Must fix before completing:

[Show failures]

Cannot proceed with merge/PR until tests pass.
```

Stop. Don't proceed to Step 2.

### Step 2: Determine Base Branch

```bash
git merge-base HEAD main 2>/dev/null || git merge-base HEAD master 2>/dev/null
```

### Step 3: Present Options

Present exactly these 4 options:

```
Implementation complete. What would you like to do?

1. Merge back to <base-branch> locally
2. Push and create a Pull Request
3. Keep the branch as-is (I'll handle it later)
4. Discard this work

Which option?
```

**Don't add explanation** - keep options concise.

### Step 4: Execute Choice

#### Option 1: Merge Locally

```bash
git checkout <base-branch>
git pull
git merge <feature-branch>
<test command>
git branch -d <feature-branch>
```

Then: Cleanup worktree (Step 5)

#### Option 2: Push and Create PR

```bash
git push -u origin <feature-branch>
gh pr create --title "<title>" --body "<summary>"
```

Then: Cleanup worktree (Step 5)

#### Option 3: Keep As-Is

Report: "Keeping branch `<name>`. Worktree preserved at `<path>`."

**Don't cleanup worktree.**

#### Option 4: Discard

**Confirm first:**
```
This will permanently delete:
- Branch <name>
- All commits: <commit-list>
- Worktree at <path>

Type 'discard' to confirm.
```

Wait for exact confirmation. If confirmed:

```bash
git checkout <base-branch>
git branch -D <feature-branch>
```

Then: Cleanup worktree (Step 5)

### Step 5: Cleanup Worktree

**For Options 1, 2, 4:**

```bash
git worktree remove <worktree-path>
```

**For Option 3:** Keep worktree.

---

## Quick Reference

| Option | Merge | Push | Keep Worktree | Cleanup Branch |
|--------|-------|------|---------------|----------------|
| 1. Merge locally |  | - | - |  |
| 2. Create PR | - |  |  | - |
| 3. Keep as-is | - | - |  | - |
| 4. Discard | - | - | - |  (force) |

---

## Red Flags

**Never:**
- Proceed with failing tests
- Merge without verifying tests on result
- Delete work without typed "discard" confirmation
- Force-push without explicit request

**Always:**
- Verify tests before offering options
- Present exactly 4 options
- Get typed confirmation for Option 4
- Clean up worktree for Options 1 & 4 only

---

## Integration

**Called by:**
- **supernova:subagent-engine** - After all tasks complete
- **supernova:plan-executor** - After all batches complete

**Pairs with:**
- **supernova:worktree-manager** - Cleans up worktree created by that skill
