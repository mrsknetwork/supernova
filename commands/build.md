---
description: "Build a feature, fix a bug, or implement a change — the core implementation command. Routes to the correct domain skill based on what you're building."
---

You MUST follow this workflow exactly:

1. **Read the `orchestrator` skill** at `skills/orchestrator/SKILL.md` to detect complexity mode (turbo / standard / audit)
2. **Route to the correct domain skill** based on the request:

| Building... | Skill |
|---|---|
| Backend API / service logic | `backend` + `api` |
| Frontend page / component | `frontend` + `ui-ux` |
| Database schema / queries | `db` |
| Authentication (OAuth, Clerk) | `auth-provider` |
| Payments (Stripe) | `payments` |
| File uploads | `file-storage` |
| Email sending | `email` |
| AI features (chat, RAG) | `ai-integration` |
| Database migrations | `migrations` |
| State management | `state-management` |
| Business rules / domain logic | `business-logic` |

3. **Write tests alongside code** — invoke the `testing` skill for test strategy
4. **Run the security skill** as a pre-commit check on any auth, payment, or data-handling code
5. **Verify** — every build must end with a passing test or manual verification step before claiming done

If unsure which domain skill to use, describe the task and the orchestrator will route automatically.
