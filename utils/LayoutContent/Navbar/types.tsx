import { StaticImageData } from 'next/image'

export interface NavbarDataType {
  projectLogo: StaticImageData
  list: {
    href: string
    title: string
  }[]
  loginButtonText: string
  getStartedButtonText: string
}
