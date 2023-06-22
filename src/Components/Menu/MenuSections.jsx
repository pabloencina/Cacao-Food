import React from "react";
import "../../Css/active.css";
import { NavLink } from "react-router-dom";

const MenuSections = () => {
  return (
    <div className="menu_section__container_link_menu">
      <NavLink
        to={"/menu"}
        activeClassName="active"
        className="menu_section__link_menu"
      >
        Platos
      </NavLink>
      <NavLink
        activeClassName="active"
        to={"/ensaladas"}
        className="menu_section__link_menu"
      >
        Ensaladas
      </NavLink>
      <NavLink
        to={"/postres"}
        activeClassName="active"
        className="menu_section__link_menu"
      >
        Postres
      </NavLink>
      <NavLink
        activeClassName="active"
        to={"/cremas"}
        className="menu_section__link_menu"
      >
        Cremas
      </NavLink>
      <NavLink
        activeClassName="active"
        to={"/bebidas"}
        className="menu_section__link_menu"
      >
        Bebidas
      </NavLink>
    </div>
  );
};

export default MenuSections;
