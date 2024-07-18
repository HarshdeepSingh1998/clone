import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useGet from '@/hooks/useGet'
import { MemberDetailsList } from '@/utils/ApiTypes/MemberDetailsList'
import { MemberDetailsDataInterface } from '@/views/Admin/MembersPage/MemberDetailsPage/Desktop/types'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/userSlice'

const useMemberDetails = (): MemberDetailsDataInterface => {
  const { query } = useRouter()
  const { memberId } = query as { memberId: string }

  const [loading, setLoading] = useState(false)
  const [displayedRows, setDisplayedRows] = useState<number>(5)
  const [active, setActive] = useState('1')
  const [memberDetailsData, setMemberDetailsData] = useState<
    MemberDetailsList | undefined
  >(undefined)

  const { data, refetch: fetchData } = useGet(
    `memberDetails/${memberId}`,
    `/api/getUserInfo?userId=${memberId}`,
    true
  )

  useEffect(() => {
    if (!data) return

    setMemberDetailsData(data.data)
  }, [data])

  const handleShowMoreRows = () => {
    setLoading(true)
    setDisplayedRows(displayedRows + 5)
    setLoading(false)
  }

  useEffect(() => {
    if (memberId) fetchData()
  }, [fetchData, memberId])

  //bid

  const [isCounterBidModalVisible, setIsCounterBidModalVisible] =
    useState(false)
  const [isBidHistoryModalVisible, setIsBidHistoryModalVisible] =
    useState(false)
  const [isRejectBidModalVisible, setIsRejectBidModalVisible] = useState(false)
  const [isAcceptBidModalVisible, setIsAcceptBidModalVisible] = useState(false)
  const [selectedBid, setSelectedBid] = useState({})
  const [loadMoreButtonClicked, setLoadMoreButtonClicked] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(false)

  const [biddingList, setBiddingList] = useState<BiddingList[] | undefined>(
    undefined
  )

  const itemsPerPage = 10
  const [page, setPage] = useState(1)
  const { data: auctionData, refetch: fetchBiddingData } = useGet(
    `auctionData/${memberId}`,
    `/api/getBids?userId=${memberId}&page=${page}&limit=${itemsPerPage}`,
    true
  )

  useEffect(() => {
    if (memberId && active === '2') fetchBiddingData()
  }, [active, fetchBiddingData, forceUpdate, memberId])

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

  const userData = useSelector(selectUser)
  // console.log({ auctionData })

  const acceptBidClick = (
    // popupState: CustomPopupState,
    item: any
  ): void => {
    setIsAcceptBidModalVisible(true)
    setSelectedBid(item)
    // popupState.close()
  }
  const counterBid = (
    // popupState: CustomPopupState,
    item: any
  ): void => {
    setSelectedBid(item)
    setIsCounterBidModalVisible(true)
    // popupState.close()
  }
  const bidHistory = (
    // popupState: CustomPopupState,
    item: any
  ): void => {
    setIsBidHistoryModalVisible(true)
    setSelectedBid(item)
    // popupState.close()
  }

  const rejectBid = (
    // popupState: CustomPopupState,
    item: any
  ): void => {
    setIsRejectBidModalVisible(true)
    setSelectedBid(item)

    // popupState.close()
  }

  const closeModal = () => {
    setIsCounterBidModalVisible(false)
    setIsBidHistoryModalVisible(false)
    setIsRejectBidModalVisible(false)
    setIsAcceptBidModalVisible(false)
    setSelectedBid({})
  }

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1)
    setLoadMoreButtonClicked(true)
  }

  return {
    loading,
    displayedRows,
    active,
    memberDetailsData,
    handleShowMoreRows,
    setActive,
    data,
    isCounterBidModalVisible,
    setIsCounterBidModalVisible,
    isBidHistoryModalVisible,
    setIsBidHistoryModalVisible,
    selectedBid,
    setSelectedBid,
    isRejectBidModalVisible,
    setIsRejectBidModalVisible,
    isAcceptBidModalVisible,
    setIsAcceptBidModalVisible,
    loadMoreButtonClicked,
    setLoadMoreButtonClicked,
    forceUpdate,
    setForceUpdate,
    biddingList,
    setBiddingList,
    fetchBiddingData,
    userData,
    acceptBidClick,
    counterBid,
    bidHistory,
    rejectBid,
    closeModal,
    handleLoadMoreClick,
    page,
    setPage
  }
}

export default useMemberDetails
