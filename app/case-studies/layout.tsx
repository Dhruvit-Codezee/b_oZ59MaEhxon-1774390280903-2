import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}
