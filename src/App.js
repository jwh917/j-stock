
import React, { useContext} from "react";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import AdsCarousel from "./AdsCarousel";


function App() {

  const { theme } = useContext(ThemeContext);

  theme ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"

  return (
    <main>
      <LightDarkButton />
      <AdsCarousel />

    </main> 
  );
}

export default App;

