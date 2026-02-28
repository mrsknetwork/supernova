---
description: "Unified entry point for all Supernova operations. Supports turbo, standard, and audit modes with automatic detection."
---

# /nova Command

**Purpose:** Single entry point for all Supernova workflows.

## Usage

```bash
/nova [mode] [operation] [args]
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
/nova turbo "fix the login button"
/nova standard "add user profile page"
/nova audit "implement OAuth"
```

### Specialized Operations

```bash
/nova review              # Code review
/nova guard               # Security scan
/nova debug               # Systematic debugging
/nova modify [operation]  # Safe modifications
/nova ship                # Verify and finish
```

### SDLC Operations

```bash
/nova plan                # Sprint planning & tickets
/nova system              # Architecture & system design
/nova context             # Onboarding & codebase analysis
/nova infra               # DevOps & infrastructure config
```

## Examples

### Turbo Mode (Fast)

```bash
# Fix a typo
/nova turbo "fix typo in README"

# Quick refactor
/nova turbo "rename x to userCount"

# Add logging
/nova turbo "add console.log to debug login"
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
/nova standard "add email validation"

# Create component
/nova standard "create UserCard component"

# Add API endpoint
/nova standard "add /api/users endpoint"
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
/nova audit "implement OAuth authentication"

# Core architecture
/nova audit "refactor database layer"

# Payment system
/nova audit "add Stripe integration"
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
/nova "add user login"
```

Supernova automatically selects mode based on:
- Number of files affected
- Complexity indicators
- Security keywords

## Review Subcommand

```bash
/nova review              # Review current changes
/nova review --full       # Full team review
/nova review --security   # Security focus
/nova review --architecture # Architecture review
```

## Guard Subcommand

```bash
/nova guard               # Scan current files
/nova guard --deep        # Deep security audit
/nova guard --secrets     # Secret scan only
/nova guard --llm         # LLM injection check
```

## SDLC Subcommands

```bash
/nova plan                # Generate plan/tickets
/nova system              # Design architecture/DB
/nova context             # Explain codebase execution
/nova infra               # Configure Docker/CI pipelines
```

## Debug Subcommand

```bash
/nova debug               # Debug current issue
/nova debug "error message"
/nova debug --test        # Debug failing test
```

## Modify Subcommand

```bash
/nova modify delete src/old.py
/nova modify rename oldFunc newFunc
/nova modify bulk "v1" "v2"
/nova modify refactor extract-function
```

## Ship Subcommand

```bash
/nova ship                # Verify + commit + finish
/nova ship --commit       # Just commit
/nova ship --pr           # Create PR
/nova ship --merge        # Merge to main
/nova ship --cleanup      # Cleanup only
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
/nova turbo "fix off-by-one in pagination"
```

### Feature
```bash
/nova standard "add dark mode toggle"
```

### Security
```bash
/nova audit "implement rate limiting"
```

### Refactor
```bash
/nova standard "extract UserService from UserController"
```

### Cleanup
```bash
/nova modify delete src/legacy/
/nova ship --cleanup
```
