import { UserInventoryDataInterface } from '@/views/User/InventoryManagementPage/Desktop/types'
import { Dispatch, SetStateAction } from 'react'

export interface RevokeModalProps {
  setShowRevokeModel: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  inventoryData: UserInventoryDataInterface
}
