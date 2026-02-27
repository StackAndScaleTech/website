# Milestone 5: Contact & Engage

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

Implement the Contact & Engage section — a simple contact form that captures inbound inquiries from potential clients.

## Overview

The Contact & Engage section is a controlled contact form. Visitors provide their name, email, and optionally a message and engagement type preference. The form validates that name and email are filled before allowing submission. After submission, the form transitions to a success state with a thank you message. Visitors can optionally reset the form to send another message.

**Key Functionality:**
- Form fields for name (required), email (required), message (optional), engagement type (optional dropdown)
- Submit button disabled until name and email are filled
- Validation helper message shown when fields are empty
- On submit: fires `onSubmit` callback with the inquiry data
- Success state: displays thank you message, disables all inputs
- Reset: fires `onReset` callback, allowing the form to be cleared and reused

## Components Provided

Copy the section components from `product-plan/sections/contact-and-engage/components/`:

- `ContactForm.tsx` — Full contact form with all states
- `index.ts` — Component exports

## Props Reference

**Data props:**

```typescript
interface EngagementType {
  id: string
  label: string
}

interface Inquiry {
  id: string
  name: string
  email: string
  message: string
  engagementType: string | null
  submitted: boolean
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onInputChange` | Any field value changes (receives field name and new value) |
| `onSubmit` | Valid form is submitted (receives complete inquiry object) |
| `onReset` | User clicks "Send Another Message" in success state |

The component is fully controlled — manage the `inquiry` state in your parent component and update it via `onInputChange`. Set `inquiry.submitted = true` after a successful submission to trigger the success state.

## Expected User Flows

### Flow 1: Submit a Contact Inquiry

1. User navigates to `/contact`
2. User fills in name and email (required)
3. Submit button becomes enabled
4. User optionally fills in message and selects an engagement type
5. User clicks "Send Message"
6. **Outcome:** `onSubmit` is called with the inquiry — handle sending to your backend (email, CRM, etc.)
7. Re-render with `submitted: true` to show the success state

### Flow 2: Success State

1. User sees the thank you screen
2. User reads confirmation message about 24-hour response
3. **Outcome:** Inquiry is captured, user feels confident their message was received

### Flow 3: Send Another Message

1. From the success state, user clicks "Send Another Message"
2. **Outcome:** `onReset` is called — clear the inquiry state and re-render the empty form

## Testing

See `product-plan/sections/contact-and-engage/tests.md` for UI behavior test specs covering:
- Required field validation
- Submit button gating
- Successful submission and success state
- Reset behavior

## Files to Reference

- `product-plan/sections/contact-and-engage/README.md` — Feature overview
- `product-plan/sections/contact-and-engage/tests.md` — UI behavior test specs
- `product-plan/sections/contact-and-engage/components/` — React components
- `product-plan/sections/contact-and-engage/types.ts` — TypeScript interfaces
- `product-plan/sections/contact-and-engage/sample-data.json` — Sample data (engagement types)

## Done When

- [ ] Form renders with all four fields
- [ ] Submit button is disabled until name and email are non-empty
- [ ] Validation message shows when fields are empty
- [ ] `onSubmit` fires with the inquiry data when submitted
- [ ] Success state displays after submission
- [ ] All inputs are disabled in the success state
- [ ] "Send Another Message" triggers `onReset`
- [ ] Engagement type dropdown lists all four options
- [ ] Responsive on mobile
