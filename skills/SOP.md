# Supernova Skill SOP (Standard Operating Procedure)

This SOP defines the standardized process for creating, maintaining, and verifying skills within the Supernova ecosystem.

## 1. Directory Structure

Every skill MUST follow this structure:

```
skill-name/
├── SKILL.md           # Core instructions and metadata (REQUIRED)
├── evals/
│   └── evals.json     # Test scenarios with 3+ assertions (REQUIRED)
├── references/        # Deep-dive documentation (RECOMMENDED)
├── scripts/           # Domain-specific automation (OPTIONAL)
└── assets/            # Templates, JSON schemas, static files (OPTIONAL)
```

### Required Files
- **`SKILL.md`** — Contains frontmatter + step-by-step instructions
- **`evals/evals.json`** — Minimum 3 scenario-based test prompts with `expected_output`

### Recommended Files
- **`references/`** — Technical deep-dives, API reference patterns, cheat sheets. Keep `SKILL.md` under 500 lines and put details here.

## 2. SKILL.md Standardization

### 2.1 Frontmatter
```yaml
---
name: lower-kebab-case    # Must match directory name
description: "Trigger phrases and core purpose. Be specific, not generic."
---
```

### 2.2 Content Sections
1. **Purpose**: One-paragraph executive summary
2. **Default Tech Stack**: Technologies used, with clarification question before applying
3. **Step-by-Step Flow**: Numbered instructions (the SOP itself)
4. **Integration Points**: Upstream/downstream skill connections
5. **Rules**: Bulleted non-negotiable constraints

## 3. Execution SOP

1. **Trigger**: Identify if request matches `description` trigger phrases
2. **Clarify Stack**: Before applying defaults, ask: "Can I use the standard Supernova stack [list stacks] or do you have a preference?"
3. **Context Scan**: Read `git status` and relevant file patterns
4. **Reference Check**: Use `references/` for domain-specific patterns
5. **Script Check**: Use `scripts/` for any repetitive or deterministic task
6. **Template Use**: Use `assets/` for standardizing output formats
7. **Verification**: Run `evals/` scenarios before claiming completion

## 4. Evals Format

```json
{
  "skill_name": "skill-name",
  "version": "1.0.3",
  "evals": [
    {
      "id": "unique-scenario-id",
      "prompt": "The user prompt that triggers this skill",
      "expected_output": "What the agent should produce — specific, verifiable artifacts",
      "tags": ["domain-tag", "complexity-level"]
    }
  ]
}
```

## 5. Maintenance SOP

- Update version numbers in metadata on every significant change
- Keep `SKILL.md` under 500 lines; use `references/` for overflow
- Run evals after any SKILL.md change to verify nothing broke
- If adding a new skill, update all 5 `INSTALL.md` files + `README.md` + `config.json`
