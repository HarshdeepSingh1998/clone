import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    className="fillSvgClass"
    {...props}
  >
    <path
      //   fill="#64718C"
      fillRule="evenodd"
      d="M2.24 5.116a.64.64 0 0 1 .64-.64h10.24a.64.64 0 1 1 0 1.28H2.88a.64.64 0 0 1-.64-.64Zm1.92 3.2a.64.64 0 0 1 .64-.64h6.4a.64.64 0 1 1 0 1.28H4.8a.64.64 0 0 1-.64-.64Zm1.92 3.2a.64.64 0 0 1 .64-.64h2.56a.64.64 0 1 1 0 1.28H6.72a.64.64 0 0 1-.64-.64Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
