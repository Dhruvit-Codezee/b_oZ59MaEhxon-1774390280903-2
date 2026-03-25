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
  Palette,
  Users,
  Timer,
  TrendingUp,
  RefreshCw,
  Activity,
  PieChart,
  Layers,
  Send,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for Digital Agencies | Automaly",
  description:
    "Increase margin, scale delivery and grow revenue without increasing headcount. AI & Automation for digital agencies.",
  openGraph: {
    title: "AI & Automation for Digital Agencies | Automaly",
    description:
      "Increase margin, scale delivery and grow revenue without increasing headcount. AI & Automation for digital agencies.",
    url: "https://www.automaly.io/use-cases/digital-agencies",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/digital-agencies",
  },
}

/* Pain points data */

const painPoints = [
  { icon: ClipboardList, text: "Manual proposal creation and slow turnaround" },
  { icon: Users, text: "Inconsistent client onboarding" },
  { icon: Layers, text: "Fragmented CRM, project and finance tools" },
  { icon: FileText, text: "Spreadsheet-based reporting consuming senior time" },
  { icon: Activity, text: "Resource allocation inefficiencies and utilisation gaps" },
  { icon: PieChart, text: "Revenue leakage between delivery and billing" },
]

/* Automation areas data */

const automationAreas = [
  {
    number: "01",
    category: "Process" as const,
    icon: Send,
    title: "Sales & Proposal Automation",
    problem:
      "Slow proposal turnaround and disconnected CRM-to-project handoffs stall opportunities.",
    solutions: [
      "Instantly qualify inbound leads",
      "Generate proposal drafts using AI",
      "Auto-route opportunities to the right team",
      "Sync CRM and project management tools",
      "Trigger onboarding workflows once contracts are signed",
    ],
    roi: "30-50% faster proposals improve close rates and shorten cycles. A 10% conversion lift delivers significant annual revenue.",
  },
  {
    number: "02",
    category: "Coordination" as const,
    icon: Users,
    title: "Client Onboarding & Project Kick-Off Automation",
    problem:
      "Inconsistent onboarding mismanages expectations and consumes margin before the first deliverable ships.",
    solutions: [
      "Standardised onboarding checklists",
      "Automated asset collection",
      "Task templates generated per service type",
      "Internal handoff notifications",
      "SLA tracking from day one",
    ],
    roi: "Standardised onboarding reduces rework and missed deliverables, protecting margin and reducing churn.",
  },
  {
    number: "03",
    category: "Coordination" as const,
    icon: Gauge,
    title: "Resource & Capacity Management Automation",
    problem:
      "Without real-time capacity visibility, agencies over-commit and fail to identify bottlenecks until delivery is impacted.",
    solutions: [
      "Track team capacity in real time",
      "Flag resource conflicts",
      "Predict workload bottlenecks",
      "Automate time tracking consolidation",
      "Link delivery data to revenue metrics",
    ],
    roi: "5-10% utilisation improvement significantly increases annual profit without revenue growth.",
  },
  {
    number: "04",
    category: "Analytics" as const,
    icon: BarChart3,
    title: "Reporting & Client Performance Dashboards",
    problem:
      "Senior team members spend disproportionate time compiling reports instead of strategy and client relationships.",
    solutions: [
      "Auto-generated client performance dashboards",
      "Real-time campaign metrics",
      "Automated ROI summaries",
      "Board-level revenue visibility",
      "Profitability per client reporting",
    ],
    roi: "50-70% less reporting prep frees senior capacity and improves client confidence.",
  },
  {
    number: "05",
    category: "Data" as const,
    icon: DollarSign,
    title: "Billing, Invoicing & Margin Protection",
    problem:
      "Unbilled time, scope creep and missed renewals erode margin silently between delivery and billing.",
    solutions: [
      "Sync time tracking to invoicing systems",
      "Trigger billing at milestone completion",
      "Flag scope creep automatically",
      "Generate automated renewal reminders",
      "Track retainer utilisation",
    ],
    roi: "Eliminating unbilled time and scope drift improves gross margin by several points - substantial for service businesses.",
  },
]

/* Example workflows */

const exampleWorkflows = [
  "AI-powered lead qualification and proposal drafting",
  "CRM to project management auto-sync",
  "Automated onboarding task orchestration",
  "Real-time client performance dashboards",
  "Retainer usage tracking and renewal alerts",
  "Automated billing and revenue reconciliation workflows",
  "Resource allocation and capacity planning automation",
  "Automated campaign reporting and client deliverable generation",
]

/* Impact metrics */

const impactMetrics = [
  { stat: "Same Day", label: "Proposals generated from qualified leads", icon: Send },
  { stat: "Real-Time", label: "Resource capacity and utilisation dashboards", icon: Gauge },
  { stat: "Automated", label: "Time tracking synced to billing", icon: DollarSign },
  { stat: "Weeks", label: "Typical deployment timeline", icon: Clock },
  { stat: "Single", label: "View of profitability per client", icon: BarChart3 },
  { stat: "Zero", label: "Unbilled hours from missed time entries", icon: Users },
]

/* JSON-LD */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for Digital Agencies",
    description:
      "Increase margin, scale delivery and grow revenue without increasing headcount. AI & Automation for digital agencies.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/digital-agencies",
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
        name: "Digital Agencies",
        item: "https://www.automaly.io/use-cases/digital-agencies",
      },
    ],
  },
]

export default function DigitalAgenciesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - positioned to keep 3D connected nodes visible on right */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right-bottom sm:bg-right md:bg-[center_right_-5%] lg:bg-[center_right_10%] xl:bg-center"
          style={{ 
            backgroundImage: "url('/images/ai-automation-for-digital-agencies.webp')",
            backgroundSize: 'cover',
            backgroundColor: '#2D1050',
          }}
        />
        {/* Dark gradient overlay - left-to-right for text contrast */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to right, rgba(45, 16, 80, 0.95) 0%, rgba(45, 16, 80, 0.85) 30%, rgba(45, 16, 80, 0.5) 55%, rgba(45, 16, 80, 0.2) 75%, transparent 100%)',
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
              <span className="text-white/80">Digital Agencies</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Palette className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                By Sector
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">Digital Agencies</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Increase margin, scale delivery and grow revenue without increasing headcount.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Digital agencies grow through client acquisition. They struggle
              through operational complexity. Automation and AI allow agencies to
              increase throughput, improve client experience and protect margin - without scaling overhead at the same rate as revenue.
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
              The Growth Trap Most{" "}
              <span className="text-brand-purple">Agencies Fall Into</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Winning new clients is rarely the problem. The challenge begins
              after growth: delivery becomes inconsistent, margin erodes quietly,
              team burnout rises and profit per project becomes unclear.
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
              As client volume increases, delivery becomes inconsistent, margin
              erodes quietly, reporting lags behind performance and over-reliance
              on founder oversight creates a ceiling on growth.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              Revenue grows. But operational friction grows faster.
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
              Where Automation Unlocks{" "}
              <span className="text-brand-purple">Agency Scale</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Automation removes operational drag from the acquisition, delivery
              and support engines of your agency.
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
              The Commercial Impact for{" "}
              <span className="text-brand-purple">Digital Agencies</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              When automation removes friction from your delivery engine, agency capacity compounds across every client engagement.
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
            These outcomes represent the compound effect of removing friction at every stage - from pitch to invoice.
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
              Start with Margin &{" "}
              <span className="text-brand-purple">Revenue Leverage</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              We focus on workflows where manual effort reduces billable time,
              proposals and onboarding delay revenue, utilisation impacts
              profitability and reporting consumes senior capacity.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Prioritise",
                desc: "We map where manual effort reduces billable time, where proposals and onboarding delay revenue, where utilisation impacts profitability and which workflows create the highest financial return when automated.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build and deploy agency automations in rapid cycles. Most workflows go live within one to two weeks, with monitoring for margin impact and delivery velocity.",
              },
              {
                step: "03",
                title: "Monitor & Scale",
                desc: "Every automation is tracked for revenue acceleration and margin protection. We optimise continuously and add workflows as your agency scales.",
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
                Build an Agency Operating Model That Scales
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Ready to increase margin and scale delivery?
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
