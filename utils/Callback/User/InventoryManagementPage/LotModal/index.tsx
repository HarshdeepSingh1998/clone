import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import usePut from '@/hooks/usePut'
import { UserInventoryDataInterface } from '@/views/User/InventoryManagementPage/Desktop/types'
import { UseUserLotModalDataInterface } from '@/utils/Customhooks/useUserLotModalData'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { SalesListInterface } from '@/utils/ApiTypes/getSales'

const useSubmit = (
  inventoryData: UserInventoryDataInterface,
  lotModalData: UseUserLotModalDataInterface,
  reset: any,
  watch: any
) => {
  const [unitAskingPrice, setUnitAskingPrice] = useState(0)

  const askPrice = watch('askPrice')

  useEffect(() => {
    const numericAskPrice = Number(askPrice)
    const calculatedUnitAskingPrice =
      numericAskPrice * inventoryData.selectedProductIds.length
    setUnitAskingPrice(calculatedUnitAskingPrice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [askPrice])

  const { mutateAsync } = usePut()

  function isProductList(
    item: ProductList | SalesListInterface
  ): item is ProductList {
    return (item as ProductList).modelName !== undefined
  }

  const onSubmit = async (values: any) => {
    const inventoryPage = true
    const productListItems =
      lotModalData.lotProducts?.filter(isProductList) || []
    const payload = {
      ...values,
      askPrice:
        Number(values.askPrice) * inventoryData.selectedProductIds.length,
      hosting: productListItems[0]?.hosting,
      contract: productListItems[0]?.contract?._id,
      products: inventoryData.selectedProductIds,
      disableBuyNow: true
    }
    try {
      const response = await mutateAsync({
        url: `/api/createALot`,
        payload: { ...payload }
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        inventoryData.setIsLotModalOpen(false)
        reset()
        if (inventoryPage) {
          inventoryData.setPage(1)
          inventoryData.setForceUpdate((prev: any) => !prev)
        }

        inventoryData.setSelectAll(false)
        inventoryData.setSelectedProductIds([])
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

  return { onSubmit, unitAskingPrice, setUnitAskingPrice }
}

export default useSubmit
