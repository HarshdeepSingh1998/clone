// useContactForm.ts

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { USE_COUNTER_BID_SCHEMA } from '@/utils/Validation/Admin/MembersPage/MemberDetailsPage'

export const useBidHistoryForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(USE_COUNTER_BID_SCHEMA),
    defaultValues: {
      counterprice: undefined
    }
  })
}
