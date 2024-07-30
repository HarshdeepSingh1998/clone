import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { USER_PUBLISH_VALIDATION_SCHEMA } from '@/utils/Validation/User/InventoryManagementPage'
interface FormValues {
  unit?: string
  auctionStartDate?: string
  auctionEndDate?: string
  auctionType?: string
  askPrice: string
  shippingPrice?: string
}

export const useUserPublishModalForm = (context: any) => {
  return useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(USER_PUBLISH_VALIDATION_SCHEMA),
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
