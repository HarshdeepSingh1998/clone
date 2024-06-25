import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className="fillSvgClass"
    {...props}
  >
    <path
      // fill="#6F767E"
      fillRule="evenodd"
      d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
    <path
      // fill="#6F767E"
      fillRule="evenodd"
      d="M18.559 19.549A9.976 9.976 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.977 9.977 0 0 0 3.441 7.549A9.961 9.961 0 0 0 12 22a9.96 9.96 0 0 0 6.559-2.451Zm-6.301.447A8.181 8.181 0 0 1 12 20h-.026a7.957 7.957 0 0 1-3.938-1.05A4.993 4.993 0 0 1 12 17c1.612 0 3.048.763 3.963 1.95a7.957 7.957 0 0 1-3.705 1.046Zm5.304-2.246A6.988 6.988 0 0 0 12 15a6.988 6.988 0 0 0-5.562 2.75 8 8 0 1 1 11.125 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
