# Test Specs: Experience

These test specs are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

The Experience section is read-only — seven themed cards in a grid, followed by a CTA strip. Testing focuses on rendering all cards and the CTA callback.

---

## User Flow Tests

### Flow 1: Viewing the Experience Section

**Scenario:** Visitor scans thematic experience cards

**Setup:**
- Render `Experience` with all seven experience items and CTA data

**Expected Results:**
- [ ] Section heading "Experience" is visible
- [ ] "Background" label is visible above the heading
- [ ] All seven experience cards are rendered
- [ ] Each card shows its title and description
- [ ] Numbered indices 01–07 are visible on the cards
- [ ] Blue icon containers are present on each card

---

### Flow 2: Clicking the CTA

**Scenario:** Visitor clicks "Get in touch" to navigate to the contact section

**Steps:**
1. User clicks the "Get in touch" button in the CTA strip

**Expected Results:**
- [ ] `onContactClick` is called
- [ ] If `onContactClick` is not provided, clicking does not throw errors

---

## Component Interaction Tests

### Experience Component

**Renders correctly:**
- [ ] Renders one `ExperienceCard` per item in the `experiences` array
- [ ] CTA strip is visible at the bottom
- [ ] CTA heading matches `cta.heading` prop
- [ ] CTA description matches `cta.description` prop
- [ ] CTA button label matches `cta.buttonText` prop

### ExperienceCard Component

**Renders correctly:**
- [ ] Displays `title` text
- [ ] Displays `description` text
- [ ] Shows a numbered index (1-based, zero-padded)
- [ ] Renders an icon in the blue container

**Interactions:**
- [ ] Cards are not clickable (no callbacks on the card itself)
- [ ] Hovering a card changes border color (visual only, no callback)

---

## Edge Cases

- [ ] Renders correctly with fewer than 7 cards (grid adapts gracefully)
- [ ] Long card descriptions don't overflow their containers
- [ ] Cards with unknown icon names fall back to the default Code icon without errors

---

## Accessibility Checks

- [ ] "Get in touch" is a `<button>` element (keyboard accessible)
- [ ] Card titles use appropriate heading level (`h3`)
- [ ] Icon decorative elements are aria-hidden

---

## Sample Test Data

```typescript
const mockExperience = {
  id: "team-leadership",
  title: "Engineering Team Leadership",
  icon: "Users",
  description: "Leading engineering teams through the full spectrum of growth challenges...",
}

const mockCTA = {
  heading: "Ready to work together?",
  description: "Let's talk about how Stack and Scale can help your company build and grow.",
  buttonText: "Get in touch",
}
```
