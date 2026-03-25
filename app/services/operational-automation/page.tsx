import type { Metadata } from "next"
import Link from "next/link"
import { HeroBackground } from "@/components/hero-background"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  ArrowRight,
  ArrowLeft,
  Settings,
  CheckCircle2,
  ClipboardList,
  RefreshCw,
  Users,
  FileText,
  Clock,
  BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Operational Automation | Automaly",
  description:
    "Streamline internal operations with intelligent automation. From employee onboarding to financial processes, we eliminate manual bottlenecks and build scalable operational workflows.",
  openGraph: {
    title: "Operational Automation | Automaly",
    description:
      "Streamline internal operations with intelligent automation. Eliminate manual bottlenecks and build scalable workflows.",
    url: "https://www.automaly.io/services/operational-automation",
  },
  alternates: {
    canonical: "https://www.automaly.io/services/operational-automation",
  },
}

/* ── Capabilities ───────────────────────────────────────────────────── */

const capabilities = [
  {
    icon: Users,
    title: "Employee Onboarding & Offboarding",
    description:
      "Automated workflows that provision accounts, assign training, schedule introductions, and manage equipment - ensuring consistency for every new starter.",
  },
  {
    icon: FileText,
    title: "Document & Approval Workflows",
    description:
      "Route documents for review, collect approvals, and maintain audit trails automatically. Eliminate bottlenecks caused by manual handoffs and email chains.",
  },
  {
    icon: ClipboardList,
    title: "Task & Process Management",
    description:
      "Automated task assignment, deadline tracking, and escalation workflows. Ensure nothing falls through the cracks as operations scale.",
  },
  {
    icon: RefreshCw,
    title: "Finance & Back-Office Automation",
    description:
      "Streamline invoicing, expense approvals, reconciliation, and reporting. Reduce manual data handling and accelerate month-end close processes.",
  },
  {
    icon: Clock,
    title: "Scheduling & Resource Allocation",
    description:
      "Automated scheduling, capacity planning, and resource allocation across teams and projects. Optimise utilisation and reduce coordination overhead.",
  },
  {
    icon: BarChart3,
    title: "Operational Reporting & Dashboards",
    description:
      "Real-time dashboards that surface key operational metrics. Automated reporting that eliminates manual data collection and presentation.",
  },
]

/* ── Results ─────────────────────────────────────────────────────────── */

const results = [
  { metric: "50%", label: "reduction in manual operational tasks" },
  { metric: "75%", label: "faster employee onboarding" },
  { metric: "30%", label: "improvement in process compliance" },
  { metric: "4x", label: "faster approval turnaround times" },
]

/* ── Who It's For ───────────────────────────────────────────────────── */

const audiences = [
  "Operations teams overwhelmed by manual, repetitive processes.",
  "Growing businesses where operational overhead is outpacing revenue growth.",
  "HR and finance teams managing high volumes of approvals and documentation.",
  "Leaders seeking visibility into operational performance and bottlenecks.",
]

export default function OperationalAutomationPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Operational Automation",
      description:
        "End-to-end operational automation services including onboarding, document workflows, finance automation, and operational reporting.",
      provider: {
        "@type": "Organization",
        name: "Automaly",
        url: "https://www.automaly.io",
      },
      url: "https://www.automaly.io/services/operational-automation",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.automaly.io" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.automaly.io/services" },
        { "@type": "ListItem", position: 3, name: "Operational Automation", item: "https://www.automaly.io/services/operational-automation" },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - optimized with Next.js Image priority loading */}
        <HeroBackground
          src="/images/operational-automation-hero.webp"
          alt="Isometric 3D illustration of interconnected operational modules with golden workflow pathways"
          fallbackColor="#7c3aed"
          overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(124, 58, 237, 0.7) 0%, rgba(124, 58, 237, 0.4) 60%, rgba(124, 58, 237, 0.2) 100%)"
        />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/services" className="flex items-center gap-1 transition-colors hover:text-brand-orange">
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>
            <span>/</span>
            <span className="text-white/80">Operational Automation</span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Streamline. Scale. Sustain.
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="text-brand-orange">Operational</span>{" "}
            <span className="text-white">Automation</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
            As businesses grow, operational complexity grows faster. Manual
            processes that once worked become bottlenecks, consuming time and
            introducing risk. We automate internal operations so your teams
            can focus on strategic work instead of administrative overhead.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
<CalendlyButton size="lg" variant="orange" calendlyType="assessment" className="gap-2">
                Book Your Assessment
                <ArrowRight className="h-4 w-4" />
              </CalendlyButton>
            <Button size="lg" variant="outline" asChild className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* ── The Challenge ─────────────────────────────────────────────── */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              The Cost of{" "}
              <span className="text-brand-purple">Manual Operations</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              When every process depends on manual effort, growth creates drag
              instead of momentum. Errors multiply, compliance gaps appear, and
              teams spend more time on admin than on the work that matters.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative rounded-2xl border border-red-200/60 bg-white p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">Without Automation</h3>
              <ul className="space-y-3">
                {[
                  "Teams buried in repetitive admin instead of strategic work",
                  "Inconsistent processes leading to errors and compliance gaps",
                  "Slow approval cycles delaying decisions and deliverables",
                  "No visibility into operational performance or bottlenecks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl border border-brand-purple/15 bg-white p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">With Operational Automation</h3>
              <ul className="space-y-3">
                {[
                  "Consistent, reliable processes that scale with the business",
                  "Automated compliance and audit trails built into every workflow",
                  "Instant routing, approvals, and escalations without manual chasing",
                  "Real-time dashboards showing operational health and capacity",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/60">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-foreground/70">Drowning in manual processes? We can fix it.</p>
<CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
                  Book Your Assessment <ArrowRight className="h-4 w-4" />
                </CalendlyButton>
        </div>
      </section>

      {/* ── What We Deliver ──────────────────────────────────────────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              What We{" "}
              <span className="text-brand-purple">Deliver</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              End-to-end automation across your internal operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="group flex flex-col rounded-2xl border border-brand-purple/20 bg-brand-lavender p-7 transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outlinePurple" className="gap-2">
              <Link href="/services/ai-readiness-assessment">
                See How This Applies to You <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Typical{" "}
              <span className="text-brand-purple">Results</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-brand-purple/20 bg-white p-6 text-center">
                <span className="text-3xl font-bold text-brand-purple">{r.metric}</span>
                <p className="mt-2 text-sm text-foreground/60">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-foreground/70">Want to reclaim hours every week?</p>
            <CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
              Book Your Assessment <ArrowRight className="h-4 w-4" />
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* ── Who It's For ──────────────���─��─���─��──���──────��─����������─��─���������������──────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Who Is This{" "}
              <span className="text-brand-purple">For?</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-purple/20 bg-brand-lavender px-5 py-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                <span className="text-sm font-medium leading-relaxed text-foreground/80">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-foreground/70">Sound like your team?</p>
            <Button asChild className="gap-2 bg-brand-purple text-white hover:bg-brand-purple/90">
              <Link href="/services/ai-readiness-assessment">
                Get Your AI Readiness Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="brand-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Ready to Eliminate Operational Bottlenecks?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
            Stop letting manual processes hold your business back. Let{"'"}s build
            the operational infrastructure that scales with you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
<CalendlyButton size="lg" variant="orange" calendlyType="assessment" className="gap-2">
                Book Your Assessment
                <ArrowRight className="h-4 w-4" />
              </CalendlyButton>
            <Button size="lg" variant="outline" asChild className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
