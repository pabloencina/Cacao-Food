import { Col, Row } from "react-bootstrap";
import CardMenu from "./CardMenu";
import dataMenu from "../../Data/dataMenu";
import MenuSections from "./MenuSections";

function Menu() {
  return (
    <div>
      <div className="menu__container_title">
        <h1 className="menu__title">Menú</h1>
      </div>

      <div className="menu__container_text">
        <div>
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
            return menu.classification === "platos" ? (
              <Col key={menu.id} md={4}>
                <CardMenu key={menu.id} menu={menu} />
              </Col>
            ) : null;
          })}
        </Row>
      </div>
    </div>
  );
}

export default Menu;
