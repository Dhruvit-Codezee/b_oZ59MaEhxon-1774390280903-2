import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { iconMap, type UseCaseEntry } from "@/lib/use-cases"

/* ── Compact horizontal card (used in cross-link grids, 2-col layouts) ──── */

interface UseCaseCardProps {
  useCase: UseCaseEntry
  metric?: string
  variant?: "function" | "sector"
}

export function UseCaseCard({ useCase, metric, variant = "function" }: UseCaseCardProps) {
  const Icon = iconMap[useCase.icon] || ArrowRight
  const isSector = variant === "sector"

  return (
    <Link
      href={`/use-cases/${useCase.slug}`}
      className={`group flex items-center gap-3.5 rounded-xl border px-4 py-3.5 transition-all hover:shadow-md ${
        isSector
          ? "border-brand-purple/20 bg-brand-lavender hover:border-brand-purple/25 hover:shadow-brand-purple/5"
          : "border-brand-purple/20 bg-white hover:border-brand-purple/25 hover:shadow-brand-purple/5"
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-brand-orange group-hover:text-white">
        <Icon className="h-4.5 w-4.5" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold leading-tight text-foreground transition-colors group-hover:text-brand-purple">
          {useCase.shortTitle}
        </h3>
        {metric && (
          <p className="mt-0.5 text-xs font-medium text-brand-orange truncate">
            {metric}
          </p>
        )}
      </div>

      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-foreground/25 transition-all group-hover:text-brand-purple group-hover:translate-x-0.5" />
    </Link>
  )
}

/* ── Single-row card grid (6 items on one line at lg+) ──────────────────── */

interface UseCaseCardGridProps {
  useCases: UseCaseEntry[]
  metrics?: Record<string, string>
  variant?: "function" | "sector"
}

export function UseCaseCardGrid({ useCases, metrics, variant = "function" }: UseCaseCardGridProps) {
  const isSector = variant === "sector"

  return (
    <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {useCases.map((useCase) => {
        const Icon = iconMap[useCase.icon] || ArrowRight
        const metric = metrics?.[useCase.slug]

        return (
          <Link
            key={useCase.slug}
            href={`/use-cases/${useCase.slug}`}
            className={`group flex flex-col items-center rounded-xl border px-4 py-5 text-center transition-all hover:shadow-md ${
              isSector
                ? "border-brand-purple/20 bg-brand-lavender hover:border-brand-purple/25 hover:shadow-brand-purple/5"
                : "border-brand-purple/20 bg-white hover:border-brand-purple/25 hover:shadow-brand-purple/5"
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-brand-orange group-hover:text-white">
              <Icon className="h-5 w-5" />
            </div>

            <h3 className="mt-3 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-brand-purple text-balance">
              {useCase.shortTitle}
            </h3>

            {metric && (
              <p className="mt-1 text-xs font-medium leading-tight text-brand-orange">
                {metric}
              </p>
            )}

            <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-medium text-brand-purple opacity-0 transition-opacity group-hover:opacity-100">
              Explore
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        )
      })}
    </div>
  )
}
