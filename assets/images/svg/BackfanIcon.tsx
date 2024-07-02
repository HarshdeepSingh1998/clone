import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props?: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#83BF6E"
      fillRule="evenodd"
      d="M20.707 6.293a1 1 0 0 1 0 1.414l-8.586 8.586a3 3 0 0 1-4.242 0l-3.586-3.586a1 1 0 1 1 1.414-1.414l3.586 3.586a1 1 0 0 0 1.414 0l8.586-8.586a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SVGComponent
