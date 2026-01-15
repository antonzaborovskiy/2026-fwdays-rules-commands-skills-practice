---
description: Generate a new Slidev slide from bullet points
---

Create a new slide for the presentation.

**Required inputs from user:**
1. Theme/title of the slide
2. 3-5 key points (тези)
3. Where to insert: file path and after which slide/section

**Output requirements:**
- Ready-to-use markdown slide with frontmatter if needed
- Use `<v-clicks>` for sequential reveal of points
- NO text waterfalls (keep content concise, max 6-8 lines of content)
- NO inline links — put references in speaker notes
- Add speaker notes with timing and talking points

**After insertion:**
Run `npm run build` to verify the slide renders correctly.

**Example output format:**
```markdown
---
transition: fade-out
---

# Slide Title

Brief intro line

<v-clicks>

- Point one
- Point two
- Point three

</v-clicks>

<!--
Speaker notes here.
Timing: ~2 minutes
References: [link1], [link2]
-->
```
