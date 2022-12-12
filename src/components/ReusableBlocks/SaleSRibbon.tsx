import React from 'react'
import BgSvg from './BgSvg'
import classes from './SaleSRibbon.module.scss';

const SaleSRibbon:React.FC<{discount:number}> = ({discount}) => {
  return (
    <>
      <div className={classes.rectangle161}>
        <BgSvg className={classes.rectangle161__icon} />
      </div>
      <div className={classes._10Off}>{`${discount}`} % off</div>
    </>
  )
}

export default SaleSRibbon