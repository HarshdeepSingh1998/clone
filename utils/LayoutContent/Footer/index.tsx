import { footerDataType } from '@/utils/LayoutContent/Footer/types'

export const footerData: footerDataType = {
  address: {
    heading: 'Registered Office Address',
    street: '2120 Carey Ave. Cheyenne, WY 82001',
    email: 'info@basicmining.com',
    query:
      'In case of any query, please Mail info@basicmining.com Or (623) 336-9099'
  },
  company: {
    heading: 'Company',
    list: [
      { href: '/', title: 'Home' },
      { href: '/about', title: 'About' },
      { href: '/marketplace', title: 'Marketplace' },
      { href: '/contact', title: 'Contact' },
      { href: '/hosting', title: 'Hosting' },
      { href: '/signup', title: 'SignUp' }
    ]
  },
  followUs: {
    legalText: 'Legal',
    serviceText: 'Services',
    followUsText: 'Follow Us',
    steps: [
      { href: 'https://twitter.com/BasicMining', title: 'Twitter' },
      { href: 'https://www.instagram.com/basicminingllc', title: 'Instagram' },
      {
        href: 'https://www.facebook.com/people/Basic-Mining/61557795906368',
        title: 'Facebook'
      }
    ]
  },
  copyRightText: 'Copyright © basicmining|2024'
}
