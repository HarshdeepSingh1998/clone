import { ProductList } from '@/utils/ApiTypes/ProductList'
import { Dispatch, SetStateAction } from 'react'

export interface DeleteModalProps {
  setShowDeleteModel: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  fetchData: any
  productDetails?: ProductList
}
