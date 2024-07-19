import { Dispatch, SetStateAction } from 'react'

export interface AcceptBidModalInterface {
  closeModal: () => void
  selectedBid: object
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  setIsAcceptBidModalVisible: Dispatch<SetStateAction<boolean>>
}
