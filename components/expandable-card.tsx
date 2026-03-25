"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface ExpandableCardProps {
  description: string
  detail: string
}

export function ExpandableCard({ description, detail }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <p className={`text-base leading-relaxed text-foreground/70 ${!isExpanded ? "line-clamp-2" : ""}`}>
        {description}
      </p>
      {isExpanded && detail && (
        <p className="mt-3 text-base leading-relaxed text-foreground/70">
          {detail}
        </p>
      )}
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-purple hover:text-brand-purple/80 transition-colors"
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Read less" : "Read more"}
        <ChevronDown className={`h-3 w-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </button>
    </>
  )
}
