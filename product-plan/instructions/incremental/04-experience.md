# Milestone 4: Experience

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Shell) complete

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

Implement the Experience section — a grid of seven thematic cards showcasing David's key areas of engineering and leadership expertise, followed by a CTA to the Contact section.

## Overview

The Experience section is read-only: seven equal-weight thematic cards in a responsive grid, each with an icon, numbered index, title, and narrative description. There is no interactivity beyond the CTA button at the bottom, which links to the Contact section. The section is intended to build credibility and help visitors self-identify which of David's backgrounds is most relevant to them.

**Key Functionality:**
- Render seven experience theme cards in a responsive grid (1 → 2 → 3 columns)
- Each card shows: blue icon container, numbered index (01–07), title, description
- Cards have a hover state (border color shifts to blue)
- CTA strip at the bottom with heading, description, and "Get in touch" button

## Components Provided

Copy the section components from `product-plan/sections/experience/components/`:

- `Experience.tsx` — Section wrapper with header, card grid, and CTA strip
- `ExperienceCard.tsx` — Individual experience theme card
- `index.ts` — Component exports

The icon names in the data map to Lucide React icons. The `ExperienceCard` component includes an internal icon map — ensure `lucide-react` is available in your project.

## Props Reference

**Data props:**

```typescript
interface Experience {
  id: string
  title: string
  icon: string        // Lucide icon name (e.g. "Users", "Cloud", "Sparkles")
  description: string
}

interface ExperienceCTA {
  heading: string
  description: string
  buttonText: string
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onContactClick` | User clicks the "Get in touch" CTA button |

## Expected User Flows

### Flow 1: Scan Experience Cards

1. User navigates to `/experience`
2. User scans the seven thematic cards
3. User finds the card(s) most relevant to their situation
4. **Outcome:** User builds confidence in David's breadth and depth of experience

### Flow 2: Navigate to Contact

1. User reads the CTA strip at the bottom
2. User clicks "Get in touch"
3. **Outcome:** `onContactClick` is called — route to the Contact section

## Testing

See `product-plan/sections/experience/tests.md` for UI behavior test specs covering:
- All seven cards rendering
- CTA button callback
- Icon fallback behavior

## Files to Reference

- `product-plan/sections/experience/README.md` — Feature overview
- `product-plan/sections/experience/tests.md` — UI behavior test specs
- `product-plan/sections/experience/components/` — React components
- `product-plan/sections/experience/types.ts` — TypeScript interfaces
- `product-plan/sections/experience/sample-data.json` — Sample experience data

## Done When

- [ ] All seven experience cards render in the responsive grid
- [ ] Each card shows icon, numbered index, title, and description
- [ ] CTA strip renders at the bottom with correct content
- [ ] "Get in touch" button is wired to navigate to the Contact section
- [ ] Hover state works (blue border on card hover)
- [ ] Responsive: 1 col on mobile, 2 on sm, 3 on lg
