// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/PerceptionPause_newlogo.png'
// import '../styles/_navbar.css'
// import {Helmet} from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');


function NavigationBarLogin() {
    return ( 
      <>
        <Navbar className="p-0 mb-5" style={{height: 'auto', overflow: 'hidden'}} collapseOnSelect fixed="top" bg="light" variant="light" expand="md">
          {/* <Container className="m-0 p-0 h-25"> */}
            <Navbar.Brand href="/"><img className='' src={logo} style={{width: '40%', marginLeft: '8px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{height: '15%'}} />
            <Navbar.Collapse className=""id="basic-navbar-nav">
              <Nav className="me-auto text-dark" style={{right:'0px'}}>
                <Nav.Link className="m-3" href="/explore">Explore</Nav.Link>
                <Nav.Link className="m-3" href="/community">Community</Nav.Link>
                <Nav.Link className="m-3" href="/articles">Articles</Nav.Link>
                <Nav.Link className="m-3" href="/resources">Resources</Nav.Link>
                <Nav.Link className="m-3" href="/help">Help</Nav.Link>
                <NavDropdown className="m-3 float-end" title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Details</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/login">Log Out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
        </>
      );
}

export default NavigationBarLogin