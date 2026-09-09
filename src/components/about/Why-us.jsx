
import React from 'react'
import delivery from "../../assets/about/delivery-bike.png";
import pizza from "../../assets/about/pizza.png";
import salad from "../../assets/about/salad.png";
import "./About.css";
function Whyus() {
  return (
    <div className='why'>
      <div className="why-us">
        <div className="one">
          <img src={pizza} alt="" />
          <h1>ORIGINAL</h1>
          <p>
            Porta semper lacus cursus, feugiat primis ultrice a ligula risus
            auctor an tempus feugiat dolor lacinia cubilia curae integer orci
            congue and metus integer primis in integer metus
          </p>
        </div>
        <div className="one">
          <img src={salad} alt="" />
          <h1>QUALTY FOODS</h1>
          <p>
            Porta semper lacus cursus, feugiat primis ultrice a ligula risus
            auctor an tempus feugiat dolor lacinia cubilia curae integer orci
            congue and metus integer primis in integer metus
          </p>
        </div>
        <div className="one">
          <img src={delivery} alt="" />
          <h1>FASTEST DELIVERY</h1>
          <p>
            Porta semper lacus cursus, feugiat primis ultrice a ligula risus
            auctor an tempus feugiat dolor lacinia cubilia curae integer orci
            congue and metus integer primis in integer metus
          </p>
        </div>
      </div>
    </div>
  )
}

export default Whyus
