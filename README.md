# Sankalp Nagle — Portfolio

A full-stack developer portfolio built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**.

## Tech Stack

| Tool | Version |
|------|---------|
| Vite | ^5.4 |
| React | ^18.3 |
| TypeScript | ^5.5 |
| Tailwind CSS | ^3.4 |
| Framer Motion | ^11.0 |

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── Reveal.tsx        # Scroll-triggered reveal wrapper
│   ├── SkBar.tsx         # Animated skill bar
│   ├── Sidebar.tsx       # Desktop sidebar navigation
│   └── MobileNav.tsx     # Mobile bottom navigation
├── data/
│   └── index.ts          # All portfolio data (nav, skills, projects, etc.)
├── hooks/
│   ├── useActiveSection.ts  # Tracks active nav section on scroll
│   └── useCursorGlow.ts     # Tracks cursor position for ambient glow
├── types/
│   └── index.ts          # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css             # Tailwind + custom component classes
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customisation

All content lives in `src/data/index.ts` — update:
- `NAV_ITEMS` — navigation labels/IDs
- `SKILLS_DATA` — skill names and proficiency percentages
- `TECH` — technology tags
- `EXP` — work experience entries
- `PROJECTS` — featured project cards
- `CONTACT_INFO` — contact details
- `STAT_BOXES` / `HERO_STATS` — stat counters

Colors are defined as Tailwind config extensions and CSS custom classes in `index.css`. The gold accent is `#c9973a`.
