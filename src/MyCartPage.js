import React, {useState, useEffect, useContext } from "react";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import MyCartHeader from "./MyCartHeader";
import CheckoutBar from "./CheckoutBar";
import MyCartItemsContainer from "./MyCartItemsContainer";
import UserInputContainer from "./UserInputContainer";
import MyCartItemCard from "./MyCartItemCard";

import 'bootstrap/dist/css/bootstrap.min.css';

// import '@fortawesome/fontawesome-svg-core/styles.css'

function MyCartPage() {

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

  function handleDelItem(deletedItem){
    console.log(deletedItem)
    const updatedCart = myCart.filter((item) => item.id !== deletedItem.id);
    setMyCart(updatedCart)
  }


  const itemsCount = myCart.length

  const sumTotal = myCart.map((myCartItem) => myCartItem.item.buy)
  const total = sumTotal.reduce((partialSum, a) => partialSum + a, 0);

  const { theme } = useContext(ThemeContext);

  const textStyle = theme ? "white" : "black"

  const myCartItems = myCart.map((myCartItem) => {
    return(
      <MyCartItemCard
      key={myCartItem.id}
      myCartItem={myCartItem}
      handleDelItem={handleDelItem}
      />
      
    )

  })

  return (
    <main style={{"color": textStyle}}>
      <LightDarkButton/>
      <MyCartHeader itemsCount={itemsCount}/>
      <MyCartItemsContainer total={total} myCartItems={myCartItems} />
  
      <br></br>
      <br></br>
      <br></br>

      <UserInputContainer/>
      <CheckoutBar total={total}/>
    </main>
  );
}

export default MyCartPage;