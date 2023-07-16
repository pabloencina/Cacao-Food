//import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <Container>
      <Link className="search__button">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="navbar__search"
          title="Búsqueda"
        />
      </Link>
    </Container>
  );
};

export default Search;
