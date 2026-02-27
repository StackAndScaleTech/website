# Contact & Engage

## Overview

A simple contact form for capturing inbound inquiries. Users enter their name, email, and optional message and engagement type preference. After submission, the form displays a thank you confirmation and the inputs become disabled.

## User Flows

- Fill out contact form with name, email, optional message, and optional engagement type
- Submit the form (submit button is disabled until name and email are filled)
- Form becomes disabled and displays a thank you message
- Optional: click "Send Another Message" to reset the form

## Design Decisions

- Name and email are required; message and engagement type are optional
- Submit button is disabled while required fields are empty — a helper message explains this in orange
- After submission, the entire form switches to a centered success state with a green checkmark
- Form state is controlled externally via props (inquiry object + onInputChange callback)
- Engagement type dropdown lists all four service types as options

## Data Shapes

**Entities:** EngagementType, Inquiry

## Visual Reference

See `screenshot.png` for the target UI design (if available).

## Components Provided

- `ContactForm` — Full contact form with validation, submission, and success states

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onInputChange` | Any form field value changes (receives field name and new value) |
| `onSubmit` | User clicks "Send Message" with valid name and email (receives inquiry object) |
| `onReset` | User clicks "Send Another Message" after a successful submission |
