import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import {NavLink } from "react-router-dom";


const linkStyles = {
  color: "grey",
};

function NavBar() {

  return (
    <Stack direction="horizontal" gap={4}>
      <div className='bottom-cont'>
        <div className='bottom-nav'>

          <div className='bn-tab'>
            <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkgrey",
            }}
            >
              {/* home tab */}
              <i className="bi bi-house" id="iconSize"></i>
            </NavLink>
          </div>

          <div className="vl"></div>

          <div className='bn-tab'>
            <NavLink
            to="/search"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkgrey",
            }}
            >
              {/* search tab */}
              <i className="bi bi-search" id="iconSize"></i>
            </NavLink>
          </div>

          <div className="vl"></div>

          <div className='bn-tab'>
            <NavLink
            to="/profile"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkgrey",
            }}
            >
              {/* profile tab */}
              <i className="bi bi-person-square" id="iconSize"></i>
            </NavLink>
          </div>

          <div className="vl"></div>

          <div className='bn-tab'>
            <NavLink
            to="/cart"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkgrey",
            }}
            >
              {/* cart tab */}
                <i className="bi bi-cart4" id="iconSize"></i>  
            </NavLink>
          </div>

        </div>
      </div>
   </Stack>
    
  );
}

export default NavBar;
