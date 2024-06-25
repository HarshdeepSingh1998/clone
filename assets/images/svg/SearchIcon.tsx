import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#6F767E"
      fillRule="evenodd"
      d="M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm.032 5.618a9 9 0 1 0-1.414 1.414l2.675 2.675a1 1 0 0 0 1.414-1.414l-2.675-2.675Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
