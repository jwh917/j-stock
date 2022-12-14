import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyCartItemsContainer({total, myCartItems}) {
  
  const { theme } = useContext(ThemeContext);

  const textStyle = theme ? "white" : "black"


  return (
    <main >
      <div className="col-25" id="myCartItemsContainer" >
        <div>
          {myCartItems}
          <hr></hr>
          <p>Total <span style={{"color": textStyle}}><b>${total.toLocaleString('en-US')}</b></span></p>
        </div>
      </div>
    </main>
  );
}

export default MyCartItemsContainer;
