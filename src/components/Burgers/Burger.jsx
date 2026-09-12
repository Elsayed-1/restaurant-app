import React, { useState } from "react";
import "./Burger.css";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

function renderstars(rate) {












  const stars = [];
  for (let i = 1; i < rate; i++) {
    if (rate >= 1) {
      stars.push(<FaStar key={i} className="star-icon" />);
    } else if (rate >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="star-icon" />);
    } else {
      stars.push(<FaRegStar key={i} className="star-icon empty" />);
    }
  }
  return stars;
}

function Burgeritem({toggelfavo, item, setIsfavo,setCartnum }) {

///////////////
function handelnumberitem() {
    setCartnum((prevCount) => prevCount + 1);
  }



  const [islike, setIslike] = useState(false);
function handelclick(item){
setIslike(!islike)
toggelfavo(item)
console.log(item)
}
  return (
    <div key={item.id} className="oneitem">
      <div className="img">
        <img src={item.image} alt="" />
      </div>
      <div className="icon">
        <div className="rating">{renderstars(item.rating)}</div>
        <div
          className="favorite"
          onClick={() =>handelclick(item)
           }
        >
          {islike ? (
            <FaHeart className="heart" color="#e3000e" size={22} />
          ) : (
            <FaRegHeart className="heart" color="#757575" size={22} />
          )}
        </div>{" "}
      </div>
      <div className="title">
        <h3>{item.title}</h3>
        <p>{item.paragraph}</p>
      </div>
      <div className="price">
        <p>{item.price}</p>
        <button onClick={()=>{handelnumberitem()}}>Add to cart</button>
      </div>
    </div>
  );
}

function Burger({ toggelfavo, data, setIsfavo,setCartnum}) {
  return (
    <div className="burger container-lg">
      <div className="head">
        <h1>OUR CRAZY BURGERS</h1>
        <p>
          Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
          primis libero tempus, blandit a cursus varius magna
        </p>
      </div>
      <div className="body">
        {data.map((eve) => (
          <Burgeritem toggelfavo={toggelfavo}     setCartnum={setCartnum} key={eve.id} item={eve} setIsfavo={setIsfavo} />
        ))}
      </div>
    </div>
  );
}

export default Burger;
