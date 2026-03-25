import { ArrowDownCircle, Blocks, ShieldCheck, Target } from "lucide-react"

const trustPoints = [
  {
    title: "Reduced Operational Overhead",
    description:
      "Manual effort and rework increase as organisations scale, often without being noticed. By redesigning processes before automation is applied, we help teams reduce unnecessary work, improve efficiency, and free up time for higher-value activities.",
    icon: ArrowDownCircle,
  },
  {
    title: "Systems Designed to Scale",
    description:
      "AI and automation only deliver long-term value when built on the right foundations. We implement solutions that integrate cleanly into your existing systems, ensuring they support growth without constant fixes or rework as complexity increases.",
    icon: Blocks,
  },
  {
    title: "Reliable Automation Teams Can Trust",
    description:
      "Automation should make work more dependable, not introduce uncertainty. Our solutions are designed to be reliable, transparent, and easy for teams to work with, ensuring confidence as automation becomes embedded across the organisation.",
    icon: ShieldCheck,
  },
  {
    title: "Clear Focus on ROI",
    description:
      "AI and automation initiatives succeed when effort is focused in the right places. We prioritise opportunities based on impact and return, ensuring investment is directed towards outcomes that genuinely move the business forward.",
    icon: Target,
  },
]

export function TrustSection() {
  return (
    <section className="bg-gray-50/40 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Businesses{" "}
            <span className="text-brand-purple">Trust Automaly</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="text-center">
                <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground text-balance">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/60">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
