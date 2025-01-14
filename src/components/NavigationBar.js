import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../style/menu.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
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
              <span>0 Items</span>
            </div>
          </div>
          <div className="x-nav-icon">
            <FontAwesomeIcon icon={faUser} size="xl" className="x-icon" />
            <div className="x-nav-tool">
              <span>Account</span>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
