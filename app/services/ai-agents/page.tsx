import type { Metadata } from "next"
import Link from "next/link"
import { HeroBackground } from "@/components/hero-background"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  ArrowRight,
  ArrowLeft,
  Bot,
  CheckCircle2,
  MessageSquare,
  FileSearch,
  Workflow,
  ShieldCheck,
  Layers,
  Cpu,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "AI Agent Development | Intelligent Automation, Purpose-Built | Automaly",
  description:
    "Custom AI agents that reason, adapt, and act across your systems. Purpose-built for customer support, document processing, workflow orchestration, and intelligent automation.",
  openGraph: {
    title:
      "AI Agent Development | Intelligent Automation, Purpose-Built | Automaly",
    description:
      "Custom AI agents that reason, adapt, and act across your systems. Purpose-built for customer support, document processing, and workflow orchestration.",
    url: "https://www.automaly.io/services/ai-agents",
  },
  alternates: {
    canonical: "https://www.automaly.io/services/ai-agents",
  },
}

/* ── Capabilities ───────────────────────────────────────────────────── */

const capabilities = [
  {
    icon: MessageSquare,
    title: "Customer Support Agents",
    description:
      "Handle routine inquiries, triage issues, and escalate complex cases, reducing response times and support costs.",
  },
  {
    icon: FileSearch,
    title: "Document Processing Agents",
    description:
      "Extract, classify, and route data from documents, emails, and forms to automate data entry, compliance checks, and approval workflows.",
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration Agents",
    description:
      "Manage multi-step processes across systems, including approvals and real-time triggers based on business rules.",
  },
  {
    icon: Cpu,
    title: "Data Analysis & Reporting Agents",
    description:
      "Query your data, generate insights, and produce reports on demand, delivering actionable answers in natural language.",
  },
  {
    icon: Bot,
    title: "Internal Knowledge Assistants",
    description:
      "Provide instant answers to internal questions by leveraging your documentation, policies, and processes.",
  },
  {
    icon: Layers,
    title: "Multi-Agent Systems",
    description:
      "Complex AI systems where agents collaborate to solve multi-faceted problems, from lead qualification to case management.",
  },
]

/* ── Results ─────────────────────────────────────────────────────────── */

const results = [
  { metric: "70%", label: "reduction in routine inquiry handling time" },
  { metric: "5x", label: "faster document processing" },
  { metric: "90%", label: "accuracy in classification tasks" },
  { metric: "24/7", label: "availability without additional headcount" },
]

/* ── Who It's For ───────────────────────────────────────────────────── */

const audiences = [
  "Organisations handling high volumes of repetitive inquiries or requests.",
  "Teams spending significant time on document processing and data extraction.",
  "Businesses looking to scale operations without proportional headcount increase.",
  "Leaders aiming to augment their workforce with intelligent automation.",
]

export default function AIAgentsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Agent Development",
      description:
        "Custom AI agent development for customer support, document processing, workflow orchestration, and intelligent automation.",
      provider: {
        "@type": "Organization",
        name: "Automaly",
        url: "https://www.automaly.io",
      },
      url: "https://www.automaly.io/services/ai-agents",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.automaly.io" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.automaly.io/services" },
        { "@type": "ListItem", position: 3, name: "AI Agents", item: "https://www.automaly.io/services/ai-agents" },
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
          src="/images/ai-agents-hero.webp"
          alt="Isometric 3D illustration of AI neural network with purple blocks and orange circuit pathways"
          fallbackColor="#4a1d96"
          overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(74, 29, 150, 0.7) 0%, rgba(74, 29, 150, 0.4) 60%, rgba(74, 29, 150, 0.2) 100%)"
        />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/services" className="flex items-center gap-1 transition-colors hover:text-brand-orange">
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>
            <span>/</span>
            <span className="text-white/80">AI Agents</span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Intelligent Automation, Purpose-Built
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="text-brand-orange">AI Agent</span>{" "}
            <span className="text-white">Development</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
            AI agents go beyond simple automation. They reason, adapt, and
            act across your systems, handling complex tasks that
            traditionally required human intervention. At Automaly, we
            design and build custom AI agents tailored to your processes,
            data, and business objectives.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" asChild variant="orange" className="gap-2">
              <Link href="/contact">
                Discuss Your Use Case
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
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
              Beyond Basic{" "}
              <span className="text-brand-purple">Automation</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Traditional automation follows rigid rules. AI agents understand
              context, make decisions, and handle exceptions that rule-based
              systems cannot.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative rounded-2xl border border-red-200/60 bg-white p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">Traditional Automation</h3>
              <ul className="space-y-3">
                {[
                  "Breaks when inputs deviate from expected formats",
                  "Cannot handle ambiguous or unstructured data",
                  "Requires manual updates when processes change",
                  "Limited to predefined, linear workflows",
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
              <h3 className="mb-3 text-lg font-semibold text-foreground">AI Agents</h3>
              <ul className="space-y-3">
                {[
                  "Understand context and adapt to variable inputs",
                  "Process unstructured data (documents, emails, conversations)",
                  "Learn and improve from feedback and new information",
                  "Orchestrate multi-step processes across multiple systems",
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
          <p className="mb-4 text-sm text-foreground/70">Ready to go beyond basic automation?</p>
          <Button asChild variant="orange" className="gap-2">
            <Link href="/services/ai-readiness-assessment">
              Discuss Your Use Case <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ── What We Build ────────────────────────────────────────────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              What We{" "}
              <span className="text-brand-purple">Build</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Custom AI agents designed around your specific business processes and data.
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
            <Button asChild variant="orange" className="gap-2">
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

      {/* ─�� Our Approach ──����─��─────────────���─────────────────────────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our{" "}
              <span className="text-brand-purple">Approach</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", label: "Define", detail: "Map the use case, data sources, and success criteria" },
              { step: "02", label: "Build", detail: "Develop and train agents using your data and processes" },
              { step: "03", label: "Test", detail: "Rigorous testing with edge cases and real-world scenarios" },
              { step: "04", label: "Deploy", detail: "Integrate into your environment with monitoring and guardrails" },
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

      {/* ── Who It's For ─────────────────────────────────────────────── */}
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
        </div>
      </section>

      {/* ── Safety ────────────────────────────────────────────────────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Built with Governance & Safety in Mind
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
            Each agent we build includes human-in-the-loop controls, output
            validation, audit logging, and configurable guardrails. We ensure AI
            agents operate within your defined boundaries and meet governance
            requirements.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="brand-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Ready to Build Intelligent Agents?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
            Tell us about the tasks consuming your team{"'"}s time, and we
            {"'"}ll show you how custom AI agents can handle the complexity,
            freeing up your team for higher-value work.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild variant="orange" className="gap-2">
              <Link href="/contact">
                Discuss Your Use Case
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
