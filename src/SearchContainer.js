import React from "react";
import './App.css';
import ItemCard from "./ItemCard";


function SearchContainer({catorgey, sneakers, apparel, electronics, allItems, handleItemClick, togglePopUp}) {
  

  const allItemsDisplayed = allItems.map((item, index) => {
    return(
      <ItemCard
      key={index}
      items={item}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp} 
      />
    )
  })

  const allSneakersDisplayed = sneakers.map((sneaker, index) => {
    return(
      <ItemCard
      key={index}
      items={sneaker}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp} 
      />
    )
  })

  const allApparelDisplayed = apparel.map((item, index) => {
    return(
      <ItemCard
      key={index}
      items={item}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp} 
      />
    )
  })

  const allElectronicsDisplayed = electronics.map((electronic, index) => {
    return(
      <ItemCard
      key={index}
      items={electronic}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp} 
      />
    )
  })

  function displayItems(){
    if(catorgey === "All"){
      return allItemsDisplayed
    }

    if(catorgey === "Sneakers"){
      return allSneakersDisplayed
    }

    if(catorgey === "Apparel"){
      return allApparelDisplayed
    }

    if(catorgey === "Electronics"){
      return allElectronicsDisplayed
    }

  }


  return (

    <div className="searchContainer">

      {displayItems()}

    </div>

    
  )
}

export default SearchContainer;