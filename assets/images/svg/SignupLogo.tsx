import * as React from 'react'
const SvgComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#83BF6E"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-2.058-5.356L11 13.586l-2.793-2.793a1 1 0 0 0-1.414 1.414L9.586 15a2 2 0 0 0 2.828 0l6.688-6.687A7.967 7.967 0 0 1 20 12Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
