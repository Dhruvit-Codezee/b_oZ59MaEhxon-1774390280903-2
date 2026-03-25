import type { Metadata } from "next"
import Link from "next/link"
import { HeroBackground } from "@/components/hero-background"
import { getAllServices } from "@/lib/services"
import { clientQuotes } from "@/lib/testimonials"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  ArrowRight,
  ClipboardCheck,
  TrendingUp,
  Bot,
  Settings,
  Database,
  Shield,
  Sparkles,
  Cog,
  BarChart3,
  Users,
  Megaphone,
  Briefcase,
  Quote,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation Services | Automaly",
  description:
    "Scale revenue without scaling complexity. From AI readiness assessments to secure AI implementation, we help growing businesses automate operations and drive measurable ROI.",
  openGraph: {
    title: "AI & Automation Services | Automaly",
    description:
      "Scale revenue without scaling complexity. From AI readiness assessments to secure AI implementation, we help growing businesses automate operations.",
    url: "https://www.automaly.io/services",
  },
  alternates: {
    canonical: "https://www.automaly.io/services",
  },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardCheck,
  TrendingUp,
  Bot,
  Settings,
  Database,
  Shield,
}

/* ── Detailed Capabilities Data ──────────────────────────────────────── */

const capabilityIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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



export default function ServicesPage() {
  const services = getAllServices()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - optimized with Next.js Image priority loading */}
        <HeroBackground
          src="/images/services-hero.webp"
          alt="Isometric 3D technology illustration with servers and circuit patterns"
          fallbackColor="#4a1fd1"
          overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(74, 31, 209, 0.65) 0%, rgba(74, 31, 209, 0.35) 60%, rgba(74, 31, 209, 0.15) 100%)"
        />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Our Services
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="text-brand-orange">AI & Automation</span>{" "}
            <span className="text-white">Solutions for Scalable Growth</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg text-pretty">
            Unlock the full potential of AI & automation with tailored solutions.
            Understand your current processes, systems, and data to identify where
            AI can drive the most impactful change.
          </p>
          {/* Proof stats */}
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-6">
            {[
              { value: "260+", label: "Hours Saved / Yr" },
              { value: "3x", label: "Pipeline Velocity" },
              { value: "ROI+", label: "Guaranteed Outcomes" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold text-brand-orange">{s.value}</span>
                <span className="text-xs uppercase tracking-wider text-white/60">{s.label}</span>
              </div>
            ))}
          </div>

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
              <Link href="/#how-we-work">
                See How It Works
              </Link>
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our AI & Automation{" "}
              <span className="text-brand-purple">Capabilities</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              Every engagement begins with the AI Readiness Assessment to ensure
              effort is focused on high-impact opportunities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.frontmatter.icon] || ClipboardCheck
              const isAssessment = service.frontmatter.slug === "ai-readiness-assessment"
              return (
                <Link
                  key={service.frontmatter.slug}
                  href={`/services/${service.frontmatter.slug}`}
                  className={`group relative flex flex-col rounded-2xl border p-8 transition-all hover:shadow-lg ${
                    isAssessment
                      ? "border-brand-orange/30 bg-brand-orange/5 shadow-md shadow-brand-orange/10 ring-2 ring-brand-orange/20 hover:border-brand-orange/50 hover:shadow-brand-orange/20 md:col-span-2 lg:col-span-1 lg:row-span-1"
                      : "border-brand-purple/20 bg-white hover:border-brand-purple/30 hover:shadow-brand-purple/5"
                  }`}
                >
                  {isAssessment && (
                    <span className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                      Start Here
                    </span>
                  )}
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                    isAssessment
                      ? "bg-brand-orange/15 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                      : "bg-brand-purple/10 text-brand-purple group-hover:bg-brand-orange group-hover:text-white"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground text-balance">
                    {service.frontmatter.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground/60">
                    {service.frontmatter.description}
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-2xl font-bold ${isAssessment ? "text-brand-orange" : "text-brand-purple"}`}>
                        {service.frontmatter.stat}
                      </span>
                      <span className="text-xs text-foreground/70">
                        {service.frontmatter.statLabel}
                      </span>
                    </div>
                    <div className="mt-3 flex justify-center">
                      <span className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all group-hover:bg-brand-orange group-hover:text-white ${
                        isAssessment ? "bg-brand-orange/15 text-brand-orange" : "bg-brand-purple/10 text-brand-purple"
                      }`}>
                        {isAssessment ? "Book Assessment" : "Learn more"}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client Quotes */}
      <section className="bg-section-light py-16 lg:py-20">
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
                className="relative flex flex-col rounded-2xl border border-brand-purple/20 bg-brand-lavender p-7"
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

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-foreground/70">See the same results in your business.</p>
<CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
                  Book Your Assessment <ArrowRight className="h-4 w-4" />
                </CalendlyButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {[
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
            ].map((faq) => (
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

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-foreground/70">Still have questions? We are happy to chat.</p>
            <Button asChild className="gap-2 bg-brand-purple text-white hover:bg-brand-purple/90">
              <Link href="/contact">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="brand-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Start with Clarity
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
            AI and automation deliver the greatest value when applied in the
            right places. The AI Readiness Assessment provides clarity,
            prioritisation, and a clear path to implementation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
<CalendlyButton
            size="lg"
            variant="orange"
            calendlyType="assessment"
            className="gap-2"
          >
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
