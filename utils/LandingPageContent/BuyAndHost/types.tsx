import { StaticImageData } from 'next/image'

export interface BuyAndHostDataType {
  usd: string
  image: StaticImageData
  title: string
  rate: string
  location: string
  price: string
  buttonText: string
}
