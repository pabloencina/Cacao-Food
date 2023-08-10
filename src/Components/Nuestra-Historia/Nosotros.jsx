import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import image_mision from "../../Images/nosotros-images/mision.png";
import image_proveedores from "../../Images/nosotros-images/proveedores.png";
import image_que_buscamos from "../../Images/nosotros-images/que_buscamos.png";
import image_nosotros from "../../Images/nosotros-images/sobre_nosotros.png";
import image_vision from "../../Images/nosotros-images/vision.png";
import image_valores from "../../Images/nosotros-images/valores.png";
import image_servicios from "../../Images/nosotros-images/servicios.png";
import image_calidad from "../../Images/nosotros-images/calidad.png";

function Nosotros() {
  return (
    <Container fluid>
      <Row className="justify-content-center nosotros">
        <Col xs={12} lg={6} className="nosotros__container">
          <h2 className="nosotros__títulos">Sobre Nosotros</h2>
          <p className="nosotros__textos">
            Somos una empresa dedicada al desarrollo sostenible. Nuestra
            motivación es ofrecerte los ingredientes más frescos. También nos
            preocupa el medio ambiente, por lo que promovemos el uso de envases
            ecológicos y reciclables.
          </p>
        </Col>
        <Col xs={12} lg={6} className="nosotros__container--img">
          <Image src={image_nosotros} rounded fluid />
        </Col>
      </Row>
      <Row className="justify-content-center nosotros">
        <h2 className="nosotros__títulos">Los mejores proveedores</h2>
        <Image
          className="nosotros__proveedores--img"
          src={image_proveedores}
          rounded
          fluid
        />
        <div>
          <p className="nosotros__proveedores--text">
            Emprendedores de la zona nos aportan la materia prima necesaria para
            nuestros menús
          </p>
        </div>
      </Row>
      <Row className="justify-content-center nosotros">
        <h2 className="nosotros__títulos nosotros__títulos--negro">
          Nuestros objetivos Principales
        </h2>
        <Col xs={12} lg={3} className="nosotros__container--img">
          <Image
            className="nosotros__objetivos--images"
            src={image_valores}
            fluid
          />
          <p className="nosotros__objetivos">Mantener nuestro valores</p>
        </Col>
        <Col xs={12} lg={3} className="nosotros__container--img">
          <Image
            className="nosotros__objetivos--images"
            src={image_servicios}
            fluid
          />
          <p className="nosotros__objetivos">Excelencia en servicio</p>
        </Col>
        <Col xs={12} lg={3} className="nosotros__container--img">
          <Image
            className="nosotros__objetivos--images"
            src={image_calidad}
            fluid
          />
          <p className="nosotros__objetivos">Garantizar la calidad</p>
        </Col>
      </Row>
      <Row className="justify-content-center nosotros">
        <Col
          xs={{ order: 2, span: 12 }}
          md={{ order: 1, span: 6 }}
          className="nosotros__container--img"
        >
          <Image src={image_mision} rounded fluid />
        </Col>
        <Col
          xs={{ order: 1, span: 12 }}
          md={{ order: 2, span: 6 }}
          className="nosotros__container"
        >
          <h2 className="nosotros__títulos nosotros__títulos--negro">Misión</h2>
          <p className="nosotros__textos">
            Somos el proyecto ideal para satisfacer tus necesidades de alimentos
            saludables y sostenibles hechos con amor. Nos enorgullece ofrecer
            platos de alto nivel nutritivo que cuidan de tu bienestar y te
            brindan una experiencia culinaria excepcional.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center nosotros">
        <Col xs={12} md={6} className="nosotros__container">
          <h2 className="nosotros__títulos nosotros__títulos--negro">Visión</h2>
          <p className="nosotros__textos">
            Nos esforzamos por ser líderes en la creación de comida saludable y
            sostenible. Nuestro es generar ideas innovadoras, impulsando la
            tecnología y apostando por lo ecológico y orgánico.
          </p>
        </Col>
        <Col xs={12} md={6} className="nosotros__container--img">
          <Image src={image_vision} rounded fluid />
        </Col>
      </Row>
      <Row className="justify-content-center nosotros">
        <Row className="nosotros__futuro">
          <div className="nosotros__futuro--container">
            <div className="nosotros__container">
              <h2 className="nosotros__títulos">¿Qué buscamos?</h2>
              <p className="nosotros__textos nosotros__futuro--textos">
                Queremos ayudarte a llevar hábitos saludables, creando programas
                de fomentación a la comida natural. También promovemos, a nivel
                social, a optar por lo orgánico y saludable.
              </p>
            </div>
          </div>
          <Image
            className="nosotros__futuro--img"
            src={image_que_buscamos}
            fluid
          />
        </Row>
      </Row>
    </Container>
  );
}

export default Nosotros;
