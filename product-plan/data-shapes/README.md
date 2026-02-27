# UI Data Shapes

These types define the shape of data that the UI components expect to receive as props. They represent the **frontend contract** — what the components need to render correctly.

How you model, store, and fetch this data on the backend is an implementation decision. You may combine, split, or extend these types to fit your architecture.

## Entities

- **HeroSection** — The main hero content with headline, subheading, and CTA buttons (used in: home)
- **CTAButton** — A call-to-action button with label, href, and variant (used in: home)
- **Highlight** — A key expertise area shown in the homepage highlights grid (used in: home)
- **Service** — A service offering with name, description, target audience, and outcomes (used in: services)
- **Experience** — A thematic area of expertise shown as a card (used in: experience)
- **ExperienceCTA** — The call-to-action strip at the bottom of the experience section (used in: experience)
- **EngagementType** — An available engagement type option for the contact form dropdown (used in: contact-and-engage)
- **Inquiry** — The contact form state capturing name, email, message, and engagement type (used in: contact-and-engage)

## Per-Section Types

Each section includes its own `types.ts` with the full interface definitions:

- `sections/home/types.ts`
- `sections/services/types.ts`
- `sections/experience/types.ts`
- `sections/contact-and-engage/types.ts`

## Combined Reference

See `overview.ts` for all entity types aggregated in one file.
