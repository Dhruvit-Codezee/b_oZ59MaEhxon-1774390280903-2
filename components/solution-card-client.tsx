"use client"

import { useState } from "react"
import { CheckCircle2, DollarSign, ChevronDown } from "lucide-react"
import type { SerializableArea } from "./solution-card"

/* ── Single compact solution card ───────────────────────────────────────── */

function SolutionCard({ area }: { area: SerializableArea }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="group flex h-full flex-col rounded-xl border border-brand-purple/20 bg-white transition-shadow hover:shadow-md">
      {/* Header bar */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-3 px-4 py-4 text-left lg:cursor-default"
      >
        <div className="min-w-0 flex-1">
          <h3 className="text-[13px] font-bold leading-snug text-foreground">
            {area.title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-foreground/70 line-clamp-2">
            {area.problem}
          </p>
        </div>
        <ChevronDown
          className={`mt-0.5 h-4 w-4 shrink-0 text-foreground/30 transition-transform lg:hidden ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable body - always visible on lg+, toggle on mobile */}
      <div
        className={`flex-1 flex-col border-t border-brand-purple/5 px-4 pb-4 pt-3 ${
          open ? "flex" : "hidden lg:flex"
        }`}
      >
        {/* Solution bullets */}
        <ul className="flex-1 space-y-1.5">
          {area.solutions.map((s) => (
            <li key={s} className="flex items-start gap-2">
              <CheckCircle2 className="mt-[3px] h-3 w-3 shrink-0 text-brand-purple" />
              <span className="text-[12px] leading-snug text-foreground/65">{s}</span>
            </li>
          ))}
        </ul>

        {/* ROI */}
        <div className="mt-3 rounded-lg bg-brand-lavender px-3 py-2.5">
          <p className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-orange mb-1">
            <DollarSign className="h-2.5 w-2.5" />
            ROI Impact
          </p>
          <p className="text-xs leading-relaxed text-foreground/55 line-clamp-3">
            {area.roi}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Grid: 5 cards on one line at xl, 3 at lg, 2 at sm ─────────────────── */

export function SolutionCardGridClient({ areas }: { areas: SerializableArea[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {areas.map((area) => (
        <SolutionCard key={area.number} area={area} />
      ))}
    </div>
  )
}
