import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SIGN_IN_VALIDATION_SCHEMA } from '@/utils/Validation/SigninPage'

export const useSigninForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(SIGN_IN_VALIDATION_SCHEMA),
    defaultValues: {
      email: '',
      password: ''
    }
  })
}
