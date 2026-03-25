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
  Shield,
  Eye,
  Lock,
  Bug,
  Fingerprint,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Automation for Cybersecurity | Automaly",
  description:
    "Automate detection, response, compliance and security operations to reduce risk exposure while increasing operational efficiency.",
  openGraph: {
    title: "AI & Automation for Cybersecurity | Automaly",
    description:
      "Automate detection, response, compliance and security operations to reduce risk exposure while increasing operational efficiency.",
    url: "https://www.automaly.io/use-cases/cybersecurity-automation",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases/cybersecurity-automation",
  },
}

/* Pain points data */

const painPoints = [
  { icon: FileText, text: "Manual log review consuming analyst time" },
  { icon: ClipboardList, text: "Spreadsheet-based risk registers" },
  { icon: AlertTriangle, text: "Email-driven incident coordination" },
  { icon: ShieldCheck, text: "Static compliance documentation" },
  { icon: Bug, text: "Reactive vulnerability management" },
  { icon: Clock, text: "Security teams understaffed relative to threat exposure" },
]

/* Automation areas data */

const automationAreas = [
  {
    number: "01",
    category: "Process" as const,
    icon: Eye,
    title: "Security Operations (SOC) Workflow Automation",
    problem:
      "Manual triage drowns teams in false positives - genuine threats get missed.",
    solutions: [
      "Aggregate logs across endpoints, cloud and network",
      "Auto-classify alerts by severity",
      "Enrich with contextual threat intelligence",
      "Trigger incident response playbooks",
      "Escalate high-risk incidents immediately",
    ],
    roi: "40-60% less time on false positives reclaims substantial analyst capacity for real threats.",
  },
  {
    number: "02",
    category: "Process" as const,
    icon: Shield,
    title: "Incident Response Automation",
    problem:
      "Manual coordination delays containment - every hour increases breach impact.",
    solutions: [
      "Pre-configured incident response playbooks",
      "Auto-isolate compromised endpoints",
      "Real-time stakeholder notifications",
      "Forensic data capture workflows",
      "Post-incident reporting generation",
    ],
    roi: "Hours saved in MTTC materially reduce downtime, fines and reputational damage.",
  },
  {
    number: "03",
    category: "Process" as const,
    icon: Bug,
    title: "Vulnerability & Patch Management Automation",
    problem:
      "Manual tracking creates exposure - teams waste time while critical exploits remain.",
    solutions: [
      "Continuously scan infrastructure",
      "Prioritise vulnerabilities by risk score",
      "Auto-assign remediation tasks",
      "Track patch completion",
      "Generate compliance documentation",
    ],
    roi: "Faster remediation lowers exploit risk. Preventing one ransomware incident offsets years of investment.",
  },
  {
    number: "04",
    category: "Compliance" as const,
    icon: ClipboardList,
    title: "Compliance & Governance Automation",
    problem:
      "Manual compliance tracking is slow and prone to gaps that create penalties.",
    solutions: [
      "Automated control monitoring",
      "Continuous compliance checks",
      "Auto-update risk registers",
      "Evidence collection for audits",
      "Policy acknowledgement tracking",
    ],
    roi: "50%+ less audit prep reduces compliance overhead and regulatory risk.",
  },
  {
    number: "05",
    category: "Compliance" as const,
    icon: Fingerprint,
    title: "Access & Identity Management Automation",
    problem:
      "Orphaned accounts and excessive privileges create exploitable attack surfaces.",
    solutions: [
      "Auto-provision and deprovision access",
      "Enforce least-privilege rules",
      "Detect privilege escalation",
      "Monitor anomalous login behaviour",
      "Trigger MFA workflows",
    ],
    roi: "Automated deprovisioning reduces insider risk. Fewer misconfigurations lower breach probability.",
  },
]

/* Example workflows */

const exampleWorkflows = [
  "Automated incident triage and escalation pipelines",
  "AI-driven log analysis and anomaly detection",
  "Integrated SIEM orchestration workflows",
  "Automated compliance reporting dashboards",
  "Risk scoring engines for vulnerability prioritisation",
  "Identity lifecycle management automation",
  "Phishing simulation and awareness campaign automation",
  "Automated patch management and deployment tracking",
]

/* Impact metrics */

const impactMetrics = [
  { stat: "Minutes", label: "From alert to automated containment", icon: Shield },
  { stat: "24/7", label: "Continuous monitoring without fatigue", icon: Eye },
  { stat: "Audit-Ready", label: "Evidence collected automatically", icon: ClipboardList },
  { stat: "Weeks", label: "Typical deployment timeline", icon: Gauge },
  { stat: "Real-Time", label: "Threat intelligence across all endpoints", icon: AlertTriangle },
  { stat: "Zero", label: "Manual deprovisioning gaps", icon: Fingerprint },
]

/* JSON-LD */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI & Automation for Cybersecurity",
    description:
      "Automate detection, response, compliance and security operations to reduce risk exposure while increasing operational efficiency.",
    provider: {
      "@type": "Organization",
      name: "Automaly",
      url: "https://www.automaly.io",
    },
    url: "https://www.automaly.io/use-cases/cybersecurity-automation",
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
        name: "AI & Automation for Cybersecurity",
        item: "https://www.automaly.io/use-cases/cybersecurity-automation",
      },
    ],
  },
]

export default function CybersecurityAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - using contain on larger screens to show full image without cropping */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-cover lg:bg-contain lg:bg-right"
          style={{ 
            backgroundImage: "url('/images/ai-automation-for-cybersecurity.webp')",
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
              <span className="text-white/80">AI & Automation for Cybersecurity</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Use Case
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation for{" "}
              <span className="text-brand-orange">Cybersecurity</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/90 text-pretty">
              Strengthen security posture, reduce response time and embed
              resilience at scale.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 text-pretty">
              Automate detection, response, compliance and security operations to
              reduce risk exposure while increasing operational efficiency.
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
              The Modern Security{" "}
              <span className="text-brand-purple">Reality</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Threat volume is increasing. Attack sophistication is accelerating.
              Regulatory pressure is intensifying. Yet most organisations still
              rely on manual processes that cannot scale with the threat landscape.
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
              Without automation, alert fatigue increases, response times slow,
              compliance becomes documentation-heavy and security becomes reactive
              rather than proactive. As infrastructure grows, attack surface expands.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              Cyber security automation is not about replacing analysts. It is
              about augmenting and scaling defensive capability.
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
              Where Cybersecurity Automation Delivers{" "}
              <span className="text-brand-purple">Structural Protection</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Automation enables consistent, real-time and policy-driven security
              operations that scale with your infrastructure.
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
              Organisations implementing structured cybersecurity automation
              When automation removes friction from your security operations, protection compounds across every layer of defence.
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
            These outcomes represent the compound effect of removing friction at every stage - from detection to resolution.
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
                Security Architecture First.{" "}
                <span className="text-brand-purple">Automation Second.</span>
              </h2>
            </div>

            <div className="rounded-2xl border border-brand-purple/20 bg-white p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-purple mb-4">
                Before implementation, we evaluate
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Current detection capability",
                  "Alert volume and false-positive rates",
                  "Mean time to detect (MTTD) and contain (MTTC)",
                  "Compliance obligations and control maturity",
                  "Identity and access governance gaps",
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
                  Only initiatives that measurably reduce risk or operational load
                  move into development.
                </p>
                <p className="mt-1 text-sm text-foreground/60">
                  This ensures automation strengthens security architecture rather
                  than introducing new vulnerabilities.
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
                Build a Security Function That Scales with Infrastructure
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Start with an Automation & AI Assessment to identify the
                highest-impact cybersecurity workflows to automate.
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
