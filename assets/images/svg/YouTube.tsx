import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#D2D2D2"
      d="M25.561 4.382c0-2.227-1.663-4.018-3.719-4.018a185.663 185.663 0 0 0-8.526-.177h-.904c-2.895 0-5.74.049-8.524.178-2.05 0-3.714 1.8-3.714 4.027a72.464 72.464 0 0 0-.176 5.284 75.43 75.43 0 0 0 .17 5.29c0 2.226 1.664 4.031 3.715 4.031 2.925.134 5.925.194 8.976.189 3.056.01 6.048-.053 8.976-.189 2.056 0 3.72-1.805 3.72-4.032.12-1.766.175-3.528.17-5.294a70.826 70.826 0 0 0-.164-5.29ZM10.401 14.53V4.807l7.288 4.859L10.4 14.53Z"
    />
  </svg>
)
export default SvgComponent
