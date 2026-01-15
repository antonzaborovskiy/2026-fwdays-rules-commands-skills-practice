---
description: Review presentation changes with structured feedback
---

Get the current git diff for slides.md and pages/**/*.md files.

Provide a structured review in this format:

## Summary
Brief overview of changes (1-2 sentences)

## Blockers
Critical issues that will break build/render (Slidev syntax errors, missing assets)

## Major
Important issues affecting quality (missing v-clicks, no speaker notes, broken conventions)

## Minor
Style and consistency issues (formatting, typos)

## Suggested Edits
Specific improvements with code snippets

Focus areas:
- Slidev build/render compatibility
- UA-first content with EN terms on first use
- Speaker notes with timing hints
- v-clicks usage (not too many, not missing)
- Links referenced in notes, not inline
