import Image from "next/image"

interface HeroBackgroundProps {
  src: string
  alt: string
  fallbackColor: string
  overlayGradient: string
  /** Background position classes - defaults to center */
  positionClassName?: string
  /** 
   * Object-fit mode for the image. 
   * - "cover": Image covers container, may crop (default)
   * - "contain": Image fits within container, no cropping
   * - "responsive": Cover on mobile, contain on desktop (lg+)
   */
  objectFit?: "cover" | "contain" | "responsive"
}

/**
 * Optimized hero background component using Next.js Image with priority loading.
 * This component improves LCP by using <Image priority> instead of CSS background-image,
 * allowing the browser to discover and fetch the hero image earlier in the render cycle.
 */
export function HeroBackground({
  src,
  alt,
  fallbackColor,
  overlayGradient,
  positionClassName = "object-center",
  objectFit = "cover",
}: HeroBackgroundProps) {
  // Determine object-fit classes based on mode
  const objectFitClasses = {
    cover: "object-cover",
    contain: "object-contain",
    responsive: "object-cover lg:object-contain",
  }[objectFit]

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`${objectFitClasses} ${positionClassName}`}
        style={{ backgroundColor: fallbackColor }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: overlayGradient }}
        aria-hidden="true"
      />
    </>
  )
}
