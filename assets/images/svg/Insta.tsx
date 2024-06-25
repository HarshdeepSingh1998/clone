import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill="#D2D2D2"
      d="M16.042 2.762a4.67 4.67 0 0 1 3.241 1.31 4.415 4.415 0 0 1 1.348 3.152v8.924a4.414 4.414 0 0 1-1.348 3.152 4.67 4.67 0 0 1-3.241 1.31H6.865a4.67 4.67 0 0 1-3.241-1.31 4.414 4.414 0 0 1-1.348-3.152V7.224a4.414 4.414 0 0 1 1.348-3.151 4.67 4.67 0 0 1 3.24-1.311h9.178Zm0-1.785H6.865C3.33.977.44 3.788.44 7.224v8.924c0 3.436 2.891 6.247 6.425 6.247h9.177c3.534 0 6.424-2.81 6.424-6.247V7.224c0-3.436-2.89-6.247-6.424-6.247Z"
    />
    <path
      fill="#D2D2D2"
      d="M17.419 7.225c-.273 0-.539-.079-.765-.226a1.347 1.347 0 0 1-.507-.6 1.304 1.304 0 0 1-.078-.774c.053-.26.184-.498.376-.686a1.413 1.413 0 0 1 1.5-.29c.252.102.467.273.618.493a1.313 1.313 0 0 1-.17 1.691 1.408 1.408 0 0 1-.974.391Zm-5.966.892c.727 0 1.436.21 2.04.601.604.393 1.074.95 1.352 1.603.278.652.35 1.37.209 2.062a3.54 3.54 0 0 1-1.005 1.828c-.513.5-1.167.84-1.88.977a3.768 3.768 0 0 1-2.12-.203A3.651 3.651 0 0 1 8.4 13.67a3.5 3.5 0 0 1-.619-1.983A3.525 3.525 0 0 1 8.86 9.164a3.729 3.729 0 0 1 2.594-1.047Zm0-1.785c-1.089 0-2.153.314-3.059.902a5.39 5.39 0 0 0-2.028 2.404 5.217 5.217 0 0 0-.313 3.093 5.31 5.31 0 0 0 1.507 2.742 5.557 5.557 0 0 0 2.82 1.465c1.067.207 2.174.101 3.18-.304a5.477 5.477 0 0 0 2.472-1.972 5.25 5.25 0 0 0 .928-2.975A5.28 5.28 0 0 0 15.347 7.9a5.587 5.587 0 0 0-3.894-1.568Z"
    />
  </svg>
)
export default SvgComponent
