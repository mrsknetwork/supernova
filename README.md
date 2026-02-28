# Supernova

Supernova is a complete software development workflow and AI Dev Team Orchestrator for your coding agents, built on top of a set of composable "skills" and pipelines. From design to ship - code review, security auditing, TDD enforcement, and AI slop detection.

## How it works

It starts from the moment you fire up your coding agent. As soon as it sees that you're building something, it *doesn't* just jump into trying to write code. Instead, it steps back and asks you what you're really trying to do through Socratic design refinement.

Once the design is approved, your agent puts together an implementation plan. It emphasizes true red/green TDD, YAGNI, and DRY.

Next up, it launches a *subagent-driven-development* process, having agents work through each engineering task, inspecting and reviewing their work. 

Finally, a specialized review team (including architecture, debugging, and security) audits the code before it is shipped.

## Installation

**Note:** Installation differs by platform. Claude Code or Cursor have built-in plugin marketplaces.

### Claude Code (via Plugin Marketplace)

In Claude Code, register the marketplace first:

```bash
/plugin marketplace add mrsknetwork/supernova-marketplace
```

Then install the plugin from this marketplace:

```bash
/plugin install supernova@supernova-marketplace
```

### Cursor (via Plugin Marketplace)

In Cursor Agent chat, install from marketplace:

```text
/plugin-add supernova
```

### Antigravity

For instructions on adding Supernova to Google Antigravity, see the **[Antigravity Setup Guide](.antigravity/INSTALL.md)**.

### OpenCode

For instructions on loading Supernova's Dev Team into OpenCode (globally or locally), see the **[OpenCode Setup Guide](.opencode/INSTALL.md)**.

### Codex

For instructions on native skill discovery and symlinking in Codex, see the **[Codex Setup Guide](.codex/INSTALL.md)**.

### Via Local Plugin

```bash
# Clone the plugin
git clone https://github.com/mrsknetwork/supernova.git

# Load in Claude Code
claude --plugin-dir ./supernova
```

### Verify Installation

Start a new session in your chosen platform. Because Claude Code does not yet support automatic `SessionStart` hooks, you must manually launch the orchestrator to build context if you want full team capabilities immediately.

You can trigger it by asking for something that should trigger a skill (for example, "help me plan this feature" or "let's debug this issue"). The agent will automatically invoke the relevant supernova skill. Alternatively, to initiate the core orchestration explicitly, use one of the `/nova` commands (e.g. `/nova`).

## The Basic Workflow

1. **orchestrate** (`/nova`) - Analyzes your request, detects scope (turbo/standard/audit), and routes to the right workflow automatically.
2. **build** (`/nova build`) - Executes implementation with integrated TDD and review. Handles inline (turbo), single subagent (standard), or multi-agent (audit) execution.
3. **guard** (`/nova guard`) - Comprehensive security scanning with LLM-specific protections. Runs automatically on file writes via hooks.
4. **modify** (`/nova modify`) - Safe delete, rename, and bulk update operations with dry-run preview and rollback support.
5. **ship** (`/nova ship`) - Verifies tests, commits, and finishes work via merge, PR, or cleanup.

**The agent checks for relevant skills before any task.** Mandatory workflows, not suggestions.

## What's Inside

### Commands

| Command | What it Does |
|---------|-------------|
| `/nova` | Core orchestration - auto-detects mode and routes |
| `/nova build` | Execute implementation with integrated TDD and review |
| `/nova guard` | Security scanning with LLM-specific protections |
| `/nova modify` | Safe codebase modifications with rollback |
| `/nova ship` | Verify, commit, and finish - merge, PR, or cleanup |
| `/nova review` | Full team code review (debug + quality + security) |
| `/nova debug` | 4-phase systematic root cause investigation |
| `/nova research` | R&D and technology evaluation |
| `/document` | Create, edit, or manage technical/non-technical docs |

### The Dev Team (Core Skills)

| Priority | Skill | Role | Replaces |
|----------|-------|------|----------|
| 0 | `orchestrator` | Analyzes scope, detects mode, routes to workflow | `context-agent`, `design-agent`, `plan-writer`, `architect-agent` |
| 1 | `builder` | Executes with integrated TDD and review | `subagent-engine`, `tdd-enforcer`, `code-review-agent`, `verification-gate` |
| 2 | `guard` | Security scanning with LLM protections | `security-agent` |
| 3 | `modify` | Safe delete, rename, bulk update with rollback | (new capability) |
| 4 | `ship` | Verify, commit, and finish work | `branch-finisher`, `worktree-manager` |

#### Specialist Skills (still active)

| Skill | Role |
|-------|------|
| `debugger` | 4-phase debugging + AI slop detection |
| `docs` | Technical and non-technical documentation |
| `research` | R&D, tech eval, POC design |
| `search` | Live search, CVE lookup, package registry |

### Pipelines

| Pipeline | Flow |
|----------|------|
| `default` | orchestrator -> builder -> guard -> ship |
| `full-review` | orchestrator -> debugger -> builder (review) -> guard -> docs |
| `quick-fix` | orchestrator (turbo) -> builder (inline) -> ship |

## Philosophy

- **Test-Driven Development** - Write tests first, always
- **Systematic over ad-hoc** - Process over guessing
- **Complexity reduction** - Simplicity as primary goal
- **Evidence over claims** - Verify before declaring success

## Contributing

Skills and agents live directly in this repository. To contribute:

1. Fork the repository
2. Create a branch for your skill or agent
3. Follow the `docs-agent` skill for creating and documenting new skills
4. Submit a PR

See `skills/docs-agent/SKILL.md` for the complete guide.

## Updating

### Via Local Plugin
Skills and pipelines update automatically when you update the plugin repository:

```bash
cd supernova && git pull
```

### Via Plugin Marketplace
Skills update automatically when you update the plugin:

```bash
/plugin update supernova
```

## License

MIT License - see LICENSE file for details

## Support

- **Issues**: [GitHub Issues](https://github.com/mrsknetwork/supernova/issues)
