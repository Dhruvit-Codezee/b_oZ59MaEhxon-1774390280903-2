import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Notice on Personal Data | Automaly",
  description:
    "Automaly's privacy notice on personal data. Learn how we collect, store, transfer and use personal data, your privacy rights, and how the law protects you.",
  openGraph: {
    title: "Privacy Notice on Personal Data | Automaly",
    description:
      "Automaly's privacy notice explains how we collect, store, transfer and use personal data, and your rights under UK data protection law.",
    url: "https://www.automaly.io/privacy",
  },
  alternates: {
    canonical: "https://www.automaly.io/privacy",
  },
}

const sections: {
  heading?: string
  title: string
  content: string | string[]
  items?: string[]
  afterItems?: string[]
}[] = [
  // Introduction
  {
    heading: "Introduction",
    title: "Introduction",
    content: [
      "This notice describes how we collect, store, transfer and use personal data. It tells you about your privacy rights and how the law protects you.",
      "In the context of the law and this notice, 'personal data' is information that clearly identifies you as an individual or which could be used to identify you if combined with other information. Acting in any way on personal data is referred to as 'processing'.",
      "This notice applies to personal data collected through our website and through social media platforms including Facebook, Twitter, Instagram, LinkedIn or WhatsApp.",
      "Except as set out below, we do not share, or sell, or disclose to a third party, any information collected through our website.",
    ],
  },
  // Personal data we process
  {
    heading: "Personal Data We Process",
    title: "1. Types of personal data we collect directly",
    content:
      "The information we process about you includes information:",
    items: [
      "you have directly provided to us",
      "that we gather from third party databases and service providers",
      "as a result of monitoring how you use our website or our services",
    ],
  },
  {
    title: "2. Types of personal data we collect directly",
    content:
      "When you use our website, we ask you to provide personal data. This can be categorised into the following groups:",
    items: [
      "personal identifiers, such as your first and last names, your title and your date of birth",
      "contact information, such as your email address, your telephone number and your postal addresses for billing, delivery and communication",
      "account information, including your username and password",
      "records of communication between us including messages sent through our website, email messages and telephone conversations",
      "marketing preferences that tell us what types of marketing you would like to receive",
    ],
  },
  {
    title: "3. Types of personal data we collect from third parties",
    content: [
      "We confirm some of the information you provide to us directly using data from other sources. We also add to the information we hold about you, sometimes to remove the need for you to provide it to us and sometimes in order to be able to assess the quality of the services you offer.",
      "The additional information we collect can be categorised as follows:",
    ],
    items: [
      "business information, including your business trading name and address",
      "information that confirms your contact information",
    ],
  },
  {
    title: "4. Types of personal data we collect from your use of our services",
    content: "By using our website and our services, we process:",
    items: [
      "your replies to polls and surveys",
      "technical information about the hardware and the software you use to access our website and use our services, including your Internet Protocol (IP) address, your browser type and version and your device's operating system",
      "usage information, including the frequency you use our services, the pages of our website that you visit, whether you receive messages from us and whether you reply to those messages",
      "your preferences to receive marketing from us; how you wish to communicate with us; and responses and actions in relation to your use of our services",
    ],
  },
  {
    title: "5. Our use of aggregated information",
    content: [
      "We may aggregate anonymous information such as statistical or demographic data for any purpose. Anonymous information is that which does not identify you as an individual. Aggregated information may be derived from your personal data but is not considered as such in law because it does not reveal your identity.",
      "For example, we may aggregate usage information to assess whether a feature of our website is useful.",
      "However, if we combine or connect aggregated information with your personal data so that it can identify you in any way, we treat the combined information as personal data, and it will be used in accordance with this privacy notice.",
    ],
  },
  {
    title: "6. Special personal data",
    content: [
      "Special personal data is data about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health and genetic and biometric data.",
      "We do not collect any special personal data about you.",
    ],
  },
  {
    title: "7. If you do not provide personal data we need",
    content: [
      "Where we need to collect personal data by law, or under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to perform that contract.",
      "In that case, we may have to stop providing a service to you. If so, we will notify you of this at the time.",
    ],
  },
  // The bases on which we process information about you
  {
    heading: "The Bases on Which We Process Information About You",
    title: "8. Information we process because we have a contractual obligation with you",
    content: [
      "The law requires us to determine under which of six defined bases we process different categories of your personal data, and to notify you of the basis for each category.",
      "If a basis on which we process your personal data is no longer relevant then we shall immediately stop processing your data.",
      "If the basis changes then if required by law we shall notify you of the change and of any new basis under which we have determined that we can continue to process your information.",
      "When you buy a service from us, or otherwise agree to our terms and conditions, a contract is formed between you and us.",
      "In order to carry out our obligations under that contract we must process the information you give us. Some of this information may be personal data.",
      "We may use it in order to:",
    ],
    items: [
      "verify your identity for security purposes when you use our services",
      "sell products to you",
      "provide you with our services",
      "provide you with suggestions and advice on products, services and how to obtain the most from using our website",
    ],
    afterItems: [
      "We process this information on the basis there is a contract between us, or that you have requested we use the information before we enter into a legal contract.",
      "We shall continue to process this information until the contract between us ends or is terminated by either party under the terms of the contract.",
    ],
  },
  {
    title: "9. Information we process with your consent",
    content: [
      "Through certain actions when otherwise there is no contractual relationship between us, such as when you browse our website or ask us to provide you more information about our business, including job opportunities and our products and services, you provide your consent to us to process information that may be personal data.",
      "Wherever possible, we aim to obtain your explicit consent to process this information, for example, we ask you to agree to our use of non-essential cookies when you access our website.",
      "If you have given us explicit permission to do so, we may from time to time pass your name and contact information to selected associates whom we consider may provide services or products you would find useful.",
      "We continue to process your information on this basis until you withdraw your consent or it can be reasonably assumed that your consent no longer exists.",
      "You may withdraw your consent at any time by instructing us at hello@automaly.io. However, if you do so, you may not be able to use our website or our services further.",
      "We aim to obtain and keep your consent to process your information. However, while we take your consent into account in decisions about whether or not to process your personal data, the withdrawal of your consent does not necessarily prevent us from continuing to process it. The law may allow us to continue to process your personal data, provided that there is another basis on which we may do so. For example, we may have a legal obligation to do so.",
    ],
  },
  {
    title: "10. Information we process for the purposes of legitimate interests",
    content: [
      "We may process information on the basis there is a legitimate interest, either to you or to us, of doing so.",
      "Where we process your information on this basis, we do after having given careful consideration to:",
    ],
    items: [
      "whether the same objective could be achieved through other means",
      "whether processing (or not processing) might cause you harm",
      "whether you would expect us to process your data, and whether you would, in the round, consider it reasonable to do so",
    ],
    afterItems: [
      "For example, we may process your data on this basis for the purposes of:",
      "Improving our services and offering our services to you",
      "Record-keeping for the proper and necessary administration of our business",
      "Responding to unsolicited communication from you to which we believe you would expect a response",
      "Exercising our legal rights, including to detect and prevent fraud and to protect our intellectual property",
      "Insuring against or obtaining professional advice that is required to manage organisational risk",
      "Protecting your interests where we believe we have a duty to do so",
    ],
  },
  {
    title: "11. Information we process because we have a legal obligation",
    content: [
      "Sometimes, we must process your information in order to comply with a statutory obligation.",
      "For example, we may be required to give information to legal authorities if they so request or if they have the proper authorisation such as a search warrant or court order. This may include your personal data.",
    ],
  },
  // How and when we process your personal data
  {
    heading: "How and When We Process Your Personal Data",
    title: "12. Information you provide",
    content: [
      "Our website allows you to post information with a view to that information being read, copied, downloaded, or used by other people.",
      "For example, when you leave a review or post a message on our website, we reasonably assume that you consent for the message to be seen by others.",
      "In posting personal data, it is up to you to satisfy yourself about the privacy level of every person who might use it.",
      "We do store it, and we reserve a right to use it in the future in any way we decide.",
      "Provided your request is reasonable and there is no legal basis for us to retain it, then at our discretion, we may agree to your request to delete personal data that you have posted. You can make a request by contacting us at hello@automaly.io.",
    ],
  },
  {
    title: "13. Payment information",
    content: [
      "Payment information is never taken by us or transferred to us either through our website or otherwise. Our employees and contractors never have access to it.",
      "At the point of payment, you are transferred to a secure page on the website of Stripe or some other reputable payment service provider. That page may be branded to look like a page on our website, but it is not controlled by us.",
    ],
  },
  {
    title: "14. Job application and employment",
    content: [
      "If you send us information in connection with a job application, we may keep it for up to 12 months in case we decide to contact you at a later date.",
      "If we employ you, we collect information about you and your work from time to time throughout the period of your employment. This information will be used only for purposes directly relevant to your employment. After your employment has ended, we will keep your file for two years before destroying or deleting it.",
    ],
  },
  {
    title: "15. Information obtained from third parties",
    content:
      "Although we do not disclose your personal data to any third party (except as set out in this notice), we sometimes receive data that is indirectly made up from your personal data from third parties whose services we use.",
  },
  {
    title: "16. Service providers and business partners",
    content:
      "We may share your personal data with businesses that provide services to us, or with business partners. As examples:",
    items: [
      "we may pass your payment information to our payment service provider to take payments from you",
      "we may pass your contact information to software companies to promote their services to you",
    ],
  },
  // Use of information we collect through automated systems
  {
    heading: "Use of Information We Collect Through Automated Systems",
    title: "17. Cookies",
    content: [
      "Cookies are small text files that are placed on your computer's hard drive by your web browser when you visit a website that uses them. They allow information gathered on one web page to be stored until it is needed for use at a later date.",
      "They are commonly used to provide you with a personalised experience while you browse a website, for example, allowing your preferences to be remembered.",
      "They can also provide core functionality such as security, network management, and accessibility; record how you interact with the website so that the owner can understand how to improve the experience of other visitors; and serve you advertisements that are relevant to your browsing history.",
      "Some cookies may last for a defined period of time, such as one visit (known as a session), one day or until you close your browser. Others last indefinitely until you delete them.",
      "Your web browser should allow you to delete any cookie you choose. It should also allow you to prevent or limit their use. Your web browser may support a plug-in or add-on that helps you manage which cookies you wish to allow to operate.",
      "The law requires you to give explicit consent for use of any cookies that are not strictly necessary for the operation of a website.",
      "If you choose not to use cookies or you prevent their use through your browser settings, you may not be able to use all the functionality of our website.",
      "We use cookies to track how you use our website.",
    ],
  },
  {
    title: "18. Personal identifiers from your browsing activity",
    content: [
      "Requests by your web browser to our servers for web pages and other content on our website are recorded.",
      "We record information such as your geographical location, your Internet service provider and your IP address. We also record information about the software you are using to browse our website, such as the type of computer or device and the screen resolution.",
      "We use this information in aggregate to assess the popularity of the webpages on our website and how we perform in providing content to you.",
      "If combined with other information we know about you from previous visits, the data possibly could be used to identify you personally, even if you are not signed in to our website.",
    ],
  },
  // Other matters
  {
    heading: "Other Matters",
    title: "19. Your rights",
    content:
      "The law requires us to tell you about your rights and our obligations to you in regard to the processing and control of your personal data. We do this now, by requesting that you read the information provided at knowyourprivacyrights.org.",
  },
  {
    title: "20. Use of our services by children",
    content: [
      "We do not sell products or provide services for purchase by children, nor do we market to children.",
      "If you are under 18, you may use our website only with consent from a parent or guardian.",
    ],
  },
  {
    title: "21. Delivery of services using third party communication software",
    content: [
      "With your consent, we may communicate using software provided by a third party such as Facebook (WhatsApp), Apple (Facetime), Microsoft (Skype) or Zoom Video Communications (Zoom).",
      "Such methods of communication should secure your personal data using encryption and other technologies. The providers of such software should comply with all applicable privacy laws, rules, and regulations, including the GDPR.",
      "If you have any concerns about using a particular software for communication, please tell us.",
    ],
  },
  {
    title: "22. Data may be processed outside the UK",
    content: [
      "Our websites are hosted in the United Kingdom.",
      "We may also use outsourced services in countries outside the UK from time to time in other aspects of our business.",
      "Accordingly, data obtained within the UK or any other country could be processed outside the UK.",
      "We use the following safeguards with respect to data transferred outside the UK:",
    ],
    items: [
      "the data protection clauses in our contracts with data processors include transfer clauses written by or approved by a supervisory authority",
      "we comply with a code of conduct approved by a supervisory authority",
    ],
  },
  {
    title: "23. Control over your own information",
    content: [
      "It is important that the personal data we hold about you is accurate and up to date. Please inform us if your personal data changes.",
      "At any time, you may contact us to request that we provide you with the personal data we hold about you.",
      "To obtain a copy of any information that is not provided on our website you should contact us to make that request.",
      "When we receive any request to access, edit or delete personal data we first take reasonable steps to verify your identity before granting you access or otherwise taking any action. This is important to safeguard your information.",
      "Please be aware that we are not obliged by law to provide you with all personal data we hold about you, and that if we do provide you with information, the law allows us to charge for such provision if doing so incurs costs for us. After receiving your request, we will tell you when we expect to provide you with the information, and whether we require any fee for providing it to you.",
      "If you wish us to remove personally identifiable information from our website, you should contact us to make your request. This may limit the service we can provide to you.",
      "We remind you that we are not obliged by law to delete your personal data or to stop processing it simply because you do not consent to us doing so. While having your consent is an important consideration as to whether to process it, if there is another legitimate basis on which we may process it, we may do so on that basis.",
    ],
  },
  {
    title: "24. Communicating with us",
    content: [
      "When you contact us, whether by telephone, through our website or by email, we collect the data you have given to us in order to reply with the information you need.",
      "We record your request and our reply in order to increase the efficiency of our business.",
      "We may keep personally identifiable information associated with your message, such as your name and email address so as to be able to track our communications with you to provide a high quality service.",
    ],
  },
  {
    title: "25. Complaining",
    content: [
      "If you are not happy with our privacy policy, or if you have any complaint, then you should tell us.",
      "When we receive a complaint, we record the information you have given to us on the basis of consent. We use that information to resolve your complaint.",
      "If your complaint reasonably requires us to notify some other person, we may decide to give to that other person some of the information contained in your complaint. We do this as infrequently as possible, but it is a matter for our sole discretion whether we do give information, and if we do, what that information is.",
      "We may also compile statistics showing information obtained from this source to assess the level of service we provide, but not in a way that could identify you or any other person.",
      "If a dispute is not settled then we hope you will agree to attempt to resolve it by engaging in good faith with us in a process of mediation or arbitration.",
      "If you are in any way dissatisfied about how we process your personal data, you have a right to lodge a complaint with the Information Commissioner's Office (ICO). This can be done at https://ico.org.uk/make-a-complaint/. We would, however, appreciate the opportunity to talk to you about your concern before you approach the ICO.",
    ],
  },
  {
    title: "26. Retention period",
    content:
      "Except as otherwise mentioned in this privacy notice, we keep your personal data only for as long as required by us:",
    items: [
      "to provide you with the services you have requested",
      "to comply with other law, including for the period demanded by our tax authorities",
      "to support a claim or defence in court",
    ],
  },
  {
    title: "27. Compliance with the law",
    content:
      "Our privacy policy complies with the law in the United Kingdom, specifically with the Data Protection Act 2018 (the 'Act') accordingly incorporating the EU General Data Protection Regulation ('GDPR') and the Privacy and Electronic Communications Regulations ('PECR').",
  },
  {
    title: "28. Review of this privacy policy",
    content:
      "We shall update this privacy notice from time to time as necessary.",
  },
]

export default function PrivacyPage() {
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
              Privacy Notice
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 text-pretty">
              This is the privacy notice of Automaly, 13145824. Our registered
              office is at Kemp House, 160 City Road, London, United Kingdom,
              EC1V 2NX.
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
              {sections.map((section, idx) => (
                <div key={`${section.title}-${idx}`}>
                  {section.heading && (
                    <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                      {section.heading}
                    </h2>
                  )}
                  {section.title !== section.heading && (
                    <h3 className="text-lg font-bold text-foreground">
                      {section.title}
                    </h3>
                  )}
                  {Array.isArray(section.content) ? (
                    section.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className="mt-3 text-sm leading-relaxed text-foreground/70"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      {section.content}
                    </p>
                  )}
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
                  {section.afterItems &&
                    section.afterItems.map((paragraph, i) => (
                      <p
                        key={i}
                        className="mt-3 text-sm leading-relaxed text-foreground/70"
                      >
                        {paragraph}
                      </p>
                    ))}
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
