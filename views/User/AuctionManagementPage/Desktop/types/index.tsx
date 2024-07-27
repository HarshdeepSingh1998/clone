/* eslint-disable no-unused-vars */
import { UserState } from '@/store/userSlice'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import { Dispatch, SetStateAction } from 'react'

export interface AuctionManagementDataInterface {
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
  auctionData: any // Adjust the type according to your actual API response type
  acceptBidClick: (item: BiddingList) => void
  counterBid: (item: BiddingList) => void
  bidHistory: (item: BiddingList) => void
  rejectBid: (item: BiddingList) => void
  closeModal: () => void
  handleClickTable: (productId: string) => void
  handleLoadMoreClick: () => void
  anchorEl: null | HTMLElement
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>
  open: boolean
  handleClose: () => void
  selectedButton: {
    type: string
    label: string
    id: number
    disabled: boolean
  }[]
  setSelectedButton: Dispatch<
    SetStateAction<
      {
        type: string
        label: string
        id: number
        disabled: boolean
      }[]
    >
  >
  handleButtonClick: (i: number) => void
  userData: UserState
  actionButtonData: any
  apiUrl: {
    label: string
    url: string
  }
  itemsPerPage: number
}

export interface NoProductViewInterface {
  productList: BiddingList[] | undefined
  data: any
  handleLoadMoreClick: () => void
}
