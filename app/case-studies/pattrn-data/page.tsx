import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle2, Quote, Clock, Users, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Pattrn Data Case Study - AI Chatbot Secured a 6-Figure Contract | Automaly",
  description:
    "How Automaly developed an intelligent chatbot and trained an LLM for Pattrn Data's client, resulting in a 6-figure contract and transformed customer service.",
  openGraph: {
    title: "Pattrn Data Case Study | Automaly",
    description: "AI chatbot development secured a 6-figure contract for Pattrn Data.",
    url: "https://www.automaly.io/case-studies/pattrn-data",
  },
  alternates: { canonical: "https://www.automaly.io/case-studies/pattrn-data" },
}

export default function PattrnDataCaseStudy() {
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
            <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-lg">
              <Image
                src="/images/clients/pattrn-data-logo.webp"
                alt="Pattrn Data logo - geometric dot pattern with company name"
                width={160}
                height={160}
                className="h-36 w-36 object-contain"
              />
            </div>
          </div>

          <div className="mb-4 rounded-lg bg-brand-purple/5 px-4 py-2 inline-block">
            <p className="text-sm font-semibold text-brand-purple">
              <span className="font-mono uppercase">TL;DR:</span>{" "}
              <span className="font-normal text-foreground/70">AI chatbot development secured a 6-figure contract</span>
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            How Pattrn Data Secured a <span className="text-brand-orange">6-Figure Contract</span> with AI Development
          </h1>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Building2 className="h-4 w-4 text-brand-purple" />
              Business Consulting & Services
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Users className="h-4 w-4 text-brand-purple" />
              20 employees
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Clock className="h-4 w-4 text-brand-purple" />
              AI Development & Automation Consulting
            </div>
          </div>
        </div>
      </section>

      {/* Key Metric */}
      <section className="brand-gradient py-10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-12">
            <div>
              <p className="text-5xl font-bold text-white">6-Figure</p>
              <p className="mt-1 text-sm text-white/70">Contract secured</p>
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
                  "Manual customer service with high support burden",
                  "Complex requests handled entirely by human agents",
                  "No centralised knowledge base for support",
                  "Slow response times impacting customer satisfaction",
                  "No ability to scale customer interactions",
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
                  "Intelligent chatbot handling complex queries",
                  "LLM trained on domain-specific knowledge",
                  "Automated knowledge base and data store",
                  "API integrations pulling external data sources",
                  "6-figure contract secured from the delivery",
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
              <h3 className="mb-4 text-xl font-bold text-foreground">Customer Service at Scale</h3>
              <p className="text-base leading-relaxed text-foreground/70">
                Pattrn Data are experts in Data Analysis and AI, offering a range of services to multinational corporations. They deploy patented technology to swiftly and accurately analyse data. Their client aimed to enhance customer service, efficiently manage complex requests, and lessen the support team{"'"}s burden. They required a streamlined solution for rapid, accurate customer interactions that could scale without proportional headcount growth.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-purple">The Solution</p>
              <h3 className="mb-4 text-xl font-bold text-foreground">AI Development & Automation Consulting</h3>
              <p className="mb-4 text-base leading-relaxed text-foreground/70">
                Automaly developed an intelligent chatbot, trained an LLM to handle complex customer service requests, mapped and automated key processes, and built a centralised knowledge base with API integrations.
              </p>
              <ul className="space-y-2">
                {[
                  "Developed an intelligent Chatbot for the client",
                  "Trained an LLM to handle complex customer service requests",
                  "Mapped and automated key customer service processes",
                  "Created a centralised knowledge base & data store",
                  "API development to call external data sources",
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
              {"\"As a result of Automaly's work we secured a 6-figure contract with a new customer. Their consultancy was first class, and the team consistently went the extra mile with service.\""}
            </p>
            <div className="mt-6">
              <p className="text-base font-semibold text-foreground">Denise Parmer</p>
              <p className="text-sm text-foreground/70">COO | Pattrn Data</p>
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
