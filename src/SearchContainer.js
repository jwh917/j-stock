import React from "react";
import './App.css';
import ItemCard from "./ItemCard";


function SearchContainer({catorgey, sneakers, apparel, electronics, allItems, handleItemClick, togglePopUp, searchInput, helpSort, sortHighLow, sortLowHigh}) {

  
  const searchedItems = allItems.filter((item) => 
  item.name.toLowerCase().includes(searchInput.toLowerCase())).sort((item1, item2) => helpSort(sortLowHigh, sortHighLow, item1, item2))


  const searchedSneakers = sneakers.filter((item) => 
  item.name.toLowerCase().includes(searchInput.toLowerCase())).sort((item1, item2) => helpSort(sortLowHigh, sortHighLow, item1, item2))


  const searchedApparel = apparel.filter((item) => 
  item.name.toLowerCase().includes(searchInput.toLowerCase())).sort((item1, item2) => helpSort(sortLowHigh, sortHighLow, item1, item2))


  const searchedElectronics = electronics.filter((item) => 
  item.name.toLowerCase().includes(searchInput.toLowerCase())).sort((item1, item2) => helpSort(sortLowHigh, sortHighLow, item1, item2))



  const allItemsDisplayed = searchedItems.map((item, index) => {
    return(
      <ItemCard
      key={index}
      items={item}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp} 
      />
    )
  })


  const allSneakersDisplayed = searchedSneakers.map((sneaker, index) => {
    return(
      <ItemCard
      key={index}
      items={sneaker}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp} 
      />
    )
  })

  const allApparelDisplayed = searchedApparel.map((item, index) => {
    return(
      <ItemCard
      key={index}
      items={item}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp} 
      />
    )
  })

  const allElectronicsDisplayed = searchedElectronics.map((electronic, index) => {
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