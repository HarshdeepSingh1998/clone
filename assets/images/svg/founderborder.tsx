import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={984}
    height={500}
    viewBox="0 0 984 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M710.454 4.279h257.6c6.627 0 11.946 5.372 11.946 12v466.95c0 6.628-5.373 12-12 12H4.459"
      stroke="url(#a)"
      strokeWidth={8}
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={492.229}
        y1={4.279}
        x2={492.229}
        y2={475.229}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FB674B" />
        <stop offset={1} stopColor="#ED832F" />
      </linearGradient>
    </defs>
  </svg>
)
export default SVGComponent
