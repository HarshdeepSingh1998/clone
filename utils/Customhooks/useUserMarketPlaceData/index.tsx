import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { StaticImageData } from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import useGet from '@/hooks/useGet'
import { fetchUser, selectUser } from '@/store/userSlice'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { AppDispatch } from '@/store/store'
import usePut from '@/hooks/usePut'
import { MarketPlaceDataInterface } from '@/views/User/MarketPlacePage/types'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
const itemsPerPage = 10

export const useUserMarketplace = (): MarketPlaceDataInterface => {
  const { mutateAsync } = usePut()
  const userData = useSelector(selectUser)
  const [toggleActive, setToggleActive] = useState<string>('1')
  const [productList, setProductList] = useState<ProductList[] | undefined>(
    undefined
  )
  const [forceUpdate, setForceUpdate] = useState(false)
  const [selectedMachine, setSelectedMachine] = useState('')
  const [productId, setProductId] = useState<string | null>(null)
  const [switchActive, setSwitchActive] = useState('inactive')
  const [hosting, setHosting] = useState<boolean>(true)
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [showPlaceBidModal, setShowPlaceBidModal] = useState(false)
  const [showBuyNowModal, setShowBuyNowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(
    DEFAULT_PROFILE_URL
  )
  const [page, setPage] = useState(1)
  const dispatch: AppDispatch = useDispatch()
  const { data, refetch: fetchData } = useGet(
    'marketPlaceProductList',
    switchActive === 'active'
      ? `/api/getPublishedProducts?sortBy=desc&status=Published&isHosting=true&userId=${userData?.data?.id}&limit=${itemsPerPage}&page=${page}&bidderId=${userData?.data?.id}`
      : `/api/getPublishedProducts?sortBy=desc&status=Published&isHosting=${hosting}&limit=${itemsPerPage}&page=${page}&bidderId=${userData?.data?.id}`,
    true
  )
  const { data: productDetailData, refetch: fetchDataProductDetail } = useGet(
    `productDetail/${productId}`,
    `/api/getProductDetails/${productId}`,
    true
  )
  useEffect(() => {
    if (productId) {
      fetchDataProductDetail()
    }
  }, [productId, fetchDataProductDetail, showBuyNowModal, showPlaceBidModal])
  useEffect(() => {
    fetchData()
  }, [hosting, productList, fetchData, switchActive, page, forceUpdate])

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

  const placeBidClick = (productId: string) => {
    setShowPlaceBidModal?.(true)
    setSelectedMachine(productId)
    setProductId(productId)
  }
  const buyNowClick = (productId: string) => {
    setShowBuyNowModal?.(true)
    setSelectedMachine(productId)
    setProductId(productId)
  }
  const closeAllModal = () => {
    setShowPlaceBidModal?.(false)
    setShowBuyNowModal?.(false)
    setProductId(null)
  }

  const clickGetQuote = async (productId: string | undefined) => {
    try {
      const response = await mutateAsync({
        url: `/api/getQuote/${productId}`
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
      }
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message}`)
    }
  }

  return {
    toggleActive,
    productList,
    switchActive,
    hosting,
    showEditProfileModal,
    setShowEditProfileModal,
    showPlaceBidModal,
    setShowPlaceBidModal,
    selectedImage,
    showBuyNowModal,
    setShowBuyNowModal,
    handleLoadMoreClick,
    handleBuyAndHostClick,
    handleShopClick,
    data,
    userData,
    setProductList,
    setPage,
    setSwitchActive,
    setSelectedImage,
    selectedMachine,
    setSelectedMachine,
    productId,
    setProductId,
    productDetailData,
    placeBidClick,
    buyNowClick,
    closeAllModal,
    clickGetQuote,
    forceUpdate,
    setForceUpdate
  }
}
