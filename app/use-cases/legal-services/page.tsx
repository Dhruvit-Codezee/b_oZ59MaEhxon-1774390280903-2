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
  Gavel,
  FileCheck,
  Users,
  Timer,
  Receipt,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for Legal Services Firms | Automaly",
  description:
    "Increase fee-earner productivity, reduce administrative burden and strengthen governance. AI & Automation for law firms and legal services practices.",
  openGraph: {
    title: "AI & Automation for Legal Services Firms | Automaly",
    description:
      "Increase fee-earner productivity, reduce administrative burden and strengthen governance. AI & Automation for law firms and legal services practices.",
    url: "https://www.automaly.io/use-cases/legal-services",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/legal-services",
  },
}

/* Pain points data */

const painPoints = [
  { icon: ClipboardList, text: "Manual client intake and KYC processes" },
  { icon: FileText, text: "Email-based document version control" },
  { icon: FileCheck, text: "Repetitive drafting of standard agreements" },
  { icon: Timer, text: "Delayed billing due to incomplete time capture" },
  { icon: ShieldCheck, text: "Compliance tracking across spreadsheets" },
  { icon: BarChart3, text: "Limited visibility into matter profitability" },
]

/* Automation areas data */

const automationAreas = [
  {
    number: "01",
    category: "Process" as const,
    icon: Users,
    title: "Client Intake & KYC Automation",
    problem:
      "Manual KYC wastes fee-earner time and slows matter commencement.",
    solutions: [
      "Trigger structured client intake workflows",
      "Auto-collect KYC documentation",
      "Run identity and AML checks",
      "Route approvals by risk threshold",
      "Store audit-ready documentation",
    ],
    roi: "30-50% faster onboarding accelerates matter start and reduces compliance exposure.",
  },
  {
    number: "02",
    category: "Process" as const,
    icon: FileCheck,
    title: "Document Generation & Standardisation",
    problem:
      "Manual drafting wastes billable time and introduces inconsistencies.",
    solutions: [
      "Dynamic document generation from templates",
      "Clause insertion based on case type",
      "Version control and audit trails",
      "Centralised template governance",
      "Structured review workflows",
    ],
    roi: "40-60% less prep time increases billable capacity without adding headcount.",
  },
  {
    number: "03",
    category: "Coordination" as const,
    icon: Gavel,
    title: "Matter Workflow & Case Management Automation",
    problem:
      "Manual coordination and deadline management create liability exposure.",
    solutions: [
      "Trigger task sequences by matter type",
      "Auto-assign work across teams",
      "Monitor deadlines and court dates",
      "Escalate stalled activities",
      "Provide real-time matter dashboards",
    ],
    roi: "Better visibility reduces missed deadlines and rework, protecting reputation and reducing liability.",
  },
  {
    number: "04",
    category: "Data" as const,
    icon: Receipt,
    title: "Time Recording & Billing Automation",
    problem:
      "Incomplete time capture and delayed billing cut revenue and cash flow.",
    solutions: [
      "Auto-prompts based on calendar activity",
      "Sync email/document activity to matters",
      "Milestone-triggered billing workflows",
      "Automated invoice generation",
      "Debtor tracking alerts",
    ],
    roi: "5-10% more captured billable time materially increases annual revenue across fee-earners.",
  },
  {
    number: "05",
    category: "Compliance" as const,
    icon: ShieldCheck,
    title: "Compliance & Regulatory Monitoring",
    problem:
      "Expanding SRA requirements and manual audit prep consume weeks.",
    solutions: [
      "Track SRA compliance requirements",
      "Monitor file review schedules",
      "Trigger policy renewals",
      "Generate compliance dashboards",
      "Maintain structured audit trails",
    ],
    roi: "50% less prep time lowers admin cost while strengthening regulatory confidence.",
  },
]

/* Example workflows */

const exampleWorkflows = [
  "Automated client intake and KYC pipelines",
  "Dynamic legal document generation systems",
  "Matter lifecycle orchestration",
  "Billable time capture automation",
  "Compliance tracking dashboards",
  "Automated renewal and retainer workflows",
  "Conflict of interest check automation",
  "Court deadline and filing tracker with escalation alerts",
]

/* Impact metrics */

const impactMetrics = [
  { stat: "Day One", label: "KYC and matter commencement on intake", icon: Users },
  { stat: "Real-Time", label: "Matter status and deadline dashboards", icon: Gavel },
  { stat: "Audit-Ready", label: "Compliance evidence collected automatically", icon: ShieldCheck },
  { stat: "Weeks", label: "Typical deployment timeline", icon: Gauge },
  { stat: "Single", label: "Repository for all client documents", icon: FileCheck },
  { stat: "Zero", label: "Missed renewal or expiry deadlines", icon: Clock },
]

/* JSON-LD */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for Legal Services Firms",
    description:
      "Increase fee-earner productivity, reduce administrative burden and strengthen governance. AI & Automation for law firms and legal services practices.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/legal-services",
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
        name: "Legal Services",
        item: "https://www.automaly.io/use-cases/legal-services",
      },
    ],
  },
]

export default function LegalServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - using contain on large screens to prevent cropping */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-cover lg:bg-contain lg:bg-right"
          style={{ 
            backgroundImage: "url('/images/ai-automation-for-legal-services.jpg')",
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
              <span className="text-white/80">Legal Services</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Gavel className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                By Sector
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">Legal Services Firms</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Increase fee-earner productivity, reduce administrative burden and
              strengthen governance.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Legal services firms operate in a high-trust, high-compliance
              environment. As caseloads increase and regulatory expectations rise,
              automation enables law firms to standardise processes, protect margin
              and improve client service - without compromising professional
              oversight.
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
              <span className="text-brand-purple">Modern Law Firms</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Legal services firms face growing demands across client
              onboarding, case management, document drafting, regulatory
              compliance, billing, and reporting. As the firm grows,
              administrative overhead increases, fee-earner time is consumed by
              non-billable tasks and risk exposure rises.
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
              Without structured automation, growth compresses margin. Partner
              oversight becomes more complex, compliance gaps widen, and
              fee-earners spend increasing time on administrative tasks rather
              than advisory work that drives revenue.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              Legal services automation embeds consistency, governance and
              process clarity into the firm{"'"}s operating model.
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
              Where Automation Creates{" "}
              <span className="text-brand-purple">Operational Discipline</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Legal services automation is not about replacing legal judgement.
              It is about embedding consistency, governance and process clarity
              into the firm{"'"}s operating model.
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
              The Commercial &{" "}
              <span className="text-brand-purple">Governance Impact</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              When automation removes friction from your legal practice, fee-earner capacity compounds across every client engagement.
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
            These outcomes represent the compound effect of removing friction at every stage - from intake to completion.
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
              Process Clarity Before{" "}
              <span className="text-brand-purple">Technology</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              We assess drafting volumes, intake bottlenecks, time recording
              leakage, compliance exposure and matter workflow inefficiencies
              before building anything.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Prioritise",
                desc: "We map repetitive drafting workloads, intake delays, billing gaps, compliance exposure areas and matter workflow inefficiencies to identify the highest-impact opportunities.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build and deploy legal practice automations in rapid cycles. Most workflows go live within one to two weeks, with monitoring for governance and billable time recovery.",
              },
              {
                step: "03",
                title: "Monitor & Strengthen",
                desc: "Every automation is tracked for margin protection and efficiency gains. We optimise continuously and add workflows as your firm grows.",
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
                Build a Firm Operating Model That Scales
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                With automation, processes are standardised, oversight improves,
                fee-earners focus on advisory work and margin is protected.
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
