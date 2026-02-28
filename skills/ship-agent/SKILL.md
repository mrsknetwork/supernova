---
name: ship-agent
description: "Verify, commit, and finish work. Handles merge, PR creation, cleanup. Replaces branch-finisher and worktree-manager."
license: MIT
metadata:
  version: "2.0.0"
  replaces: ["branch-finisher", "worktree-manager"]
  operations: ["verify", "commit", "pr", "merge", "cleanup"]
argument-hint: "[operation]"
disable-model-invocation: false
user-invocable: true
context: fork
agent: general-purpose
allowed-tools: Read Glob Grep Bash(git:*) Write Edit
---

# Ship Agent

**Purpose:** Complete the development workflow. Verify changes, commit, and ship via merge/PR/cleanup.

---

## Verification Phase

### Pre-Commit Checks

```bash
# 1. Test Suite
npm test  # or pytest, cargo test, go test

# 2. Lint Check
npm run lint  # or flake8, clippy, golint

# 3. Build Check
npm run build  # or cargo build, go build

# 4. Security Scan
guard-agent scan

# 5. Git Status
git status
```

### Verification Results

```
┌─────────────────────────────────────────┐
│ VERIFICATION RESULTS                    │
├─────────────────────────────────────────┤
│ Tests:      42/42 passed ✅             │
│ Lint:       0 errors, 0 warnings ✅     │
│ Build:      Success ✅                  │
│ Security:   Clean ✅                    │
│ Coverage:   87% ✅                      │
│                                         │
│ Git Status:                             │
│   M src/feature.js                      │
│   A src/feature.test.js                 │
│   M package.json                        │
│                                         │
│ Ready to commit ✅                      │
└─────────────────────────────────────────┘
```

---

## Commit Phase

### Automatic Commit

```bash
# Stage all changes
git add -A

# Generate commit message
COMMIT_MSG=$(generate_commit_message)
# Format: "type(scope): description"
# Example: "feat(auth): add OAuth integration"

# Commit with sign-off
git commit -s -m "$COMMIT_MSG"
```

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

### Example

```bash
feat(auth): add OAuth integration

- Implement OAuth 2.0 flow
- Add token refresh logic
- Create auth middleware

Closes #123
```

---

## Ship Options

### Option 1: Merge (Fast-Forward)

**When:** Single commit, clean history, no review needed

```bash
# Switch to main
git checkout main

# Merge feature branch
git merge --ff-only feature/oauth

# Push
git push origin main

# Cleanup
git branch -d feature/oauth
```

### Option 2: Squash Merge

**When:** Multiple commits, want clean history

```bash
# Switch to main
git checkout main

# Squash merge
git merge --squash feature/oauth

# Create single commit
git commit -m "feat(auth): add OAuth integration"

# Push
git push origin main

# Cleanup
git branch -d feature/oauth
```

### Option 3: Create Pull Request

**When:** Need review, team workflow

```bash
# Push branch
git push -u origin feature/oauth

# Create PR
curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -d '{
    "title": "feat(auth): add OAuth integration",
    "body": "Implements OAuth 2.0 flow...",
    "head": "feature/oauth",
    "base": "main"
  }' \
  https://api.github.com/repos/owner/repo/pulls
```

### Option 4: Keep Branch

**When:** Not ready to merge, want to preserve

```bash
# Tag for reference
git tag -a "wip/oauth-$(date +%Y%m%d)" -m "Work in progress"

# Push tag
git push origin "wip/oauth-$(date +%Y%m%d)"

# Keep branch, clean worktree
```

### Option 5: Discard

**When:** Experimental work, not merging

```bash
# Confirm
⚠️  This will DELETE all uncommitted changes and the branch.

Proceed? [y/N]

# Execute
git checkout main
git branch -D feature/oauth

# If worktree exists
git worktree remove ../feature-oauth-worktree
```

---

## Worktree Cleanup

### Remove Worktree

```bash
# Find worktree
WORKTREE=$(git worktree list | grep feature/oauth | awk '{print $1}')

# Remove worktree
git worktree remove "$WORKTREE"

# Prune
git worktree prune
```

### Cleanup Checklist

- [ ] Worktree removed (if used)
- [ ] Branch deleted (if merged)
- [ ] Tags cleaned up
- [ ] Return to main branch

---

## PR Template

### Generated PR Description

```markdown
## Summary
Implements OAuth 2.0 authentication flow

## Changes
- Add OAuth provider integration
- Implement token refresh
- Add auth middleware
- Create login/logout handlers

## Testing
- [x] Unit tests pass (42/42)
- [x] Integration tests pass
- [x] Manual testing completed
- [x] Security review passed

## Screenshots
[If applicable]

## Related
Closes #123
```

---

## Commands

### Verify Only
```
/supernova ship verify
```

### Commit
```
/supernova ship commit -m "message"
/supernova ship commit --auto  # Generate message
```

### Create PR
```
/supernova ship pr
/supernova ship pr --draft
/supernova ship pr --reviewer @username
```

### Merge
```
/supernova ship merge
/supernova ship merge --squash
/supernova ship merge --ff-only
```

### Cleanup
```
/supernova ship cleanup
/supernova ship cleanup --keep-branch
```

### Full Ship (verify + commit + merge)
```
/supernova ship --strategy=merge
/supernova ship --strategy=pr
```

---

## Workflow Integration

### After Build Agent

```
build-agent completes → ship-agent verify → ship-agent commit
```

### After Manual Work

```
manual edits → ship-agent verify → ship-agent commit → ship-agent pr
```

### Automated Ship

```
tests pass → auto-commit → auto-merge (if safe)
```

---

## Safety Features

### Pre-Ship Checks

1. **Uncommitted changes?** → Stash or commit
2. **Tests failing?** → Block ship
3. **Security issues?** → Block ship
4. **Branch behind main?** → Suggest rebase
5. **Merge conflicts?** → Warn and guide

### Rollback

```bash
# If merge fails
git reset --hard HEAD@{1}
git checkout feature-branch

# Restore worktree
git worktree add ../feature-worktree feature-branch
```

---

## Integration

**Called by:**
- `build-agent` (after completion)
- User command `/supernova ship`

**Calls:**
- `guard-agent` (security verification)
- GitHub API (PR creation)

---

## Rules

1. **Verify first** - Never ship without checks
2. **Commit messages matter** - Generate good ones
3. **Preserve history** - Don't lose work
4. **Clean up** - Remove worktrees and branches
5. **Ship options** - Present choices, don't assume
