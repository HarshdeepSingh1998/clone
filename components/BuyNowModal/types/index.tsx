import { ProductList } from '@/utils/ApiTypes/ProductList'
import { Dispatch, SetStateAction } from 'react'

export interface BuyNowModalProps {
  isOpen: boolean
  closeBuyNowModal: () => void
  productList: ProductList[] | undefined
  selectedProduct: string
  toggleActive: string
  productDetailData: any
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  setProductList: Dispatch<SetStateAction<ProductList[] | undefined>>
}
export interface ProductListProps {
  buyNowData: {
    isLoading: boolean
    onSubmit: () => Promise<void>
    handleModalClose: () => void
    productDetails: ProductList[] | undefined
  }
}
