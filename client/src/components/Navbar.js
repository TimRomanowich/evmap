import React, { useState } from "react";
import Logo from '../../src/assets/images/navIcon.png'
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
            <Link to="localhost:3001"> Map</Link>
            <Link to="/tour"> Tour </Link>
            <Link to="/chargers"> Charger Types </Link>
            
          </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/Map">  Charger Map</Link>  
          <Link to="/chargers"> Charger Types </Link>
          <Link to="/AddComment">  Add Comment</Link>
          <button onClick={toggleNavbar}>       
          </button>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  