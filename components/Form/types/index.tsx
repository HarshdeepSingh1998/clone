/* eslint-disable no-unused-vars */
import { FormDataType } from '@/utils/ContactPageContent/Form/types'
import { Dispatch, MutableRefObject, SetStateAction } from 'react'

export interface FormType {
  handleSubmit: any
  formData: FormDataType[]
  control: any
  errors: any
  onSubmit: (values: any) => Promise<void>
  disable?: boolean
  isTextboxVisible: boolean
  buttonText?: string
  watch?: any
  isSignUpVisible?: boolean
  otp?: string[]
  inputsRef?: MutableRefObject<(HTMLInputElement | null)[]>
  setOtp?: Dispatch<SetStateAction<string[]>>
}
