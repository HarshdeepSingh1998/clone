import { SVGProps } from 'react'

/* eslint-disable no-unused-vars */
export interface FormDataType {
  title: string
  controllername: string
  placeholder: string
  type: string
  startImage?: (props?: SVGProps<SVGSVGElement>) => JSX.Element
  endImage?: (props?: SVGProps<SVGSVGElement>) => JSX.Element
  inputType: string
}
