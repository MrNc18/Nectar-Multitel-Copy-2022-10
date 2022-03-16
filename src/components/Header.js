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
import Topbar from './header/Topbar';
import Menubar from './header/Menubar';

function Header() {
  return (
    <>    
      <Topbar />
      <Menubar />
    </>
  )
}

export default Header
