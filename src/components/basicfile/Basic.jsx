import React from 'react'
import Herosection from '../home/Herosection'
import About from '../About/About'
import Burger from '../Burgers/Burger'
import Freemeal from '../freemeal/Freemeal'
import Promotion from '../promotion/Promotion'

function Basic({toggelfavo,cardnum,setCartnum,data,setIsfavo}) {
  return (
    <div>
      <Herosection cardnum={cardnum}/>
   <About/>
   <Burger toggelfavo={toggelfavo}   setCartnum={setCartnum} data={data} setIsfavo={setIsfavo}/>
   <Freemeal/>
   <Promotion/>
    </div>
  )
}

export default Basic
 