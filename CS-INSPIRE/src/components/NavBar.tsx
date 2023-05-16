// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/PerceptionPause_logoNew.png'

function NavigationBar() {
    return ( 
        <Navbar className="m-0 p-0" style={{height: '100px'}} collapseOnSelect fixed="top" bg="dark" variant="dark" expand="md">
          <Container className="m-0 p-0 h-25">
            <Navbar.Brand href="/"><img className='w-75' src={logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="m-3" href="/roleplay">Explore</Nav.Link>
                <Nav.Link className="m-3" href="/articles">Articles</Nav.Link>
                <NavDropdown className="m-3 float-end" title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
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