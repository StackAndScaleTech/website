# Milestone 1: Shell

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** None

---

## About This Handoff

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Product requirements and user flow specifications
- Design system tokens (colors, typography)
- Sample data showing the shape of data components expect
- Test specs focused on user-facing behavior

**Your job:**
- Integrate these components into your application
- Wire up callback props to your routing and business logic
- Replace sample data with real data from your backend
- Implement loading, error, and empty states

The components are props-based — they accept data and fire callbacks. How you architect the backend, data layer, and business logic is up to you.

---

## Goal

Set up the design tokens and application shell — the persistent chrome that wraps all sections.

## What to Implement

### 1. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind color usage
- See `product-plan/design-system/fonts.md` for Google Fonts setup

**Color palette:** blue (primary), orange (secondary), slate (neutral)
**Typography:** Inter for headings and body, JetBrains Mono for code

### 2. Application Shell

Copy the shell components from `product-plan/shell/components/` to your project:

- `AppShell.tsx` — Main layout wrapper with sidebar and mobile hamburger
- `MainNav.tsx` — Sidebar navigation with logo and nav items
- `index.ts` — Component exports

**Wire Up Navigation:**

Connect navigation items to your routing system:

| Label | Route |
|-------|-------|
| Home | `/` |
| Experience | `/experience` |
| Services | `/services` |
| Contact & Engage | `/contact` |

Pass `navigationItems` as an array with `{ label, href, isActive }` objects. Set `isActive: true` on the item matching the current route.

Pass `onNavigate` as a callback that triggers your router's navigation (e.g., `router.push(href)` or `navigate(href)`).

**Mobile Behavior:**

The shell handles its own mobile sidebar toggle state internally. The hamburger button appears on screens smaller than `lg` (1024px).

## Files to Reference

- `product-plan/design-system/` — Design tokens (colors, fonts, CSS variables)
- `product-plan/shell/README.md` — Shell design intent and navigation structure
- `product-plan/shell/components/` — Shell React components

## Done When

- [ ] Design tokens configured (Inter font loaded, blue/orange/slate palette applied)
- [ ] Shell renders with sidebar navigation on desktop
- [ ] Navigation links to all four sections
- [ ] Active state highlights the current section
- [ ] Hamburger menu works on mobile (sidebar slides in/out)
- [ ] Overlay closes sidebar when tapped on mobile
- [ ] Responsive on all screen sizes
