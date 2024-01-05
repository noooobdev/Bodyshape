import * as React from "react"
import { SVGProps } from "react"
const RightLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#FF921B"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.25.75v18.5"
    />
    <path
      stroke="#FF921B"
      strokeLinecap="round"
      strokeWidth={2}
      d="M24.5 2v16"
    />
    <path
      stroke="#FF921B"
      strokeLinecap="round"
      strokeWidth={2.5}
      d="M28.5 4v12"
    />
    <path stroke="#FF921B" strokeWidth={3} d="M20 10.5H0" />
  </svg>
)
export default RightLogo
