import { ProductList } from '@/utils/ApiTypes/ProductList'
import { Dispatch, SetStateAction } from 'react'

export interface RevokeModalProps {
  setShowRevokeModel: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  fetchData: any
  productDetails?: ProductList
  selectedProduct?: ProductList
}
