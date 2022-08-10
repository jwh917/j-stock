import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemCard({items, handleItemClick, togglePopUp}) {

  const {itemUrl, name, color, price, retailPrice} = items

  function clickedItem(event){
    handleItemClick(items)
    togglePopUp()
  }

  return (
    <div >
      
      <Card style={{ width: '15rem', height: "27rem"}} onClick={clickedItem}>
        <Card.Img src={itemUrl} />
        <Card.Body>
          <Card.Title><h3>{name}</h3></Card.Title>
          <h4>{color}</h4>
          <h6>Lowest Ask</h6>
          <h4>${price}</h4>
          <p>Retail Price: ${retailPrice}</p>
        </Card.Body>
      </Card>

  </div>
  );
}
  


export default ItemCard;
