import { toast } from 'react-toastify'
import usePut from '@/hooks/usePut'
import { UseInventoryProductInterface } from '@/views/Admin/InventorymanagementPage/Desktop/types'

interface RevokeModalProps {
  inventoryData: UseInventoryProductInterface
}

export const useAdminRevokeProduct = ({ inventoryData }: RevokeModalProps) => {
  const { mutateAsync } = usePut()
  const handleRevokeProduct = async () => {
    try {
      const response = await mutateAsync({
        url: `/api/revokeProduct/${inventoryData.selectedProduct.trim()}`
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        inventoryData.toggleModal('showRevokeModel')
        inventoryData.setSelectedProductIds([])
        inventoryData.setPage(1)
        inventoryData.setForceUpdate((prev: any) => !prev)
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
    handleRevokeProduct
  }
}
