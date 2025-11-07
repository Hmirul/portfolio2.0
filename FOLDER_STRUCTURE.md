# Folder Structure Guide

This document explains the organization of the portfolio project.

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page (/)
│   ├── globals.css              # Global styles
│   ├── projects/
│   │   └── page.tsx             # Projects page (/projects)
│   ├── about/
│   │   └── page.tsx             # About page (/about)
│   ├── skills/
│   │   └── page.tsx             # Skills page (/skills)
│   ├── experience/
│   │   └── page.tsx             # Experience page (/experience)
│   ├── blog/
│   │   ├── page.tsx             # Blog list page (/blog)
│   │   └── [slug]/
│   │       └── page.tsx         # Individual blog post (/blog/[slug])
│   └── contact/
│       └── page.tsx             # Contact page (/contact)
│
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer component
│   ├── ThemeToggle.tsx          # Dark mode toggle
│   ├── MobileMenu.tsx           # Mobile navigation menu
│   ├── HeroSection.tsx          # Hero section on home page
│   ├── AnimatedBackground.tsx   # Animated background blobs
│   ├── ProjectCard.tsx          # Individual project card
│   ├── ProjectGrid.tsx          # Projects grid layout
│   ├── AboutSection.tsx         # About page content
│   ├── SkillsSection.tsx        # Skills section
│   ├── SkillBar.tsx             # Individual skill bar
│   ├── Timeline.tsx             # Experience timeline
│   ├── TimelineItem.tsx         # Individual timeline item
│   ├── ContactForm.tsx          # Contact form
│   ├── BlogCard.tsx             # Blog post card
│   └── PageTransition.tsx       # Page transition wrapper
│
├── lib/                          # Utility functions and data
│   ├── theme.ts                 # Theme configuration
│   ├── animations.ts            # Framer Motion animation variants
│   ├── utils.ts                 # General utility functions
│   ├── constants.ts             # Global constants
│   ├── contact.ts               # Contact form validation
│   ├── markdown.ts              # Markdown processing utilities
│   ├── projects.ts              # Projects data
│   ├── skills.ts                # Skills data
│   ├── experience.ts            # Experience/education data
│   ├── about.ts                 # About page data
│   └── blog.ts                  # Blog posts data
│
├── hooks/                        # Custom React hooks
│   ├── useScrollAnimation.ts    # Scroll animation hook
│   └── useMediaQuery.ts         # Media query hook
│
├── public/                       # Static assets
│   ├── favicon.ico              # Website favicon
│   └── images/                  # Image assets
│       ├── hero-bg.jpg
│       ├── profile.jpg
│       └── projects/
│
├── .github/                      # GitHub configuration
│   └── workflows/               # GitHub Actions workflows
│       └── deploy.yml           # Deployment workflow (optional)
│
├── Configuration Files
│   ├── package.json             # Dependencies and scripts
│   ├── tsconfig.json            # TypeScript configuration
│   ├── tailwind.config.ts       # Tailwind CSS configuration
│   ├── postcss.config.js        # PostCSS configuration
│   ├── next.config.js           # Next.js configuration
│   ├── netlify.toml             # Netlify deployment config
│   ├── .eslintrc.json           # ESLint configuration
│   ├── .prettierrc              # Prettier configuration
│   ├── .gitignore              # Git ignore rules
│   └── .env.local.example       # Environment variables template
│
└── Documentation
    ├── README.md                # Project overview
    ├── CUSTOMIZATION.md         # Customization guide
    ├── DEPLOYMENT.md            # Deployment instructions
    ├── FOLDER_STRUCTURE.md      # This file
    └── QUICK_START.md           # Quick start guide
```

## 📄 File Descriptions

### App Directory (`app/`)

The `app/` directory contains all pages and layouts using Next.js 13+ App Router.

- **layout.tsx**: Root layout wrapping all pages with providers
- **page.tsx**: Home page component
- **globals.css**: Global styles, fonts, and CSS variables
- **[page]/page.tsx**: Dynamic pages for each section

### Components (`components/`)

Reusable React components organized by functionality:

- **Navigation**: Navbar, MobileMenu, ThemeToggle
- **Sections**: HeroSection, AboutSection, SkillsSection
- **Cards**: ProjectCard, BlogCard, TimelineItem
- **Forms**: ContactForm
- **Utilities**: PageTransition, AnimatedBackground

### Library (`lib/`)

Data and utility functions:

- **Data files** (*.ts): Projects, skills, experience, blog posts
- **Utilities**: Animation variants, helper functions, constants
- **Theme**: Color and design system configuration

### Hooks (`hooks/`)

Custom React hooks for common functionality:

- **useScrollAnimation**: Detect when elements enter viewport
- **useMediaQuery**: Responsive breakpoint detection

### Public (`public/`)

Static assets served directly:

- **favicon.ico**: Website icon
- **images/**: Project screenshots and profile images

## 🔄 Data Flow

```
Data Files (lib/)
    ↓
Components (components/)
    ↓
Pages (app/)
    ↓
Browser
```

### Example: Projects Page

1. **Data**: `lib/projects.ts` contains project data
2. **Component**: `components/ProjectCard.tsx` displays individual project
3. **Container**: `components/ProjectGrid.tsx` manages grid layout
4. **Page**: `app/projects/page.tsx` imports and renders grid
5. **Layout**: `app/layout.tsx` wraps page with navbar/footer

## 🎨 Styling Architecture

```
Tailwind CSS (tailwind.config.ts)
    ↓
Global Styles (app/globals.css)
    ↓
Component Classes (components/*.tsx)
    ↓
Dark Mode (next-themes)
```

## 🔧 Configuration Files

### package.json
- Project metadata
- Dependencies and dev dependencies
- Build and development scripts

### tsconfig.json
- TypeScript compiler options
- Path aliases (@/*)
- Strict mode settings

### tailwind.config.ts
- Color palette
- Typography settings
- Animation definitions
- Dark mode configuration

### next.config.js
- Image optimization
- Build settings
- Performance optimizations

### netlify.toml
- Build command and publish directory
- Environment variables
- Redirect and header rules
- Caching configuration

## 📝 Adding New Files

### Add a New Page

1. Create directory in `app/`:
```
app/new-page/page.tsx
```

2. Add to navigation in `lib/constants.ts`

### Add a New Component

1. Create file in `components/`:
```
components/NewComponent.tsx
```

2. Import in pages or other components

### Add New Data

1. Create file in `lib/`:
```
lib/new-data.ts
```

2. Export data and types
3. Import in components

## 🎯 Best Practices

### File Organization

- Keep related files together
- Use descriptive file names
- Follow naming conventions (PascalCase for components, camelCase for utilities)

### Component Structure

```tsx
'use client'  // If using client-side features

import { imports }

interface Props { /* ... */ }

export function ComponentName({ props }: Props) {
  // Component logic
  return (
    // JSX
  )
}
```

### Data Structure

```typescript
export interface DataType {
  id: string
  name: string
  // ... other fields
}

export const data: DataType[] = [
  // ... data items
]
```

## 🔍 Finding Things

| What | Where |
|------|-------|
| Page content | `app/[page]/page.tsx` |
| Component | `components/ComponentName.tsx` |
| Data | `lib/data-name.ts` |
| Styles | `app/globals.css` or component className |
| Colors | `tailwind.config.ts` |
| Animations | `lib/animations.ts` |
| Utilities | `lib/utils.ts` |
| Hooks | `hooks/useHookName.ts` |
| Environment vars | `.env.local` |

## 📚 Related Documentation

- [README.md](./README.md) - Project overview
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - How to customize
- [DEPLOYMENT.md](./DEPLOYMENT.md) - How to deploy

---

For more information, check the [README.md](./README.md).
