---
name: research
description: Activate the R&D pipeline (ResearchAgent → WebSearchAgent → ArchitectAgent) to investigate technology choices, compare libraries, design POCs, or research feasibility.
argument-hint: "[research-question]"
disable-model-invocation: true
user-invocable: true
allowed-tools: Read WebSearch
---

# /supernova:research

Activate the `r-and-d` pipeline: ResearchAgent → WebSearchAgent → ArchitectAgent.

## Usage

```
/supernova:research "Compare Prisma vs Drizzle for NextJS"
/supernova:research "Is Redis viable for session stores?"
/supernova:research "Design a POC for real-time collaboration"
```

## Instructions

1. If no research question is provided, ask: "What would you like researched? (e.g., 'Compare Prisma vs Drizzle for NextJS', 'Is Redis viable for our session store?', 'Design a POC for...'"
2. Read the `research-agent` skill and conduct the research
3. Determine if live data is needed - if yes, read `web-search-agent` skill and fetch current data
4. Read `architect-agent` skill to synthesize into an architectural recommendation
5. Produce a research report with:
   - Clear recommendation (not just "it depends")
   - Evidence and sources
   - Confidence level
   - POC design if validation is needed
   - Open questions remaining

## Research Areas

- Technology comparison (libraries, frameworks, databases)
- Feasibility analysis
- Architecture pattern evaluation
- Performance benchmarks
- Security implications
- Migration strategies
