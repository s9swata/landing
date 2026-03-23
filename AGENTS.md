# AGENTS.md

## Purpose
This file defines strict operational rules for any AI agent or automated system interacting with this repository.

Agents MUST follow these rules at all times.

---

## 🚨 Critical Safety Rules

### 1. Git Safety
- NEVER run destructive commands:
  - `git reset --hard`
  - `git clean -fd`
  - Any command that rewrites or deletes history

- ALWAYS create commits:
  - Commit BEFORE making changes
  - Commit AFTER completing a task

- Commit messages must be meaningful and describe the changes made.

---

### 2. File System Safety
- NEVER execute destructive commands such as:
  - `rm -rf *`
  - Recursive deletion of project files

- Do NOT delete files unless explicitly instructed and necessary.

---

## 📚 Documentation & Accuracy

- ALWAYS follow the **latest official documentation** of any framework, library, or tool used.
- Do NOT rely on outdated knowledge or assumptions.
- If unsure, prioritize correctness over speed.

---

## 🎨 UI / Design System Rules

### Component Library
- ALWAYS prefer **shadcn/ui** for building UI components.

### Icons
- NEVER use **lucide icons**
- ALWAYS use:
  - **Phosphor Icons**
  - OR an approved animated UI icon library

### Design Consistency
- STRICTLY follow the project's:
  - Color palette
  - Typography
  - Spacing system

- Do NOT introduce random styles or inconsistent design patterns.

---

## ⚙️ Development Behavior

- Make incremental, safe changes (avoid large unreviewable diffs)
- Preserve existing functionality unless explicitly modifying it
- Write clean, readable, and maintainable code

---

## ✅ Task Execution Workflow

For EVERY task:

1. Commit current state  
2. Execute requested changes  
3. Verify functionality (basic sanity checks)  
4. Commit final state  

---

## 🚫 Prohibited Actions

- Using unapproved UI libraries
- Ignoring design system constraints
- Overwriting large parts of the codebase without reason
- Making assumptions without validation
- Strictly for antigravity agent - do not use the browser-subagent tool

---

## 🧠 Guiding Principles

- Safety > Speed  
- Consistency > Creativity  
- Accuracy > Assumptions  

---

Agents that fail to follow these rules are considered unsafe.
