import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { HeroBackground } from "@/components/hero-background"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const partners = [
  {
    name: "Make Official Silver Partner",
    src: "/images/partners/make-silver-partner.png",
    width: 100,
    height: 100,
    containerClass: "h-14 w-24 sm:h-16 sm:w-28 lg:h-20 lg:w-36",
  },
  {
    name: "Airtable Services Partner Builder",
    src: "/images/partners/airtable-services-partner.png",
    width: 200,
    height: 100,
    containerClass: "h-14 w-24 sm:h-16 sm:w-28 lg:h-20 lg:w-36",
  },
  {
    name: "n8n Workflow Automation Partner",
    src: "/images/logos/n8n.svg",
    width: 200,
    height: 80,
    containerClass: "h-14 w-32 sm:h-16 sm:w-40 lg:h-20 lg:w-48",
  },
]

export function HeroSection() {
  return (
    <section className="hero-circuit relative min-h-[600px] w-full overflow-hidden lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
      {/* Background Image - optimized with Next.js Image priority loading */}
      <HeroBackground
        src="/automaly-ai-automation-hero-bg.webp"
        alt="AI automation 3D server blocks illustration"
        fallbackColor="#140C2B"
        overlayGradient="linear-gradient(to right, rgba(20, 12, 43, 0.95) 0%, rgba(20, 12, 43, 0.85) 30%, rgba(20, 12, 43, 0.5) 55%, rgba(20, 12, 43, 0.2) 75%, transparent 100%)"
        positionClassName="object-right-bottom sm:object-right md:object-[center_right] lg:object-center"
      />

      <div className="relative z-10 mx-auto flex min-h-[550px] max-w-7xl items-center w-full px-6 pt-24 pb-12 lg:min-h-[80vh] lg:pt-32 lg:pb-16 xl:min-h-[85vh] 2xl:min-h-[90vh]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange sm:mb-4 sm:text-base">
            AI & Automation Consultants for Growing Businesses
          </p>
          <h1 className="text-[2.75rem] font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem] text-balance">
            <span className="text-white">Grow Revenue</span>{" "}
            <span className="text-white/90">without Growing Complexity</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base font-medium leading-relaxed text-white/70 sm:text-lg sm:max-w-lg lg:max-w-xl lg:text-xl text-pretty">
            We identify where AI & automation will save you the most time and money - then we build it.
          </p>

          {/* Partner badges - between headline and CTA for immediate credibility */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className={`relative flex items-center justify-center ${partner.containerClass}`}
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  sizes="(max-width: 640px) 96px, 144px"
                  className="object-contain"
                  style={{ width: "auto", height: "auto", maxHeight: "100%" }}
                />
              </div>
            ))}
          </div>

          {/* CTA Buttons - prioritized */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {/* Orange CTA per brand guidelines - Opens Calendly popup */}
            <CalendlyButton size="lg" variant="orange" calendlyType="assessment" className="gap-2">
              Book Your Assessment
              <ArrowRight className="h-4 w-4" />
            </CalendlyButton>
            {/* Outlined button for light background */}
            <Button size="lg" asChild variant="outline" className="gap-2 border-white/60 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-200">
              <Link href="/#how-we-work">
                See How It Works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Team avatar cluster */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex items-center -space-x-3">
              {[
                { src: "/images/team/tom-founder.webp", alt: "Tom, Founder & CEO", name: "Tom", role: "Founder & CEO" },
                { src: "/images/team/rohit-cto.webp", alt: "Rohit, CTO", name: "Rohit", role: "CTO" },
                { src: "/images/team/natalie-customer-success.webp", alt: "Natalie, Head of Customer Success", name: "Natalie", role: "Customer Success" },
                { src: "/images/team/automation-architect.jpg", alt: "Automation Architect & Delivery Lead", name: "Alex", role: "Delivery Lead" },
              ].map((member, i) => (
                <div
                  key={member.name}
                  className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-white/30 sm:h-12 sm:w-12"
                  style={{ zIndex: 4 - i }}
                >
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs font-medium text-white/50">
              Your dedicated team of AI & automation process consultants
            </p>
            <div className="mt-2 flex items-center gap-4 text-xs text-white/50">
              <span><strong className="font-semibold text-brand-orange">260+</strong> hours saved per client</span>
              <span className="h-2.5 w-px bg-white/20" aria-hidden="true" />
              <span><strong className="font-semibold text-brand-orange">£100K+</strong> revenue unlocked</span>
              <span className="h-2.5 w-px bg-white/20" aria-hidden="true" />
              <span><strong className="font-semibold text-brand-orange">50+</strong> automations delivered</span>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
