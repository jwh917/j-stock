import React from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Stack from 'react-bootstrap/Stack';


function NavBar() {

  return (
    <Stack direction="horizontal" gap={4}>
      <div className='bottom-cont'>
        <div className='bottom-nav'>
            <div className='bn-tab'>
            <i className="bi bi-house" style={{ fontSize: 20 }}></i>
            </div>
            <div className="vl"></div>
            <div className='bn-tab'>
            <i className="bi bi-search" style={{ fontSize: 20 }}></i>
        
            </div>
            <div className="vl"></div>
            <div className='bn-tab'>
            <i className="bi bi-person-square" style={{ fontSize: 20 }}></i>
          
            </div>
            <div className="vl"></div>
            <div className='bn-tab'>
            <i className="bi bi-cart4" style={{ fontSize: 20 }}></i>
                
            </div>
        </div>
      
      </div>
   </Stack>
    
  );
}

export default NavBar;
