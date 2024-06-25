import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={14}
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 8L6 13L1 8"
      stroke="#F92727"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 0.999999L6 13"
      stroke="#F92727"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
)
export default SVGComponent
