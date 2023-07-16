//import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onSearch }) => {
  // const [showInput, setShowInput] = useState(false);
  // const [inputValue, setInputValue] = useState("");

  // const handleOnClick = (e) => {
  //   setShowInput(!showInput);
  // };

  // const handleInputChange = (e) => {
  //   console.log(e.target.value);
  //   setInputValue(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(inputValue);
  //   console.log("hola");
  // };

  return (
    <Container>
      <div className="search__container">
        <Button
          //onClick={handleOnClick}
          className="search__button"
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="navbar__search"
            title="Búsqueda"
          />
        </Button>
        {/* {showInput && (
          <Form.Control
            onSubmit={handleSubmit}
            className="search__input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Buscar menú"
          />
        )} */}
      </div>
    </Container>
  );
};

export default Search;
