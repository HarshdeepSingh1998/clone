import { ProductList } from '@/utils/ApiTypes/ProductList'
import { UsePublishDataInterface } from '@/utils/Customhooks/usePublishModal/types'
import { Dispatch, SetStateAction } from 'react'

export interface PublishModalProps {
  selectedProduct?: ProductList
  setSelectedProductId?: () => unknown
  fetchData: any
  setIsPublishModalVisible: Dispatch<SetStateAction<boolean>>
  inventoryPage: boolean
  isOpen: boolean
}
export interface PublishFormProps {
  handleSubmit: any
  onSubmit: any
  control: any
  errors: any
  watch: any
  setIsPublishModalVisible: Dispatch<SetStateAction<boolean>>
  setValue: any
  publishModalData: UsePublishDataInterface
  reset: any
}
