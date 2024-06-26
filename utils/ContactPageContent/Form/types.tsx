export interface FormDataType {
  title: string
  controllername: string
  defaultValue: string
  placeholder: string
  type: 'email' | 'password' | 'text' | 'number' | 'file'
  maxLength: number
  maxwidth: string
  border: string
}
