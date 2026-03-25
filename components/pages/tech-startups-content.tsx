import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { clientQuotes } from "@/lib/testimonials"
import { SolutionCardGrid } from "@/components/solution-card"
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  AlertTriangle,
  FileText,
  CheckCircle2,
  Zap,
  BarChart3,
  Users,
  Layers,
  Activity,
  PieChart,
  TrendingUp,
  RefreshCw,
  Timer,
  Quote,
  ClipboardList,
  Rocket,
} from "lucide-react"

const painPoints = [
  {
    icon: Clock,
    title: "Founder Time Drain",
    desc: "Founders and early hires spend 30-40% of their week on manual admin, reporting and coordination instead of product and growth.",
  },
  {
    icon: AlertTriangle,
    title: "Scaling Without Structure",
    desc: "What worked at 10 people breaks at 50. Processes that were informal become bottlenecks as the team and customer base grow.",
  },
  {
    icon: FileText,
    title: "Tool Sprawl, No Integration",
    desc: "Dozens of SaaS tools adopted ad-hoc, none connected. Data lives in silos and teams duplicate effort across platforms.",
  },
]

const automationAreas = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Revenue Operations & Pipeline Automation",
    problem:
      "Leads fall through cracks, CRM data is stale, and pipeline visibility depends on manual updates from overloaded AEs.",
    solutions: [
      "Auto-enrich inbound leads and route to the right rep instantly",
      "Sync CRM, email and calendar to keep deal stages current",
      "Trigger follow-up sequences when deals stall or move stage",
      "Generate weekly pipeline snapshots for founders automatically",
    ],
    roi: "Faster speed-to-lead, fewer dropped opportunities and accurate forecasting without manual CRM hygiene.",
  },
  {
    number: "02",
    icon: Users,
    title: "People Ops & Hiring Workflow Automation",
    problem:
      "Recruiting, onboarding and HR admin are handled in spreadsheets and Slack threads, creating inconsistent experiences and compliance risk.",
    solutions: [
      "Automate candidate screening, scheduling and rejection emails",
      "Trigger onboarding checklists across IT, HR and finance on hire",
      "Sync employee data between HRIS, payroll and benefits platforms",
      "Auto-generate contracts and offer letters from templates",
    ],
    roi: "Cut hiring admin time by 60% and ensure every new starter has a consistent, professional onboarding experience.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Finance & Billing Automation",
    problem:
      "Invoicing, expense reconciliation and financial reporting rely on manual exports and spreadsheet manipulation each month.",
    solutions: [
      "Auto-generate and send invoices on contract renewal or usage triggers",
      "Reconcile payments across Stripe, bank feeds and accounting software",
      "Build real-time cash-flow dashboards from connected financial data",
      "Automate expense approvals, receipt capture and category coding",
    ],
    roi: "Close monthly books in days instead of weeks and maintain real-time visibility into runway and burn rate.",
  },
  {
    number: "04",
    icon: Activity,
    title: "Product & Engineering Ops Automation",
    problem:
      "Bug reports, deployment tracking and cross-functional updates require manual status syncs and context-switching between tools.",
    solutions: [
      "Sync Jira, Linear or GitHub issues with Slack and stakeholder dashboards",
      "Auto-triage support tickets to engineering with enriched context",
      "Trigger deployment notifications and changelog updates on release",
      "Generate sprint reports and velocity metrics without manual input",
    ],
    roi: "Reduce engineering coordination overhead by 40% so developers spend more time building product.",
  },
  {
    number: "05",
    icon: PieChart,
    title: "Reporting & Board-Pack Automation",
    problem:
      "Preparing investor updates, board decks and KPI dashboards means pulling data from a dozen tools into slides manually each month.",
    solutions: [
      "Auto-pull KPIs from CRM, finance, product and marketing into templates",
      "Generate formatted investor updates and board packs on schedule",
      "Build live dashboards that refresh from source systems automatically",
      "Distribute reports to stakeholders via email on a set cadence",
    ],
    roi: "Eliminate 8-12 hours of monthly reporting prep and ensure investors always see accurate, timely data.",
  },
]

const exampleWorkflows = [
  {
    icon: TrendingUp,
    title: "Lead-to-Demo Pipeline",
    desc: "Inbound lead captured, enriched with firmographic data, scored, routed to the right AE, and demo link sent automatically.",
  },
  {
    icon: RefreshCw,
    title: "New Hire Onboarding",
    desc: "Signed offer triggers IT provisioning, HRIS record creation, Slack channel invite and Day 1 checklist in parallel.",
  },
  {
    icon: Timer,
    title: "Monthly Close Accelerator",
    desc: "Revenue data reconciled, expenses categorised, reports generated and distributed to leadership at month-end automatically.",
  },
]

const impactMetrics = [
  { value: "30-40%", label: "Founder Time Reclaimed", sub: "from manual admin" },
  { value: "60%", label: "Hiring Admin Reduced", sub: "screening to onboarding" },
  { value: "3x", label: "Faster Monthly Close", sub: "weeks to days" },
  { value: "8-12 hrs", label: "Reporting Time Saved", sub: "per month" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI & Automation for Technology Scale-Ups",
  provider: { "@type": "Organization", name: "Automaly", url: "https://www.automaly.io" },
  description:
    "Scale revenue, protect runway and increase operational leverage. AI & Automation for technology scale-ups and startups.",
  url: "https://www.automaly.io/use-cases/tech-startups",
  areaServed: "GB",
  serviceType: "Business Process Automation",
}

export default function TechStartupsContent() {
  // Use RankedRight testimonial (tech startup) as it's most relevant
  const quote = clientQuotes[1]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative w-full bg-brand-purple">
        {/* Two-column layout: Text left, Image right */}
        <div className="mx-auto flex min-h-[600px] max-w-[1600px] flex-col lg:min-h-[85vh] lg:flex-row xl:min-h-[90vh] 2xl:min-h-[95vh]">
          {/* Left column - Text content */}
          <div className="relative z-10 flex flex-1 items-center px-6 pt-28 pb-8 lg:max-w-[55%] lg:pb-16 lg:pl-8 lg:pr-12 lg:pt-36 xl:pl-12 xl:pr-16 2xl:pl-16">
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
              <span className="text-white/80">Technology Scale-Ups</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Rocket className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                By Sector
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">Technology Scale-Ups</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Scale faster without scaling headcount. Automate revenue ops, people ops, finance and reporting so your team can focus on product and growth.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Technology scale-ups succeed through speed and focus. They stall
              through operational bottlenecks. Automation and AI enable founders to
              eliminate manual processes, accelerate growth and improve margins -
              without proportionally increasing headcount.
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
          
          {/* Right column - 3D Image (fully visible, no cropping) */}
          <div className="relative flex flex-1 items-center justify-center lg:min-w-[45%]">
            <div className="relative h-[300px] w-full sm:h-[400px] md:h-[450px] lg:h-full">
              <Image
                src="/images/ai-automation-for-tech-startups.webp"
                alt="3D isometric blocks representing AI automation building blocks"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-center lg:object-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              The Problem
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Growth Creates{" "}
              <span className="text-brand-purple">Operational Drag</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Technology companies adopt tools quickly but rarely connect them.
              The result is manual work that scales linearly with headcount.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {painPoints.map((point) => (
              <div key={point.title} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lavender text-brand-purple">
                  <point.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              The Solution
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Where Automation Delivers{" "}
              <span className="text-brand-purple">Operational Leverage</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Five high-impact areas where automation frees founder and team
              capacity across your scale-up.
            </p>
          </div>
          <SolutionCardGrid areas={automationAreas.map(({ icon, ...rest }) => rest)} />
        </div>
      </section>

      {/* Example Workflows */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Example Workflows
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Automation in{" "}
              <span className="text-brand-purple">Action</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {exampleWorkflows.map((wf) => (
              <div key={wf.title} className="rounded-2xl border border-brand-purple/20 bg-brand-lavender p-6 lg:p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                  <wf.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{wf.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Measurable Impact
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Results That{" "}
              <span className="text-brand-purple">Compound</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-brand-purple/20 bg-white p-6 text-center">
                <p className="text-3xl font-extrabold text-brand-purple">{m.value}</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{m.label}</p>
                <p className="mt-0.5 text-xs text-foreground/70">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-purple/20 bg-brand-lavender p-8 lg:p-12 text-center">
            <Quote className="mx-auto mb-6 h-8 w-8 text-brand-orange" />
            <blockquote className="text-lg font-medium leading-relaxed text-foreground italic text-pretty">
              {quote.quote}
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-foreground">
              {quote.name}
            </p>
            <p className="text-xs text-foreground/60">
              {quote.role}, {quote.company}
            </p>
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
              Start with Leverage.{" "}
              <span className="text-brand-purple">Not Complexity</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              We identify the highest-ROI automation opportunities first, build
              them fast, and iterate. No six-month roadmaps, no enterprise
              bloat.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Prioritise",
                desc: "We map your current workflows and identify the five to ten highest-impact automation opportunities based on time saved and revenue impact.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build, test and deploy automations in rapid sprints. Most workflows go live within one to two weeks.",
              },
              {
                step: "03",
                title: "Monitor & Optimise",
                desc: "Every automation is monitored for reliability and ROI. We optimise continuously and add new workflows as you scale.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-brand-purple/20 bg-white p-6 lg:p-8">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple text-white text-sm font-bold">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-brand-purple to-brand-purple/90 px-8 py-14 lg:px-16 lg:py-20">
            <Zap className="mx-auto mb-5 h-8 w-8 text-brand-orange" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl text-balance">
              Ready to Scale Without the Overhead?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 text-pretty">
              Book a discovery call and we will show you the five
              highest-impact automations for your scale-up.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CalendlyButton size="lg" variant="orange" calendlyType="assessment">
                Book Your Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </CalendlyButton>
              <Button size="lg" variant="outline" className="border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200" asChild>
                <Link href="/use-cases">
                  View All Use Cases
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
