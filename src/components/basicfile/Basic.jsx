import React from 'react'
import Herosection from '../home/Herosection'
import About from '../About/About'
import Burger from '../Burgers/Burger'
import Freemeal from '../freemeal/Freemeal'
import Promotion from '../promotion/Promotion'
import Parallax from '../parallax/Parallax'
import Slider from '../slider/Slider'
import Footer from '../footer/Footer'

function Basic({ addtocart,toggelfavo,cardnum,setCartnum,data,setIsfavo}) {
  return (
    <div>
      <Herosection cardnum={cardnum}/>
   <About/>
   <Burger toggelfavo={toggelfavo} addtocart={addtocart}  setCartnum={setCartnum} data={data} setIsfavo={setIsfavo}/>
   <Freemeal/>
   <Parallax/>
   <Promotion/>
   <Slider/>
   <Footer/>
    </div>
  )
}

export default Basic
 