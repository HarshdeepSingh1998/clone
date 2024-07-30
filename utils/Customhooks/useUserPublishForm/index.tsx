import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { USER_PUBLISH_VALIDATION_SCHEMA } from '@/utils/Validation/User/InventoryManagementPage'

export const useUserPublishModalForm = () => {
  return useForm({
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
    }
  })
}
