import { Dispatch, SetStateAction } from 'react'

export interface CounterBidModalInterface {
  closeModal: () => void
  selectedBid: object
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  setIsCounterBidModalVisible: Dispatch<SetStateAction<boolean>>
}
