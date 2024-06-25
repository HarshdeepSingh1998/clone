import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#64718C"
      fillRule="evenodd"
      d="M12.495 1.645A.804.804 0 0 0 11.927.27a.806.806 0 0 0-.57.235L6.5 5.362 1.645.505a.806.806 0 1 0-1.14 1.14L5.363 6.5.506 11.355a.805.805 0 1 0 1.14 1.14L6.5 7.638l4.857 4.857a.806.806 0 0 0 1.138-1.14L7.64 6.5l4.856-4.855Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
