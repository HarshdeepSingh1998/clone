/* eslint-disable no-unused-vars */
import { UserState } from '@/store/userSlice'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'

export interface AuctionManagementMachineDetailInterface {
  biddingList: BiddingList[] | undefined
  setBiddingList: React.Dispatch<
    React.SetStateAction<BiddingList[] | undefined>
  >
  selectedBidData: BiddingList | undefined
  setSelectedBidData: React.Dispatch<
    React.SetStateAction<BiddingList | undefined>
  >
  selectedBid: object
  setSelectedBid: React.Dispatch<React.SetStateAction<object>>
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  loadMoreButtonClicked: boolean
  setLoadMoreButtonClicked: React.Dispatch<React.SetStateAction<boolean>>
  forceUpdate: boolean
  setForceUpdate: React.Dispatch<React.SetStateAction<boolean>>
  isCounterBidModalVisible: boolean
  setIsCounterBidModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  isBidHistoryModalVisible: boolean
  setIsBidHistoryModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  isRejectBidModalVisible: boolean
  setIsRejectBidModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  isAcceptBidModalVisible: boolean
  setIsAcceptBidModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  auctionData: any
  acceptBidClick: (item: BiddingList) => void
  counterBid: (item: BiddingList) => void
  bidHistory: (item: BiddingList) => void
  rejectBid: (item: BiddingList) => void
  closeModal: () => void
  handleClickMember: (memberId: string) => void
  handleLoadMoreClick: () => void
  anchorEl: HTMLElement | null
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  open: boolean
  handleClose: () => void
  userData: UserState
  actionButtonData: any[]
}
export interface NoProductViewInterface {
  productList: BiddingList[] | undefined
  data: any
  handleLoadMoreClick: () => void
}
