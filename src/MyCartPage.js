import React, {useEffect, useContext } from "react";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';

// import '@fortawesome/fontawesome-svg-core/styles.css'

function MyCart() {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://kit.fontawesome.com/17a0ff6ff9.js";
    script.async = true;
    // script.crossorigin = "anonymous";
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);


  const { theme } = useContext(ThemeContext);

  const textStyle = theme ? "white" : "black"

  const badgeStyle = theme ? "secondary" : "success"


  return (
    <main style={{"color": textStyle}}>
      <LightDarkButton/>

      <h1 style={{textAlign: "center"}}> <i className="bi bi-cart-fill"></i> MyCart</h1>
      <p style={{textAlign: "center"}}>0 Items</p>
      <hr></hr>

      {/* items container */}
      {/* no items */}

      <div className="col-25" style={{textAlign: "center"}}>
        <div>
          <p>Product 1 <span className="price">$15</span></p>
          <p>Product 2 <span className="price">$5</span></p>
          <p>Product 3 <span className="price">$8</span></p>
          <p>Product 4 <span className="price">$2</span></p>
          <hr></hr>
          <p>Total <span className="price" style={{color:"black"}}><b>$30</b></span></p>
        </div>
      </div>
  
      <br></br>
      <br></br>
      <br></br>


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

            {/* <input type="submit" value="Continue to checkout" class="btn"/> */}
        </form>
      </div>
  


      {/* checkout bar */}
      <div>
        <Badge className={`badge bg-${badgeStyle}`} style={{width:"100%", height:"180px", marginTop:"150px", position: "absolute"}} >         
        {/* bar container */}
          <div>
            {/* bar */}
            <h3> Delivery Cost: FREE</h3>
            <h2> Total: $0</h2>
            <Button className="btn btn-light" style={{width:"150px", height:"40px"}} type="submit" form="my-form"> Checkout </Button>
          </div>
        </Badge>
      </div>

    </main>
  );
}

export default MyCart;