import React from 'react'
import logo from"../../assets/logo/logo.png"
import "./Homenav.css"
import { useNavigate } from 'react-router-dom'
function Homenav() {
    const mynave=useNavigate()
  return (
    <div>
        <nav className='navbar'>
<div className='container-lg'>
    <div className="logo">
 <img src={logo} alt="" />
    </div>
    <div className="listitem">
        <ul>
            <li>home</li>
            <li>about</li>
            <li>our menu</li>
            <li>shop</li>
            <li onClick={()=>mynave("/favo")}>Favo</li>
            <li>contant</li>
            <li>cart</li>
        </ul>
    </div>
</div>
        </nav>
      
    </div>
  )
}

export default Homenav
