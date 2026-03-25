import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from "lucide-react"
import {
  getUseCaseBySlug,
  getUseCaseSlugs,
  getFunctionalBySlug,
  getSectorBySlug,
  functionalUseCases,
  sectorUseCases,
  iconMap,
  type UseCaseContent,
} from "@/lib/use-cases"
import { UseCaseCard } from "@/components/use-case-card"

// ─── Static params ───────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return getUseCaseSlugs().map((slug) => ({ slug }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const useCase = getUseCaseBySlug(slug)
  if (!useCase) return {}

  return {
    title: `${useCase.title} | Automaly`,
    description: useCase.description,
    openGraph: {
      title: `${useCase.title} | Automaly`,
      description: useCase.description,
      url: `https://www.automaly.io/use-cases/${slug}`,
    },
    alternates: {
      canonical: `https://www.automaly.io/use-cases/${slug}`,
    },
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const useCase = getUseCaseBySlug(slug)
  if (!useCase) notFound()

  const isFunctional = !!getFunctionalBySlug(slug)
  const isSector = !!getSectorBySlug(slug)
  const Icon = iconMap[useCase.icon] || ArrowRight

  // Resolve related cross-links
  const relatedFunctional = (useCase.relatedFunctional || [])
    .map((s) => getFunctionalBySlug(s))
    .filter(Boolean)
  const relatedSector = (useCase.relatedSector || [])
    .map((s) => getSectorBySlug(s))
    .filter(Boolean)

  // Placeholder section content per type
  const sections = isFunctional
    ? [
        {
          heading: "The Problem",
          body: `Many growing organisations struggle with manual, repetitive ${useCase.shortTitle.toLowerCase()} processes that consume valuable time and limit scalability. Without automation, teams are reactive rather than strategic, and operational inefficiencies compound as the business grows.`,
        },
        {
          heading: "Automation Opportunities",
          items: [
            "Workflow automation to eliminate repetitive manual tasks",
            "AI-driven decision support for faster, more accurate outcomes",
            "System integration to connect tools and reduce data silos",
            "Automated reporting and analytics for real-time visibility",
            "Process standardisation to ensure consistency at scale",
          ],
        },
        {
          heading: "Example Workflows",
          items: [
            `Automated ${useCase.shortTitle.toLowerCase()} task routing and assignment`,
            `AI-powered ${useCase.shortTitle.toLowerCase()} data analysis and insight generation`,
            `End-to-end ${useCase.shortTitle.toLowerCase()} process orchestration across tools`,
            "Triggered alerts and escalations based on custom business rules",
          ],
        },
        {
          heading: "ROI Impact",
          body: `Organisations implementing ${useCase.shortTitle.toLowerCase()} automation typically see significant reductions in manual effort, faster cycle times, and improved accuracy. The AI Readiness Assessment quantifies these opportunities before any build begins, ensuring effort is directed where it delivers measurable return.`,
        },
      ]
    : [
        {
          heading: "Industry Challenges",
          body: `${useCase.shortTitle} face unique operational challenges that generic tools cannot address. Scaling requires automation that understands industry-specific workflows, compliance requirements, and team structures. Without targeted automation, growth creates complexity rather than efficiency.`,
        },
        {
          heading: "How Automation Helps",
          items: [
            "Industry-specific workflow automation tailored to your operations",
            "AI solutions designed for sector-relevant decision-making",
            "Integration with tools and platforms common in your industry",
            "Scalable processes that grow with your organisation",
            "Reduced operational overhead without sacrificing quality",
          ],
        },
        {
          heading: "Common Automation Areas",
          items: [
            `Client and project management automation for ${useCase.shortTitle.toLowerCase()}`,
            "Internal communication and coordination workflows",
            "Data collection, reporting, and analytics pipelines",
            "Sales and pipeline management automation",
          ],
        },
        {
          heading: "Expected Outcomes",
          body: `${useCase.shortTitle} implementing AI and automation with Automaly typically achieve improved operational efficiency, reduced overhead, and the ability to scale without proportionally increasing headcount. Every engagement starts with the AI Readiness Assessment to ensure implementation is focused on high-impact opportunities.`,
        },
      ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-section-light pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/5 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-foreground/70">
            <Link
              href="/use-cases"
              className="flex items-center gap-1 hover:text-brand-purple transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Use Cases
            </Link>
            <span>/</span>
            <span className="text-foreground/70">{useCase.title}</span>
          </nav>

          <div className="flex items-start gap-5">
            <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-orange">
                {isFunctional ? "By Function" : "By Sector"}
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                {useCase.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg text-pretty">
                {useCase.description}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-border pt-8 sm:flex-row">
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
              className="gap-2 border-brand-purple/30 text-brand-purple font-semibold hover:bg-brand-purple/10 hover:border-brand-purple/50 transition-all duration-200"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {useCase.content ? (
        <RichContent content={useCase.content} />
      ) : (
        <section className="bg-section-lavender py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl text-balance">
                    {section.heading}
                  </h2>
                  {"body" in section && section.body && (
                    <p className="text-base leading-relaxed text-foreground/70">
                      {section.body}
                    </p>
                  )}
                  {"items" in section && section.items && (
                    <ul className="mt-4 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                          <span className="text-sm leading-relaxed text-foreground/70">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross-links */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground sm:text-3xl">
            {isFunctional ? "Related Sectors" : "Related Functions"}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {(isFunctional ? relatedSector : relatedFunctional).map(
              (related) => {
                if (!related) return null
                return (
                  <UseCaseCard
                    key={related.slug}
                    useCase={related}
                    variant={isFunctional ? "sector" : "function"}
                  />
                )
              }
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/use-cases"
              className="text-sm font-medium text-brand-purple hover:underline"
            >
              <ArrowLeft className="mr-1 inline h-3.5 w-3.5" />
              View all use cases
            </Link>
          </div>
        </div>
      </section>

      {/* Integrated CTA */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="brand-gradient rounded-2xl p-10 text-center lg:p-12">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
                {useCase.content?.cta?.heading ??
                  `Ready to Explore ${useCase.shortTitle} Automation?`}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
                {useCase.content?.cta?.body ??
                  `The AI Readiness Assessment identifies exactly where automation will deliver the greatest return for your ${isFunctional ? `${useCase.shortTitle.toLowerCase()} function` : "organisation"}.`}
              </p>
              {useCase.content?.cta?.boldText && (
                <p className="mx-auto mt-3 max-w-xl text-sm font-semibold text-white/80">
                  {useCase.content.cta.boldText}
                </p>
              )}
              <CalendlyButton
                size="lg"
                variant="orange"
                calendlyType="assessment"
                className="mt-8 gap-2"
              >
                Book Your Assessment
                <ArrowRight className="h-4 w-4" />
              </CalendlyButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Rich Content Component ──────────────────────────────────────────────────

function RichContent({ content }: { content: UseCaseContent }) {
  return (
    <>
      {/* Intro + Hero Stat */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {content.intro.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed text-foreground/70 ${i > 0 ? "mt-4" : ""}`}
                >
                  {para}
                </p>
              ))}
            </div>
            {content.heroStat && (
              <div className="flex flex-col items-center rounded-2xl border border-brand-purple/20 bg-brand-lavender p-8 text-center">
                <span className="text-5xl font-bold text-brand-purple">
                  {content.heroStat.value}
                </span>
                <span className="mt-2 text-sm font-semibold text-foreground">
                  {content.heroStat.label}
                </span>
                {content.heroStat.context && (
                  <span className="mt-2 text-xs leading-relaxed text-foreground/70">
                    {content.heroStat.context}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenges + Benefits */}
      <section className="bg-section-lavender py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            {/* Challenges */}
            {content.challenges && (
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl text-balance">
                  {content.challenges.heading}
                </h2>
                {content.challenges.intro && (
                  <p className="mb-5 text-base leading-relaxed text-foreground/70">
                    {content.challenges.intro}
                  </p>
                )}
                <ul className="space-y-3">
                  {content.challenges.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-purple/40" />
                      <span className="text-sm leading-relaxed text-foreground/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {content.challenges.outro && (
                  <p className="mt-5 text-sm font-medium leading-relaxed text-foreground/60 italic">
                    {content.challenges.outro}
                  </p>
                )}
              </div>
            )}

            {/* Benefits */}
            {content.benefits && (
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl text-balance">
                  {content.benefits.heading}
                </h2>
                {content.benefits.intro && (
                  <p className="mb-5 text-base leading-relaxed text-foreground/70">
                    {content.benefits.intro}
                  </p>
                )}
                <ul className="space-y-3">
                  {content.benefits.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                      <span className="text-sm leading-relaxed text-foreground/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Extra Sections (e.g. Approach, Areas of Focus) */}
      {content.extraSections && content.extraSections.length > 0 && (
        <section className="bg-section-light py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
              {content.extraSections.map((section) => (
                <div key={section.heading}>
                  <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl text-balance">
                    {section.heading}
                  </h2>
                  {section.intro &&
                    section.intro.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className={`text-base leading-relaxed text-foreground/70 ${i > 0 ? "mt-3" : "mb-5"}`}
                      >
                        {para}
                      </p>
                    ))}
                  {section.items && (
                    <ul className="mt-4 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                          <span className="text-sm leading-relaxed text-foreground/70">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.outro && (
                    <p className="mt-5 text-sm font-medium leading-relaxed text-foreground/60 italic">
                      {section.outro}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes + Testimonial */}
      <section className="bg-section-lavender py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            {/* Outcomes */}
            {content.outcomes && (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl text-balance">
                  {content.outcomes.heading}
                </h2>
                {content.outcomes.intro && (
                  <p className="mb-5 text-sm text-foreground/60">
                    {content.outcomes.intro}
                  </p>
                )}
                <ul className="space-y-3">
                  {content.outcomes.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                      <span className="text-sm leading-relaxed text-foreground/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {content.outcomes.stat && (
                  <div className="mt-8 flex items-center gap-5 rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-5">
                    <span className="text-4xl font-bold text-brand-orange">
                      {content.outcomes.stat.value}
                    </span>
                    <div>
                      <span className="block text-sm font-semibold text-foreground">
                        {content.outcomes.stat.label}
                      </span>
                      {content.outcomes.stat.context && (
                        <span className="block text-xs text-foreground/70">
                          {content.outcomes.stat.context}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Testimonial */}
            {content.testimonial && (
              <div className="flex flex-col justify-center">
                <div className="relative rounded-2xl border border-brand-purple/20 bg-brand-lavender p-8">
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-brand-purple/10" />
                  <div className="space-y-3">
                    {content.testimonial.quote.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-foreground/70 italic"
                      >
                        {`"${para}"`}
                      </p>
                    ))}
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                    {content.testimonial.attribution}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
