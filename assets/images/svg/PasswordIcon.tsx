import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props?: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#ED832F"
      d="M13 16.684a2 2 0 1 0-2 0v1.268a1 1 0 0 0 2 0v-1.268Z"
    />
    <path
      fill="#ED832F"
      fillRule="evenodd"
      d="M7 8.952v-1a5 5 0 0 1 10 0v1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm2-1a3 3 0 1 1 6 0v1H9v-1Zm-3 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
