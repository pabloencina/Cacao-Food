import React from "react";
import { Col, Row } from "react-bootstrap";
import dataMenu from "../../Data/dataMenu";
import CardMenu from "./CardMenu";
import MenuSections from "./MenuSections";

const SaladSection = () => {
  return (
    <div>
      <div className="menu__container_title">
        <h1 className="menu__title">Menú</h1>
      </div>

      <div className="menu__container_text">
        <div style={{ width: "1400px" }}>
          <p className="menu__text">
            En CacaoFood nos interesa tu salud, por eso cocinamos nuestros
            platos con productos de calidad, de proveedores locales y
            confiables.
          </p>
          <br></br>
          <p className="menu__text">¡Nuestro menú te dejará sin palabras!</p>
        </div>
      </div>
      <MenuSections />
      <div className="container">
        <Row>
          {dataMenu.map((menu) => {
            return menu.classification === "ensalada" ? (
              <Col key={menu.id} xs={12} md={6} lg={4}>
                <CardMenu key={menu.id} menu={menu} />
              </Col>
            ) : null;
          })}
        </Row>
      </div>
    </div>
  );
};

export default SaladSection;
