---
description: "Audit your codebase — run a comprehensive health check across code quality, security, dependencies, testing coverage, and architecture compliance."
---

You MUST follow this workflow exactly:

1. **Invoke the `audit` skill** at `skills/audit/SKILL.md` and follow its SOP
2. **Run these checks in order:**

### Code Quality
- Lint: `ruff check src/` (backend) / `npm run lint` (frontend)
- Type check: `mypy src/` (backend) / `npx tsc --noEmit` (frontend)
- Dead code: identify unused imports, unreachable functions, orphaned files

### Security
- Invoke the `security` skill for a deep scan
- Check for hardcoded secrets using patterns from `hooks/hooks.json`
- Verify all user inputs are validated (Pydantic models on FastAPI, zod on frontend)
- Check CORS configuration is not `allow_origins=["*"]` in production

### Dependencies
- Check for outdated packages: `pip list --outdated` / `npm outdated`
- Flag packages with known CVEs
- Identify unused dependencies

### Testing Coverage
- Run: `pytest --cov=src --cov-report=term-missing` (backend)
- Run: `npm run test -- --run --coverage` (frontend)
- Flag modules with < 60% coverage

### Architecture Compliance
- Verify the project follows the directory structure from the `onboarding` skill
- Check that business logic is in `services/`, not in route handlers
- Verify database queries go through repositories, not raw SQL in services

3. **Output a report** using the `report` skill with:
   - Health score (A/B/C/D/F) per category
   - Top 5 issues to fix (ordered by severity)
   - Recommended next actions
