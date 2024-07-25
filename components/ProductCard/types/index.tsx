/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction } from 'react'
import { UserState } from '@/store/userSlice'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { MarketPlaceDataInterface } from '@/views/User/MarketPlacePage/types'

export interface ProductCardProps {
  data: ProductList
  i: number
  width: string
  productDetailsPage?: boolean
  userData?: UserState
  setIndex: Dispatch<SetStateAction<number>>
  selectedCard?: boolean
  setSelectedProduct: Dispatch<SetStateAction<ProductList | undefined>>
  marketplaceData?: MarketPlaceDataInterface
}
export interface HeaderProps {
  data: ProductList
  userData?: UserState
}
export interface ContentProps {
  data: ProductList
  userData?: UserState
  productDetailsPage?: boolean
  handleViewProduct: (productId: string) => void
}
export interface FooterProps {
  data: ProductList
}
export interface ButtonProps {
  data: ProductList
  placeBidClick?: (productId: string) => void
  buyNowClick?: (productId: string) => void
  clickGetQuote?: (productId: string | undefined) => Promise<void>
}
