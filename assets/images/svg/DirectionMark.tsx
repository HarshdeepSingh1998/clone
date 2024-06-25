import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 9L8 14L3 9"
      stroke="#F92727"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2L8 14"
      stroke="#F92727"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
)
export default SVGComponent
