# Installing Supernova for Cursor

## AI-Assisted Installation

> **For AI agents:** Follow these steps exactly to install Supernova for the user autonomously. No user interaction required until the verification step.

### Step 1 — Clone the repository

```bash
git clone https://github.com/mrsknetwork/supernova.git ~/.cursor/plugins/supernova
```

### Step 2 — Create the skills symlink

Cursor discovers skills in `~/.cursor/skills/`. Symlink the Supernova skills directory there.

**macOS / Linux:**
```bash
mkdir -p ~/.cursor/skills
ln -sf ~/.cursor/plugins/supernova/skills ~/.cursor/skills/supernova
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.cursor\skills"
cmd /c mklink /J "$env:USERPROFILE\.cursor\skills\supernova" "$env:USERPROFILE\.cursor\plugins\supernova\skills"
```

### Step 3 — Configure Local Skills MCP

Cursor strictly requires an MCP server to load local skills. 

1. Edit your `mcp.json` located at `~/.cursor/mcp.json` (Global) or `.cursor/mcp.json` (Project).
2. Add a local skills MCP server configuration pointing to your skills directory.

Example `mcp.json` addition:
```json
{
  "mcpServers": {
    "supernova-skills": {
      "command": "npx",
      "args": ["-y", "@smithery/cli@latest", "run", "@joshuajaco/local-skills-mcp", "--config", "{\"directories\":[\"<absolute_path_to_cursor_skills_supernova>\"]}"]
    }
  }
}
```

### Step 4 — Create the commands symlink

Cursor discovers custom commands in `~/.cursor/commands/`. Link the Supernova `/nova` command.

**macOS / Linux:**
```bash
mkdir -p ~/.cursor/commands
ln -sf ~/.cursor/plugins/supernova/commands/nova.md ~/.cursor/commands/nova.md
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.cursor\commands"
Copy-Item "$env:USERPROFILE\.cursor\plugins\supernova\commands\nova.md" "$env:USERPROFILE\.cursor\commands\nova.md"
```

### Step 5 — Verify installation

Confirm skills are accessible.

**macOS / Linux:**
```bash
ls ~/.cursor/skills/supernova/orchestrator/SKILL.md
ls ~/.cursor/commands/nova.md
```

**Windows (PowerShell):**
```powershell
Get-ChildItem -Path "$env:USERPROFILE\.cursor\skills\supernova\orchestrator\SKILL.md"
Get-ChildItem -Path "$env:USERPROFILE\.cursor\commands\nova.md"
```

If both files exist, installation is complete.

---

## Manual Installation

### Option A — Project-Level (recommended for teams)

Makes Supernova available only within a specific project. Your team gets these skills on clone.

```bash
# Clone into your project
git clone https://github.com/mrsknetwork/supernova.git ./supernova-plugin

# Copy skills into Cursor's project-level discovery path
mkdir -p .cursor/skills .cursor/commands
cp -r ./supernova-plugin/skills .cursor/skills/supernova
cp ./supernova-plugin/commands/nova.md .cursor/commands/nova.md
```

### Option B — Global (User-Level)

Follow the AI-Assisted Installation steps above. This makes Supernova available across all projects.

---

## Available Skills

After installation, 27 skills become available:

**Foundation**
| Skill | Description |
|-------|-------------|
| `plan` | Agile sprint planning, roadmap, ticket breakdown |
| `orchestrator` | Scope analysis, complexity detection, workflow routing |
| `executor` | Task execution with built-in verification gates |
| `parallel` | Multi-agent parallel execution coordination |

**Backend**
| Skill | Description |
|-------|-------------|
| `backend` | Python / FastAPI architecture, DI, middleware |
| `api` | REST vs GraphQL API design by complexity |
| `db` | PostgreSQL schema, indexing, query optimization |

**Frontend**
| Skill | Description |
|-------|-------------|
| `frontend` | Next.js 14 / TypeScript / Tailwind / Shadcn/ui |
| `ui-ux` | Design systems, responsive layouts, accessibility |

**Infrastructure & Security**
| Skill | Description |
|-------|-------------|
| `system-architecture` | System design, ADRs, data modeling |
| `security` | JWT auth, RBAC, OWASP patterns, secret scanning |
| `devops` | Docker, CI/CD, GitHub Actions, deployments |
| `infra` | Terraform, Kubernetes, cloud provisioning |

**Operations**
| Skill | Description |
|-------|-------------|
| `audit` | Codebase health, dependency review, tech debt |
| `report` | Engineering reports, sprint summaries |
| `docs` | Technical docs, API docs, changelogs |

**Quality & Logic**
| Skill | Description |
|-------|-------------|
| `testing` | Unit (pytest/Vitest), integration, E2E (Playwright) |
| `business-logic` | Domain modeling, rule engines, state machines |
| `state-management` | Zustand, React Query, Redis, sessions |

**Integrations**
| Skill | Description |
|-------|-------------|
| `payments` | Stripe checkout, subscriptions, webhooks, refunds |
| `auth-provider` | Clerk, NextAuth.js OAuth, Supabase Auth |
| `migrations` | Alembic workflow, rollback SOP, concurrent indexes |
| `file-storage` | S3 / R2 uploads, pre-signed URLs, CDN delivery |
| `email` | Resend transactional email, Celery async sending |
| `monitoring` | Sentry, structlog, Prometheus, health checks |
| `ai-integration` | LLM APIs, streaming SSE, tool use, RAG |
| `onboarding` | Day-0 project scaffold, Docker Compose, first commit |

## What's Included

The clone contains everything Supernova needs:

| Directory | Purpose |
|-----------|---------|
| `skills/` | 27 agent skills with SOPs, evals, and references |
| `commands/` | `/nova` unified command entry point |
| `assets/` | PRD and task-list templates for plan-writer |
| `hooks/` | Git hook configs for security scanning |
| `.supernova/` | Runtime config (modes, security, optimization) |
| `tests/` | Test suite (for contributors) |

## Commands

```
/nova                   Core orchestration (auto-detects mode)
/nova build             Execute implementation with TDD
/nova guard             Security scan
/nova modify            Safe codebase modifications
/nova ship              Verify, commit, finish
/nova debug             Systematic debugging
/nova review            Full team code review
/nova research          R&D and technology evaluation
```

## Updating

```bash
cd ~/.cursor/plugins/supernova && git pull
```

Symlinks ensure Cursor picks up changes immediately.

## Uninstalling

**macOS / Linux:**
```bash
rm ~/.cursor/skills/supernova
rm ~/.cursor/commands/nova.md
rm -rf ~/.cursor/plugins/supernova
```

**Windows:**
```powershell
Remove-Item "$env:USERPROFILE\.cursor\skills\supernova" -Recurse
Remove-Item "$env:USERPROFILE\.cursor\commands\nova.md"
Remove-Item "$env:USERPROFILE\.cursor\plugins\supernova" -Recurse
```
