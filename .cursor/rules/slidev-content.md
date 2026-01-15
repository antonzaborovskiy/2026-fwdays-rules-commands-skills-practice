---
description: Slidev presentation content guidelines
globs: ["slides.md", "pages/**/*.md"]
---

# Slidev Content Rules

## Language
- Write content in Ukrainian (UA-first)
- On first usage of technical terms, provide English equivalent in parentheses: "правила (rules)"
- Keep English for code examples and technical identifiers

## Interactivity
- Use `v-click` for step-by-step reveals on lists and key points
- Wrap related items in `<v-clicks>` for automatic sequential animation
- Don't overuse — max 5-6 v-clicks per slide

## Speaker Notes
- Add notes block at the end of each slide using `<!-- notes -->` syntax
- Include timing hints and talking points
- Reference any demos or live coding sections

## Assets
- Store images in `/public/` folder
- Use relative paths: `/image.png` not `./public/image.png`
- Prefer SVG for diagrams, WebP/PNG for screenshots

## How to Validate (DoD)
- [ ] All technical terms have EN equivalent on first use
- [ ] Each content slide has at least one v-click
- [ ] Every slide has speaker notes
- [ ] All images load correctly in `npm run dev`
- [ ] No broken links or missing assets
