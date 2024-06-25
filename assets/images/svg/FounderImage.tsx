import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.168 13.278v8.648l4.315-4.318 4.315-4.319V4.63h-8.63zm12.264 0v8.648l4.315-4.318 4.314-4.319V4.63h-8.629z"
      fill="#fff"
    />
  </svg>
)
export default SVGComponent
