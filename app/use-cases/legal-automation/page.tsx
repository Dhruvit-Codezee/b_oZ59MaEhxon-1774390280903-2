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
  Zap,
  BarChart3,
  DollarSign,
  Gauge,
  ClipboardList,
  Quote,
  Scale,
  FileCheck,
  FileSearch,
  Inbox,
  BookOpen,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for Legal | Automaly",
  description:
    "Automate document workflows, approvals, compliance tracking and legal operations to strengthen governance while enabling the business to move faster.",
  openGraph: {
    title: "AI & Automation for Legal | Automaly",
    description:
      "Automate document workflows, approvals, compliance tracking and legal operations to strengthen governance while enabling the business to move faster.",
    url: "https://www.automaly.io/use-cases/legal-automation",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/legal-automation",
  },
}

/* Pain points data */

const painPoints = [
  { icon: FileText, text: "Manual contract generation consuming legal time" },
  { icon: ClipboardList, text: "Email-based approval chains creating delays" },
  { icon: AlertTriangle, text: "Version control issues across agreements" },
  { icon: ShieldCheck, text: "Spreadsheet-based compliance tracking" },
  { icon: BookOpen, text: "Repetitive NDAs and standard agreements" },
  { icon: Clock, text: "Manual policy distribution and tracking" },
]

/* Automation areas data */

const automationAreas = [
  {
    number: "01",
    category: "Process" as const,
    icon: FileCheck,
    title: "Contract Generation & Template Automation",
    problem:
      "Manual drafting wastes advisory time and introduces clause inconsistency.",
    solutions: [
      "Generate contracts from approved templates",
      "Insert dynamic clauses by deal type",
      "Enforce approved fallback language",
      "Maintain centralised template control",
      "Track document version history",
    ],
    roi: "40-60% less drafting time on NDAs/MSAs. Dozens of monthly contracts close faster.",
  },
  {
    number: "02",
    category: "Coordination" as const,
    icon: Scale,
    title: "Approval Workflow & Contract Lifecycle Automation",
    problem:
      "Contracts stall in inboxes without structured routing or audit trails.",
    solutions: [
      "Threshold-based approval routing",
      "Auto-reminders for stalled approvals",
      "Centralised contract repositories",
      "Expiry alerts and renewal triggers",
      "Structured audit trails",
    ],
    roi: "20-30% faster approvals shorten sales cycles and accelerate revenue realisation.",
  },
  {
    number: "03",
    category: "Compliance" as const,
    icon: ShieldCheck,
    title: "Compliance & Regulatory Tracking",
    problem:
      "Manual tracking leaves acknowledgements untracked and audit prep reactive.",
    solutions: [
      "Track policy acknowledgements",
      "Monitor regulatory deadlines",
      "Trigger periodic compliance reviews",
      "Maintain audit-ready documentation",
      "Flag missing docs automatically",
    ],
    roi: "50%+ less audit prep lowers compliance overhead and regulatory penalty risk.",
  },
  {
    number: "04",
    category: "Coordination" as const,
    icon: Inbox,
    title: "Legal Request Intake & Advisory Workflow",
    problem:
      "Without triage, low-priority queries consume high-risk matter capacity.",
    solutions: [
      "Structured request submission forms",
      "Auto-prioritise by risk",
      "Route to appropriate counsel",
      "SLA tracking",
      "Report on volume and trends",
    ],
    roi: "Better triage reduces response time and prevents business delays across departments.",
  },
  {
    number: "05",
    category: "Analytics" as const,
    icon: BarChart3,
    title: "Risk Register & Governance Automation",
    problem:
      "Manual risk registers become outdated - leadership lacks real-time visibility.",
    solutions: [
      "Update risk registers dynamically",
      "Track mitigation actions",
      "Generate board-ready risk reports",
      "Trigger review cycles automatically",
    ],
    roi: "Real-time visibility reduces executive blind spots and strengthens board decisions.",
  },
]

/* Example workflows */

const exampleWorkflows = [
  "Automated NDA and MSA generation",
  "Contract lifecycle management workflows",
  "Structured approval routing engines",
  "Regulatory deadline tracking dashboards",
  "Policy distribution and acknowledgement automation",
  "Legal intake and prioritisation systems",
  "AI-powered clause extraction and risk flagging",
  "Obligation tracking and renewal notification pipelines",
]

/* Impact metrics */

const impactMetrics = [
  { stat: "Dozens", label: "Contracts generated from templates monthly", icon: FileCheck },
  { stat: "Real-Time", label: "Risk exposure dashboards for leadership", icon: BarChart3 },
  { stat: "Audit-Ready", label: "Documentation maintained automatically", icon: ShieldCheck },
  { stat: "Weeks", label: "Typical deployment timeline", icon: Gauge },
  { stat: "Zero", label: "Stalled approvals without escalation", icon: Inbox },
  { stat: "Single", label: "Repository for all contract versions", icon: Scale },
]

/* JSON-LD */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for Legal",
    description:
      "Automate document workflows, approvals, compliance tracking and legal operations to strengthen governance while enabling the business to move faster.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/legal-automation",
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
        name: "AI & Automation for Legal",
        item: "https://www.automaly.io/use-cases/legal-automation",
      },
    ],
  },
]

export default function LegalAutomationPage() {
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
            backgroundImage: "url('/images/ai-automation-for-legal.webp')",
            backgroundColor: '#2a1066',
          }}
        />
        {/* Dark gradient overlay - left-to-right for text contrast */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to right, rgba(42, 16, 102, 0.95) 0%, rgba(42, 16, 102, 0.85) 30%, rgba(42, 16, 102, 0.5) 55%, rgba(42, 16, 102, 0.2) 75%, transparent 100%)',
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
              <span className="text-white/80">AI & Automation for Legal</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Scale className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Use Case
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">Legal</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Increase control, reduce administrative burden and accelerate
              contract velocity.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Automate document workflows, approvals, compliance tracking and
              legal operations to strengthen governance while enabling the
              business to move faster.
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
              The Growing Operational Load on{" "}
              <span className="text-brand-purple">Legal Teams</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Legal teams are expected to protect the organisation from risk,
              maintain regulatory compliance, draft and review contracts, support
              commercial negotiations and respond to internal advisory requests.
              Yet much of their time is consumed by manual, repetitive processes.
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
              Without structured automation, contract turnaround slows revenue,
              risk exposure increases through missed clauses, approval
              bottlenecks delay deals and documentation becomes fragmented.
              Legal becomes a perceived blocker rather than an enabler.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              Legal automation introduces process discipline and visibility
              without compromising oversight.
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
              Where Legal Automation Delivers{" "}
              <span className="text-brand-purple">Measurable Value</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Legal automation focuses on standardisation, governance and
              structured workflows. It reduces repetitive effort while
              increasing control.
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
              When automation removes friction from your legal function, governance capacity compounds across every contract and compliance cycle.
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
            These outcomes represent the compound effect of removing friction at every stage - from draft to governance.
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
              Governance First.{" "}
              <span className="text-brand-purple">Automation Second</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              We assess contract volumes, compliance exposure, governance gaps
              and friction between legal and commercial teams before building
              anything.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Prioritise",
                desc: "We map contract bottlenecks, repetitive drafting workloads, compliance exposure areas, and governance reporting gaps to identify the highest-impact opportunities.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build and deploy legal automations in rapid cycles. Most workflows go live within one to two weeks, with monitoring for accuracy and compliance.",
              },
              {
                step: "03",
                title: "Monitor & Strengthen",
                desc: "Every automation is tracked for governance impact and efficiency gains. We optimise continuously and add workflows as legal complexity grows.",
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
                Build a Legal Function That Enables Growth
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Start with an Automation & AI Assessment to identify the
                highest-impact legal workflows to automate.
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
