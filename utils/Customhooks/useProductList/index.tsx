import { useState, useEffect } from 'react'
import useGet from '@/hooks/useGet'

const useProductList = () => {
  const [hosting, setHosting] = useState(true)
  const [productList, setProductList] = useState([])

  const { data, refetch: fetchData } = useGet(
    `marketPlaceProductListHosting${hosting}`,
    `/api/getPublishedProducts?isHosting=${hosting}&status=Published&limit=${8}`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [fetchData, hosting])

  useEffect(() => {
    const list = data?.data?.products
    setProductList(list)
  }, [data])

  return {
    hosting,
    setHosting,
    productList,
    setProductList
  }
}

export default useProductList
