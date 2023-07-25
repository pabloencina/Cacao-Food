import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = (props) => {
  const defaultProps = {
    center: {
      lat: 10.60948264057215,
      lng: -67.00308642767591,
    },
    zoom: 11,
  };
  const mapStyles = {
    height: "27.68rem",
    width: "75.87rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };
  return (
    <div style={mapStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;

//lat: 10.60948264057215,
//lng: -67.00308642767591,
