// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/PerceptionPause_newlogo.png'
// import '../styles/_navbar.css'
// import {Helmet} from 'react-helmet'
// import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
import {useState, useEffect} from 'react'
import { getAuth } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/lightDark.css'


function NavigationBarLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  

  
  useEffect (() => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        setEmail(profile.email)
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
  })

  function goHome () {
    console.log("Heading to home page!")
    navigate("/home", {state: {email: email}})
  }

  function goExplore () {
    console.log("Heading to explore page!")
    navigate("/explore", {state: {email: email}})
  }

  function goCommunity () {
    console.log("Heading to community page!")
    navigate("/community", {state: {email: email}})
  }

  function goArticles () {
    console.log("Heading to articles page!")
    navigate("/articles", {state: {email: email}})
  }

  
  function goPodcasts () {
    console.log("Heading to podcasts page!")
    navigate("/podcasts", {state: {email: email}})
  }

  
  function goHelp () {
    console.log("Heading to help page!")
    navigate("/help", {state: {email: email}})
  }

  function goProfile () {
    console.log("Heading to profile page!")
    navigate("/profile", {state: {email: email}})
  }
 
  function goQuizzes () {
    console.log("Heading to quizzes page!")
    navigate("/quiz", {state: {email: email}})
  }


    return ( 
      <>
        <Navbar className="p-0 bg-light" style={{zIndex: '', height: 'auto'}} collapseOnSelect fixed="top" bg="light" variant="light" expand="md">
          {/* <Container className="m-0 p-0 h-25"> */}
            <Navbar.Brand onClick = {goHome}><img className='' src={logo} style={{width: '40%', marginLeft: '8px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{height: '15%'}} />
            <Navbar.Collapse className=""id="basic-navbar-nav" style={{zIndex: 'auto  '}} >
              <Nav className="me-auto text-dark" style={{right:'0px'}}>
                <Nav.Link className="m-3" style={{fontWeight: '500'}} onClick = {goExplore}>Explore</Nav.Link>
                <Nav.Link className="m-3" style={{fontWeight: '500'}} onClick={goCommunity}>Community</Nav.Link>

                <Nav.Link className="m-3" style={{fontWeight: '500'}} onClick={goHelp}>Help</Nav.Link>
                <NavDropdown className="m-3 float-end" style={{display: 'block', fontWeight: '500'}} title="Resources" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={goArticles}>Articles</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={goPodcasts}>Podcasts</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={goQuizzes}>Quizzes</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="m-3 float-end" style={{display: 'block'}} title={email} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={goProfile}>Details</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/login">Edit Profile</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
        </>
      );
}

export default NavigationBarLogin