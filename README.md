<div align="center">

# Supernova

**Unified Development Team Orchestration for Software Engineering.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: Claude](https://img.shields.io/badge/Platform-Claude_Code-blue)](.claude-plugin/INSTALL.md)
[![Platform: Cursor](https://img.shields.io/badge/Platform-Cursor-green)](.cursor-plugin/INSTALL.md)
[![Platform: Antigravity](https://img.shields.io/badge/Platform-Antigravity-purple)](.antigravity/INSTALL.md)
[![Platform: Codex](https://img.shields.io/badge/Platform-Codex-orange)](.codex/INSTALL.md)
[![Platform: OpenCode](https://img.shields.io/badge/Platform-OpenCode-black)](.opencode/INSTALL.md)

[Documentation](.github/CONTRIBUTING.md) | [Security](.github/SECURITY.md) | [Install Guide](.claude-plugin/INSTALL.md)

</div>

---

## Key Features

| Team Lead | Builder | Security | Maintenance |
|:---:|:---:|:---:|:---:|
| **Orchestrator** | **Builder** | **Guard** | **Modify** |
| Socratic design refinement and intelligent routing. | Red/Green TDD implementation with subagents. | Real-time security scanning and LLM protections. | Safe deletions, renames, and bulk updates. |

- **Unified Command:** Single entry point via `/nova`.
- **Cross-Platform:** Native support for Claude Code, Cursor, Codex, and more.
- **TDD Enforcement:** Mandatory verification gates for all code changes.
- **Subagent SDLC:** Leverages agent-skills for complex multi-step delivery.

---

## Compatibility Matrix

Supernova is designed to be platform-agnostic, providing optimized installation methods for leading AI interfaces.

| Platform | Support Level | Primary Setup | Config Format |
|----------|:-------------:|---------------|---------------|
| **Claude Code** | Full | `.claude-plugin/` | `plugin.json` |
| **Cursor** | Native | `.cursor-plugin/` | `plugin.json` |
| **Antigravity** | Beta | `.antigravity/` | `SKILL.md` |
| **Codex** | Managed | `.codex/` | `config.toml` |
| **OpenCode** | Flexible | `.opencode/` | `.opencode.json` |

---

## Getting Started

Supernova is installed as a set of **Agent Skills**. Choose your platform for detailed autonomous installation steps:

1.  **[Claude Code Guide](.claude-plugin/INSTALL.md)**
2.  **[Cursor Setup Guide](.cursor-plugin/INSTALL.md)**
3.  **[Antigravity Guide](.antigravity/INSTALL.md)**
4.  **[Codex Skill Setup](.codex/INSTALL.md)**
5.  **[OpenCode Local Setup](.opencode/INSTALL.md)**

### Quick Install (Manual)
```bash
git clone https://github.com/mrsknetwork/supernova.git
# Follow platform-specific README in dot-directories
```

---

## Unified Commands

All capabilities are accessible via the `/nova` prefix.

| Command | Description |
|---------|-------------|
| `/nova` | **Orchestrate:** Auto-detects scope and routes to best workflow. |
| `/nova build` | **Build:** Executes implementation with TDD and review. |
| `/nova guard` | **Guard:** Security scan and LLM-injection check. |
| `/nova modify` | **Modify:** Safe codebase restructuring with rollbacks. |
| `/nova ship` | **Ship:** Finalize verification and commit work. |
| `/nova debug` | **Debug:** Systematic 4-phase root cause analysis. |
| `/nova review` | **Review:** Comprehensive code quality and security audit. |

---

## Core Skills

| Skill | Role |
|-------|------|
| `orchestrator` | Core logic for design and routing. |
| `builder` | Test-driven implementation and verification. |
| `guard` | Security scanning and validation. |
| `ship` | Commits, pull requests, and workspace cleanup. |
| `debugger` | Systematic root cause investigation. |
| `modify` | Safe codebase restructuring with rollbacks. |

### SDLC Workflow Skills
These skills simulate real-world engineering roles to manage the entire Software Development Life Cycle:
| Skill | Role |
|-------|------|
| `plan` | **Project Manager:** Agile sprint planning, roadmap, and ticket breakdown. |
| `system` | **Architect:** System design, ADRs, data modeling, API contracts. |
| `context` | **Staff Engineer:** Codebase onboarding, dependency mapping, data flow analysis. |
| `infra` | **DevOps Engineer:** Docker, CI/CD pipelines, Terraform, and deployments. |

*Additional specialists: `docs`, `research`, `search`, `shadcn-ui`.*

---

## Governance and Contributing

We follow industry standards for open-source health and development.

- **[Contributing Guidelines](.github/CONTRIBUTING.md)** - Naming conventions and PR workflows.
- **[Security Policy](.github/SECURITY.md)** - Reporting vulnerabilities.
- **[License](LICENSE)** - MIT Licensed.

---

## Philosophy

1.  **Red/Green TDD:** No code without a failing test first.
2.  **Evidence over Claims:** Verify results before declaring success.
3.  **Socratic Design:** Refine requirements before writing a single line.
4.  **YAGNI & DRY:** Keep the codebase lean and maintainable.

---

Copyright (c) 2026 Kamesh. MIT License.
