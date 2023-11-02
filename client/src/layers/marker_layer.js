import React from "react";
import { Marker, Popup, Tooltip, useMap } from "react-leaflet";
import { chargerIcon } from "../icons/chargerIcon";
import { Button, Card, InputNumber, Space } from "antd";

const PopupStatistics = ({ feature }) => {
  //Get variables from features
  const{ "Station Name":stationName, EVConnectorTypes, "EV Pricing":pricing } = feature.properties;

  return (
    <>
      <Card type="inner" title="Name">
        <b>{`${stationName}`}</b>
      </Card>,
      <Card type="inner" title="EVConnectorTypes">
      <b>{`${EVConnectorTypes}`}</b>
      </Card>,
      <Card type="inner" title="Pricing">
        Inner Card content
      </Card>,
      <Card type="inner" title="Radius Filter">
      <Space size="small">
          <InputNumber
            defaultValue={10}
            min={0}
            onChange={(e) => console.log(e)}
          ></InputNumber>
          <Button type="primary" shape="round">
            Filter by miles
          </Button>
        </Space>
      </Card>
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