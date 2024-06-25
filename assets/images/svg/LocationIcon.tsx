import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={10}
    viewBox="0 0 8 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 0C1.9325 0 0.25 1.69417 0.25 3.77708C0.25 6.73667 3.6475 9.7925 3.79208 9.92083C3.84923 9.97199 3.92322 10.0003 3.99992 10.0004C4.07662 10.0005 4.15067 9.97229 4.20792 9.92125C4.3525 9.7925 7.75 6.73667 7.75 3.77708C7.75 1.69417 6.0675 0 4 0ZM4 5.83333C2.85125 5.83333 1.91667 4.89875 1.91667 3.75C1.91667 2.60125 2.85125 1.66667 4 1.66667C5.14875 1.66667 6.08333 2.60125 6.08333 3.75C6.08333 4.89875 5.14875 5.83333 4 5.83333Z"
      fill="#64718C"
    />
  </svg>
)
export default SVGComponent
