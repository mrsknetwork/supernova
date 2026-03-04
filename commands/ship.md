---
description: "Ship your work — verify everything passes, run security checks, finalize documentation, and commit. Use when a feature is complete and ready to merge."
---

You MUST follow this workflow exactly:

1. **Run verification** — Ensure all tests pass. If tests don't exist, invoke the `testing` skill to create them first.
   ```
   # Backend
   pytest --cov=src --cov-fail-under=80
   
   # Frontend
   npm run test -- --run
   npx tsc --noEmit
   ```

2. **Run security scan** — Invoke the `security` skill to check for:
   - Hardcoded secrets or API keys
   - SQL injection vulnerabilities
   - Missing input validation on user-facing endpoints
   - Exposed debug endpoints or verbose error messages

3. **Run database migration check** — If any model changes were made:
   - Invoke `migrations` skill
   - Generate migration: `alembic revision --autogenerate -m "description"`
   - Review the generated migration for red flags (drop columns, NOT NULL on existing tables)
   - Apply: `alembic upgrade head`

4. **Update documentation** — Invoke the `docs` skill if:
   - New API endpoints were added (update API docs)
   - Environment variables were added (update `.env.example`)
   - New dependencies were installed (update README)

5. **Commit** with a conventional commit message:
   ```
   feat(scope): short description
   fix(scope): what was broken and how it was fixed
   ```

6. **Final checklist** before marking done:
   - [ ] Tests pass
   - [ ] No hardcoded secrets
   - [ ] Migration generated and applied (if schema changed)
   - [ ] .env.example updated (if new env vars)
   - [ ] API docs updated (if new endpoints)
