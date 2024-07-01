export interface ProductList {
  askPrice: number
  auctionEndDate: string
  auctionStartDate: string
  auctionType: string
  availability: string
  cooling: string
  createdAt: string
  description: string
  efficiency: number
  hashRate: number
  hostRate: number
  hosting: boolean
  images: string[]
  isActive: boolean
  location: string
  manufacturer: string
  lotId: string
  lotCreatedBy: string
  quantity: number
  modelName: string
  power: number
  productStatus: string
  sku: string
  status: string
  unit: string
  updatedAt: string
  user: {
    email: string
    name: string
    phone: string
    _id: string
    profileImage: string
    role: string
  }
  _id: string
  serialNumber: string
  contract: {
    _id: string
    contractId: string
    hostRate: number
    location: string
    depositPrice: number
    setupPrice: number
  }
  transaction: {
    _id: string
    closedPrice: number
    transactionType: string
    paymentReceived: boolean
  }
  shippingPrice: number | undefined | null
  disableBuyNow: boolean
  highestBid: number
  isBidder: boolean
}
