import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyCartHeader({itemsCount}) {


  return (
    <main >
      <div>
        <h1 className="myCartHeader"> <i className="bi bi-cart-fill"></i> MyCart</h1>
        <p className="myCartHeader">{itemsCount} Items</p>
      </div>
    </main>
  );
}

export default MyCartHeader;