import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <path
      stroke="#282828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M31 12 18 24 5 12"
    />
  </svg>
)
export default SvgComponent
