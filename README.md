# ZAPSTACK — Website

A modern, highly animated website for ZAPSTACK — a specialized software development team.

> **Important Notice:**
> This repository is an active development build. Project case studies, team member profiles, and some contact information are modular placeholder values centralized in `lib/constants/site.ts`. They will be updated with finalized content without requiring structural changes.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & CSS custom properties (design tokens)
- **Package Manager:** npm

## Project Architecture

```
app/
  globals.css          # Design tokens & CSS custom property foundation
  layout.tsx           # Root layout with centralized metadata & typography
  page.tsx             # Homepage composition connecting section components

components/
  navigation/          # Sticky header & demo navigation
  hero/                # Hero banner with demo tagline & positioning
  statement/           # Engineering perspective statement
  services/            # Core service capabilities
  work/                # Selected demonstration projects
  process/             # Delivery methodology
  team/                # 4-member team placeholder roster
  contact/             # Contact CTA & communication channels
  ui/                  # Reusable UI primitives (future phases)
  3d/                  # 3D/WebGL canvas containers (future phases)

lib/
  constants/site.ts    # Single source of truth for brand identity, content & types
  constants/theme.ts   # ZAPSTACK design token constants
  constants/animation.ts # GSAP animation tokens
  animations/          # GSAP / ScrollTrigger animation infrastructure
  utils/cn.ts          # Class composition utility

hooks/                 # Custom React hooks

public/
  images/              # Asset storage (prepared for future phases)
  projects/            # Project showcase media
  textures/            # Shaders and WebGL texture assets
  models/              # 3D model assets
  icons/               # Custom SVG icons
```

## Getting Started

First, install dependencies (if not already installed):

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the prototype.

## Available Scripts

- `npm run dev` — Start the local development server
- `npm run build` — Create an optimized production build
- `npm run start` — Run the production server
- `npm run lint` — Execute ESLint checks
