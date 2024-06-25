import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#FCFCFC"
      d="M9 1a1 1 0 1 0-2 0v6H1a1 1 0 0 0 0 2h6v6a1 1 0 1 0 2 0V9h6a1 1 0 1 0 0-2H9V1Z"
    />
  </svg>
)
export default SvgComponent
