import {useState} from "react";
import { Marker, Popup, Tooltip, useMap } from "react-leaflet";
import { chargerIcon } from "../../../assets/icons/chargerIcon";
import { Button, Card, InputNumber, Rate, Space } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";




const PopupStatistics = ({ feature }) => {
  //Get variables from features
  const{ "Station Name":stationName, EVConnectorTypes, "EV Pricing":pricing, ID } = feature.properties;
  
  return (
    <>
      <Card type="inner" title="Name">
        <b>{`${stationName}`}</b>
      </Card>,
      <Card type="inner" title="EVConnectorTypes">
      <b>{`${EVConnectorTypes}`}</b>
      </Card>,
      <Card type="inner" title="Pricing">
        {pricing}
      </Card>,
      <Card type="inner" title="More Info">
        <a href="">{ID}</a>
      </Card>,
    </>
  );
};

export const MarkerLayer = ({ data }) => {
  const leafletMap = useMap();
    return data.features.map((feature) => {
      const { coordinates } = feature.geometry;
      const { "Station Name":stationName, ZIP } = feature.properties;
      return (
        <Marker
          key={String(coordinates)}
          position={[coordinates[1], coordinates[0]]}
          icon={chargerIcon}
          eventHandlers={{
            click: (e) => leafletMap.panTo(e.latlng),
          }}
        >
        <Tooltip>
            Station: {stationName} <br />
            ZIP: {ZIP}
        </Tooltip>
          <Popup>
            <PopupStatistics feature ={feature}/>
          </Popup>
        </Marker>
      );
    });
  };