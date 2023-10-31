import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import { chargers } from "../data/chargers";
import { MarkerLayer } from "../layers/marker_layer";


export const Map = () => {
  const position = [0, 0];

  return (
    <MapContainer center={position} zoom={1} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerLayer data={chargers} />
    </MapContainer>
  );
};
