---
description: "Unified entry point for all Supernova operations. Supports turbo, standard, and audit modes with automatic detection."
---

# /supernova Command

**Purpose:** Single entry point for all Supernova workflows.

## Usage

```bash
/supernova [mode] [operation] [args]
```

## Modes

| Mode | When | Speed | Quality |
|------|------|-------|---------|
| `turbo` | 1-3 files, simple | Fastest | Good |
| `standard` | 3-10 files, feature | Moderate | Better |
| `audit` | 10+ files, complex | Thorough | Best |
| `auto` | Let Supernova decide | Adaptive | Balanced |

## Subcommands

### Main Workflow

```bash
/supernova turbo "fix the login button"
/supernova standard "add user profile page"
/supernova audit "implement OAuth"
```

### Specialized Operations

```bash
/supernova review              # Code review
/supernova guard               # Security scan
/supernova debug               # Systematic debugging
/supernova modify [operation]  # Safe modifications
/supernova ship                # Verify and finish
```

## Examples

### Turbo Mode (Fast)

```bash
# Fix a typo
/supernova turbo "fix typo in README"

# Quick refactor
/supernova turbo "rename x to userCount"

# Add logging
/supernova turbo "add console.log to debug login"
```

**What happens:**
1. No design phase
2. Inline execution
3. Self-review
4. Auto-commit

**Time:** 1-5 minutes
**Tokens:** ~70% savings

### Standard Mode (Balanced)

```bash
# Add a feature
/supernova standard "add email validation"

# Create component
/supernova standard "create UserCard component"

# Add API endpoint
/supernova standard "add /api/users endpoint"
```

**What happens:**
1. Brief context gathering
2. One clarifying question if needed
3. Task breakdown
4. Single subagent execution
5. Built-in review

**Time:** 10-30 minutes
**Tokens:** Baseline

### Audit Mode (Thorough)

```bash
# Security feature
/supernova audit "implement OAuth authentication"

# Core architecture
/supernova audit "refactor database layer"

# Payment system
/supernova audit "add Stripe integration"
```

**What happens:**
1. Deep analysis
2. Socratic design exploration
3. ADR document
4. Detailed task plan
5. Multi-agent review
6. Security audit
7. Architecture review

**Time:** 1-2 hours
**Tokens:** +50% (but catches issues early)

## Auto Mode

```bash
/supernova "add user login"
```

Supernova automatically selects mode based on:
- Number of files affected
- Complexity indicators
- Security keywords

## Review Subcommand

```bash
/supernova review              # Review current changes
/supernova review --full       # Full team review
/supernova review --security   # Security focus
/supernova review --architecture # Architecture review
```

## Guard Subcommand

```bash
/supernova guard               # Scan current files
/supernova guard --deep        # Deep security audit
/supernova guard --secrets     # Secret scan only
/supernova guard --llm         # LLM injection check
```

## Debug Subcommand

```bash
/supernova debug               # Debug current issue
/supernova debug "error message"
/supernova debug --test        # Debug failing test
```

## Modify Subcommand

```bash
/supernova modify delete src/old.py
/supernova modify rename oldFunc newFunc
/supernova modify bulk "v1" "v2"
/supernova modify refactor extract-function
```

## Ship Subcommand

```bash
/supernova ship                # Verify + commit + finish
/supernova ship --commit       # Just commit
/supernova ship --pr           # Create PR
/supernova ship --merge        # Merge to main
/supernova ship --cleanup      # Cleanup only
```

## Options

```bash
--dry-run          # Preview without executing
--verbose          # Detailed output
--quiet            # Minimal output
--force            # Skip confirmations
--keep-branch      # Don't delete branch after ship
--no-tests         # Skip test verification (dangerous)
--no-security      # Skip security scan (dangerous)
```

## Integration

**With Git:**
- Auto-detects branch
- Creates worktrees for isolation
- Handles commit/merge/PR

**With CI:**
- Respects CI environment
- Non-interactive mode
- Exit codes for automation

## Examples by Use Case

### Bug Fix
```bash
/supernova turbo "fix off-by-one in pagination"
```

### Feature
```bash
/supernova standard "add dark mode toggle"
```

### Security
```bash
/supernova audit "implement rate limiting"
```

### Refactor
```bash
/supernova standard "extract UserService from UserController"
```

### Cleanup
```bash
/supernova modify delete src/legacy/
/supernova ship --cleanup
```
