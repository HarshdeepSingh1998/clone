export interface footerDataType {
  address: {
    heading: string
    street: string
    email: string
    query: string
  }
  company: {
    heading: string
    list: { href: string; title: string }[]
  }
  followUs: {
    legalText: string
    serviceText: string
    followUsText: string
    steps: { href: string; title: string }[]
  }
  copyRightText: string
}
