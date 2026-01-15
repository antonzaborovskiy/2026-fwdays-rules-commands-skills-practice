---
theme: seriph
background: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920
title: Правила, команди та навички для Agentic IDE
info: |
  ## Fwdays 2026
  Як налаштувати AI-асистента під свої потреби
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Правила, команди та навички для Agentic IDE

Як зробити AI-асистента по-справжньому корисним

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Почнемо <carbon:arrow-right class="inline"/>
  </span>
</div>

---
transition: fade-out
---

# Що таке Agentic IDE?

IDE з вбудованим AI-агентом, який може:

- 🤖 **Розуміти контекст** - аналізує весь проект
- 🛠️ **Виконувати дії** - редагує файли, запускає команди
- 🔄 **Ітерувати** - виправляє помилки самостійно
- 💬 **Спілкуватися** - відповідає на питання про код

<br>

### Приклади: Cursor, Windsurf, VS Code + Copilot Agent

---

# Три кити налаштування

<div class="grid grid-cols-3 gap-8 pt-8">

<div class="text-center">
  <div class="text-6xl mb-4">📜</div>
  <h3>Rules</h3>
  <p class="text-sm opacity-75">Правила поведінки AI</p>
</div>

<div class="text-center">
  <div class="text-6xl mb-4">⚡</div>
  <h3>Commands</h3>
  <p class="text-sm opacity-75">Автоматизація задач</p>
</div>

<div class="text-center">
  <div class="text-6xl mb-4">🧠</div>
  <h3>Skills</h3>
  <p class="text-sm opacity-75">MCP та інтеграції</p>
</div>

</div>

---

# Rules — Правила

Файли, що визначають поведінку AI у проекті

```
.cursor/rules/
├── general.mdc      # Загальні правила
├── typescript.mdc   # Правила для TS
└── testing.mdc      # Правила тестування
```

<br>

### Приклад правила:

```markdown
---
description: TypeScript conventions
globs: ["**/*.ts", "**/*.tsx"]
---

- Використовуй strict mode
- Уникай any типів
- Пиши JSDoc для публічних функцій
```

---

# Commands — Команди

Швидкий виклик складних операцій

```json
// .cursor/commands/review.json
{
  "name": "Code Review",
  "prompt": "Проведи code review цього файлу. Зверни увагу на: безпеку, продуктивність, читабельність."
}
```

<br>

### Використання:

- `Cmd+Shift+P` → Run Command
- Або через `/review` у чаті

---

# Skills — MCP Servers

Model Context Protocol — розширення можливостей AI

<div class="grid grid-cols-2 gap-4 mt-8">

<div>

### Вбудовані:
- Файлова система
- Термінал
- Git операції

</div>

<div>

### Зовнішні MCP:
- База даних
- API документація
- Jira/Linear
- Figma

</div>

</div>

<br>

```json
// mcp.json
{
  "servers": {
    "postgres": {
      "command": "mcp-server-postgres",
      "args": ["postgresql://..."]
    }
  }
}
```

---
layout: center
class: text-center
---

# Практичні поради

<div class="grid grid-cols-2 gap-8 text-left mt-8">

<div>

### ✅ Робіть
- Конкретні правила
- Приклади коду
- Контекст проекту

</div>

<div>

### ❌ Уникайте
- Занадто загальних інструкцій
- Суперечливих правил
- Величезних промптів

</div>

</div>

---
layout: center
class: text-center
---

# Дякую!

Питання?

<div class="mt-8 text-sm opacity-75">
  Fwdays 2026
</div>
