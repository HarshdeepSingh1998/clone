import { useState, useEffect } from 'react'
import useGet from '@/hooks/useGet'
import { ProductList } from '@/utils/ApiTypes/ProductList'

const useAdminMarketPlace = () => {
  const itemsPerPage = 10
  const [page, setPage] = useState(1)
  const [toggleActive, setToggleActive] = useState<string>('1')
  const [productList, setProductList] = useState<undefined | ProductList[]>(
    undefined
  )
  const [hosting, setHosting] = useState<boolean>(true)

  const { data, refetch: fetchData } = useGet(
    `marketPlaceProductListHosting${hosting}`,
    `/api/getPublishedProducts?sortBy=desc&status=Published&isHosting=${hosting}&limit=${itemsPerPage}&page=${page}`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [hosting, fetchData, page])

  useEffect(() => {
    const list = data?.data?.products || []

    setProductList(prev => [...(prev || []), ...list])
  }, [data])

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1)
  }

  const handleBuyAndHostClick = () => {
    if (toggleActive !== '1') {
      setToggleActive('1')
      setHosting(true)
      setProductList([])
      setPage(1)
    }
  }

  const handleShopClick = () => {
    if (toggleActive !== '2') {
      setToggleActive('2')
      setHosting(false)
      setProductList([])
      setPage(1)
    }
  }

  return {
    page,
    toggleActive,
    productList,
    hosting,
    handleLoadMoreClick,
    handleBuyAndHostClick,
    handleShopClick,
    data
  }
}

export default useAdminMarketPlace
