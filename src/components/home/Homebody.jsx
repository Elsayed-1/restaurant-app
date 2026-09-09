import React from "react";
import "./Homebody.css";
import heroimg from "../../assets/hero/hero-2.png";
import heroimgprice from "../../assets/hero/price-badge-yellow.png";
function Homebody() {
  return (
    <div className="homebody container-lg">
      <div className="imghero">
        <img src={heroimg} alt="" />
        <img className="price" src={heroimgprice} alt="" />
  <div className="textprice">
    <h1>only</h1>
    <h1>$199</h1>
  </div>
      </div>
      <div className="texthero">
        <div className="text">
            <h1>New</h1>
        <h1> Burger</h1>
        <h3>With Onion</h3>
        <p>Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat</p>
        </div>
        <div className="btn">
            <button>order now</button>
        </div>
        
      </div>
    </div>
  );
}

export default Homebody;
