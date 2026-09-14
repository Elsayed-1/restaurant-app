import React from 'react'
import Parallaximg from "../../assets/parallax/bg.jpg"
import "./Parallax.css"
function Parallax() {
  return (
    <div className="container-lg">
        <div className='parall' style={{ backgroundImage: `url(${Parallaximg})` }}>   
    </div>
    </div>
    
  )
}
export default Parallax
