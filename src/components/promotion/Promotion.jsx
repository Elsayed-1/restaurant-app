import React from 'react'
import promotion from "../../assets/promotion/pro.png"
import "./Promotion.css"
import { FaCircle } from "react-icons/fa";
function Promotion() {
  return (
    <div className='container-lg'>

   
    <div className='pro'>
      <div className="proimg">
        <img src={promotion} alt="" />
      </div>
      <div className="protext">
      <h1>Nothing brings people together like a good burger</h1>  

<h6>Semper lacus cursus porta primis ligula risus tempus and
                sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                ipsum porta justo integer ultrice aligula lectus aenean magna
                and pulvinar purus at pretium gravida</h6>

<p><FaCircle size={10} color="black" /> Fringilla risus, luctus mauris orci auctor purus euismod
                    pretium purus pretium ligula rutrum tempor sapien</p>

  <p><FaCircle size={10} color="black" />  Quaerat sodales sapien euismod purus blandit</p>   
<p><FaCircle size={10} color="black" />  Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                    sodales sapien undo pretium a purus mauris</p>
               
      </div>
    </div>
     </div>
  )
}

export default Promotion
