import React from 'react'
import Homenav from './Homenav'
import "./Hero.css"
import Homebody from './Homebody'
 

function Herosection({cartitem, cardnum}) {
  return (
    <div className='hero'>
      <Homenav cartitem={cartitem} cardnum={cardnum}/>
      <Homebody/>
      
    </div>
  )
}

export default Herosection
