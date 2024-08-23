import { useEffect } from 'react'
import { toast } from 'react-toastify'
import usePut from '@/hooks/usePut'
import { UseInventoryProductInterface } from '@/views/Admin/InventorymanagementPage/Desktop/types'
import { UseAdminLotModalDataInterface } from '@/utils/Customhooks/useAdminLotModalData'

const useSubmit = (
  inventoryData: UseInventoryProductInterface,
  lotModalData: UseAdminLotModalDataInterface,
  reset: any
) => {
  useEffect(() => {
    const numericAskPrice = Number(lotModalData.askPrice)
    const calculatedUnitAskingPrice =
      numericAskPrice * inventoryData.selectedProductIds.length
    lotModalData.setUnitAskingPrice(calculatedUnitAskingPrice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lotModalData.askPrice])

  const { mutateAsync } = usePut()

  const onSubmit = async (values: any) => {
    const inventoryPage = true
    const payload =
      values.hosting === 'with_hosting'
        ? {
            contract: values.contract,
            askPrice:
              Number(values.askPrice) *
              inventoryData.selectedProductIds?.length,
            auctionStartDate: values.auctionStartDate,
            auctionEndDate: values.auctionEndDate,
            auctionType: values.auctionType,
            hosting: true,
            products: inventoryData.selectedProductIds,
            disableBuyNow: lotModalData.checkboxSelected
          }
        : {
            hosting: false,
            askPrice:
              Number(values.askPrice) *
              inventoryData.selectedProductIds?.length,
            shippingPrice:
              Number(values.shippingPrice) *
              inventoryData.selectedProductIds?.length,
            products: inventoryData.selectedProductIds,
            auctionEndDate: values?.auctionEndDate,
            auctionStartDate: values?.auctionStartDate,
            auctionType: values.auctionType,
            disableBuyNow: lotModalData.checkboxSelected
          }
    try {
      const response = await mutateAsync({
        url: `/api/createALot`,
        payload: { ...payload }
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        inventoryData.toggleModal('isLotModalOpen')
        reset()
        if (inventoryPage) {
          inventoryData.setPage(1)
          inventoryData.setForceUpdate((prev: any) => !prev)
          inventoryData.setSelectAll(false)
          inventoryData.setSelectedProductIds([])
          inventoryData.fetchContractData()
        }
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
