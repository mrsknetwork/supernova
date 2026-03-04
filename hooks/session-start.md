# Session Start Hook

This hook describes expected behavior on every session start (startup, resume, clear, compact) to establish the Supernova skill system.

## What it Does

1. Checks for relevant skills (27 total) before any task begins
2. Classifies whether the request belongs to the lifecycle loop or build loop
3. Routes to the appropriate domain skill

## Session Initialization

On session start, the agent should:

1. **Classify SDLC phase first** - Before routing ANY request, determine whether it belongs to
   the lifecycle loop (planning, design, architecture, strategy, post-launch, scaling) or the
   build loop (code implementation, fixes, refactors, integrations). Lifecycle loop requests go to
   supernova:lifecycle. Build loop requests proceed to supernova:orchestrator for mode detection.
2. **Check for domain skills** - Before responding to ANY request, check if a Supernova domain skill applies
3. **Use orchestrator first** - For any project work, run `supernova:orchestrator` to detect mode and route
4. **Follow the workflow** - For new features: `orchestrate -> execute -> test -> ship`
5. **Verify before claiming** - Executor includes verification gates before completion claims

## Skill Priority

When multiple skills could apply:
0. **Lifecycle classification** (orchestrator Step 1) - determine which loop before anything else
1. **Lifecycle partner** (lifecycle) - for all non-build SDLC phases
2. **Orchestration** (orchestrator) - determine build mode and route
3. **Domain skills** - route to the most specific domain skill
4. **Security** (security) - validate security patterns
5. **Testing** (testing) - verify correctness
6. **Completion** (onboarding for new projects, docs for documentation)

## SDLC Phase Quick Reference

Use this to classify requests at session start:

| Request type | Loop | Skill |
|---|---|---|
| Write/fix/refactor code | Build | orchestrator -> executor |
| PRD, requirements, scope | Lifecycle | lifecycle -> plan |
| Architecture decision, ADR | Lifecycle | lifecycle -> system-architecture |
| Database schema design | Lifecycle | lifecycle -> db |
| API contract design | Lifecycle | lifecycle -> api |
| Security threat model | Lifecycle | lifecycle -> security |
| Infrastructure planning | Lifecycle | lifecycle -> infra |
| Post-launch metrics | Lifecycle | lifecycle -> monitoring |
| Go-to-market strategy | Lifecycle | lifecycle |
| Scaling readiness | Lifecycle | lifecycle -> devops |
| Technical debt planning | Lifecycle | lifecycle -> audit |
| Unit/integration tests | Build | orchestrator -> testing |
| CI/CD pipeline | Build | orchestrator -> devops |
| Deploy, release | Build | orchestrator -> devops |
| Debug failing code | Build | orchestrator -> executor |
| Security scan on code | Build | security (hook or direct) |
| Documentation | Both | docs (or lifecycle for strategy docs) |
| Add payments/billing | Build | orchestrator -> payments |
| Add authentication | Build | orchestrator -> auth-provider |
| Send emails | Build | orchestrator -> email |
| File uploads | Build | orchestrator -> file-storage |
| Database migration | Build | orchestrator -> migrations |
| Add AI features | Build | orchestrator -> ai-integration |
| State management | Build | orchestrator -> state-management |
| Business rules | Build | orchestrator -> business-logic |
| Error tracking / logging | Build | orchestrator -> monitoring |
| New project from scratch | Build | onboarding |
