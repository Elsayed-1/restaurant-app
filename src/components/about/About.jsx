import React from "react";
import "./About.css";
import boggerimg from "../../assets/about/about-2.png";
import Whyus from "./Why-us";



function About() {
  return (
    <div className="about ">
      <div className="textabout container-lg">
        <h1>THE BURGER TASTES BETTER WHEN YOU EAT IT WITH YOUR FAMILY</h1>
        <p>
          Porta semper lacus cursus, feugiat primis ultrice a ligula risus
          auctor an tempus feugiat dolor lacinia cubilia curae integer orci
          congue and metus integer primis in integer metus
        </p>
      </div>
      <div className="btnabout">
        <button>EXPLORE FULL MENU</button>
      </div>
      <div className="aboutimgs">
        <img src={boggerimg} alt="" />
    
      <Whyus/>

  </div>


    </div>
  );
}

export default About;
