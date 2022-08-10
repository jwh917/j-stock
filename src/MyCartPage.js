import React, {useState, useEffect, useContext } from "react";
import {useHistory} from "react-router-dom";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import MyCartHeader from "./MyCartHeader";
import CheckoutBar from "./CheckoutBar";
import MyCartItemsContainer from "./MyCartItemsContainer";
import UserInputContainer from "./UserInputContainer";
import MyCartItemCard from "./MyCartItemCard";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyCartPage() {

  const [myCart, setMyCart] = useState([])

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")


  const [cardName, setCardName] = useState("")
  const [cardNum, setCardNum] = useState("")
  const [expMon, setExpMon] = useState("")
  const [expYr, setExpYr] = useState("")
  const [cvv, setCvv] = useState("")


  useEffect(() => {
    fetch("http://localhost:3000/myCart")
      .then((r) => r.json())
      .then((myCartData) => setMyCart(myCartData));
  }, []);

  const itemsCount = myCart.length

  const sumTotal = myCart.map((myCartItem) => myCartItem.item.buy)
  const total = sumTotal.reduce((partialSum, a) => partialSum + a, 0);

  const { theme } = useContext(ThemeContext);

  const history = useHistory();

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

  function handleDelItem(deletedItem){
    const updatedCart = myCart.filter((item) => item.id !== deletedItem.id);
    setMyCart(updatedCart)
  }

  function fullNameInput(event){
    setFullName(event.target.value)
  }

  function emailInput(event){
    setEmail(event.target.value)
  }

  function addressInput(event){
    setAddress(event.target.value)
  }

  function cityInput(event){
    setCity(event.target.value)
  }

  function stateInput(event){
    setState(event.target.value)
  }

  function zipCodeInput(event){
    setZipCode(event.target.value)
  }

  function cardNameInput(event){
    setCardName(event.target.value)
  }

  function cardNumInput(event){
    setCardNum(event.target.value)
  }

  function expMonInput(event){
    setExpMon(event.target.value)
  }

  function expYrInput(event){
    setExpYr(event.target.value)
  }

  function cvvInput(event){
    setCvv(event.target.value)
  }

  function afterCheckOut(myCart){
    myCart.map((item) => {
      return fetch(`http://localhost:3000/myCart/${item.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((data) => console.log(data));
    })
  }


  function formSumbitHandle(event){
    event.preventDefault()

    const newCompletedOrder = {
      fullName: fullName,
      email: email,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
      cardName: cardName,
      cardNum: cardNum,
      expMon: expMon,
      expYr: expYr,
      cvv: cvv,
      myCart: myCart,
      total: total
    }

    // error or window saying which ever one isnt filled
    if(newCompletedOrder.fullName === "" || newCompletedOrder.email === "" || newCompletedOrder.email === "" || newCompletedOrder.address === "" || newCompletedOrder.city === "" || newCompletedOrder.state === "" || newCompletedOrder.zipCode === "" || newCompletedOrder.cardName === "" || newCompletedOrder.cardNum === "" || newCompletedOrder.expMon === "" || newCompletedOrder.expYr === "" || newCompletedOrder.cvv === "" || newCompletedOrder.myCart.length === 0 || newCompletedOrder.total === 0) return

    fetch("http://localhost:3000/completedOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCompletedOrder),
    })
      .then((r) => r.json())
      .then((newCompletedOrderData) => console.log(newCompletedOrderData));

    event.target.reset()

    afterCheckOut(myCart)

    history.push("/")
  }

  return (
    <main style={{"color": textStyle}}>
      <LightDarkButton/>
      <MyCartHeader itemsCount={itemsCount}/>
      <MyCartItemsContainer total={total} myCartItems={myCartItems} />
  
      <br></br>
      <br></br>
      <br></br>

      <UserInputContainer fullNameInput={fullNameInput} emailInput={emailInput} addressInput={addressInput} cityInput={cityInput} stateInput={stateInput} zipCodeInput={zipCodeInput} cardNameInput={cardNameInput} cardNumInput={cardNumInput} expMonInput={expMonInput} expYrInput={expYrInput} cvvInput={cvvInput} formSumbitHandle={formSumbitHandle}/>
      <CheckoutBar total={total}/>
    </main>
  );
}

export default MyCartPage;