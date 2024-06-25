import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12a5 5 0 0 1 5-5h3a1 1 0 1 1 0 2H7a3 3 0 1 0 0 6h3a1 1 0 1 1 0 2H7a5 5 0 0 1-5-5m11-4a1 1 0 0 1 1-1h3a5 5 0 0 1 0 10h-3a1 1 0 1 1 0-2h3a3 3 0 1 0 0-6h-3a1 1 0 0 1-1-1"
      fill="#64718C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
      fill="#64718C"
    />
  </svg>
)
export default SVGComponent
