import { Dispatch, SetStateAction } from 'react'

export interface PaymentConfirmationModalProps {
  isOpen: boolean
  setPaymentConformationModal: Dispatch<SetStateAction<boolean>>
  fetchSalesData: any
  productId: string
}
