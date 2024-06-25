import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={24}
    fill="none"
    className="fillSvgClass"
    {...props}
  >
    <path d="m11.5 1.458 9.104 5.271v10.542L11.5 22.54l-9.104-5.27V6.729L11.5 1.46Zm0 2.215L4.312 7.834v8.332l7.188 4.161 7.187-4.161V7.834L11.5 3.673Zm0 12.16a3.833 3.833 0 1 1 0-7.666 3.833 3.833 0 0 1 0 7.666Zm0-1.916a1.917 1.917 0 1 0 0-3.834 1.917 1.917 0 0 0 0 3.834Z" />
  </svg>
)
export default SvgComponent
