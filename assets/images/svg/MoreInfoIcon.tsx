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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.619 8A7.619 7.619 0 1 1 0.381 8a7.619 7.619 0 0 1 15.239 0M8 7.238c0.421 0 0.762 0.342 0.762 0.762v3.81a0.762 0.762 0 0 1 -1.525 0V8c0 -0.421 0.342 -0.762 0.762 -0.762M8 5.714a0.762 0.762 0 1 0 0 -1.523A0.762 0.762 0 0 0 8 5.714"
      fill="#64718C"
    />
  </svg>
)
export default SVGComponent
