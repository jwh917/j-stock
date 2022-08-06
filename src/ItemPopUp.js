import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Modal from 'react-bootstrap/Modal'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
// import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';



function ItemPopUp({togglePopUp, isOpen, itemDisplayed}) {

  if(isOpen) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  const { theme } = useContext(ThemeContext);

  const headerStyle = "black"

  const badgeStyle = theme ? "secondary" : "success"


  const {name, color, itemUrl, buy, sell, price, productDetails, retailPrice, releaseDate} = itemDisplayed
  

  return (
    <div >
    

       <div className="popup-box">
         <div className="box">

          <h1 style={{textAlign: "center"}}>{name}</h1>
          <p style={{textAlign: "center"}}>{color}</p>

          <div className="buySellGrid">
            <Badge className={`badge bg-${badgeStyle}`} style={{"color":headerStyle, width:"100px", height:"30px"}}>
              BUY: <br></br>
              ${buy}
            </Badge>
            <Badge className={`badge bg-${badgeStyle}`} style={{"color":headerStyle, width:"100px", height:"30px"}}>
              SELL: <br></br> 
              ${sell}
            </Badge>
          </div>
          <div>
            <Badge className={`badge bg-${badgeStyle}`} style={{"color":headerStyle, width:"100px", height:"20px"}}>
              Authhentic
            </Badge>

            <Badge className={`badge bg-${badgeStyle}`} style={{"color":headerStyle, width:"100px", height:"20px"}}>
              New
            </Badge>              
          </div>

          <div style={{textAlign: "center"}}>
    
            <img src={itemUrl} alt="item pic" style={{width: "300px", height: "220px"	 }}/>
          </div>

            <div>
              <h4>Last Sale: ${price}</h4>
              {/* if there are product details show them if not "" */}
              <h4>Product Details:</h4>
              <p>{productDetails}</p>
              <p>Release Date: {releaseDate}</p>
              <p>Retail Price: ${retailPrice}</p>

              {/* size dropdown only for sneakers and apparel not electronics */}
              {/* sneakers - numbers and apparel -  s, m, l, xl */}
            </div>

            <div style={{position:"relative", marginLeft: "550px", top:"-70px"}}>
              {/* size dropdown only for sneakers and apparel */}
              {/* sneakers - numbers and apparel -  s, m, l, xl */}
              {/* make bootstrap button */}
              {/* Add to cart button with send post request to  cart array in json file put all ifno from item and size if so  */}
              <h5>Size Dropdown</h5>
              <br></br>
              <button>Add To Cart</button>
            </div>

           <span className="close-icon" onClick={togglePopUp}>x</span>
         </div>
      </div>
  
    </div>

  );
}

export default ItemPopUp;