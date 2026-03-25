"use client"

import { useState, useEffect } from "react"
import { CalendlyButton } from "@/components/calendly-button"
import { ArrowRight } from "lucide-react"

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~600px (past hero)
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      role="complementary"
      aria-label="Book consultation"
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-brand-orange/20 bg-white/95 px-4 py-3 backdrop-blur-sm transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <CalendlyButton
        size="lg"
        variant="orange"
        calendlyType="assessment"
        className="w-full gap-2"
      >
        Book Your Assessment
        <ArrowRight className="h-4 w-4" />
      </CalendlyButton>
      <p className="mt-1.5 text-center text-xs text-foreground/70">
        No obligation. NDA available on request.
      </p>
    </div>
  )
}
