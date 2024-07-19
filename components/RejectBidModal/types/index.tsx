import { Dispatch, SetStateAction } from 'react'

export interface RejectModalInterface {
  closeModal: () => void
  selectedBid: object
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  setIsRejectBidModalVisible: Dispatch<SetStateAction<boolean>>
}
