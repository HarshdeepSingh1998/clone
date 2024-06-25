import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="
      #ED832F"
      fillRule="evenodd"
      d="M3 2.952h14a1 1 0 0 1 .888.54L10.555 8.38a1 1 0 0 1-1.11 0L2.112 3.491A1 1 0 0 1 3 2.951ZM2 5.82v8.132a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5.82l-6.336 4.224a3 3 0 0 1-3.328 0L2 5.82ZM0 3.952a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-10Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
