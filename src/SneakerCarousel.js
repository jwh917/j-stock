import React, {useState, useEffect, useContext } from "react";
import { ThemeContext } from "./theme";
import ItemCard from "./ItemCard";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';




function SneakerCarousel({handleItemClick, togglePopUp}) {

  const { theme } = useContext(ThemeContext);

  const headerStyle = theme ? "white" : "black"


  const [sneakers, setSneakers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/sneakers")
      .then((r) => r.json())
      .then((sneakersData) => setSneakers(sneakersData));
  }, []);

    
  const sneakersDisplayed = sneakers.slice(0, 3).map((sneaker) => {
    return(
      <ItemCard
      key={sneaker.id}
      items={sneaker}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp}
      />
    )
  })
  

  return (
    <div className="itemsCarousel">
      <h2 style={{"color":headerStyle}}>Trending Sneakers</h2>
      <br></br>
      <Stack direction="horizontal" gap={3}>
        {sneakersDisplayed}
      </Stack>
       <br></br>
       <br></br>


  </div>
  );
}
  


export default SneakerCarousel;
