import React from 'react'
import "./favo.css"
function Favorite({isfavo}) {
 

 if(!isfavo||isfavo.length===0){
  return <h2>لا يوجد عناصر في المفضلة حالياً</h2>
 }
  return (
    <div className='allpagefavo'>
       <h1 className='head-favo'>favo foods</h1>
       <div className="fav-container">
        {isfavo.map((item) => (
          <div key={item.id} className="fav-card">
            <img className='imgfavo' src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.paragraph}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorite
