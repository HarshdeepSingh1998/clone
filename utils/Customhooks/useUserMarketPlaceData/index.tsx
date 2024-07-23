import { useState, useEffect } from 'react'
import { StaticImageData } from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import useGet from '@/hooks/useGet'
import { fetchUser, selectUser } from '@/store/userSlice'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import { AppDispatch } from '@/store/store'
import { MarketPlaceDataInterface } from '@/views/User/MarketPlacePage/types'
const itemsPerPage = 10

export const useUserMarketplace = (): MarketPlaceDataInterface => {
  const userData = useSelector(selectUser)
  const [toggleActive, setToggleActive] = useState<string>('1')
  const [productList, setProductList] = useState<ProductList[] | undefined>(
    undefined
  )
  const [switchActive, setSwitchActive] = useState('inactive')
  const [hosting, setHosting] = useState<boolean>(true)
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [showPlaceModal, setShowPlaceModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(
    DEFAULT_PROFILE_URL
  )
  const [showBuyNowModal, setShowBuyNowModal] = useState(false)
  const [page, setPage] = useState(1)
  const dispatch: AppDispatch = useDispatch()
  const { data, refetch: fetchData } = useGet(
    'marketPlaceProductList',
    switchActive === 'active'
      ? `/api/getPublishedProducts?sortBy=desc&status=Published&isHosting=true&userId=${userData?.data?.id}&limit=${itemsPerPage}&page=${page}&bidderId=${userData?.data?.id}`
      : `/api/getPublishedProducts?sortBy=desc&status=Published&isHosting=${hosting}&limit=${itemsPerPage}&page=${page}&bidderId=${userData?.data?.id}`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [hosting, fetchData, switchActive, page])

  useEffect(() => {
    if (switchActive === 'inactive') {
      const list = data?.data?.products || []
      setProductList(prev => [...(prev || []), ...list])
    } else {
      const list = data?.data?.products || []
      setProductList(prev => [...(prev || []), ...list])
    }
  }, [switchActive, data, userData?.data?.id])

  useEffect(() => {
    setProductList([])
  }, [switchActive])

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined
    setSelectedImage(
      userData?.data?.personalData?.profileImage || DEFAULT_PROFILE_URL
    )
    return () => clearTimeout(timeoutId)
  }, [userData])

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1)
  }

  const handleBuyAndHostClick = () => {
    if (toggleActive !== '1') {
      setToggleActive('1')
      setHosting(true)
      setSwitchActive('inactive')
      setProductList([])
      setPage(1)
    }
  }

  const handleShopClick = () => {
    if (toggleActive !== '2') {
      setToggleActive('2')
      setHosting(false)
      setSwitchActive('inactive')
      setProductList([])
      setPage(1)
    }
  }

  return {
    toggleActive,
    productList,
    switchActive,
    hosting,
    showEditProfileModal,
    setShowEditProfileModal,
    showPlaceModal,
    setShowPlaceModal,
    selectedImage,
    showBuyNowModal,
    setShowBuyNowModal,
    handleLoadMoreClick,
    handleBuyAndHostClick,
    handleShopClick,
    data,
    userData
  }
}
