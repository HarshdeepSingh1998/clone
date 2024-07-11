import { ContractList } from '@/utils/ApiTypes/ContractList'
import { Dispatch, SetStateAction } from 'react'

export interface AddContractProps {
  isModalOpen: boolean
  closeModal: () => void
  contractDetails: ContractList | undefined
  isEditModalOpen: boolean
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}
export interface AddContractFormProps {
  handleSubmit: any
  onSubmit: any
  control: any
  errors: any
  watch: any
  isEditModalOpen: boolean
  setValue: any
  reset: any
  closeModal: () => void
}
