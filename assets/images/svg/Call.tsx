import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={71}
    fill="none"
    {...props}
  >
    <circle cx={35} cy={35.322} r={35} fill="#592424" fillOpacity={0.35} />
    <path
      fill="#FB674B"
      d="m47.105 39.225-6.628-2.827a2.204 2.204 0 0 0-2.134.184l-3.548 2.36a10.811 10.811 0 0 1-4.974-4.946l2.346-3.59a2.248 2.248 0 0 0 .198-2.134l-2.841-6.628a2.304 2.304 0 0 0-2.36-1.357 7.942 7.942 0 0 0-6.911 7.858c0 11.221 9.13 20.35 20.351 20.35a7.942 7.942 0 0 0 7.858-6.91 2.303 2.303 0 0 0-1.357-2.36Z"
    />
  </svg>
)
export default SvgComponent
