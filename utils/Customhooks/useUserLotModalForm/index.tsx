import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { USER_LOT_MODAL_VALIDATION_SCHEMA } from '@/utils/Validation/User/InventoryManagementPage/LotModal'
interface FormValues {
  unit?: string
  auctionStartDate?: string
  auctionEndDate?: string
  auctionType?: string
  askPrice: string
  shippingPrice?: string
}

export const useUserLotModalForm = (context: any) => {
  return useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(USER_LOT_MODAL_VALIDATION_SCHEMA),
    defaultValues: {
      unit: 'usd',
      auctionStartDate: '',
      auctionEndDate: '',
      auctionType: 'Bid',
      askPrice: '',
      shippingPrice: ''
    },
    context
  })
}
