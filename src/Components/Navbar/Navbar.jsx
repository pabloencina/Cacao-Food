import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Search from "./Search";
import { useState } from "react";
import dataMenu from "../../Data/dataMenu";
import "../../Css/active.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logoCacaoFood from "../../Images/Logo/Logo/Group 2logo2Cacao.png";

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
        <img src={logoCacaoFood} alt="Logo CacaoFood" />
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
            Contáctanos
          </NavLink>
        </Nav>
        <Nav>
          <div className="navbar__container_icons_buttons">
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
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="navbar__shoppingCart"
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
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
