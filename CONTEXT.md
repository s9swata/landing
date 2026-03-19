# Project Context

**Timestamp:** 2026-03-19 21:05:37 +05:30

---

## 🚀 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS + `framer-motion` (Scroll Animations)
- **Components:** `shadcn/ui` (Radix)
- **Icons:** `@phosphor-icons/react`

---

## 🎨 Design System & Theme
- **Color Model:** Strict HSL-based variables inside `:root` loaded via `globals.css`
- **Dark-Theme native**: The primary backdrop is completely black (`--background: 0 0% 0%`)
- **Variables Customization**:
  - Surfaces: `--surface-end` / `--surface` gradients
  - Accents: Multi-color and Glass-morphic presets (`--btn-glass`, `--badge-border` gradients)
  - Layout Sections: Transition seamlessly **WITHOUT** divider borders or `border-t` separators.

---

## 📦 Project Assembly (`app/page.tsx`)
Rendered sequentially:
1. `<Navbar />` *(Fixed glass header)*
2. `<HeroSection />` *(Background video player)*
3. `<ProblemAgitation />`
4. `<SolutionShowcase />`
5. `<AudienceFit />`
6. `<Benefits />`
7. `<Pricing />`
8. `<HowItWorks />`
9. `<Faq />`
10. `<FinalCta />`
11. `<Contact />`
12. `<Footer />`

---

## ⚠️ Notes for AI Agents
1. **Scrolling Visuals:** Screen-capture modules (like Playwright) on full-page setup may fail on animations (`framer-motion`). Simulated row-by-row viewpoint triggers render properly.
2. **Utilities vs Custom colors**: Custom classes (like `nuturn-glass`, `nuturn-black`) are **deprecated**. Standard mapped semantic classes (`bg-background`, `text-foreground`, `opacity-*`) must be used referencing updated mappings in `tailwind.config.ts`.
3. **Animations triggers**: `<motion.div>` uses `whileInView` with `viewport: { once: true }` so scroll reveal is applied to grid containers uniformly without overlapping lagging offsets.
