// userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProductDetailInterface {
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
    role?: string
  }
  _id?: string
  serialNumber?: string
  contract: {
    _id: string
    contractId: string
    hostRate: number
    location: string
    depositPrice: number
    setupPrice: number
  }
  transaction?: {
    _id?: string
    closedPrice?: number
    transactionType?: string
    paymentReceived?: boolean
  }
  shippingPrice?: number | undefined | null | any
  disableBuyNow?: boolean
  highestBid?: number
  isBidder?: boolean
}

interface Itransaction {
  _id?: string
  closedPrice?: number
  transactionType: string
}

export interface ProductListInterface {
  _id: string
  assignedProduct?: {
    modelName: string
    images: string[]
    hashRate: number
    power: number
    serialNumber?: string
    status: string
    _id?: string
    contract?: {
      _id: string
      contractId: string
      location?: string
      depositPrice?: number
      setupPrice?: number
      hostRate?: number
      expirationDate?: string
    }
    lotId?: string
    lotCreatedBy?: string
  }
  availability: string
  auctionType: string
  cooling: string
  createdAt: string
  description: string
  efficiency: number
  askPrice: number
  hashRate: number
  images: string[]
  isActive: boolean
  manufacturer: string
  modelName: string
  power: number
  productStatus: string
  sku: string
  status: string
  updatedAt: string
  user: {
    _id: string
    profileImage: string
    phone: string
    email: string
    name: string
  }
  lotId?: string
  lotCreatedBy?: string
  assignedTo?: string
  serialNumber?: string
  contract?: {
    _id: string
    contractId: string
    location?: string
    depositPrice?: number
    setupPrice?: number
    hostRate?: number
    expirationDate?: string
  }
  transaction?: Itransaction
  hosting?: boolean
  shippingPrice?: number | undefined | null | any
}

export interface ProductPendingListInterface {
  _id: string
  assignedProduct: {
    modelName: string
    images: string[]
    hashRate: number
    power: number
    serialNumber?: string
    status: string
    _id?: string
  }
  availability: string
  auctionType: string
  cooling: string
  createdAt: string
  description: string
  efficiency: number
  askPrice: number

  isActive: boolean
  manufacturer: string

  productStatus: string
  sku: string
  updatedAt: string
  user: {
    _id: string
    profileImage: string
    phone: string
    email: string
    name: string
  }
  lotId?: string
  lotCreatedBy?: string
  assignedTo?: string
  contract?: {
    _id: string
    contractId: string
    location?: string
    depositPrice?: number
    setupPrice?: number
    hostRate?: number
  }
  transaction?: Itransaction
  hosting?: boolean
  shippingPrice?: number | undefined | null | any
}

interface ProductState {
  productDetails: ProductDetailInterface | null
}

const initialState: ProductState = {
  productDetails: null
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductDetail: (
      state,
      action: PayloadAction<ProductDetailInterface>
    ) => {
      state.productDetails = action.payload
    }
  }
})

export const { setProductDetail } = productSlice.actions

export default productSlice.reducer
