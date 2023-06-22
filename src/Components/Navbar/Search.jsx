import React, { useState } from "react";
import search from "../../Images/search.svg";
import { Button, Container, Form } from "react-bootstrap";

const Search = ({ onSearch }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOnClick = (e) => {
    setShowInput(!showInput);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(inputValue);
  //   console.log("hola");
  // };

  return (
    <Container>
      <div className="search__container">
        <Button onClick={handleOnClick} className="search__button">
          <img
            title="Búsqueda"
            className="navbar__search"
            src={search}
            alt="search"
            //style={{ width: "25px" }}
          />
        </Button>
        {showInput && (
          <Form.Control
            //onSubmit={handleSubmit}
            className="search__input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Buscar menú"
          />
        )}
      </div>
    </Container>
  );
};

export default Search;
