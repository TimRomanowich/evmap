import React from "react";
import { Link } from "react-router-dom";
import mapImage from "../assets/images/screenshotMainpage.png"
//client\src\assets\images\screenshotMainpage.png
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${mapImage})` }}>
      <div className="headerContainer">
        <h1> EV Chargers </h1>
        <p> Find a Charging Station Near you</p>
        <Link to="http://localhost:3001/">
          <button> View Map </button>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;
