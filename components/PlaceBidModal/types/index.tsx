/* eslint-disable no-unused-vars */
import { ProductList } from '@/utils/ApiTypes/ProductList'

export interface PlaceBidModalProps {
  closePlaceBidModal: (productId: string) => void
  data: ProductList[] | undefined
  selectedProduct: string
  productDetailData: any
}
