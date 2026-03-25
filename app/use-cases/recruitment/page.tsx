import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { clientQuotes } from "@/lib/testimonials"
import { SolutionCardGrid } from "@/components/solution-card"
import {
  ArrowRight,
  ArrowLeft,
  Zap,
  BarChart3,
  DollarSign,
  Gauge,
  ClipboardList,
  Quote,
  UserSearch,
  Users,
  Timer,
  TrendingUp,
  RefreshCw,
  CalendarCheck,
  Search,
  DatabaseZap,
  Activity,
  ShieldCheck,
  Clock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for Recruitment Firms | Automaly",
  description:
    "Increase placements, improve consultant productivity and scale without increasing overhead. AI & Automation for recruitment firms.",
  openGraph: {
    title: "AI & Automation for Recruitment Firms | Automaly",
    description:
      "Increase placements, improve consultant productivity and scale without increasing overhead. AI & Automation for recruitment firms.",
    url: "https://www.automaly.io/use-cases/recruitment",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/recruitment",
  },
}

/* Pain points data */

const painPoints = [
  { icon: Search, text: "CV screening consuming significant consultant time" },
  { icon: DatabaseZap, text: "Inconsistent CRM data and missed follow-ups" },
  { icon: CalendarCheck, text: "Manual interview coordination creating friction" },
  { icon: ShieldCheck, text: "Compliance documentation overloading admin teams" },
  { icon: ClipboardList, text: "Candidate follow-ups falling through the cracks" },
  { icon: BarChart3, text: "Pipeline reporting lagging behind performance" },
]

/* Automation areas data */

const automationAreas = [
  {
    number: "01",
    category: "Process" as const,
    icon: Search,
    title: "Candidate Screening & Shortlisting Automation",
    problem:
      "Manual CV review wastes time better spent on revenue conversations.",
    solutions: [
      "Auto-parse CVs",
      "Match candidates to job descriptions",
      "Rank applicants by relevance",
      "Highlight missing criteria",
      "Flag high-potential candidates instantly",
    ],
    roi: "40-60% less screening time. One extra placement per consultant quarterly boosts annual revenue.",
  },
  {
    number: "02",
    category: "Data" as const,
    icon: DatabaseZap,
    title: "CRM Automation & Data Integrity",
    problem:
      "Inconsistent CRM data misses redeployment chances and skews forecasts.",
    solutions: [
      "Auto-log candidate communications",
      "AI-generated call summaries",
      "Automated status updates",
      "Triggered follow-up reminders",
      "Duplicate record detection",
    ],
    roi: "Better CRM accuracy increases redeployment, improves forecasting and conversion rates.",
  },
  {
    number: "03",
    category: "Coordination" as const,
    icon: CalendarCheck,
    title: "Interview Coordination & Scheduling Automation",
    problem:
      "Manual scheduling extends cycles - top candidates go to faster competitors.",
    solutions: [
      "Sync candidate and client calendars",
      "Send automated reminders",
      "Reschedule instantly",
      "Track interview stages",
      "Update CRM automatically",
    ],
    roi: "Less coordination time increases consultant selling hours and shortens placement cycles.",
  },
  {
    number: "04",
    category: "Compliance" as const,
    icon: ShieldCheck,
    title: "Compliance & Right-to-Work Automation",
    problem:
      "Manual tracking consumes admin time and creates legal exposure.",
    solutions: [
      "Document collection workflows",
      "Expiry tracking alerts",
      "Structured compliance checklists",
      "Audit-ready documentation storage",
      "Auto-verify right-to-work",
    ],
    roi: "Reduced legal exposure and admin overhead - critical for temporary and contract placements.",
  },
  {
    number: "05",
    category: "Analytics" as const,
    icon: BarChart3,
    title: "Client Reporting & Performance Dashboards",
    problem:
      "Manual reporting reduces visibility and diverts senior time from coaching.",
    solutions: [
      "Track time-to-fill metrics",
      "Monitor placement conversion ratios",
      "Generate client performance dashboards",
      "Identify revenue per consultant",
      "Flag pipeline bottlenecks",
    ],
    roi: "Better visibility enables performance optimisation. Small conversion gains significantly impact revenue.",
  },
]

/* Example workflows */

const exampleWorkflows = [
  "AI-powered CV parsing and job matching",
  "Automated CRM update workflows",
  "Interview scheduling engines",
  "Compliance document tracking dashboards",
  "Placement pipeline performance reporting",
  "Automated candidate nurture sequences",
  "Client and vacancy intake form automation",
  "Real-time margin and fee tracking dashboards",
]

/* Impact metrics */

const impactMetrics = [
  { stat: "Extra", label: "Placement per consultant per quarter", icon: TrendingUp },
  { stat: "Same Day", label: "Shortlists delivered from inbound CVs", icon: Search },
  { stat: "Real-Time", label: "Pipeline and performance dashboards", icon: BarChart3 },
  { stat: "Weeks", label: "Typical deployment timeline", icon: Timer },
  { stat: "Audit-Ready", label: "Compliance documentation on every placement", icon: ShieldCheck },
  { stat: "Single", label: "Source of truth across CRM and ATS", icon: DatabaseZap },
]

/* JSON-LD */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for Recruitment Firms",
    description:
      "Increase placements, improve consultant productivity and scale without increasing overhead. AI & Automation for recruitment firms.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/recruitment",
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
        name: "Recruitment Firms",
        item: "https://www.automaly.io/use-cases/recruitment",
      },
    ],
  },
]

export default function RecruitmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - positioned to keep 3D connected cubes visible on right */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right-bottom sm:bg-right md:bg-[center_right_-5%] lg:bg-[center_right_10%] xl:bg-center"
          style={{ 
            backgroundImage: "url('/images/ai-automation-for-recruitment.webp')",
            backgroundSize: 'cover',
            backgroundColor: '#1a0a4e',
          }}
        />
        {/* Dark gradient overlay - left-to-right for text contrast */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to right, rgba(26, 10, 78, 0.95) 0%, rgba(26, 10, 78, 0.85) 30%, rgba(26, 10, 78, 0.5) 55%, rgba(26, 10, 78, 0.2) 75%, transparent 100%)',
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
              <span className="text-white/80">Recruitment Firms</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <UserSearch className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                By Sector
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">Recruitment Firms</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Increase placements, improve consultant productivity and scale without increasing overhead.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Recruitment firms grow through placements. They stall through process
              inefficiency. Automation and AI enable agencies to increase consultant
              output, accelerate placements and improve margin - without
              proportionally increasing headcount.
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
              The Recruitment{" "}
              <span className="text-brand-purple">Growth Ceiling</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              At small scale, recruitment firms run on hustle. As the business
              grows, CV volume increases, client roles multiply, compliance
              requirements expand and consultant admin workload rises. Revenue
              potential exists - but administrative load restricts billable time.
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
              Consultants spend increasing time on manual CV screening, data
              entry, interview coordination, compliance documentation, candidate
              follow-ups and pipeline reporting - instead of placing candidates.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              If consultants spend less time placing candidates, growth slows.
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
              Where Automation Increases{" "}
              <span className="text-brand-purple">Placement Velocity</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Recruitment automation focuses on one commercial objective:
              increase placements per consultant.
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
              <span className="text-brand-purple">Recruitment Firms</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              When automation removes friction from your placement engine, consultant capacity compounds across every stage of the cycle.
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
            These outcomes represent the compound effect of removing friction at every stage - from sourcing to placement.
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
              Start with{" "}
              <span className="text-brand-purple">Placement Economics</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              We focus on workflows where consultant time is consumed by admin,
              screening bottlenecks reduce placement velocity, and poor CRM data
              limits redeployment.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Prioritise",
                desc: "We analyse consultant time allocation, screening bottlenecks, compliance workload, CRM data quality, and pipeline conversion ratios to identify the highest-impact opportunities.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build and deploy recruitment automations in rapid cycles. Most workflows go live within one to two weeks, with monitoring for placement velocity and margin.",
              },
              {
                step: "03",
                title: "Monitor & Scale",
                desc: "Every automation is tracked for impact on placements per consultant and margin protection. We optimise continuously and add workflows as your team grows.",
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
                Build a Recruitment Engine That Scales
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Ready to increase placements and consultant productivity?
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
