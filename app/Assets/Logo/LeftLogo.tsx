import * as React from "react"
import { SVGProps } from "react"
const LeftLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#FF921B"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 1v20"
    />
    <path stroke="#FF921B" strokeLinecap="round" strokeWidth={2} d="M5 3v16" />
    <path
      stroke="#FF921B"
      strokeLinecap="round"
      strokeWidth={2.5}
      d="M1.25 5v12"
    />
    <path stroke="#FF921B" strokeWidth={3} d="M9 10.5h20" />
  </svg>
)
export default LeftLogo
