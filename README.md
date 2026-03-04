<div align="center">

# Supernova

**Agent Skills for AI-Powered Development - Ship Production Apps 10x Faster.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 27](https://img.shields.io/badge/Skills-27-brightgreen)]()
[![Platform: Claude](https://img.shields.io/badge/Platform-Claude_Code-orange)](.claude-plugin/INSTALL.md)
[![Platform: Cursor](https://img.shields.io/badge/Platform-Cursor-green)](.cursor-plugin/INSTALL.md)
[![Platform: Antigravity](https://img.shields.io/badge/Platform-Antigravity-blue)](.antigravity/INSTALL.md)
[![Platform: Codex](https://img.shields.io/badge/Platform-Codex-purple)](.codex/INSTALL.md)
[![Platform: OpenCode](https://img.shields.io/badge/Platform-OpenCode-black)](.opencode/INSTALL.md)

[Documentation](.github/CONTRIBUTING.md) | [Security](.github/SECURITY.md) | [Install Guide](.claude-plugin/INSTALL.md)

</div>

---

## What is Supernova?

Supernova is a collection of **27 agent skills** for AI coding tools like Claude Code, Cursor, Codex, OpenCode, and Antigravity.

**The Problem:** Vibe-coders and non-technical builders use AI to describe ideas and generate code - but skip the foundations that real dev teams take for granted: system architecture, database migrations, security patterns, testing strategies, and production-grade integrations.

**The Solution:** Supernova fills these gaps with domain-specialized SOPs that guide AI agents to build real applications - not prototypes. Every skill contains production patterns, not generic templates.

---

## Skills Catalog (27 Skills)

### Foundation (Process & Orchestration)

| Skill | What It Does |
|-------|-------------|
| `plan` | Agile sprint planning, roadmap creation, ticket breakdown |
| `orchestrator` | Analyzes scope, detects complexity mode, routes to correct workflow |
| `executor` | Executes implementation tasks with built-in verification gates |
| `parallel` | Coordinates multi-agent parallel execution for complex tasks |

### Backend Stack

| Skill | What It Does |
|-------|-------------|
| `backend` | Python / FastAPI application architecture, dependency injection, middleware |
| `api` | REST (FastAPI) vs GraphQL API design based on complexity |
| `db` | PostgreSQL schema design, indexing, query optimization, RxDB for offline-first |

### Frontend Stack

| Skill | What It Does |
|-------|-------------|
| `frontend` | Next.js 14 / TypeScript / Tailwind / Shadcn/ui component architecture |
| `ui-ux` | Design systems, responsive layouts, accessibility, micro-interactions |

### Infrastructure & Security

| Skill | What It Does |
|-------|-------------|
| `system-architecture` | System design, ADRs, data modeling, API contracts |
| `security` | JWT auth, RBAC, input validation, OWASP patterns, secret scanning |
| `devops` | Docker, CI/CD pipelines, GitHub Actions, deployment workflows |
| `infra` | Terraform, Kubernetes, cloud resource provisioning |

### Operations

| Skill | What It Does |
|-------|-------------|
| `audit` | Codebase health audits, dependency review, technical debt analysis |
| `report` | Engineering reports, sprint summaries, stakeholder updates |
| `docs` | Technical documentation, API docs, user guides, changelogs |

### Quality & Logic

| Skill | What It Does |
|-------|-------------|
| `testing` | Full test pyramid — unit (pytest/Vitest), integration, E2E (Playwright) |
| `business-logic` | Domain modeling, rule engines, state machines, validation layers |
| `state-management` | Frontend (Zustand, React Query, nuqs) + Backend (Redis, sessions) |

### Integrations

| Skill | What It Does |
|-------|-------------|
| `payments` | Stripe checkout, subscriptions, webhooks with idempotency, refunds |
| `auth-provider` | Clerk, NextAuth.js OAuth, Supabase Auth — third-party auth integration |
| `migrations` | Alembic migration workflow, 3-step NOT NULL pattern, rollback SOP |
| `file-storage` | S3 / Cloudflare R2 uploads, pre-signed URLs, MIME validation, CDN |
| `email` | Resend transactional email, Jinja2 templates, Celery async sending |
| `monitoring` | Sentry error tracking, structlog, Prometheus metrics, health checks |
| `ai-integration` | LLM APIs (Claude/GPT), streaming SSE, tool use, RAG with pgvector |
| `onboarding` | Day-0 project scaffold — monorepo structure, Docker Compose, first commit |

---

## Compatibility Matrix

| Platform | Support | Install Guide | Config |
|----------|:-------:|---------------|--------|
| **Claude Code** | Full | [`.claude-plugin/`](.claude-plugin/INSTALL.md) | `plugin.json` |
| **Cursor**      | Native | [`.cursor-plugin/`](.cursor-plugin/INSTALL.md) | `plugin.json` |
| **Antigravity** | Full | [`.antigravity/`](.antigravity/INSTALL.md) | `SKILL.md` |
| **Codex**       | Managed | [`.codex/`](.codex/INSTALL.md) | `config.toml` |
| **OpenCode**    | Flexible | [`.opencode/`](.opencode/INSTALL.md) | `.opencode.json` |

---

## Quick Start

```bash
git clone https://github.com/mrsknetwork/supernova.git
# Follow the platform-specific INSTALL.md in the dot-directories above
```

---

## Default Tech Stack

When starting a new project, Supernova asks for confirmation before applying defaults:

| Layer | Default | Alternatives |
|-------|---------|-------------|
| **Backend** | Python 3.12 + FastAPI | Django, Express |
| **Frontend** | Next.js 14 + TypeScript + Tailwind + Shadcn/ui | Vite + React |
| **Database** | PostgreSQL + SQLAlchemy 2.0 | RxDB (offline-first) |
| **API** | REST (FastAPI) / GraphQL (by complexity) | tRPC |
| **Auth** | Clerk (managed) / Custom JWT | NextAuth.js, Supabase Auth |
| **Payments** | Stripe | — |
| **CI/CD** | GitHub Actions | GitLab CI |

> Skills always ask: *"Can I use the standard Supernova stack, or do you have a preference?"* before applying defaults.

---

## What's Included

| Directory | Purpose |
|-----------|---------|
| `skills/` | 27 agent skills with SOPs, evals, and references |
| `commands/` | `/nova` unified command entry point |
| `hooks/` | Session-start routing + security scanning hooks |
| `.supernova/` | Runtime config (modes, security, optimization) |
| `tests/` | Test suite for skill validation |

---

## Governance & Contributing

- **[Contributing Guidelines](.github/CONTRIBUTING.md)** - Naming conventions and PR workflows
- **[Security Policy](.github/SECURITY.md)** - Reporting vulnerabilities
- **[License](LICENSE)** - MIT Licensed

---

## Philosophy

1. **Production-First:** Every skill targets production deployment.
2. **Domain-Specialized:** SOPs are specific to each technology, not generic AI templates.
3. **Ask Before Assuming:** Default stacks require user confirmation.
4. **Evidence Over Claims:** Verify results before declaring success.

---

Copyright (c) 2026 Kamesh. MIT License.
