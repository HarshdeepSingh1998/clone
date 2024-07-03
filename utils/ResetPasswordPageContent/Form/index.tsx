import { FormDataType } from 'utils/SigninPageContent/Form/types'
import EmailIcon from '@/assets/images/svg/EmailIcon'
import TickIcon from '@/assets/images/svg/BackfanIcon'

export const formData: FormDataType[] = [
  {
    title: '',
    controllername: 'email',
    defaultValue: '',
    placeholder: 'Email',
    type: 'email',
    startImage: EmailIcon,
    endImage: TickIcon
  }
]
