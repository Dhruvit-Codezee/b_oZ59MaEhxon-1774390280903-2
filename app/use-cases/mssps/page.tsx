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
  ShieldAlert,
  Users,
  Timer,
  TrendingUp,
  Brain,
  Network,
  Search,
  Activity,
  Eye,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for MSSPs | Automaly",
  description:
    "Scale security operations, reduce analyst fatigue and increase service margin. AI & Automation for Managed Security Service Providers.",
  openGraph: {
    title: "AI & Automation for MSSPs | Automaly",
    description:
      "Scale security operations, reduce analyst fatigue and increase service margin. AI & Automation for Managed Security Service Providers.",
    url: "https://www.automaly.io/use-cases/mssps",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/mssps",
  },
}

/* Pain points data */

const painPoints = [
  { icon: Activity, text: "Log ingestion increasing exponentially with portfolio growth" },
  { icon: Eye, text: "Alert noise overwhelming analyst teams" },
  { icon: Clock, text: "Manual triage consuming disproportionate time" },
  { icon: Users, text: "New client onboarding requiring heavy configuration" },
  { icon: Gauge, text: "SLA monitoring becoming increasingly complex" },
  { icon: BarChart3, text: "Reporting becoming resource-intensive across tenants" },
]

/* Automation areas data */

const automationAreas = [
  {
    number: "01",
    category: "Process" as const,
    icon: Search,
    title: "Automated Alert Triage & Enrichment",
    problem:
      "Manual triage on low-value alerts wastes analyst capacity.",
    solutions: [
      "Aggregate alerts across multi-tenant SIEM",
      "De-duplicate and correlate events",
      "Enrich with threat intelligence feeds",
      "Apply risk scoring by client context",
      "Auto-classify low-risk events",
    ],
    roi: "40-60% less false-positive handling improves client-to-analyst ratios without degrading SLAs.",
  },
  {
    number: "02",
    category: "Process" as const,
    icon: ShieldAlert,
    title: "SOAR & Incident Response Playbook Automation",
    problem:
      "Manual coordination slows containment - threatens SLA and increases breach risk.",
    solutions: [
      "Triggered response playbooks",
      "Endpoint isolation workflows",
      "Credential resets and firewall updates",
      "Automated evidence capture",
      "Ticket updates across ITSM systems",
    ],
    roi: "Lower MTTR improves SLA compliance and strengthens retention. Faster containment cuts breach costs.",
  },
  {
    number: "03",
    category: "Coordination" as const,
    icon: Network,
    title: "Multi-Tenant Workflow Orchestration",
    problem:
      "Configuration drift and inconsistent playbooks create tenant risk.",
    solutions: [
      "Route incidents by client environment",
      "Apply client-specific playbooks",
      "Enforce tenant-level access controls",
      "Sync tickets across internal/client systems",
      "Monitor SLA thresholds automatically",
    ],
    roi: "Better segregation reduces errors and accelerates client onboarding - faster revenue ramp.",
  },
  {
    number: "04",
    category: "Compliance" as const,
    icon: ClipboardList,
    title: "Compliance & Reporting Automation",
    problem:
      "Manual reporting consumes analyst time, delays delivery and compresses margin.",
    solutions: [
      "Automated security posture dashboards",
      "Scheduled compliance reporting (ISO, SOC2, NIST)",
      "Continuous control monitoring",
      "Evidence collection workflows",
      "Executive-ready incident summaries",
    ],
    roi: "50%+ less prep time improves margin and increases perceived service quality.",
  },
  {
    number: "05",
    category: "Analytics" as const,
    icon: Brain,
    title: "Threat Intelligence & Anomaly Detection AI",
    problem:
      "Rule-based detection alone misses emerging attacks.",
    solutions: [
      "Detect anomalous behaviour patterns",
      "Identify lateral movement indicators",
      "Predict emerging risk vectors",
      "Prioritise high-impact threats",
      "Continuously learn from analyst feedback",
    ],
    roi: "Better threat prioritisation reduces alert fatigue and boosts detection - strengthens retention and upsell.",
  },
]

/* Example workflows */

const exampleWorkflows = [
  "Automated SIEM alert correlation pipelines",
  "SOAR-based incident response orchestration",
  "Multi-tenant ticket routing automation",
  "SLA monitoring dashboards with real-time escalation",
  "AI-assisted log anomaly detection",
  "Automated compliance reporting engines",
  "Client onboarding and environment provisioning automation",
  "Threat intelligence feed aggregation and enrichment",
]

/* Impact metrics */

const impactMetrics = [
  { stat: "Minutes", label: "From alert to automated containment", icon: ShieldAlert },
  { stat: "Higher", label: "Client-to-analyst ratios at scale", icon: Users },
  { stat: "Real-Time", label: "Multi-tenant security dashboards", icon: Network },
  { stat: "Weeks", label: "Typical client onboarding timeline", icon: Clock },
  { stat: "24/7", label: "Automated monitoring without fatigue", icon: Search },
  { stat: "Scalable", label: "Growth without proportional hiring", icon: DollarSign },
]

/* JSON-LD */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for MSSPs",
    description:
      "Scale security operations, reduce analyst fatigue and increase service margin. AI & Automation for Managed Security Service Providers.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/mssps",
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
        name: "MSSPs",
        item: "https://www.automaly.io/use-cases/mssps",
      },
    ],
  },
]

export default function MSSPsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - using contain on larger screens for proportionate sizing */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-cover lg:bg-contain lg:bg-right"
          style={{ 
            backgroundImage: "url('/images/ai-automation-for-mssps.webp')",
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
              <span className="text-white/80">MSSPs</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                By Sector
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">MSSPs</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Scale security operations, reduce analyst fatigue and increase service margin.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Managed Security Service Providers operate in a high-volume,
              high-pressure environment. Alert volume grows. Threat sophistication
              increases. Client expectations tighten. Margins remain constrained.
              Automation and AI allow MSSPs to increase detection capacity,
              standardise response and scale multi-tenant operations without
              proportionally increasing analyst headcount.
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
              The MSSP{" "}
              <span className="text-brand-purple">Scaling Challenge</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              As client portfolios grow, log ingestion increases exponentially,
              alert noise overwhelms analysts, manual triage consumes
              disproportionate time and SLA monitoring becomes complex. Most
              MSSPs experience alert fatigue, inconsistent playbook execution,
              delayed incident response and high analyst turnover.
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
              Without automation, scaling requires hiring more analysts, compressing margin. Manual triage, fragmented tooling across SIEM,
              SOAR and ticketing platforms, and inconsistent playbook execution
              create operational bottlenecks that limit growth.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              Margin erodes as the business scales.
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
              <span className="text-brand-purple">MSSP Architecture</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Automation for MSSPs must be structured, secure and multi-tenant
              aware. It enhances - not replaces - analyst expertise.
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
              <span className="text-brand-purple">MSSPs</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              When automation removes friction from your security operations, service capacity compounds across every client engagement.
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
            These outcomes represent the compound effect of removing friction at every stage - from alert to resolution.
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
              Architecture First.{" "}
              <span className="text-brand-purple">Automation Second</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              MSSP automation must respect multi-tenant security boundaries,
              credential management, API rate limits and compliance framework
              requirements.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Prioritise",
                desc: "We assess alert volume, false-positive rates, MTTR/MTTD benchmarks, SIEM/SOAR maturity, SLA structure, and analyst workload distribution to identify the highest-impact opportunities.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build and deploy MSSP automations in rapid cycles. Most workflows go live within one to two weeks, with monitoring for SLA compliance and detection accuracy.",
              },
              {
                step: "03",
                title: "Monitor & Scale",
                desc: "Every automation is tracked for operational load reduction and detection capability. We optimise continuously and add workflows as your client portfolio grows.",
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
                Scale Your Security Operations Intelligently
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Ready to identify the highest-impact workflows inside your MSSP
                architecture?
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
