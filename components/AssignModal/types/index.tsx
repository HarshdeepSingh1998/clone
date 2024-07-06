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

export interface AssignFormProps {
  assignOptions: {
    img: JSX.Element
    label: string
    value: string
  }[]
  contractOptions:
    | {
        label: string
        value: string
      }[]
    | undefined
  handleSubmit: any
  onSubmit: any
  control: any
  errors: any
  watch: any
  setIsAssignModalVisible: Dispatch<SetStateAction<boolean>>
}
