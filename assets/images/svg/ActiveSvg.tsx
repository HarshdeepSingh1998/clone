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
      d="M9.58333 10.2031C12.1146 10.2031 14.1667 8.15109 14.1667 5.61979C14.1667 3.08848 12.1146 1.03645 9.58333 1.03645C7.05203 1.03645 5 3.08848 5 5.61979C5 8.15109 7.05203 10.2031 9.58333 10.2031Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7707 18.13C9.87228 17.1677 9.3733 15.8998 9.37484 14.5833C9.37484 13.1808 9.93067 11.9067 10.834 10.97C10.4257 10.9383 10.0082 10.9217 9.58317 10.9217C6.81484 10.9217 4.36401 11.6142 2.84234 12.6517C1.68151 13.4433 1.04151 14.4492 1.04151 15.505V16.7133C1.04118 16.8995 1.0776 17.0838 1.14867 17.2559C1.21975 17.4279 1.32409 17.5842 1.4557 17.7158C1.58732 17.8474 1.74362 17.9517 1.91565 18.0228C2.08768 18.0939 2.27204 18.1303 2.45817 18.13H10.7707Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.583 10.2082C12.168 10.2082 10.208 12.1682 10.208 14.5832C10.208 16.9982 12.168 18.9582 14.583 18.9582C16.998 18.9582 18.958 16.9982 18.958 14.5832C18.958 12.1682 16.998 10.2082 14.583 10.2082ZM12.5697 15.3115L13.8197 16.1449C13.9399 16.2249 14.0841 16.2608 14.2278 16.2465C14.3716 16.2323 14.5059 16.1687 14.608 16.0665L16.6913 13.9832C16.8085 13.8661 16.8743 13.7072 16.8743 13.5415C16.8743 13.3759 16.8085 13.217 16.6913 13.0999C16.5742 12.9827 16.4153 12.9169 16.2497 12.9169C16.084 12.9169 15.9251 12.9827 15.808 13.0999L14.0863 14.8207L13.263 14.2715C13.1251 14.1817 12.9573 14.15 12.7961 14.1832C12.6349 14.2163 12.4933 14.3117 12.402 14.4486C12.3107 14.5856 12.2771 14.753 12.3085 14.9145C12.3399 15.0761 12.4338 15.2187 12.5697 15.3115Z"
      fill="white"
    />
  </svg>
)
export default SVGComponent
