import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className="fillSvgClass"
    {...props}
  >
    <path
      // fill="#fff"
      fillRule="evenodd"
      d="M3 20a3 3 0 0 1-3-3V9.336a3 3 0 0 1 .993-2.23l7-6.3a3 3 0 0 1 4.014 0l7 6.3A3 3 0 0 1 20 9.336V17a3 3 0 0 1-3 3H3ZM18 9.336V17a1 1 0 0 1-1 1h-3v-5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v5H3a1 1 0 0 1-1-1V9.336a1 1 0 0 1 .331-.743l7-6.3a1 1 0 0 1 1.338 0l7 6.3a1 1 0 0 1 .331.743ZM8 18v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5H8Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
