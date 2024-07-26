// useProductHandler.ts
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import usePut from '@/hooks/usePut'
import { toast } from 'react-toastify'
import { ProductList } from '@/utils/ApiTypes/ProductList'

interface UseProductHandlerProps {
  productList: ProductList[] | undefined
  setProductList: Dispatch<SetStateAction<ProductList[] | undefined>>
  productDetailData: any
  selectedProduct: string
  reset: any
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  closeBuyNowModal: () => void
}

export const useBuyNowData = ({
  productList,
  setProductList,
  productDetailData,
  selectedProduct,
  reset,
  setPage,
  setForceUpdate,
  closeBuyNowModal
}: UseProductHandlerProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [productDetails, setProductDetails] = useState<
    ProductList[] | undefined
  >(undefined)
  const { mutateAsync } = usePut()

  useEffect(() => {
    setProductDetails(productDetailData)
  }, [productDetailData])

  const onSubmit = async () => {
    setIsLoading(true)
    const product = (productList || [])?.find(
      product => product._id === selectedProduct
    )

    const askPrice = productDetails?.[0]?.askPrice ?? 0
    const closedPrice = productDetails?.[0]?.hosting ? askPrice : askPrice

    try {
      const response = await mutateAsync({
        url: `/api/buyProduct/${product?._id}`,
        payload: {
          assignee: product?.user?._id,
          closedPrice: closedPrice
        }
      })
      if (response?.data?.status === 200) {
        const checkoutUrl = response.data.data.checkoutUrl
        toast.success(`${response?.data?.message}`)
        handleModalClose()
        reset()
        // router.push('/user/inventorymanagement')
        window.open(checkoutUrl, '_blank')
        setProductList([])
        setPage(1)
        setForceUpdate(prev => !prev)
        setIsLoading(false)
      }
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message}`)
      setIsLoading(false)
    }
  }

  const handleModalClose = () => {
    closeBuyNowModal()
  }

  return {
    isLoading,
    onSubmit,
    handleModalClose,
    productDetails
  }
}
