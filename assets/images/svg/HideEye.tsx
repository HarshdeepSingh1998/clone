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
      fill="#6C6C6C"
      d="M12 14.367a2.666 2.666 0 1 0 0-5.333 2.666 2.666 0 0 0 0 5.333Z"
    />
    <path stroke="#6C6C6C" strokeLinecap="round" d="M20 4.207 4.707 19.5" />
    <path
      fill="#6C6C6C"
      fillRule="evenodd"
      d="M17.31 7.69C16.055 6.599 14.318 5.7 12 5.7c-5 0-7.295 4.178-7.88 5.454a1.313 1.313 0 0 0 0 1.094c.41.895 1.664 3.22 4.105 4.527l1.672-1.672a3.992 3.992 0 0 1-1.822-2.621 4 4 0 0 1 7.326-2.883L17.31 7.69Zm.718.696-2.191 2.191a4 4 0 0 1-4.962 4.962l-1.674 1.674c.82.303 1.75.487 2.799.487 5 0 7.294-4.178 7.88-5.454a1.312 1.312 0 0 0 0-1.093v.001a10.809 10.809 0 0 0-1.852-2.768Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
