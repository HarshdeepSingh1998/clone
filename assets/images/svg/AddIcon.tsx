import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.19 1.667a1.19 1.19 0 1 0 -2.38 0v7.143h-7.143a1.19 1.19 0 1 0 0 2.38h7.143v7.143a1.19 1.19 0 0 0 2.38 0v-7.143h7.143a1.19 1.19 0 0 0 0 -2.38h-7.143z"
      fill="#fff"
    />
  </svg>
)
export default SVGComponent
