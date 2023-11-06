import React, { useState } from "react";
import Logo from '../../src/assets/images/ev-station.png'
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} />
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/map"> Map </Link>
            <Link to="localhost:3002"> Map</Link>
            <Link to="/tour"> Tour </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="localhost:3002"> Map </Link>
          <Link to="/tour"> Tour </Link>
          <Link to="/contact"> Contact </Link>
          <button onClick={toggleNavbar}>       
          </button>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  