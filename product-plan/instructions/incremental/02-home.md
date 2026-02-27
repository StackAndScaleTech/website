# Milestone 2: Home

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

Implement the Home section — the hero landing page that establishes David's core positioning and invites visitors to explore services or get in touch.

## Overview

The Home section is a read-only marketing landing page. It has a large hero block with a headline, subheading, and two CTA buttons, followed by a highlights grid that showcases three key expertise areas. Visitors who want to learn more are directed to the Services section; those ready to engage go to Contact.

**Key Functionality:**
- Display hero headline, subheading, and two CTA buttons (primary + secondary)
- Render three highlight cards with title and description
- Navigate to Services when "View Services" is clicked
- Navigate to Contact when "Start a Conversation" is clicked

## Components Provided

Copy the section components from `product-plan/sections/home/components/`:

- `Home.tsx` — Top-level wrapper composing Hero and Highlights
- `Hero.tsx` — Full-width hero with gradient background, headline, subheading, and CTAs
- `Highlights.tsx` — Grid of three expertise highlight cards
- `index.ts` — Component exports

## Props Reference

**Data props:**

```typescript
interface HomeProps {
  hero: {
    headline: string
    subheading: string
    ctaButtons: Array<{
      label: string
      href: string
      variant: 'primary' | 'secondary'
    }>
  }
  highlights: Array<{
    id: string
    title: string
    description: string
  }>
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onNavigate` | User clicks a CTA button (receives the button's `href`) |

## Expected User Flows

### Flow 1: Reading the Landing Page

1. User navigates to `/`
2. User sees hero headline "Build better tech. Scale faster."
3. User reads the subheading and scans the two CTA buttons
4. User scrolls down and reads the three highlight cards
5. **Outcome:** User understands David's positioning and has two clear next steps

### Flow 2: Navigate to Services

1. User clicks "View Services" button in the hero
2. **Outcome:** `onNavigate("/services")` is called — route to the Services section

### Flow 3: Navigate to Contact

1. User clicks "Start a Conversation" button in the hero
2. **Outcome:** `onNavigate("/contact")` is called — route to the Contact section

## Testing

See `product-plan/sections/home/tests.md` for UI behavior test specs covering:
- Hero content rendering
- CTA button callback behavior
- Highlights grid rendering

## Files to Reference

- `product-plan/sections/home/README.md` — Feature overview and design intent
- `product-plan/sections/home/tests.md` — UI behavior test specs
- `product-plan/sections/home/components/` — React components
- `product-plan/sections/home/types.ts` — TypeScript interfaces
- `product-plan/sections/home/sample-data.json` — Sample content

## Done When

- [ ] Hero renders with headline, subheading, and both CTA buttons
- [ ] CTA buttons are wired to navigation
- [ ] Three highlight cards render with content
- [ ] Responsive layout: hero centered on mobile, highlights stack vertically
- [ ] Light and dark modes work correctly
