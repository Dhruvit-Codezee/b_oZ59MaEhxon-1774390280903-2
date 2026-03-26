import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { HeroBackground } from "@/components/hero-background"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { clientQuotes } from "@/lib/testimonials"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  ArrowRight,
  ClipboardCheck,
  Layers,
  RefreshCw,
  Sparkles,
  Cog,
  BarChart3,
  Users,
  Megaphone,
  Briefcase,
  CheckCircle2,
  Quote,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing | AI & Automation Services | Automaly",
  description:
    "Explore Automaly's pricing models for AI and automation services. From AI Readiness Assessments to project-based delivery and retainers, every engagement is designed to be ROI-positive.",
  openGraph: {
    title: "Pricing | AI & Automation Services | Automaly",
    description:
      "ROI-positive AI and automation services. Assessment, project, and retainer pricing models designed for growing businesses.",
    url: "https://www.automaly.io/pricing",
  },
  alternates: {
    canonical: "https://www.automaly.io/pricing",
  },
}

/* ── Engagement Models ──────────────────────────────────────────────── */

const engagementModels = [
  {
    icon: ClipboardCheck,
    name: "AI Readiness Assessment",
    tagline: "Start Here",
    description:
      "The starting point for every Automaly engagement. We review how your processes, systems, and data operate today and identify where AI & automation will deliver the most ROI, including practical implementation considerations.",
    features: [
      "Process, systems, and data review",
      "Prioritised opportunity identification",
      "Feasibility and impact analysis",
      "Clear next steps and recommendations",
      "ROI-focused action plan",
    ],
    cta: "Book Your Assessment",
    href: "/services/ai-readiness-assessment",
    highlighted: true,
    proofBadge: "Avg. 12 opportunities identified",
  },
  {
    icon: Layers,
    name: "Project-Based Delivery",
    tagline: "Defined Outcomes",
    description:
      "Project pricing is scoped and agreed upfront for a defined outcome. Investment is linked to scope, complexity, integration requirements, and delivery milestones. This provides clarity on deliverables, timelines, and payment stages.",
    features: [
      "Scoped and agreed upfront",
      "Clear deliverables and timelines",
      "Milestone-based payment stages",
      "Defined outcome and success measures",
      "Fixed investment for defined scope",
    ],
    cta: "Discuss a Project",
    href: "/contact",
    highlighted: false,
    proofBadge: "ROI within 90 days on average",
  },
  {
    icon: RefreshCw,
    name: "Retainer Agreement",
    tagline: "Continuous Improvement",
    description:
      "A retainer provides ongoing delivery capacity to implement, iterate, and optimise AI & automation over time. Best suited to teams who want continuous improvement, regular releases, and ongoing support as processes evolve.",
    features: [
      "Ongoing delivery capacity",
      "Continuous improvement cycles",
      "Regular releases and iteration",
      "Evolving support as requirements change",
      "Monthly billing structure",
    ],
    cta: "Explore Retainers",
    href: "/contact",
    highlighted: false,
    proofBadge: "Ongoing ROI improvement quarter-on-quarter",
  },
]

/* ── Service Capabilities ───────────────────────────────────────────── */

const capabilityIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Sparkles,
  Cog,
  BarChart3,
  Users,
  Megaphone,
  Briefcase,
}

const serviceCapabilities = [
  {
    title: "Artificial Intelligence (AI)",
    tagline: "Supercharged Growth",
    icon: "Sparkles",
    items: [
      "Sales Lead Scoring",
      "Customer Segmentation",
      "Demand Forecasting",
      "Churn Prediction",
      "Personalised Content",
      "Social media content support",
      "AI customer support augmentation",
      "AI journey mapping",
      "AI sales assistant support",
      "Market research support",
      "Competitor analysis support",
    ],
    footer: "Cutting Edge",
  },
  {
    title: "Business Automation",
    tagline: "Productivity Gains",
    icon: "Cog",
    items: [
      "Automated Job Tracking",
      "CRM Automation",
      "Software Integration",
      "Email management workflows",
      "Customer onboarding automation",
      "Automated upselling workflows",
      "Social media automation",
      "LinkedIn outreach workflows",
      "Automated reporting",
      "Deal boards and pipeline workflows",
      "Employee onboarding automation",
    ],
    footer: "Unlimited Scope",
  },
  {
    title: "RevOps",
    tagline: "Grow Revenue",
    icon: "BarChart3",
    items: [
      "Lead Gen Systems",
      "Sales Strategy",
      "Best Practice Guides",
      "CRM Integration",
      "Staff Training Plan",
      "Sales Optimisation",
      "Journey Mapping",
      "Tech Recommendation",
      "Workflow Creation",
      "Funnel Development",
      "Operational Support",
    ],
    footer: "Drive Growth",
  },
  {
    title: "Sales Teams",
    tagline: "Ready to Scale?",
    icon: "Users",
    items: [
      "CRM Automation",
      "Predictive selling support",
      "Sales Strategy",
      "Process Mapping",
      "Lead Scoring",
      "Lead Distribution",
      "Social selling workflows",
      "Pipeline Alerts",
      "Technology Integration",
      "Contract Automation",
    ],
    footer: "Grow Revenue",
  },
  {
    title: "Marketing Teams",
    tagline: "Need Content?",
    icon: "Megaphone",
    items: [
      "Content Personalisation",
      "Automated Socials",
      "Audience Insights",
      "Campaign Optimisation",
      "Lead nurturing workflows",
      "Analytics Automation",
      "Automated Emails",
      "Data enhancement",
      "SEO intelligence support",
      "Technology integration",
    ],
    footer: "Boost Productivity",
  },
  {
    title: "Operations Teams",
    tagline: "Streamline Processes",
    icon: "Briefcase",
    items: [
      "Process Optimisation",
      "Process Mapping",
      "Automated Workflows",
      "Data analysis support",
      "Operational Strategy",
      "Risk analysis support",
      "Resource management workflows",
      "Technology adoption support",
      "AI support",
      "Automated SOP workflows",
    ],
    footer: "Lower Costs",
  },
]

/* ── FAQ Data ───────────────────────────────────────────────────────── */

const faqs = [
  {
    q: "What is an AI Readiness Assessment?",
    a: "The AI Readiness Assessment is the starting point for Automaly engagements. We review how your processes, systems, and data operate today and identify where AI & automation will deliver the most ROI, including practical implementation considerations.",
  },
  {
    q: "Can we directly implement AI and automation solutions?",
    a: "In most cases, we recommend starting with the AI Readiness Assessment. It prevents wasted effort by confirming priorities, feasibility, and expected impact before implementation begins. If you already have a clear scope and supporting documentation, we can discuss moving straight into delivery.",
  },
  {
    q: "What happens after the AI Readiness Assessment?",
    a: "You receive a prioritised set of opportunities and recommended next steps. If you decide to proceed, we align on the scope, delivery approach (project or retainer), and success measures - with a clear focus on ROI and reliability.",
  },
  {
    q: "How is the ROI guarantee calculated?",
    a: "ROI is assessed by comparing the cost of delivery against measurable improvements such as time saved, reduced rework, improved throughput, and (where applicable) revenue impact. We prioritise opportunities where ROI is realistic, measurable, and achievable.",
  },
  {
    q: "What does a retainer agreement include?",
    a: "A retainer provides ongoing delivery capacity to implement, iterate, and optimise AI & automation over time. It's best suited to teams who want continuous improvement, regular releases, and ongoing support as processes and requirements evolve.",
  },
  {
    q: "How is project-based pricing structured?",
    a: "Project pricing is scoped and agreed upfront for a defined outcome. Investment is linked to scope, complexity, integration requirements, and delivery milestones. This provides clarity on deliverables, timelines, and payment stages.",
  },
  {
    q: "Is there a minimum term for retainers?",
    a: "Where retainers are used, a minimum term may apply to ensure adequate time for assessment, implementation, and measurable outcomes. If a minimum applies to your plan, it will be confirmed during pricing discussions.",
  },
  {
    q: "Are specific technologies required to begin?",
    a: "Not necessarily. We work with your current environment and recommend what's needed based on your goals. Where additional tools or platforms are beneficial, we'll explain why and keep decisions aligned with practicality, cost, and long-term feasibility.",
  },
  {
    q: "How do you measure success?",
    a: "Success is measured using agreed outcomes such as time saved, reduced operational overhead, improved data quality, cycle-time reduction, increased throughput, and ROI. We align metrics to the areas your business values most.",
  },
  {
    q: "What's the payment structure for your services?",
    a: "Payment depends on whether you choose a project or retainer model. Retainers are typically billed monthly. Projects are typically paid in stages aligned to delivery milestones. All pricing details are confirmed upfront before work begins.",
  },
]

/* ── Page Component ─────────────────────────────────────────────────── */

export default function PricingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
          {/* Background Image - optimized with Next.js Image priority loading */}
          <HeroBackground
            src="/images/pricing-hero.webp"
            alt="Isometric 3D illustration of stacked pricing layers"
            fallbackColor="#1a0a4e"
            overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(26, 10, 78, 0.7) 0%, rgba(26, 10, 78, 0.4) 60%, rgba(26, 10, 78, 0.2) 100%)"
            objectFit="cover"
            positionClassName="object-center"
          />
          <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
            <div className="max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Pricing
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              <span className="text-brand-orange">ROI-Positive</span>{" "}
              <span className="text-white">
                AI & Automation Services
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
              All our services are designed to be ROI-positive, prioritised
              based on impact and feasibility. Every engagement begins with
              clarity to ensure the right path forward.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CalendlyButton
                size="lg"
                variant="orange"
                calendlyType="assessment"
                className="gap-2"
              >
                Book Your Assessment
                <ArrowRight className="h-4 w-4" />
              </CalendlyButton>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200"
              >
                <Link href="/#how-we-work">See How It Works</Link>
              </Button>
            </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="bg-section-lavender pt-12 pb-20 lg:pt-16 lg:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                How We Work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Choose the right{" "}
                <span className="text-brand-purple">engagement model</span>
              </h2>
              <p className="mt-4 text-base text-foreground/60 text-pretty">
                Whether you need a one-off assessment, a scoped project, or
                ongoing delivery capacity, pricing is always confirmed upfront
                and linked to measurable outcomes.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {engagementModels.map((model) => {
                const Icon = model.icon
                return (
                  <div
                    key={model.name}
                    className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                      model.highlighted
                        ? "border-brand-purple/30 bg-white shadow-lg shadow-brand-purple/5 ring-2 ring-brand-purple/20"
                        : "border-brand-purple/20 bg-white hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5"
                    }`}
                  >
                    {model.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-4 py-1 text-xs font-semibold text-white">
                        Recommended
                      </div>
                    )}
                    <div className="mb-5 flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                          model.highlighted
                            ? "bg-brand-orange text-white"
                            : "bg-brand-purple/10 text-brand-purple"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                          {model.tagline}
                        </p>
                        <h3 className="text-lg font-bold text-foreground">
                          {model.name}
                        </h3>
                      </div>
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-foreground/60">
                      {model.description}
                    </p>
                    <ul className="mb-8 flex-1 space-y-2.5">
                      {model.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                          <span className="text-sm text-foreground/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {model.proofBadge && (
                      <div className="mb-6 border-t border-brand-purple/20 pt-4">
                        <p className="text-xs font-medium text-brand-orange">{model.proofBadge}</p>
                      </div>
                    )}
{/* Use CalendlyButton for booking CTAs, regular Button for other links */}
                    {model.cta === "Book Your Assessment" || model.cta === "Discuss a Project" || model.cta === "Explore Retainers" ? (
                      <CalendlyButton
                        variant={model.highlighted ? "orange" : "default"}
                        calendlyType={model.cta === "Explore Retainers" ? "retainer" : model.cta === "Discuss a Project" ? "project" : "assessment"}
                        className="w-full gap-2"
                      >
                        {model.cta}
                        <ArrowRight className="h-4 w-4" />
                      </CalendlyButton>
                    ) : (
                      <Button
                        asChild
                        variant={model.highlighted ? "orange" : "default"}
                        className="w-full gap-2"
                      >
                        <Link href={model.href}>
                          {model.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Client Quotes */}
        <section className="bg-section-lavender pt-6 pb-16 lg:pt-8 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                What Clients Say
              </h2>
              <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-6">
                {[
                  { value: "3", label: "Industries" },
                  { value: "260+", label: "Hours Saved" },
                  { value: "£100K+", label: "Revenue Unlocked" },
                ].map((s) => (
                  <div key={s.label} className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-brand-purple">{s.value}</span>
                    <span className="text-xs uppercase tracking-wider text-foreground/70">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {clientQuotes.map((q) => (
                <div
                  key={q.name}
                  className="relative flex flex-col rounded-2xl border border-brand-purple/20 bg-white p-7"
                >
                  <Quote className="absolute right-6 top-6 h-7 w-7 text-brand-purple/10" />
                  <p className="flex-1 text-sm leading-relaxed text-foreground/70 italic">
                    {`"${q.quote}"`}
                  </p>
                  <div className="mt-6 border-t border-brand-purple/20 pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {q.name}
                    </p>
                    <p className="text-xs text-foreground/70">
                      {q.role} | {q.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 bg-section-lavender pt-6 pb-16 lg:pt-8 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-brand-purple/20 bg-white"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-foreground">
                    {faq.q}
                    <span className="ml-3 shrink-0 text-brand-purple transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-4 text-sm leading-relaxed text-foreground/60">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
