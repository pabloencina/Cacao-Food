import React from "react";
import { Button, Card } from "react-bootstrap";

const CardMenu = ({ menu }) => {
  return (
    <div>
      <Card className="card_menu__container">
        <img
          src={menu.image.chickenImage}
          alt="menu"
          className="card_menu__image"
        />
        <Card.Body
          className="card h-100"
          style={{
            border: "none",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="card_menu__container_menu_name_price">
            <h6 className="mr-3">{menu.name}</h6>
            <p className="card_menu__price">$ {menu.price}</p>
          </div>
          <div className="card_menu__container_description">
            <p className="d-flex justify-content-center">{menu.description}</p>
          </div>
          <div className="card_menu__container_button">
            <Button className="card_menu__button">Comprar</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMenu;
