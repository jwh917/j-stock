import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import 'bootstrap/dist/css/bootstrap.min.css';


function ProfilePage() {

  const { theme } = useContext(ThemeContext);

  const textStyle = theme ? "white" : "black"

  return (
    <main style={{"color": textStyle}}>
      <LightDarkButton/>
      <hr></hr>
      <div>
        <h1 className="profileHeader">Profile</h1>
      </div>
      <hr></hr>
      <div className="profileOption">
         <h3> <i className="bi bi-person-fill"></i> Account</h3>
         <p>-Edit your Password, Name, Shoe Size, Email, Username</p>
      </div>
      <hr></hr>
      <div className="profileOption">
        <h3> <i className="bi bi-file-lock2-fill"></i> Security</h3>
        <p>-Two-Step Verification, Data and Privacy</p>
      </div>
      <hr></hr>
      <div className="profileOption">
        <h3> <i className="bi bi-bag-fill"></i> Purchases</h3>
        <p>-In-Progress, Completed Orders</p>
      </div>
      <hr></hr>
      <div className="profileOption">
        <h3> <i className="bi bi-gear-fill"></i> Setting</h3>
        <p>-Billing, Shipping, Payout</p>
      </div>
      <hr></hr>
      <div className="profileOption">
        <h3> <i className="bi bi-bag-fill"></i> Sales</h3>
        <p>-Sales, Seller Profile</p>
      </div>
      <hr></hr>
      <div className="profileOption">
        <h3> <i className="bi bi-chat-fill"></i> Chat</h3>
      </div>
      <hr></hr>
      <div className="profileOption">
        <h3> <i className="bi bi-credit-card-2-front-fill"></i> Blog</h3>
      </div>
      <hr></hr>
      <div className="profileOption">
        <h3> <i className="bi bi-currency-exchange"></i> Currency: $USD</h3>
      </div>
      <hr></hr>
      <div className="profileOption">
        <h3> <i className="bi bi-question-square-fill"></i> Help</h3>
      </div>
      <hr></hr>

      <br></br>
      <br></br>
    </main>
  );
}

export default ProfilePage;