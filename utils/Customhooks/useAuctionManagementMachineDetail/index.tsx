import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import router from 'next/router'
import useGet from '@/hooks/useGet'
import { selectUser } from '@/store/userSlice'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import { AuctionManagementMachineDetailInterface } from '@/views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/types'
import Reject from '@/assets/images/images/Reject.png'
import Counter from '@/assets/images/images/Counter.png'
import History from '@/assets/images/images/History.png'

const useAuctionManagementMachineDetail =
  (): AuctionManagementMachineDetailInterface => {
    const { machineId } = useRouter().query as {
      machineId: string
    }
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
    const [isRejectBidModalVisible, setIsRejectBidModalVisible] =
      useState(false)
    const [isAcceptBidModalVisible, setIsAcceptBidModalVisible] =
      useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const { data: auctionData, refetch: fetchData } = useGet(
      `machineAuctionData/${machineId}`,
      `/api/getBids?productId=${machineId}&page=${page}&limit=${itemsPerPage}`,
      true
    )
    const [actionButtonData, setActionButtonData] = useState<any>([])

    useEffect(() => {
      if (machineId) fetchData()
    }, [fetchData, forceUpdate, machineId])

    useEffect(() => {
      const list = auctionData?.data.results || []

      if (loadMoreButtonClicked) {
        setBiddingList((prev: any) => [...prev, ...list])
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

    const handleClickMember = (memberId: string) => {
      router.push(`/admin/members/memberDetails/?memberId=${memberId}`)
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
            key: 'counter',
            title: 'Counter Bid',
            handleClick: () => counterBid(selectedBidData),
            image: Counter
          },
          {
            key: 'history',
            title: 'Bid History',
            handleClick: () => bidHistory(selectedBidData),
            image: History
          },
          {
            key: 'rejected',
            title: 'Reject Bid',
            handleClick: () => rejectBid(selectedBidData),
            image: Reject
          }
        ])
      } else {
        setActionButtonData([
          {
            key: 'history',
            title: 'Bid History',
            handleClick: () => bidHistory(selectedBidData as BiddingList),
            image: History
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
      handleClickMember,
      handleLoadMoreClick,
      anchorEl,
      setAnchorEl,
      open,
      handleClose,
      userData,
      actionButtonData
    }
  }

export default useAuctionManagementMachineDetail
