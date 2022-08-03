import React, { useContext} from "react";
import { ThemeContext } from "./theme";
import { Route, Switch } from "react-router-dom";


import HomePage from "./HomePage";
// import ItemPopUp from "./ItemPopUp";
import MyCartPage from "./MyCartPage";
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";

import NavBar from "./NavBar";



function App() {

  const { theme } = useContext(ThemeContext);

  theme ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"

  return (
    <main>
      <div>
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/cart">
          <MyCartPage />
        </Route>
        
                {/*  it should be sneakers/ then sneakers/1 | same for apparel and electronics*/}
        {/* <Route path="/item">
          <ItemPage />
        </Route> */}

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      </div>
      {/* <AdsCarousel />
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

      Julien H.™ */}
      <NavBar/>

    </main> 
      // Product page
      // Search page
      // Profile page
      // Car page
      // Home Page
  );
}

export default App;

