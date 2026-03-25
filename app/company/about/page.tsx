import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HeroBackground } from "@/components/hero-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { clientQuotes } from "@/lib/testimonials"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  ShieldCheck,
  BarChart3,
  Settings2,
  Rocket,
  XCircle,
  Lightbulb,
  Cog,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Automaly | AI & Automation Consultants for Growing Businesses",
  description:
    "Automaly is a UK-based AI and automation consultancy helping businesses scale through process automation, CRM integration, and AI-driven workflows. We improve sales, marketing, and operations.",
  openGraph: {
    title: "About Automaly | AI & Automation Consultants for Growing Businesses",
    description:
      "UK-based AI and automation consultancy delivering measurable ROI across sales, marketing, and operations. Process automation, CRM integration, and AI workflows.",
    url: "https://www.automaly.io/company/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Automaly | AI & Automation Consultants",
    description:
      "UK-based consultancy helping businesses scale through AI, automation, and CRM integration.",
  },
  alternates: {
    canonical: "https://www.automaly.io/company/about",
  },
}

/* ── Team Data ──────────────────────────────────────────────────────── */

const team = [
  {
    name: "Tom",
    role: "Founder & CEO",
    image: "/images/team/tom-founder.webp",
    bio: "Over 15 years' experience across technology, innovation and cyber security. Tom leads Automaly with a clear focus: connecting systems to revenue and reducing operational friction through intelligent automation. With deep technical knowledge and a strong emphasis on Revenue Operations, he ensures technology directly supports growth, not complexity.",
    specialisms: ["Revenue Operations", "Cyber Security", "Digital Transformation"],
  },
  {
    name: "Rohit",
    role: "CTO",
    image: "/images/team/rohit-cto.webp",
    bio: "An AI and systems integration specialist with over 10 years' experience in large organisations. Rohit combines deep expertise in AI, automation and data strategy with a practical, plain English approach - ensuring every solution is commercially sound, compliant and defensible. With a background in economics, he focuses relentlessly on ROI.",
    specialisms: ["AI & Machine Learning", "Regulated Industries", "Data Strategy"],
  },
  {
    name: "Natalie",
    role: "Head of Customer Success",
    image: "/images/team/natalie-customer-success.webp",
    bio: "Over 10 years' experience in Customer Success and operational process improvement across B2B and B2C organisations. Natalie ensures clients do not just implement automation, but fully adopt it and realise measurable value. She works closely with leadership teams and operational staff to embed new processes and drive engagement.",
    specialisms: ["Change Management", "Process Improvement", "Client Enablement"],
  },
]

/* ── Why Automaly Differentiators ───────────────────────────────────── */

const differentiators = [
  {
    icon: BarChart3,
    title: "Proven ROI",
    description:
      "We calculate impact before implementation. Only ROI positive processes move forward.",
    gradient: "radial-gradient(circle at 0% 0%, rgba(122, 75, 246, 0.06) 0%, transparent 60%)",
  },
  {
    icon: Settings2,
    title: "Tailored Solutions",
    description:
      "No templates. No generic workflows. Every automation strategy is bespoke to your business model and operational structure.",
    gradient: "radial-gradient(circle at 100% 0%, rgba(250, 126, 17, 0.05) 0%, transparent 60%)",
  },
  {
    icon: ShieldCheck,
    title: "Certified Expertise",
    description:
      "Certified Advanced Users in leading automation technologies including Make, Airtable and Pipedrive, with development expertise across Python, C# and SQL.",
    gradient: "radial-gradient(circle at 0% 100%, rgba(250, 126, 17, 0.05) 0%, transparent 60%)",
  },
  {
    icon: Rocket,
    title: "End-to-End Implementation",
    description:
      "From audit to build to enablement, we deliver the full lifecycle. We do not advise and disappear. We build, test, launch and support.",
    gradient: "radial-gradient(circle at 100% 100%, rgba(122, 75, 246, 0.06) 0%, transparent 60%)",
  },
]

/* ── Process Steps ──────────────────────────────────────────────────── */

const processSteps = [
  {
    step: 1,
    title: "AI Automation Readiness Assessment",
    description:
      "We analyse your current processes and systems to identify high impact opportunities.",
  },
  {
    step: 2,
    title: "Identify Key Processes",
    description:
      "We prioritise areas with measurable commercial upside for analysis.",
  },
  {
    step: 3,
    title: "Develop an Improved Process",
    description:
      "We redesign workflows using AI and automation aligned to your business model.",
  },
  {
    step: 4,
    title: "Calculate the ROI",
    description:
      "We quantify cost savings, time efficiency and revenue impact before build.",
  },
  {
    step: 5,
    title: "Build, Test, Enable & Launch",
    description:
      "We implement, optimise and embed solutions into your organisation.",
  },
]

/* ── Anti-patterns ──────────────────────────────────────────────────── */

const antiPatterns = [
  "Tools purchased without strategy",
  "AI layered onto broken processes",
  "Consultants advising but not delivering",
  "Pilots that never ship",
]

/* ── JSON-LD Schema ─────────────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Automaly",
  description:
    "Automaly is a UK-based AI and automation consultancy helping businesses scale through process automation, CRM integration, and AI-driven workflows.",
  url: "https://www.automaly.io/company/about",
  mainEntity: {
    "@type": "Organization",
    name: "Automaly",
    url: "https://www.automaly.io",
    logo: "https://www.automaly.io/images/automaly-logo.png",
    description:
      "AI & Automation consultancy helping businesses improve sales, marketing, and operations through process automation, CRM integration, and AI workflows.",
    foundingDate: "2021",
    founder: [
      { "@type": "Person", name: "Tom", jobTitle: "Founder & CEO" },
      { "@type": "Person", name: "Rohit", jobTitle: "CTO" },
    ],
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Ireland" },
    ],
    knowsAbout: [
      "AI Automation",
      "Business Process Automation",
      "CRM Integration",
      "Sales Automation",
      "Marketing Automation",
      "AI Agent Development",
      "Digital Transformation",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@automaly.io",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: ["https://www.linkedin.com/company/automaly"],
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── 1. Hero ────────────────────────────────────────────────── */}
        <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
          {/* Background Image - optimized with Next.js Image priority loading */}
          <HeroBackground
            src="/images/about-hero.webp"
            alt="Isometric 3D illustration of connected technology platforms with glowing circuit pathways"
            fallbackColor="#3b0d7e"
            overlayGradient="radial-gradient(ellipse 70% 60% at center, rgba(59, 13, 126, 0.7) 0%, rgba(59, 13, 126, 0.4) 60%, rgba(59, 13, 126, 0.2) 100%)"
          />
          <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center w-full px-6 pt-28 pb-16 lg:min-h-[80vh] lg:pt-36 lg:pb-20 xl:min-h-[85vh] 2xl:min-h-[90vh]">
            <div className="max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              About Automaly
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              <span className="text-brand-orange">Create. Automate.</span>{" "}
              <span className="text-white">Thrive.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
              We believe technology should remove friction, not create it.
              Automaly helps growing businesses identify where AI and automation
              will save the most time and money - then we redesign processes,
              connect systems, and build solutions that deliver measurable ROI.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                variant="orange" className="gap-2"
              >
                <Link href="/services/ai-readiness-assessment">
                  Book Your Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200"
              >
                <Link href="/services">See Our Services</Link>
              </Button>
            </div>
            </div>
          </div>
        </section>

        {/* ── 2. Our Story ──────────────────────────────────────────── */}
        <section className="bg-section-lavender py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
              {/* Narrative */}
              <div className="flex-1">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-orange">
                  Our Story
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  What We{" "}
                  <span className="text-brand-purple">Believe</span>
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/70">
                  <p>
                    Too many businesses are weighed down by manual processes,
                    disconnected systems and expensive tech stacks that do not
                    deliver measurable value.
                  </p>
                  <p>
                    Automation and AI are not about replacing people. They are
                    about unlocking human potential - removing repetitive work,
                    enabling better decisions, faster execution and sustainable
                    growth.
                  </p>
                  <p>
                    We saw a pattern. Businesses investing heavily in technology,
                    yet still struggling with manual administrative work, poor
                    system integration, data silos, AI pilots with no clear ROI
                    and rising operational costs.
                  </p>
                  <p className="font-medium text-foreground/80">
                    We founded Automaly to change that. Not by selling
                    subscriptions or pushing platforms - but by becoming a true
                    partner who designs, builds and implements solutions that
                    deliver measurable commercial impact.
                  </p>
                </div>
              </div>

              {/* Stat card + anti-patterns */}
              <div className="w-full shrink-0 space-y-6 lg:w-5/12">
                {/* Key stat */}
                <div className="rounded-2xl border border-brand-purple/20 bg-white p-8 text-center">
                  <p className="text-4xl font-bold text-brand-purple sm:text-5xl">
                    60%
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    of roles have at least 30% of activities that can be
                    automated - while less than 5% of jobs can be fully
                    automated.
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                    The opportunity is enormous
                  </p>
                </div>

                {/* Anti-patterns */}
                <div className="rounded-2xl border border-brand-purple/20 bg-white p-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                    We saw automation done wrong
                  </p>
                  <ul className="space-y-3">
                    {antiPatterns.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                        <span className="text-sm text-foreground/60">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. The Team ───────────────────────────────────────────── */}
        <section className="bg-section-light py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                The Team
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Meet the People Behind{" "}
                <span className="text-brand-purple">Automaly</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/70 text-pretty">
                We are not a software company. We are a consulting and
                implementation partner. Our team combines deep technical
                expertise, commercial awareness and hands-on operational
                experience.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center rounded-2xl border border-brand-purple/20 bg-brand-lavender p-8 text-center"
                >
                  <div className="relative mb-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-white">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Automaly`}
                      fill
                      loading="lazy"
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-brand-purple">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                    {member.bio}
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {member.specialisms.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full bg-brand-purple/10 px-3 py-1 text-xs font-medium text-brand-purple"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Why Automaly ─────────────────────────���─────────────── */}
        <section className="bg-section-lavender py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header + pillars (full width) */}
            <div className="mb-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Why Automaly
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                What Makes Us{" "}
                <span className="text-brand-purple">Different</span>
              </h2>

              {/* Pillars as intro */}
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-8">
                {[
                  { icon: Lightbulb, text: "Creation drives innovation." },
                  { icon: Cog, text: "Automation drives efficiency." },
                  {
                    icon: TrendingUp,
                    text: "Together, they enable organisations to thrive.",
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.text}
                    className="flex items-center gap-3"
                  >
                    <pillar.icon className="h-4 w-4 shrink-0 text-brand-purple" />
                    <span className="text-sm font-medium text-foreground/80">
                      {pillar.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiator cards - single horizontal row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((diff, i) => {
                const Icon = diff.icon
                return (
                  <div
                    key={diff.title}
                    className={`flex flex-col bg-white p-6 ${
                      i < differentiators.length - 1
                        ? "border-b sm:border-b-0 sm:border-r border-brand-purple/20"
                        : ""
                    } ${i === 0 ? "rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl" : ""} ${
                      i === differentiators.length - 1
                        ? "rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl"
                        : ""
                    }`}
                    style={{ background: diff.gradient }}
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-purple/10">
                      <Icon className="h-4.5 w-4.5 text-brand-purple" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">
                      {diff.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                      {diff.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Governance statement */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-brand-purple" />
              <p className="text-sm font-medium text-foreground/70">
                <span className="font-semibold text-foreground">
                  Transparent, compliant and accountable.
                </span>{" "}
                Governance is not optional - it is foundational.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. Our Process ────────────────────────────────────────── */}
        <section className="bg-section-light py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                How We Work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Our 5-Step{" "}
                <span className="text-brand-purple">
                  Process Improvement Plan
                </span>
              </h2>
            </div>

            {/* Steps */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-brand-purple/20 bg-brand-lavender p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-lg text-center text-sm font-medium text-foreground/60">
              Only ROI positive initiatives move forward.
            </p>

            {/* Light CTA */}
            <div className="mt-8 text-center">
              <Button
                size="lg"
                asChild
                variant="orange" className="gap-2"
              >
                <Link href="/services/ai-readiness-assessment">
                  Book Your Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── 6. Client Testimonials ────────────────────────────────── */}
        <section className="bg-section-lavender py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Client Testimonials
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Trusted by{" "}
                <span className="text-brand-purple">Growing Businesses</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/70 text-pretty">
                We measure our success by the results our clients achieve.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {clientQuotes.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex flex-col rounded-2xl border border-brand-purple/20 bg-white p-8"
                >
                  <Quote className="mb-4 h-8 w-8 text-brand-purple/20" />
                  <blockquote className="flex-1 text-sm leading-relaxed text-foreground/70">
                    {`"${testimonial.quote}"`}
                  </blockquote>
                  <div className="mt-6 border-t border-brand-purple/20 pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-foreground/70">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA ───────────��────────────────────────────────────── */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
