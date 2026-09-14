import React from "react";
import img1 from "../../assets/blog/review-author-1.jpg";
import img2 from "../../assets/blog/review-author-2.jpg";
import img3 from "../../assets/blog/review-author-3.jpg";
import img5 from "../../assets/blog/review-author-5.jpg";
import "./Slider.css";
function Slider() {
  return (
    <div className="container-lg  ">
      <div className="allslider">
 <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators  ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className=" imgpeople " alt="Review Author 1" />
             <div className="">
            
              <p>
Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque              </p>

                    <h5>BY AMELIE NEWLOVE</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img2} className=" imgpeople " alt="Review Author 2" />
             <div className="">
            
              <p>
Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque              </p>

                    <h5>BY AMELIE NEWLOVE</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img3} className=" imgpeople  " alt="Review Author 3" />
             <div className="">
            
              <p>
Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque              </p>

                    <h5>BY AMELIE NEWLOVE</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img5} className=" imgpeople  " alt="Review Author 5" />
            <div className="">
            
              <p>
Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque              </p>

                    <h5>BY AMELIE NEWLOVE</h5>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
     
    </div>
  );
}

export default Slider;
