import React from 'react'
import "./dropdown.css"
import { useNavigate } from 'react-router-dom'
function Dropdown() {

    const mynave=useNavigate()
  return (
    <div className='drop-list'>
      <ul>
                  <li>home</li>
                  <hr />
                  <li>about</li>
                  <hr />
                  <li>our menu</li>
                  <hr />
                  <li>shop</li>
                  <hr />
                  <li onClick={()=>mynave("/favo")}>Favo</li>
                  <hr />
                  <li>contant</li>
                    
              </ul>
    </div>
  )
}

export default Dropdown
