import { Navbar, Container, Form, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "../style/menu.css"

const CTATool = () => {
    return (
        <Navbar className="x-navbar">
            <Container className="x-navbar">
                <div className="x-cta-group">
                    <ul className="x-cta-tool">
                        <li><a href="#footer-menu" className="x-cta-tool-list">Home</a></li>
                        <li><a href="#footer-menu" className="x-cta-tool-list">Whistlist</a></li>
                        <li><a href="#footer-menu" className="x-cta-tool-list">About Us</a></li>
                        <li><a href="#footer-menu" className="x-cta-tool-list">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <Form className="d-flex x-search-group">
                        <Form.Control
                            type="search"
                            placeholder="Search For Game"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="dark "><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                    </Form>
                </div>
            </Container>
        </Navbar>

    )
}

export default CTATool