import { useState, useEffect } from 'react'
import { ProductList } from '@/utils/ApiTypes/ProductList'

const usePlaceBidData = (productDetailData: any) => {
  const [productDetails, setProductDetails] = useState<
    ProductList[] | undefined
  >(undefined)

  useEffect(() => {
    setProductDetails(productDetailData)
  }, [productDetailData])

  return {
    productDetails
  }
}

export default usePlaceBidData
