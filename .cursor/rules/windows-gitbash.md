---
description: Shell command compatibility rules
globs: ["**/*"]
---

# Shell Commands Compatibility

## Redirects
- NEVER use Windows-style redirects: `>nul`, `2>nul`
- ALWAYS use Unix style: `>/dev/null`, `2>/dev/null`, `2>&1`

## Why
Windows Git Bash and WSL interpret `>nul` as creating a file named `nul`, not as null device.

## How to Validate (DoD)
- [ ] No `>nul` or `2>nul` in any shell commands
- [ ] All null redirects use `/dev/null`
