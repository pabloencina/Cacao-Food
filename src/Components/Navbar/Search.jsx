import React, { useState } from "react";
import search from "../../Images/search.svg";
import { Button, Container, Form } from "react-bootstrap";

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOnClick = (e) => {
    console.log("clickme");
    setShowInput(!showInput);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

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
