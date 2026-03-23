# LUSION.co — Design & Animation Reference

> Research notes from https://lusion.co — a premier digital production studio.
> Used as inspiration for replacing cluttered card-based layouts in this project.

---

## Text Animations

### 1. Character-by-Character Reveal (Scramble / Split Text)
- **Where**: Hero heading — *"Beyond Visions · Within Reach"*
- **Technique**: Each character is rendered as an individual `<span>`. On scroll, characters animate in sequentially with a combination of:
  - `translateY` (slides up from below)
  - `opacity` (fades in)
  - Slight `letter-spacing` collapse from expanded to normal
- **Timing**: Staggered, ~30–50ms per character
- **Effect**: The heading feels like it "materializes" word-by-word from thin air

### 2. Scroll-Driven SVG/Character Shuffle
- **Where**: Project titles in the featured work section (e.g. "DevineAI", "Porsche: DreamMachine")
- **Technique**: Each letter is duplicated 4× (visible in the DOM as repeated characters). On scroll, the letters animate as if shuffling/cycling — a slot-machine style effect
- **Effect**: The text appears to "resolve" into the correct word as you scroll past it
- **Implementation hint**: CSS `clip-path` + `translateY` cycling or JS character randomization loop

### 3. Uppercase Tracking Reveal (Fade-in + Scale)
- **Where**: Section labels like `"FEATURED WORK"`, `"A SELECTION OF OUR MOST PASSIONATELY CRAFTED WORKS..."`
- **Technique**: All-caps small text with wide `letter-spacing`. Fades from `opacity: 0` to `1` with a subtle scale from `0.95 → 1.0`
- **Effect**: Feels editorial, like a magazine caption appearing on print

### 4. Continuous Marquee (Horizontal Ticker)
- **Where**: Tag line ticker — `"WEB • DESIGN • DEVELOPMENT • 3D"`
- **Technique**: Infinite CSS `animation: marquee linear infinite` with a duplicated text node for seamless looping
- **Effect**: Adds motion to an otherwise static label; signals breadth of services

### 5. Word-by-Word Paragraph Reveal
- **Where**: About section paragraph — *"Lusion is a digital production studio..."*
- **Technique**: Paragraph split into `<span>` per word. Scroll-triggered `IntersectionObserver` or GSAP `ScrollTrigger` stagger — opacity `0 → 1` + `translateY 20px → 0`
- **Effect**: Reading rhythm follows the scroll; feels alive vs. static text

### 6. Large CTA Kinetic Type
- **Where**: Footer CTA — *"Let's work together!"*
- **Technique**: Very large display text (viewport-width scale). On scroll into view, each word slides up from `translateY(100%)` with a clip mask (overflow hidden parent = "curtain reveal")
- **Effect**: Dramatic, impossible to miss; classic editorial "curtain" text reveal

---

## Layout & Component Patterns

### No Cards — Only Rows
Lusion uses **zero card components** across the entire site. Information is presented as:
- Full-width rows separated by thin `1px` horizontal rules
- Large left-aligned labels, content on the right
- Generous line-height and whitespace do the heavy lifting

### Numbered Row Lists
```
01   Launch Title         Description text here
     ─────────────────────────────────────────────
02   Next Item Title      Another description
     ─────────────────────────────────────────────
```
- Number: large, faded (opacity: 0.15–0.25), monospaced
- Title: bold, left-flush
- Description: right column or below, muted color
- Separator: `border-bottom: 1px solid` with low opacity

### Project Showcase (Scroll-Activated)
- Full-width images/video inside a `border-radius` container
- No grid; items stack vertically and are revealed one at a time on scroll
- Category tag (`WEB • DESIGN • DEVELOPMENT • 3D`) as a marquee or static caption

### Navigation
- Logo: top-left, all caps, minimal weight
- CTA button: pill shape, dark background, white text + dot indicator (e.g. `LET'S TALK •`)
- Menu: text-only, no icon hamburger — pure text `MENU ···`
- On mobile: full-screen overlay with large type links

### Color Palette
- Background: `#EEEEF2` (pale off-white lavender)
- Foreground text: `#0D0D0D` (near-black)
- Accent: Royal blue `#1E3AFF` used on interactive 3D objects (not on text)
- Hover states: text color shift, no background fills

### Typography
- Font: Custom display sans — very clean, geometric (similar to **ABC Diatype** or **Söhne**)
- Weights used: Regular (400) for body, Bold/Black (700–900) for display headings
- Letter spacing: tight on headings (`-0.03em`), very wide on labels (`0.15em`)

---

## Interaction Patterns

### Cursor — Custom Follower
- Custom circular cursor that follows mouse with spring physics (`lerp` or CSS variables)
- Grows/changes on hover over interactive elements

### Page Transitions
- Smooth fade + slide between pages (not instant)
- Likely a page-level React/Nxt transition wrapper or GSAP page transition

### Hover on Project Items
- Slight scale-up on the image (`transform: scale(1.02)`)
- Text color change (muted → primary)
- No card lift/shadow effects

---

## Implementation Takeaways for This Project

| What Lusion Does | What We Should Replace |
|---|---|
| Numbered row lists | `ProblemAgitation` 3-col card grid |
| Labeled text columns with dividers | `AudienceFit` 8 shadcn Cards |
| Large numbered scroll-reveal rows | `Benefits` bento 3D card grid |
| Stepped list with vertical line | `HowItWorks` alternating cards |
| Curtain CTA text | `FinalCta` section (optional upgrade) |
