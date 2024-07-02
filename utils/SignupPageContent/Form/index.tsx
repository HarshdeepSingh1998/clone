import { FormDataType } from 'utils/SignupPageContent/Form/types'

export const formData: FormDataType[] = [
  {
    title: '',
    controllername: 'email',
    defaultValue: '',
    placeholder: 'Email',
    type: 'email'
  },
  {
    title: '',
    controllername: 'password',
    defaultValue: '',
    placeholder: 'Password',
    type: 'password'
  },
  {
    title: '',
    controllername: 'confirmPassword',
    defaultValue: '',
    placeholder: 'Confirm Password',
    type: 'password'
  }
]
