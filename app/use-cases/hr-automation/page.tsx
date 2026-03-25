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
  FileText,
  ShieldCheck,
  Users,
  UserCheck,
  CheckCircle2,
  Zap,
  BarChart3,
  Gauge,
  ClipboardList,
  Quote,
  CalendarCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for HR | Automaly",
  description:
    "Automate recruitment, onboarding, employee lifecycle management and HR reporting. Build scalable, compliant and efficient people operations.",
  openGraph: {
    title: "AI & Automation for HR | Automaly",
    description:
      "Automate recruitment, onboarding, employee lifecycle management and HR reporting. Build scalable, compliant and efficient people operations.",
    url: "https://www.automaly.io/use-cases/hr-automation",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/hr-automation",
  },
}

/* Pain points data */

const painPoints = [
  { icon: FileText, text: "Recruitment and candidate management bottlenecks" },
  { icon: ClipboardList, text: "Fragmented onboarding across HR, IT and Finance" },
  { icon: Clock, text: "Payroll coordination and manual approval chains" },
  { icon: CalendarCheck, text: "Performance management cycles running on spreadsheets" },
  { icon: ShieldCheck, text: "Compliance tracking reliant on manual reminders" },
  { icon: Users, text: "Employee data scattered across disconnected systems" },
]

/* Automation areas data */

const automationAreas = [
  {
    number: "01",
    category: "Process" as const,
    icon: UserCheck,
    title: "Recruitment & Candidate Workflow Automation",
    problem:
      "Manual recruitment delays hiring and creates inconsistent candidate experience.",
    solutions: [
      "Auto-route CVs by role or department",
      "Trigger structured interview workflows",
      "Schedule interviews via calendar sync",
      "Send consistent candidate communications",
      "Score and rank applicants by criteria",
    ],
    roi: "20-30% faster hiring lowers agency costs and prevents revenue loss from unfilled roles.",
  },
  {
    number: "02",
    category: "Coordination" as const,
    icon: FileText,
    title: "Automated Onboarding & Offboarding",
    problem:
      "Fragmented onboarding delays access - offboarding leaves compliance gaps.",
    solutions: [
      "Generate contracts from approved templates",
      "Trigger IT provisioning on hire",
      "Assign and track mandatory training",
      "Send structured 30-60-90 day check-ins",
      "Revoke access and manage compliance docs",
    ],
    roi: "30-50% less coordination time. For 40 annual hires, reclaim hundreds of HR hours and reduce risk.",
  },
  {
    number: "03",
    category: "Compliance" as const,
    icon: ShieldCheck,
    title: "Employee Lifecycle & Compliance Management",
    problem:
      "Manual compliance tracking creates audit vulnerability and legal exposure.",
    solutions: [
      "Automated probation tracking and reminders",
      "Visa and right-to-work expiry alerts",
      "Mandatory training renewal notifications",
      "Policy acknowledgement tracking",
      "Structured disciplinary documentation",
    ],
    roi: "Preventing one tribunal or compliance failure offsets the entire automation investment.",
  },
  {
    number: "04",
    category: "Process" as const,
    icon: CalendarCheck,
    title: "Performance & Review Process Automation",
    problem:
      "Manual reviews miss deadlines and lack consistency and executive visibility.",
    solutions: [
      "Trigger quarterly review cycles automatically",
      "Distribute structured evaluation forms",
      "Consolidate data across managers",
      "Generate leadership dashboards",
    ],
    roi: "Improved visibility reduces underperformance lag and supports proactive talent decisions.",
  },
  {
    number: "05",
    category: "Analytics" as const,
    icon: BarChart3,
    title: "HR Reporting & Executive Visibility",
    problem:
      "Manual reporting consumes time - leadership lacks real-time workforce data.",
    solutions: [
      "Sync HRIS, payroll and performance systems",
      "Generate real-time headcount dashboards",
      "Track attrition trends automatically",
      "Flag workforce risk indicators",
      "Provide board-ready reporting on demand",
    ],
    roi: "60-70% less reporting effort frees HR for strategic workforce planning and retention.",
  },
]

/* Example workflows */

const exampleWorkflows = [
  "End-to-end recruitment pipeline automation",
  "Automated offer letter and contract generation",
  "Integrated onboarding orchestration (HR + IT + Finance)",
  "AI-powered HR policy Q&A assistants",
  "Performance review lifecycle automation",
  "Compliance tracking dashboards and alert systems",
  "Automated leave and absence management workflows",
  "Employee offboarding and access revocation pipelines",
]

/* Impact metrics */

const impactMetrics = [
  { stat: "Hundreds", label: "HR hours reclaimed annually per 200 staff", icon: Clock },
  { stat: "Day One", label: "System access and training for every hire", icon: UserCheck },
  { stat: "Zero", label: "Missed probation or visa expiry reviews", icon: ShieldCheck },
  { stat: "Weeks", label: "Typical deployment timeline", icon: Gauge },
  { stat: "Real-Time", label: "Workforce dashboards for leadership", icon: BarChart3 },
  { stat: "Single", label: "Source of truth for all employee data", icon: CheckCircle2 },
]

/* JSON-LD */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for HR",
    description:
      "Automate recruitment, onboarding, employee lifecycle management and HR reporting to build scalable, compliant and efficient people operations.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/hr-automation",
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
        name: "AI & Automation for HR",
        item: "https://www.automaly.io/use-cases/hr-automation",
      },
    ],
  },
]

export default function HRAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - using contain on larger screens to show full image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-cover lg:bg-contain lg:bg-right"
          style={{ 
            backgroundImage: "url('/images/ai-automation-for-hr.webp')",
            backgroundColor: '#3d2178',
          }}
        />
        {/* Dark gradient overlay - left-to-right for text contrast */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to right, rgba(61, 33, 120, 0.95) 0%, rgba(61, 33, 120, 0.85) 30%, rgba(61, 33, 120, 0.5) 55%, rgba(61, 33, 120, 0.2) 75%, transparent 100%)',
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
              <span className="text-white/80">AI & Automation for HR</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Use Case
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">HR</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Build scalable, compliant and efficient people operations.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Automate recruitment, onboarding, employee lifecycle management and
              HR reporting to reduce administrative burden, improve compliance and
              create capacity for strategic people leadership.
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
              The Hidden Operational Strain Inside{" "}
              <span className="text-brand-purple">Growing HR Teams</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              HR is rarely underperforming. It is usually overwhelmed. As
              organisations scale, complexity increases across every people
              function.
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
              Without structured automation, HR teams spend the majority of
              their time on repetitive administration. Critical compliance tasks
              rely on manual reminders, employee data becomes fragmented across
              systems, onboarding experiences become inconsistent, and reporting
              requires spreadsheet consolidation.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              The result is not just inefficiency - it is operational risk. HR
              becomes reactive rather than strategic.
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
              Where HR Automation Delivers the{" "}
              <span className="text-brand-purple">Greatest Value</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              HR automation is not about removing the human element. It is about
              protecting it - by removing friction from the process.
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
              The Commercial & Strategic{" "}
              <span className="text-brand-purple">Impact</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              When automation removes friction from the employee lifecycle, HR capacity compounds across every touchpoint.
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
            These outcomes represent the compound effect of removing friction at every stage - from requisition to retention.
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
              Start with Process.{" "}
              <span className="text-brand-purple">Not Tools</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              We identify high-impact HR workflows where automation reduces
              administrative burden, strengthens compliance, and improves
              employee experience.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Prioritise",
                desc: "We map your current HR workflows and identify where administrative time is highest, which processes introduce compliance risk, and where coordination breaks down.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build and deploy HR automations in rapid cycles. Most workflows go live within one to two weeks, with continuous monitoring for reliability.",
              },
              {
                step: "03",
                title: "Monitor & Scale",
                desc: "Every automation is tracked for ROI and compliance impact. We optimise continuously and add new workflows as your team scales.",
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
                Build HR Infrastructure That Scales With Growth
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Start with an Automation & AI Assessment to identify the
                highest-impact opportunities across your HR workflows.
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
