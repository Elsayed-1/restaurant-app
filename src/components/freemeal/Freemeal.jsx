import React from 'react'
import meal1 from "../../assets/menu/ads-1.jpg"
import meal2 from "../../assets/menu/ads-2.jpg"
import "./Free.css"
function Freemeal() {
  return (
    <div className="container-lg">

    
    <div className=' freemeal'>
      <div className="freemeal1">
        <div className="imgmeal">
            <img src={meal1} alt="" />
        </div>
        
         <div className="imgtext">
        <h3>get your free</h3>
        <h2>cheese fire</h2>
        <div className="btn-text">
              <button>Learn more</button>
        </div>
      
      </div>
      </div>
      <div className="freemeal2">
        <div className="imgmeal">
            <img src={meal2} alt="" />
        </div>
        
         <div className="imgtext">
        <h3>get your free</h3>
        <h2>cheese fire</h2>
        <div className="btn-text">
              <button>Learn more</button>
        </div>
      
      </div>
      </div>
     
    </div>
    </div>
  )
}

export default Freemeal
