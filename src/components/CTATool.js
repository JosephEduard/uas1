import React, { useState } from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../style/menu.css";

const CTATool = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputText); // Mengirim teks ke komponen induk
  };

  const handleChange = (e) => {
    setInputText(e.target.value); // Update nilai input
  };

  return (
    <Navbar className="x-navbar">
      <Container className="x-navbar">
        <div className="x-cta-group">
          <ul className="x-cta-tool">
            <li className="x-cta-tool-list">
              <Link to={`/home`}>Home</Link>
            </li>
            <li className="x-cta-tool-list">
              <Link to={`/wishlist`}>Wishlist</Link>
            </li>
            <li>
              <a href="#footer-menu" className="x-cta-tool-list">
                About Us
              </a>
            </li>
            <li>
              <a href="#footer-menu" className="x-cta-tool-list">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Form className="d-flex x-search-group" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search For Game"
              className="me-2 rounded-lg pl-[5px]"
              aria-label="Search"
              value={inputText}
              onChange={handleChange}
            />
            <Link to={"/searchlist"}>
              <Button variant="dark" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Link>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
};

export default CTATool;
