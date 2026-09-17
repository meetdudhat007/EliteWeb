# NEXORA — Portfolio & Agency Prototype

A modern, highly animated portfolio/agency website prototype for a specialized software development team.

> **Important Notice:**
> This repository currently contains an internal prototype/sample website. All branding names, project case studies, client representations, and team member profiles are temporary demonstration values. They are centralized in `lib/constants/site.ts` to allow straightforward replacement once permanent branding and company decisions are finalized.

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
  constants/site.ts    # Single source of truth for all demo content & types
  animations/          # Future GSAP / Motion timeline utilities
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
