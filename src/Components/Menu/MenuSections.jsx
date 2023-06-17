import React from "react";
import "../../Css/menuButtons.css";
import { Link } from "react-router-dom";

const MenuSections = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        height: "100px",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        style={{
          margin: "15px",
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
        }}
      >
        Platos
      </Link>
      <Link
        to={"/ensaladas"}
        style={{
          margin: "15px",
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
        }}
      >
        Ensaladas
      </Link>
      <Link
        to={"/postres"}
        style={{
          margin: "15px",
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
        }}
      >
        Postres
      </Link>
      <Link
        to={"/cremas"}
        style={{
          margin: "15px",
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
        }}
      >
        Cremas
      </Link>
      <Link
        to={"/bebidas"}
        style={{
          margin: "15px",
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
        }}
      >
        Bebidas
      </Link>
    </div>
  );
};

export default MenuSections;
