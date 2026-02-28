# Project Requirements Document (PRD) Template

Use this template for autonomous mode execution.

## Project Overview

**Name:** [Project name]
**Goal:** [One-sentence description]
**Success Criteria:** [How we'll know it's done]

---

## Task Breakdown

### Task 1: [Task Name]
**Description:** [What needs to be done]
**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

**Files to Modify:**
- [path/to/file1]
- [path/to/file2]

**Dependencies:** [Any tasks that must complete first]

---

### Task 2: [Task Name]
**Description:** [What needs to be done]
**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2

**Files to Modify:**
- [path/to/file1]

**Dependencies:** Task 1

---

### Task 3: [Task Name]
**Description:** [What needs to be done]
**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
- [ ] Criterion 4

**Files to Modify:**
- [path/to/file1]
- [path/to/file2]
- [path/to/file3]

**Dependencies:** Task 2

---

## Technical Notes

### Architecture Decisions
- [Decision 1]: [Rationale]
- [Decision 2]: [Rationale]

### Tech Stack
- [Language/Framework]
- [Key Libraries]
- [Database]

### Constraints
- [Constraint 1]
- [Constraint 2]

---

## Quality Gates

All tasks must pass:
- [ ] debugger: Slop Score ≥ 7/10
- [ ] builder: Code Review Verdict = PASS
- [ ] guard: No Critical/High vulnerabilities

---

## Example: Auth Implementation PRD

```markdown
## Project Overview
**Name:** User Authentication System
**Goal:** Implement JWT-based auth with login/logout
**Success Criteria:** Users can register, login, and access protected routes

## Task Breakdown

### Task 1: Setup Auth Module
**Description:** Create auth module structure and install dependencies
**Acceptance Criteria:**
- [ ] JWT library installed
- [ ] Auth folder created with index.js
- [ ] Basic middleware structure in place

**Files to Modify:**
- package.json
- src/auth/index.js
- src/auth/middleware.js

### Task 2: Implement JWT Generation
**Description:** Create token generation and validation functions
**Acceptance Criteria:**
- [ ] generateToken() creates valid JWT
- [ ] verifyToken() validates and returns payload
- [ ] Tokens expire after 24 hours

**Files to Modify:**
- src/auth/jwt.js

**Dependencies:** Task 1

### Task 3: Create Login Endpoint
**Description:** Implement POST /auth/login with validation
**Acceptance Criteria:**
- [ ] Validates email/password
- [ ] Returns JWT on success
- [ ] Returns 401 on invalid credentials
- [ ] Rate limited (5 attempts/minute)

**Files to Modify:**
- src/routes/auth.js
- src/auth/login.js

**Dependencies:** Task 2
```
