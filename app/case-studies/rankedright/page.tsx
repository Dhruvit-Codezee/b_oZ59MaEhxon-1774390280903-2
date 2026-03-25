import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle2, Quote, Clock, Users, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "RankedRight Case Study - RevOps Transformation Leading to Acquisition | Automaly",
  description:
    "How Automaly helped RankedRight scale their operations with RevOps consulting and Airtable automation, building the engine that supported their acquisition by Lansweeper.",
  openGraph: {
    title: "RankedRight Case Study | Automaly",
    description: "RevOps transformation that built the engine leading to acquisition by Lansweeper.",
    url: "https://www.automaly.io/case-studies/rankedright",
  },
  alternates: { canonical: "https://www.automaly.io/case-studies/rankedright" },
}

export default function RankedRightCaseStudy() {
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

          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/images/clients/ranked-right-logo.png"
              alt="RankedRight logo"
              width={160}
              height={40}
              className="max-h-10 w-auto object-contain"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="flex h-10 items-center justify-center overflow-hidden rounded-lg bg-foreground/90 px-2">
              <Image
                src="/images/clients/lansweeper-logo.jpg"
                alt="Lansweeper logo"
                width={40}
                height={40}
                className="max-h-8 w-auto object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>

          <div className="mb-4 rounded-lg bg-brand-purple/5 px-4 py-2 inline-block">
            <p className="text-sm font-semibold text-brand-purple">
              <span className="font-mono uppercase">TL;DR:</span>{" "}
              <span className="font-normal text-foreground/70">RevOps transformation built the engine that led to acquisition by Lansweeper</span>
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            How RankedRight Scaled RevOps and Was <span className="text-brand-orange">Acquired by Lansweeper</span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Building2 className="h-4 w-4 text-brand-purple" />
              IT & Cyber Security
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Users className="h-4 w-4 text-brand-purple" />
              250 employees | Acquired by Lansweeper
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Clock className="h-4 w-4 text-brand-purple" />
              RevOps, Airtable & Automation
            </div>
          </div>
        </div>
      </section>

      {/* Key Metric */}
      <section className="brand-gradient py-10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-12">
            <div>
              <p className="text-5xl font-bold text-white">Acquired</p>
              <p className="mt-1 text-sm text-white/70">By Lansweeper</p>
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
                  "Unstructured CRM with no clear data model",
                  "No scalable sales operations in place",
                  "Limited inbound and outbound processes",
                  "Manual operational workflows slowing growth",
                  "Post-funding urgency with no infrastructure to scale",
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
                  "Automated pipelines via Airtable CRM",
                  "Scalable inbound and outbound sales processes",
                  "Core operational processes automated end-to-end",
                  "Airtable integrated with existing systems",
                  "Acquisition-ready operations acquired by Lansweeper",
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
              <h3 className="mb-4 text-xl font-bold text-foreground">Post-Funding Growth Without Infrastructure</h3>
              <p className="text-base leading-relaxed text-foreground/70">
                RankedRight offers a cybersecurity platform that automates vulnerability triage based on your specific business rules, optimising resource allocation and enhancing security operations. After securing funding, they faced significant challenges in scaling operations rapidly. Their CRM and operational processes were unstructured, leading to limited sales operations and inefficiencies that blocked their ability to capitalise on market demand.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-purple">The Solution</p>
              <h3 className="mb-4 text-xl font-bold text-foreground">RevOps, Airtable & Automation</h3>
              <p className="mb-4 text-base leading-relaxed text-foreground/70">
                Automaly provided specialised RevOps consulting, implemented Airtable as a scalable CRM, automated core business processes, and built scalable inbound and outbound sales workflows that supported the company through to acquisition.
              </p>
              <ul className="space-y-2">
                {[
                  "Provided specialised RevOps consulting services",
                  "Implemented Airtable for scalability and efficiency",
                  "Implemented tailored automation of core processes",
                  "Integrated Airtable with existing operational systems",
                  "Implemented scalable inbound and outbound sales processes",
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
              {"\"Automaly have really understood our needs as a business and delivered quality advice, support, and software training at every step to help support our ambitious growth goals.\""}
            </p>
            <div className="mt-6">
              <p className="text-base font-semibold text-foreground">Thomas McKenzie</p>
              <p className="text-sm text-foreground/70">CEO | RankedRight Ltd</p>
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
