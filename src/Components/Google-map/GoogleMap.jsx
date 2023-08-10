// import React from "react";
// import GoogleMapReact from "google-map-react";
// import { Container } from "react-bootstrap";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const GoogleMap = (props) => {
//   const defaultProps = {
//     center: {
//       lat: 10.60948264057215,
//       lng: -67.00308642767591,
//     },
//     zoom: 11,
//   };
//   const windowWidth = window.innerWidth;
//   const mapWidth =
//     windowWidth >= 350 && windowWidth <= 450
//       ? "100%"
//       : windowWidth >= 450 && windowWidth <= 750
//       ? "100%"
//       : windowWidth >= 1000
//       ? "100%"
//       : "100%";
//   // const mapStyles = {
//   //   height: "27.68rem",
//   //   width: "75.87rem",
//   //   border: "1px solid #ccc",
//   //   borderRadius: "4px",
//   // };
//   return (
//     <Container className="contactanos__googleMap_container">
//       <GoogleMapReact
//         style={{ width: mapWidth }}
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent />
//       </GoogleMapReact>
//     </Container>
//   );
// };

// export default GoogleMap;

// //lat: 10.60948264057215,
// //lng: -67.00308642767591,

import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Container } from "react-bootstrap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = (props) => {
  const defaultProps = {
    center: {
      lat: 10.60948264057215,
      lng: -67.00308642767591,
    },
    zoom: 11,
  };

  const [mapWidth, setMapWidth] = useState("100%");

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      const newMapWidth =
        windowWidth >= 350 && windowWidth <= 450
          ? "100%"
          : windowWidth >= 450 && windowWidth <= 750
          ? "100%"
          : windowWidth >= 1000
          ? "100%"
          : "100%";
      setMapWidth(newMapWidth);
    }

    window.addEventListener("resize", handleResize);

    // Limpieza del listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container
      style={{ width: mapWidth }}
      className="contactanos__googleMap_container"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent />
      </GoogleMapReact>
    </Container>
  );
};

export default GoogleMap;
