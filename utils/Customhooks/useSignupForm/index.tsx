import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SIGN_UP_VALIDATION_SCHEMA } from '@/utils/Validation/SignupPage'

export const useSignupForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(SIGN_UP_VALIDATION_SCHEMA),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })
}
