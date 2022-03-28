import React from 'react'
import '/Users/stanleyglover/Desktop/personal_site/src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container,Col } from 'react-bootstrap';

export default function Navbars() {
  return (
    <Container fluid className='totalBar'> 
      <Col>
      <div className='Nav' class='fixed-top'>
        <Navbar bg="dark" expand="lg" mw-100  color='text-light'>
        <Container className='Navbars'>
          <Navbar.Brand href="#home" >React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link href="/home" >Home</Nav.Link>
              <Nav.Link href="/about" >About</Nav.Link>
              <Nav.Link href="/projects" >Projects</Nav.Link>
              <Nav.Link href="https://www.google.com/webhp?authuser=1" >Resume</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </Col>
    

   </Container>
   )
}
