import { FormDataType } from 'utils/ContactPageContent/Form/types'

export const formData: FormDataType[] = [
  {
    title: 'User name',
    controllername: 'displayname',
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
    controllername: 'useremail',
    defaultValue: '',
    placeholder: 'Enter your email',
    type: 'email',
    maxLength: 50,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  },
  {
    title: 'Phone Number',
    controllername: 'phonenumber',
    defaultValue: '',
    placeholder: 'Type your number',
    type: 'number',
    maxLength: 50,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  }
]
