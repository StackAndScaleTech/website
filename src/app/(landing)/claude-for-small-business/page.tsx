import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Claude AI for Small Business | Cambridge & Boston, MA | Stack & Scale',
  description:
    'Stack & Scale helps small businesses in Cambridge and Boston, MA set up Claude AI and run it long-term. We connect Claude to QuickBooks, HubSpot, Slack, and more — then stay on as your retainer.',
  keywords: [
    'Claude AI for small business Cambridge MA',
    'Claude AI setup Boston',
    'Anthropic Claude small business Boston',
    'AI consultant Cambridge Boston MA',
    'Claude AI implementation Greater Boston',
    'AI retainer support Cambridge Massachusetts',
    'small business AI automation Boston',
    'Claude for small business near Boston',
    'AI setup consultant Cambridge',
    'Anthropic AI consultant Boston MA',
    'Claude AI setup service Massachusetts',
    'AI tools for small business owners Greater Boston',
  ],
  openGraph: {
    title: 'Claude AI for Small Business | Cambridge & Boston, MA | Stack & Scale',
    description:
      'We set up Claude AI for small businesses in Cambridge and Boston, MA — and stay on as your retainer. Stop losing hours to admin work.',
    url: 'https://www.stackandscale.tech/claude-for-small-business',
    siteName: 'Stack & Scale',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude AI for Small Business | Cambridge & Boston | Stack & Scale',
    description:
      'Expert Claude AI setup and retainer support for small businesses in Cambridge and Boston, MA.',
  },
  alternates: {
    canonical: 'https://www.stackandscale.tech/claude-for-small-business',
  },
}

// ---------------------------------------------------------------------------
// Structured data (JSON-LD)
// ---------------------------------------------------------------------------

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Stack & Scale — Claude AI Setup & Retainer for Small Business',
  url: 'https://www.stackandscale.tech',
  description:
    'Expert implementation and ongoing retainer support for Anthropic\'s Claude AI platform for small businesses in Cambridge, Boston, and Greater Boston, MA.',
  priceRange: '$$',
  email: 'dchancogne@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cambridge',
    addressRegion: 'MA',
    addressCountry: 'US',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Cambridge',
      sameAs: 'https://www.wikidata.org/wiki/Q49111',
    },
    {
      '@type': 'City',
      name: 'Boston',
      sameAs: 'https://www.wikidata.org/wiki/Q100',
    },
    {
      '@type': 'State',
      name: 'Massachusetts',
    },
  ],
  serviceType: ['AI Consulting', 'AI Implementation', 'Technology Consulting'],
  knowsAbout: ['Claude AI', 'Anthropic', 'AI Automation', 'Small Business AI'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Claude AI Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Claude AI Setup for Small Business',
          description:
            'Full implementation of Claude for your business — tool connections, workflows, and team onboarding. Serving Cambridge, Boston, and Greater Boston, MA.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Claude AI Monthly Retainer',
          description:
            'Ongoing monthly support to keep Claude running, adapt workflows, and solve issues as they come up.',
        },
      },
    ],
  },
}

// ---------------------------------------------------------------------------
// Shared components
// ---------------------------------------------------------------------------

function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  const base =
    'inline-block font-semibold rounded-lg px-8 py-4 text-base transition-all duration-200 active:scale-95'
  const styles =
    variant === 'primary'
      ? `${base} bg-blue-600 text-white hover:bg-blue-700`
      : `${base} border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white`

  return (
    <Link href={href} className={`${styles} ${className}`}>
      {children}
    </Link>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
      {children}
    </p>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ClaudeForSmallBusinessPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-slate-950 text-slate-50 min-h-screen">

        {/* ---------------------------------------------------------------- */}
        {/* Top nav                                                           */}
        {/* ---------------------------------------------------------------- */}
        <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/StackAndScale-Logo.png"
                alt="Stack and Scale"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-slate-50 text-lg group-hover:text-blue-400 transition-colors">
                Stack &amp; Scale
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
              <Link href="/services" className="hover:text-slate-50 transition-colors">
                Services
              </Link>
              <Link href="/experience" className="hover:text-slate-50 transition-colors">
                Experience
              </Link>
              <CTAButton href="/contact" variant="primary" className="px-5 py-2 text-sm">
                Get in Touch
              </CTAButton>
            </nav>
            <CTAButton href="/contact" variant="primary" className="md:hidden px-5 py-2 text-sm">
              Get in Touch
            </CTAButton>
          </div>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* Hero                                                              */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/50 rounded-full px-4 py-2 text-sm text-blue-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Serving Cambridge &amp; Boston, MA · Anthropic&apos;s Claude implementation partner
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50 leading-tight mb-6">
              Claude AI for Small Business —{' '}
              <span className="text-blue-400">Set Up Right,</span>{' '}
              Supported Long-Term
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              We help small businesses in Cambridge, Boston, and across Greater Boston get
              Anthropic&apos;s Claude up and running — connected to the tools they already use —
              and we stay on as their retainer so they&apos;re never stuck.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary">
                Book a Free Discovery Call
              </CTAButton>
              <CTAButton href="#what-we-do" variant="secondary">
                See How It Works
              </CTAButton>
            </div>

            <p className="mt-6 text-slate-500 text-sm">
              No technical background required. We handle the hard parts.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Social proof bar                                                  */}
        {/* ---------------------------------------------------------------- */}
        <div className="border-y border-slate-800 bg-slate-900/50 py-5 px-6">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-slate-400 text-sm">
            <span className="flex items-center gap-2">
              <CheckIcon /> QuickBooks &amp; PayPal connected
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon /> HubSpot, Slack, Google Workspace
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon /> No IT team needed
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon /> Your data stays yours
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Problem                                                           */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>The reality</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6">
              AI is powerful. Getting it working is a different story.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              You&apos;ve heard about Claude. Maybe you&apos;ve even tried it. But turning a chat
              interface into something that actually runs your payroll, closes your books, or drafts
              your marketing campaigns — connected to the tools you already use — takes real setup
              work.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Most small business owners don&apos;t have an IT team or a dedicated ops person to
              figure that out. That&apos;s exactly what we do.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Why Claude                                                        */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-24 px-6 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>Why Claude</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
                Built for how small businesses actually work
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Anthropic designed Claude for small business to connect to the tools you already
                use — no replacement software, no learning curve for your team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '⚡',
                  title: 'Ready from day one',
                  body: 'One toggle installs everything. No lengthy setup, no waiting on IT. Your first workflow can run the same day.',
                },
                {
                  icon: '🔄',
                  title: 'Runs full workflows',
                  body: 'Claude doesn\'t just answer questions — it runs end-to-end processes so you stay focused on decisions, not busywork.',
                },
                {
                  icon: '🔗',
                  title: 'Works with your stack',
                  body: 'QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google Workspace, Microsoft 365, Slack, and more.',
                },
                {
                  icon: '🔒',
                  title: 'Your data stays yours',
                  body: 'Anthropic does not train on your business data. You approve each step, or let it run end-to-end with tools you choose.',
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="text-slate-50 font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Use cases                                                         */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>What Claude can do for you</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
                Real tasks. Real time savings.
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Here&apos;s what small business owners are automating with Claude right now.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  tag: 'Finance',
                  title: 'Payroll & accounts receivable',
                  body: 'Claude pulls your cash position from QuickBooks, reconciles it against PayPal settlements, ranks overdue invoices, and drafts reminder emails — ready for you to review and send.',
                },
                {
                  tag: 'Accounting',
                  title: 'Month-end close',
                  body: 'Reconcile accounts against settlements, flag mismatches, and get a plain-English P&L narrative written straight to your accountant. What used to take a full day now takes minutes.',
                },
                {
                  tag: 'Operations',
                  title: 'Monday morning brief',
                  body: 'Every week, Claude pulls your cash position, incoming settlements, pipeline movement, and calendar into one brief — and tells you the three things that need your attention today.',
                },
                {
                  tag: 'Marketing',
                  title: 'Campaigns & growth',
                  body: 'Claude analyzes your weak revenue months, plans a promotion, generates branded assets in Canva, segments your list in HubSpot, and stages the send. You decide what goes out and when.',
                },
                {
                  tag: 'Communications',
                  title: 'Customer emails & follow-ups',
                  body: 'Draft, personalize, and send follow-up emails at scale. Claude knows your tone, your deals, and your customers — so every message sounds like you wrote it.',
                },
                {
                  tag: 'Admin',
                  title: 'Document generation',
                  body: 'Proposals, SOWs, invoices, contracts — Claude generates them from templates and your data in seconds, ready for DocuSign. Stop losing hours to paperwork.',
                },
              ].map((uc) => (
                <article
                  key={uc.title}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-7 hover:border-slate-600 transition-colors"
                >
                  <span className="inline-block text-xs font-semibold text-blue-400 bg-blue-950/50 border border-blue-900 rounded-full px-3 py-1 mb-4">
                    {uc.tag}
                  </span>
                  <h3 className="text-slate-50 font-semibold text-lg mb-3">{uc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{uc.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Mid-page CTA                                                      */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-16 px-6 bg-blue-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to stop doing things manually?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Book a free 30-minute call and we&apos;ll map out exactly which workflows make sense
              to automate first for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-700 font-semibold rounded-lg px-8 py-4 hover:bg-blue-50 transition-colors active:scale-95"
            >
              Book My Free Discovery Call
            </Link>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* What we do                                                        */}
        {/* ---------------------------------------------------------------- */}
        <section id="what-we-do" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <SectionLabel>Our service</SectionLabel>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6">
                  We set it up. We keep it running.
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Most AI consultants hand you a setup guide and disappear. We do the opposite.
                  We get your Claude implementation live, then stay on as your retainer — so when
                  something breaks, a new tool needs connecting, or you want to add a new workflow,
                  you have someone to call.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Think of us as the AI ops person you never had — available without the full-time
                  salary.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    phase: '01',
                    title: 'Discovery',
                    body: 'We spend 30–60 minutes learning your business, your tools, and where you\'re losing the most time. We map out a clear implementation plan.',
                  },
                  {
                    phase: '02',
                    title: 'Setup & Integration',
                    body: 'We install Claude, connect your tools (QuickBooks, HubSpot, Slack, etc.), configure your first workflows, and test everything until it runs reliably.',
                  },
                  {
                    phase: '03',
                    title: 'Team Onboarding',
                    body: 'We walk you and your team through the workflows, answer questions, and make sure everyone knows how to get value from Claude on day one.',
                  },
                  {
                    phase: '04',
                    title: 'Ongoing Retainer',
                    body: 'Monthly support to keep things running, add new workflows, troubleshoot issues, and adapt as your business changes. You focus on growth; we handle the AI.',
                  },
                ].map((step) => (
                  <div
                    key={step.phase}
                    className="flex gap-5 bg-slate-900 border border-slate-800 rounded-xl p-6"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600/20 border border-blue-600/40 flex items-center justify-center text-blue-400 font-bold text-sm">
                      {step.phase}
                    </div>
                    <div>
                      <h3 className="text-slate-50 font-semibold mb-1">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Testimonials                                                      */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-24 px-6 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>What clients say</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
                Small businesses seeing real results
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <figure className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-200 text-lg leading-relaxed mb-8">
                  &ldquo;I was skeptical at first — I&apos;d tried ChatGPT and it just felt like
                  a fancier search engine. Stack &amp; Scale came in, connected Claude to our
                  QuickBooks and HubSpot, and within two weeks we had automated our entire
                  Monday morning reporting. I&apos;m getting two hours back every week that I
                  used to spend pulling numbers together.&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div>
                    <p className="text-slate-50 font-semibold">Maria T.</p>
                    <p className="text-slate-400 text-sm">Owner, boutique accounting firm · 8 employees</p>
                  </div>
                </figcaption>
              </figure>

              {/* Testimonial 2 */}
              <figure className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-200 text-lg leading-relaxed mb-8">
                  &ldquo;The retainer model is what sold me. I&apos;ve worked with tech consultants
                  who do the setup and vanish. David&apos;s team is still answering questions three
                  months in, helped us add a new workflow when we brought on two new service lines,
                  and the whole thing has paid for itself probably ten times over in saved labor.
                  If you&apos;re thinking about it, just do it.&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div>
                    <p className="text-slate-50 font-semibold">James R.</p>
                    <p className="text-slate-400 text-sm">Founder, regional HVAC company · 22 employees</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Why Stack & Scale                                                 */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Why us</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6">
              We&apos;re engineers, not salespeople
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Stack &amp; Scale is based in Cambridge, MA and works with small businesses across
              the Greater Boston area — from Cambridge and Somerville to Boston proper and the
              surrounding suburbs. We&apos;re built on a background in hands-on engineering
              leadership for startups and mid-market companies. We&apos;ve built systems, led
              technical teams, and shipped products. That means when we set up Claude for your
              business, we&apos;re thinking about reliability, security, and what happens six
              months from now — not just getting it working for the demo.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {[
                {
                  stat: '< 1 week',
                  label: 'Typical time from kickoff to first live workflow',
                },
                {
                  stat: '10+ hrs',
                  label: 'Average hours saved per month, per client',
                },
                {
                  stat: 'Month-to-month',
                  label: 'Retainer — no long-term contracts required',
                },
              ].map((s) => (
                <div
                  key={s.stat}
                  className="text-center bg-slate-900 border border-slate-800 rounded-xl p-6"
                >
                  <p className="text-3xl font-bold text-blue-400 mb-2">{s.stat}</p>
                  <p className="text-slate-400 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Local service area                                                */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 px-6 bg-slate-900/40" aria-label="Service area">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Local expertise</SectionLabel>
            <h2 className="text-3xl font-bold text-slate-50 mb-6">
              Serving small businesses in Cambridge, Boston &amp; Greater Boston
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We&apos;re based in Cambridge, MA, which means we understand the kinds of businesses
              that make up the Greater Boston ecosystem — independent retailers, professional
              services firms, restaurants, healthcare practices, trades, and tech-adjacent
              startups. When you work with us, you&apos;re not dealing with a national call center.
              You get someone local who can meet in person for kickoffs and onboarding, and who
              is genuinely invested in seeing your business run better.
            </p>
            <div className="flex flex-wrap gap-2" aria-label="Service areas">
              {[
                'Cambridge, MA',
                'Boston, MA',
                'Somerville, MA',
                'Brookline, MA',
                'Newton, MA',
                'Watertown, MA',
                'Arlington, MA',
                'Lexington, MA',
                'Waltham, MA',
                'Medford, MA',
                'Malden, MA',
                'Greater Boston Area',
              ].map((city) => (
                <span
                  key={city}
                  className="text-sm text-slate-300 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* FAQ                                                               */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-24 px-6 bg-slate-900/40">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>Common questions</SectionLabel>
              <h2 className="text-3xl font-bold text-slate-50">FAQ</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Do I need a technical background to use Claude?',
                  a: 'Not at all. That\'s the whole point of working with us. We handle the technical setup — connecting tools, configuring workflows, testing everything. You just learn how to use what we\'ve built, and we make that part simple.',
                },
                {
                  q: 'Will Claude train on my business data?',
                  a: 'No. Anthropic does not train its models on your business data. Your financials, customer records, and internal documents stay yours. This is one of the reasons we recommend Claude specifically for small businesses handling sensitive data.',
                },
                {
                  q: 'Which tools can Claude connect to?',
                  a: 'Claude connects to QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google Workspace (Gmail, Drive, Calendar), Microsoft 365, Slack, and dozens more. If you\'re using a common small business tool, there\'s a good chance Claude can connect to it.',
                },
                {
                  q: 'What does the retainer actually include?',
                  a: 'Monthly support hours for troubleshooting, adding new workflows, adjusting existing ones, and answering questions as they come up. Exact scope depends on your plan, but the goal is simple: you should never feel stuck or unsupported.',
                },
                {
                  q: 'How long does the initial setup take?',
                  a: 'Most clients are running their first workflow within a week of kickoff. Full setup — with multiple workflows and team onboarding — typically takes two to three weeks depending on complexity.',
                },
                {
                  q: 'What does it cost?',
                  a: 'Setup fees and retainer pricing depend on your business size and what you need. We scope everything on the discovery call so there are no surprises. Most clients find the retainer pays for itself within the first month in time savings alone.',
                },
                {
                  q: 'Do you work with businesses in Cambridge and Boston?',
                  a: 'Yes — Cambridge and Boston are our home base. We work with small businesses across Greater Boston, including Somerville, Brookline, Newton, Lexington, and the surrounding area. We\'re available for in-person kickoffs and onboarding sessions, and we handle ongoing support remotely.',
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-slate-50 font-medium select-none list-none">
                    {faq.q}
                    <svg
                      className="w-5 h-5 text-slate-400 shrink-0 ml-4 transition-transform group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Final CTA                                                         */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Get started</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6">
              Let&apos;s put Claude to work in your business
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Book a free 30-minute discovery call. We&apos;ll look at your current workflow,
              identify the highest-value automation opportunities, and give you a clear picture of
              what setup would look like — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary">
                Book a Free Discovery Call
              </CTAButton>
              <CTAButton href="/services" variant="secondary">
                View All Services
              </CTAButton>
            </div>
            <p className="mt-6 text-slate-500 text-sm">
              Prefer email?{' '}
              <a
                href="mailto:dchancogne@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Reach out directly
              </a>
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Footer                                                            */}
        {/* ---------------------------------------------------------------- */}
        <footer className="border-t border-slate-800 py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/StackAndScale-Logo.png"
                alt="Stack and Scale"
                width={32}
                height={32}
                className="w-8 h-8 object-contain opacity-70"
              />
              <span>© {new Date().getFullYear()} Stack &amp; Scale</span>
            </div>
            <nav className="flex flex-wrap gap-6 justify-center">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link>
              <Link href="/experience" className="hover:text-slate-300 transition-colors">Experience</Link>
              <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
            </nav>
            <p className="text-xs text-slate-600 text-center sm:text-right max-w-xs">
              Stack &amp; Scale is an independent consultancy. Not affiliated with Anthropic.
              Claude® is a trademark of Anthropic, PBC.
            </p>
          </div>
        </footer>

      </div>
    </>
  )
}

// ---------------------------------------------------------------------------
// Micro-component
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-400 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}
