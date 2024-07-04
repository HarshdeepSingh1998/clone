import { FormDataType } from 'utils/ContactPageContent/Form/types'
import PasswordIcon from '@/assets/images/svg/PasswordIcon'

export const formData: FormDataType[] = [
  {
    title: 'New Password',
    controllername: 'password',
    defaultValue: '',
    placeholder: 'Enter New Password',
    type: 'password',
    startImage: PasswordIcon
  },
  {
    title: 'Confirm Password',
    controllername: 'confirmPassword',
    defaultValue: '',
    placeholder: 'Confirm Password',
    type: 'password',
    startImage: PasswordIcon
  }
]
