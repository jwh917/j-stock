import React, {useState, useEffect, useContext } from "react";
import { ThemeContext } from "./theme";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
// import Carousel from 'react-scrolling-carousel';
// import ReactSwipe from 'swipe-js-iso';

import Stack from 'react-bootstrap/Stack';








function SneakerCarousel() {

  const { theme } = useContext(ThemeContext);

  const headerStyle = theme ? "white" : "black"


  const [sneakers, setSneakers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/sneakers")
      .then((r) => r.json())
      .then((sneakersData) => setSneakers(sneakersData));
  }, []);

    



  

  return (
    <div className="sneakerCarousel">
      <h2 style={{"color":headerStyle}}>Trending Sneakers</h2>
      <br></br>
      <Stack direction="horizontal" gap={3}>
        
       </Stack>
       <br></br>
       <br></br>


      {/* <Carousel/> */}


  </div>
  );
}
  


export default SneakerCarousel;
