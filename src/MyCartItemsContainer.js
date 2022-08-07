import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyCartItemsContainer({total, myCartItems}) {
  
  const { theme } = useContext(ThemeContext);

  const textStyle = theme ? "white" : "black"


  return (
    <main >
      <div className="col-25" style={{textAlign: "center"}}>
        <div>
          {myCartItems}
          <hr></hr>
          <p>Total <span className="price" style={{"color": textStyle}}><b>${total}</b></span></p>
        </div>
      </div>
    </main>
  );
}

export default MyCartItemsContainer;
