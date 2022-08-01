import React, { useContext} from "react";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import AdsCarousel from "./AdsCarousel";
import CategoryBadges from "./CategoryBadges";
import SneakerCarousel from "./SneakerCarousel";
import BrandsBadges from "./BrandsBadges";



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



    </main> 
  );
}

export default App;

