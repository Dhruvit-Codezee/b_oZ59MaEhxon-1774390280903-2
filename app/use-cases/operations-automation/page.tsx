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
  AlertTriangle,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Zap,
  BarChart3,
  DollarSign,
  Gauge,
  ClipboardList,
  Quote,
  Settings,
  RefreshCw,
  Layers,
  Package,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for Operations | Automaly",
  description:
    "Automate core workflows, eliminate manual bottlenecks and integrate disconnected systems to increase throughput without increasing operational cost.",
  openGraph: {
    title: "AI & Automation for Operations | Automaly",
    description:
      "Automate core workflows, eliminate manual bottlenecks and integrate disconnected systems to increase throughput without increasing operational cost.",
    url: "https://www.automaly.io/use-cases/operations-automation",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/operations-automation",
  },
}

/* Pain points data */

const painPoints = [
  { icon: FileText, text: "Manual task tracking across spreadsheets" },
  { icon: ClipboardList, text: "Email-based approvals creating delays" },
  { icon: RefreshCw, text: "Data re-entry between disconnected systems" },
  { icon: Clock, text: "Delayed fulfilment due to operational bottlenecks" },
  { icon: AlertTriangle, text: "Poor visibility across departments" },
  { icon: ShieldCheck, text: "Inconsistent service delivery standards" },
]

/* Automation areas data */

const automationAreas = [
  {
    number: "01",
    category: "Coordination" as const,
    icon: Layers,
    title: "Workflow Orchestration & Task Automation",
    problem:
      "Manual handoffs create delays - coordination takes longer than the work itself.",
    solutions: [
      "Route tasks automatically based on triggers",
      "Assign work by role, geography or capacity",
      "Trigger approvals by business rules",
      "Create escalation workflows for stalls",
      "Track SLA compliance automatically",
    ],
    roi: "20-40% faster delivery cycles improve retention and revenue velocity without adding headcount.",
  },
  {
    number: "02",
    category: "Data" as const,
    icon: RefreshCw,
    title: "System Integration & Data Synchronisation",
    problem:
      "Disconnected tools force teams to re-key data, introducing costly errors.",
    solutions: [
      "Real-time sync across CRM, ERP and operations",
      "Eliminate duplicate data entry",
      "Auto-update status across systems",
      "Centralised operational dashboards",
    ],
    roi: "Reclaim hundreds of hours annually in mid-sized orgs, reduce data errors and correction costs.",
  },
  {
    number: "03",
    category: "Process" as const,
    icon: Settings,
    title: "Order, Project & Service Delivery Automation",
    problem:
      "Manual tracking via spreadsheets stretches timelines and increases rework.",
    solutions: [
      "Trigger fulfilment workflows upon sale",
      "Generate project templates automatically",
      "Assign delivery teams dynamically",
      "Notify stakeholders at milestones",
      "Track progress in real time",
    ],
    roi: "10-20% less rework protects margin and improves customer experience consistency.",
  },
  {
    number: "04",
    category: "Process" as const,
    icon: Package,
    title: "Inventory & Asset Tracking Automation",
    problem:
      "Manual inventory increases shrinkage - teams over-order and lose assets.",
    solutions: [
      "Real-time stock updates",
      "Automated reorder triggers",
      "Asset allocation tracking",
      "Exception alerts for discrepancies",
    ],
    roi: "Reduced over-ordering and better accuracy unlock significant working capital.",
  },
  {
    number: "05",
    category: "Analytics" as const,
    icon: BarChart3,
    title: "Operational Reporting & Performance Monitoring",
    problem:
      "Reactive reporting means leadership discovers problems too late to intervene.",
    solutions: [
      "Generate real-time operational KPIs",
      "Track throughput and capacity",
      "Identify bottlenecks automatically",
      "Flag performance deviations",
      "Provide executive dashboards",
    ],
    roi: "Earlier intervention prevents major service failures and protects substantial revenue.",
  },
]

/* Example workflows */

const exampleWorkflows = [
  "End-to-end order-to-fulfilment automation",
  "Automated task routing and SLA tracking",
  "Cross-platform system integrations",
  "Inventory and asset tracking dashboards",
  "Escalation workflows based on operational rules",
  "Project delivery automation templates",
  "Vendor onboarding and procurement approval pipelines",
  "Automated quality assurance and exception reporting",
]

/* Impact metrics */

const impactMetrics = [
  { stat: "Hundreds", label: "Coordination hours reclaimed annually", icon: Clock },
  { stat: "Real-Time", label: "Operational dashboards and SLA alerts", icon: BarChart3 },
  { stat: "Zero", label: "Manual handoffs between systems", icon: RefreshCw },
  { stat: "Weeks", label: "Typical deployment timeline", icon: Gauge },
  { stat: "Single", label: "Source of truth across all platforms", icon: Layers },
  { stat: "Scalable", label: "Throughput without headcount growth", icon: TrendingUp },
]

/* JSON-LD */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for Operations",
    description:
      "Automate core workflows, eliminate manual bottlenecks and integrate disconnected systems to increase throughput without increasing operational cost.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/operations-automation",
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
        name: "AI & Automation for Operations",
        item: "https://www.automaly.io/use-cases/operations-automation",
      },
    ],
  },
]

export default function OperationsAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - positioned to keep 3D pyramid visible on right */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right-bottom sm:bg-right md:bg-[center_right_-5%] lg:bg-[center_right_10%] xl:bg-center"
          style={{ 
            backgroundImage: "url('/images/ai-automation-for-operations.webp')",
            backgroundSize: 'cover',
            backgroundColor: '#4318D1',
          }}
        />
        {/* Dark gradient overlay - left-to-right for text contrast */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to right, rgba(67, 24, 209, 0.95) 0%, rgba(67, 24, 209, 0.85) 30%, rgba(67, 24, 209, 0.5) 55%, rgba(67, 24, 209, 0.2) 75%, transparent 100%)',
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
              <span className="text-white/80">AI & Automation for Operations</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Settings className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Use Case
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">Operations</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Design scalable, resilient and efficient operational systems.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Automate core workflows, eliminate manual bottlenecks and integrate
              disconnected systems to increase throughput without increasing
              operational cost.
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
              When Growth Exposes{" "}
              <span className="text-brand-purple">Operational Weakness</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Operations is where strategy meets execution. As organisations
              grow, operational complexity expands across order fulfilment,
              cross-team coordination, vendor management, workflow approvals
              and customer handoffs. What worked at small scale becomes fragile
              under volume.
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
              The Breaking Point
            </p>
            <p className="text-base leading-relaxed text-foreground/70">
              Without structured automation, operational cost increases linearly
              with volume. Margins compress as complexity rises. Teams spend
              more time coordinating work than completing it.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              What worked with 10 people breaks at 50. What worked with 100
              orders collapses at 1,000.
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
              Where Operations Automation Delivers{" "}
              <span className="text-brand-purple">Structural Improvement</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Operations automation focuses on process discipline and system
              integration. It reduces friction across the delivery engine of
              your business.
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
              The Commercial{" "}
              <span className="text-brand-purple">Impact</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Organisations implementing structured operations automation
              When automation removes friction from your delivery engine, the impact compounds across every operational stage.
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
            These outcomes represent the compound effect of removing friction at every stage - from order to fulfilment.
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
              Process Discipline First.{" "}
              <span className="text-brand-purple">Automation Second</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              We focus on operational workflows where bottlenecks restrict
              throughput, manual handoffs create risk, and activities scale
              inefficiently.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Prioritise",
                desc: "We map your operational workflows to identify where bottlenecks restrict throughput, which processes rely on spreadsheets, and where handoffs create risk.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build and deploy automations in rapid cycles. Most operational workflows go live within one to two weeks, with monitoring for reliability.",
              },
              {
                step: "03",
                title: "Monitor & Scale",
                desc: "Every automation is tracked for efficiency and margin impact. We optimise continuously and add new workflows as operations complexity grows.",
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
                Build an Operational Engine That Scales
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Start with an Automation & AI Assessment to identify the
                highest-impact operational workflows to automate.
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
