import React from "react";
import { Marker, Popup } from "react-leaflet";
import { defaultIcon } from "../icons/defaultIcon";

export const MarkerLayer = ({ data }) => {

    return data.features.map((feature) => {
      const { coordinates } = feature.geometry;
  
      return (
        <Marker
          key={String(coordinates)}
          position={[coordinates[1], coordinates[0]]}
          icon={defaultIcon}
        >
          <Popup>
            Popup <br /> Easily customizable.
          </Popup>
        </Marker>
      );
    });
  };