import React from "react";
import "../../Css/active.css";
import { NavLink } from "react-router-dom";

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
      <NavLink
        to={"/menu"}
        activeClassName="active"
        style={{
          margin: "15px",
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
        }}
      >
        Platos
      </NavLink>
      <NavLink
        activeClassName="active"
        to={"/ensaladas"}
        style={{
          margin: "15px",
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
        }}
      >
        Ensaladas
      </NavLink>
      <NavLink
        to={"/postres"}
        activeClassName="active"
        style={{
          margin: "15px",
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
        }}
      >
        Postres
      </NavLink>
      <NavLink
        activeClassName="active"
        to={"/cremas"}
        style={{
          margin: "15px",
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
        }}
      >
        Cremas
      </NavLink>
      <NavLink
        activeClassName="active"
        to={"/bebidas"}
        style={{
          margin: "15px",
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
        }}
      >
        Bebidas
      </NavLink>
    </div>
  );
};

export default MenuSections;
