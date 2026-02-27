# Application Shell

## Overview

Stack and Scale uses a sticky sidebar layout with a collapsible hamburger menu on mobile. The shell provides persistent navigation across all four sections while maintaining a clean, minimal aesthetic.

## Navigation Items

| Label | Route |
|-------|-------|
| Home | `/` |
| Experience | `/experience` |
| Services | `/services` |
| Contact & Engage | `/contact` |

## Design Details

- **Layout:** Fixed sidebar on desktop (left), hamburger drawer on mobile
- **Sidebar width:** ~256px (desktop), slides in from left on mobile
- **Background:** `slate-50` (light) / `slate-900` (dark)
- **Active state:** Blue left border + blue tinted background
- **Hover state:** Subtle slate background tint
- **Logo:** "Stack" + "Scale" two-line treatment with blue icon
- **Footer:** Copyright line at bottom of sidebar

## Components Provided

- `AppShell` — Main layout wrapper that accepts `children`, `navigationItems`, and `onNavigate`
- `MainNav` — Sidebar nav with logo, nav items, and footer

## Responsive Behavior

- **Desktop (lg+):** Sidebar always visible, content fills remaining width
- **Mobile:** Sidebar hidden, hamburger toggle in top bar, overlay closes on tap
