import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import usePut from '@/hooks/usePut'

const usePaymentConfirmationModal = (
  fetchSalesData: any,
  productId: string,
  setPaymentConformationModal: Dispatch<SetStateAction<boolean>>
) => {
  const { mutateAsync } = usePut()

  const handleNoClick = async () => {
    try {
      const response = await mutateAsync({
        url: `/api/noPaymentReceived/${productId}`
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        fetchSalesData()
        setPaymentConformationModal(false)
      }
    } catch (error: any) {
      if (!error?.response?.data?.message) {
        toast.error(
          error?.response?.data?.err ||
            `Oops! Something went wrong. Please try again later`,
          {
            autoClose: 2000
          }
        )
      } else {
        toast.error(`${error?.response?.data?.message}`)
      }
    }
  }

  const handleSubmitClick = async () => {
    try {
      const response = await mutateAsync({
        url: `/api/paymentReceivedUpdate/${productId}`
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        fetchSalesData()
        setPaymentConformationModal(false)
      }
    } catch (error: any) {
      if (!error?.response?.data?.message) {
        toast.error(
          error?.response?.data?.err ||
            `Oops! Something went wrong. Please try again later`,
          {
            autoClose: 2000
          }
        )
      } else {
        toast.error(`${error?.response?.data?.message}`)
      }
    }
  }

  return {
    handleNoClick,
    handleSubmitClick
  }
}

export default usePaymentConfirmationModal
