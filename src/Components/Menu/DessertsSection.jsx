import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dataMenu from "../../Data/dataMenu";
import CardMenu from "./CardMenu";
import MenuSections from "./MenuSections";

const DessertsSection = () => {
  return (
    <Container>
      <div
        className="d-flex justify-content-center"
        style={{
          height: "150px",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Postres</h1>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{
          height: "100px",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "500px" }}>
          <p>
            Los platos saludables son aquellos que están equilibrados en
            nutrientes y proporcionan beneficios para la salud. Estos platos
            suelen incluir una combinación de alimentos frescos, ricos en
            vitaminas, minerales y fibra, y son bajos en grasas saturadas,
            azúcares añadidos y sodio.
          </p>
        </div>
      </div>
      <MenuSections />
      <div className="container">
        <Row>
          {dataMenu.map((menu) => {
            return menu.classification === "postres" ? (
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

export default DessertsSection;
