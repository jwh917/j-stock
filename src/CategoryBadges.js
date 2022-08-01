import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';



function CategoryBadges() {

  const { theme } = useContext(ThemeContext);

  const headerStyle = theme ? "white" : "black"

  const badgeStyle = theme ? "secondary" : "success"

  // add hover css and click css

  return (
    <div className="categoryBadges">
      <br></br>
        <h2 style={{"color":headerStyle}}>Shop By Category</h2>
        <br></br>
        <div className="categoryGrid">
          <Badge className={`badge bg-${badgeStyle}`}><img src="https://cdn.flightclub.com/1500/TEMPLATE/253215/1.jpg" alt="sneakers"/> Sneakers</Badge>
          <Badge className={`badge bg-${badgeStyle}`}><img src="https://m.media-amazon.com/images/I/51vQoCHDysL._AC_UX679_.jpg" alt="apparel"/> Apparel</Badge>
          <Badge className={`badge bg-${badgeStyle}`}><img src="https://i5.walmartimages.com/asr/9f8c06f5-7953-426d-9b68-ab914839cef4.5f15be430800ce4d7c3bb5694d4ab798.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="electronics"/> Electronics</Badge>
        </div>
        <br></br>
        <br></br>
    </div>
  );
}
  


export default CategoryBadges;

