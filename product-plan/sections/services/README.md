# Services

## Overview

The Services section presents David's four core service offerings in an easy-to-scan format. Each service card displays its name, description, target audience, and key outcomes. Users can expand cards for more detailed information about each engagement type.

## User Flows

- Browse all four services at a glance
- Expand a service card to read detailed information
- Understand who each service is designed for
- Learn about key outcomes and benefits for each service

## Design Decisions

- Cards are collapsible — the description is always visible, deeper detail is revealed on expand
- Expand/collapse is toggled via the card header (entire header is clickable)
- Orange bullet dots are used for key outcomes list items to reinforce the secondary accent color
- Cards use a two-column grid on medium screens and above

## Data Shapes

**Entities:** Service

## Visual Reference

See `screenshot.png` for the target UI design (if available).

## Components Provided

- `Services` — Top-level section wrapper with header and services grid
- `ServiceCard` — Individual expandable service card

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onToggleService` | User clicks a service card header to expand or collapse it (receives serviceId) |
