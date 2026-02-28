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

### Step 3 — Create the commands symlink

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

### Step 4 — Verify installation

Confirm skills are accessible:
```bash
ls ~/.cursor/skills/supernova/orchestrator/SKILL.md
ls ~/.cursor/commands/nova.md
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

After installation, the following skills become available:

| Skill | Description |
|-------|-------------|
| `orchestrator` | Entry point — analyzes scope, detects mode, routes workflow |
| `builder` | Implementation with integrated TDD and review |
| `guard` | Security scanning with LLM-specific protections |
| `modify` | Safe delete, rename, bulk update with rollback |
| `ship` | Verify, commit, and finish work |
| `debugger` | 4-phase systematic debugging |
| `docs` | Technical and non-technical documentation |
| `research` | R&D and technology evaluation |
| `search` | Live web search and CVE lookup |
| `shadcn-ui` | Add, design, or customize UI components |
| `plan` | **Project Manager:** Agile sprint planning and ticket creation |
| `system` | **Architect:** System design and data modeling |
| `context` | **Staff Engineer:** Codebase onboarding and dependency mapping |
| `infra` | **DevOps Engineer:** Docker, CI/CD pipelines, configuration |

## What's Included

The clone contains everything Supernova needs:

| Directory | Purpose |
|-----------|---------|
| `skills/` | 14 agent skills (orchestrator, builder, guard, etc.) |
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
