import { FormDataType } from 'utils/Admin/MarketPlacePageContent/Form/types'

export const generateFormData = (
  assignOptions: {
    img: JSX.Element
    label: string
    value: string
  }[],
  contractOptions:
    | {
        label: string
        value: string
      }[]
    | undefined,
  hostingTypeOptions: {
    label: string
    value: string
  }[]
): FormDataType[] => {
  return [
    {
      title: 'Hosting Type',
      controllername: 'hosting',
      defaultValue: '',
      placeholder: 'Select Hosting Type',
      type: '',
      options: hostingTypeOptions,
      inputType: 'dropdown'
    },
    {
      title: 'Contract Id',
      controllername: 'contract',
      defaultValue: '',
      placeholder: 'Select Contract Id',
      type: '',
      options: contractOptions,
      inputType: 'dropdown'
    },
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
