import React from "react";
import { Marker, Popup, Tooltip } from "react-leaflet";
import { chargerIcon } from "../icons/chargerIcon";

export const MarkerLayer = ({ data }) => {

    return data.features.map((feature) => {
      const { coordinates } = feature.geometry;
      const { "Station Name":stationName, ZIP } = feature.properties;
      return (
        <Marker
          key={String(coordinates)}
          position={[coordinates[1], coordinates[0]]}
          icon={chargerIcon}
        >
        <Tooltip>
            Station: {stationName} <br />
            ZIP: {ZIP}
        </Tooltip>
          <Popup>
            <h3>{stationName}</h3>
          </Popup>
        </Marker>
      );
    });
  };