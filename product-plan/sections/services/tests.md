# Test Specs: Services

These test specs are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

The Services section displays four expandable service cards. Testing focuses on rendering, expand/collapse behavior, and the callback interactions.

---

## User Flow Tests

### Flow 1: Browse Services

**Scenario:** Visitor scans the four service offerings

**Setup:**
- Render `Services` with all four services, all with `expanded: false`

**Expected Results:**
- [ ] Section heading "Services" is visible
- [ ] All four service names are visible: "Technical Consulting", "Full-time CTO", "Fractional CTO", "Engineering Leadership"
- [ ] Each card shows the service description (truncated with line-clamp)
- [ ] A chevron-down icon is visible on each card
- [ ] Expanded content ("Who It's For", "Key Outcomes") is NOT visible

---

### Flow 2: Expand a Service Card

**Scenario:** Visitor clicks a service card to read more details

**Steps:**
1. User clicks the "Technical Consulting" card header

**Expected Results:**
- [ ] `onToggleService` is called with `"technical-consulting"`
- [ ] When re-rendered with `expanded: true`, the card shows "Who It's For" section
- [ ] "Key Outcomes" section is visible with bullet points
- [ ] "Get Started" button is visible
- [ ] Chevron icon rotates 180° to point upward

#### Collapse a Service Card

**Steps:**
1. User clicks the expanded "Technical Consulting" card header again

**Expected Results:**
- [ ] `onToggleService` is called with `"technical-consulting"`
- [ ] When re-rendered with `expanded: false`, expanded content is hidden

---

## Component Interaction Tests

### ServiceCard Component

**Renders correctly (collapsed):**
- [ ] Shows service `name`
- [ ] Shows service `description` (line-clamped at 2 lines)
- [ ] Shows chevron-down icon
- [ ] Does NOT show "Who It's For" or "Key Outcomes"

**Renders correctly (expanded):**
- [ ] Shows "Who It's For" label and `whoItIsFor` text
- [ ] Shows "Key Outcomes" label and all items in `keyOutcomes` array
- [ ] Each outcome has an orange bullet dot
- [ ] Shows "Get Started" button
- [ ] Chevron icon is rotated upward

**Interactions:**
- [ ] Clicking the card header calls `onToggle`
- [ ] Clicking "Get Started" button does not call `onToggle`

---

## Edge Cases

- [ ] Card with an empty `keyOutcomes` array renders without errors (outcomes section is empty)
- [ ] Very long service name wraps within the card without overflow
- [ ] Single service in the grid renders correctly (doesn't stretch weirdly)
- [ ] All four services can be expanded simultaneously (independent state)

---

## Accessibility Checks

- [ ] Card header is a `<button>` element (keyboard accessible)
- [ ] Chevron icon has appropriate aria attributes or is aria-hidden
- [ ] "Get Started" button has a readable label

---

## Sample Test Data

```typescript
const mockService = {
  id: "technical-consulting",
  name: "Technical Consulting",
  description: "Deep-dive advisory on architecture decisions...",
  whoItIsFor: "Engineering leaders and CIOs evaluating architecture options...",
  keyOutcomes: [
    "Clear technical recommendations backed by real-world experience",
    "Modernization roadmap with implementation strategies",
  ],
  expanded: false,
}

const mockServiceExpanded = { ...mockService, expanded: true }
```
