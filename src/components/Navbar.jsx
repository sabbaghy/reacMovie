import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Logo = "../../src/assets/img/logos/tg-logo.png";

const MyNavbar = () => {
   return (
      <>
         <Navbar
            bg="primary"
            variant="dark"
            expand="lg"
            className="animate-navbar nav-theme justify-content-between"
         >
            <Navbar.Brand href="#home">
               <img className="logo" src={Logo} alt="Taguara Digital Logo" width="90px" />
            </Navbar.Brand>
    
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto ">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Skills</Nav.Link>
                  <Nav.Link href="#">Experience</Nav.Link>
                  <Nav.Link href="#">Projects</Nav.Link>
                  <Nav.Link href="#">Contact</Nav.Link>
               </Nav>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar.Collapse>
         </Navbar>
      </>
   );
}

export default MyNavbar
