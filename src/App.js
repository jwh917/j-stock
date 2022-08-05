import React, { useContext} from "react";
import { ThemeContext } from "./theme";
import {Switch, Route } from "react-router-dom";
// import { Routes ,Rouste } from 'react-router-dom';



import HomePage from "./HomePage";
import MyCartPage from "./MyCartPage";
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";

import NavBar from "./NavBar";



function App() {

  const { theme } = useContext(ThemeContext);

  theme ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"



  return (
    <main>
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
      
        <Route path="/">
          <HomePage />
        </Route>

      </Switch>

      Julien H.™
      <NavBar/>

    </main> 

  );
}

export default App;

