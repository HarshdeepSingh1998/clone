import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#D2D2D2"
      d="M21.474 2.138c-.797.35-1.64.58-2.503.684A4.35 4.35 0 0 0 20.889.426a8.7 8.7 0 0 1-2.77 1.05A4.389 4.389 0 0 0 16.669.46a4.352 4.352 0 0 0-1.731-.356c-2.41 0-4.359 1.94-4.359 4.331-.001.333.036.665.113.988a12.33 12.33 0 0 1-4.966-1.306A12.446 12.446 0 0 1 1.705.895a4.31 4.31 0 0 0-.593 2.177c0 1.502.776 2.83 1.948 3.607a4.283 4.283 0 0 1-1.982-.54v.053c0 2.1 1.505 3.849 3.497 4.246-.375.101-.761.152-1.149.152-.275.001-.55-.026-.819-.08a4.362 4.362 0 0 0 4.075 3.008 8.78 8.78 0 0 1-6.455 1.793 12.249 12.249 0 0 0 6.672 1.958c8.028 0 12.414-6.602 12.414-12.329 0-.187-.005-.375-.014-.558a8.83 8.83 0 0 0 2.175-2.244Z"
    />
  </svg>
)
export default SvgComponent
