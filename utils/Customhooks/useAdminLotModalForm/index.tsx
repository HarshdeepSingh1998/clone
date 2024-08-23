import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LOT_PUBLISH_VALIDATION_SCHEMA } from '@/utils/Validation/Admin/InventoryManagementPage'

export const useAdminLotModalForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(LOT_PUBLISH_VALIDATION_SCHEMA),
    defaultValues: {
      hosting: '',
      contract: '',
      location: '',
      hostRate: '',
      depositPrice: '',
      setupPrice: '',
      expirationDate: '',
      unit: 'usd',
      askPrice: '',
      auctionStartDate: '',
      auctionEndDate: '',
      shippingPrice: '',
      auctionType: 'Bid'
    }
  })
}
