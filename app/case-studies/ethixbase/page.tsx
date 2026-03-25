import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle2, Quote, Clock, Users, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "ethiXbase Case Study - CRM Overhaul Saved 260+ Hours/Year | Automaly",
  description:
    "How Automaly helped ethiXbase implement a new CRM system, automate outbound workflows, and save over 260 hours per year through AI and automation.",
  openGraph: {
    title: "ethiXbase Case Study | Automaly",
    description: "CRM overhaul saved 260+ hours/year for ethiXbase through AI and automation.",
    url: "https://www.automaly.io/case-studies/ethixbase",
  },
  alternates: { canonical: "https://www.automaly.io/case-studies/ethixbase" },
}

export default function EthixbaseCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-section-light pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/5 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#testimonials"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-purple hover:text-brand-purple/80 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Case Studies
          </Link>

          <div className="mb-6 flex items-center justify-center sm:justify-start">
            <Image
              src="/images/clients/ethixbase360-logo.webp"
              alt="Ethixbase360 logo - compliance solutions provider"
              width={240}
              height={72}
              className="max-h-20 w-auto object-contain"
            />
          </div>

          <div className="mb-4 rounded-lg bg-brand-purple/5 px-4 py-2 inline-block">
            <p className="text-sm font-semibold text-brand-purple">
              <span className="font-mono uppercase">TL;DR:</span>{" "}
              <span className="font-normal text-foreground/70">CRM overhaul saved 260+ hours/year</span>
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            How ethiXbase Saved <span className="text-brand-orange">260+ Hours</span> Per Year with CRM Automation
          </h1>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Building2 className="h-4 w-4 text-brand-purple" />
              Software Development
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Users className="h-4 w-4 text-brand-purple" />
              51 - 200 employees | £30M
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Clock className="h-4 w-4 text-brand-purple" />
              CRM Build & Marketing Automation
            </div>
          </div>
        </div>
      </section>

      {/* Key Metric */}
      <section className="brand-gradient py-10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6">
            <div>
              <p className="text-5xl font-bold text-white">{">"}260</p>
              <p className="mt-1 text-sm text-white/70">Hours saved per annum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Before vs. After</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-destructive/20 bg-destructive/5 p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-destructive/60">Before Automaly</p>
              <ul className="space-y-3">
                {[
                  "15 manual processes consuming team bandwidth",
                  "Fragmented CRM with no single source of truth",
                  "Outbound campaigns managed manually",
                  "Business data enrichment done by hand",
                  "No integration between marketing and sales systems",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-green-500/20 bg-green-500/5 p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-green-600/60">After Automaly</p>
              <ul className="space-y-3">
                {[
                  "3 automated workflows handling core operations",
                  "Unified CRM as the single source of truth",
                  "Outbound processes fully automated",
                  "Automated business data enrichment pipeline",
                  "Integrated CRM with existing tech platforms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="bg-section-lavender py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-purple">The Challenge</p>
              <h3 className="mb-4 text-xl font-bold text-foreground">Scaling Demand Outpaced Manual Operations</h3>
              <p className="text-base leading-relaxed text-foreground/70">
                Ethixbase360 delivers comprehensive compliance solutions, providing businesses with the tools to assess risks, manage third-party relationships, and ensure compliance. As incoming demand grew, their existing CRM system became increasingly inadequate. Manual outbound processes consumed team bandwidth, data quality suffered, and the sales team struggled to keep up with lead volume.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-purple">The Solution</p>
              <h3 className="mb-4 text-xl font-bold text-foreground">CRM Build & Marketing Automation</h3>
              <p className="mb-4 text-base leading-relaxed text-foreground/70">
                Automaly implemented a new, advanced CRM system, automated key outbound workflows, integrated the CRM with existing tech platforms, and built an automated pipeline to enrich business data at scale.
              </p>
              <ul className="space-y-2">
                {[
                  "Implemented a new, advanced CRM system",
                  "Automated key outbound process workflows",
                  "Integrated CRM with existing tech platforms",
                  "Built an automated process to enrich business data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                    <span className="text-sm leading-relaxed text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-purple/20 bg-brand-lavender p-8 lg:p-12">
            <Quote className="mb-4 h-8 w-8 text-brand-purple/30" />
            <p className="text-lg leading-relaxed text-foreground/70 italic lg:text-xl">
              {"\"Automaly assisted us with our marketing automation programme. From the initial onboarding sessions through to ongoing support they have been first class throughout and I would highly recommend them.\""}
            </p>
            <div className="mt-6">
              <p className="text-base font-semibold text-foreground">Joe Struggles</p>
              <p className="text-sm text-foreground/70">CMO | Ethixbase</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="brand-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Ready to See Similar Results?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
            Start with an AI Readiness Assessment to identify where automation will deliver the greatest impact for your business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild variant="orange" className="gap-2">
              <Link href="/services/ai-readiness-assessment">
                Book Your Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 border-white/20 text-white hover:bg-white/10">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
