import React from "react";
import "../styles/Tour.css";
import siteTour from '../assets/images/siteTour.png'
function Tour() {
    return (
        <div className="tour">

          <div
            className="tourTop"
            style={{ backgroundImage: `url(${siteTour})` }}
          ></div>
          <div className="tourBottom">
        <h1> Site Features</h1>
        <p>
          Site Tour
        </p>
      </div>

        </div>
      );
    }
    
    export default Tour;
    