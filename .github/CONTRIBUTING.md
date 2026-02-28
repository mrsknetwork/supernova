# Contributing to Supernova

Thank you for your interest in contributing to Supernova! We welcome contributions to our agent skills, workflows, and core orchestration logic.

## Skill Naming & Structure

Supernova follows strict naming conventions to ensure compatibility across platform-specific plugins (Claude Code, Cursor, Codex, etc.).

### 1. Naming Convention
- **No Suffixes:** Do NOT use suffixes like `-agent` or `-skill`.
- **Bad:** `research-agent`, `builder-skill`.
- **Good:** `research`, `builder`.
- **Kebab-case:** Use `kebab-case` for multi-word names (e.g., `shadcn-ui`).

### 2. File Structure
Each skill must reside in its own directory within `skills/`, containing a `SKILL.md` file.
```text
skills/
└── <skill-name>/
    └── SKILL.md
```

### 3. SKILL.md Frontmatter
Ensure the `name:` field in the frontmatter exactly matches the directory name.
```markdown
---
name: <skill-name>
description: "Brief description of the skill."
---
```

## Commands

All commands are unified under the `/nova` prefix. If you add a new specialized operation, add it as a subcommand to `commands/nova.md`.

## Pull Request Process

1. **Verify with TDD:** Ensure your skill or change has been verified using a TDD-adapted methodology.
2. **Path Compliance:** Ensure all instructions use portable paths (e.g., `~/.claude/skills/` vs absolute local paths).
3. **Template Sync:** If adding a new core capability, update any relevant templates in `assets/`.
4. **Update INSTALL.md:** If your change affects specific platform discovery, update the relevant `INSTALL.md` in `.claude-plugin/`, `.cursor-plugin/`, etc.

## Code of Conduct

Please be respectful and professional in all interactions.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](../LICENSE).
