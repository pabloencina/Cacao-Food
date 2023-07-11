import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import shoppingCart from "../../Images/shopping-cart.svg";
import Search from "./Search";
import { useState } from "react";
import dataMenu from "../../Data/dataMenu";
import "../../Css/active.css";
import { Link, NavLink } from "react-router-dom";

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
      <Navbar.Brand
        href="/"
        activeClassName="active"
        className="navbar__container_logo"
      >
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
            <Link href="">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Search onSearch={handleSearch} />
                {searchResults.map((menu) => (
                  <div key={menu.id}>{menu.name}</div>
                ))}
                <Link>
                  <div className="navbar__shoppingCart">
                    <img
                      src={shoppingCart}
                      alt="shoppingCart"
                      title="Carrito de Compras"
                    />
                  </div>
                </Link>
              </div>
            </Link>

            <Link
              className="navbar__mi_perfil"
              to={"/mi-perfil"}
              href="/mi-perfil"
            >
              Mi Perfil
            </Link>
          </Container>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
