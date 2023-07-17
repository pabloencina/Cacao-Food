import React, { useState } from "react";
import "../../Css/active.css";
import { Link } from "react-router-dom";

const MenuSections = () => {
  const [buttonColor, setButtonColor] = useState("red");

  const handleClick = () => {
    setButtonColor("blue");
  };
  return (
    <div className="menu_section__container">
      <div className="menu_section__container_link_menu">
        <div className="menu_section__button">
          <Link
            to={"/menu"}
            href="/menu"
            className={`menu_section__link_menu ${buttonColor}`}
            activeClassName="active"
            onClick={handleClick}
          >
            Platos
          </Link>
        </div>
        <div className="menu_section__button">
          <Link
            to={"/ensaladas"}
            className="menu_section__link_menu"
            activeClassName="active"
          >
            Ensaladas
          </Link>
        </div>
        <div className="menu_section__button">
          <Link
            to={"/postres"}
            className="menu_section__link_menu"
            activeClassName="active"
          >
            Postres
          </Link>
        </div>
        <div className="menu_section__button">
          <Link to={"/cremas"} className="menu_section__link_menu">
            Cremas
          </Link>
        </div>
        <div className="menu_section__button">
          <Link to={"/bebidas"} className="menu_section__link_menu">
            Bebidas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuSections;
