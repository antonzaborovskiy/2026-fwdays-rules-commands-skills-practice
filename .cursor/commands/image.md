---
description: Insert responsive image block for Slidev
---

Insert a responsive image block into the slide.

**Required inputs from user:**
1. Image path (e.g., `/img.png` — relative to public/)
2. Width class (e.g., `w-3/5`, `w-1/2`, `w-full`)

**Output:**
```html
<div class="flex justify-center">
  <img src="$PATH" class="$WIDTH rounded shadow" />
</div>
```

**Example usage:**
Input: path=/diagram.svg, width=w-3/5

Output:
```html
<div class="flex justify-center">
  <img src="/diagram.svg" class="w-3/5 rounded shadow" />
</div>
```

**Notes:**
- Images must be in `/public/` folder
- Use relative path from public root (e.g., `/img.png` not `./public/img.png`)
- Centered layout ensures consistent appearance across screen sizes
