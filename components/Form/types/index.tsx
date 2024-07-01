/* eslint-disable no-unused-vars */
import { FormDataType } from '@/utils/ContactPageContent/Form/types'

export interface FormType {
  handleSubmit: any
  formData: FormDataType[]
  control: any
  errors: any
  onSubmit: (values: any) => Promise<void>
  disable?: boolean
}
