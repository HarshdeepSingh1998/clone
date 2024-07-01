/* eslint-disable no-unused-vars */
export interface TextBoxProps {
  title: string
  controllername: string
  control: any
  defaultValue: string
  placeholder: string
  onChange?: (e: string) => void
  value?: string
  maxLength?: number
  errors: any
}
