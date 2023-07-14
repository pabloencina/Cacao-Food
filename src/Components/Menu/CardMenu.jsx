import React from "react";
import { Button, Card } from "react-bootstrap";
//import dataImages from "../../Data/dataImages";

const CardMenu = ({ menu }) => {
  console.log(menu.image);
  return (
    <Card className="card_menu__container">
      <img src={menu.image} alt="menu" className="card_menu__image" />
      <Card.Body
        className="card h-100"
        style={{
          border: "none",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="card_menu__container_menu_name_price">
          <p className="card_menu__name_title">{menu.name}</p>
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
  );
};

export default CardMenu;

/*
{dataImages.map((image) => (
        <div key={image.id} className="card_menu__image"></div>
      ))}
*/
