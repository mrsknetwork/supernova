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

Start a new session in your chosen platform and ask for something that should trigger a skill (for example, "help me plan this feature" or "let's debug this issue"). The agent should automatically invoke the relevant supernova skill. Alternatively, use one of the `/supernova:*` commands.

## The Basic Workflow

1. **think** (`/think`) - Activates before writing code. Refines rough ideas through questions, explores alternatives, presents design in sections for validation. Saves design document.
2. **plan** (`/plan`) - Activates with approved design. Breaks work into bite-sized tasks (2-5 minutes each). Every task has exact file paths, complete code, verification steps.
3. **build** (`/build`) - Activates with plan. Dispatches fresh subagent per task with two-stage review (spec compliance, then code quality). Enforces RED-GREEN-REFACTOR testing.
4. **review** (`/review`) - Full team code review. Runs parallel review by systematic debugger, code review agent, and security agent.
5. **ship** (`/ship`) - Activates when tasks complete. Verifies tests, presents options (merge/PR/keep/discard), cleans up worktree.

**The agent checks for relevant skills before any task.** Mandatory workflows, not suggestions.

## What's Inside

### Commands

| Command | What it Does |
|---------|-------------|
| `/think` | Socratic design refinement - explore ideas before code |
| `/plan` | Create bite-sized implementation plan with TDD steps |
| `/build` | Build feature end-to-end with subagent execution |
| `/review` | Full team code review (architecture + debug + security) |
| `/ship` | Verify and finish - merge, PR, keep, or discard |
| `/debug` | 4-phase systematic root cause investigation |
| `/guard` | Deep security audit with CVE lookup |
| `/research` | R&D and technology evaluation |
| `/slop` | AI slop detection and cleanup |
| `/document` | Create, edit, or manage technical/non-technical docs |

### The Dev Team (Agents)

| Priority | Agent | Role |
|----------|-------|------|
| 0 | `context-agent` | Project context and scope verification |
| 0.5 | `design-agent` | Socratic design refinement |
| 1 | `architect-agent` | System design and patterns |
| 2 | `systematic-debugger` | 4-phase debugging + AI slop detection |
| 3 | `code-review-agent` | Quality gating (SOLID/DRY) |
| 4 | `security-agent` | OWASP review and CVE scanning |
| 5 | `docs-agent` | Technical & Non-Technical Documentation |
| 6 | `plan-writer` | Implementation planning |
| 7 | `subagent-engine` | Subagent-driven execution |
| 8 | `worktree-manager` | Git worktree isolation |
| 9 | `branch-finisher` | Branch completion workflow |

*(Plus cross-cutting agents like `verification-gate`, `tdd-enforcer`, `research-agent`, and `web-search-agent`)*

### Pipelines

| Pipeline | Agents |
|----------|--------|
| `full-review` | context → architect → systematic-debugger → code-review → security → docs-agent |
| `build-feature` | context → design → plan → worktree → subagent-engine → branch-finisher |
| `tdd-session` | context → worktree → tdd-enforcer → verification-gate → branch-finisher |
| `full-lifecycle` | context → design → plan → worktree → subagent-engine → [debug + code-review + security] → docs-agent → branch-finisher |

*(See `skills/master-agent/references/PIPELINES.md` for full list).*

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

## Acknowledgments

Development lifecycle skills (design-agent, plan-writer, plan-executor, subagent-engine, tdd-enforcer, systematic-debugger, worktree-manager, branch-finisher, verification-gate) were adapted from [Superpowers](https://github.com/obra/superpowers) by Jesse Vincent (MIT License).

## License

MIT License - see LICENSE file for details

## Support

- **Issues**: https://github.com/mrsknetwork/supernova/issues
