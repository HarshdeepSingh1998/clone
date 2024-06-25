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
      fillRule="evenodd"
      d="m22.16 7.184-2.927-3.966A3 3 0 0 0 16.819 2H7.18a3 3 0 0 0-2.414 1.218L1.84 7.184a3 3 0 0 0 .033 3.607L9.62 20.895a3 3 0 0 0 4.762 0l7.746-10.104a3 3 0 0 0 .033-3.607ZM3.724 8l2.652-3.594A1 1 0 0 1 7.181 4h9.638a1 1 0 0 1 .805.406L20.276 8H3.724Zm.063 2 7.42 9.678a1 1 0 0 0 1.587 0L20.214 10H3.786Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
