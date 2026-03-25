"use client"

import Script from "next/script"

export function CalendlyScript() {
  return (
    <>
      {/* Calendly widget stylesheet */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      {/* Calendly widget script - loaded async for performance */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}
