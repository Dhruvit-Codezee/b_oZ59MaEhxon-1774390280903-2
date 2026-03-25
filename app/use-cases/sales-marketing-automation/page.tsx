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
  Mail,
  BarChart3,
  PieChart,
  Users,
  Zap,
  Bot,
  Target,
  TrendingUp,
  CheckCircle2,
  DollarSign,
  Gauge,
  Quote,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for Sales & Marketing | Automaly",
  description:
    "Automate lead generation, CRM workflows, campaign execution and pipeline management. Scale revenue without scaling headcount.",
  openGraph: {
    title: "AI & Automation for Sales & Marketing | Automaly",
    description:
      "Automate lead generation, CRM workflows, campaign execution and pipeline management. Scale revenue without scaling headcount.",
    url: "https://www.automaly.io/use-cases/sales-marketing-automation",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/sales-marketing-automation",
  },
}

/* ── Pain points data ──────────────────────────────────────────────────── */

const painPoints = [
  { icon: Clock, text: "Manual CRM data entry consuming selling time" },
  { icon: AlertTriangle, text: "Inconsistent or delayed follow-ups" },
  { icon: Mail, text: "Inbound enquiries sitting untouched for hours" },
  { icon: BarChart3, text: "Disconnected marketing and sales data" },
  { icon: PieChart, text: "Spreadsheet-based reporting and forecasts" },
  { icon: Users, text: "Human bottlenecks in approvals and lead routing" },
]

/* ── Automation areas data ─────────────────────────────────────────────── */

const automationAreas = [
  {
    number: "01",
    category: "Process" as const,
    icon: Zap,
    title: "Lead Capture & Enquiry Response",
    problem:
      "Slow response times kill conversion - competitors close first.",
    solutions: [
      "Instant routing by territory, product or value",
      "AI-drafted responses to common enquiries",
      "Auto-qualification from CRM and external data",
      "Escalation logic for high-value leads",
    ],
    roi: "Sub-5-minute response time increases conversion by 10-25%. A 10% lift delivers 6-figure annual revenue gains.",
  },
  {
    number: "02",
    category: "Data" as const,
    icon: Bot,
    title: "CRM Updates & Data Integrity",
    problem:
      "Manual CRM updates drain productivity - reps log data instead of selling.",
    solutions: [
      "Auto-transcribe and summarise sales calls",
      "Extract action points and next steps with AI",
      "Update CRM records post-interaction automatically",
      "Trigger follow-ups based on call outcomes",
    ],
    roi: "40% reduction in update time (6-8h/week per rep). A 10-person team gains 1-2 FTEs for selling.",
  },
  {
    number: "03",
    category: "Analytics" as const,
    icon: BarChart3,
    title: "Pipeline & Forecast Automation",
    problem:
      "Disconnected systems create unreliable forecasts and incomplete data.",
    solutions: [
      "Sync CRM, marketing and finance tools",
      "Flag stalled deals automatically",
      "Alert when pipeline health drops",
      "Generate real-time executive dashboards",
    ],
    roi: "5% forecast accuracy improvement reduces over-hiring and marketing waste, improving capital planning.",
  },
  {
    number: "04",
    category: "Coordination" as const,
    icon: Target,
    title: "Campaign & Marketing Workflow Orchestration",
    problem:
      "Fragmented tools and manual list management slow campaign launches.",
    solutions: [
      "Trigger campaigns by lifecycle stage",
      "Personalise outreach with AI-generated content",
      "Route qualified leads into sales workflows",
      "Auto-report campaign ROI by segment",
    ],
    roi: "30-50% faster campaign launches enable rapid experimentation and revenue optimisation.",
  },
  {
    number: "05",
    category: "Process" as const,
    icon: Mail,
    title: "Outbound Prospecting & Sequencing",
    problem:
      "Manual prospecting wastes hours - reps lose track and miss follow-ups.",
    solutions: [
      "Multi-channel sequences (email, LinkedIn, calls)",
      "AI prospect research and personalisation",
      "Auto-log every outbound touchpoint to CRM",
      "Smart follow-up scheduling by engagement",
    ],
    roi: "2-3x more qualified meetings per rep, 60-70% less time on manual sequencing.",
  },
]

/* ── Example workflows ─────────────────────────────────────────────────── */

const exampleWorkflows = [
  "AI Sales Enquiry Agents that instantly respond to inbound emails",
  "Automated lead scoring and prioritisation engines",
  "CRM auto-update systems using AI call summaries",
  "Marketing campaign orchestration across CRM + email + ads",
  "Deal-stage triggered finance and operations notifications",
  "Sales performance dashboards generated in real time",
  "Multi-channel outbound sequences with AI-personalised messaging",
  "Automated prospect enrichment and list building pipelines",
]

/* ── Impact metrics ────────────────────────────────────────────────────── */

const impactMetrics = [
  { stat: "1-2 FTEs", label: "Selling capacity gained per 10-rep team", icon: Users },
  { stat: "6-Figure", label: "Annual revenue lift from faster response", icon: DollarSign },
  { stat: "2-3x", label: "More qualified meetings per rep", icon: TrendingUp },
  { stat: "Weeks", label: "Typical deployment timeline", icon: Gauge },
  { stat: "Real-Time", label: "Executive dashboards and alerts", icon: BarChart3 },
  { stat: "Zero", label: "Lead response delay with automation", icon: Zap },
]

/* ── JSON-LD ───────────────────────────────────────────────────────────── */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for Sales & Marketing",
    description:
      "Automate lead generation, CRM workflows, campaign execution and pipeline management to scale revenue without scaling headcount.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/sales-marketing-automation",
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
        name: "AI & Automation for Sales & Marketing",
        item: "https://www.automaly.io/use-cases/sales-marketing-automation",
      },
    ],
  },
]

export default function SalesMarketingAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - positioned to keep 3D bar chart visible on right */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right-bottom sm:bg-right md:bg-[center_right_-5%] lg:bg-[center_right_10%] xl:bg-center"
          style={{ 
            backgroundImage: "url('/images/ai-automation-for-sales-marketing.webp')",
            backgroundSize: 'cover',
            backgroundColor: '#5B2FE0',
          }}
        />
        {/* Dark gradient overlay - left-to-right for text contrast */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to right, rgba(91, 47, 224, 0.95) 0%, rgba(91, 47, 224, 0.85) 30%, rgba(91, 47, 224, 0.5) 55%, rgba(91, 47, 224, 0.2) 75%, transparent 100%)',
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
              <span className="text-white/80">AI & Automation for Sales & Marketing</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Use Case
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">Sales & Marketing</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Scale revenue without scaling headcount.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Automate lead generation, CRM workflows, campaign execution and
              pipeline management so your revenue engine runs faster, cleaner and
              more predictably.
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
                <Link href="/services/sales-marketing">
                  Our Sales & Marketing Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────────── */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              The Problem
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              The Revenue Bottleneck Most Teams{" "}
              <span className="text-brand-purple">{"Don't"} See</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              High-growth organisations rarely struggle with ambition. They
              struggle with execution capacity. As sales volume increases, so
              does friction.
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
              What worked at 5 sales reps breaks at 15. What worked at
              {" \u00A3"}2M ARR fails at {"\u00A3"}10M. Without automation,
              sales teams spend hours updating CRM instead of selling, marketing
              cannot attribute ROI accurately, leads sit untouched, and forecasts
              rely on manual spreadsheet consolidation.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              The result? Revenue leakage, slower deal cycles, and rising
              operational cost per deal.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Solution (Automation Areas) ───────────────────────────── */}
      <section className="bg-section-light pt-20 pb-10 lg:pt-28 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              The Solution
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Where Automation & AI{" "}
              <span className="text-brand-purple">Unlocks Growth</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Sales & Marketing automation is not about replacing people. It is
              about removing friction from revenue generation.
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

      {/* ── Commercial Impact ─────────────────���────��─────────────────── */}
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
              When automation removes friction from your revenue engine, the impact compounds across every stage of the sales cycle.
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
            These outcomes represent the compound effect of removing friction at every stage - from first contact to closed deal.
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
              Start with ROI.{" "}
              <span className="text-brand-purple">Not Technology</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              We identify where manual effort is highest, where response delays
              reduce conversion, and which workflows generate the highest
              financial return when automated.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Prioritise",
                desc: "We map your current sales and marketing workflows to identify where manual effort is highest and which automation opportunities deliver the greatest revenue impact.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build and deploy automations in rapid sprints. Most workflows go live within one to two weeks, with full monitoring for performance and ROI.",
              },
              {
                step: "03",
                title: "Monitor & Optimise",
                desc: "Every automation is tracked for conversion impact and efficiency gains. We refine continuously and add new workflows as your pipeline scales.",
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

      {/* ── Client Quotes + CTA ──────────────────────────────────────── */}
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
                Build a Revenue Engine That Scales
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Start with an Automation & AI Assessment and identify the
                highest-impact opportunities inside your sales and marketing
                workflows.
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
