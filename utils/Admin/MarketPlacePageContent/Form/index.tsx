import { FormDataType } from 'utils/Admin/MarketPlacePageContent/Form/types'

export const generateFormData = (
  assignOptions: {
    img: JSX.Element
    label: string
    value: string
  }[]
): FormDataType[] => {
  return [
    {
      title: 'Location',
      controllername: 'location',
      defaultValue: '',
      placeholder: '',
      type: 'text',
      options: {},
      inputType: 'input'
    },
    {
      title: 'Hosting Rate',
      controllername: 'hostRate',
      defaultValue: '',
      placeholder: '',
      type: 'number',
      options: {},
      inputType: 'input'
    },
    {
      title: 'Deposit Amount',
      controllername: 'depositPrice',
      defaultValue: '',
      placeholder: '',
      type: 'number',
      options: {},
      inputType: 'input'
    },
    {
      title: 'Setup Fee',
      controllername: 'setupPrice',
      defaultValue: '',
      placeholder: '',
      type: 'number',
      options: {},
      inputType: 'input'
    },
    {
      title: 'Expiration Date',
      controllername: 'expirationDate',
      defaultValue: '',
      placeholder: '',
      type: 'text',
      options: {},
      inputType: 'input'
    },
    {
      title: 'Assign to',
      controllername: 'assignedUser',
      defaultValue: '',
      placeholder: '',
      type: '',
      options: assignOptions,
      inputType: 'combobox'
    }
  ]
}
