import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import usePut from 'hooks/usePut'
import { UserInventoryDataInterface } from '@/views/User/InventoryManagementPage/Desktop/types'

interface RevokeProductProps {
  inventoryData: UserInventoryDataInterface
  setShowRevokeModel: Dispatch<SetStateAction<boolean>>
}

export const useUserRevokeProduct = ({
  inventoryData,
  setShowRevokeModel
}: RevokeProductProps) => {
  const { mutateAsync } = usePut()

  const handleRevoke = async () => {
    try {
      const response = await mutateAsync({
        url: `/api/revokeProduct/${inventoryData.selectedProduct.trim()}`
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        setShowRevokeModel(false)
        // fetchData()
        inventoryData.setSelectedProductIds([])
        inventoryData.setPage(1)
        inventoryData.setForceUpdate(prev => !prev)
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
    handleRevoke
  }
}
