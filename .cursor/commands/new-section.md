---
description: Create a new section with multiple slides
---

Create a batch of slides for a new section.

**Required inputs from user:**
1. Section name (will be folder name in pages/)
2. Plan/outline of content
3. Number of slides
4. Diagram needed? (yes/no, Mermaid)

**Procedure:**
1. Create `pages/<section>/` folder
2. For each slide:
   - Draft content from plan
   - Apply UA-first + EN terms convention
   - Add `<v-clicks>` for reveals
   - Add speaker notes with timing
3. If diagram requested, create Mermaid slide
4. Add imports to `slides.md`
5. Run `npm run build` to verify

**Output format per slide:**
```markdown
# Slide Title

Intro line

<v-clicks>

- Point 1
- Point 2

</v-clicks>

<!--
Speaker notes
Timing: ~X minutes
-->
```

**DoD:** All slides created, imported, and `npm run build` passes.
