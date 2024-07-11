import { ContractDataInterface } from '@/views/Admin/ContractmanagementPage/Desktop/types'
import { Dispatch, SetStateAction } from 'react'

export interface ContractDeleteModalProps {
  contractData: ContractDataInterface
  setShowDeleteModel: Dispatch<SetStateAction<boolean>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  setPage: Dispatch<SetStateAction<number>>
  isOpen: boolean
}
