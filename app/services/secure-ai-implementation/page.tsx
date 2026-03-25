import type { Metadata } from "next"
import Link from "next/link"
import { HeroBackground } from "@/components/hero-background"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  CheckCircle2,
  Lock,
  Eye,
  FileCheck,
  Users,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Secure AI Implementation | Governance-First AI | Automaly",
  description:
    "AI delivers transformative results, but only when implemented responsibly. Governance-first AI implementation ensuring your solutions are secure, compliant, and accountable from day one.",
  openGraph: {
    title:
      "Secure AI Implementation | Governance-First AI | Automaly",
    description:
      "Governance-first AI implementation ensuring your solutions are secure, compliant, and accountable from day one.",
    url: "https://www.automaly.io/services/secure-ai-implementation",
  },
  alternates: {
    canonical: "https://www.automaly.io/services/secure-ai-implementation",
  },
}

/* ── Capabilities ───────────────────────────────────────────────────── */

const capabilities = [
  {
    icon: Shield,
    title: "AI Governance Frameworks",
    description:
      "Establish clear policies, roles, and responsibilities for AI usage. Define acceptable use, approval processes, and oversight mechanisms tailored to your organisation.",
  },
  {
    icon: Lock,
    title: "Data Security & Privacy",
    description:
      "Ensure AI implementations protect sensitive data. We implement encryption, access controls, anonymisation, and data handling protocols aligned with GDPR and industry standards.",
  },
  {
    icon: Eye,
    title: "Monitoring & Audit Logging",
    description:
      "Continuous monitoring of AI outputs, decisions, and performance. Full audit trails provide transparency and ensure regulatory compliance.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment & Mitigation",
    description:
      "Identify and address potential risks before they arise. We assess bias, hallucination, data leakage, and dependency risks, building mitigation strategies into every deployment.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Regulatory Alignment",
    description:
      "Align AI implementations with relevant regulations, including GDPR, EU AI Act, and industry-specific requirements. Documented processes that satisfy auditors and stakeholders.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop Controls",
    description:
      "Design AI systems with appropriate human oversight. Ensure decision escalation paths, approval gates, and review workflows are in place to augment teams rather than replace critical judgment.",
  },
]

/* ── Framework pillars ──────────────────────────────────────────────── */

const pillars = [
  {
    title: "Transparency",
    description: "Clear documentation on how AI systems work, what data they use, and how decisions are made.",
  },
  {
    title: "Accountability",
    description: "Defined ownership, audit trails, and oversight structures for every AI deployment.",
  },
  {
    title: "Security",
    description: "Enterprise-grade data protection, access controls, and threat monitoring as standard.",
  },
  {
    title: "Fairness",
    description: "Bias testing, output validation, and ongoing monitoring to ensure equitable outcomes.",
  },
]

/* ── Who It's For ───────────────────────────────────────────────────── */

const audiences = [
  "Organisations exploring AI but concerned about governance and compliance risks.",
  "Regulated industries (finance, legal, healthcare) with strict data handling requirements.",
  "Businesses that have deployed AI tools but lack formal governance structures.",
  "Leadership teams needing confidence that AI investments are secure and accountable.",
]

export default function SecureAIImplementationPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Secure AI Implementation",
      description:
        "Governance-first AI implementation services including AI governance frameworks, data security, compliance alignment, risk assessment, and human-in-the-loop controls.",
      provider: {
        "@type": "Organization",
        name: "Automaly",
        url: "https://www.automaly.io",
      },
      url: "https://www.automaly.io/services/secure-ai-implementation",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.automaly.io" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.automaly.io/services" },
        { "@type": "ListItem", position: 3, name: "Secure AI Implementation", item: "https://www.automaly.io/services/secure-ai-implementation" },
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
          src="/images/secure-ai-implementation-hero.webp"
          alt="Isometric 3D illustration of secure infrastructure with protected pathways and security modules"
          fallbackColor="#2e1065"
          overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(46, 16, 101, 0.7) 0%, rgba(46, 16, 101, 0.4) 60%, rgba(46, 16, 101, 0.2) 100%)"
        />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/services" className="flex items-center gap-1 transition-colors hover:text-brand-orange">
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>
            <span>/</span>
            <span className="text-white/80">Secure AI Implementation</span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Governance-First AI
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="text-brand-orange">Secure AI</span>{" "}
            <span className="text-white">Implementation</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
            AI delivers transformative results, but only when implemented
            responsibly. We take a governance-first approach to every AI
            project, ensuring your solutions are secure, compliant, and
            accountable from day one. No black boxes. No uncontrolled risk.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" asChild variant="orange" className="gap-2">
              <Link href="/contact">
                Discuss Your Requirements
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
              Why Governance{" "}
              <span className="text-brand-purple">Comes First</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Rushing AI adoption without proper governance exposes your
              organisation to significant risks, including data breaches,
              compliance failures, and unreliable outputs. Responsible AI
              implementation starts with building the right foundations to
              ensure trust and mitigate risk.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative rounded-2xl border border-red-200/60 bg-white p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">AI Without Governance</h3>
              <ul className="space-y-3">
                {[
                  "Data leakage risks when sensitive information reaches external AI models",
                  "No audit trail for AI-driven decisions, creating compliance exposure",
                  "Biased or inaccurate outputs that erode stakeholder trust",
                  "Shadow AI usage spreading across teams with no oversight",
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
              <h3 className="mb-3 text-lg font-semibold text-foreground">Governance-First AI</h3>
              <ul className="space-y-3">
                {[
                  "Protected data with encryption, access controls, and clear handling policies",
                  "Full transparency through audit logging and documented decision processes",
                  "Validated, tested outputs with bias detection and quality monitoring",
                  "Controlled, sanctioned AI usage with clear policies and accountability",
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
          <p className="mb-4 text-sm text-foreground/70">Need governance-first AI? Let us show you how.</p>
          <Button asChild variant="orange" className="gap-2">
            <Link href="/services/ai-readiness-assessment">
              Discuss Your Requirements <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
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
              Comprehensive governance and security for every AI implementation.
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

      {/* ── Typical Results ──────────────────────────────────────────── */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Typical{" "}
              <span className="text-brand-purple">Results</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { metric: "100%", label: "audit compliance achieved" },
              { metric: "Zero", label: "uncontrolled AI deployments" },
              { metric: "80%", label: "reduction in governance setup time" },
              { metric: "24/7", label: "monitoring and audit logging" },
            ].map((r) => (
              <div key={r.label} className="rounded-2xl border border-brand-purple/20 bg-white p-6 text-center">
                <span className="text-3xl font-bold text-brand-purple">{r.metric}</span>
                <p className="mt-2 text-sm text-foreground/60">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-foreground/70">Want governance-first AI with measurable outcomes?</p>
<CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
                  Book Your Assessment <ArrowRight className="h-4 w-4" />
                </CalendlyButton>
          </div>
        </div>
      </section>

      {/* ── Framework Pillars ────────────────────────────────────────── */}
      <section className="bg-gray-50/40 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Governance{" "}
              <span className="text-brand-purple">Pillars</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
              Every AI implementation at Automaly is built on four core
              principles that ensure responsible, trustworthy outcomes:
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-brand-purple/20 bg-white p-6 text-center">
                <span className="mb-3 block text-3xl font-bold text-brand-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{p.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-foreground/70">Want a governance framework built for your organisation?</p>
<CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
                  Book Your Assessment <ArrowRight className="h-4 w-4" />
                </CalendlyButton>
          </div>
        </div>
      </section>

      {/* ── Our Approach ─────────────────────────────────────────────── */}
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
              { step: "01", label: "Assess", detail: "Evaluate current AI usage, risks, and compliance requirements" },
              { step: "02", label: "Framework", detail: "Design governance policies, roles, and approval processes" },
              { step: "03", label: "Implement", detail: "Deploy secure AI solutions with controls and monitoring" },
              { step: "04", label: "Maintain", detail: "Ongoing auditing, bias testing, and governance reviews" },
            ].map((phase) => (
              <div key={phase.step} className="rounded-xl border border-brand-purple/20 bg-brand-lavender/60 p-6 text-center">
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

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-foreground/70">Sound like your organisation?</p>
            <Button asChild className="gap-2 bg-brand-purple text-white hover:bg-brand-purple/90">
              <Link href="/services/ai-readiness-assessment">
                Get Your AI Readiness Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Trust callout ────────────────────────────────────────────── */}
      <section className="bg-gray-50/40 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            AI You Can Trust
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 text-pretty">
            At Automaly, we believe AI should enhance decision-making, not
            replace accountability. Every solution we build includes the
            necessary controls, documentation, and oversight to maintain trust
            with your team, clients, and regulators.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="brand-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Ready to Implement AI Responsibly?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
            Don{"'"}t let governance concerns hold back your AI adoption. Let
            {"'"}s build the framework that gives you the confidence to move
            forward securely.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild variant="orange" className="gap-2">
              <Link href="/contact">
                Discuss Your Requirements
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
