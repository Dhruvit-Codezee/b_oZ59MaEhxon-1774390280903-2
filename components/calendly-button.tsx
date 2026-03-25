"use client"

import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"

// Calendly URL mapping for different CTAs
const CALENDLY_URLS = {
  assessment: "https://calendly.com/automaly-tom/partnership-follow-up",
  project: "https://calendly.com/automaly-tom/partnership-follow-up",
  retainer: "https://calendly.com/automaly-tom/partnership-follow-up",
} as const

type CalendlyType = keyof typeof CALENDLY_URLS

interface CalendlyButtonProps extends Omit<ButtonProps, "asChild"> {
  calendlyType?: CalendlyType
  calendlyUrl?: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// Extend window for Calendly types
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export function CalendlyButton({
  calendlyType = "assessment",
  calendlyUrl,
  children,
  className,
  onClick,
  ...props
}: CalendlyButtonProps) {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      
      const url = calendlyUrl || CALENDLY_URLS[calendlyType]
      
      if (typeof window !== "undefined" && window.Calendly) {
        window.Calendly.initPopupWidget({ url })
      } else {
        // Fallback: open in new tab if Calendly widget not loaded
        window.open(url, "_blank", "noopener,noreferrer")
      }
      
      // Call additional onClick handler if provided (e.g., for closing mobile menu)
      onClick?.(e)
    },
    [calendlyType, calendlyUrl, onClick]
  )

  return (
    <Button
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Button>
  )
}
