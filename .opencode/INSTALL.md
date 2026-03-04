# Installing Supernova for OpenCode

## AI-Assisted Installation

> **For AI agents:** Follow these steps exactly to install Supernova for the user autonomously. No user interaction required until the verification step.

### Step 1 — Clone the repository

```bash
git clone https://github.com/mrsknetwork/supernova.git ~/.config/opencode/supernova
```

### Step 2 — Create the skills symlink

OpenCode discovers skills in `~/.opencode/skills/` (user-level) or `.opencode/skills/` (project-level).

**macOS / Linux:**
```bash
mkdir -p ~/.opencode/skills
ln -sf ~/.config/opencode/supernova/skills ~/.opencode/skills/supernova
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.opencode\skills"
cmd /c mklink /J "$env:USERPROFILE\.opencode\skills\supernova" "$env:USERPROFILE\.config\opencode\supernova\skills"
```

### Step 3 — Verify installation

Confirm skills are accessible.

**macOS / Linux:**
```bash
ls ~/.opencode/skills/supernova/orchestrator/SKILL.md
```

**Windows (PowerShell):**
```powershell
Get-ChildItem -Path "$env:USERPROFILE\.opencode\skills\supernova\orchestrator\SKILL.md"
```

If the file exists, installation is complete. Restart OpenCode to discover the new skills.

### Step 4 — Verify in OpenCode

Ask OpenCode to list available skills:
```
List all available skills
```

You should see Supernova skills (`orchestrator`, `builder`, `guard`, etc.) listed.

---

## Manual Installation

### Option A — Project-Level (recommended for teams)

Makes Supernova available only within a specific project. Your team gets these skills on clone.

```bash
# Clone into your project
git clone https://github.com/mrsknetwork/supernova.git ./supernova-plugin

# Copy skills into OpenCode's project-level discovery path
mkdir -p .opencode/skills
cp -r ./supernova-plugin/skills .opencode/skills/supernova
```

OpenCode scans `.opencode/skills/` recursively from your working directory up to the git root.

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

## Skill Permissions

Configure skill permissions in your `.opencode.json`:

```json
{
  "skills": {
    "permissions": {
      "allow": ["supernova/*"],
      "deny": []
    }
  }
}
```

## Updating

```bash
cd ~/.config/opencode/supernova && git pull
```

Symlinks ensure OpenCode picks up changes. Restart OpenCode to reload skills.

## Uninstalling

**macOS / Linux:**
```bash
rm ~/.opencode/skills/supernova
rm -rf ~/.config/opencode/supernova
```

**Windows:**
```powershell
Remove-Item "$env:USERPROFILE\.opencode\skills\supernova" -Recurse
Remove-Item "$env:USERPROFILE\.config\opencode\supernova" -Recurse
```
