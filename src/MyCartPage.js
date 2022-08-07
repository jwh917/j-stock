import React, {useState, useEffect, useContext } from "react";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import MyCartHeader from "./MyCartHeader";
import CheckoutBar from "./CheckoutBar";
import MyCartItemsContainer from "./MyCartItemsContainer";
import UserInputContainer from "./UserInputContainer";



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


  const itemsCount = myCart.length

  const sumTotal = myCart.map((myCartItem) => myCartItem.item.buy)
  const total = sumTotal.reduce((partialSum, a) => partialSum + a, 0);

  const { theme } = useContext(ThemeContext);

  const textStyle = theme ? "white" : "black"


  function itemSizing(item){

    const userSize = item.size

    if(item.item.category === "sneakers"){

      return (
        <select name="size" defaultValue={userSize}>
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
        <select name="size" defaultValue={userSize}>
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
    console.log(myCartItem.size)
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

      <UserInputContainer/>
      <CheckoutBar total={total}/>
    </main>
  );
}

export default MyCartPage;