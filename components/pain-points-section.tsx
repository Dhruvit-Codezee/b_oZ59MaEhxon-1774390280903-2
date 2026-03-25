import { CalendlyButton } from "@/components/calendly-button"
import { IconContainer } from "@/components/ui/icon-container"
import { Unplug, Puzzle, CircleDollarSign, ShieldAlert, ArrowRight } from "lucide-react"

const painPoints = [
  {
    icon: Unplug,
    title: "Foundations Under Strain",
    lead: "Manual workarounds are hiding deeper problems.",
    description:
      "Layering automation onto fragmented workflows amplifies inefficiency instead of fixing it - making future improvements costlier.",
  },
  {
    icon: Puzzle,
    title: "Complexity Without Control",
    lead: "More tools, less visibility.",
    description:
      "Without governance and clear ownership, every new integration adds risk. Scaling becomes harder, not easier.",
  },
  {
    icon: CircleDollarSign,
    title: "Effort\nWithout Return",
    lead: "Busy does not mean productive.",
    description:
      "Point solutions consume budget without delivering measurable ROI. Without prioritisation, complexity grows and value stalls.",
  },
  {
    icon: ShieldAlert,
    title: "Governance & Security Gaps",
    lead: "Speed without safeguards is a liability.",
    description:
      "Rapid AI adoption without compliance, data governance, and security frameworks exposes your business to regulatory and operational risk.",
  },
]

export function PainPointsSection() {
  return (
    <section className="bg-gray-50/30 pt-16 pb-8 lg:pt-20 lg:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Scaling with AI & Automation is{" "}
            <span className="text-brand-purple">Harder Than It Looks</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            As organisations scale, processes that once operated smoothly begin to stretch under increased demand. Manual efforts grow, complexity deepens, and what was once efficient becomes a bottleneck.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="group rounded-2xl border border-brand-purple/20 bg-brand-lavender p-8 transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5"
              >
                <IconContainer size="lg" variant="glow" colorScheme="orange" className="mb-6">
                  <Icon />
                </IconContainer>
                <h3 className="mb-4 text-xl font-semibold text-foreground text-balance whitespace-pre-line">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  <strong className="font-semibold text-foreground/80">{point.lead}</strong>{" "}
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA - after identifying the problem, offer the solution */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-foreground/70">
            These are the exact issues our AI Readiness Assessment identifies and resolves.
          </p>
          <CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
            Book Your Assessment
            <ArrowRight className="h-4 w-4" />
          </CalendlyButton>
        </div>
      </div>
    </section>
  )
}
