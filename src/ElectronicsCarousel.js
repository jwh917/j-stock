import React, {useState, useEffect, useContext } from "react";
import { ThemeContext } from "./theme";
import ItemCard from "./ItemCard";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';




function ElectronicsCarousel({handleItemClick, togglePopUp}) {

  const { theme } = useContext(ThemeContext);

  const headerStyle = theme ? "white" : "black"

  const [electronics, setElectronics] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/electronics")
      .then((r) => r.json())
      .then((electronicsData) => setElectronics(electronicsData));
  }, []);


  const electronicsDisplayed = electronics.slice(0, 3).map((electronic) => {
    return(
      <ItemCard
      key={electronic.id}
      items={electronic}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp}  
      />
    )
  })

  

  return (
    <div className="itemsCarousel">
      <h2 style={{"color":headerStyle}}>Electronics Spotlight</h2>
      <br></br>

      <Stack direction="horizontal" gap={3}>

        {electronicsDisplayed}

       </Stack>

      <br></br>
      <br></br>
  </div>
  );
}
  


export default ElectronicsCarousel;
