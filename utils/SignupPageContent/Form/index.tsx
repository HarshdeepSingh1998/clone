import { FormDataType } from 'utils/SignupPageContent/Form/types'
import EmailIcon from '@/assets/images/svg/EmailIcon'
import PasswordIcon from '@/assets/images/svg/PasswordIcon'
import TickIcon from '@/assets/images/svg/BackfanIcon'
import HideEye from '@/assets/images/svg/HideEye'

export const formData: FormDataType[] = [
  {
    title: '',
    controllername: 'email',
    defaultValue: '',
    placeholder: 'Email',
    type: 'email',
    startImage: EmailIcon,
    endImage: TickIcon
  },
  {
    title: '',
    controllername: 'password',
    defaultValue: '',
    placeholder: 'Password',
    type: 'password',
    startImage: PasswordIcon,
    endImage: HideEye
  },
  {
    title: '',
    controllername: 'confirmPassword',
    defaultValue: '',
    placeholder: 'Confirm Password',
    type: 'password',
    startImage: PasswordIcon,
    endImage: HideEye
  }
]
