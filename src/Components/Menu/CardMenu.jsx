import React from "react";
import { Card } from "react-bootstrap";

const CardMenu = ({ menu }) => {
  return (
    <div>
      <Card className="card_menu__container">
        <img src={menu.image.chickenImage} alt="menu" />
        <Card.Body className="card h-100">
          <div className="card_menu__container_menu_name_price">
            <h6 className="mr-3">{menu.name}</h6>
            <p className="card_menu__price">$ {menu.price}</p>
          </div>
          <div className="card_menu__container_description">
            <p className="d-flex justify-content-center">{menu.description}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMenu;
