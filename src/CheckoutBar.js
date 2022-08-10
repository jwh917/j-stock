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
        <Badge className={`badge bg-${badgeStyle}`} id="checkoutBarBadge">         
          <div>
            <h3> Delivery Cost: FREE</h3>
            <h2> Total: ${total.toLocaleString('en-US')}</h2>
            <Button className="btn btn-light" id="checkoutBarButton" type="submit" form="my-form"> Checkout </Button>
          </div>
        </Badge>
      </div>

    </main>
  );
}

export default CheckoutBar;