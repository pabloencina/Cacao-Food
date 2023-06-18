import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../../Css/search.css";
import shoppingCart from "../../Images/shopping-cart.svg";
import "../../Css/shoppingCart.css";
import Search from "./Search";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand title="Inicio" href="inicio">
            Logo
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="inicio">Inicio</Nav.Link>
            <Nav.Link href="menu">Menú</Nav.Link>
            <Nav.Link href="nuestra-historia">Nuestra historia</Nav.Link>
            <Nav.Link href="clientes">Clientes</Nav.Link>
            <Nav.Link href="contactanos">Contáctenos</Nav.Link>
          </Nav>
        </Container>
        <Container>
          <Nav.Link style={{ width: "450px" }} href="">
            <div className="d-flex justify-content-end">
              <Search />
              <div className="d-flex justify-content-end">
                <img
                  className="shoppingCartButton"
                  src={shoppingCart}
                  alt="shoppingCart"
                  title="Carrito de Compras"
                />
              </div>
            </div>
          </Nav.Link>

          <Nav.Link href="#home" style={{ width: "100px" }}>
            Mi perfil
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
