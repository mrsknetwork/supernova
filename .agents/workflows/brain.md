---
description: Execute the exact 15-step Real-World SDLC Flow from process.md using Supernova Agents.
---

# /brain Workflow: The Real-World SDLC Flow

This workflow orchestrates the precise 15-step Software Development Lifecycle defined in `docs/process.md`.

Use this workflow for building or heavily refactoring production-ready SaaS products.

## The Flow

Follow these steps sequentially to progress an idea from validation to scaling:

### Phase 1 & 2: Ideation & Product Strategy
> **Agent:** User / PM (via `plan` agent)
1. Write down the Problem Statement and Target Persona.
2. Run `/nova` with the `plan` skill to generate the PRD (Product Requirements Document), Scope constraints, and Risk Analysis:
   - Ask `plan` to break down the MVP vs Future Roadmap.

### Phase 3 & 4: Technical & UX Architecture
> **Agent:** `system` agent
3. Run `/nova` with the `system` skill to define High-Level Architecture (Monolith vs. Microservices, etc).
4. Have the `system` agent output Architecture Diagrams (Mermaid) and Frontend Architecture (Routing, State Management).

### Phase 5 & 6: API & Database Design
> **Agent:** `system` agent
5. Run `/nova` with the `system` skill to draft the API Contract (OpenAPI, Versioning, Auth System).
6. Instruct the `system` agent to output Database Schema Design (ER Diagrams) and the initial Migration Strategy.

### Phase 7 & 8: Infrastructure & Security Engineering
> **Agent:** `infra` & `guard` agents
7. Run `/nova` with the `infra` skill to define Environment Separation (Local, Staging, Prod) and Cloud Architecture (Terraform/Pulumi).
8. Run `/nova` with the `guard` skill to review the architecture and code for Application Security, IAM rules, and Compliance requirements.

### Phase 9: Testing Strategy
> **Agent:** `builder` & `orchestrator`
9. Run `/nova` with `orchestrator` set to `Audit mode` to devise the Unit, Integration, and E2E Testing strategy based on the built components.

### Phase 10 & 11: CI/CD & Deployment
> **Agent:** `infra` & `ship` agents
10. Use the `infra` skill to set up Linting, Static Analysis, and automate deployment pipelines.
11. Execute `/nova ship` to verify the working tree, test execution, and perform the Release Strategy (Feature Flags/Versioning).

### Phase 12 & 13: Go-To-Market & Operations
> **Agent:** `docs` & User
12. Use the `docs` skill to aid in documentation and positioning content.
13. Establish Product Analytics, Ticketing systems, and the Iteration Loop (Measure, Learn, Improve) with the team.

### Phase 14 & 15: Scaling & Governance
> **Agent:** `orchestrator` & `modify`
14. Use performance dashboards to track bottlenecks; run `/nova` with `architect` to horizontally scale or optimize queries.
15. Regularly run `/nova review` and `modify` workflows to manage Technical Debt, update dependencies, and perform security patching.

---
**Core Philosophy Check:**
- Decision logging active?
- Rollback strategy defined?
- MVP exit criteria clear?
