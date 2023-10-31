import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { defaultIcon } from "../icons/defaultIcon";
import { chargers } from "../data/chargers";

const MarkerLayer = ({ data }) => {

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
