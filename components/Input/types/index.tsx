import { SVGProps } from 'react'

/* eslint-disable no-unused-vars */
export interface InputProps {
  title: string
  controllername: string
  defaultValue: string
  type: 'email' | 'password' | 'text' | 'number' | 'file'
  className?: string
  placeholder?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: string) => void
  onBlur?: () => void
  maxwidth?: string
  border?: string
  maxLength?: number
  disabled?: boolean
  min?: number
  max?: number
  autocomplete?: string
  step?: string
  errors?: any
  control?: any
  startImage?: (props?: SVGProps<SVGSVGElement>) => JSX.Element
  endImage?: (props?: SVGProps<SVGSVGElement>) => JSX.Element
  watch?: any
  value?: string
}
