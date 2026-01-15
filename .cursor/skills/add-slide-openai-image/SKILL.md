---
description: Generate slide with AI-generated image via OpenAI API
---

# Add Slide with OpenAI Image Skill

## When to Use
- Need a custom illustration for a slide
- Want AI-generated diagram or concept visualization
- Creating visually rich presentation content

## Inputs
- Image prompt (description of desired image)
- Slide title and content
- Image size (1024x1024, 1792x1024, 1024x1792)
- Where to insert in slides.md

## Outputs
- Generated image saved to `public/images/`
- New slide with image inserted
- Build verified

## Tools Required
- Node.js script: `scripts/generate-image.js`
- OpenAI API (DALL-E 3)
- Environment variable: `OPENAI_API_KEY`

## Safety & Guardrails

### API Key Security
- NEVER log API key to console
- NEVER commit API key to git
- ALWAYS use environment variable `OPENAI_API_KEY`
- API key must be in `.env` file (which is in `.gitignore`)

### Cost Control
- ASK FIRST before generating image (show estimated cost)
- DALL-E 3 pricing: ~$0.04-0.12 per image depending on size
- Default to smallest size (1024x1024) unless specified
- Max 1 image per command execution
- Log cost after generation

### File Safety
- Check if image filename already exists before saving
- Use descriptive filenames: `public/images/<slide-topic>-<timestamp>.png`

## Steps
1. **Confirm** — Show prompt and estimated cost, ask for approval
2. **Generate** — Run `node scripts/generate-image.js "<prompt>"`
3. **Save** — Download image to `public/images/`
4. **Create slide** — Insert slide with image using `/image` command format
5. **Build verify** — Run `npm run build`

## Script: scripts/generate-image.js

```javascript
// Usage: OPENAI_API_KEY=xxx node scripts/generate-image.js "prompt" output.png
const https = require('https');
const fs = require('fs');

const prompt = process.argv[2];
const outputPath = process.argv[3] || 'public/images/generated.png';

if (!process.env.OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY not set');
  process.exit(1);
}

// Never log the key
const apiKey = process.env.OPENAI_API_KEY;

// ... API call implementation
```

## Environment Setup
```bash
# .env (DO NOT COMMIT)
OPENAI_API_KEY=sk-...
```

```bash
# .gitignore (must include)
.env
*.env
```

## DoD (Definition of Done)
- [ ] User approved cost before generation
- [ ] Image saved to `public/images/`
- [ ] API key not logged or committed
- [ ] Slide created with image
- [ ] `npm run build` passes

## Validation
```bash
# Check no secrets in git
git diff --cached | grep -i "sk-" && echo "ERROR: API key in commit!" && exit 1

# Build
npm run build
```
