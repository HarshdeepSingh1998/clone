import { Dispatch, SetStateAction } from 'react'
import { UserState } from '@/store/userSlice'

export interface BidHistoryModalInterface {
  closeModal: () => void
  selectedBid: any
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  setIsBidHistoryModalVisible: Dispatch<SetStateAction<boolean>>
  userData: UserState
}
