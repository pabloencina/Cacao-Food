import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Clientes() {
    return (
        <Container fluid>
            <Row className="justify-content-center clientes">
                <h2 className='clientes__titulos'>Nuestros Clientes</h2>
                <Col xs={5} className='clientes__nuestrosClientesContainer'>
                    <p className='clientes__nuestrosClientesContainer--texto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula fermentum, suscipit est congue, eleifend neque. Vestibulum tempus, sem in tincidunt lobortis, ligula tortor consectetur tortor, a gravida mauris justo ac diam.
                    </p>
                </Col>
                <Col xs={5} md={4} className='clientes__nuestrosClientesContainer'>
                    <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
                </Col>
            </Row>
            <Row className="justify-content-center clientes">
                <h2 className='clientes__titulos'>Sus opiniones</h2>
                <Col xs={3} className='clientes__clienteContainer'>
                    <Row className='clientes__clienteContainer--perfil'>
                        <Col xs={5}>
                            <Image src="/multimedia/imagen_prueba.jpg" roundedCircle fluid />
                        </Col>
                        <Col xs={7}>
                            <h3>Nombre</h3>
                            <p>Texto</p>
                        </Col>
                    </Row>
                    <Row>
                        <h3>Título</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula fermentum, suscipit est congue, eleifend neque. Vestibulum tempus, sem in tincidunt lobortis, ligula tortor consectetur tortor, a gravida mauris justo ac diam.
                        </p>
                    </Row>
                </Col>
                <Col xs={3} className='clientes__clienteContainer'>
                    <Row className='clientes__clienteContainer--perfil'>
                        <Col xs={5}>
                            <Image src="/multimedia/imagen_prueba.jpg" roundedCircle fluid />
                        </Col>
                        <Col xs={7}>
                            <h3>Nombre</h3>
                            <p>Texto</p>
                        </Col>
                    </Row>
                    <Row>
                        <h3>Título</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula fermentum, suscipit est congue, eleifend neque. Vestibulum tempus, sem in tincidunt lobortis, ligula tortor consectetur tortor, a gravida mauris justo ac diam.
                        </p>
                    </Row>
                </Col>
                <Col xs={3} className='clientes__clienteContainer'>
                    <Row className='clientes__clienteContainer--perfil'>
                        <Col xs={5}>
                            <Image src="/multimedia/imagen_prueba.jpg" roundedCircle fluid />
                        </Col>
                        <Col xs={7}>
                            <h3>Nombre</h3>
                            <p>Texto</p>
                        </Col>
                    </Row>
                    <Row>
                        <h3>Título</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula fermentum, suscipit est congue, eleifend neque. Vestibulum tempus, sem in tincidunt lobortis, ligula tortor consectetur tortor, a gravida mauris justo ac diam.
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Clientes;