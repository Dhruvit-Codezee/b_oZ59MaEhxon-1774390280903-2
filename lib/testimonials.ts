export interface ClientQuote {
  quote: string
  name: string
  role: string
  company: string
}

export const clientQuotes: ClientQuote[] = [
  {
    quote:
      "Automaly assisted us with our marketing automation programme. From the initial onboarding sessions through to ongoing support they have been first class throughout and I would highly recommend them.",
    name: "Joe Struggles",
    role: "CMO",
    company: "Ethixbase",
  },
  {
    quote:
      "Automaly have really understood our needs as a business and delivered quality advice, support, and software training at every step to help support our ambitious growth goals.",
    name: "Thomas McKenzie",
    role: "CEO",
    company: "RankedRight Ltd",
  },
  {
    quote:
      "As a result of Automaly's work we secured a 6-figure contract with a new customer. Their consultancy was first class, and the team consistently went the extra mile with service.",
    name: "Denise Parmer",
    role: "COO",
    company: "Pattrn Data",
  },
]
