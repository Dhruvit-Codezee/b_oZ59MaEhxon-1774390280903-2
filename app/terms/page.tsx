import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms and Conditions | Automaly",
  description:
    "Terms and conditions of use for the Automaly website. Read our legal terms covering intellectual property, acceptable use, liability, and more.",
  openGraph: {
    title: "Terms and Conditions | Automaly",
    description:
      "Terms and conditions governing the use of the Automaly website and services.",
    url: "https://www.automaly.io/terms",
  },
  alternates: {
    canonical: "https://www.automaly.io/terms",
  },
}

const sections = [
  {
    title: "Introduction",
    paragraphs: [
      'These terms and conditions apply between you, the User of this Website (including any sub-domains, unless expressly excluded by their own terms and conditions), and Automaly Ltd, the owner and operator of this Website. Please read these terms and conditions carefully, as they affect your legal rights. Your agreement to comply with and be bound by these terms and conditions is deemed to occur upon your first use of the Website. If you do not agree to be bound by these terms and conditions, you should stop using the Website immediately.',
      'In these terms and conditions, User or Users means any third party that accesses the Website and is not either (i) employed by Automaly Ltd and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to Automaly Ltd and accessing the Website in connection with the provision of such services.',
      'You must be at least 18 years of age to use this Website. By using the Website and agreeing to these terms and conditions, you represent and warrant that you are at least 18 years of age.',
    ],
  },
  {
    title: "Intellectual Property and Acceptable Use",
    paragraphs: [
      '1. All Content included on the Website, unless uploaded by Users, is the property of Automaly Ltd, our affiliates or other relevant third parties. In these terms and conditions, Content means any text, graphics, images, audio, video, software, data compilations, page layout, underlying code and software and any other form of information capable of being stored in a computer that appears on or forms part of this Website, including any such content uploaded by Users. By continuing to use the Website you acknowledge that such Content is protected by copyright, trademarks, database rights and other intellectual property rights. Nothing on this site shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark, logo or service mark displayed on the site without the owner\'s prior written permission.',
    ],
    subsection: {
      intro: '2. You may, for your own personal, non-commercial use only, do the following:',
      items: [
        'Retrieve, display and view the Content on a computer screen.',
      ],
    },
    afterItems: [
      '3. You must not otherwise reproduce, modify, copy, distribute or use for commercial purposes any Content without the written permission of Automaly Ltd.',
    ],
  },
  {
    title: "Prohibited Use",
    paragraphs: [
      '4. You may not use the Website for any of the following purposes:',
    ],
    items: [
      'In any way which causes, or may cause, damage to the Website or interferes with any other person\'s use or enjoyment of the Website.',
      'In any way which is harmful, unlawful, illegal, abusive, harassing, threatening or otherwise objectionable or in breach of any applicable law, regulation, or governmental order.',
      'Making, transmitting or storing electronic copies of Content protected by copyright without the permission of the owner.',
    ],
  },
  {
    title: "Links to Other Websites",
    paragraphs: [
      '5. This Website may contain links to other sites. Unless expressly stated, these sites are not under the control of Automaly Ltd or that of our affiliates.',
      '6. We assume no responsibility for the content of such websites and disclaim liability for any and all forms of loss or damage arising out of the use of them.',
      '7. The inclusion of a link to another site on this Website does not imply any endorsement of the sites themselves or of those in control of them.',
    ],
  },
  {
    title: "Privacy Policy",
    paragraphs: [
      '8. Use of the Website is also governed by our Privacy Policy, which is incorporated into these terms and conditions by this reference.',
    ],
    link: {
      text: "View our Privacy Policy",
      href: "/privacy",
    },
  },
  {
    title: "Availability of the Website and Disclaimers",
    paragraphs: [
      '9. Any online facilities, tools, services or information that Automaly Ltd makes available through the Website (the Service) is provided "as is" and on an "as available" basis. We give no warranty that the Service will be free of defects and/or faults. To the maximum extent permitted by the law, we provide no warranties (express or implied) of fitness for a particular purpose, accuracy of the information, compatibility and satisfactory quality. Automaly Ltd is under no obligation to update information on the Website.',
      '10. Whilst Automaly Ltd uses reasonable endeavours to ensure that the Website is secure and free of errors, viruses and other malware, we give no warranty or guaranty in that regard and all Users take responsibility for their own security, that of their personal details and their computers.',
      '11. Automaly Ltd accepts no liability for any disruption or non-availability of the Website.',
      '12. Automaly Ltd reserves the right to alter, suspend or discontinue any part (or the whole of) the Website including, but not limited to, any products and/or services available. These terms and conditions shall continue to apply to any modified version of the Website unless it is expressly stated otherwise.',
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      '13. Nothing in these terms and conditions will: (a) limit or exclude our or your liability for death or personal injury resulting from our or your negligence, as applicable; (b) limit or exclude our or your liability for fraud or fraudulent misrepresentation; or (c) limit or exclude any of our or your liabilities in any way that is not permitted under applicable law.',
      '14. We will not be liable to you in respect of any losses arising out of events beyond our reasonable control.',
      '15. To the maximum extent permitted by law, Automaly Ltd accepts no liability for any of the following:',
    ],
    items: [
      'Any business losses, such as loss of profits, income, revenue, anticipated savings, business, contracts, goodwill or commercial opportunities.',
      'Loss or corruption of any data, database or software.',
      'Any special, indirect or consequential loss or damage.',
    ],
  },
  {
    title: "General",
    paragraphs: [
      '16. You may not transfer any of your rights under these terms and conditions to any other person. We may transfer our rights under these terms and conditions where we reasonably believe your rights will not be affected.',
      '17. These terms and conditions may be varied by us from time to time. Such revised terms will apply to the Website from the date of publication. Users should check the terms and conditions regularly to ensure familiarity with the then current version.',
      '18. These terms and conditions together with the Privacy Policy contain the whole agreement between the parties relating to its subject matter and supersede all prior discussions, arrangements or agreements that might have taken place in relation to the terms and conditions.',
      '19. The Contracts (Rights of Third Parties) Act 1999 shall not apply to these terms and conditions and no third party will have any right to enforce or rely on any provision of these terms and conditions.',
      '20. If any court or competent authority finds that any provision of these terms and conditions (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of these terms and conditions will not be affected.',
      '21. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.',
      '22. This Agreement shall be governed by and interpreted according to the law of England and Wales and all disputes arising under the Agreement (including non-contractual disputes or claims) shall be subject to the exclusive jurisdiction of the English and Welsh courts.',
    ],
  },
  {
    title: "Automaly Ltd Details",
    paragraphs: [
      '23. Automaly Ltd is a company incorporated in England and Wales with registered number 13145824 whose registered address is Kemp House, 160 City Road, EC1V 2NX and it operates the website www.automaly.io. The registered VAT number is 370599663.',
    ],
    contact: {
      label: "You can contact Automaly Ltd by email at",
      email: "hello@automaly.io",
    },
  },
]

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-section-light pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/5 blur-[140px]" />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Legal
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Terms and Conditions
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 text-pretty">
              These terms and conditions govern your use of the Automaly website.
              Please read them carefully before continuing to use our site.
            </p>
            <p className="mt-3 text-sm text-foreground/70">
              Last updated: February 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-section-lavender py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-bold text-foreground">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="mt-3 text-sm leading-relaxed text-foreground/70"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.subsection && (
                    <>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                        {section.subsection.intro}
                      </p>
                      <ul className="mt-2 space-y-2 pl-5">
                        {section.subsection.items.map((item) => (
                          <li
                            key={item}
                            className="list-disc text-sm leading-relaxed text-foreground/70"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {section.afterItems?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="mt-3 text-sm leading-relaxed text-foreground/70"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.items && (
                    <ul className="mt-3 space-y-2 pl-5">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="list-disc text-sm leading-relaxed text-foreground/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.link && (
                    <p className="mt-3">
                      <Link
                        href={section.link.href}
                        className="text-sm font-semibold text-brand-purple hover:underline"
                      >
                        {section.link.text}
                      </Link>
                    </p>
                  )}

                  {section.contact && (
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      {section.contact.label}{" "}
                      <a
                        href={`mailto:${section.contact.email}`}
                        className="font-semibold text-brand-purple hover:underline"
                      >
                        {section.contact.email}
                      </a>
                      .
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Back link */}
            <div className="mt-16 border-t border-brand-purple/20 pt-8 text-center">
              <Link
                href="/"
                className="text-sm font-semibold text-brand-purple hover:underline"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
