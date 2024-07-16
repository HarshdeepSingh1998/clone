import { FormDataType } from 'utils/ContactPageContent/Form/types'

export const formData: FormDataType[] = [
  {
    title: 'Name',
    controllername: 'name',
    defaultValue: '',
    placeholder: 'Add member name',
    type: 'text',
    maxLength: 50,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  },
  {
    title: 'User Name',
    controllername: 'username',
    defaultValue: '',
    placeholder: 'Enter user name',
    type: 'text',
    maxLength: 50,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  },
  {
    title: 'Phone Number',
    controllername: 'phone',
    defaultValue: '',
    placeholder: '000 000 0000',
    type: 'text',
    maxLength: 100,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  },
  {
    title: 'Email',
    controllername: 'email',
    defaultValue: '',
    placeholder: 'Please enter valid email address',
    type: 'email',
    maxLength: 200,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  }
]
