import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import image_home from "../../Images/image_home.jpg";

function Home() {
  return (
    <Container fluid className="home__container_page_home">
      <Row className="home__container">
        <div className="home__presentación">
          <div className="home__container_title_text">
            <div className="home__container_title">
              <h1 className="home__title">
                Tu comida favorita, saludable y al instante
              </h1>
            </div>
            <div className="home__container_text">
              <p className="home__text">
                Te gusta comer saludable y aún no encontraste la solución ideal?
              </p>
              <br></br>
              <p className="home__text">
                ¡No te preocupes! Con un clic, nosotros nos encargamos.
              </p>
            </div>
            <div className="home__container_button">
              <Button variant="light" className="home__presentación__button">
                Elegir mi menú
              </Button>
            </div>
          </div>

          <div>
            <Image
              src={image_home}
              rounded
              fluid
              className="home__presentación--img"
            />
          </div>
        </div>
      </Row>

      <Row className="justify-content-center home">
        <h2 className="home__titulo">Platos destacados</h2>
        <Col xs={12} md={4} className="home__plato">
          <Row>
            <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
          </Row>
          <Row>
            <p>Plato: Texto descriptivo</p>
          </Row>
        </Col>
        <Col xs={12} md={4} className="home__plato">
          <Row>
            <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
          </Row>
          <Row>
            <p>Plato: Texto descriptivo</p>
          </Row>
        </Col>
        <Col xs={12} md={4} className="home__plato">
          <Row>
            <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
          </Row>
          <Row>
            <p>Plato: Texto descriptivo</p>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center home">
        <h2 className="home__nosotros--titulo">Nosotros</h2>
        <p className="home__nosotros--texto">
          Conocé sobre nosotros, nuestra historia y proyectos futuros
        </p>
        <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
      </Row>
    </Container>
  );
}

export default Home;
