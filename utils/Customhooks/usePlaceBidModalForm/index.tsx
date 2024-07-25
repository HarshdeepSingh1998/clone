import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PLACE_BID_SCHEMA } from '@/utils/Validation/User/MarketPlace/PlaceBidModal'

export const usePlaceBidModalForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(PLACE_BID_SCHEMA),
    defaultValues: {
      bidamount: ''
    }
  })
}
