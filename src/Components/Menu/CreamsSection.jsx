import React from "react";
import { Col, Row } from "react-bootstrap";
import dataMenu from "../../Data/dataMenu.js";
import CardMenu from "./CardMenu";
//import MenuSections from "./MenuSections";

const CreamsSection = () => {
  return (
    <div>
      <div className="container">
        <Row>
          {dataMenu.map((menu) => {
            return menu.classification === "cremas" ? (
              <Col xs={12} md={6} lg={4} key={menu.id}>
                <CardMenu key={menu.id} menu={menu} />
              </Col>
            ) : null;
          })}
        </Row>
      </div>
    </div>
  );
};

export default CreamsSection;
