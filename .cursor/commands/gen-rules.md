---
description: Generate project rules from requirements
---

Generate 5-10 project rules based on the provided requirement or story.

**Required inputs from user:**
1. Requirement or user story
2. Any specific restrictions or constraints

**Output format for each rule:**
- Start with action verb: **ALWAYS** / **NEVER** / **ASK FIRST**
- Include scope (what files/contexts it applies to)
- Be specific and actionable

**Structure:**
```markdown
## [Category Name]

### Rules
- ALWAYS [do something] when [context]
- NEVER [do something] in [scope]
- ASK FIRST before [action]

### Validation
- [ ] Checklist item 1
- [ ] Checklist item 2
- Command: `npm run build` / `npm test`
```

**Requirements:**
- Every block of rules MUST have a Validation section
- Validation can be: build command, test command, or manual checklist
- Rules should be enforceable and verifiable
