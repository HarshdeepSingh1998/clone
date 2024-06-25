import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={9}
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.239746 1.11656C0.239746 0.946824 0.307174 0.784038 0.427198 0.664014C0.547221 0.543991 0.710008 0.476562 0.879746 0.476562H11.1197C11.2895 0.476562 11.4523 0.543991 11.5723 0.664014C11.6923 0.784038 11.7597 0.946824 11.7597 1.11656C11.7597 1.2863 11.6923 1.44909 11.5723 1.56911C11.4523 1.68913 11.2895 1.75656 11.1197 1.75656H0.879746C0.710008 1.75656 0.547221 1.68913 0.427198 1.56911C0.307174 1.44909 0.239746 1.2863 0.239746 1.11656ZM2.15975 4.31656C2.15975 4.14682 2.22717 3.98404 2.3472 3.86401C2.46722 3.74399 2.63001 3.67656 2.79975 3.67656H9.19975C9.36948 3.67656 9.53227 3.74399 9.6523 3.86401C9.77232 3.98404 9.83975 4.14682 9.83975 4.31656C9.83975 4.4863 9.77232 4.64909 9.6523 4.76911C9.53227 4.88913 9.36948 4.95656 9.19975 4.95656H2.79975C2.63001 4.95656 2.46722 4.88913 2.3472 4.76911C2.22717 4.64909 2.15975 4.4863 2.15975 4.31656ZM4.07975 7.51656C4.07975 7.34682 4.14717 7.18404 4.2672 7.06401C4.38722 6.94399 4.55001 6.87656 4.71975 6.87656H7.27975C7.44948 6.87656 7.61227 6.94399 7.73229 7.06401C7.85232 7.18404 7.91975 7.34682 7.91975 7.51656C7.91975 7.6863 7.85232 7.84909 7.73229 7.96911C7.61227 8.08913 7.44948 8.15656 7.27975 8.15656H4.71975C4.55001 8.15656 4.38722 8.08913 4.2672 7.96911C4.14717 7.84909 4.07975 7.6863 4.07975 7.51656Z"
      fill="#64718C"
    />
  </svg>
)
export default SVGComponent
