import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import dataMenu from "../../Data/dataMenu";
import CardMenu from "./CardMenu";

const MenuSections = () => {
  const [activeLink, setActiveLink] = useState(null);

  const classification = ["platos", "ensalada", "postres", "cremas", "bebidas"];
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const styleButton = {
    border: "none",
    textDecoration: "none",
    fontFamily: "Montserrat sans-serif",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    backgroundColor: "inherit",
  };

  return (
    <Container>
      <div className="menu_section__container">
        <div className="menu_section__container_link_menu">
          <div
            className={`menu_section__button ${
              activeLink === 0 ? "backgroundPlatos" : ""
            }`}
            onClick={() => handleLinkClick(0)}
          >
            <Button
              style={styleButton}
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
              style={styleButton}
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
              style={styleButton}
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
              style={styleButton}
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
              style={styleButton}
              className={`menu_section__link_menu ${
                activeLink === 4 ? "backgroundBebidas" : ""
              }`}
            >
              Bebidas
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <Row>
          {dataMenu.map((menu) => {
            return menu.classification === classification[activeLink] ? (
              <Col key={menu.id} md={4}>
                <CardMenu key={menu.id} menu={menu} />
              </Col>
            ) : null;
          })}
        </Row>
      </div>
    </Container>
  );
};

export default MenuSections;
