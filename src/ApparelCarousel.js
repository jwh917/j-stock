import React, {useState, useEffect, useContext } from "react";
import { ThemeContext } from "./theme";
import ItemCard from "./ItemCard";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
// import Carousel from 'react-scrolling-carousel';
// import ReactSwipe from 'swipe-js-iso';

import Stack from 'react-bootstrap/Stack';


function ApparelCarousel() {

  const { theme } = useContext(ThemeContext);

  const headerStyle = theme ? "white" : "black"


  const [apparel, setApparel] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/apparel")
      .then((r) => r.json())
      .then((apparelData) => setApparel(apparelData));
  }, []);

    


  const apparelDisplayed = apparel.map((apparelItem) => {
    return(
      <ItemCard
      key={apparelItem.id}
      items={apparelItem} 
      />
    )
  })

  

  return (
    <div className="sneakerCarousel">
      <h2 style={{"color":headerStyle}}>Freatured Apparel</h2>
      <br></br>

      <Stack direction="horizontal" gap={3}>

        {apparelDisplayed}

       </Stack>

      {/* <Carousel/> */}


  </div>
  );
}
  


export default ApparelCarousel;
