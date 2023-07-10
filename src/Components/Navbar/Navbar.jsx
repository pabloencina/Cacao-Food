import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import shoppingCart from "../../Images/shopping-cart.svg";
import Search from "./Search";
import { useState } from "react";
import dataMenu from "../../Data/dataMenu";
import "../../Css/active.css";
import { NavLink } from "react-router-dom";

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
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/" activeClassName="active">
          Cacao Food
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar__container_button">
            <NavLink
              className="navbar__link"
              to={"/"}
              href="/"
              activeClassName="active"
            >
              Inicio
            </NavLink>
            <NavLink
              className="navbar__link"
              to={"/menu"}
              href="menu"
              activeClassName="active"
            >
              Menú
            </NavLink>
            <NavLink
              className="navbar__link"
              to={"/nuestra-historia"}
              href="nuestra-historia"
              activeClassName="active"
            >
              Nuestra Historia
            </NavLink>
            <NavLink
              className="navbar__link"
              to={"/clientes"}
              href="clientes"
              activeClassName="active"
            >
              Clientes
            </NavLink>
            <NavLink
              className="navbar__link"
              to={"/contactanos"}
              href="contactanos"
              activeClassName="active"
            >
              Contáctenos
            </NavLink>
          </Nav>
          <Nav>
            <Container className="navbar__container_icons_buttons">
              <NavLink href="">
                <div className="d-flex justify-content-end">
                  <Search onSearch={handleSearch} />
                  {searchResults.map((menu) => (
                    <div key={menu.id}>{menu.name}</div>
                  ))}
                  <NavLink>
                    <div className="navbar__shoppingCart">
                      <img
                        src={shoppingCart}
                        alt="shoppingCart"
                        title="Carrito de Compras"
                      />
                    </div>
                  </NavLink>
                </div>
              </NavLink>

              <NavLink
                className="navbar__mi_perfil"
                to={"/mi-perfil"}
                href="/mi-perfil"
              >
                Mi Perfil
              </NavLink>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
