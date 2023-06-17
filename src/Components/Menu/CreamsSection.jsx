import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { dataMenu } from "../../Data/dataMenu";
import CardMenu from "./CardMenu";

const CreamsSection = () => {
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
        <h1>Cremas</h1>
      </div>
      <div className="container">
        <Row>
          {dataMenu.map((menu) => {
            return menu.classification === "cremas" ? (
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

export default CreamsSection;
