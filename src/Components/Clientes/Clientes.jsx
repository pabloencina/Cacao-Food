import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import calificacion_image from "../../Images/clientes-images/calificacion.png";
import cliente1_image from "../../Images/clientes-images/cara_1.png";
import cliente2_image from "../../Images/clientes-images/cara_2.png";
import cliente3_image from "../../Images/clientes-images/cara_3.png";
import FormikSectionClientes from "./Formik_clientes";

function Clientes() {
  return (
    <Container fluid>
      <Row className="justify-content-center clientes">
        <h2 className="clientes__títulos">Nuestros Clientes</h2>
        <p className="clientes__nuestrosClientesContainer--texto">
          ¡Tu opinión nos importa!
        </p>
        <p className="clientes__nuestrosClientesContainer--texto">
          En CacaoFood, valoramos profundamente la experiencia de nuestros
          clientes, por eso queremos escuchar tus comentarios y experiencias con
          nuestro servicio de comida saludable y sostenible.
        </p>
        <p className="clientes__nuestrosClientesContainer--texto">
          Tus reseñas son fundamentales para seguir mejorando y brindarte una
          experiencia excepcional.
        </p>
        <p className="clientes__nuestrosClientesContainer--texto">
          ¿Te encantó nuestro menú? ¿Quieres compartir tus platos favoritos o
          ideas para mejorar?
        </p>
        <p className="clientes__nuestrosClientesContainer--texto">
          ¡Tu voz es nuestra inspiración!
        </p>
      </Row>
      <Row className="justify-content-center clientes">
        <h2 className="clientes__títulos">Sus opiniones</h2>
        <Col xs={12} md={6} lg={4} className="clientes__clienteContainer">
          <Col className="clientes__clienteContainer--individual">
            <Row className="clientes__clienteContainer--perfil">
              <Col xs={5}>
                <Image src={cliente1_image} roundedCircle fluid />
              </Col>
              <Col xs={7}>
                <h3 className="clientes__títulos--negros">Carla Díaz</h3>
                <Image src={calificacion_image} />
              </Col>
            </Row>
            <Row>
              <h3 className="clientes__títulos--negros">Comida deliciosa</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                id ligula fermentum, suscipit est congue, eleifend neque.
                Vestibulum tempus, sem in tincidunt lobortis, ligula tortor
                consectetur tortor, a gravida mauris justo ac diam.
              </p>
            </Row>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={4} className="clientes__clienteContainer">
          <Col className="clientes__clienteContainer--individual">
            <Row className="clientes__clienteContainer--perfil">
              <Col xs={5}>
                <Image src={cliente2_image} roundedCircle fluid />
              </Col>
              <Col xs={7}>
                <h3 className="clientes__títulos--negros">Juan Carlos</h3>
                <Image src={calificacion_image} />
              </Col>
            </Row>
            <Row>
              <h3 className="clientes__títulos--negros">¡Excelente!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                id ligula fermentum, suscipit est congue, eleifend neque.
                Vestibulum tempus, sem in tincidunt lobortis, ligula tortor
                consectetur tortor, a gravida mauris justo ac diam.
              </p>
            </Row>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={4} className="clientes__clienteContainer">
          <Col className="clientes__clienteContainer--individual">
            <Row className="clientes__clienteContainer--perfil">
              <Col xs={5}>
                <Image src={cliente3_image} roundedCircle fluid />
              </Col>
              <Col xs={7}>
                <h3 className="clientes__títulos--negros">Diana</h3>
                <Image src={calificacion_image} />
              </Col>
            </Row>
            <Row>
              <h3 className="clientes__títulos--negros">Servicio Único</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                id ligula fermentum, suscipit est congue, eleifend neque.
                Vestibulum tempus, sem in tincidunt lobortis, ligula tortor
                consectetur tortor, a gravida mauris justo ac diam.
              </p>
            </Row>
          </Col>
        </Col>
      </Row>
      <Row className="justify-content-center clientes">
        <h2 className="clientes__títulos">Ingresa tu reseña</h2>
        <FormikSectionClientes />
      </Row>
    </Container>
  );
}

export default Clientes;
