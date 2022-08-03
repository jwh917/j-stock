import React from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Stack from 'react-bootstrap/Stack';
import {NavLink } from "react-router-dom";
// import {Link } from "react-router-dom";


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
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
            /* add styling to Navlink */
            style={linkStyles}
            /* add prop for activeStyle */
            activeStyle={{
              background: "darkgrey",
            }}
            >
              {/* home tab */}
              <i className="bi bi-house" style={{ fontSize: 20 }}></i>
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
              <i className="bi bi-search" style={{ fontSize: 20 }}></i>
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
              <i className="bi bi-person-square" style={{ fontSize: 20 }}></i>
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
                <i className="bi bi-cart4" style={{ fontSize: 20 }}></i>  
            </NavLink>
          </div>

        </div>
      </div>
   </Stack>
    
  );
}

export default NavBar;
