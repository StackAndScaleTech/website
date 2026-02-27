# Milestone 3: Services

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

Implement the Services section — a scannable overview of Stack and Scale's four core engagement models, with expandable cards for deeper detail.

## Overview

The Services section lets visitors browse all four service offerings at a glance and expand any card to read more. Each card shows the service name and description by default; expanding reveals the target audience ("Who It's For"), key outcomes, and a "Get Started" CTA. Since this is a static website, "Get Started" can link to the Contact section.

**Key Functionality:**
- Display four service cards in a responsive grid (2-col on md+)
- Each card shows name and description (collapsed by default)
- Clicking a card header expands it to reveal target audience, outcomes, and a CTA
- Clicking an expanded card collapses it
- Cards operate independently (multiple can be expanded at once)

## Components Provided

Copy the section components from `product-plan/sections/services/components/`:

- `Services.tsx` — Section wrapper with header and grid layout
- `ServiceCard.tsx` — Individual expandable service card
- `index.ts` — Component exports

## Props Reference

**Data props:**

```typescript
interface Service {
  id: string
  name: string
  description: string
  whoItIsFor: string
  keyOutcomes: string[]
  expanded: boolean       // controls expanded/collapsed state
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onToggleService` | User clicks a service card header (receives `serviceId`) |

The `expanded` field on each service is controlled externally. When `onToggleService` fires, toggle the `expanded` value for the matching service in your state.

## Expected User Flows

### Flow 1: Browse All Services

1. User navigates to `/services`
2. User sees all four service cards collapsed
3. User reads service names and short descriptions
4. **Outcome:** User understands the four engagement models at a glance

### Flow 2: Expand a Service for Details

1. User clicks on "Fractional CTO" card header
2. **Outcome:** Card expands to show "Who It's For", key outcomes, and "Get Started" button

### Flow 3: Collapse a Service

1. User clicks on an already-expanded card header
2. **Outcome:** Card collapses, hiding the detailed content

## Testing

See `product-plan/sections/services/tests.md` for UI behavior test specs covering:
- Initial collapsed rendering
- Expand/collapse toggle behavior
- Expanded content visibility

## Files to Reference

- `product-plan/sections/services/README.md` — Feature overview
- `product-plan/sections/services/tests.md` — UI behavior test specs
- `product-plan/sections/services/components/` — React components
- `product-plan/sections/services/types.ts` — TypeScript interfaces
- `product-plan/sections/services/sample-data.json` — Sample service data

## Done When

- [ ] All four service cards render in a grid
- [ ] Cards start collapsed by default
- [ ] Clicking a card header expands/collapses it correctly
- [ ] Expanded state shows "Who It's For", outcomes, and "Get Started" button
- [ ] Multiple cards can be expanded simultaneously
- [ ] Responsive: 2-col grid on medium screens, single column on mobile
