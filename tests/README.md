# Supernova Testing Framework

The `tests/` directory contains the automated and manual testing scenarios designed to verify that Supernova's 27 agent skills trigger correctly and follow their assigned SOPs.

## Structure

- `claude-code/`: Execution scripts specifically targeting the Claude Code environment.
- `skill-triggering/`: Scenario prompts designed to test whether an agent automatically invokes the correct skill based on context triggers.
- `test-guard.js`: Security scanner tests — secret detection, LLM injection detection, vulnerability scanning, dangerous command blocking.
- `test-modify.js`: Safe modification tests — impact analysis, rename preview, bulk update preview, operation validation.

## Skill Domains Covered

| Domain | Skills |
|--------|--------|
| Foundation | `plan`, `orchestrator`, `executor`, `parallel` |
| Backend | `backend`, `api`, `db` |
| Frontend | `frontend`, `ui-ux` |
| Infrastructure | `system-architecture`, `security`, `devops`, `infra` |
| Operations | `audit`, `report`, `docs` |
| Quality | `testing`, `business-logic`, `state-management` |
| Integrations | `payments`, `auth-provider`, `migrations`, `file-storage`, `email`, `monitoring`, `ai-integration`, `onboarding` |

## Running Tests

```bash
# Run all tests
cd tests && ./skill-triggering/prompts/run-tests.sh
# For Windows
# cd tests ; ./skill-triggering/prompts/run-tests.sh

# Run specific test suites
npx jest test-guard.js
npx jest test-modify.js
```

See the subdirectories for specific test scenarios to validate skill triggering accuracy, security scanning, and domain-specific workflows.
