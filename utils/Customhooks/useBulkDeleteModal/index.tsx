import { toast } from 'react-toastify'
import useDelete from '@/hooks/useDelete'
import { UseInventoryProductInterface } from '@/views/Admin/InventorymanagementPage/Desktop/types'

interface DeleteModalProps {
  inventoryData: UseInventoryProductInterface
}

export const useDeleteProduct = ({ inventoryData }: DeleteModalProps) => {
  const { mutateAsync: mutateDeleteAsync } = useDelete()
  const handleDeleteProduct = async () => {
    try {
      const response = await mutateDeleteAsync({
        url: `/api/removeProduct`,
        payload: { productIds: [...inventoryData.selectedProductIds] }
      })

      if (response?.status == 200) {
        toast.success(`${response?.data?.message}`)
        inventoryData.handleClose()
        inventoryData.setSelectedProductIds([])
        inventoryData.toggleModal('showBulkDeleteModel')
        inventoryData.setPage(1)
        inventoryData.setForceUpdate((prev: any) => !prev)
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
    handleDeleteProduct
  }
}
