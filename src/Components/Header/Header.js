import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
const Header = () => {
    return (
        
            <Navbar className="color" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand as={NavLink} to="/home">Edu Care</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
        <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    );
};

export default Header;