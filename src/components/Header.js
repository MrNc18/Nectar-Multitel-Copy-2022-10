import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { mobile } from "../svg/mobile";
import { multilingual } from "../svg/multilingual";
import { user } from "../svg/user";

function Header() {
  return (
    <>
    <div id="top_header">
      <Container>
        <Row>
          <Col md={5}>
            <ul className="d-flex justify-content-between header-ul pt-1">
              <li>
                <span className="fw-500">Current Time :</span> 12:30 PM
              </li>
              <li>
                {mobile} <span className="fw-500">Contact Us :</span>{" "}
                985-236-854-558
              </li>
            </ul>
          </Col>
          <Col md={7}>
            <ul className="d-flex justify-content-between header-right-ul">
              <li>
                <div className="searchtop">
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Here..."
                      name="search"
                      id="search"
                    />
                    <button type="submit" className="input-group-text">
                      <i className="fa-solid fa-magnifying-glass white-color"></i>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="multilingual d-flex">
                  {multilingual}
                  <select name="langs" id="langs" className="ml-1">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="multilingual d-flex pt-1">
                  <span className="fw-500">City:</span>
                  <select name="city" id="city" className="ml-1">
                    <option value="france">France</option>
                    <option value="spain">Spain</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="d-flex pt-1">
                  {user} <span className="ml-1">Login/Signup</span>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>

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
    </>
  )
}

export default Header
