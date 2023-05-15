// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/PerceptionPause_logo.png'

function NavigationBar() {
    return ( 
        <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/home"><img className='' src={logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/roleplay">Explore</Nav.Link>
                <Nav.Link href="/articles">Articles</Nav.Link>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Log Out </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavigationBar