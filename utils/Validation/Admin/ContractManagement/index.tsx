import * as yup from 'yup'

export const ADD_CONTRACT_SCHEMA = yup.object().shape({
  contractId: yup.string().required('Contract ID is required'),
  location: yup.string().required('Location is required'),
  hostRate: yup
    .number()
    .typeError('Host rate must be a number')
    .min(100, 'Host rate must be at least 3 digits')
    .required('Host rate is required'),
  unit: yup.string().required('Unit is required'),
  depositPrice: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === '' ? null : value
    )
    .typeError('Deposit price must be a number')
    .required('Deposit price is required'),
  setupPrice: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === '' ? null : value
    )
    .typeError('Setup price must be a number')
    .required('Setup price is required'),
  expirationDate: yup
    .string()
    .typeError('Expiration date must be a valid date')
    .required('Expiration date is required'),
  document: yup.string().url('Document must be a valid URL')
})
