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
  Calculator,
  TrendingUp,
  Receipt,
  Wallet,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for Finance | Automaly",
  description:
    "Automate reporting, reconciliations, approvals and financial workflows to strengthen governance while improving operational efficiency.",
  openGraph: {
    title: "AI & Automation for Finance | Automaly",
    description:
      "Automate reporting, reconciliations, approvals and financial workflows to strengthen governance while improving operational efficiency.",
    url: "https://www.automaly.io/use-cases/finance-automation",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/finance-automation",
  },
}

/* Pain points data */

const painPoints = [
  { icon: FileText, text: "Spreadsheet-based reconciliations consuming team bandwidth" },
  { icon: ClipboardList, text: "Manual invoice approvals creating delays and errors" },
  { icon: AlertTriangle, text: "Disconnected systems reducing financial visibility" },
  { icon: Clock, text: "Delayed reporting cycles limiting leadership decisions" },
  { icon: Receipt, text: "Repetitive journal entries and manual data consolidation" },
  { icon: Wallet, text: "Inconsistent expense management increasing compliance risk" },
]

/* Automation areas data */

const automationAreas = [
  {
    number: "01",
    category: "Process" as const,
    icon: Receipt,
    title: "Accounts Payable & Invoice Processing Automation",
    problem:
      "Manual invoicing delays payments and creates duplicate entries.",
    solutions: [
      "Extract invoice data automatically",
      "Match invoices to purchase orders",
      "Route approvals by thresholds",
      "Flag anomalies and duplicates",
      "Update accounting systems in real time",
    ],
    roi: "40-60% less handling time. For 2,000+ annual invoices, free hundreds of hours and cut errors.",
  },
  {
    number: "02",
    category: "Data" as const,
    icon: Calculator,
    title: "Automated Reconciliations & Month-End Close",
    problem:
      "Manual month-end consolidation consumes days better spent on analysis.",
    solutions: [
      "Auto-reconcile bank feeds",
      "Match transactions across systems",
      "Identify exceptions in real time",
      "Trigger review workflows",
      "Generate pre-formatted reports",
    ],
    roi: "Cut close from 10 days to 5-6, freeing teams for forward-looking analysis and faster decisions.",
  },
  {
    number: "03",
    category: "Analytics" as const,
    icon: BarChart3,
    title: "Financial Reporting & Executive Dashboards",
    problem:
      "Manual reporting delays leave leadership operating on outdated data.",
    solutions: [
      "Real-time financial dashboards",
      "Auto-generate board packs",
      "Revenue and cost variance alerts",
      "Department-level budget tracking",
      "Scenario modelling",
    ],
    roi: "60-70% less reporting workload, especially multi-entity. Faster reporting enables early intervention.",
  },
  {
    number: "04",
    category: "Compliance" as const,
    icon: ShieldCheck,
    title: "Expense & Approval Workflow Automation",
    problem:
      "Manual enforcement misses policy violations until audit.",
    solutions: [
      "Enforce approval thresholds automatically",
      "Validate policy compliance in real time",
      "Flag unusual spend patterns",
      "Sync expense and accounting systems",
      "Generate audit-ready documentation",
    ],
    roi: "5-10% reduction in non-compliant spend delivers direct savings and reduces audit risk.",
  },
  {
    number: "05",
    category: "Analytics" as const,
    icon: TrendingUp,
    title: "Cash Flow & Forecast Automation",
    problem:
      "Static spreadsheets expose the business to liquidity shocks.",
    solutions: [
      "Integrate CRM, billing and accounting",
      "Predict cash flow from pipeline data",
      "Flag payment delays automatically",
      "Trigger debtor follow-ups",
      "Provide rolling forecast models",
    ],
    roi: "Better forecasting reduces external financing needs. Improved debtor management unlocks capital.",
  },
]

/* Example workflows */

const exampleWorkflows = [
  "End-to-end invoice ingestion and approval automation",
  "AI-driven anomaly detection in transactions",
  "Automated bank reconciliation workflows",
  "Integrated CRM-to-finance revenue sync",
  "Cash flow forecasting dashboards",
  "Automated management and board reporting packs",
  "Expense claim routing and multi-level approval pipelines",
  "Automated VAT and tax filing preparation workflows",
]

/* Impact metrics */

const impactMetrics = [
  { stat: "5-6 Days", label: "Month-end close instead of 10+", icon: Calculator },
  { stat: "Hundreds", label: "Hours reclaimed from invoice processing", icon: Clock },
  { stat: "Real-Time", label: "Cash flow and variance dashboards", icon: BarChart3 },
  { stat: "Weeks", label: "Typical deployment timeline", icon: Gauge },
  { stat: "Audit-Ready", label: "Documentation generated automatically", icon: ShieldCheck },
  { stat: "Single", label: "Source of truth across all entities", icon: TrendingUp },
]

/* JSON-LD */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for Finance",
    description:
      "Automate reporting, reconciliations, approvals and financial workflows to strengthen governance while improving operational efficiency.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/finance-automation",
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
        name: "AI & Automation for Finance",
        item: "https://www.automaly.io/use-cases/finance-automation",
      },
    ],
  },
]

export default function FinanceAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - positioned to keep 3D chart visible on right */}
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/ai-automation-for-finance.webp')",
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
              <span className="text-white/80">AI & Automation for Finance</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Calculator className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Use Case
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">Finance</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Increase financial control, reduce manual workload and improve
              decision velocity.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Automate reporting, reconciliations, approvals and financial
              workflows to strengthen governance while improving operational
              efficiency.
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
              The Operational Pressure on{" "}
              <span className="text-brand-purple">Modern Finance Teams</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Finance is expected to do more than close the books. Today&apos;s
              finance function must deliver accurate real-time reporting, support
              strategic decision-making, maintain compliance and improve cash
              flow visibility - yet most teams remain burdened by manual
              processes.
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
              As transaction volumes increase, manual effort increases
              proportionally. Reconciliations consume entire weeks, invoice
              approvals stall in email chains, and reporting cycles leave
              leadership navigating with outdated data.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              Without automation, finance headcount scales with revenue. Cost
              grows alongside transaction volume instead of shrinking per unit.
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
              Where Finance Automation Creates{" "}
              <span className="text-brand-purple">Structural Advantage</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Finance automation is not about removing oversight. It is about
              embedding control directly into the workflow.
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
              When automation removes friction from your finance function, the impact compounds across every transaction and reporting cycle.
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
            These outcomes represent the compound effect of removing friction at every stage - from invoice to insight.
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
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Our Approach
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Governance First.{" "}
                <span className="text-brand-purple">Automation Second.</span>
              </h2>
            </div>

            <div className="rounded-2xl border border-brand-purple/20 bg-white p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-purple mb-4">
                Before any build begins, we assess
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Where manual controls introduce risk",
                  "Which reconciliations consume disproportionate time",
                  "Where reporting delays reduce leadership visibility",
                  "Which workflows offer measurable cost or cash flow improvement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                    <span className="text-base text-foreground/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl bg-brand-lavender px-6 py-4">
                <p className="text-sm font-semibold text-foreground">
                  Only ROI-positive, governance-aligned initiatives move into
                  development.
                </p>
                <p className="mt-1 text-sm text-foreground/60">
                  This ensures automation strengthens financial control rather
                  than adding system complexity.
                </p>
              </div>
            </div>
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
                Build a Finance Function That Scales With Revenue
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Start with an Automation & AI Assessment to identify the
                highest-impact opportunities within your finance workflows.
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
