import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import useGet from '@/hooks/useGet'
import { selectUser } from '@/store/userSlice'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import { AuctionManagementDataInterface } from '@/views/Admin/AuctionManagementPage/Desktop/types'
import EditModal from '@/assets/images/images/edit-modal.png'

const useAuctionManagementData = (): AuctionManagementDataInterface => {
  const router = useRouter()
  const itemsPerPage = 10
  const userData = useSelector(selectUser)
  const [biddingList, setBiddingList] = useState<BiddingList[] | undefined>(
    undefined
  )
  const [selectedBidData, setSelectedBidData] = useState<
    BiddingList | undefined
  >(undefined)
  const [selectedBid, setSelectedBid] = useState({})
  const [page, setPage] = useState(1)
  const [loadMoreButtonClicked, setLoadMoreButtonClicked] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(false)
  const [isCounterBidModalVisible, setIsCounterBidModalVisible] =
    useState(false)
  const [isBidHistoryModalVisible, setIsBidHistoryModalVisible] =
    useState(false)
  const [isRejectBidModalVisible, setIsRejectBidModalVisible] = useState(false)
  const [isAcceptBidModalVisible, setIsAcceptBidModalVisible] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [selectedButton, setSelectedButton] = useState([
    { type: 'contained', label: 'Global Listing', id: 0, disabled: true },
    { type: 'outline', label: 'My Listing', id: 1, disabled: false },
    { type: 'outline', label: 'Rejected', id: 2, disabled: false }
  ])
  const [apiUrl, setApiUrl] = useState({
    label: `auctionData?page=${page}&limit=${itemsPerPage}`,
    url: `/api/getBids?page=${page}&limit=${itemsPerPage}`
  })
  const { data: auctionData, refetch: fetchData } = useGet(
    apiUrl.label,
    apiUrl.url,
    true
  )
  const [actionButtonData, setActionButtonData] = useState<any>([])
  const handleButtonClick = (i: number) => {
    if (i == 0) {
      setApiUrl({
        label: `auctionData?page=${page}&limit=${itemsPerPage}`,
        url: `/api/getBids?page=${page}&limit=${itemsPerPage}`
      })
    } else if (i == 1) {
      setApiUrl({
        label: 'auctionDataPublishedByAdmin',
        url: `/api/getBids?publisherId=${userData?.data?.id}&page=${page}&limit=${itemsPerPage}`
      })
    } else {
      setApiUrl({
        label: `auctionData?page=${page}&limit=${itemsPerPage}&status=Rejected`,
        url:
          userData.data?.role === 'admin'
            ? `/api/getBids?page=${page}&limit=${itemsPerPage}&status=Rejected`
            : `/api/getBids?page=${page}&limit=${itemsPerPage}&status=Rejected&publisherId=${userData?.data?.id}`
      })
    }

    setSelectedButton(prev =>
      prev.map(prev => {
        if (prev.id === i) {
          return {
            ...prev,
            type: 'contained',
            disabled: !prev.disabled
          }
        } else {
          return { ...prev, type: 'outline', disabled: false }
        }
      })
    )

    setForceUpdate(prev => !prev)
    setPage(1)
  }

  useEffect(() => {
    fetchData()
  }, [fetchData, forceUpdate])

  useEffect(() => {
    const list = auctionData?.data.results || []

    if (loadMoreButtonClicked) {
      setBiddingList(prev => [...(prev || []), ...list])
      setLoadMoreButtonClicked(false)
    } else {
      setBiddingList(list)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auctionData])

  const handleClose = () => {
    setAnchorEl(null)
  }

  const acceptBidClick = (item: BiddingList): void => {
    setIsAcceptBidModalVisible(true)
    setSelectedBid(item)
    handleClose()
  }
  const counterBid = (item: BiddingList): void => {
    setSelectedBid(item)
    setIsCounterBidModalVisible(true)
    handleClose()
  }
  const bidHistory = (item: BiddingList): void => {
    setIsBidHistoryModalVisible(true)
    setSelectedBid(item)
    handleClose()
  }

  const rejectBid = (item: BiddingList): void => {
    setIsRejectBidModalVisible(true)
    setSelectedBid(item)
    handleClose()
  }

  const closeModal = () => {
    setIsCounterBidModalVisible(false)
    setIsBidHistoryModalVisible(false)
    setIsRejectBidModalVisible(false)
    setIsAcceptBidModalVisible(false)
    setSelectedBid({})
  }

  const handleClickTable = (productId: string) => {
    router.push(`/admin/auctionManagement/machine?machineId=${productId}`)
  }

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1)
    setLoadMoreButtonClicked(true)
  }

  useEffect(() => {
    if (
      selectedBidData?.auctionStatus === 'Pending' &&
      selectedBidData.publisher._id === userData.data?.id &&
      !(selectedBidData.counters.at(-1)?.bidUser === userData.data?.id)
    ) {
      setActionButtonData([
        {
          key: 'accept',
          title: 'Accept',
          handleClick: () => acceptBidClick(selectedBidData),
          image: EditModal
        },
        {
          key: 'counter',
          title: 'Counter Bid',
          handleClick: () => counterBid(selectedBidData),
          image: EditModal
        },
        {
          key: 'history',
          title: 'Bid History',
          handleClick: () => bidHistory(selectedBidData),
          image: EditModal
        },
        {
          key: 'rejected',
          title: 'Reject Bid',
          handleClick: () => rejectBid(selectedBidData),
          image: EditModal
        }
      ])
    } else {
      setActionButtonData([
        {
          key: 'history',
          title: 'Bid History',
          handleClick: () => bidHistory(selectedBidData as BiddingList),
          image: EditModal
        }
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biddingList, selectedBidData])

  return {
    biddingList,
    setBiddingList,
    selectedBidData,
    setSelectedBidData,
    selectedBid,
    setSelectedBid,
    page,
    setPage,
    loadMoreButtonClicked,
    setLoadMoreButtonClicked,
    forceUpdate,
    setForceUpdate,
    isCounterBidModalVisible,
    setIsCounterBidModalVisible,
    isBidHistoryModalVisible,
    setIsBidHistoryModalVisible,
    isRejectBidModalVisible,
    setIsRejectBidModalVisible,
    isAcceptBidModalVisible,
    setIsAcceptBidModalVisible,
    auctionData,
    acceptBidClick,
    counterBid,
    bidHistory,
    rejectBid,
    closeModal,
    handleClickTable,
    handleLoadMoreClick,
    anchorEl,
    setAnchorEl,
    open,
    handleClose,
    selectedButton,
    setSelectedButton,
    handleButtonClick,
    userData,
    actionButtonData,
    apiUrl,
    itemsPerPage
  }
}

export default useAuctionManagementData
