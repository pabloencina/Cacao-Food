import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const GoogleMap = (props) => {
  const mapStyles = {
    width: "70%",
    height: "30rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "2rem",
  };
  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: -31.41395731358852, // -31.41395731358852, -64.17300169549533
        lng: -64.17300169549533,
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "",
})(GoogleMap);
