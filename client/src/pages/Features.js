import React from "react";
//featureList: JSON with pictures array
import { featureList } from "../components/chargerTypes";
//function that parses features and displays image
import feature from "../components/feature";
//features styling
import "../styles/Features.css";

function Features() {
  return (
    <div className="features">
      <h1 className="featuresTitle">Our Menu</h1>
      <div className="featuresList">
        {MenuList.map((feature, key) => {
          return (
            <feature
              key={key}
              image={feature.image}
              name={feature.name}
              price={feature.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
