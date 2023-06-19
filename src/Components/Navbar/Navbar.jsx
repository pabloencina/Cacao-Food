import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../Css/search.css";
import shoppingCart from "../../Images/shopping-cart.svg";
import "../../Css/shoppingCart.css";
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
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand title="Inicio" href="inicio">
            Logo
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="inicio">Inicio</Nav.Link>
            <Nav.Link href="menu">Menú</Nav.Link>
            <Nav.Link href="nuestra-historia">Nuestra Historia</Nav.Link>
            <Nav.Link href="clientes">Clientes</Nav.Link>
            <Nav.Link href="contactanos">Contáctenos</Nav.Link>
          </Nav>
        </Container>
        <Container>
          <Nav.Link
            style={{
              width: "450px",
              marginLeft: "30px",
            }}
            href=""
          >
            <div className="d-flex justify-content-end">
              <Search onSearch={handleSearch} />
              {searchResults.map((menu) => (
                <div key={menu.id}>{menu.name}</div>
              ))}
              <div
                className="d-flex justify-content-end"
                style={{ alignItems: "center" }}
              >
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
