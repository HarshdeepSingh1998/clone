import { Dispatch, SetStateAction } from 'react'
import { UseUserLotModalDataInterface } from '@/utils/Customhooks/useUserLotModalData'
import { UserInventoryDataInterface } from '@/views/User/InventoryManagementPage/Desktop/types'

export interface UserLotModalProps {
  inventoryData: UserInventoryDataInterface
}

export interface LotFormProps {
  handleSubmit: any
  onSubmit: any
  control: any
  errors: any
  watch: any
  inventoryData: UserInventoryDataInterface
  setValue: any
  reset: any
  lotModalData: UseUserLotModalDataInterface
  unitAskingPrice: number
  toggleValue: string
  handleToggleChange: () => void
  setUnitAskingPrice: Dispatch<SetStateAction<number>>
}
