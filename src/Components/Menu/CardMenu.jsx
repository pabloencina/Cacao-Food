import React from "react";
import { Card } from "react-bootstrap";

const CardMenu = ({ menu }) => {
  return (
    <div>
      <Card className="mb-5" style={{ width: "18rem", height: "500px" }}>
        <img src={menu.image.chickenImage} alt="menu" />
        <Card.Body className="card h-100">
          <div className="d-flex" style={{ height: "100px" }}>
            <h6 className="mr-3">{menu.name}</h6>
            <p
              className="d-flex justify-content-end"
              style={{
                width: "100px",
              }}
            >
              {menu.price}$
            </p>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{
              height: "150px",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <p className="d-flex justify-content-center">{menu.description}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMenu;
