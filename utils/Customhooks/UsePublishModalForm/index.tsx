import { useForm } from 'react-hook-form'

export const usePublishModalForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    // resolver: yupResolver(PUBLISH_VALIDATION_SCHEMA),
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
