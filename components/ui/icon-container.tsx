import { cn } from "@/lib/utils"

interface IconContainerProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "glow" | "outline" | "gradient"
  colorScheme?: "purple" | "orange" | "white"
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

const sizeClasses = {
  sm: "h-10 w-10 rounded-lg",
  md: "h-12 w-12 rounded-xl",
  lg: "h-14 w-14 rounded-2xl",
  xl: "h-16 w-16 rounded-2xl",
}

const iconSizeClasses = {
  sm: "[&>svg]:h-5 [&>svg]:w-5",
  md: "[&>svg]:h-6 [&>svg]:w-6",
  lg: "[&>svg]:h-7 [&>svg]:w-7",
  xl: "[&>svg]:h-8 [&>svg]:w-8",
}

const colorSchemes = {
  purple: {
    default: "bg-brand-purple/10 text-brand-purple",
    glow: "bg-brand-purple/15 text-brand-purple shadow-[0_0_20px_rgba(93,50,181,0.25),0_0_40px_rgba(93,50,181,0.1)]",
    outline: "border-2 border-brand-purple/20 text-brand-purple bg-transparent",
    gradient: "bg-gradient-to-br from-brand-purple/20 to-brand-orange/10 text-brand-purple",
    hover: "group-hover:bg-brand-purple group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-purple/20",
  },
  orange: {
    default: "bg-brand-orange/10 text-brand-orange",
    glow: "bg-brand-orange/15 text-brand-orange shadow-[0_0_20px_rgba(246,135,30,0.25),0_0_40px_rgba(246,135,30,0.1)]",
    outline: "border-2 border-brand-orange/20 text-brand-orange bg-transparent",
    gradient: "bg-gradient-to-br from-brand-orange/20 to-brand-purple/10 text-brand-orange",
    hover: "group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-orange/20",
  },
  white: {
    default: "bg-white/10 text-white",
    glow: "bg-white/15 text-white shadow-[0_0_20px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.05)]",
    outline: "border-2 border-white/20 text-white bg-transparent",
    gradient: "bg-gradient-to-br from-white/15 to-white/5 text-white",
    hover: "group-hover:bg-white group-hover:text-brand-purple group-hover:shadow-lg",
  },
}

export function IconContainer({
  size = "md",
  variant = "default",
  colorScheme = "purple",
  children,
  className,
  hoverEffect = true,
}: IconContainerProps) {
  const scheme = colorSchemes[colorScheme]

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300",
        sizeClasses[size],
        iconSizeClasses[size],
        scheme[variant],
        hoverEffect && scheme.hover,
        className
      )}
    >
      {children}
    </div>
  )
}
