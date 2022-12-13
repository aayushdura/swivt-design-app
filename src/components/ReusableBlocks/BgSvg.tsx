import { SVGProps } from 'react';
import React from 'react'
import discountRibbon from "../../LocalImages/DiscountRibbon.png"

const BgSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg preserveAspectRatio='none' viewBox='0 0 111 32' fill='none' {...props}>
    <path d={discountRibbon} fill='#FCBC08' />
  </svg>
  )
}

export default BgSvg