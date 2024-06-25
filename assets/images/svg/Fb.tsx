import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill="#D2D2D2"
      fillRule="evenodd"
      d="M23.227 11.751C23.227 5.803 18.131.98 11.847.98 5.562.98.467 5.803.467 11.751c0 5.376 4.16 9.833 9.602 10.641v-7.526h-2.89V11.75h2.89V9.378c0-2.7 1.699-4.191 4.298-4.191 1.245 0 2.548.21 2.548.21v2.651h-1.436c-1.413 0-1.855.83-1.855 1.683v2.02h3.156l-.504 3.115h-2.651v7.527c5.441-.808 9.602-5.264 9.602-10.642Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
