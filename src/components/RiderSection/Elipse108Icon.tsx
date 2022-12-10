import React from 'react';
import { memo, SVGProps } from 'react';

const Ellipse180Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 370 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse opacity={0.27} cx={185} cy={6} rx={185} ry={6} fill='#1D262A' />
  </svg>
);

const Memo = memo(Ellipse180Icon);
export { Memo as Ellipse180Icon };
