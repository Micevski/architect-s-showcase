# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Architect's portfolio website built with React 18, TypeScript, Vite, and Tailwind CSS. Features project galleries, services showcase, and contact functionality.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build
npm run lint       # Run ESLint
npm run test       # Run tests once (Vitest)
npm run test:watch # Run tests in watch mode
```

## Architecture

**Tech Stack**: React 18 + TypeScript, Vite, Tailwind CSS, shadcn/ui (Radix), Framer Motion, React Router v6, React Hook Form + Zod

**Directory Structure**:
- `src/components/ui/` - shadcn/ui component library (pre-built, rarely modified)
- `src/components/sections/` - Page sections (Hero, About, Services, Projects, Contact)
- `src/components/layout/` - Header and Footer
- `src/pages/` - Route pages (Index, ProjectDetail, NotFound)
- `src/data/` - Mock data and TypeScript types for projects/services
- `src/hooks/` - Custom React hooks
- `src/lib/utils.ts` - `cn()` utility for className merging

**Path Alias**: `@/*` maps to `src/*`

## Design System

- **Typography**: Cormorant Garamond (serif) for headings, Inter (sans) for body
- **Colors**: HSL-based warm neutrals with dark mode support via CSS custom properties in `index.css`
- **Animations**: Framer Motion for component animations, CSS keyframes for utility classes (fade-in, fade-up)

## Testing

Tests use Vitest + React Testing Library with jsdom. Test files go in `src/test/` or colocated with components. Setup file at `src/test/setup.ts`.
