import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={65}
    height={28}
    viewBox="0 0 65 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M64.2207 13.8684L28.2183 14.1316" stroke="#353D62" />
    <circle
      cx={14.2183}
      cy={14}
      r={13.5}
      transform="rotate(180 14.2183 14)"
      stroke="#353D62"
    />
  </svg>
)
export default SVGComponent
