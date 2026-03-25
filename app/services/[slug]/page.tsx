import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServices, getServiceSlugs } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import {
  ArrowRight,
  ArrowLeft,
  ClipboardCheck,
  TrendingUp,
  Bot,
  Settings,
  Database,
  Shield,
  CheckCircle2,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardCheck,
  TrendingUp,
  Bot,
  Settings,
  Database,
  Shield,
}

export async function generateStaticParams() {
  const slugs = getServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: `${service.frontmatter.title} | Automaly`,
    description: service.frontmatter.description,
    openGraph: {
      title: `${service.frontmatter.title} | Automaly`,
      description: service.frontmatter.description,
      url: `https://www.automaly.io/services/${slug}`,
    },
    alternates: {
      canonical: `https://www.automaly.io/services/${slug}`,
    },
  }
}

function parseMarkdownSections(content: string) {
  const sections: { heading: string; body: string; items: string[] }[] = []
  const lines = content.split("\n")
  let currentHeading = ""
  let currentBody: string[] = []
  let currentItems: string[] = []

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (currentHeading) {
        sections.push({
          heading: currentHeading,
          body: currentBody.join("\n").trim(),
          items: currentItems,
        })
      }
      currentHeading = line.replace("## ", "")
      currentBody = []
      currentItems = []
    } else if (line.startsWith("- ")) {
      currentItems.push(line.replace("- ", ""))
    } else {
      currentBody.push(line)
    }
  }

  if (currentHeading) {
    sections.push({
      heading: currentHeading,
      body: currentBody.join("\n").trim(),
      items: currentItems,
    })
  }

  return sections
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const { frontmatter, content } = service
  const sections = parseMarkdownSections(content)
  const allServices = getAllServices()
  const Icon = iconMap[frontmatter.icon] || ClipboardCheck

  // Get related services (exclude current)
  const relatedServices = allServices
    .filter((s) => s.frontmatter.slug !== slug)
    .slice(0, 3)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: frontmatter.title,
      description: frontmatter.description,
      provider: {
        "@type": "Organization",
        name: "Automaly",
        url: "https://www.automaly.io",
      },
      url: `https://www.automaly.io/services/${slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.automaly.io" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.automaly.io/services" },
        { "@type": "ListItem", position: 3, name: frontmatter.title, item: `https://www.automaly.io/services/${slug}` },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-section-light lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/5 blur-[140px]" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
          <div className="max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-foreground/70">
            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-brand-purple transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>
            <span>/</span>
            <span className="text-foreground/70">{frontmatter.title}</span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
            {frontmatter.tagline}
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="text-brand-purple">{frontmatter.title}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg text-pretty">
            {frontmatter.description}
          </p>

          {/* Stat + CTA row */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <div>
              <span className="text-4xl font-bold text-brand-purple">
                {frontmatter.stat}
              </span>
              <span className="ml-2 text-sm text-foreground/70">
                {frontmatter.statLabel}
              </span>
            </div>
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
              className="gap-2 border-brand-purple/30 text-brand-purple font-semibold hover:bg-brand-purple/10 hover:border-brand-purple/50 transition-all duration-200"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">
            What{"'"}s Included
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {frontmatter.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-xl border border-brand-purple/20 bg-white px-5 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                <span className="text-sm font-medium text-foreground/80">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
<CalendlyButton variant="orange" calendlyType="assessment" className="gap-2">
                  Book Your Assessment <ArrowRight className="h-4 w-4" />
                </CalendlyButton>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl text-balance">
                  {section.heading}
                </h2>
                {section.body && (
                  <div className="space-y-4">
                    {section.body
                      .split("\n\n")
                      .filter(Boolean)
                      .map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-base leading-relaxed text-foreground/70"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                )}
                {section.items.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
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

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-foreground/70">Ready to see what this could look like for your business?</p>
            <Button asChild className="gap-2 bg-brand-purple text-white hover:bg-brand-purple/90">
              <Link href="/services/ai-readiness-assessment">
                Get Your AI Readiness Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
            Related Services
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((related) => {
              const RelIcon =
                iconMap[related.frontmatter.icon] || ClipboardCheck
              return (
                <Link
                  key={related.frontmatter.slug}
                  href={`/services/${related.frontmatter.slug}`}
                  className="group flex flex-col rounded-2xl border border-brand-purple/20 bg-white p-6 transition-all hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-brand-orange group-hover:text-white">
                    <RelIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {related.frontmatter.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-foreground/60">
                    {related.frontmatter.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-brand-purple">
                    Learn more
                    <ArrowRight className="ml-1 inline h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="brand-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
            Begin with an AI Readiness Assessment to identify where{" "}
            {frontmatter.title.toLowerCase()} will deliver the greatest impact
            for your organisation.
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
            <Button size="lg" variant="outline" asChild className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
