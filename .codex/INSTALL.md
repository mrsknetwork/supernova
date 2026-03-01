# Installing Supernova for Codex CLI

## AI-Assisted Installation

> **For AI agents:** Follow these steps exactly to install Supernova for the user autonomously. No user interaction required until the verification step.

### Step 1 — Clone the repository

```bash
git clone https://github.com/mrsknetwork/supernova.git ~/.codex/supernova
```

### Step 2 — Create the skills symlink

Codex discovers skills in `~/.agents/skills/` (user-level). Symlink the Supernova skills directory there.

**macOS / Linux:**
```bash
mkdir -p ~/.agents/skills
ln -sf ~/.codex/supernova/skills ~/.agents/skills/supernova
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\skills"
cmd /c mklink /J "$env:USERPROFILE\.agents\skills\supernova" "$env:USERPROFILE\.codex\supernova\skills"
```

### Step 3 — Verify installation

Confirm skills are accessible.

**macOS / Linux:**
```bash
ls ~/.agents/skills/supernova/orchestrator/SKILL.md
```

**Windows (PowerShell):**
```powershell
Get-ChildItem -Path "$env:USERPROFILE\.agents\skills\supernova\orchestrator\SKILL.md"
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
path = "~/.agents/skills/supernova/research/SKILL.md"
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
rm ~/.agents/skills/supernova
rm -rf ~/.codex/supernova
```

**Windows:**
```powershell
Remove-Item "$env:USERPROFILE\.agents\skills\supernova" -Recurse
Remove-Item "$env:USERPROFILE\.codex\supernova" -Recurse
```
