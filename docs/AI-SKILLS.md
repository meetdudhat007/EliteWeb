# AI Skills System & Registry

This document defines the agent skills registered in this repository, their operational hierarchy, activation boundaries, and guidelines for working with the **ZAPSTACK** project codebase.

---

## 1. Installed Skills

All 9 skills have been registered natively into `.agents/skills/` within the workspace:

### 1. `ui-ux-pro-max`
- **Location**: `.agents/skills/ui-ux-pro-max/SKILL.md`
- **Category**: UI/UX & Design Intelligence (Foundation)
- **Purpose**: Provides design intelligence before writing interface code: layout hierarchy, typography scaling, responsive systems, accessible interaction rules, component states, and spacing.
- **When to Activate**:
  - Creating, redesigning, or refining pages and components.
  - Making decisions on typography, spacing, semantic color tokens, and layout.
  - Reviewing accessibility (WCAG AA, focus states, touch targets).
  - Responsive adaptation across mobile, tablet, and desktop viewports.
- **Important Constraints**:
  - Mobile-first approach with content-driven breakpoints.
  - 44×44px minimum interactive touch targets.
  - Target WCAG AA color contrast ratios.
  - Note on search tooling: This skill file mentions `<skill-root>/scripts/search.py`, but bundled scripts are not present in this lightweight installation. Recommendations must be treated as reasoned engineering principles rather than fabricated database queries.
- **Relevant Project Usage**: Applied to all front-end UI tasks on ZAPSTACK (navigation, hero, case study cards, services, forms) while keeping ZAPSTACK brand styling intact.

### 2. `motion`
- **Location**: `.agents/skills/motion/SKILL.md`
- **Category**: Animation & Interaction Motion
- **Purpose**: Motion guidance for dynamic, interruptible UI behaviors, gestures, springs, layout transitions, exit transitions, and reduced-motion compliance.
- **When to Activate**:
  - UI requiring gesture handling (drag, pan, hover, tap).
  - Layout transitions and exit animations (`AnimatePresence` patterns).
  - Spring-physics micro-interactions and interruptible UI states.
- **Important Constraints**:
  - **DO NOT REPLACE GSAP**: ZAPSTACK already has an established, highly refined GSAP + ScrollTrigger architecture for pinned/scrubbed scroll storytelling. Motion (formerly Framer Motion) must never replace existing GSAP implementations.
  - Prefer CSS transitions for simple, predetermined state changes.
  - Always respect `prefers-reduced-motion`.
  - The `motion` npm package is not installed by default; only install if explicitly required by a task.
- **Relevant Project Usage**: Guidance for micro-interactions, modal transitions, and responsive touch feedback, coexisting harmoniously with GSAP without duplicating systems.

### 3. `web-lifecycle-checklist`
- **Location**: `.agents/skills/web-lifecycle-checklist/SKILL.md`
- **Category**: QA, Quality Engineering & Lifecycle Auditing
- **Purpose**: 14-section comprehensive checklist covering discovery, UX, UI, technical architecture, frontend/backend engineering, security, performance, SEO, accessibility, testing, analytics, deployment, and final gate launch.
- **When to Activate**:
  - Milestone reviews, feature planning, pre-launch auditing, and pre-deployment gates.
  - Performance audits (Core Web Vitals, asset optimization).
  - SEO and semantic HTML checks (meta tags, sitemaps, Open Graph).
  - Accessibility reviews (keyboard navigation, ARIA landmarks, visible focus).
- **Important Constraints**:
  - Scale proportionally to project scope. For ZAPSTACK (a high-end agency portfolio), focus heavily on branding, typography, responsive fidelity, animation frame-rate, contact flow, SEO, and accessibility. Do not mechanically tick irrelevant backend/payment checklists.
- **Relevant Project Usage**: Quality gate before shipping changes to production or completing major features.

### 4. `21st`
- **Location**: `.agents/skills/21st/SKILL.md`
- **Category**: Tooling & External Component Catalog Integration
- **Purpose**: Integration with 21st.dev component library ecosystem and CLI (`npx 21st@latest add <component>`).
- **When to Activate**:
  - Explicit requests to inspect or integrate specific 21st.dev design components.
- **Important Constraints**:
  - **Do NOT install blindly**: Never introduce 21st CLI dependencies or install external components unless explicitly directed.
  - Requires explicit user authorization if API keys or authentication credentials (`npx 21st login`) are needed.
  - Never commit credentials or fake external tokens.
- **Relevant Project Usage**: Reference library for custom UI patterns when directed.

---

### Alternative Visual Style & Direction Skills (Reference Only)

The following 5 skills represent **specialized, distinct visual directions**. They are **alternative reference frameworks**, NOT cumulative instructions. Never combine them simultaneously, and never allow them to override ZAPSTACK's established brand identity.

### 5. `cinematic-wellness-brand`
- **Location**: `.agents/skills/cinematic-wellness-brand/SKILL.md`
- **Category**: Visual Style Direction (Alternative)
- **Purpose**: Atmospheric, dark, tactile visual direction for high-end wellness, botanical, or mineral products.
- **When to Activate**: Only when creating or styling dedicated wellness, sensory product, or luxury health brand experiences.
- **Constraints**: Do not apply its dark botanical palette or bespoke cosmetic layout patterns to ZAPSTACK.

### 6. `editorial-architecture-portfolio`
- **Location**: `.agents/skills/editorial-architecture-portfolio/SKILL.md`
- **Category**: Visual Style Direction (Alternative)
- **Purpose**: Austere, minimal, monograph-inspired visual direction for architecture studios and built-environment monographs.
- **When to Activate**: Only when designing an architectural studio portfolio, physical space catalog, or gallery monograph.
- **Constraints**: Do not replace ZAPSTACK's tech/consulting narrative with architectural project specifications.

### 7. `editorial-functional-beverage`
- **Location**: `.agents/skills/editorial-functional-beverage/SKILL.md`
- **Category**: Visual Style Direction (Alternative)
- **Purpose**: Quiet, tactile, typography-led e-commerce and brand storytelling for functional beverage/consumables.
- **When to Activate**: Only when developing consumer beverage, culinary, or apothecary product sites.
- **Constraints**: Irrelevant to ZAPSTACK's software consulting services.

### 8. `expressive-creative-portfolio`
- **Location**: `.agents/skills/expressive-creative-portfolio/SKILL.md`
- **Category**: Visual Style Direction (Alternative)
- **Purpose**: High-impact personal portfolio for creative technologists, design engineers, or solo creators using kinetic type and bold signature motifs.
- **When to Activate**: Personal creator/engineer portfolios.
- **Constraints**: Respect originality boundaries; do not copy reference identities; do not override ZAPSTACK's corporate studio positioning.

### 9. `luxury-residence-storytelling`
- **Location**: `.agents/skills/luxury-residence-storytelling/SKILL.md`
- **Category**: Visual Style Direction (Alternative)
- **Purpose**: Editorial luxury real-estate and hospitality narrative with architectural imagery, floor-plan discovery, and qualified lead capture.
- **When to Activate**: High-end real estate developments, private residences, and luxury hospitality destinations.
- **Constraints**: Do not apply real-estate amenity structures or floor-plan filters to ZAPSTACK.

---

## 2. Skill Priority Hierarchy

When developing or modifying code, skills must interact according to this 6-level hierarchy:

```
┌────────────────────────────────────────────────────────┐
│ LEVEL 1: PROJECT REQUIREMENTS                          │
│ User instructions, prompt boundaries, business goals   │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│ LEVEL 2: EXISTING ARCHITECTURE                         │
│ Next.js App Router, Tailwind v4, GSAP/ScrollTrigger    │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│ LEVEL 3: UI/UX PRO MAX                                 │
│ Accessibility, hierarchy, responsive layout, tokens    │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│ LEVEL 4: SPECIALIZED SKILL                             │
│ Relevant domain skill (e.g. 21st, specific style ref)  │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│ LEVEL 5: MOTION GUIDANCE                               │
│ Interaction feel, spring timing, reduced-motion paths  │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│ LEVEL 6: WEB LIFECYCLE CHECKLIST                       │
│ QA audits, performance, SEO, security, final launch    │
└────────────────────────────────────────────────────────┘
```

1. **Level 1 — Project Requirements**: Explicit user constraints and business requirements always supersede any skill's default preferences.
2. **Level 2 — Existing Architecture**: Preserve established frameworks, directory structures, and libraries (`gsap`, `ScrollTrigger`, `@/components/ui/Container`, etc.). Never rewrite working architecture to fit a skill template.
3. **Level 3 — UI/UX Pro Max**: Informs all visual design, layout composition, typography rules, accessibility (WCAG AA), and component interaction states.
4. **Level 4 — Specialized Skill**: Activate at most ONE relevant style direction or integration tool specifically suited to the task.
5. **Level 5 — Motion**: Refines animation physics, gesture smoothness, and reduced-motion handling while preserving GSAP as the primary scroll engine.
6. **Level 6 — Web Lifecycle Checklist**: Guides pre-merge verification, automated checks, accessibility verification, and production readiness.

---

## 3. Style Skills Usage Rules

- The 5 style skills (`cinematic-wellness-brand`, `editorial-architecture-portfolio`, `editorial-functional-beverage`, `expressive-creative-portfolio`, `luxury-residence-storytelling`) are **mutually exclusive design references**.
- **Never activate multiple style skills simultaneously**.
- **Never change ZAPSTACK's color palette or branding** to match an example from a style skill.
- Use style skills selectively for layout inspiration or typography pairing ideas only when requested.

---

## 4. Dependency Discipline

- Skills mention various libraries (`motion`, `21st`, `@radix-ui`, `framer-motion`, etc.). **Do NOT install dependencies automatically.**
- Before considering any new package:
  1. Verify if the project already provides an equivalent (e.g., GSAP for animations, CSS for transitions).
  2. Confirm compatibility with **Next.js 16 (Turbopack)** and **React 19**.
  3. Ensure the dependency is strictly necessary and approved.
- Avoid introducing:
  - `react-router-dom` (Next.js App Router handles routing).
  - Duplicate animation engines.
  - Bloated component or icon libraries.

---

## 5. ZAPSTACK Brand Constraints

The **ZAPSTACK** client-acquisition portfolio has a defined, locked brand identity:

### Brand Color Palette
- **Primary / Deep Black**: `#202020` (`--brand-deep-black`)
- **Pure Black**: `#000000` (`--brand-black`)
- **Luxury Gold**: `#E0A030` (`--brand-gold`)
- **Bright Gold**: `#E8A838` (`--brand-gold-bright`)
- **Canvas White**: `#FFFFFF` (`--brand-white`)
- **Soft White / Surface**: `#F5F5F5` (`--brand-soft-white`)

### Critical Architectural Rules
1. **Light Editorial Presentation**: The primary website canvas is clean white (`#FFFFFF`) with deep black typography (`#202020`), soft neutral surfaces (`#F5F5F5`), and disciplined gold accents (`#E0A030`).
2. **Replaceable Logo**: The current logo mark (`BrandMark.tsx`) is temporary and must remain modular and easily replaceable. Never hardcode static dimensions or tightly couple layout around a fixed SVG shape.
3. **GSAP & ScrollTrigger Integrity**: All section animations, pinned panels (e.g., Work showcase), and scroll choreography are powered by GSAP and centralized through `lib/animations/gsap.ts`. Never remove or duplicate this system.
4. **Zero Unsolicited Code Changes**: Skill integration is strictly an agent operational upgrade. Application source code (`app/`, `components/`) must remain unmodified unless explicitly requested.
