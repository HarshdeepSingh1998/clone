import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CHANGE_PASSWORD_VALIDATION_SCHEMA } from '@/utils/Validation/User/MarketPlace'

export const useChangePasswordForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(CHANGE_PASSWORD_VALIDATION_SCHEMA),
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  })
}
