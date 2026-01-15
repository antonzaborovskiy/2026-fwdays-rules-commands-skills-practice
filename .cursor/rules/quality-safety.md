---
description: Quality and safety guidelines
globs: ["**/*"]
---

# Quality & Safety Rules

## Secrets & Privacy
- NEVER commit secrets, API keys, tokens, or passwords
- NEVER insert private/internal links (company URLs, internal docs)
- Use environment variables or `.env` files (add to `.gitignore`)

## Destructive Actions
- ASK FIRST before deleting any files
- ASK FIRST before big refactoring in slides
- Confirm with user before removing significant content

## Validation
- After any non-trivial fix, run `npm run build` to verify
- Check for build errors before considering task complete

## How to Validate (DoD)
- [ ] No secrets or private links in committed code
- [ ] User confirmed before any file deletion
- [ ] `npm run build` passes after changes
