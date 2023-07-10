import { Col, Container, Row } from "react-bootstrap";
import CardMenu from "./CardMenu";
import dataMenu from "../../Data/dataMenu";
import MenuSections from "./MenuSections";

function Menu() {
  return (
    <Container>
      <div className="menu__container_title">
        <h1>Menú</h1>
      </div>

      <div className="menu__container_text">
        <div style={{ width: "1400px" }}>
          <p>
            En CacaoFood nos interesa tu salud, por eso cocinamos nuestros
            platos con productos de calidad, de proveedores locales y
            confiables.
          </p>
          <br></br>
          <p>¡Nuestro menú te dejará sin palabras!</p>
        </div>
      </div>
      <MenuSections />
      <div className="container">
        <Row>
          {dataMenu.map((menu) => (
            <Col key={menu.id} md={4}>
              <CardMenu key={menu.id} menu={menu} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Menu;
