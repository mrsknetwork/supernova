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
   mkdir -p ~/.agent/skills
   ln -s ~/.antigravity/supernova/skills ~/.agent/skills/supernova
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agent\skills"
   cmd /c mklink /J "$env:USERPROFILE\.agent\skills\supernova" "$env:USERPROFILE\.antigravity\supernova\skills"
   ```

3. **Create the workflows symlink:**
   Antigravity processes workflow commands through the `workflows` directory.

   **macOS / Linux:**
   ```bash
   mkdir -p ~/.agent/workflows
   ln -s ~/.antigravity/supernova/commands ~/.agent/workflows/supernova
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agent\workflows"
   cmd /c mklink /J "$env:USERPROFILE\.agent\workflows\supernova" "$env:USERPROFILE\.antigravity\supernova\commands"
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
   cp -r ./supernova-plugin/commands .agent/workflows/supernova
   ```

## Available Skills

After installation, the following skills are available:

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

## What's Included

The clone contains everything Supernova needs:

| Directory | Purpose |
|-----------|---------|
| `skills/` | 13 agent skills (orchestrator, builder, guard, etc.) |
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

Check the symlinks are working:
```bash
ls -la ~/.agent/skills/supernova
ls -la ~/.agent/workflows/supernova
```

## Updating

Pull the latest changes (symlinks update automatically):
```bash
cd ~/.antigravity/supernova && git pull
```

## Uninstalling

```bash
rm ~/.agent/skills/supernova
rm ~/.agent/workflows/supernova
```
Optionally delete the clone: `rm -rf ~/.antigravity/supernova`
