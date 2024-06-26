import { StaticImageData } from 'next/image'

export interface BuyAndHostDataType {
  image: StaticImageData
  title: string
  rate: number
  location: string
  price: string
  serialNumber: string
  lotId: string | null
  quantity: number
  transaction: boolean
}
