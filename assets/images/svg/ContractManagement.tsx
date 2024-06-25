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
      // fill="#64718C"
      d="M15.784 10.588a.785.785 0 0 0-.785-.785H6.92a.785.785 0 0 0 0 1.57h8.08a.785.785 0 0 0 .785-.785Zm-8.866 2.354a.785.785 0 1 0 0 1.569h4.908a.785.785 0 0 0 0-1.57H6.918Z"
    />
    <path
      // fill="#64718C"
      d="M8.762 20.473H6.138c-.865 0-1.569-.704-1.569-1.569V5.096c0-.865.704-1.57 1.57-1.57h9.645c.865 0 1.57.705 1.57 1.57V9.92a.785.785 0 0 0 1.568 0V5.096a3.142 3.142 0 0 0-3.138-3.138H6.138A3.142 3.142 0 0 0 3 5.096v13.808a3.142 3.142 0 0 0 3.138 3.138h2.624a.785.785 0 0 0 0-1.569Z"
    />
    <path
      // fill="#64718C"
      d="M20.312 13.317a2.356 2.356 0 0 0-3.328 0l-4.308 4.297a.785.785 0 0 0-.196.327l-.938 3.089a.784.784 0 0 0 .96.984l3.167-.877a.785.785 0 0 0 .345-.201l4.298-4.29a2.356 2.356 0 0 0 0-3.33Zm-5.261 6.362-1.593.442.466-1.535 2.907-2.9 1.11 1.11-2.89 2.883Zm4.152-4.144-.152.152-1.11-1.11.152-.15a.785.785 0 0 1 1.11 1.108Zm-4.204-8.87H6.92a.785.785 0 1 0 0 1.569h8.08a.785.785 0 1 0 0-1.57Z"
    />
  </svg>
)
export default SvgComponent
