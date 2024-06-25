import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <rect
      width={48}
      height={48}
      fill="
#040718"
      rx={24}
    />
    <path
      fill="#6F767E"
      fillRule="evenodd"
      d="M14 28.596c0-.38.155-.745.429-1.01l1.029-.994a2 2 0 0 0 .61-1.444l-.01-3.153A7.97 7.97 0 1 1 32 21.97v3.2a2 2 0 0 0 .586 1.415l1 1a1.414 1.414 0 0 1-1 2.414H28a4 4 0 0 1-8 0h-4.596A1.404 1.404 0 0 1 14 28.596ZM22 30a2 2 0 1 0 4 0h-4Zm8-4.828A4 4 0 0 0 31.172 28H16.878a4 4 0 0 0 1.19-2.858l-.01-3.153A5.97 5.97 0 1 1 30 21.97v3.2Z"
      clipRule="evenodd"
    />
    <rect width={12} height={12} x={25} y={11} fill="#FF6A55" rx={6} />
    <rect
      width={12}
      height={12}
      x={25}
      y={11}
      stroke="#FCFCFC"
      strokeWidth={2}
      rx={6}
    />
  </svg>
)
export default SvgComponent
