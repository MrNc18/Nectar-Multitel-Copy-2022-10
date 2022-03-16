import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function Menubar() {
  return (
    <Navbar expand="lg" variant="light" bg="white">
        <Container>
            <Navbar.Brand href="#">
                <img
                    src="/assets/images/logo.png"
                    className="d-inline-block align-top"
                    alt="Multitel logo"
                />    
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Home" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Home Internet services</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Landline Telephony</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">TV Services</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Multitel-Celular (MVNO)</Nav.Link>
                    <Nav.Link href="#home">Marketplace</Nav.Link>
                    <Nav.Link href="#link">Client Portal</Nav.Link>
                    <Nav.Link href="#link">Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Menubar
