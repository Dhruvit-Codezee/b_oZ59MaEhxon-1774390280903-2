import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { PainPointsSection } from "@/components/pain-points-section"
import { RoiMetricsStrip } from "@/components/roi-metrics-strip"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import {
  FeaturesSkeleton,
  ProcessSkeleton,
  TestimonialsSkeleton,
  CTASkeleton,
} from "@/components/section-skeletons"

// Dynamic imports for below-fold sections to reduce initial bundle size
const FeaturesSection = dynamic(
  () => import("@/components/features-section").then((mod) => mod.FeaturesSection),
  { loading: () => <FeaturesSkeleton />, ssr: true }
)

const ProcessSection = dynamic(
  () => import("@/components/process-section").then((mod) => mod.ProcessSection),
  { loading: () => <ProcessSkeleton />, ssr: true }
)

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection),
  { loading: () => <TestimonialsSkeleton />, ssr: true }
)

const CTASection = dynamic(
  () => import("@/components/cta-section").then((mod) => mod.CTASection),
  { loading: () => <CTASkeleton />, ssr: true }
)

export const metadata: Metadata = {
  title: "AI & Automation Consultants | Improve Productivity & Growth - Automaly",
  description:
    "Automaly helps businesses improve growth and lower costs with AI and automation consulting, digital transformation, and custom AI development.",
  openGraph: {
    title: "AI & Automation Consultants | Improve Productivity & Growth",
    description:
      "Scale revenue without scaling complexity. Automaly delivers AI readiness assessments, sales automation, and operational efficiency for growing businesses.",
    url: "https://www.automaly.io",
  },
  alternates: {
    canonical: "https://www.automaly.io",
  },
}

export default function Page() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* 1. WHITE     - Hero with optimized spacing and clear CTA */}
        <HeroSection />
        {/* 1b. WHITE    - Auto-scrolling trust strip of integration logos */}
        <LogoMarquee />
        {/* 2. WHITE     - Pain points: why scaling is harder than it looks */}
        <PainPointsSection />
        {/* 2b. WHITE    - ROI metrics proof strip */}
        <RoiMetricsStrip />
        {/* 3. LAVENDER  - Feature cards (4 cards, 2x2 grid) */}
        <FeaturesSection />
        {/* 4. GRADIENT  - 4-step process on blue-to-purple gradient */}
        <ProcessSection />
        {/* 5. LAVENDER  - Client testimonials with metrics */}
        <TestimonialsSection />
        {/* 7. GRADIENT  - Final AI Assessment CTA */}
        <CTASection />
      </main>
      {/* Sticky mobile CTA bar */}
      <StickyMobileCTA />
      {/* 10. GRADIENT - Footer on blue-to-purple gradient */}
      <Footer />
    </>
  )
}
