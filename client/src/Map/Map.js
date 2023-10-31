import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { defaultIcon } from "../icons/defaultIcon";

export const Map = () => {
  const position = [44.5638, -123.2794];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={defaultIcon}>
        <Popup>
          Popup message displays when icon is clicked. <br /> How customizable?
        </Popup>
      </Marker>
    </MapContainer>
  );
};
