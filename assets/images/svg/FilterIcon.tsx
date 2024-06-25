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
      d="M10.236 10.927A2 2 0 0 1 11 12.5v6.676l2-.704V12.5a2 2 0 0 1 .764-1.573l5.854-4.599A1 1 0 0 0 20 5.542V4H4v1.542a1 1 0 0 0 .382.786l5.854 4.6Zm10.617-3.026L15 12.5v6.68a1 1 0 0 1-.668.944l-4 1.407A1 1 0 0 1 9 20.588V12.5L3.147 7.9A3 3 0 0 1 2 5.543V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.542A3 3 0 0 1 20.854 7.9Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
