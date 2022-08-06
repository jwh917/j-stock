import React from "react";
import './App.css';
import ItemCard from "./ItemCard";


function SearchContainer({catorgey, sneakers, apparel, electronics, allItems, handleItemClick, togglePopUp}) {

  // console.log(sneakers, apparel, electronics, allItems)
  // console.log(catorgey)
  
  

  const itemsDisplayed = allItems.map((item, index) => {
    return(
      <ItemCard
      key={index}
      items={item}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp} 
      />
    )
  })


  return (

    <div className="searchContainer">

      {itemsDisplayed}

    </div>

    
  )
}

export default SearchContainer;