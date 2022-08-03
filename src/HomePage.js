import React, { useContext} from "react";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import AdsCarousel from "./AdsCarousel";
import CategoryBadges from "./CategoryBadges";
import SneakerCarousel from "./SneakerCarousel";
import BrandsBadges from "./BrandsBadges";
import ApparelCarousel from "./ApparelCarousel";
import ElectronicsCarousel from "./ElectronicsCarousel";
import NavBar from "./NavBar";



function App() {

  const { theme } = useContext(ThemeContext);

  theme ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"

  return (
    <main>
      <LightDarkButton />
      <AdsCarousel />
      <CategoryBadges/>
      <SneakerCarousel/>
      <BrandsBadges/>
      <ApparelCarousel/>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <AdsCarousel />
      <ElectronicsCarousel/>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      Julien H.™

    </main> 
      // Product page
      // Search page
      // Profile page
      // Car page
      // Home Page
  );
}

export default App;