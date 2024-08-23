import { Dispatch, SetStateAction } from 'react'
import { UseInventoryProductInterface } from '@/views/Admin/InventorymanagementPage/Desktop/types'
import { UseAdminLotModalDataInterface } from '@/utils/Customhooks/useAdminLotModalData'

export interface AdminLotModalProps {
  inventoryData: UseInventoryProductInterface
}

export interface LotFormProps {
  handleSubmit: any
  onSubmit: any
  control: any
  errors: any
  watch: any
  inventoryData: UseInventoryProductInterface
  setValue: any
  reset: any
  lotModalData: UseAdminLotModalDataInterface
  unitAskingPrice: number
  toggleValue: string
  handleToggleChange: () => void
  setUnitAskingPrice: Dispatch<SetStateAction<number>>
}

export interface PublishFormProps {
  handleSubmit: any
  onSubmit: any
  control: any
  errors: any
  watch: any
  setIsPublishModalVisible: any
  setValue: any
  publishModalData: UseAdminLotModalDataInterface
  reset: any
  inventoryPage: boolean
  unitAskingPrice: number
}
