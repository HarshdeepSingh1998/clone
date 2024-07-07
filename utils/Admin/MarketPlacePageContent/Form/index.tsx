import { FormDataType } from 'utils/Admin/MarketPlacePageContent/Form/types'

export const generateFormData = (): FormDataType[] => {
  return [
    {
      title: 'Location',
      controllername: 'location',
      placeholder: '',
      type: 'text',
      inputType: 'input'
    },
    {
      title: 'Hosting Rate',
      controllername: 'hostRate',
      placeholder: '',
      type: 'number',
      inputType: 'input'
    },
    {
      title: 'Deposit Amount',
      controllername: 'depositPrice',
      placeholder: '',
      type: 'number',
      inputType: 'input'
    },
    {
      title: 'Setup Fee',
      controllername: 'setupPrice',
      placeholder: '',
      type: 'number',
      inputType: 'input'
    },
    {
      title: 'Expiration Date',
      controllername: 'expirationDate',
      placeholder: '',
      type: 'text',
      inputType: 'input'
    }
  ]
}
