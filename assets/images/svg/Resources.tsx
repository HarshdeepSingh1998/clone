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
      stroke="#64718C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M4.5 8.203c0 2.234.978 4.237 2.528 5.61a5.027 5.027 0 0 1 1.69 3.765h6.563c0-1.44.613-2.812 1.69-3.766A7.469 7.469 0 0 0 19.5 8.203M14.344 20.484H9.656a.937.937 0 0 1-.937-.937v-1.969h6.562v1.969c0 .518-.42.937-.937.937ZM12.938 23.297h-1.876c-.776 0-1.406-.63-1.406-1.406v-1.407h4.688v1.407c0 .776-.63 1.406-1.406 1.406ZM19.5 8.203a7.5 7.5 0 0 0-15 0M21.89 8.203h1.407M21.422 4.219l1.218-.703M21.422 12.188l1.218.703M2.11 8.203H.702M2.578 4.219 1.36 3.516M2.578 12.188l-1.218.703"
    />
    <path
      stroke="#64718C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.75 8.203c0-.241-.025-.477-.069-.706l.964-.623-1.171-2.03-1.023.525a3.74 3.74 0 0 0-1.222-.705l-.057-1.148h-2.344l-.057 1.148a3.74 3.74 0 0 0-1.222.705l-1.023-.524-1.172 2.03.965.622a3.76 3.76 0 0 0-.07.706c0 .242.026.477.07.706l-.965.623 1.172 2.03 1.023-.524c.359.31.774.55 1.222.705l.057 1.148h2.344l.057-1.148a3.742 3.742 0 0 0 1.222-.706l1.022.525 1.172-2.03-.964-.623c.044-.229.069-.464.069-.706Z"
    />
    <path
      stroke="#64718C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.406 8.203a1.406 1.406 0 1 1-2.812 0 1.406 1.406 0 0 1 2.812 0Z"
    />
  </svg>
)
export default SvgComponent
