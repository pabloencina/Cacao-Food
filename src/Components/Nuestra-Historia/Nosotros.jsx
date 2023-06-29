import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Nosotros() {
    return (
        <Container fluid>
            <Row className="justify-content-center nosotros">
                <h2 className="nosotros__titulos">Sobre Nosotros</h2>
                <Col xs={12} lg={6} className='nosotros__container'>
                    <p>
                        Es muy común encontrar almuerzos o comidas con bajos
                        niveles nutritivos, es por ello que siempre a la hora de
                        almorzar en un día caluroso lleno trabajo, buscamos la
                        mejor opción.
                        El cacao se caracteriza por tener un olor y sabor
                        inigualable es por eso que usamos esa palabra para
                        definirnos. Porque nos inspira a ser inigualables sabiendo
                        el placer del verdadero comer.
                        Nos motiva saber Que nos preparamos y contamos con
                        los mejores proveedores del mercado
                        Orientamos a Quienes manejan hábitos de alimentación
                        saludable para crear programas de fomentación a lo
                        natural. También promovemos a nivel social al optar por
                        lo orgánico y Saludable.
                    </p>
                </Col>
                <Col xs={12} lg={6} className='nosotros__container--img'>
                    <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
                </Col>
            </Row>
            <Row className="justify-content-center nosotros">
                <h2 className="nosotros__titulos">Misión</h2>
                <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 6 }} className='nosotros__container--img'>
                    <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
                </Col>
                <Col xs={{ order: 1, span: 12 }} md={{ order: 2, span: 6 }} className='nosotros__container'>
                    <p>
                        Somos un restaurante que abastece la necesidad de
                        aportar platos hechos con amor y un alto nivel
                        nutritivo. Capaces de satisfacer las necesidades de nuestro
                        consumidores, quienes buscan esa opción de lo fresco y
                        natural. Impulsando el buen cuidado del organismo.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center nosotros">
                <h2 className="nosotros__titulos">Visión</h2>
                <Col xs={12} md={6} className='nosotros__container'>
                    <p>
                        Nuestro objetivo principal es ser Líder en la
                        elaboración de comida saludable en toda la Región.
                        Crearemos canales de distribución ecológicos para ser
                        esa opción que se encuentra al alcance de todos.
                        Seremos líderes en cuanto a innovación. Fomentando la
                        tecnología, lo ecológico y lo orgánico.
                    </p>
                </Col>
                <Col xs={12} md={6} className='nosotros__container--img'>
                    <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
                </Col>
            </Row>
            <Row className="justify-content-center nosotros">
                <h2 className="nosotros__titulos">Proyectos Futuros</h2>
                <Image src="/multimedia/imagen_prueba.jpg" rounded fluid />
            </Row>
        </Container>
    );
}

export default Nosotros;