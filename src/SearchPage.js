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



  return (
    <main>
      <SearchBar handleCatorgeyChange={handleCatorgeyChange} itemSearch={itemSearch}/>

      <SearchContainer catorgey={catorgey} sneakers={sneakers} apparel={apparel} electronics={electronics} allItems={allItems} handleItemClick={handleItemClick} togglePopUp={togglePopUp} searchInput={searchInput}/>
     

      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      {isOpen && <ItemPopUp
        togglePopUp={togglePopUp}
        isOpen={isOpen}
        itemDisplayed={itemDisplayed}
      />}

    </main>
  );
}

export default SearchPage;