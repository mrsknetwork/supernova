# Changelog

All notable changes to Supernova are documented here.

## v1.0.3

### Added
- **12 new skills**: `payments`, `auth-provider`, `migrations`, `file-storage`, `email`, `monitoring`, `ai-integration`, `onboarding`, `business-logic`, `state-management`, `testing`, `report`
- **4 core commands**: `/plan`, `/build`, `/ship`, `/audit` — verb-named, following the Superpowers pattern
- **Evals for all 27 skills**: Every skill now has `evals/evals.json` with 3+ test scenarios
- **Reference docs**: `stripe-webhooks.md`, `prompt-patterns.md`, `github-actions-ci.md`
- **Default tech stack**: Python 3.12 / FastAPI / Next.js 14 / TypeScript / Tailwind / Shadcn/ui / PostgreSQL

### Changed
- **Project identity**: Renamed from "AI Dev Team Orchestrator" to "Agent Skills for AI-Powered Development"
- **Skill catalog**: Reorganized all 27 skills into 7 domain groups (Foundation, Backend, Frontend, Infra, Ops, Quality, Integrations)
- **config.json**: All 27 agents registered with priority groups, expanded mode detection keywords
- **session-start.md**: Expanded SDLC routing table with 18 new skill routes
- **SOP.md**: `evals/` now mandatory, added stack clarification step
- **All 5 INSTALL.md files**: Updated skill tables from 15 → 27
- **Both plugin.json files**: Updated description and keywords
- **.github templates**: Updated skill examples, version references, PR checklist

### Removed
- Legacy single-command `nova.md` pattern (replaced by 4 verb-named commands)
- Stale skill name references (`builder`, `guard`, `modify`, `debugger`, `search`, `shadcn-ui`)
