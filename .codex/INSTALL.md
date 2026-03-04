# Installing Supernova for Codex CLI

## AI-Assisted Installation

> **For AI agents:** Follow these steps exactly to install Supernova for the user autonomously. No user interaction required until the verification step.

### Step 1 — Clone the repository

```bash
git clone https://github.com/mrsknetwork/supernova.git ~/.codex/supernova
```

### Step 2 — Create the skills symlink

Codex discovers skills in `~/.codex/skills/` (user-level). Symlink the Supernova skills directory there.

**macOS / Linux:**
```bash
mkdir -p ~/.codex/skills
ln -sf ~/.codex/supernova/skills ~/.codex/skills/supernova
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.codex\skills"
cmd /c mklink /J "$env:USERPROFILE\.codex\skills\supernova" "$env:USERPROFILE\.codex\supernova\skills"
```

### Step 3 — Verify installation

Confirm skills are accessible.

**macOS / Linux:**
```bash
ls ~/.codex/skills/supernova/orchestrator/SKILL.md
```

**Windows (PowerShell):**
```powershell
Get-ChildItem -Path "$env:USERPROFILE\.codex\skills\supernova\orchestrator\SKILL.md"
```

If the file exists, installation is complete. Restart Codex to discover the new skills.

### Step 4 — Verify in Codex

Run `/skills` or type `$` in Codex to list available skills. You should see Supernova skills listed.

---

## Manual Installation

### Option A — Project-Level (recommended for teams)

Makes Supernova available only within a specific project. Your team gets these skills when they clone the repo.

```bash
# Clone into your project
git clone https://github.com/mrsknetwork/supernova.git ./supernova-plugin

# Copy skills into Codex's project-level discovery path
mkdir -p .agents/skills
cp -r ./supernova-plugin/skills .agents/skills/supernova
```

Codex scans `.agents/skills/` recursively from your working directory up to the repo root.

### Option B — Using the skill installer

From within Codex, use the built-in installer:
```
$skill-installer install supernova skills from ~/.codex/supernova/skills
```

---

## Available Skills

After installation, invoke skills with `$skill-name` or let Codex match them implicitly:

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

Invoke via skill prompt or `/nova` prefix:

```
$orchestrator               Auto-detect mode and route
$builder                    Implementation with TDD
$guard                      Security scan
$debugger                   Systematic debugging
/nova build | guard | debug | modify | ship | review | research
```

## Skill Configuration

Disable individual skills via `~/.codex/config.toml`:

```toml
[[skills.config]]
path = "~/.codex/skills/supernova/research/SKILL.md"
enabled = false
```

Restart Codex after config changes.

## Updating

```bash
cd ~/.codex/supernova && git pull
```

Symlinks ensure Codex picks up changes. Restart Codex to reload skills.

## Uninstalling

**macOS / Linux:**
```bash
rm ~/.codex/skills/supernova
rm -rf ~/.codex/supernova
```

**Windows:**
```powershell
Remove-Item "$env:USERPROFILE\.codex\skills\supernova" -Recurse
Remove-Item "$env:USERPROFILE\.codex\supernova" -Recurse
```
