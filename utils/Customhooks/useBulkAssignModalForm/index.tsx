import { useForm } from 'react-hook-form'

export const useBulkAssignModalForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      contract: '',
      assignedUser: '',
      location: '',
      hostRate: '',
      depositPrice: '',
      setupPrice: '',
      expirationDate: '',
      hosting: ''
    }
  })
}
