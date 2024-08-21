import { toast } from 'react-toastify'
import usePut from '@/hooks/usePut'
import { UseInventoryProductInterface } from '@/views/Admin/InventorymanagementPage/Desktop/types'

interface UnassignModalProps {
  inventoryData: UseInventoryProductInterface
}

export const useUnassignProduct = ({ inventoryData }: UnassignModalProps) => {
  const { mutateAsync } = usePut()
  const handleUnassignProduct = async () => {
    try {
      const response = await mutateAsync({
        url: `/api/unassignProduct/${inventoryData.selectedProduct.trim()}`
      })

      if (response?.status == 200) {
        toast.success(`${response?.data?.message}`)
        inventoryData.handleClose()
        inventoryData.toggleModal('showUnassignedModel')
        inventoryData.setPage(1)
        inventoryData.setForceUpdate((prev: any) => !prev)
        inventoryData.setUserDataList([])
        inventoryData.setUserPage(1)
        inventoryData.fetchContractData()
      }
    } catch (error: any) {
      if (!error?.response?.data?.message) {
        toast.error(`Oops! Something went wrong. Please try again later`)
      } else {
        toast.error(`${error?.response?.data?.message}`)
      }
    }
  }

  return {
    handleUnassignProduct
  }
}
