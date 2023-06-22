import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import shoppingCart from "../../Images/shopping-cart.svg";
import Search from "./Search";
import { useState } from "react";
import dataMenu from "../../Data/dataMenu";

function NavbarComponent() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    console.log(query);
    dataMenu.filter((menu) =>
      menu.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(dataMenu);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="menu">Menú</Nav.Link>
            <Nav.Link href="nuestra-historia">Nuestra Historia</Nav.Link>
            <Nav.Link href="clientes">Clientes</Nav.Link>
            <Nav.Link href="contactanos">Contáctenos</Nav.Link>
          </Nav>
          <Nav>
            <Container className="navbar__container_icons_buttons">
              <Nav.Link href="">
                <div className="d-flex justify-content-end">
                  <Search onSearch={handleSearch} />
                  {searchResults.map((menu) => (
                    <div key={menu.id}>{menu.name}</div>
                  ))}
                  <Nav.Link>
                    <div className="navbar__shoppingCart">
                      <img
                        src={shoppingCart}
                        alt="shoppingCart"
                        title="Carrito de Compras"
                      />
                    </div>
                  </Nav.Link>
                </div>
              </Nav.Link>

              <Nav.Link href="#home" className="navbar__container_mi_perfil">
                Mi perfil
              </Nav.Link>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
