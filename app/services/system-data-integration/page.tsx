import type { Metadata } from "next"
import Link from "next/link"
import { HeroBackground } from "@/components/hero-background"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  ArrowRight,
  ArrowLeft,
  Database,
  CheckCircle2,
  RefreshCw,
  Layers,
  Plug,
  ShieldCheck,
  GitMerge,
  BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "System & Data Integration | Connect. Unify. Accelerate. | Automaly",
  description:
    "Connect your systems, unify your data, and build the integration layer for AI and automation. Eliminate silos and manual workarounds with API integrations, data pipelines, and middleware solutions.",
  openGraph: {
    title:
      "System & Data Integration | Connect. Unify. Accelerate. | Automaly",
    description:
      "Connect your systems, unify your data, and build the integration layer for AI and automation. Eliminate silos and manual workarounds.",
    url: "https://www.automaly.io/services/system-data-integration",
  },
  alternates: {
    canonical: "https://www.automaly.io/services/system-data-integration",
  },
}

/* ── Capabilities ───────────────────────────────────────────────────── */

const capabilities = [
  {
    icon: Plug,
    title: "API & Application Integration",
    description:
      "Connect your CRM, ERP, marketing tools, and operational systems with robust API integrations to eliminate double handling and ensure seamless data flow.",
  },
  {
    icon: GitMerge,
    title: "Data Pipeline Development",
    description:
      "Build automated pipelines that extract, transform, and load data across systems, ensuring consistency and availability for decision-making.",
  },
  {
    icon: Layers,
    title: "Middleware & iPaaS Solutions",
    description:
      "Implement integration layers using tools like n8n, Make, and custom middleware to ensure maintainable connections between your applications.",
  },
  {
    icon: Database,
    title: "Data Consolidation & Migration",
    description:
      "Consolidate scattered data into unified structures, migrate between platforms, and establish a single source of truth for your data.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Data Synchronisation",
    description:
      "Ensure your systems are always in sync with real-time or near-real-time data, eliminating stale data and conflicting records.",
  },
  {
    icon: BarChart3,
    title: "Unified Reporting & Analytics",
    description:
      "Create centralised dashboards and reporting tools to surface valuable insights from integrated data sources, enabling informed decisions across your teams.",
  },
]

/* ── Results ─────────────────────────────────────────────────────────── */

const results = [
  { metric: "80%", label: "reduction in manual data entry" },
  { metric: "100%", label: "data consistency across systems" },
  { metric: "60%", label: "faster reporting and insights" },
  { metric: "Zero", label: "duplicate records across platforms" },
]

/* ── Who It's For ───────────────────────────────────────────────────── */

const audiences = [
  "Businesses with disconnected tools that don't share data effectively.",
  "Teams spending hours manually transferring information between systems.",
  "Organisations preparing their data infrastructure for AI and automation.",
  "Leaders seeking unified reporting but dealing with data spread across multiple platforms.",
]

export default function SystemDataIntegrationPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "System & Data Integration",
      description:
        "End-to-end system integration and data pipeline services including API connections, middleware solutions, data migration, and unified reporting.",
      provider: {
        "@type": "Organization",
        name: "Automaly",
        url: "https://www.automaly.io",
      },
      url: "https://www.automaly.io/services/system-data-integration",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.automaly.io" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.automaly.io/services" },
        { "@type": "ListItem", position: 3, name: "System & Data Integration", item: "https://www.automaly.io/services/system-data-integration" },
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
          src="/images/system-data-integration-hero.webp"
          alt="Isometric 3D illustration of hexagonal data modules with orange glowing integration pathways"
          fallbackColor="#5b21b6"
          overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(91, 33, 182, 0.7) 0%, rgba(91, 33, 182, 0.4) 60%, rgba(91, 33, 182, 0.2) 100%)"
        />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/services" className="flex items-center gap-1 transition-colors hover:text-brand-orange">
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>
            <span>/</span>
            <span className="text-white/80">System & Data Integration</span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Connect. Unify. Accelerate.
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="text-brand-orange">System & Data</span>{" "}
            <span className="text-white">Integration</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
            Your technology stack should work together, not against you. We
            connect your systems, unify your data, and build the integration
            layer that makes AI and automation possible. Say goodbye to
            silos and manual workarounds - your data will flow seamlessly
            and provide real-time insights for faster decision-making.
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
              The Problem with{" "}
              <span className="text-brand-purple">Disconnected Systems</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              As businesses grow, they often rely on multiple tools that weren
              {"'"}t designed to work together. This results in fragmented data,
              inconsistent reporting, and significant manual effort to bridge
              the gaps.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative rounded-2xl border border-red-200/60 bg-white p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">Disconnected Stack</h3>
              <ul className="space-y-3">
                {[
                  "Data trapped in silos, requiring manual copy-paste between systems",
                  "Conflicting records leading to errors in reporting",
                  "No single source of truth for key business metrics",
                  "AI and automation projects fail due to poor data foundations",
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
              <h3 className="mb-3 text-lg font-semibold text-foreground">Connected Stack</h3>
              <ul className="space-y-3">
                {[
                  "Data flows automatically between systems in real-time",
                  "A consistent view of customers, operations, and performance",
                  "Clean, AI-ready data that supports automation",
                  "Real-time insights and reporting with no manual effort",
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
          <p className="mb-4 text-sm text-foreground/70">Recognise the disconnect? We can fix it.</p>
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
              We provide end-to-end integration services that connect your
              technology and unify your data to unlock the full potential of AI
              and automation.
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
            <p className="mb-4 text-sm text-foreground/70">Want results like these for your business?</p>
            <CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
              Book Your Assessment <ArrowRight className="h-4 w-4" />
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* ── Our Integration Approach ─────────────────────────────────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Integration{" "}
              <span className="text-brand-purple">Approach</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", label: "Audit", detail: "Map your current systems, data flows, and integration gaps" },
              { step: "02", label: "Design", detail: "Architect the optimal integration layer and data model" },
              { step: "03", label: "Build", detail: "Develop connections, pipelines, and middleware" },
              { step: "04", label: "Monitor", detail: "Ongoing health checks, error handling, and optimisation" },
            ].map((phase) => (
              <div key={phase.step} className="rounded-xl border border-brand-purple/20 bg-brand-lavender p-6 text-center">
                <span className="mb-2 block text-3xl font-bold text-brand-orange">{phase.step}</span>
                <h3 className="text-lg font-semibold text-foreground">{phase.label}</h3>
                <p className="mt-1 text-sm text-foreground/60">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ────��────────────────────────────────────────── */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Who Is This{" "}
              <span className="text-brand-purple">For?</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-brand-purple/20 bg-white px-5 py-4">
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

      {/* ── Security callout ─────────────────────────────────────────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Built with Governance & Safety in Mind
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
            Every integration is built with security, data protection, and
            governance at its core. We implement encryption, access controls,
            and audit logging to ensure your data is protected at every
            connection point.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="brand-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Ready to Connect Your Systems?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
            Stop wrestling with disconnected tools and manual data transfers.
            Let{"'"}s build the integration layer your business needs to
            streamline operations and accelerate growth.
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
