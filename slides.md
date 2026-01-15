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

<!--
Вітаю всіх! Сьогодні поговоримо про те, як налаштувати AI-асистента в IDE під свої потреби.
Тривалість: ~30 секунд на вступ
-->

---
transition: fade-out
layout: two-cols
---

# Що таке Agentic IDE?

IDE (Integrated Development Environment) з вбудованим AI-агентом (AI agent), який може:

::right::

<div class="flex justify-center items-center h-full">
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600" class="w-4/5 rounded shadow" />
</div>

::left::

<v-clicks>

- 🤖 **Розуміти контекст (context)** - аналізує весь проект
- 🛠️ **Виконувати дії (actions)** - редагує файли, запускає команди
- 🔄 **Ітерувати (iterate)** - виправляє помилки самостійно
- 💬 **Спілкуватися** - відповідає на питання про код

</v-clicks>

<br>

<v-click>

### Приклади: Cursor, Windsurf, VS Code + Copilot Agent

</v-click>

<!--
Agentic IDE - це IDE з AI, який не просто підказує, а може самостійно виконувати дії.
Показати кожен пункт по черзі, пояснити різницю з звичайним автодоповненням.
Тривалість: ~2 хвилини
-->

---

# Три кити налаштування

<div class="grid grid-cols-3 gap-8 pt-8">

<v-click>
<div class="text-center">
  <div class="text-6xl mb-4">📜</div>
  <h3>Rules (Правила)</h3>
  <p class="text-sm opacity-75">Правила поведінки AI</p>
</div>
</v-click>

<v-click>
<div class="text-center">
  <div class="text-6xl mb-4">⚡</div>
  <h3>Commands (Команди)</h3>
  <p class="text-sm opacity-75">Автоматизація задач</p>
</div>
</v-click>

<v-click>
<div class="text-center">
  <div class="text-6xl mb-4">🧠</div>
  <h3>Skills (Навички)</h3>
  <p class="text-sm opacity-75">MCP та інтеграції</p>
</div>
</v-click>

</div>

<!--
Три основні способи налаштування AI в IDE.
Показати кожен по черзі, коротко пояснити призначення.
Тривалість: ~1 хвилина
-->

---

# Rules — Правила

Файли, що визначають поведінку AI у проекті

<v-click>

```
.cursor/rules/
├── general.mdc      # Загальні правила
├── typescript.mdc   # Правила для TS
└── testing.mdc      # Правила тестування
```

</v-click>

<br>

<v-click>

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

</v-click>

<!--
Rules - це markdown файли з інструкціями для AI.
globs визначають для яких файлів застосовуються правила.
Показати структуру папки, потім приклад.
Тривалість: ~2 хвилини
-->

---

# Commands — Команди

Швидкий виклик складних операцій

<v-click>

```json
// .cursor/commands/review.json
{
  "name": "Code Review",
  "prompt": "Проведи code review цього файлу. Зверни увагу на: безпеку, продуктивність, читабельність."
}
```

</v-click>

<br>

<v-click>

### Використання:

- `Cmd+Shift+P` → Run Command
- Або через `/review` у чаті

</v-click>

<!--
Commands - це збережені промпти для часто використовуваних операцій.
Можна викликати через палітру команд або слеш-команди.
Демо: показати як створити і викликати команду.
Тривалість: ~2 хвилини
-->

---

# Skills — MCP Servers

MCP (Model Context Protocol) — розширення можливостей AI

<div class="grid grid-cols-2 gap-4 mt-8">

<v-click>
<div>

### Вбудовані (Built-in):
- Файлова система (File system)
- Термінал (Terminal)
- Git операції

</div>
</v-click>

<v-click>
<div>

### Зовнішні MCP (External):
- База даних (Database)
- API документація
- Jira/Linear
- Figma

</div>
</v-click>

</div>

<br>

<v-click>

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

</v-click>

<!--
MCP - це протокол для підключення зовнішніх інструментів до AI.
Тривалість: ~2 хвилини
Refs: https://modelcontextprotocol.io/
-->

---
layout: center
class: text-center
---

# Практичні поради (Best Practices)

<div class="grid grid-cols-2 gap-8 text-left mt-8">

<v-click>
<div>

### ✅ Робіть
- Конкретні правила
- Приклади коду
- Контекст проекту

</div>
</v-click>

<v-click>
<div>

### ❌ Уникайте
- Занадто загальних інструкцій
- Суперечливих правил
- Величезних промптів (prompts)

</div>
</v-click>

</div>

<!--
Підсумок найважливіших порад.
Конкретність важливіша за повноту.
Тривалість: ~1 хвилина
-->

---
layout: center
class: text-center
---

# Дякую!

Питання?

<div class="mt-8 text-sm opacity-75">
  Fwdays 2026
</div>

<!--
Відкрити для питань.
Підготувати демо якщо будуть питання про конкретні випадки.
-->
