import React, { useState } from "react";
//import "../../Css/active.css";
//import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const MenuSections = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  // const styleButton = {
  //   backgroundColor: "#6BEA87",
  //   width: "132px",
  //   borderRadius: "2rem 0 0 2rem",
  //   fontFamily: "Montserrat sans-serif",
  //   fontWeight: "600",
  //   fontSize: "20px",
  //   lineHeight: "24px",
  //   display: "flex",
  //   justifyContent: "center",
  //   border: "none",
  //   textDecoration: "none",
  // };

  return (
    <div className="menu_section__container">
      <div className="menu_section__container_link_menu">
        <div
          className={`menu_section__button ${
            activeLink === 0 ? "backgroundPlatos" : ""
          }`}
          onClick={() => handleLinkClick(0)}
        >
          <Button
            style={{
              border: "none",
              textDecoration: "none",
              fontFamily: "Montserrat sans-serif",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              backgroundColor: "inherit",
            }}
            className={`menu_section__link_menu ${
              activeLink === 0 ? "backgroundPlatos" : ""
            }`}
          >
            Platos
          </Button>
        </div>
        <div
          className={`menu_section__button ${
            activeLink === 1 ? "background" : ""
          }`}
          onClick={() => handleLinkClick(1)}
        >
          <Button
            style={{
              border: "none",
              textDecoration: "none",
              fontFamily: "Montserrat sans-serif",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              backgroundColor: "inherit",
            }}
            className={`menu_section__link_menu ${
              activeLink === 1 ? "background" : ""
            }`}
          >
            Ensaladas
          </Button>
        </div>
        <div
          className={`menu_section__button ${
            activeLink === 2 ? "background" : ""
          }`}
          onClick={() => handleLinkClick(2)}
        >
          <Button
            style={{
              border: "none",
              textDecoration: "none",
              fontFamily: "Montserrat sans-serif",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              backgroundColor: "inherit",
            }}
            className={`menu_section__link_menu ${
              activeLink === 2 ? "background" : ""
            }`}
          >
            Postres
          </Button>
        </div>
        <div
          className={`menu_section__button ${
            activeLink === 3 ? "background" : ""
          }`}
          onClick={() => handleLinkClick(3)}
        >
          <Button
            style={{
              border: "none",
              textDecoration: "none",
              fontFamily: "Montserrat sans-serif",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              backgroundColor: "inherit",
            }}
            //to={"/cremas"}
            className={`menu_section__link_menu ${
              activeLink === 3 ? "background" : ""
            }`}
          >
            Cremas
          </Button>
        </div>
        <div
          className={`menu_section__button ${
            activeLink === 4 ? "backgroundBebidas" : ""
          }`}
          onClick={() => handleLinkClick(4)}
        >
          <Button
            style={{
              border: "none",
              textDecoration: "none",
              fontFamily: "Montserrat sans-serif",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              backgroundColor: "inherit",
            }}
            //to={"/bebidas"}
            className={`menu_section__link_menu ${
              activeLink === 4 ? "backgroundBebidas" : ""
            }`}
          >
            Bebidas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuSections;
