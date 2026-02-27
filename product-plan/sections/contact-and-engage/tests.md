# Test Specs: Contact & Engage

These test specs are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

The Contact & Engage section is a controlled contact form. Testing focuses on field input, validation, submission gating, and the success state transition.

---

## User Flow Tests

### Flow 1: Submit the Contact Form

**Scenario:** Visitor fills out and submits the form

#### Success Path

**Setup:**
- Render `ContactForm` with an empty inquiry (`name: "", email: "", message: "", engagementType: null, submitted: false`) and all four engagement types

**Steps:**
1. User types their name in the Name field → `onInputChange` is called with `('name', 'Jane Doe')`
2. User types their email → `onInputChange` is called with `('email', 'jane@example.com')`
3. User types a message → `onInputChange` is called with `('message', 'I need a fractional CTO...')`
4. User selects "Fractional CTO" from the dropdown → `onInputChange` is called with `('engagementType', 'fractional-cto')`
5. Submit button is now enabled
6. User clicks "Send Message"

**Expected Results:**
- [ ] `onSubmit` is called with the complete inquiry object
- [ ] When re-rendered with `submitted: true`, the form shows the success state
- [ ] Success state shows heading "Thank You!"
- [ ] Success state shows confirmation message about 24-hour response
- [ ] "Send Another Message" button is visible

---

#### Failure Path: Required Fields Empty

**Setup:**
- Render with empty inquiry

**Expected Results:**
- [ ] "Send Message" button is disabled
- [ ] Validation message appears: "Please fill in your name and email to continue."
- [ ] `onSubmit` is NOT called when the button is clicked

#### Failure Path: Only Name Filled

**Setup:**
- Render with `inquiry.name = "Jane"` and `inquiry.email = ""`

**Expected Results:**
- [ ] "Send Message" button remains disabled
- [ ] Validation message is still visible

#### Failure Path: Only Email Filled

**Setup:**
- Render with `inquiry.name = ""` and `inquiry.email = "jane@example.com"`

**Expected Results:**
- [ ] "Send Message" button remains disabled

---

### Flow 2: Reset the Form After Submission

**Scenario:** Visitor submits the form, then wants to send another message

**Setup:**
- Render with `submitted: true`

**Steps:**
1. User sees the success state
2. User clicks "Send Another Message"

**Expected Results:**
- [ ] `onReset` is called
- [ ] When re-rendered with a fresh inquiry, the form fields are empty and enabled

---

## Component Interaction Tests

### ContactForm — Form State

**Renders correctly (empty form):**
- [ ] "Get In Touch" heading is visible
- [ ] Name field is empty and enabled
- [ ] Email field is empty and enabled, with mail icon
- [ ] Message textarea is empty and enabled, with message icon
- [ ] Engagement type dropdown shows "Select an engagement type..." placeholder
- [ ] All four engagement type options are present in the dropdown
- [ ] "Send Message" button is disabled

**Renders correctly (valid form):**
- [ ] "Send Message" button is enabled (not disabled)
- [ ] Validation message is NOT visible

**Renders correctly (submitted):**
- [ ] All input fields are disabled (`disabled` attribute)
- [ ] Success state is shown instead of the form

---

## Edge Cases

- [ ] Submitting with only whitespace in name/email keeps the button disabled (`.trim()` check)
- [ ] Selecting and then deselecting an engagement type sets it back to `null`
- [ ] Form handles very long messages without layout issues

---

## Accessibility Checks

- [ ] All form fields have associated `<label>` elements
- [ ] Required fields show the `*` indicator
- [ ] Disabled state is communicated to assistive technology
- [ ] Submit button has a readable label
- [ ] Success state is visible and readable (not hidden off-screen)

---

## Sample Test Data

```typescript
const mockEngagementTypes = [
  { id: "technical-consulting", label: "Technical Consulting" },
  { id: "full-time-cto", label: "Full-time CTO" },
  { id: "fractional-cto", label: "Fractional CTO" },
  { id: "engineering-leadership", label: "Engineering Leadership" },
]

// Empty form state
const mockEmptyInquiry = {
  id: "",
  name: "",
  email: "",
  message: "",
  engagementType: null,
  submitted: false,
}

// Valid, ready to submit
const mockValidInquiry = {
  id: "test-1",
  name: "Jane Doe",
  email: "jane@example.com",
  message: "I'm looking for a fractional CTO.",
  engagementType: "fractional-cto",
  submitted: false,
}

// Post-submission
const mockSubmittedInquiry = { ...mockValidInquiry, submitted: true }
```
