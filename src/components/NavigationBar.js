import { Navbar, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "../style/menu.css"

const NavigationBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>Retro Hub</Navbar.Brand>
                <div className="x-icons-group">
                    <div className="x-nav-icon">
                        <FontAwesomeIcon icon={faUser} size="xl" className="x-icon"/>
                        <div className="x-nav-tool">
                            <span>Sign In</span>
                        </div>
                    </div>
                    <div className="x-nav-icon">
                        <FontAwesomeIcon icon={faCartShopping} size="xl" className="x-icon"/>
                        <div className="x-nav-tool">
                            <span>0 Items</span>
                        </div>
                    </div>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavigationBar