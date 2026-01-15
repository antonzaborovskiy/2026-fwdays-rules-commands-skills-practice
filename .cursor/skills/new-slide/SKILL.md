---
description: Batch slide writing skill
---

# New Slide Skill

## When to Use
- Adding a new section with multiple slides
- Creating a module of related content
- Batch slide generation from a plan

## Inputs
- Section name/topic
- Plan (outline of content)
- Number of slides
- Diagram requirement (Mermaid, optional)

## Outputs
- Module files in `pages/<section>/*.md`
- Import statement added to `slides.md`

## Safety
- Creates new files only, does not overwrite existing
- ASK FIRST if section folder already exists
- Validates with build before completing

## Steps
1. **Draft** — Create slide structure from plan
2. **UA/EN Convention** — Apply Ukrainian-first content with English terms on first use
3. **Add v-clicks** — Insert `<v-clicks>` for sequential reveals (max 5-6 per slide)
4. **Add notes** — Speaker notes with timing hints for each slide
5. **Add diagram** — If required, create Mermaid diagram slide
6. **Build verify** — Run `npm run build` to validate

## File Structure
```
pages/
└── <section>/
    ├── 01-intro.md
    ├── 02-content.md
    ├── 03-diagram.md (if Mermaid required)
    └── 04-summary.md
```

## Import in slides.md
```markdown
---
src: ./pages/<section>/01-intro.md
---
```

## DoD (Definition of Done)
- [ ] All slides follow UA/EN convention
- [ ] Each slide has v-clicks
- [ ] Each slide has speaker notes
- [ ] Diagram included if requested
- [ ] Import added to slides.md
- [ ] `npm run build` passes

## Validation
```bash
npm run build
```
