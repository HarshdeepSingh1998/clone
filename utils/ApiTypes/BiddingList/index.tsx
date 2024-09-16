import { ProductList } from 'utils/ApiTypes/ProductList'

export interface BiddingList {
  auctionStatus: string
  bidder: {
    createdAt: string
    deviceToken: string
    email: string
    isActive: boolean
    name: string
    phone: string
    profileImage: string
    role: string
    termsAgreed: true
    updatedAt: string
    username: string
    __v: 0
    _id: string
  }
  counters: {
    bidPrice: 100
    bidUser: string
    timestamp: string
    _id: string
  }[]

  createdAt: string
  product: ProductList

  publisher: {
    createdAt: string
    deviceToken: string
    email: string
    isActive: boolean
    profileImage: string
    name: string
    phone: string
    role: string
    termsAgreed: boolean
    updatedAt: string
    username: string
    __v: number
    _id: string
  }
  updatedAt: string
  __v: 0
  _id: string
}
