import React from 'react'
import Homenav from './Homenav'
import "./Hero.css"
import Homebody from './Homebody'
 

function Herosection({cardnum}) {
  return (
    <div className='hero'>
      <Homenav cardnum={cardnum}/>
      <Homebody/>
      
    </div>
  )
}

export default Herosection
