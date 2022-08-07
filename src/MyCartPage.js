import React, {useState, useEffect, useContext } from "react";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import MyCartHeader from "./MyCartHeader";
import CheckoutBar from "./CheckoutBar";
import MyCartItemsContainer from "./MyCartItemsContainer";


import 'bootstrap/dist/css/bootstrap.min.css';


// import '@fortawesome/fontawesome-svg-core/styles.css'

function MyCart() {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://kit.fontawesome.com/17a0ff6ff9.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);


  const [myCart, setMyCart] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/myCart")
      .then((r) => r.json())
      .then((myCartData) => setMyCart(myCartData));
  }, []);



  const itemsCount = myCart.length

  const sumTotal = myCart.map((myCartItem) => myCartItem.item.buy)
  const total = sumTotal.reduce((partialSum, a) => partialSum + a, 0);

  const { theme } = useContext(ThemeContext);

  const textStyle = theme ? "white" : "black"


  function itemSizing(item){
    if(item.item.category === "sneakers"){

      return (
        <select name="size" >
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

    if(item.item.category === "apparel"){
      return(
        <select name="size" >
          <option value="Small">S</option>
          <option value="Medium">M</option>
          <option value="Large">L</option>
          <option value="X-Large">XL</option>
        </select>
      )
    }

    if(item.item.category === "electronics"){
      return(
        <select name="size" >
          <option value="NoSize">No Size</option>

        </select>
      )
    }

  }


  const myCartItems = myCart.map((myCartItem) => {
    console.log(myCartItem)
    return(

      <div key={myCartItem.id}>

        <div>
          <img src={myCartItem.item.itemUrl} alt="my cart item " style={{width:"50px", height:"50px"}}/>
          <br></br>
          {myCartItem.item.name}
          <p>{myCartItem.item.color}</p>
          
          {itemSizing(myCartItem)}
          <br></br>
          
          <span className="price">${myCartItem.item.buy}</span>

          <br></br>

          <span>🗑</span>

        </div>
        <br></br>
      </div>
      
    )

  })




  


  return (
    <main style={{"color": textStyle}}>
      <LightDarkButton/>

      <MyCartHeader itemsCount={itemsCount}/>

      <MyCartItemsContainer total={total} myCartItems={myCartItems}/>
  
      <br></br>
      <br></br>
      <br></br>

      {/* userInput container */}
      <div className="container">
        <form action="/action_page.php" id="my-form">

          <div className="grid-child"> 
            <h3>Billing Address</h3>
            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div className="row">
              <div className="col-50">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div className="col-50">
                <label htmlFor="zip">Zip</label>
                <br></br>
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>
            
          <br></br>
          <br></br>

          <div className="grid-child">
            <h3>Payment</h3>
            <label htmlFor="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>
              <label htmlFor="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
              <label htmlFor="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
              <label htmlFor="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
              <div className="row">
                <div className="col-50">
                  <label htmlFor="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                </div>
                <div className="col-50">
                  <label htmlFor="cvv">CVV</label>
                  <br></br>
                  <input type="text" id="cvv" name="cvv" placeholder="352"/>
                </div>
              </div>
          
          
            <label>
              <input type="checkbox" defaultChecked="checked" name="sameadr"/> Shipping address same as billing
            </label>
          </div>

        </form>
      </div>
      
      <CheckoutBar total={total}/>
    </main>
  );
}

export default MyCart;