/* eslint-disable no-unused-vars */
import { ProductList } from '@/utils/ApiTypes/ProductList'

export interface PlaceBidModalProps {
  closePlaceBidModal: () => void
  productList: ProductList[] | undefined
  selectedProduct: string
  productDetailData: ProductList[]
  isOpen: boolean
}

export interface ProductListProps {
  publishModalData: {
    productDetails: ProductList[] | undefined
  }
}
