# Installing Supernova for Claude Code

## AI-Assisted Installation

> **For AI agents:** Follow these steps exactly to install Supernova for the user autonomously. No user interaction is required until the verification step.

### Step 1 — Clone the repository

```bash
git clone https://github.com/mrsknetwork/supernova.git ~/.supernova
```

### Step 2 — Create the skills symlink

Claude Code discovers skills in `~/.claude/skills/`. Symlink the Supernova skills directory there.

**macOS / Linux:**
```bash
mkdir -p ~/.claude/skills
ln -sf ~/.supernova/skills ~/.claude/skills/supernova
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\skills"
cmd /c mklink /J "$env:USERPROFILE\.claude\skills\supernova" "$env:USERPROFILE\.supernova\skills"
```

### Step 3 — Create the commands symlink

Claude Code discovers slash commands in `~/.claude/commands/`. Symlink the Supernova commands.

**macOS / Linux:**
```bash
mkdir -p ~/.claude/commands
ln -sf ~/.supernova/commands/nova.md ~/.claude/commands/nova.md
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\commands"
Copy-Item "$env:USERPROFILE\.supernova\commands\nova.md" "$env:USERPROFILE\.claude\commands\nova.md"
```

### Step 4 — Verify installation

Confirm the symlinks resolve correctly.

**macOS / Linux:**
```bash
ls ~/.claude/skills/supernova/orchestrator/SKILL.md
ls ~/.claude/commands/nova.md
```

**Windows (PowerShell):**
```powershell
Get-ChildItem -Path "$env:USERPROFILE\.claude\skills\supernova\orchestrator\SKILL.md"
Get-ChildItem -Path "$env:USERPROFILE\.claude\commands\nova.md"
```

If both files exist, installation is complete.

---

## Manual Installation

### Option A — Project-Level (recommended for teams)

Clone into your project root so your team gets Supernova automatically:
```bash
# Clone into your project
git clone https://github.com/mrsknetwork/supernova.git ./supernova-plugin

# Copy skills into Claude's project-level discovery path
mkdir -p .claude/skills .claude/commands
cp -r ./supernova-plugin/skills .claude/skills/supernova
cp ./supernova-plugin/commands/nova.md .claude/commands/nova.md
```

### Option B — Global (User-Level)

Follow the AI-Assisted Installation steps above. This makes Supernova available across all projects.

---

## Available Skills

After installation, skills are invoked as `supernova:<skill-name>`:

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
| `lifecycle` | **Strategy:** SDLC phase planning and execution |
| `plan` | **Project Manager:** Agile sprint planning and ticket creation |
| `system` | **Architect:** System design and data modeling |
| `context` | **Staff Engineer:** Codebase onboarding and dependency mapping |
| `infra` | **DevOps Engineer:** Docker, CI/CD pipelines, configuration |

## What's Included

The clone contains everything Supernova needs:

| Directory | Purpose |
|-----------|---------|
| `skills/` | 15 agent skills (orchestrator, builder, guard, etc.) |
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
cd ~/.supernova && git pull
```

Symlinks ensure Claude Code picks up changes immediately.

## Uninstalling

**macOS / Linux:**
```bash
rm ~/.claude/skills/supernova
rm ~/.claude/commands/nova.md
rm -rf ~/.supernova
```

**Windows:**
```powershell
Remove-Item "$env:USERPROFILE\.claude\skills\supernova" -Recurse
Remove-Item "$env:USERPROFILE\.claude\commands\nova.md"
Remove-Item "$env:USERPROFILE\.supernova" -Recurse
```
