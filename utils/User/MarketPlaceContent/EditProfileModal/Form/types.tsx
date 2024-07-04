import { SVGProps } from 'react'

/* eslint-disable no-unused-vars */
export interface FormDataType {
  title: string
  controllername: string
  defaultValue: string
  placeholder: string
  type: 'email' | 'password' | 'text' | 'number' | 'file'
  maxLength?: number
  maxwidth?: string
  border?: string
  startImage?: (props?: SVGProps<SVGSVGElement>) => JSX.Element
  endImage?: (props?: SVGProps<SVGSVGElement>) => JSX.Element
}
