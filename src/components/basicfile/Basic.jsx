import React from 'react'
import Herosection from '../home/Herosection'
import About from '../About/About'
import Burger from '../Burgers/Burger'

function Basic({toggelfavo,cardnum,setCartnum,data,setIsfavo}) {
  return (
    <div>
      <Herosection cardnum={cardnum}/>
   <About/>
   <Burger toggelfavo={toggelfavo}   setCartnum={setCartnum} data={data} setIsfavo={setIsfavo}/>
    </div>
  )
}

export default Basic
 