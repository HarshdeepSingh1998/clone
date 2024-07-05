import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useGet from 'hooks/useGet'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { ProductDetailsInterface } from '@/views/Admin/ProductDetailsPage/HeaderView/types'

export const useProductDetails = (): ProductDetailsInterface => {
  const { productId, page } = useRouter().query as {
    productId: string
    page?: string
  }

  const [productDetails, setProductDetails] = useState<
    ProductList[] | undefined
  >(undefined)

  const [selectedProduct, setSelectedProduct] = useState<
    ProductList | undefined
  >(undefined)

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState<string[]>()
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  const { data, refetch: fetchData } = useGet(
    `productDetail/${productId}`,
    `/api/getProductDetails/${productId}`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [fetchData, productId])

  useEffect(() => {
    const list = data?.data

    setProductDetails(list)
    setImages(data?.data?.[index]?.images)
  }, [data, index])

  useEffect(() => {
    setSelectedProduct(productDetails?.[0])
  }, [productDetails])

  const handleClick = (i: number) => {
    setSelectedImageIndex(i)
  }

  const sanitizeHTML = (html: string | undefined) => {
    if (typeof window !== 'undefined') {
      const doc = new DOMParser().parseFromString(html as string, 'text/html')
      return doc.documentElement.textContent
    }

    return html
  }

  return {
    productDetails,
    selectedProduct,
    index,
    images,
    selectedImageIndex,
    handleClick,
    sanitizeHTML,
    setIndex,
    page,
    data,
    setSelectedProduct,
    fetchData
  }
}
