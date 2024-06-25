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
      fillRule="evenodd"
      d="M8.066 6.026a7 7 0 1 0 9.725 9.725 11.004 11.004 0 0 1-9.725-9.725ZM19 13.816c.866 0 1.612.764 1.27 1.56A9 9 0 1 1 8.441 3.547C9.236 3.205 10 3.95 10 4.817a9 9 0 0 0 9 9Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
