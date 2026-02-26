---
description: Use this command to create, edit, or manage technical and non-technical documentation.
trigger: /supernova:document
---

# `supernova:document`

**Purpose**: Starts the documentation workflow to create or edit written content for the project.

**When to use**:
- You need a new README.md, API documentation, docstrings, or system diagrams.
- You need non-technical content like user guides, release notes, or product specs.
- You need an existing document edited for tone, clarity, or formatting.

**Agent Behavior**:
1. Invokes the `docs-agent` agent (Supernova's comprehensive Documentation & Content Agent).
2. The agent analyzes the target audience (technical vs. non-technical).
3. The agent generates, edits, or formats the requested document following project standards.

**Example Usage**:
- `/supernova:document Write a Quick Start guide for the README`
- `/supernova:document Generate JSDoc comments for the Auth module`
- `/supernova:document Draft release notes for our v2.0 update`
