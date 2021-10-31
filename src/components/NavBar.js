import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">TUTORIALES</Navbar.Brand>   
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/agregar">Agregar Nuevo</Nav.Link>
        </Nav>
      </Navbar.Collapse>   
    </Navbar>
  );
};

export default NavBar;
