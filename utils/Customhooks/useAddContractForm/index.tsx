import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ADD_CONTRACT_SCHEMA } from '@/utils/Validation/Admin/ContractManagement'

export const useAddContractForm = () => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(ADD_CONTRACT_SCHEMA),
    defaultValues: {
      contractId: '',
      location: '',
      hostRate: undefined,
      unit: 'usd',
      depositPrice: undefined,
      setupPrice: undefined,
      expirationDate: '',
      document: undefined
    }
  })
}
