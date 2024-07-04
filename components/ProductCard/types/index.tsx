/* eslint-disable no-unused-vars */
import { UserState } from '@/store/userSlice'
import { ProductList } from '@/utils/ApiTypes/ProductList'

export interface ProductCardProps {
  data: ProductList
  i: number
  width: string
  productDetailsPage?: boolean
  userData?: UserState
}
export interface HeaderProps {
  data: ProductList
  userData?: UserState
}
export interface ContentProps {
  data: ProductList
  userData?: UserState
  productDetailsPage?: boolean
  handleViewProduct?: (productId: string) => void
}
export interface FooterProps {
  data: ProductList
}
