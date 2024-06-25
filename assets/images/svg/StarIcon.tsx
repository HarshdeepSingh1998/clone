import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#235AE8"
      d="m22.042 10.5-2.338-2.674.326-3.536-3.46-.786L14.76.437l-3.258 1.4-3.259-1.4-1.81 3.058-3.46.776.325 3.546L.96 10.5l2.338 2.674-.326 3.546 3.46.785 1.811 3.058 3.259-1.41 3.258 1.4 1.811-3.057 3.46-.786-.326-3.536 2.338-2.674ZM9.67 15.023l-3.641-3.65 1.418-1.42 2.223 2.234 5.607-5.626 1.418 1.419-7.025 7.043Z"
    />
  </svg>
)
export default SvgComponent
