# Installing Supernova for Antigravity

Enable Supernova skills and commands in Antigravity via native skill discovery and workflows.

## Prerequisites

- Git

## Installation

There are two ways to install Supernova: **Global (User-Level)** or **Project (Codebase-Level)**.

### Global Installation (User-Level)
This makes Supernova available across all your codebases.

1. **Clone the Supernova repository:**
   ```bash
   git clone https://github.com/mrsknetwork/supernova.git ~/.antigravity/supernova
   ```

2. **Create the skills symlink:**
   Antigravity discovers skills in the global `~/.agent/skills/` directory.

   **macOS / Linux:**
   ```bash
   mkdir -p ~/.gemini/antigravity/skills
   ln -s ~/.antigravity/supernova/skills ~/.gemini/antigravity/skills/supernova
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.gemini\antigravity\skills"
   cmd /c mklink /J "$env:USERPROFILE\.gemini\antigravity\skills\supernova" "$env:USERPROFILE\.antigravity\supernova\skills"
   ```

3. **Create the workflows symlink:**
   Antigravity processes workflow commands through the `workflows` directory.

   **macOS / Linux:**
   ```bash
   mkdir -p ~/.gemini/antigravity/workflows
   ln -s ~/.antigravity/supernova/commands/nova.md ~/.gemini/antigravity/workflows/nova.md
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.gemini\antigravity\workflows"
   Copy-Item "$env:USERPROFILE\.antigravity\supernova\commands\nova.md" "$env:USERPROFILE\.gemini\antigravity\workflows\nova.md"
   ```

### Project Installation (Codebase-Level)
This makes Supernova available only within a specific project. Your team automatically gains these skills when they clone the repo.

1. **Clone Supernova into your project:**
   ```bash
   git clone https://github.com/mrsknetwork/supernova.git ./supernova-plugin
   ```

2. **Copy skills and workflows into your project:**
   Antigravity scans `.agent/skills/` and `.agent/workflows/` inside the project root.
   ```bash
   mkdir -p .agent/skills .agent/workflows
   cp -r ./supernova-plugin/skills .agent/skills/supernova
   cp ./supernova-plugin/commands/nova.md .agent/workflows/nova.md
   ```

## Available Skills

After installation, 27 skills are available:

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

## Command

The main command is `/nova`:
```bash
/nova [turbo|standard|audit] "your request"
/nova build | guard | debug | modify | ship | review | research
```

## Verify

Check the symlinks are working.

**macOS / Linux:**
```bash
ls -la ~/.gemini/antigravity/skills/supernova
ls -la ~/.gemini/antigravity/workflows/nova.md
```

**Windows (PowerShell):**
```powershell
Get-ChildItem -Path "$env:USERPROFILE\.gemini\antigravity\skills\supernova"
Get-ChildItem -Path "$env:USERPROFILE\.gemini\antigravity\workflows\nova.md"
```

## Updating

Pull the latest changes (symlinks update automatically):
```bash
cd ~/.antigravity/supernova && git pull
```

## Uninstalling

```bash
rm ~/.gemini/antigravity/skills/supernova
rm ~/.gemini/antigravity/workflows/nova.md
```
Optionally delete the clone: `rm -rf ~/.antigravity/supernova`
