import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={32}
    fill="none"
    {...props}
  >
    <rect
      width={16}
      height={32}
      fill="
#ED832F"
      rx={4}
    />
  </svg>
)
export default SvgComponent
