import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css';

function Navigation() {
    const [activeLink, setActiveLink] = useState("stories");

    const handleSelect = (eventKey) => {
        setActiveLink(eventKey);
    };

    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="/">
                    <img src={'../assets/shared/desktop/logo.svg'} alt="logo-black" className="header-logo-img" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="navbar-toggler-icon"
                    onClick={() => {
                        document.body.classList.toggle('nav-open');
                        document.querySelector('.navbar-toggler-icon').classList.toggle('active');
                    }}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-list" activeKey={activeLink} onSelect={handleSelect}>
                        <Nav.Link href="../assets/stories.html" eventKey="stories">STORIES</Nav.Link>
                        <Nav.Link href="../assets/features.html" eventKey="features">FEATURES</Nav.Link>
                        <Nav.Link href="../assets/pricing.html" eventKey="pricing">PRICING</Nav.Link>
                    </Nav>
                    <Button variant="dark" className="dark-button">
                        GET AN INVITE
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
