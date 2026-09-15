 

/////img//////
import img1 from "./assets/menu/burger-11.jpg";
import img2 from "./assets/menu/burger-12.jpg";
import img3 from "./assets/menu/burger-13.jpg";
import img4 from "./assets/menu/burger-14.jpg";
import img5 from "./assets/menu/burger-15.jpg";
import img6 from "./assets/menu/burger-16.jpg";
import img7 from "./assets/menu/burger-17.jpg";
import img8 from "./assets/menu/burger-18.jpg";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Favorite from "./components/favo/Favorite";
import Basic from "./components/basicfile/Basic";
//////////////////
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Cart from "./cart/Cart";
const dataitem = [
  {
    id: "0001",
    image: img1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: img1,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: img1,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: img2,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: img3,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: img4,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: img5,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: img6,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
  {
    id: "0009",
    image: img7,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 2.0,
    price: 89.12,
  },
  {
    id: "00010",
    image: img8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
  {
    id: "00011",
    image: img5,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 2.0,
    price: 89.12,
  },
  {
    id: "00012",
    image: img3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 2.0,
    price: 89.12,
  },
  // Add more mock data objects as needed
];

function App() {
  const [isfavo, setIsfavo] = useState(() => {
    const savedFavo = localStorage.getItem("myFavorites");
    return savedFavo ? JSON.parse(savedFavo) : [];
  });

  useEffect(() => {
    localStorage.setItem("myFavorites", JSON.stringify(isfavo));
  }, [isfavo]);

  const toggelfavo = (item) => {
    setIsfavo((prev) => {
      const exists = prev.find((fav) => fav.id == item.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const [cardnum, setCartnum] = useState(0);

  const [cartitem, setCartitem] = useState(() => {
    const save = localStorage.getItem("cartitem");
    return save ? JSON.parse(save) : [];
  });
  useEffect(() => {
    (localStorage.setItem("cartitem", JSON.stringify(cartitem)));
  }, [cartitem]);

function addtocart(item){
setCartitem((prev)=>{
  const exists =prev.find((cart)=>cart.id == item.id)
  if(exists){
    return prev.map((x)=>{
      return x.id === item.id ?{...x,quantity:(x.quantity||1)+1}:x
    })
  }
  else{
    return[...prev,{ ...item, quantity: 1 }]
  }
})
}


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Basic
              toggelfavo={toggelfavo}
              addtocart={addtocart}
              cardnum={cardnum}
              setCartnum={setCartnum}
              data={dataitem}
              isfavo={isfavo}
              setIsfavo={setIsfavo}
              cartitem={cartitem}
            />
          }
        />
        <Route path="/favo" element={<Favorite isfavo={isfavo} />} />
        <Route  path="/itemaddedtocart" element={<Cart setCartitem={setCartitem} cartitem={cartitem} />} />
      </Routes>

      {console.log(isfavo)}
      {console.log(cartitem)}
    </>
  );
}

export default App;
