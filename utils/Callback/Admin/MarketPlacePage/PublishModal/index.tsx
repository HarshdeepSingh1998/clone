import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import usePut from '@/hooks/usePut'
import { ProductList } from '@/utils/ApiTypes/ProductList'

const useSubmit = (
  reset: any,
  selectedProduct: ProductList | undefined,
  setIsPublishModalVisible: Dispatch<SetStateAction<boolean>>,
  inventoryPage: boolean,
  fetchData: any,
  publishModalData: any
) => {
  const { mutateAsync } = usePut()
  inventoryPage
  const onSubmit = async (values: any) => {
    const payload =
      values.hosting === 'with_hosting'
        ? {
            ...values,
            hosting: true,
            disableBuyNow: publishModalData.checkboxSelected
          }
        : {
            hosting: false,
            askPrice: values?.askPrice,
            shippingPrice: values.shippingPrice,
            auctionEndDate: values?.auctionEndDate,
            auctionStartDate: values?.auctionStartDate,
            auctionType: publishModalData.auctionType,
            disableBuyNow: publishModalData.checkboxSelected
          }
    try {
      const response = await mutateAsync({
        url: `/api/publishProduct/${selectedProduct && selectedProduct._id.trim()}`,
        payload: { ...payload }
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        setIsPublishModalVisible(false)
        reset()
        publishModalData.setCalenderClick(false)
        // if (inventoryPage) {
        //   setPage(1)
        //   setSelectedProductIds([])
        //   setForceUpdate((prev: any) => !prev)
        //   fetchContractData()
        // } else {
        //   fetchData()
        // }
        // fetchData()
        fetchData()
        // setSelectedProduct('')
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
