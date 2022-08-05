import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function LightDarkButton() {

  const { theme, setTheme } = useContext(ThemeContext);

  
  function handleDarkModeClick() {
    setTheme((prevState) => !prevState);

  }


  return (
  <div>
    {theme ? 
      <Button type="button" className="btn btn-secondary" onClick={handleDarkModeClick} id="lightDark"><i className="bi bi-moon-fill" style={{ fontSize: 20}}></i></Button> 
        : 
      <Button type="button" className="btn btn-success" onClick={handleDarkModeClick} id="lightDark"><i className="bi bi-brightness-high-fill" style={{ fontSize: 21 }}></i></Button>
    }
  </div>
  );
}

export default LightDarkButton;

