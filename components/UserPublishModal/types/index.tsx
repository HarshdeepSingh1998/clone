import { UserInventoryDataInterface } from '@/views/User/InventoryManagementPage/Desktop/types'

export interface PublishModalProps {
  inventoryData: UserInventoryDataInterface
}
export interface PublishFormProps {
  handleSubmit: any
  onSubmit: any
  control: any
  errors: any
  watch: any
  inventoryData: UserInventoryDataInterface
  setValue: any
  reset: any
  publishModalData: {
    toggleValue: string
    handleToggleChange: () => void
  }
}
