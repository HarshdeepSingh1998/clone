import { ProductList } from '@/utils/ApiTypes/ProductList'
import { Dispatch, SetStateAction } from 'react'

export interface AssignModalProps {
  selectedProduct?: ProductList
  setSelectedProductId: () => unknown
  fetchData: any
  setIsAssignModalVisible: Dispatch<SetStateAction<boolean>>
  inventoryPage: boolean
  isOpen: boolean
}
