import type { Metadata } from "next"
import Link from "next/link"
import { HeroBackground } from "@/components/hero-background"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  CheckCircle2,
  Target,
  Mail,
  BarChart3,
  Users,
  Megaphone,
  Zap,
  LineChart,
  Database,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Sales & Marketing Automation | Drive Revenue, Not Admin | Automaly",
  description:
    "Automate lead scoring, CRM workflows, email outreach, and marketing campaigns to drive revenue growth. Reduce sales admin by 40% and respond to leads 3x faster with Automaly.",
  openGraph: {
    title:
      "Sales & Marketing Automation | Drive Revenue, Not Admin | Automaly",
    description:
      "Automate lead scoring, CRM workflows, email outreach, and marketing campaigns. Reduce sales admin by 40% and respond to leads 3x faster.",
    url: "https://www.automaly.io/services/sales-marketing",
  },
  alternates: {
    canonical: "https://www.automaly.io/services/sales-marketing",
  },
}

/* ── Capabilities ───────────────────────────────────────────────────── */

const capabilities = [
  {
    icon: Target,
    title: "Lead Scoring & Qualification",
    description:
      "AI-powered models that automatically rank and route prospects based on engagement signals, firmographics, and behaviour.",
  },
  {
    icon: Database,
    title: "CRM Automation & Optimisation",
    description:
      "Turn your CRM into a revenue engine with automated data entry, pipeline management, deal progression, and activity logging.",
  },
  {
    icon: Mail,
    title: "Email & Outreach Automation",
    description:
      "Personalised email sequences, follow-up triggers, and multi-channel workflows to nurture leads without manual effort.",
  },
  {
    icon: Megaphone,
    title: "Marketing Campaign Automation",
    description:
      "Automate campaigns across email, social, and paid channels. Includes A/B testing, audience segmentation, and performance reporting.",
  },
  {
    icon: LineChart,
    title: "Revenue Operations & Reporting",
    description:
      "Unified dashboards connecting marketing, sales, and customer success data. Automated reporting on pipeline velocity, conversion rates, and attribution.",
  },
  {
    icon: Users,
    title: "Customer Journey Orchestration",
    description:
      "Map and automate the entire customer lifecycle, with trigger-based workflows responding to real-time behaviour.",
  },
]

/* ── Results ─────────────────────────────────────────────────────────── */

const results = [
  { metric: "40%", label: "reduction in sales admin time" },
  { metric: "3x", label: "faster lead response times" },
  { metric: "25%", label: "increase in marketing-qualified leads" },
  { metric: "60%", label: "improvement in pipeline visibility" },
]

/* ── Who It's For ───────────────────────────────────────────────────── */

const audiences = [
  "Sales teams spending more time on admin than selling.",
  "Marketing teams running campaigns manually across disconnected tools.",
  "Revenue leaders lacking visibility into pipeline performance and attribution.",
  "Growing businesses ready to scale outbound without scaling headcount.",
]

export default function SalesMarketingPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Sales & Marketing Automation",
      description:
        "End-to-end sales and marketing automation services including CRM optimisation, lead scoring, campaign automation, and revenue operations.",
      provider: {
        "@type": "Organization",
        name: "Automaly",
        url: "https://www.automaly.io",
      },
      url: "https://www.automaly.io/services/sales-marketing",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.automaly.io" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.automaly.io/services" },
        { "@type": "ListItem", position: 3, name: "Sales & Marketing Automation", item: "https://www.automaly.io/services/sales-marketing" },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - optimized with Next.js Image priority loading */}
        <HeroBackground
          src="/images/sales-marketing-hero.webp"
          alt="Isometric 3D illustration of sales and marketing automation infrastructure with orange accent lines"
          fallbackColor="#3d2066"
          overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(61, 32, 102, 0.7) 0%, rgba(61, 32, 102, 0.4) 60%, rgba(61, 32, 102, 0.2) 100%)"
        />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/services" className="flex items-center gap-1 transition-colors hover:text-brand-orange">
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>
            <span>/</span>
            <span className="text-white/80">Sales & Marketing Automation</span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Drive Revenue, Not Admin
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="text-brand-orange">Sales & Marketing</span>{" "}
            <span className="text-white">Automation</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
            Your sales team should be selling, not stuck in data entry. Your
            marketing team should be creating impact, not managing
            spreadsheets. Automaly automates the repetitive tasks that drain
            productivity, so your revenue teams can focus on what drives
            growth.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
<CalendlyButton size="lg" variant="orange" calendlyType="assessment" className="gap-2">
                Book Your Assessment
                <ArrowRight className="h-4 w-4" />
              </CalendlyButton>
            <Button size="lg" variant="outline" asChild className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* ── The Challenge ─────────────────────────────────────────────── */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Why Sales & Marketing Teams{" "}
              <span className="text-brand-purple">Need Automation</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Sales teams spend just 33% of their time actually selling. Marketing
              teams juggle disconnected tools and manual processes. The result is
              wasted effort, missed opportunities, and limited visibility.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative rounded-2xl border border-red-200/60 bg-white p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">Common Problems</h3>
              <ul className="space-y-3">
                {[
                  "Leads slipping through the cracks due to slow follow-up",
                  "Manual data entry consuming hours of selling time each week",
                  "Disconnected marketing tools creating inconsistent messaging",
                  "No clear view of attribution or pipeline performance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl border border-brand-purple/15 bg-white p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">With Automation</h3>
              <ul className="space-y-3">
                {[
                  "Instant lead routing and automated follow-up sequences",
                  "CRM data auto-populated from emails, calls, and forms",
                  "Unified campaigns across email, social, and paid channels",
                  "Real-time dashboards showing pipeline health and ROI",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/60">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-foreground/70">Sound like your sales team? We can automate it.</p>
<CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
                  Book Your Assessment <ArrowRight className="h-4 w-4" />
                </CalendlyButton>
        </div>
      </section>

      {/* ── What We Deliver ──────────────────────────────────────────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              What We{" "}
              <span className="text-brand-purple">Deliver</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              End-to-end automation for your sales and marketing operations,
              designed to increase efficiency and drive revenue.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="group flex flex-col rounded-2xl border border-brand-purple/20 bg-brand-lavender p-7 transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outlinePurple" className="gap-2">
              <Link href="/services/ai-readiness-assessment">
                See How This Applies to You <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Typical{" "}
              <span className="text-brand-purple">Results</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-brand-purple/20 bg-white p-6 text-center">
                <span className="text-3xl font-bold text-brand-purple">{r.metric}</span>
                <p className="mt-2 text-sm text-foreground/60">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-foreground/70">Want results like these for your pipeline?</p>
            <CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
              Book Your Assessment <ArrowRight className="h-4 w-4" />
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────���───��───────�����───���───────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Who Is This{" "}
              <span className="text-brand-purple">For?</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-purple/20 bg-brand-lavender px-5 py-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                <span className="text-sm font-medium leading-relaxed text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="brand-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Ready to Accelerate Revenue Growth?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
            Stop losing deals to manual processes. Let{"'"}s build the
            automation engine that lets your team focus on selling and creating
            impact.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
<CalendlyButton size="lg" variant="orange" calendlyType="assessment" className="gap-2">
                Book Your Assessment
                <ArrowRight className="h-4 w-4" />
              </CalendlyButton>
            <Button size="lg" variant="outline" asChild className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
