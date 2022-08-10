import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchContainer from "./SearchContainer";
import ItemPopUp from "./ItemPopUp";



function SearchPage() {

  const [catorgey, setCatorgey] = useState('All');


  const [sneakers, setSneakers] = useState([])
  const [apparel, setApparel] = useState([])
  const [electronics, setElectronics] = useState([])

  
  const [isOpen, setIsOpen] = useState(false)
  const [itemDisplayed, setItemDisplayed] = useState({})

  const [searchInput, setSearchInput] = useState("")


  const [sortHighLow, setSortHighLow] = useState(false)
  const [sortLowHigh, setSortLowHigh] = useState(false)




  useEffect(() => {
    fetch("http://localhost:3000/sneakers")
      .then((r) => r.json())
      .then((sneakersData) => setSneakers(sneakersData));
  }, []);


  useEffect(() => {
    fetch("http://localhost:3000/apparel")
      .then((r) => r.json())
      .then((apparelData) => setApparel(apparelData));
  }, []);



  useEffect(() => {
    fetch("http://localhost:3000/electronics")
      .then((r) => r.json())
      .then((electronicsData) => setElectronics(electronicsData));
  }, []);

  const allItems = [...sneakers, ...apparel, ...electronics]


  function togglePopUp(){
    setIsOpen(!isOpen)
  }

  function handleItemClick(item){
    setItemDisplayed(item)

  }

  function itemSearch(event){
    setSearchInput(event.target.value)
  }



  function handleCatorgeyChange(selectCatorgey){
    setCatorgey(selectCatorgey)
  }


  function sortHandleHighLow(){
    setSortHighLow((prevState) => !prevState)
    setSortLowHigh(false)
  }

  function sortHandleLowHigh(){
    setSortLowHigh((prevState) => !prevState) 
    setSortHighLow(false)
  }

  function helpSort(sortLowHigh, sortHighLow, plant1, plant2){
    if(sortLowHigh === true){
      return plant1.price - plant2.price
    }
    if((sortHighLow === true)){
      return plant2.price - plant1.price
    }
  }



  return (
    <main>
      <SearchBar 
      handleCatorgeyChange={handleCatorgeyChange} 
      itemSearch={itemSearch} 
      sortHandleHighLow={sortHandleHighLow} 
      sortHandleLowHigh={sortHandleLowHigh} 
      sortHighLow={sortHighLow} 
      sortLowHigh={sortLowHigh}
      />

      <SearchContainer 
      catorgey={catorgey} 
      sneakers={sneakers} 
      apparel={apparel} 
      electronics={electronics} 
      allItems={allItems} 
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp} 
      searchInput={searchInput} 
      helpSort={helpSort} 
      sortHighLow={sortHighLow} 
      sortLowHigh={sortLowHigh}
      />
     


      {isOpen && <ItemPopUp
        togglePopUp={togglePopUp}
        isOpen={isOpen}
        itemDisplayed={itemDisplayed}
      />}

    </main>
  );
}

export default SearchPage;