import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.5 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12.495 1.5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1ZM12.495 19.5a1 1 0 0 1 1 1v.997a1 1 0 0 1-2 0V20.5a1 1 0 0 1 1-1ZM1.997 11.998a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM19.997 11.998a1 1 0 0 1 1-1h.997a1 1 0 1 1 0 2h-.997a1 1 0 0 1-1-1ZM5.072 19.422a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0ZM17.8 6.694a1 1 0 0 1 0-1.414l.705-.705a1 1 0 1 1 1.414 1.414l-.705.705a1 1 0 0 1-1.414 0ZM5.072 4.575a1 1 0 0 1 1.414 0l.707.707A1 1 0 1 1 5.78 6.696l-.707-.707a1 1 0 0 1 0-1.414ZM17.8 17.303a1 1 0 0 1 1.414 0l.705.705a1 1 0 1 1-1.414 1.414l-.705-.705a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
