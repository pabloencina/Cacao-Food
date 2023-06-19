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
      <div className="d-flex justify-content-end" style={{ width: "400px" }}>
        <Button
          onClick={handleOnClick}
          style={{ backgroundColor: "inherit", border: "none" }}
        >
          <img
            title="Búsqueda"
            className="searchButton"
            src={search}
            alt="search"
          />
        </Button>
        {showInput && (
          <Form.Control
            //onSubmit={handleSubmit}
            style={{ width: "300px" }}
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
