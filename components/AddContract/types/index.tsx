import { ContractList } from '@/utils/ApiTypes/ContractList'
import { Dispatch, SetStateAction } from 'react'

export interface AddProductProps {
  isOpen: boolean
  closeModal: () => void
  contractDetails: ContractList | undefined
  isEditModalOpen: boolean
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}
