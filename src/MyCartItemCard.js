import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyCartItemCard({myCartItem, handleDelItem}) {

  const { itemUrl, name, color, buy, category} = myCartItem.item
  const { id, size } = myCartItem

  function handleSizeChange(event){

    const newSize = event.target.value

    fetch(`http://localhost:3000/myCart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({size: newSize}),
    })
      .then((r) => r.json())
      .then((newSizeData) => console.log(newSizeData));

  }


  function handleDeleteClick() {
    
    fetch(`http://localhost:3000/myCart/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelItem(myCartItem));

  }
  
  function itemSizing(){

    if(category === "sneakers"){

      return (
        <select name="size" defaultValue={size} onChange={handleSizeChange}>
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
        <select name="size" defaultValue={size} onChange={handleSizeChange}>
          <option value="Small">S</option>
          <option value="Medium">M</option>
          <option value="Large">L</option>
          <option value="X-Large">XL</option>
        </select>
      )
    }

    if(category === "electronics"){
      return(
        <select name="size" >
          <option value="NoSize">No Size</option>
        </select>
      )
    }

  }


  return (
    <main >
      <div>

        <div>
          <img src={itemUrl} alt="my cart item" className="myCartItemImg" />
          <br></br>
          {name}
          <p>{color}</p>
          
          {itemSizing()}
          <br></br>
          
          <span className="price">${buy}</span>

          <br></br>

          <span onClick={handleDeleteClick}>🗑</span>

        </div>
        <br></br>
      </div>

    </main>
  );
}

export default MyCartItemCard;