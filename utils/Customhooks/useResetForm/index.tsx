import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RESET_VALIDATION_SCHEMA } from '@/utils/Validation/ResetPasswordPage'

export const useResetForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(RESET_VALIDATION_SCHEMA),
    defaultValues: {
      email: ''
    }
  })
}
