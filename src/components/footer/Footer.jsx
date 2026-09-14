import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube  } from 'react-icons/fa';
import bg from "../../assets/hero/hero-1.jpg"
import "./Footer.css"
function Footer() {
  return (
    <div className='container-lg'>
      <div className="footer"
      style={{backgroundImage:`url(${bg})`, }}
      >
        <div className="footersec">
            <h5>LOCATION</h5>
            <p>5505 Waterford District</p>
            <p>Dr, Miami, FL 33126 United States</p>
        </div>
        <div className="footersec">
            <h5>WORKING HOURS</h5>
            <p>Mon-Fri: 9:00AM - 10:00PM</p>
            <p>Saturday: 10:00AM - 8:30PM</p>
            <p>Sunday: 12:00PM - 5:00PM</p>
        </div>
        <div className="footersec">
            <h5>ORDER NOW</h5>
            <p>Quaerat neque purus ipsum</p>
            <p>01017421272</p>
             
        </div>
        <div className="footersec">
            <h5>FOLLOW US</h5>
            <p>Quaerat neque purus ipsum</p>
            <div className="icon">
                <a href="https://www.linkedin.com/in/el-sayed-samy-b10671352/" target="_blank" rel="noreferrer" className="text-dark">
        <FaLinkedin color='white' />
      </a>

      
      <a href="https://github.com/Elsayed-1" target="_blank" rel="noreferrer" className="text-dark">
        <FaGithub color='white' />
      </a>

       
      <a href="https://www.youtube.com/@code_seka" target="_blank" rel="noreferrer" className="text-dark">
        <FaYoutube  color='white'/>
      </a>
            </div>
            
             
        </div>
      </div>
    </div>
  )
}

export default Footer
