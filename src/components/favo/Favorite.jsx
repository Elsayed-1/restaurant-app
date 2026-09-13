import React from "react";
import "./favo.css";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate   } from "react-router-dom";

function Favorite({ isfavo }) {

  const nave=useNavigate()

  if (!isfavo || isfavo.length === 0) {
    return <h2>لا يوجد عناصر في المفضلة حالياً</h2>;
  }
  return (
    <div className="allpagefavo">
      <h1 className="head-favo">favo foods</h1>
      <div className="fav-container">
        {isfavo.map((item) => (
          <div key={item.id} className="fav-card">
            <img className="imgfavo" src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.paragraph}</p>
            <p>${item.price}</p>
            <div className="heart-icon">
              {<FaHeart  color="#e3000e" size={30} />}
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{
        nave("/")
      }} className="btn-favo">Go to home</button>
    </div>
  );
}

export default Favorite;
