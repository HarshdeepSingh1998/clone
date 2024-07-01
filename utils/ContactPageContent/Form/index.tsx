import { FormDataType } from 'utils/ContactPageContent/Form/types'

export const formData: FormDataType[] = [
  {
    title: 'Full name',
    controllername: 'name',
    defaultValue: '',
    placeholder: 'Your full name here',
    type: 'text',
    maxLength: 50,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  },
  {
    title: 'Email address',
    controllername: 'email',
    defaultValue: '',
    placeholder: 'info@basicmining.com',
    type: 'email',
    maxLength: 50,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  },
  {
    title: 'Company',
    controllername: 'company',
    defaultValue: '',
    placeholder: 'Your company',
    type: 'text',
    maxLength: 100,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  },
  {
    title: 'Subject',
    controllername: 'subject',
    defaultValue: '',
    placeholder: 'How can we help',
    type: 'text',
    maxLength: 200,
    maxwidth: '100%',
    border: '1px solid #DADADA;'
  }
]
