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
      fill="#6C6C6C"
      d="M19.88 11.154C19.294 9.878 17 5.7 12 5.7s-7.295 4.178-7.88 5.454a1.313 1.313 0 0 0 0 1.094C4.704 13.522 7 17.7 12 17.7s7.294-4.178 7.88-5.454a1.312 1.312 0 0 0 0-1.093v.001ZM12 15.7a4 4 0 1 1-.004-8 4 4 0 0 1 .004 8Z"
    />
    <path
      fill="#6C6C6C"
      d="M12 14.367a2.666 2.666 0 1 0 0-5.333 2.666 2.666 0 0 0 0 5.333Z"
    />
  </svg>
)
export default SvgComponent
