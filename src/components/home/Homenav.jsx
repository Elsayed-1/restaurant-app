import React, { useState } from 'react'
import logo from"../../assets/logo/logo.png"
import "./Homenav.css"
import { useNavigate } from 'react-router-dom'
import {    FaShoppingBag  } from "react-icons/fa";
function Homenav({cardnum}) {



    const mynave=useNavigate()
  return (
    <div className='list'>
        <nav className='navbar'>
<div className='   container-lg'>
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
             
            <li className='icon'>{<FaShoppingBag/>}<span className='number-item'>{cardnum}</span></li>
        </ul>
    </div>
</div>
        </nav>
      
    </div>
  )
}

export default Homenav
