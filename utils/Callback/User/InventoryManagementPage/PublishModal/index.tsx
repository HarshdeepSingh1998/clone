import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import usePut from '@/hooks/usePut'
import { UserInventoryDataInterface } from '@/views/User/InventoryManagementPage/Desktop/types'

const useSubmit = (
  inventoryData: UserInventoryDataInterface,
  reset: any,
  publishModalData: {
    toggleValue: string
    handleToggleChange: () => void
    setToggleValue: Dispatch<SetStateAction<string>>
  }
) => {
  const { mutateAsync } = usePut()

  const onSubmit = async (values: any) => {
    const payload = {
      ...values,
      hosting: inventoryData.productDetails?.hosting ? true : false,
      contract: inventoryData.productDetails?.contract?._id,
      disableBuyNow: true
    }
    try {
      const response = await mutateAsync({
        url: `/api/publishProduct/${inventoryData.selectedProduct.trim()}`,
        payload: { ...payload }
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        inventoryData.setIsPublishModalVisible(false)
        reset()
        inventoryData.setPage(1)
        inventoryData.setSelectedProductIds([])
        inventoryData.setForceUpdate((prev: any) => !prev)
        inventoryData.setSelectedProduct('')
        publishModalData.setToggleValue('Bid')
      }
    } catch (error: any) {
      if (!error?.response?.data?.message) {
        toast.error(`Oops! Something went wrong. Please try again later`)
      } else {
        const objectKeys =
          typeof error?.response?.data?.message !== 'string' &&
          Object.keys(error?.response?.data?.message)
        objectKeys && objectKeys?.length > 0
          ? objectKeys.forEach((key: string) =>
              toast.error(`${error?.response?.data?.message[key].message}`)
            )
          : toast.error(`${error?.response?.data?.message}`)
      }
    }
  }

  return { onSubmit }
}

export default useSubmit
