import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import shoppingCart from "../../Images/shopping-cart.svg";
import close from "../../Images/close.svg";
import menuBurger from "../../Images/menuBurger.svg";
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
    <>
      <Navbar expand="lg" bg="light" variant="light" className="navbar">
        <Container className="menuBurger__container">
          <Nav.Link className="menuBurger__icon_burger">
            <div className="navbar__shoppingCart">
              <img
                src={menuBurger}
                alt="Menu burger"
                //title="Carrito de Compras"
              />
            </div>
          </Nav.Link>
          <Nav.Link className="menuBurger__icon_close">
            <div className="navbar__shoppingCart">
              <img src={close} alt="Close" title="cerrar" />
            </div>
          </Nav.Link>
        </Container>
        <Container fluid>
          <Navbar.Brand title="Inicio" href="/">
            Logo
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="menu">Menú</Nav.Link>
            <Nav.Link href="nuestra-historia">Nuestra Historia</Nav.Link>
            <Nav.Link href="clientes">Clientes</Nav.Link>
            <Nav.Link href="contactanos">Contáctenos</Nav.Link>
          </Nav>
        </Container>
        <Container className="navbar__container_icons_buttons">
          <Nav.Link href="">
            <div className="d-flex justify-content-end">
              <Search onSearch={handleSearch} />
              {searchResults.map((menu) => (
                <div key={menu.id}>{menu.name}</div>
              ))}
              <div className="navbar__shoppingCart">
                <img
                  src={shoppingCart}
                  alt="shoppingCart"
                  title="Carrito de Compras"
                />
              </div>
            </div>
          </Nav.Link>

          <Nav.Link href="#home" className="navbar__container_mi_perfil">
            Mi perfil
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
