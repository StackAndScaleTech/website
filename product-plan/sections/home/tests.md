# Test Specs: Home

These test specs are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

The Home section is a read-only landing page with a hero and highlights grid. The main interactive elements are two CTA buttons. Testing focuses on content rendering, visual hierarchy, and navigation callbacks.

---

## User Flow Tests

### Flow 1: Viewing the Homepage

**Scenario:** A visitor lands on the homepage and reads the core positioning

#### Success Path

**Setup:**
- Render `Home` with sample data from `sample-data.json`

**Expected Results:**
- [ ] Hero headline is visible: "Build better tech. Scale faster."
- [ ] Hero subheading is visible and readable
- [ ] Two CTA buttons are rendered: "View Services" and "Start a Conversation"
- [ ] Three highlight cards are rendered below the hero
- [ ] Each highlight card shows a title and description

---

### Flow 2: Navigating via CTA Buttons

**Scenario:** Visitor clicks a CTA button to navigate to another section

#### "View Services" Button

**Steps:**
1. User clicks "View Services" button

**Expected Results:**
- [ ] `onNavigate` is called with `"/services"`

#### "Start a Conversation" Button

**Steps:**
1. User clicks "Start a Conversation" button

**Expected Results:**
- [ ] `onNavigate` is called with `"/contact"`

---

## Component Interaction Tests

### Hero Component

**Renders correctly:**
- [ ] Displays the headline text from props
- [ ] Displays the subheading text from props
- [ ] Renders all CTA buttons from the `ctaButtons` array
- [ ] Primary button uses blue styling (`bg-blue-600`)
- [ ] Secondary button uses orange styling (`bg-orange-500`)

**Interactions:**
- [ ] Clicking any CTA button calls `onNavigate` with the button's `href`
- [ ] If `onNavigate` is not provided, clicking buttons does not throw errors

### Highlights Component

**Renders correctly:**
- [ ] Renders one card per item in the `highlights` array
- [ ] Each card displays its `title` and `description`
- [ ] Section heading "What I Bring" is visible

---

## Edge Cases

- [ ] Renders correctly with an empty `highlights` array (no cards, section heading still shows)
- [ ] Long headline text wraps gracefully without breaking layout
- [ ] Long highlight descriptions don't overflow their card containers
- [ ] CTA buttons are accessible via keyboard (Tab + Enter)

---

## Accessibility Checks

- [ ] CTA buttons are `<button>` elements with readable labels
- [ ] Heading hierarchy is correct: `h1` for hero headline, `h2` for "What I Bring", `h3` for card titles
- [ ] All text has sufficient color contrast in both light and dark modes

---

## Sample Test Data

```typescript
const mockHero = {
  headline: "Build better tech. Scale faster.",
  subheading: "I help startups and mid-market companies architect modern tech...",
  ctaButtons: [
    { label: "View Services", href: "/services", variant: "primary" as const },
    { label: "Start a Conversation", href: "/contact", variant: "secondary" as const },
  ],
}

const mockHighlights = [
  {
    id: "hands-on-leader",
    title: "Hands-on Engineer + Proven Leader",
    description: "I don't just strategize — I code...",
  },
]
```
