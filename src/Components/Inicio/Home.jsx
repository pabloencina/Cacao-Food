import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import image_home from "../../Images/inicio-images/image_home.jpg";
import dataMenu from "../../Data/dataMenu";
import CardMenu from "../Menu/CardMenu";
import image_section_home from "../../Images/inicio-images/image_seccion_inicio.jpg";

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
        <div className="home__container_title">
          <h1 className="home__title">Platos destacados</h1>
        </div>

        <div className="container">
          <Row>
            {dataMenu.map((menu) => {
              return menu.destacados === true ? (
                <Col key={menu.id} md={4}>
                  <CardMenu key={menu.id} menu={menu} />
                </Col>
              ) : null;
            })}
          </Row>
        </div>
      </Row>
      <Row className="justify-content-center home">
        <div className="home__container_title">
          <h1 className="home__title">Proyectos a futuro</h1>
        </div>
        <div className="home__container_text_proyecto">
          <p className="home__nosotros--texto">
            Conoce sobre nosotros, nuestra historia y proyectos futuro.
          </p>
        </div>
        <div className="home__container_image">
          <Image
            className="home__image"
            src={image_section_home}
            rounded
            fluid
          />
        </div>
      </Row>
    </Container>
  );
}

export default Home;
