import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';



function AdsCarousel() {
  

  return (
    <div className="adsCarousel">

    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://static01.nyt.com/images/2021/05/27/fashion/24SNEAKERCOLORS-sacai-SUB/24SNEAKERCOLORS-sacai-SUB-superJumbo.jpg"
        alt="First slide"
        width="460" height="345"
      />
      <Carousel.Caption>
        <h3>NIKE</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://blackeoejournal.com/wp-content/uploads/2017/01/adidas-originals-pharrell-williams-hu-nmd-292-1024x683.jpg"
        alt="Second slide"
        width="460" height="345"
      />

      <Carousel.Caption>
        <h3>ADIDAS</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/169562109620915.60415e365681a.png"
        alt="Third slide"
        width="460" height="345"
      />

      <Carousel.Caption>
        <h3>JORDAN</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </div>
  );
}
  


export default AdsCarousel;