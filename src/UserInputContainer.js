import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function UserInputContainer({fullNameInput, emailInput, addressInput, cityInput, stateInput, zipCodeInput, cardNameInput, cardNumInput, expMonInput, expYrInput, cvvInput, formSumbitHandle}) {


  return (
    <main >
      <div className="container">
        {/* <form action="/action_page.php" id="my-form" onSubmit={formSumbitHandle}> */}
        <form id="my-form" onSubmit={formSumbitHandle}>

          <div className="grid-child"> 
            <h3>Billing Address</h3>
            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" onChange={fullNameInput}/>
            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com" onChange={emailInput}/>
            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" onChange={addressInput}/>
            <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York" onChange={cityInput}/>

            <div className="row">
              <div className="col-50">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY" onChange={stateInput}/>
              </div>
              <div className="col-50">
                <label htmlFor="zip">Zip</label>
                <br></br>
                <input type="text" id="zip" name="zip" placeholder="10001" onChange={zipCodeInput}/>
              </div>
            </div>
          </div>
            
          <br></br>
          <br></br>

          <div className="grid-child">
            <h3>Payment</h3>
            <label htmlFor="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" id="visaCard"></i>
              <i className="fa fa-cc-amex" id="amexCard"></i>
              <i className="fa fa-cc-mastercard" id="masterCard"></i>
              <i className="fa fa-cc-discover" id="discoverCard"></i>
            </div>
              <label htmlFor="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe" onChange={cardNameInput}/>
              <label htmlFor="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={cardNumInput}/>
              <label htmlFor="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September" onChange={expMonInput}/>
              <div className="row">
                <div className="col-50">
                  <label htmlFor="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2018" onChange={expYrInput}/>
                </div>
                <div className="col-50">
                  <label htmlFor="cvv">CVV</label>
                  <br></br>
                  <input type="text" id="cvv" name="cvv" placeholder="352" onChange={cvvInput}/>
                </div>
              </div>
          
          
            <label>
              <input type="checkbox" defaultChecked="checked" name="sameadr"/> Shipping address same as billing
            </label>
          </div>

        </form>
      </div>

    </main>
  );
}

export default UserInputContainer;

