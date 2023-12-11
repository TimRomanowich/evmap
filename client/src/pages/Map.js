import React from "react";

import { MapContainer, TileLayer} from "react-leaflet";
import { chargers } from "../components/Map/data/chargers";
import { MarkerLayer } from "../components/Map/layers/marker_layer";
//import {CountiesLayer} from "../components/Map/layers/county_layer";

import "leaflet/dist/leaflet.css";
let config = {};
config.params = {
  center: [44.564568, -123.262047],
  zoomControl: false,
  zoom: 13,
  maxZoom: 19,
  minZoom: 11,
  scrollwheel: false,
  legends: true,
  infoControl: false,
  attributionControl: true
}

export const Map = () => {
  const position = [44.564568, -123.262047];

  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
    <MarkerLayer data={chargers}/>
    
    </MapContainer>
  );
};

export default Map