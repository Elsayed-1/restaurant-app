import React, { useState } from 'react'
import logo from"../../assets/logo/logo.png"
import "./Homenav.css"
import { useNavigate } from 'react-router-dom'
import {    FaShoppingBag  } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Dropdown from './dropdown/Dropdown';
function Homenav({cardnum,cartitem}) {

 const totalitemcart=cartitem.reduce((total,item)=>{
    return total+(item.quantite || 1)
 },0)
const[showdrop,setShowdrop]=useState(false)
 function toggeldropdown(){
    setShowdrop((prev)=>(!prev))
 }
    const mynave=useNavigate()
  return (
    <div className='list'>
        <nav className='navbar'>
 
    <div className="logo">
 <img src={logo} alt="" />
    </div>
    <div className="listitem">
        <ul>
            <li className='home'>home</li>
            <li className='about'>about</li>
            <li className='our-menu'>ourmenu</li>
            <li className='shop'>shop</li>
            <li onClick={()=>mynave("/favo")}>Favo</li>
            <li>contant</li>
             <li onClick={()=>toggeldropdown()} className='bar'><FaBars className="menu-icon" size={25} color="#333" cursor="pointer" /></li>
            <li onClick={()=>{
                mynave("/itemaddedtocart")
            }} className='icon-nav'>{<FaShoppingBag/>}<span className='number-item'>{totalitemcart}</span></li>
        </ul>
     
    </div>
    {showdrop? <Dropdown/>:""}
 
        </nav>
       { console.log(showdrop)}
    </div>
  )
}

export default Homenav
