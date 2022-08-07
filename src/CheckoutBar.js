import React, {useContext } from "react";
import { ThemeContext } from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';


function CheckoutBar({total}) {

  const { theme } = useContext(ThemeContext);

  const badgeStyle = theme ? "secondary" : "success"

  return (
    <main >
      <div>
        <Badge className={`badge bg-${badgeStyle}`} style={{width:"100%", height:"180px", marginTop:"150px", position: "absolute"}} >         
          <div>
            <h3> Delivery Cost: FREE</h3>
            <h2> Total: ${total}</h2>
            <Button className="btn btn-light" style={{width:"150px", height:"40px"}} type="submit" form="my-form"> Checkout </Button>
          </div>
        </Badge>
      </div>

    </main>
  );
}

export default CheckoutBar;