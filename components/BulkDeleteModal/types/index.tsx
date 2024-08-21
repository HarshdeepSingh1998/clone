import { Dispatch, SetStateAction } from 'react'
import {
  ModalState,
  UseInventoryProductInterface
} from '@/views/Admin/InventorymanagementPage/Desktop/types'

/* eslint-disable no-unused-vars */
export interface BulkDeleteModalProps {
  isOpen: boolean
  setShowDeleteModel: (modalName: keyof ModalState) => void
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  inventoryData: UseInventoryProductInterface
}
