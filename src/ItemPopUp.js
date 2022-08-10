import React, {useState, useContext } from "react";
import { ThemeContext } from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';



function ItemPopUp({togglePopUp, isOpen, itemDisplayed}) {
  const [size, setSize] = useState("")

  function newSize(event){
    setSize(event.target.value)
  }


  if(isOpen) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  const { theme } = useContext(ThemeContext);

  const headerStyle = "black"

  const style = theme ? "secondary" : "success"


  const {name, category, color, itemUrl, buy, sell, price, productDetails, retailPrice, releaseDate} = itemDisplayed

  function addToCart(){

    const newCartItem = {
      item: itemDisplayed,
      size: size,
    }


    if((newCartItem.item.category === "sneakers" && newCartItem.size === "") || (newCartItem.item.category === "apparel" && newCartItem.size === "")) return


    fetch("http://localhost:3000/myCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCartItem),
    })
      .then((r) => r.json())
      .then((newCartItemData) => console.log(newCartItemData));

  }


  function showProductDetails(){
    if(productDetails === ""){
      return ""
    }
    else
      return (
        <div>
          <h4>Product Details:</h4>
          <p>{productDetails}</p>
        </div>
      )
  }


  function itemSizing(){
    if(category === "sneakers"){
      return (
        <select name="size" onChange={newSize}>
          <option value="7">7</option>        
          <option value="7.5">7.5</option>

          <option value="8">8</option>
          <option value="8.5">8.5</option>

          <option value="9">9</option>
          <option value="9.5">9.5</option>

          <option value="10">10</option>
          <option value="10.5">10.5</option>

          <option value="11">11</option>
          <option value="11.5">11.5</option>

          <option value="12">12</option>
          <option value="12.5">12.5</option>

          <option value="13">13</option>
          <option value="13.5">13.5</option>
        </select>
      )
    }

    if(category === "apparel"){
      return(
        <select name="size" onChange={newSize}>
          <option value="Small">S</option>
          <option value="Medium">M</option>
          <option value="Large">L</option>
          <option value="X-Large">XL</option>
        </select>
      )
    }

    if(category === "electronics"){
      return(
        <select name="size" onChange={newSize}>
          <option value="NoSize">No Size</option>

        </select>
      )
    }

  }
  

  return (
    <div>
       <div className="popup-box">
         <div className="box">

          <h1 className="popupHeader">{name}</h1>
          <p className="popupHeader">{color}</p>

          <div className="buySellGrid">
            <Badge className={`badge bg-${style}`} id="buySellGridBadges1" style={{"color":headerStyle}}>
              BUY: <br></br>
              ${buy}
            </Badge>
            <Badge className={`badge bg-${style}`} id="buySellGridBadges1" style={{"color":headerStyle}}>
              SELL: <br></br> 
              ${sell}
            </Badge>
          </div>
          <div>
            <Badge className={`badge bg-${style}`} id="buySellGridBadges2" style={{"color":headerStyle}}>
              Authhentic
            </Badge>

            <Badge className={`badge bg-${style}`} id="buySellGridBadges2" style={{"color":headerStyle}}>
              New
            </Badge>              
          </div>

          <div className="clickedItem">
    
            <img src={itemUrl} alt="item pic"/>
          </div>

            <div>
              <h4>Last Sale: ${price}</h4>
              {showProductDetails()}
              <p>Release Date: {releaseDate}</p>
              <p>Retail Price: ${retailPrice}</p>
            </div>

            <div className="clickedItemInfo">

              {/* Category Add Aug. 7th*/}
              <h5>Size</h5>
              {itemSizing()}
              <br></br>
              <br></br>
              <Button className={`btn btn-${style}`} onClick={addToCart}>Add To Cart</Button>
            </div>

           <span className="close-icon" onClick={togglePopUp}>x</span>
         </div>
      </div>
  
    </div>

  );
}

export default ItemPopUp;