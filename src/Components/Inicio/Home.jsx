import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function Home() {
    return (
        <Container fluid>
            <Row className="justify-content-center home">
                <Col xs={5} className='home__presentacion home__division'>
                    <h2>Tu comida favorita, saludable y al instante</h2>
                    <p>Te gusta comer saludable y aún no encontraste la solución, no te preocupes, nosotros en un clic te los solucionamos.</p>
                    <Button variant="light" className='home__presentacion--button'>Elegir mi menú</Button>
                </Col>
                <Col xs={5} md={4} className='home__division'>
                    <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
                </Col>
            </Row>
            <Row className="justify-content-center home">
                <h2 className='home__titulo'>Platos destacados</h2>
                <Col xs={3} className='home__plato'>
                    <Row>
                        <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
                    </Row>
                    <Row>
                        <p>Plato: Texto descriptivo</p>
                    </Row>
                </Col>
                <Col xs={3} className='home__plato'>
                    <Row>
                        <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
                    </Row>
                    <Row>
                        <p>Plato: Texto descriptivo</p>
                    </Row>
                </Col>
                <Col xs={3} className='home__plato'>
                    <Row>
                        <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
                    </Row>
                    <Row>
                        <p>Plato: Texto descriptivo</p>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center home">
                <h2 className='home__titulo'>Nosotros</h2>
                <p className='home__texto'>Conocé sobre nosotros, nuestra historia y proyectos futuros</p>
                <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
            </Row>
        </Container>
    );
}

export default Home;