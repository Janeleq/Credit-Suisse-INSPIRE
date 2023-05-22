// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/PerceptionPause_logoNew.png'
import '../styles/_navbar.css'
import {Helmet} from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');


function NavigationBar() {
    return ( 
      <>
        <Navbar className="m-0 p-0 " style={{font: 'arial',  height: '100px'}} collapseOnSelect fixed="top" bg="light" variant="light" expand="md">
          <Container className="m-0 p-0 h-25">
            <Navbar.Brand href="/"><img className='w-75' src={logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-dark" style={{right:'0px'}}>
                <Nav.Link className="m-3" href="/explore">Explore</Nav.Link>
                <Nav.Link className="m-3" href="/articles">Articles</Nav.Link>
                <NavDropdown className="m-3 float-end" title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/login">Log Out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
        // <div> 
        //   <nav>
        //     <div className="nav-bar">
        //     <FontAwesomeIcon icon="check-square" />
        //       <i className='bx bx-menu sidebarOpen'></i>
        //       <span className="logo navLogo"><a href="#">CodingLab</a></span>

        //       <div className="menu">
        //         <div className="logo-toggle">
        //           <span className="logo"><a href="#">CodingLab</a></span>
        //           <i className='bx bx-x siderbarClose'></i>
        //         </div>

        //         <ul className="nav-links">
        //           <li><a href="#">Home</a></li>
        //           <li><a href="#">About</a></li>
        //           <li><a href="#">Portfolio</a></li>
        //           <li><a href="#">Services</a></li>
        //           <li><a href="#">Contact</a></li>
        //         </ul>
        //       </div>

        //       <div className="darkLight-searchBox">
        //         <div className="dark-light">
        //           <i className='bx bx-moon moon'></i>
        //           <i className='bx bx-sun sun'></i>
        //         </div>

        //         <div className="searchBox">
        //           <div className="searchToggle">
        //             <i className='bx bx-x cancel'></i>
        //             <i className='bx bx-search search'></i>
        //           </div>

        //           <div className="search-field">
        //             <input type="text" placeholder="Search..."/>
        //               <i className='bx bx-search'></i>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </nav>
        
        // </div>
      );
}

export default NavigationBar