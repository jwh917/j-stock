import React, {useState} from "react";
import LightDarkButton from "./LightDarkButton";
import AdsCarousel from "./AdsCarousel";
import CategoryBadges from "./CategoryBadges";
import SneakerCarousel from "./SneakerCarousel";
import BrandsBadges from "./BrandsBadges";
import ApparelCarousel from "./ApparelCarousel";
import ElectronicsCarousel from "./ElectronicsCarousel";
import ItemPopUp from "./ItemPopUp";


function HomePage() {

  const [isOpen, setIsOpen] = useState(false)
  const [itemDisplayed, setItemDisplayed] = useState({})

  function togglePopUp(){
    setIsOpen(!isOpen)
  }

  function handleItemClick(item){
    setItemDisplayed(item)

  }

  return (
    <main>
      
      <LightDarkButton />
      <AdsCarousel />
      <CategoryBadges/>
      <SneakerCarousel handleItemClick={handleItemClick} togglePopUp={togglePopUp}/>
      <BrandsBadges/>
      <ApparelCarousel handleItemClick={handleItemClick} togglePopUp={togglePopUp}/>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <AdsCarousel />
      <ElectronicsCarousel handleItemClick={handleItemClick} togglePopUp={togglePopUp}/>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {isOpen && <ItemPopUp
        togglePopUp={togglePopUp}
        isOpen={isOpen}
        itemDisplayed={itemDisplayed}
      />}

      {/* Julien H.™ */}

    </main> 

  );
}

export default HomePage;