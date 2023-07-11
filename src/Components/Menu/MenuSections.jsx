import React from "react";
import "../../Css/active.css";
import { Link } from "react-router-dom";

const MenuSections = () => {
  return (
    <div className="menu_section__container">
      <div className="menu_section__container_link_menu">
        <div className="menu_section__button">
          <Link
            to={"/menu"}
            //activeClassName="active_section"
            className="menu_section__link_menu"
          >
            Platos
          </Link>
        </div>
        <div className="menu_section__button">
          <Link
            //activeClassName="active_section"
            to={"/ensaladas"}
            className="menu_section__link_menu"
          >
            Ensaladas
          </Link>
        </div>
        <div className="menu_section__button">
          <Link
            to={"/postres"}
            //activeClassName="menu_section__active"
            className="menu_section__link_menu"
          >
            Postres
          </Link>
        </div>
        <div className="menu_section__button">
          <Link
            //activeClassName="menu_section__active"
            to={"/cremas"}
            className="menu_section__link_menu"
          >
            Cremas
          </Link>
        </div>
        <div className="menu_section__button">
          <Link
            //activeClassName="active_section"
            to={"/bebidas"}
            className="menu_section__link_menu"
          >
            Bebidas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuSections;
