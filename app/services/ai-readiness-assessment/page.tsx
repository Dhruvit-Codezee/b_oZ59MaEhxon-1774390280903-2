import type { Metadata } from "next"
import Link from "next/link"
import { HeroBackground } from "@/components/hero-background"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  ArrowRight,
  ArrowLeft,
  ClipboardCheck,
  CheckCircle2,
  Workflow,
  Database,
  ShieldCheck,
  Target,
  Layers,
  Lightbulb,
  TrendingUp,
  Users,
  Building2,
  Cog,
  BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "AI Readiness Assessment | Unlock Growth with AI & Automation | Automaly",
  description:
    "The AI Readiness Assessment provides a clear roadmap for implementing AI and automation. Identify high-impact opportunities, ensure measurable ROI, and scale with confidence.",
  openGraph: {
    title:
      "AI Readiness Assessment | Unlock Growth with AI & Automation | Automaly",
    description:
      "Identify where AI and automation will deliver the most value. Get a prioritised roadmap focused on ROI, not guesswork.",
    url: "https://www.automaly.io/services/ai-readiness-assessment",
  },
  alternates: {
    canonical: "https://www.automaly.io/services/ai-readiness-assessment",
  },
}

/* ── What's Included ─────────────────────────────────────────────────── */

const assessmentIncludes = [
  {
    icon: Workflow,
    title: "Review of Business Processes",
    description:
      "Identify bottlenecks and inefficiencies to optimise workflows and uncover automation opportunities.",
  },
  {
    icon: Database,
    title: "Technology & Systems Analysis",
    description:
      "Assess your tech stack's ability to integrate with and support AI and automation solutions.",
  },
  {
    icon: Layers,
    title: "Data Quality & Flow Review",
    description:
      "Ensure your data is structured, accessible, and optimised to support AI-driven decision-making.",
  },
  {
    icon: Target,
    title: "Prioritisation of AI Opportunities",
    description:
      "Rank AI and automation opportunities by impact, feasibility, and expected ROI.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Security Planning",
    description:
      "Plan secure, compliant AI integrations aligned with organisational governance standards.",
  },
  {
    icon: Users,
    title: "Key Stakeholder Review",
    description:
      "Align leadership, IT, and operational teams on a unified AI strategy to ensure seamless adoption and success.",
  },
]

/* ── Who Is It For ───────────────────────────────────────────────────── */

const audiences = [
  {
    icon: Building2,
    label: "Organisations facing operational bottlenecks",
    detail:
      "Processes that once worked are straining under growth. You need clarity on where to automate first.",
  },
  {
    icon: Cog,
    label: "Teams managing growing complexity across systems",
    detail:
      "Multiple tools, disconnected data, and manual workarounds are slowing your operations.",
  },
  {
    icon: BarChart3,
    label: "Leaders needing a clear AI strategy before investing",
    detail:
      "You want to understand ROI potential and avoid wasted spend before committing to AI.",
  },
  {
    icon: Users,
    label: "Organisations that have explored AI but lack direction",
    detail:
      "You've seen the tools but need a structured approach to implementation and adoption.",
  },
]

export default function AIReadinessAssessmentPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Readiness Assessment",
      description:
        "A structured assessment of your organisation's processes, systems, and data to identify where AI and automation can deliver the most impact.",
      provider: {
        "@type": "Organization",
        name: "Automaly",
        url: "https://www.automaly.io",
      },
      url: "https://www.automaly.io/services/ai-readiness-assessment",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.automaly.io",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.automaly.io/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Readiness Assessment",
          item: "https://www.automaly.io/services/ai-readiness-assessment",
        },
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
          src="/images/ai-readiness-hero.webp"
          alt="Isometric 3D illustration of connected data infrastructure and server blocks"
          fallbackColor="#c4a8e8"
          overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(196, 168, 232, 0.7) 0%, rgba(196, 168, 232, 0.4) 60%, rgba(196, 168, 232, 0.2) 100%)"
          objectFit="cover"
          positionClassName="object-[50%_20%]"
        />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-brand-purple/70">
            <Link
              href="/services"
              className="flex items-center gap-1 transition-colors hover:text-brand-purple"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>
            <span>/</span>
            <span className="text-brand-purple/90">AI Readiness Assessment</span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Start with Clarity, Scale with Confidence
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-balance">
            <span className="text-brand-purple">AI Readiness</span>{" "}
            <span className="text-foreground">Assessment</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-purple/80 sm:text-lg text-pretty">
            The AI Readiness Assessment provides a clear roadmap for
            implementing AI and automation in your business. It ensures you
            focus on high-impact areas, guaranteeing a successful and
            measurable ROI from day one.
          </p>

          {/* Proof line */}
          <p className="mt-4 text-sm text-brand-purple/60">
            Assessments typically identify{" "}
            <span className="font-semibold text-brand-orange">12+ automation opportunities</span>{" "}
            with ROI realised within{" "}
            <span className="font-semibold text-brand-orange">90 days</span>.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
<CalendlyButton
            size="lg"
            variant="orange"
            calendlyType="assessment"
            className="gap-2"
          >
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

      {/* ── Why Start with an Assessment? ──────────────────────────────── */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl xl:text-5xl text-balance">
              Why Start with an{" "}
              <span className="text-brand-purple">Assessment?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Without an AI Readiness Assessment, organisations risk wasted
              investments, unclear priorities, and stalled projects. With our
              assessment, you gain a data-driven, prioritised roadmap that
              focuses on high-ROI opportunities.
            </p>
          </div>

          {/* Three benefit cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Informed Decisions",
                description:
                  "No more guesswork. The assessment answers key questions about where AI and automation will deliver the most value to your business.",
                stat: "12+ opportunities",
                statLabel: "identified on average",
              },
              {
                icon: TrendingUp,
                title: "Optimised Investment",
                description:
                  "By focusing on high-impact opportunities, your investments generate measurable returns from day one with clear prioritisation.",
                stat: "ROI within 90 days",
                statLabel: "on average",
              },
              {
                icon: ShieldCheck,
                title: "Reduced Risk",
                description:
                  "Avoid wasting time and resources on ineffective solutions. The assessment provides clarity and direction before you commit.",
                stat: "Zero wasted spend",
                statLabel: "with structured prioritisation",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-brand-purple/20 bg-white p-7"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/60">
                  {item.description}
                </p>
                <div className="mt-4 rounded-lg bg-brand-orange/5 px-3 py-2">
                  <span className="text-sm font-semibold text-brand-orange">{item.stat}</span>
                  <span className="ml-1 text-xs text-foreground/70">{item.statLabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
<CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
                  Book Your Assessment <ArrowRight className="h-4 w-4" />
                </CalendlyButton>
          </div>
        </div>
      </section>

      {/* ── What's Included ───────────────────────────────────────────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl xl:text-5xl text-balance">
              What{"'"}s Included in the{" "}
              <span className="text-brand-purple">Assessment?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              A thorough evaluation covering every aspect of your AI readiness,
              from processes and technology to data and governance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assessmentIncludes.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border border-brand-purple/20 bg-brand-lavender p-7 transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-foreground/70">All of this in a single engagement.</p>
<CalendlyButton variant="outline" calendlyType="assessment" className="gap-2 border-brand-purple/30 text-brand-purple hover:bg-brand-purple/5">
                  Book Your Assessment <ArrowRight className="h-4 w-4" />
                </CalendlyButton>
          </div>
        </div>
      </section>

      {/* ── From Readiness to Implementation ──────────────────────────── */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl xl:text-5xl text-balance">
              From Readiness to{" "}
              <span className="text-brand-purple">Implementation</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Once priorities are identified, Automaly ensures seamless
              implementation of AI and automation solutions, grounded in
              insights from the readiness assessment. This ensures maximum ROI
              and reduced risk for your organisation.
            </p>
          </div>

          {/* Visual flow */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "01",
                label: "Assess",
                detail: "Understand your current state and readiness",
              },
              {
                step: "02",
                label: "Prioritise",
                detail: "Focus on high-impact, high-ROI opportunities",
              },
              {
                step: "03",
                label: "Implement",
                detail: "Deliver scalable, integrated solutions",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="relative rounded-xl border border-brand-purple/20 bg-white p-6 text-center"
              >
                <span className="mb-2 block text-3xl font-bold text-brand-orange">
                  {phase.step}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {phase.label}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  {phase.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Is It For? ────────────────────────────────────────────── */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl xl:text-5xl text-balance">
              Who Is It{" "}
              <span className="text-brand-purple">For?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              The AI Readiness Assessment is designed for growing organisations
              ready to explore AI and automation with a clear, structured
              approach.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {audiences.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-brand-purple/20 bg-brand-lavender p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/60">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="brand-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl text-balance">
            Take the First Step
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
            Don{"'"}t commit to AI and automation without clarity. Start with
            the AI Readiness Assessment today and ensure your investments are
            focused where they matter most.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              variant="outline"
              asChild
              className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
