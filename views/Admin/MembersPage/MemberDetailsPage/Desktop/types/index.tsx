/* eslint-disable no-unused-vars */
import { UserState } from '@/store/userSlice'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import { MemberDetailsList } from '@/utils/ApiTypes/MemberDetailsList'
import { Dispatch, SetStateAction } from 'react'

export interface MemberDetailsDataInterface {
  loading: boolean
  displayedRows: number
  active: string
  memberDetailsData: MemberDetailsList | undefined
  handleShowMoreRows: () => void
  setActive: React.Dispatch<React.SetStateAction<string>>
  data: any
  isCounterBidModalVisible: boolean
  setIsCounterBidModalVisible: Dispatch<SetStateAction<boolean>>
  isBidHistoryModalVisible: boolean
  setIsBidHistoryModalVisible: Dispatch<SetStateAction<boolean>>
  selectedBid: object
  setSelectedBid: Dispatch<SetStateAction<object>>
  isRejectBidModalVisible: boolean
  setIsRejectBidModalVisible: Dispatch<SetStateAction<boolean>>
  isAcceptBidModalVisible: boolean
  setIsAcceptBidModalVisible: Dispatch<SetStateAction<boolean>>
  loadMoreButtonClicked: boolean
  setLoadMoreButtonClicked: Dispatch<SetStateAction<boolean>>
  forceUpdate: boolean
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  biddingList: BiddingList[] | undefined
  setBiddingList: Dispatch<SetStateAction<BiddingList[] | undefined>>
  page: number
  setPage: Dispatch<SetStateAction<number>>
  fetchBiddingData: any
  userData: UserState
  acceptBidClick: (item: any) => void
  counterBid: (item: any) => void
  bidHistory: (item: any) => void
  rejectBid: (item: any) => void
  closeModal: () => void
  handleLoadMoreClick: () => void
}
export interface NoProductViewInterface {
  productList: MemberDetailsDataInterface
  data: any
  handleLoadMoreClick: () => void
}
