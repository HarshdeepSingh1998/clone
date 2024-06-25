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
      d="M10.0034 1.66929C8.01912 1.66929 6.12306 2.3748 4.63329 3.62834L3.62857 2.62047C3.58697 2.57924 3.53712 2.54726 3.4823 2.52663C3.42748 2.50601 3.36892 2.4972 3.31046 2.50078C3.2628 2.50325 3.21592 2.5139 3.17188 2.53228C3.09508 2.56371 3.02945 2.6174 2.98343 2.68644C2.9374 2.75547 2.91308 2.83671 2.91361 2.91968V6.25196C2.91361 6.30683 2.92446 6.36115 2.94555 6.4118C2.96664 6.46244 2.99755 6.50841 3.03649 6.54706C3.07543 6.58571 3.12163 6.61627 3.17244 6.63697C3.22324 6.65768 3.27764 6.66813 3.33251 6.66771H6.66479C6.74698 6.66792 6.82738 6.64375 6.89584 6.59828C6.9643 6.55281 7.01775 6.48807 7.04943 6.41223C7.08111 6.3364 7.08961 6.25287 7.07384 6.17221C7.05808 6.09155 7.01876 6.01737 6.96085 5.95905L5.81125 4.80944C7.0118 3.83946 8.51157 3.31579 10.055 3.32767C11.5984 3.33956 13.0899 3.88626 14.2754 4.87462C15.4608 5.86298 16.2669 7.23183 16.5562 8.74792C16.8455 10.264 16.6002 11.8335 15.862 13.189C15.1238 14.5444 13.9384 15.6019 12.5078 16.1813C11.0772 16.7607 9.49003 16.8261 8.01664 16.3664C6.54326 15.9067 5.27487 14.9503 4.42763 13.6602C3.58039 12.3701 3.20672 10.8261 3.3703 9.29133C3.39237 9.07224 3.32696 8.8533 3.18832 8.68222C3.04968 8.51113 2.84906 8.40177 2.63014 8.37795C2.41056 8.35592 2.19118 8.42176 2.02001 8.56106C1.84884 8.70035 1.73981 8.90177 1.71676 9.12126C1.59656 10.2822 1.7211 11.4555 2.08235 12.5654C2.4436 13.6752 3.03353 14.697 3.81407 15.5648C4.59461 16.4326 5.54842 17.1271 6.61395 17.6035C7.67947 18.08 8.83305 18.3277 10.0002 18.3307C12.2089 18.3265 14.3259 17.4471 15.8874 15.885C17.4489 14.3229 18.3276 12.2056 18.3309 9.99685C18.3284 7.78872 17.4504 5.6717 15.8893 4.11002C14.3282 2.54834 12.2115 1.67262 10.0034 1.66929ZM9.99707 4.99842C9.77735 5.00008 9.56714 5.08831 9.41206 5.24398C9.25699 5.39965 9.16955 5.61019 9.16873 5.82992V9.9559C9.167 10.1013 9.20329 10.2446 9.274 10.3717C9.34471 10.4988 9.4474 10.6051 9.57188 10.6803L13.1782 12.8126C13.2727 12.8683 13.3772 12.9048 13.4858 12.9201C13.5945 12.9353 13.705 12.929 13.8112 12.9015C13.9174 12.874 14.0171 12.8259 14.1047 12.7598C14.1922 12.6938 14.2659 12.6111 14.3215 12.5165C14.4342 12.3261 14.4667 12.0986 14.4118 11.8842C14.3568 11.6698 14.219 11.486 14.0286 11.3732L10.8349 9.48346V5.82992C10.8345 5.72031 10.8125 5.61186 10.7701 5.51075C10.7278 5.40965 10.666 5.31787 10.5882 5.24065C10.5104 5.16344 10.4181 5.10231 10.3167 5.06075C10.2153 5.01919 10.1067 4.99801 9.99707 4.99842Z"
      fill="white"
    />
  </svg>
)
export default SVGComponent
