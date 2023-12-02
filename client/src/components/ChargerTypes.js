import React from "react";

function ChargerTypes({ connector_type, image, current_type, manufacturer, supply_input, charging_level, countries }) {
  return (
    <div className="chargerTypes">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {connector_type} </h1>
      <p> ${manufacturer} </p>
    </div>
  );
}

export default ChargerTypes;
