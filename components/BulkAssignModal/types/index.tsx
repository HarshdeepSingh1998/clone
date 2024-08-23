import { ContractList } from '@/utils/ApiTypes/ContractList'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { Dispatch, SetStateAction } from 'react'

export interface AssignModalProps {
  selectedProduct?: ProductList
  setSelectedProductId?: () => unknown
  fetchData: any
  setIsAssignModalVisible: any
  inventoryPage: boolean
  isOpen: boolean
  setPage?: Dispatch<SetStateAction<number>>
  setUserPage?: Dispatch<SetStateAction<number>>
  setSelectedProductIds?: Dispatch<SetStateAction<string[]>>
  setForceUpdate?: Dispatch<SetStateAction<boolean>>
  fetchContractData?: any
  setSelectedProduct?: Dispatch<SetStateAction<string>>
  selectedProductIds: string[]
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
  setIsAssignModalVisible: any
  contractList: ContractList[] | undefined
  setValue: any
  reset: any
  inventoryPage: boolean
}
