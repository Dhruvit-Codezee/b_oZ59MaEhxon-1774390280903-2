import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconContainer } from "@/components/ui/icon-container"
import { BrainCircuit, Megaphone, Handshake, Cable, ArrowRight } from "lucide-react"
import { ExpandableCard } from "@/components/expandable-card"

const features = [
  {
    title: "Enhance Your CRM with AI-Powered Automations",
    description:
      "Upgrade your CRM from a simple tool to a central part of your sales engine. Automaly\u2019s AI and automation solutions automate routine tasks, allowing your team to focus on high-value activities that drive revenue.",
    detail:
      "We are certified experts in Airtable and n8n, and we can also integrate AI into other CRMs, including HubSpot.",
    icon: BrainCircuit,
    metric: { value: "260+", label: "hours saved per client annually" },
  },
  {
    title: "Improve Marketing Results with Automation",
    description:
      "55% of companies that do not use marketing automation cite lack of expertise as the reason. Automaly\u2019s AI solutions integrate your marketing tools with your CRM and sales teams, enabling more effective campaigns and improved ROI without adding complexity.",
    detail: "",
    icon: Megaphone,
    metric: { value: "55%", label: "of companies lack automation expertise" },
  },
  {
    title: "Increase Sales with Automation",
    description:
      "Sales teams spend just 33% of their time selling. Automaly\u2019s AI solutions automate time-consuming tasks like data entry, lead qualification, and follow-ups, freeing your team to focus on high-priority leads.",
    detail:
      "This increases productivity, reduces the cost of sales, and supports revenue growth.",
    icon: Handshake,
    metric: { value: "Only 33%", label: "of sales time spent actually selling" },
  },
  {
    title: "Efficient Software Integration and Automation",
    description:
      "Your technology should support growth, not hinder it. Automaly optimises your tech stack to ensure seamless integration and automation.",
    detail:
      "Whether you are overwhelmed by software choices or want to get more from your existing tools, our experts can help ensure your systems work together to drive sustained growth.",
    icon: Cable,
    metric: { value: "90%", label: "less manual data handling" },
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-section-lavender py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            4 Ways We{"'"}ve Delivered Measurable{" "}
            <span className="text-brand-purple">ROI for Businesses Like Yours</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Real capabilities that have saved clients 260+ hours and unlocked six-figure revenue.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-brand-purple/20 bg-white p-8 transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5"
              >
                <IconContainer size="md" variant="gradient" colorScheme="purple" className="mb-5 group-hover:bg-brand-orange group-hover:text-white">
                  <Icon />
                </IconContainer>
                <h3 className="mb-3 text-xl font-semibold text-foreground text-balance">
                  {feature.title}
                </h3>
                <ExpandableCard description={feature.description} detail={feature.detail} />
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-orange/5 px-3 py-2">
                  <span className="text-base font-bold text-brand-orange">{feature.metric.value}</span>
                  <span className="text-xs text-foreground/70">{feature.metric.label}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA - after showing capabilities, show the methodology */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2 border-brand-purple/30 text-brand-purple font-semibold hover:bg-brand-purple/10 hover:border-brand-purple/50 transition-all duration-200">
            <Link href="/#how-we-work">
              See How It Works
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
