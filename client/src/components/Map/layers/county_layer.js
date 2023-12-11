import { GeoJSON } from "react-leaflet"

export const CountiesLayer = ({ data }) => {
    return (
      <GeoJSON
        key="geo-json-layer"
        data={data}
      ></GeoJSON>
    );
  };