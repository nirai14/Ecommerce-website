import React from 'react'
import './Compare.css'
import Shade from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import ReactCompareImage from 'react-compare-image';


const Compare = () => {

  return (
  <div className='compare'>
<div className='left'>
    <span>Virtual Try-on</span>
    <span>Never buy the wrong shade again</span>
    <span>Try now!</span>
    
    <img src={Shade} alt="" />
</div>
<div className='right'>
    <div className='wrapper'></div>
<ReactCompareImage leftImage={Before} 
rightImage={After}/>
</div>
  </div>
  )
}

export default Compare
