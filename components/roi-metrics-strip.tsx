const metrics = [
  { value: "£100K+", label: "Revenue unlocked per client" },
  { value: "3x", label: "Faster pipeline velocity" },
  { value: "12", label: "Avg. opportunities identified" },
  { value: "90-Day", label: "ROI realised" },
]

export function RoiMetricsStrip() {
  return (
    <section className="bg-brand-lavender/40 pt-4 pb-12 lg:pt-6 lg:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 h-px w-16 bg-brand-purple/15" />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-2xl font-bold text-brand-purple sm:text-3xl lg:text-4xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs font-medium text-foreground/70 sm:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
