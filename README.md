# Stack and Scale

Personal website for [Stack and Scale](https://stackandscale.io) — hands-on engineering leadership for startups and mid-market companies.

Built with Next.js 16, TypeScript, and Tailwind CSS.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero landing page with positioning and highlights |
| `/services` | Four expandable engagement model cards |
| `/experience` | Seven thematic expertise cards |
| `/contact` | Contact form with Resend email integration |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** [Resend](https://resend.com)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- A [Resend](https://resend.com) account and API key

### Install dependencies

```bash
npm install
```

### Configure environment variables

Copy `.env.local` and add your Resend API key:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Add `RESEND_API_KEY` under Project → Settings → Environment Variables
4. Deploy — every push to `main` deploys automatically

### Vercel CLI

```bash
npm i -g vercel
vercel
vercel env add RESEND_API_KEY
vercel --prod
```

## Contact Form

Form submissions are sent to `dchancogne@gmail.com` via Resend.

For production, add a custom domain in the Resend dashboard and update the `from` address in `src/app/api/contact/route.ts`:

```ts
from: 'Stack and Scale <noreply@yourdomain.com>',
```

## License

MIT — see [LICENSE](./LICENSE).
