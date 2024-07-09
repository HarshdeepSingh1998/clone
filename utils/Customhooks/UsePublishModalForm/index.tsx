import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PUBLISH_VALIDATION_SCHEMA } from '@/utils/Validation/Admin/MarketPlacePage'

export const usePublishModalForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(PUBLISH_VALIDATION_SCHEMA),
    defaultValues: {
      hosting: '',
      location: '',
      hostRate: '',
      askPrice: '',
      auctionStartDate: '',
      auctionEndDate: '',
      unit: 'usd',
      contract: '',
      depositPrice: '',
      setupPrice: '',
      expirationDate: '',
      auctionType: 'Bid',
      shippingPrice: ''
    }
  })
}
