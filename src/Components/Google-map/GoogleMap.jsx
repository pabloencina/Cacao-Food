import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const GoogleMap = (props) => {
  const mapStyles = {
    height: "27.68rem",
    width: "75.87rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    //marginTop: "2rem",
  };
  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 10.60948264057215,
        lng: -67.00308642767591,
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "",
})(GoogleMap);
