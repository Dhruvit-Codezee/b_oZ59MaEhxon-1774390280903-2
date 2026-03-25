import type { Metadata } from "next"
import Link from "next/link"
import { HeroBackground } from "@/components/hero-background"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { ArrowRight } from "lucide-react"
import {
  functionalUseCases,
  sectorUseCases,
} from "@/lib/use-cases"
import { UseCaseCardGrid } from "@/components/use-case-card"

export const metadata: Metadata = {
  title: "AI & Automation Use Cases | Automaly",
  description:
    "Explore how AI automation transforms business functions and industries. From sales automation and HR workflows to solutions for tech startups, digital agencies, and recruitment firms.",
  openGraph: {
    title: "AI & Automation Use Cases | Automaly",
    description:
      "Explore how AI automation transforms business functions and industries. CRM automation, workflow automation, and process automation for growing organisations.",
    url: "https://www.automaly.io/use-cases",
  },
  alternates: {
    canonical: "https://www.automaly.io/use-cases",
  },
}

const functionalMetrics: Record<string, string> = {
  "sales-marketing-automation": "40% less admin",
  "hr-automation": "75% faster onboarding",
  "finance-automation": "4x faster approvals",
  "operations-automation": "50% fewer manual tasks",
  "cybersecurity-automation": "24/7 threat monitoring",
  "legal-automation": "60% faster reviews",
}

const sectorMetrics: Record<string, string> = {
  "tech-startups": "Scale without headcount",
  "digital-agencies": "77% more conversions",
  "recruitment": "90% faster screening",
  "legal-services": "60% faster workflows",
  "mssps": "80% faster triage",
  "financial-services": "100% compliance",
}

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        {/* Background Image - optimized with Next.js Image priority loading */}
        <HeroBackground
          src="/images/use-cases-hero.webp"
          alt="Isometric 3D illustration of interconnected purple and blue geometric blocks with glowing neon accent lines"
          fallbackColor="#3b0d7e"
          overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(59, 13, 126, 0.7) 0%, rgba(59, 13, 126, 0.4) 60%, rgba(59, 13, 126, 0.2) 100%)"
        />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Use Cases
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              AI & Automation{" "}
              <span className="text-brand-orange">Use Cases</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
              AI and automation deliver measurable results across business
              functions and industries. Explore how organisations are using
              workflow automation, CRM automation, and process automation to reduce
              operational overhead and scale efficiently.
            </p>
            {/* Proof stats */}
            <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-6">
              {[
                { value: "6+", label: "Functions Automated" },
                { value: "6+", label: "Sectors Transformed" },
                { value: "260+", label: "Hours Saved / Yr" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-brand-orange">{s.value}</span>
                  <span className="text-xs uppercase tracking-wider text-white/60">{s.label}</span>
                </div>
              ))}
            </div>

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
              <Button
                size="lg"
                asChild
                variant="outline"
                className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* By Function */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Use Cases by{" "}
              <span className="text-brand-purple">Function</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              AI and automation opportunities mapped to the business functions
              where they deliver the greatest operational efficiency.
            </p>
          </div>

          <UseCaseCardGrid
            useCases={functionalUseCases}
            metrics={functionalMetrics}
            variant="function"
          />
        </div>
      </section>

      {/* By Sector */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Use Cases by{" "}
              <span className="text-brand-purple">Sector</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              Sector-specific AI and automation strategies tailored to the
              unique challenges, compliance requirements, and growth
              opportunities within your industry.
            </p>
          </div>

          <UseCaseCardGrid
            useCases={sectorUseCases}
            metrics={sectorMetrics}
            variant="sector"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="brand-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Not Sure Where to Start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
            The AI Readiness Assessment identifies the highest-impact
            automation opportunities across your organisation, giving you a
            clear, prioritised roadmap before any build begins.
          </p>
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
      </section>
    </>
  )
}
