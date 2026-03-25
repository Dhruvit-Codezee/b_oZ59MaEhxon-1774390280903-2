import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { clientQuotes } from "@/lib/testimonials"
import { SolutionCardGrid } from "@/components/solution-card"
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  ShieldCheck,
  FileText,
  Zap,
  BarChart3,
  DollarSign,
  Gauge,
  ClipboardList,
  Quote,
  Landmark,
  Users,
  Timer,
  TrendingUp,
  Scale,
  Eye,
  FileSearch,
  Calculator,
  MessageSquare,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for UK Building Societies | Automaly",
  description:
    "Strengthen compliance, improve operational efficiency and enhance member experience. AI & Automation for UK Building Societies.",
  openGraph: {
    title: "AI & Automation for UK Building Societies | Automaly",
    description:
      "Strengthen compliance, improve operational efficiency and enhance member experience. AI & Automation for UK Building Societies.",
    url: "https://www.automaly.io/use-cases/financial-services",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/financial-services",
  },
}

/* Pain points data */

const painPoints = [
  { icon: Scale, text: "FCA and PRA regulatory requirements increasing in scope" },
  { icon: ShieldCheck, text: "Consumer Duty obligations requiring demonstrable oversight" },
  { icon: FileSearch, text: "AML and KYC processes consuming significant manual effort" },
  { icon: Clock, text: "Mortgage application processing delays from fragmented systems" },
  { icon: Gauge, text: "Legacy system constraints limiting operational agility" },
  { icon: BarChart3, text: "Cost-to-income ratio under continuous pressure" },
]

/* Automation areas data */

const automationAreas = [
  {
    number: "01",
    category: "Process" as const,
    icon: FileText,
    title: "Mortgage & Loan Processing Automation",
    problem:
      "Fragmented mortgage processing creates delays and data inconsistency.",
    solutions: [
      "Trigger case workflows on application receipt",
      "Auto-validate documentation vs requirements",
      "Route cases by complexity to teams",
      "Flag missing info before underwriting",
      "Provide real-time tracking for members",
      "Sync underwriting data across core systems",
    ],
    roi: "20-30% faster processing improves member experience and protects service-level performance.",
  },
  {
    number: "02",
    category: "Compliance" as const,
    icon: ShieldCheck,
    title: "AML, KYC & Regulatory Compliance Automation",
    problem:
      "Manual verification and audit prep consume disproportionate resource.",
    solutions: [
      "Automated identity verification workflows",
      "Continuous AML monitoring",
      "Real-time sanctions list screening",
      "Audit-ready documentation storage",
      "Auto-generate regulatory reporting packs",
    ],
    roi: "Significantly less prep time lowers regulatory penalty and remediation risk.",
  },
  {
    number: "03",
    category: "Compliance" as const,
    icon: Eye,
    title: "Consumer Duty Monitoring & Reporting",
    problem:
      "Manual Consumer Duty evidence gathering is fragmented and board-unfriendly.",
    solutions: [
      "Monitor product suitability metrics",
      "Track complaint handling vs targets",
      "Auto-flag vulnerable customer indicators",
      "Generate board-level oversight dashboards",
      "Maintain structured evidence",
    ],
    roi: "Better monitoring reduces regulatory exposure and strengthens governance during reviews.",
  },
  {
    number: "04",
    category: "Data" as const,
    icon: Calculator,
    title: "Operational Back-Office Automation",
    problem:
      "Fragmented back-office slows cycles and diverts resource from members.",
    solutions: [
      "Automated reconciliation workflows",
      "Inter-system data synchronisation",
      "Structured approval routing",
      "Exception-based escalation",
      "Performance and capacity dashboards",
    ],
    roi: "30-50% less manual work improves cost-to-income ratio and efficiency.",
  },
  {
    number: "05",
    category: "Coordination" as const,
    icon: MessageSquare,
    title: "Member Communication & Case Tracking",
    problem:
      "Manual communication drives up call volume and lowers satisfaction.",
    solutions: [
      "Auto-updates at key milestones",
      "Triggered notifications for progression",
      "Escalation workflows for stalls",
      "Personalised communication sequences",
      "Member self-service dashboards",
    ],
    roi: "Better visibility cuts inbound calls and boosts satisfaction without adding staff.",
  },
]

/* Example workflows */

const exampleWorkflows = [
  "Mortgage case lifecycle orchestration",
  "Automated AML/KYC compliance tracking",
  "Consumer Duty performance dashboards",
  "Real-time operational reporting integration",
  "Automated regulatory reporting packs",
  "Member communication workflows",
  "Loan origination and decisioning pipeline automation",
  "Fraud detection alert triage and escalation engines",
]

/* Impact metrics */

const impactMetrics = [
  { stat: "Real-Time", label: "Application tracking for members", icon: FileText },
  { stat: "Continuous", label: "AML and sanctions screening", icon: ShieldCheck },
  { stat: "Board-Ready", label: "Consumer Duty evidence dashboards", icon: Eye },
  { stat: "Weeks", label: "Typical deployment timeline", icon: Timer },
  { stat: "Single", label: "Source of truth across core systems", icon: BarChart3 },
  { stat: "Zero", label: "Manual data re-keying between platforms", icon: Calculator },
]

/* JSON-LD */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for UK Building Societies",
    description:
      "Strengthen compliance, improve operational efficiency and enhance member experience. AI & Automation for UK Building Societies.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/financial-services",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.automaly.io" },
      { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://www.automaly.io/use-cases" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Financial Services",
        item: "https://www.automaly.io/use-cases/financial-services",
      },
    ],
  },
]

export default function FinancialServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - positioned to keep 3D cubes visible on right */}
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/ai-automation-for-financial-services.webp')",
            backgroundSize: 'contain',
            backgroundPosition: 'center right',
            backgroundColor: '#1a0a3e',
          }}
        />
        {/* Dark gradient overlay - left-to-right for text contrast */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to right, rgba(26, 10, 62, 0.95) 0%, rgba(26, 10, 62, 0.85) 30%, rgba(26, 10, 62, 0.5) 55%, rgba(26, 10, 62, 0.2) 75%, transparent 100%)',
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
              <Link
                href="/use-cases"
                className="flex items-center gap-1 transition-colors hover:text-brand-orange"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Use Cases
              </Link>
              <span>/</span>
              <span className="text-white/80">Financial Services</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Landmark className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                By Sector
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">UK Building Societies</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Strengthen compliance, improve operational efficiency and enhance member experience.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              UK Building Societies operate within a highly regulated,
              member-focused environment. Balancing regulatory obligations,
              operational efficiency and customer service is increasingly complex.
              Automation and AI enable building societies to modernise internal
              processes, reduce operational cost and strengthen governance - without compromising prudential standards or member trust.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
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
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              The Problem
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              The Operational &{" "}
              <span className="text-brand-purple">Regulatory Landscape</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Building societies face increasing pressure across regulatory
              requirements, mortgage processing, compliance obligations and
              legacy system constraints. Manual underwriting coordination,
              spreadsheet-based compliance tracking and fragmented systems
              introduce risk as transaction volumes grow.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-start gap-3 rounded-xl border border-brand-purple/20 bg-white px-5 py-4"
              >
                <point.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                <span className="text-sm font-medium text-foreground/80">
                  {point.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-brand-purple/20 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-purple mb-3">
              The Consequence
            </p>
            <p className="text-base leading-relaxed text-foreground/70">
              Without structured automation, processing times extend,
              operational cost rises, compliance preparation consumes
              disproportionate resources, data accuracy becomes vulnerable and
              member experience declines.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              Manual processes introduce risk as scrutiny increases.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-section-light pt-20 pb-10 lg:pt-28 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              The Solution
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Where Automation Strengthens{" "}
              <span className="text-brand-purple">Building Society Operations</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Automation within building societies must be secure, auditable and
              governance-aligned. It enhances control while improving efficiency.
            </p>
          </div>

          <SolutionCardGrid areas={automationAreas.map(({ icon, ...rest }) => rest)} />

          {/* Example Workflows (compact) */}
          <div className="mt-8 border-t border-brand-purple/20 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange mb-3">
              Example Workflows We Build
            </p>
            <div className="flex flex-wrap gap-2">
              {exampleWorkflows.map((workflow) => (
                <span key={workflow} className="inline-flex items-center gap-1.5 rounded-full border border-brand-purple/20 bg-brand-lavender px-3 py-1.5 text-xs text-foreground/70">
                  <Zap className="h-3 w-3 shrink-0 text-brand-purple" />
                  {workflow}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Impact */}
      <section className="bg-section-light pt-10 pb-20 lg:pt-12 lg:pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              The Results
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              The Commercial & Governance Impact for{" "}
              <span className="text-brand-purple">Building Societies</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              When automation removes friction from your member services, operational capacity compounds across every touchpoint.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center rounded-2xl border border-brand-purple/20 bg-brand-lavender p-6 text-center"
              >
                <metric.icon className="mb-3 h-6 w-6 text-brand-purple" />
                <span className="text-2xl font-bold text-brand-purple">
                  {metric.stat}
                </span>
                <span className="mt-1 text-sm text-foreground/60">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-base leading-relaxed text-foreground/70">
            These outcomes represent the compound effect of removing friction at every stage - from application to member communication.
          </p>

          {/* Primary CTA */}
          <div className="mt-10 text-center">
            <CalendlyButton
              size="lg"
              variant="orange"
              calendlyType="assessment"
              className="gap-2"
            >
              Book Your Assessment
              <ArrowRight className="h-4 w-4" />
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Our Approach
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Prudential Standards First.{" "}
              <span className="text-brand-purple">Automation Second</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              In regulated financial services environments, automation must be
              auditable, secure, role-based, data-protected and compatible with
              legacy infrastructure.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Prioritise",
                desc: "We assess regulatory reporting burdens, case handling bottlenecks, compliance risk exposure, system fragmentation and cost-to-income pressure areas to identify the highest-impact opportunities.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build and deploy financial services automations in rapid cycles. Most workflows go live within one to two weeks, with monitoring for regulatory compliance and processing accuracy.",
              },
              {
                step: "03",
                title: "Monitor & Scale",
                desc: "Every automation is tracked for governance impact and efficiency gains. We optimise continuously and add workflows as regulatory requirements evolve.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-brand-purple/20 bg-white p-6 lg:p-8"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple text-white text-sm font-bold">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Quotes + CTA */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
              What <span className="text-brand-purple">Our Clients Say</span>
            </h2>
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

          {/* Integrated CTA */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="brand-gradient rounded-2xl p-10 text-center lg:p-12">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
                Build a Resilient Operating Model for the Future
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Ready to modernise operational and compliance workflows?
              </p>
              <CalendlyButton
                size="lg"
                variant="orange"
                calendlyType="assessment"
                className="mt-8 gap-2"
              >
                Book Your Assessment
                <ArrowRight className="h-4 w-4" />
              </CalendlyButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
