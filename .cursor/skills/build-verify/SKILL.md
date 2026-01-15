---
description: Build verification and error fixing skill
---

# Build Verify Skill

## When to Use
- After making changes to slides or configuration
- Before committing changes
- When build errors are reported

## Inputs
- Project with `npm run build` script configured
- Source files (slides.md, pages/*.md)

## Outputs
- Green build (exit code 0)
- All errors resolved

## Safety
- Does not modify files without explicit error to fix
- Reports all changes made
- Stops after 3 failed fix attempts

## Steps
1. Run `npm run build`
2. If build fails:
   - Parse error message
   - Localize the error (file, line)
   - Apply minimal fix
   - Re-run build
3. Repeat until green or max attempts reached

## DoD (Definition of Done)
- [ ] `npm run build` exits with code 0

## Validation
```bash
npm run build
```
