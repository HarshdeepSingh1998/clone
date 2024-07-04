import { FormDataType } from 'utils/ContactPageContent/Form/types'

export const formData: FormDataType[] = [
  {
    title: 'User name',
    controllername: 'username',
    defaultValue: '',
    placeholder: 'Username',
    type: 'text',
    maxLength: 50,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  },
  {
    title: 'Display name',
    controllername: 'name',
    defaultValue: '',
    placeholder: 'Your full name here',
    type: 'text',
    maxLength: 50,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  },
  {
    title: 'Email',
    controllername: 'email',
    defaultValue: '',
    placeholder: 'Your full name here',
    type: 'email',
    maxLength: 50,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  },
  {
    title: 'Phone Number',
    controllername: 'phonenumber',
    defaultValue: '',
    placeholder: 'Type you number',
    type: 'email',
    maxLength: 50,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  }
]
