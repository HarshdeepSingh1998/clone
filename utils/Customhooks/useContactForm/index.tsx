// useContactForm.ts

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CONTACT_VALIDATION_SCHEMA } from '@/utils/Validation/ContactPage'

export const useContactForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(CONTACT_VALIDATION_SCHEMA),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    }
  })
}
