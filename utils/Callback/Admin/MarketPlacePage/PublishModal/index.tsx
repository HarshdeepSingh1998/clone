import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import usePut from '@/hooks/usePut'
import { ProductList } from '@/utils/ApiTypes/ProductList'

const useSubmit = (
  setError: any,
  watch: any,
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
    if (typeof values.askPrice === 'string' && values.askPrice.length > 7) {
      setError('askPrice', {
        type: 'manual',
        message: 'Price cannot be greater than 7'
      })
      return
    }

    if (
      typeof values.shippingPrice === 'string' &&
      values.shippingPrice.length > 5
    ) {
      setError('shippingPrice', {
        type: 'manual',
        message: 'Price cannot be greater than 5'
      })
      return
    }

    if (!values.hosting) {
      setError('hosting', {
        type: 'manual',
        message: 'Hosting is required.'
      })
      return
    }

    if (values.hosting === 'with_hosting' && !watch('contract')) {
      setError('contract', {
        type: 'manual',
        message: 'Contract is required.'
      })
      return
    }

    if (values.hosting === 'with_hosting' && !watch('askPrice')) {
      setError('askPrice', {
        type: 'manual',
        message: 'Selling price is required.'
      })
      return
    }

    const askPriceValue = parseFloat(watch('askPrice'))

    if (
      values.hosting === 'with_hosting' &&
      (isNaN(askPriceValue) || askPriceValue <= 0)
    ) {
      setError('askPrice', {
        type: 'manual',
        message: 'Selling price must be a positive number.'
      })
      return
    }

    if (
      (!values.auctionStartDate ||
        values.auctionStartDate === 'Invalid Date') &&
      publishModalData.auctionType === 'Bid' &&
      publishModalData.hostingType === 'with_hosting'
    ) {
      setError('auctionStartDate', {
        type: 'manual',
        message: 'Auction Start Date is required.'
      })
      return
    }

    if (
      values.auctionStartDate &&
      (!values.auctionEndDate || values.auctionEndDate === 'Invalid Date') &&
      publishModalData.auctionType === 'Bid' &&
      publishModalData.hostingType === 'with_hosting'
    ) {
      setError('auctionEndDate', {
        type: 'manual',
        message: 'Auction End Date is required.'
      })
      return
    }

    if (
      values.hosting === 'without_hosting' &&
      !!publishModalData.askPrice &&
      !(values.shippingPrice > 0) &&
      publishModalData.auctionType === 'Buy'
    ) {
      setError('shippingPrice', {
        type: 'manual',
        message: 'Shipping cost is required'
      })
      return
    }

    if (
      values.hosting === 'without_hosting' &&
      publishModalData.auctionType === 'Bid' &&
      !publishModalData.askPrice
    ) {
      setError('askPrice', {
        type: 'manual',
        message: 'Ask Price is required.'
      })
      return
    }

    if (
      values.hosting === 'without_hosting' &&
      publishModalData.auctionType === 'Bid' &&
      !values.shippingPrice
    ) {
      setError('shippingPrice', {
        type: 'manual',
        message: 'Shipping Price is required.'
      })
      return
    }

    if (
      values.hosting === 'without_hosting' &&
      publishModalData.auctionType === 'Bid' &&
      (!values.auctionStartDate || values.auctionStartDate === 'Invalid Date')
    ) {
      setError('auctionStartDate', {
        type: 'manual',
        message: 'Auction Start Date is required.'
      })
      return
    }

    if (
      values.auctionStartDate &&
      values.hosting === 'without_hosting' &&
      publishModalData.auctionType === 'Bid' &&
      (!values.auctionEndDate || values.auctionEndDate === 'Invalid Date')
    ) {
      setError('auctionEndDate', {
        type: 'manual',
        message: 'Auction End Date is required.'
      })
      return
    }

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
