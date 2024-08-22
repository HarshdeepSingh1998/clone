import { ProductList } from '@/utils/ApiTypes/ProductList'
import { UsePublishDataInterface } from '@/utils/Customhooks/usePublishModal/types'
import { Dispatch, SetStateAction } from 'react'

export interface PublishModalProps {
  selectedProduct?: ProductList
  setSelectedProductId?: () => unknown
  fetchData: any
  setIsPublishModalVisible: any
  inventoryPage: boolean
  isOpen: boolean
  setPage?: Dispatch<SetStateAction<number>>
  setSelectedProductIds?: Dispatch<SetStateAction<string[]>>
  setForceUpdate?: Dispatch<SetStateAction<boolean>>
  fetchContractData?: any
  setSelectedProduct?: Dispatch<SetStateAction<string>>
}
export interface PublishFormProps {
  handleSubmit: any
  onSubmit: any
  control: any
  errors: any
  watch: any
  setIsPublishModalVisible: any
  setValue: any
  publishModalData: UsePublishDataInterface
  reset: any
  inventoryPage: boolean
}
