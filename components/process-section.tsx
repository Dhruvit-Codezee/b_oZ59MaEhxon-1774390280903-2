import { CalendlyButton } from "@/components/calendly-button"
import { IconContainer } from "@/components/ui/icon-container"
import { ArrowRight, ClipboardCheck, Map, Cog, TrendingUp } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "AI Readiness & Process Assessment",
    description:
      "We start with an AI Readiness Assessment to evaluate your current processes, systems, and data. This helps us pinpoint where AI and automation will have the greatest impact, uncover inefficiencies, and ensure your organisation is ready for change.",
    detail: "This step ensures all decisions are informed, realistic, and commercially viable.",
    outcome: "Avg. 12 opportunities identified",
  },
  {
    step: "02",
    icon: Map,
    title: "Prioritised AI & Automation Roadmap",
    description:
      "Based on the assessment, we develop a prioritised roadmap that outlines where and how AI and automation should be deployed. We assess each opportunity for impact, feasibility, and ROI, ensuring focus on areas that drive the most value.",
    detail: "The roadmap provides clarity on sequencing, scope, and expected outcomes\u2014ensuring efforts are aligned with your business goals.",
    outcome: "Prioritised by ROI impact",
  },
  {
    step: "03",
    icon: Cog,
    title: "Implementation, Integration & Testing",
    description:
      "Once priorities are set, our team designs and implements AI and automation solutions that integrate seamlessly into your existing tech stack. We refine processes, connect systems, and rigorously test solutions for reliability and performance.",
    detail: "This phase is focused on scalability, governance, and security to ensure long-term success.",
    outcome: "90% less manual processing",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Optimisation & Ongoing Improvement",
    description:
      "AI and automation generate the most value when continuously optimised. We provide ongoing support to monitor, adjust, and enhance solutions to ensure they remain effective as your organisation evolves.",
    detail: "This step helps maintain performance, identify emerging opportunities, and ensure that your investment in AI continues to deliver sustained ROI.",
    outcome: "Ongoing ROI improvement",
  },
]

export function ProcessSection() {
  return (
    <section id="how-we-work" className="scroll-mt-20 brand-gradient py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Our 4 Steps to AI & Automation Success
          </h2>
          <p className="mt-4 text-lg text-white/70 text-pretty">
            A structured approach designed to help growing organisations implement AI and automation with clarity, confidence, and measurable ROI.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon
            return (
            <div
              key={item.step}
              className="group relative rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/15"
            >
              <div className="mb-4 flex items-center gap-3">
                <IconContainer size="sm" variant="glow" colorScheme="white" hoverEffect={false}>
                  <Icon />
                </IconContainer>
                <span className="font-mono text-2xl font-bold text-brand-orange">
                  {item.step}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white text-balance">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
              {item.detail && (
                <p className="mt-3 text-xs leading-relaxed text-white/55 italic">
                  {item.detail}
                </p>
              )}
              <span className="mt-4 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-brand-orange">
                {item.outcome}
              </span>
            </div>
          )})}
        </div>

        {/* CTA - after showing the process, invite them to begin */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-white/55">
            Ready to start with Step 1?
          </p>
          <CalendlyButton size="lg" variant="orange" calendlyType="assessment" className="gap-2">
            Book Your Assessment
            <ArrowRight className="h-4 w-4" />
          </CalendlyButton>
        </div>
      </div>
    </section>
  )
}
