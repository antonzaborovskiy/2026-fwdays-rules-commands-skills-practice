---
description: Run build, fix errors, and verify
---

Execute the build-verify procedure:

1. Run `npm run build`
2. If build fails:
   - Parse the error output
   - Identify file and line number
   - Apply minimal fix to resolve the error
   - Show what was changed
   - Re-run `npm run build`
3. Repeat until build passes (max 3 attempts)
4. Report final status

**DoD:** `npm run build` exits with code 0

**Safety:**
- Only fix the specific error reported
- Do not refactor or improve unrelated code
- Stop after 3 failed attempts and report
