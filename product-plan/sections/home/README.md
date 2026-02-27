# Home

## Overview

The Home section is the hero landing page that introduces David and Stack and Scale. It establishes the core positioning as a hands-on engineering leader who helps startups and mid-market companies build better technology and scale their teams. The tone is authoritative but approachable, emphasizing execution capability alongside strategic leadership.

## User Flows

- User lands on home page and immediately understands David's positioning through the hero headline and supporting text
- User reads the three key highlights to understand core expertise areas
- User clicks "View Services" to explore what Stack and Scale offers
- User clicks "Start a Conversation" to initiate contact

## Design Decisions

- Hero uses a subtle gradient background to visually separate it from the highlights section below
- Two CTA buttons use primary (blue) and secondary (orange) colors for clear visual hierarchy
- Highlight cards use a decorative blue-to-orange gradient icon accent that shifts on hover
- The section uses generous whitespace and large typography for authority and readability

## Data Shapes

**Entities:** HeroSection, CTAButton, Highlight

## Visual Reference

See `screenshot.png` for the target UI design (if available).

## Components Provided

- `Home` — Top-level section wrapper composing Hero and Highlights
- `Hero` — Full-width hero with headline, subheading, and CTA buttons
- `Highlights` — Grid of three key expertise highlight cards

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onNavigate` | User clicks a CTA button (receives the href) |
