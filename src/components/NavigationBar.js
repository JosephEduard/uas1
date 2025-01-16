import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../style/menu.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import React, { useContext, useState, useEffect } from "react";
import ProfileDropdown from "./ProfileDropdown";

const NavigationBar = () => {
  const { getCartItemsCount } = useContext(CartContext);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Link to={"/home"}>
          <Navbar.Brand>Retro Hub</Navbar.Brand>
        </Link>
        <div className="x-icons-group">
          <div className="x-nav-icon">
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="xl"
                className="x-icon"
              />
            </Link>
            <div className="x-nav-tool">
              <span>{getCartItemsCount()} item</span>
            </div>
          </div>
          <ProfileDropdown />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
