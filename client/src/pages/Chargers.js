import React from "react";
import { chargerTypeList } from "../assets/data/chargerTypeData";
import ChargerTypes from "../components/ChargerTypes";
import "../styles/Chargers.css";

function Chargers() {
  return (
    <div className="Chargers">
      <h1 className="chargerTitle">Connector Types</h1>
      <div className="chargerList">
        {chargerTypeList.map((chargerList, key) => {
          return (
            <ChargerTypes
              key={key}
              image={chargerList.image}
              connector_type={chargerList.connector_type}
              manufacturer={chargerList.manufacturer}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Chargers;
