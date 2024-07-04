// useContactForm.ts

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EDIT_PROFILE_VALIDATION_SCHEMA } from '@/utils/Validation/User/MarketPlace'
import { UserState } from '@/store/userSlice'

export const useEditProfileModalForm = (userData: UserState) => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(EDIT_PROFILE_VALIDATION_SCHEMA),
    defaultValues: {
      name: userData?.data?.personalData?.name || '',
      email: '',
      phonenumber: userData?.data?.personalData?.phone || '',
      username: ''
    }
  })
}
