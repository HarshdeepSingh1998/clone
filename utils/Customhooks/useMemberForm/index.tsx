import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ADD_MEMBER_SCHEMA } from '@/utils/Validation/Admin/MembersPage'

export const useMemberForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(ADD_MEMBER_SCHEMA),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      phone: ''
    }
  })
}
