# Contributing to Supernova

Thank you for your interest in contributing to Supernova! We welcome contributions to our agent skills, commands, and core orchestration logic.

## Skill Naming & Structure

Supernova follows strict naming conventions to ensure compatibility across platform-specific plugins (Claude Code, Cursor, Antigravity, Codex, OpenCode).

### 1. Naming Convention
- **No Suffixes:** Do NOT use suffixes like `-agent` or `-skill`.
- **Bad:** `payment-agent`, `frontend-skill`.
- **Good:** `payments`, `frontend`.
- **Kebab-case:** Use `kebab-case` for multi-word names (e.g., `system-architecture`, `auth-provider`).

### 2. File Structure
Each skill must reside in its own directory within `skills/`, containing at minimum a `SKILL.md` and `evals/evals.json`.
```text
skills/
└── <skill-name>/
    ├── SKILL.md           # Core instructions and metadata (required)
    ├── evals/
    │   └── evals.json     # Test scenarios and assertions (required)
    ├── references/        # Deep-dive docs, patterns, examples (optional)
    ├── scripts/           # Automation helpers (optional)
    └── assets/            # Templates, schemas, static files (optional)
```

### 3. SKILL.md Frontmatter
Ensure the `name:` field in the frontmatter exactly matches the directory name.
```markdown
---
name: <skill-name>
description: "Brief description with trigger phrases and core purpose."
---
```

## Commands

Commands live in `commands/` as individual verb-named markdown files with YAML frontmatter:
```markdown
---
description: "Short description of what the command does"
---

Step-by-step instructions for the agent to follow.
```

Core commands: `/plan`, `/build`, `/ship`, `/audit`. To add a new command, create a new `.md` file in `commands/`.

## Pull Request Process

1. **Structure Compliance:** Ensure your skill has both `SKILL.md` and `evals/evals.json`.
2. **Path Compliance:** Ensure all instructions use portable paths (e.g., `~/.claude/skills/` vs absolute local paths).
3. **Update INSTALL.md:** If your change adds a new skill, update the skill table in all 5 `INSTALL.md` files (`.claude-plugin/`, `.cursor-plugin/`, `.antigravity/`, `.codex/`, `.opencode/`).
4. **Update README.md:** If adding a new skill, add it to the skills catalog table in `README.md`.
5. **Bump version:** Update version in `.supernova/config.json`, `hooks/hooks.json`, and both `plugin.json` files.

## Code of Conduct

Please be respectful and professional in all interactions.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](../LICENSE).
