# Experience

## Overview

The Experience section showcases David's depth across seven key themes through a grid of thematic cards. Each card presents a domain — from team leadership and startup development to cloud infrastructure and AI — with a short narrative description. A subtle call-to-action at the bottom invites visitors to get in touch.

## User Flows

- Visitor reads the section to understand the breadth and depth of David's background
- Visitor scans thematic cards to find experience relevant to their own situation
- Visitor clicks the CTA at the bottom to navigate to the Contact section

## Design Decisions

- Cards are purely informational — no expand/collapse, no drill-down
- Each card shows a numbered index (01–07) in the top-right corner as a subtle visual anchor
- Blue icon containers use `bg-blue-50/blue-950` for light/dark consistency
- The CTA strip uses orange background tint to visually differentiate it from the card grid
- Cards highlight on hover with a blue border and subtle shadow — no layout shift

## Data Shapes

**Entities:** Experience, ExperienceCTA

## Visual Reference

See `screenshot.png` for the target UI design (if available).

## Components Provided

- `Experience` — Section wrapper with header, grid, and CTA strip
- `ExperienceCard` — Individual experience theme card with icon, index, title, description

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onContactClick` | User clicks the "Get in touch" CTA button |
