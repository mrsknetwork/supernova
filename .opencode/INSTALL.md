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

Confirm skills are accessible:
```bash
ls ~/.opencode/skills/supernova/orchestrator/SKILL.md
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
