import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.41058 4.41073C4.73602 4.0853 5.26366 4.0853 5.58909 4.41073L9.99984 8.82148L14.4106 4.41073C14.736 4.0853 15.2637 4.0853 15.5891 4.41073C15.9145 4.73617 15.9145 5.26381 15.5891 5.58925L11.1783 9.99999L15.5891 14.4107C15.9145 14.7362 15.9145 15.2638 15.5891 15.5892C15.2637 15.9147 14.736 15.9147 14.4106 15.5892L9.99984 11.1785L5.58909 15.5892C5.26366 15.9147 4.73602 15.9147 4.41058 15.5892C4.08514 15.2638 4.08514 14.7362 4.41058 14.4107L8.82133 9.99999L4.41058 5.58925C4.08514 5.26381 4.08514 4.73617 4.41058 4.41073Z"
      fill="white"
    />
  </svg>
)
export default SVGComponent
