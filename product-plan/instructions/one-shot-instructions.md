# Stack and Scale — Complete Implementation Instructions

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

## Testing

Each section includes a `tests.md` file with UI behavior test specs. These are **framework-agnostic** — adapt them to your testing setup.

**For each section:**
1. Read `product-plan/sections/[section-id]/tests.md`
2. Write tests for key user flows (success and failure paths)
3. Implement the feature to make tests pass
4. Refactor while keeping tests green

---

# Product Overview

Stack and Scale positions David as a hands-on senior engineer and engineering leader who helps early-stage startups and mid-market companies build and scale their technology. From deep technical work (cloud infrastructure, AI/ML) to growing engineering teams from 10–50 people, Stack and Scale offers the blend of execution and leadership that young companies need.

**Sections:** Home → Services → Experience → Contact & Engage

**Design System:** blue (primary), orange (secondary), slate (neutral) — Inter typography

---

# Milestone 1: Shell

> **Prerequisites:** None

## Goal

Set up the design tokens and application shell.

## What to Implement

### 1. Design Tokens

- See `product-plan/design-system/tailwind-colors.md` for color usage
- See `product-plan/design-system/fonts.md` for Google Fonts (Inter + JetBrains Mono)

### 2. Application Shell

Copy from `product-plan/shell/components/` and wire up:

**Navigation items:**

| Label | Route |
|-------|-------|
| Home | `/` |
| Experience | `/experience` |
| Services | `/services` |
| Contact & Engage | `/contact` |

Pass `isActive: true` on the item matching the current route. Pass `onNavigate` connected to your router.

## Done When

- [ ] Inter font loaded, blue/orange/slate palette applied
- [ ] Shell renders with sidebar on desktop, hamburger on mobile
- [ ] Navigation links to all four sections with active state
- [ ] Mobile sidebar slides in/out with overlay

---

# Milestone 2: Home

> **Prerequisites:** Milestone 1 complete

## Goal

Implement the hero landing page that establishes David's positioning.

## Overview

Read-only marketing page with a large hero and a highlights grid. Two CTAs link to Services and Contact.

**Key Functionality:**
- Hero with headline, subheading, and two CTA buttons (primary blue + secondary orange)
- Three highlight cards below the hero

## Components

Copy from `product-plan/sections/home/components/`. Main component: `Home`.

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onNavigate` | User clicks a CTA button (receives the href) |

## Expected User Flows

### View the Landing Page
1. User lands on `/`
2. Sees hero with headline "Build better tech. Scale faster."
3. Scrolls to read three highlight cards

### Navigate via CTAs
1. User clicks "View Services" → `onNavigate("/services")`
2. User clicks "Start a Conversation" → `onNavigate("/contact")`

## Done When

- [ ] Hero renders with both CTA buttons
- [ ] CTAs navigate correctly
- [ ] Three highlight cards render
- [ ] Responsive on mobile

---

# Milestone 3: Services

> **Prerequisites:** Milestone 1 complete

## Goal

Implement expandable service cards for the four engagement types.

## Overview

Four service cards in a 2-col grid. Cards start collapsed and expand to reveal target audience, outcomes, and a CTA when the header is clicked.

**Key Functionality:**
- Four cards: Technical Consulting, Full-time CTO, Fractional CTO, Engineering Leadership
- Each card is independently expandable/collapsible
- Expanded state shows "Who It's For", key outcomes, and "Get Started"

## Components

Copy from `product-plan/sections/services/components/`. Main component: `Services`.

The `expanded` field on each service is controlled externally. Toggle it via state when `onToggleService` fires.

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onToggleService` | User clicks a card header (receives serviceId) |

## Expected User Flows

### Expand a Service Card
1. User clicks "Fractional CTO" header
2. Card expands, showing details and "Get Started"
3. User clicks header again → card collapses

## Done When

- [ ] All four cards render in grid
- [ ] Expand/collapse toggle works
- [ ] Expanded content shows correctly
- [ ] Responsive: 2-col on md+, single column on mobile

---

# Milestone 4: Experience

> **Prerequisites:** Milestone 1 complete

## Goal

Implement the thematic expertise card grid.

## Overview

Seven equal-weight cards in a responsive grid (1 → 2 → 3 columns). Read-only except for the CTA strip at the bottom linking to Contact. Uses Lucide React icons — ensure the package is installed.

**Key Functionality:**
- Seven cards with icon, numbered index (01–07), title, description
- Orange CTA strip at the bottom
- Hover state on cards (blue border)

## Components

Copy from `product-plan/sections/experience/components/`. Main component: `Experience`.

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onContactClick` | User clicks "Get in touch" in the CTA strip |

## Done When

- [ ] All seven cards render with icons, indices, titles, descriptions
- [ ] CTA strip at the bottom links to Contact section
- [ ] Responsive grid (1/2/3 columns)

---

# Milestone 5: Contact & Engage

> **Prerequisites:** Milestone 1 complete

## Goal

Implement the inbound contact form.

## Overview

Controlled contact form. Name and email are required; message and engagement type are optional. Submitting fires `onSubmit` with the inquiry — handle sending to your backend. Set `inquiry.submitted = true` to trigger the success state.

**Key Functionality:**
- Required fields: name, email
- Optional: message (textarea), engagement type (dropdown with four options)
- Submit button disabled until required fields are filled
- Success state with thank you message after submission
- "Send Another Message" resets the form

## Components

Copy from `product-plan/sections/contact-and-engage/components/`. Main component: `ContactForm`.

This is a fully controlled component — manage `inquiry` state externally and update it via `onInputChange`.

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onInputChange` | Any field changes (field name + new value) |
| `onSubmit` | Valid form submitted (receives inquiry object) |
| `onReset` | "Send Another Message" clicked |

## Expected User Flows

### Submit an Inquiry
1. User fills name and email → submit button enables
2. Optionally fills message and selects engagement type
3. Clicks "Send Message" → `onSubmit` fires
4. Re-render with `submitted: true` → success state shown

### Reset
1. From success state, click "Send Another Message" → `onReset` fires
2. Clear inquiry state, re-render empty form

## Done When

- [ ] Form renders with all four fields
- [ ] Submit gated until name + email filled
- [ ] Success state displays after submission
- [ ] All inputs disabled in success state
- [ ] Reset works correctly
- [ ] Responsive on mobile
