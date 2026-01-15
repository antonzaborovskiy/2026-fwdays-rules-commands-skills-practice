---
description: Generate AI image and add to slide
---

Generate an image using OpenAI DALL-E and insert into a slide.

**Required inputs from user:**
1. Image prompt (what to generate)
2. Slide title/context
3. Where to insert in slides.md

**Procedure:**
1. **Cost check** — Show estimated cost (~$0.04 for 1024x1024), ASK for approval
2. **Verify setup** — Check `.env` has `OPENAI_API_KEY`, check `.gitignore` has `.env`
3. **Generate** — Run: `OPENAI_API_KEY=$(cat .env | grep OPENAI_API_KEY | cut -d= -f2) node scripts/generate-image.js "prompt" public/images/<name>.png`
4. **Create slide** — Insert slide with image block
5. **Build verify** — Run `npm run build`

**Security checklist before running:**
- [ ] `.env` file exists with `OPENAI_API_KEY`
- [ ] `.gitignore` contains `.env`
- [ ] User approved the cost

**Output slide format:**
```markdown
---
transition: fade-out
---

# Slide Title

<div class="flex justify-center">
  <img src="/images/<name>.png" class="w-3/5 rounded shadow" />
</div>

<!--
Speaker notes
Image prompt: "<original prompt>"
-->
```

**NEVER:**
- Log or display the API key
- Commit `.env` file
- Generate without cost approval
