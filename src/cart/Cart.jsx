import React, { useState } from "react";
import "./Cart.css";
 import bgcart from "../assets/hero/hero-1.jpg"
import { useNavigate } from "react-router-dom";

function Cart({ cartitem,setCartitem }) {

  const nave=useNavigate()

  function isempty(){
     if(cartitem.length==0)
   return(<div style={{ backgroundImage: `url(${bgcart})` }} className="nocart">
           <h2>No   food added to cart</h2>
            <button onClick={()=>{
           nave("/")
         }} className="btn-favo">Go to home</button>
         </div>) 
 
  }


  function addone( id) {
     setCartitem((pre)=>{
      return pre.map((item)=>{
       return item.id ==id ? {...item,quantity:(item.quantity||1)+1} :item
      })
     })
  }
  function minusone(id ) {
      
   setCartitem((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

 function deleteitem(id){
  setCartitem((pre)=>pre.filter((item)=>item.id !==id))
 }
  return (
    <div className="container-lg">
      {isempty()}
      {cartitem.map((item) => {
        return (
          <div className="oneitem">
            <div className="img-oneitem">
              <img src={item.image} alt="" />
            </div>
            <div className="text-oneitem">
              <p>{item.title}</p>
              <p onClick={()=>{minusone(item.id )}} className="minus">-</p>
              <p>{item.quantity}</p>
              <p onClick={()=>{addone( item.id)}} className="plus">+</p>
              <p>{((item.price) * (item.quantity || 1)).toFixed(2)} $</p>
              <p onClick={()=>{deleteitem(item.id)}}>delete</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
