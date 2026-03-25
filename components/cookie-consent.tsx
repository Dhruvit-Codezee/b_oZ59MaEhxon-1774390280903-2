"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cookie, ChevronDown, Shield, BarChart3, Target, Settings } from "lucide-react"

/* ── Cookie categories ───────────────────────────────────────────────── */

const cookieCategories = [
  {
    id: "essential",
    label: "Essential",
    description:
      "Required for the website to function properly. These cookies enable core features like security, session management, and accessibility. They cannot be disabled.",
    icon: Shield,
    required: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description:
      "Help us understand how visitors interact with our website by collecting anonymous usage data. This helps us improve our content and user experience.",
    icon: BarChart3,
    required: false,
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Used to track visitors across websites to display relevant advertisements. These cookies help measure the effectiveness of marketing campaigns.",
    icon: Target,
    required: false,
  },
  {
    id: "functional",
    label: "Functional",
    description:
      "Enable enhanced features and personalisation, such as remembering your preferences, language selection, and region settings for a tailored experience.",
    icon: Settings,
    required: false,
  },
]

type CookiePreferences = Record<string, boolean>

const COOKIE_CONSENT_KEY = "automaly-cookie-consent"

function getStoredPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

function storePreferences(prefs: CookiePreferences) {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs))
}

/* ── Toggle switch ───────────────────────────────────────────────────── */

function Toggle({
  checked,
  disabled,
  onChange,
  id,
}: {
  checked: boolean
  disabled?: boolean
  onChange: (value: boolean) => void
  id: string
}) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`
        relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent
        transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2
        ${disabled ? "cursor-not-allowed opacity-60" : ""}
        ${checked ? "bg-brand-purple" : "bg-foreground/20"}
      `}
    >
      <span className="sr-only">Toggle {id}</span>
      <span
        className={`
          pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg ring-0
          transition-transform ${checked ? "translate-x-5" : "translate-x-0"}
        `}
      />
    </button>
  )
}

/* ── Main Component ──────────────────────────────────────────────────── */

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    const defaults: CookiePreferences = {}
    cookieCategories.forEach((cat) => {
      defaults[cat.id] = cat.required
    })
    return defaults
  })

  useEffect(() => {
    const stored = getStoredPreferences()
    if (!stored) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = useCallback(() => {
    const allAccepted: CookiePreferences = {}
    cookieCategories.forEach((cat) => {
      allAccepted[cat.id] = true
    })
    storePreferences(allAccepted)
    setVisible(false)
  }, [])

  const handleRejectNonEssential = useCallback(() => {
    const essentialOnly: CookiePreferences = {}
    cookieCategories.forEach((cat) => {
      essentialOnly[cat.id] = cat.required
    })
    storePreferences(essentialOnly)
    setVisible(false)
  }, [])

  const handleSavePreferences = useCallback(() => {
    storePreferences(preferences)
    setVisible(false)
  }, [preferences])

  const togglePreference = useCallback((id: string, value: boolean) => {
    setPreferences((prev) => ({ ...prev, [id]: value }))
  }, [])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-brand-purple/15 bg-white shadow-2xl shadow-foreground/10">
        {/* Header bar */}
        <div className="flex items-start gap-4 px-5 pt-5 pb-0 sm:px-6 sm:pt-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple/10">
            <Cookie className="h-5 w-5 text-brand-purple" />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-semibold text-foreground">
              We value your privacy
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-foreground/60">
              We use cookies to enhance your browsing experience, analyse site
              traffic, and personalise content. You can choose which cookies to
              allow below. Read our{" "}
              <Link
                href="/privacy"
                className="font-medium text-brand-purple underline decoration-brand-purple/30 underline-offset-2 transition-colors hover:text-brand-blue hover:decoration-brand-blue/50"
              >
                Privacy Policy
              </Link>{" "}
              for more details.
            </p>
          </div>
        </div>

        {/* Expandable details */}
        <div className="px-5 pt-4 sm:px-6">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-purple transition-colors hover:text-brand-blue"
            aria-expanded={showDetails}
          >
            Manage preferences
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${showDetails ? "rotate-180" : ""}`}
            />
          </button>

          {showDetails && (
            <div className="mt-4 space-y-3" role="group" aria-label="Cookie preferences">
              {cookieCategories.map((cat) => {
                const Icon = cat.icon
                return (
                  <div
                    key={cat.id}
                    className="flex items-start gap-4 rounded-xl border border-border bg-brand-lavender/50 p-4 transition-colors hover:border-brand-purple/20"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-purple shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <label
                          htmlFor={`cookie-${cat.id}`}
                          className="text-sm font-semibold text-foreground"
                        >
                          {cat.label}
                          {cat.required && (
                            <span className="ml-2 inline-block rounded-full bg-brand-purple/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                              Required
                            </span>
                          )}
                        </label>
                        <Toggle
                          id={`cookie-${cat.id}`}
                          checked={preferences[cat.id]}
                          disabled={cat.required}
                          onChange={(value) => togglePreference(cat.id, value)}
                        />
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-foreground/70">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2.5 px-5 py-5 sm:flex-row sm:items-center sm:justify-end sm:px-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRejectNonEssential}
            className="order-3 text-foreground/70 hover:text-foreground sm:order-1 sm:mr-auto"
          >
            Reject non-essential
          </Button>
          {showDetails && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleSavePreferences}
              className="order-2 border-brand-purple/20 text-brand-purple hover:bg-brand-purple/5 hover:text-brand-blue"
            >
              Save preferences
            </Button>
          )}
          <Button
            size="sm"
            onClick={handleAcceptAll}
            className="order-1 bg-brand-purple text-white hover:bg-brand-blue sm:order-3"
          >
            Accept all cookies
          </Button>
        </div>
      </div>
    </div>
  )
}
