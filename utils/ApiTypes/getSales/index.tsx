export interface SalesListInterface {
  assignedProduct: {
    contract: {
      contractId: string
      depositPrice: number
      hostRate: number
      location: string
      setupPrice: number
      _id: string
    }
    hashRate: number
    images: string[]
    lotId: string
    modelName: string
    power: number
    quantity: number
    serialNumber: string
    status: string
    _id: string
  }
  assignedUser: {
    email: string
    name: string
    phone: string
    profileImage: string
    role: string
    username: string
    _id: string
  }
  assignee: {
    email: string
    name: string
    phone: string
    profileImage: string
    role: string
    username: string
    _id: string
  }
  closedPrice: number
  createdAt: string
  isActive: boolean
  lotId: string
  paymentReceived: boolean
  quantity: 2
  transactionType: string
  updatedAt: string
  __v: 0
  _id: string
}
