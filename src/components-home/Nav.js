import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skull1 from "../assets/cyber-attack (1).png"
import { Nav, Navbar, Container,Col } from 'react-bootstrap';

export default function Navbars() {
  return (
    <Container fluid className='totalBar'> 
      <Col>
      <div className='Nav' class='fixed-top'>
        <Navbar bg="dark" expand="lg" mw-100  color='text-light'>
        <Container className='Navbars'>
          <Navbar.Brand href="#home" > <img src={Skull1} className="Skull1" alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='burger' />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link href="/home" >Home</Nav.Link>
              <Nav.Link href="/about" >About</Nav.Link>
              <Nav.Link href="/projects" >Projects</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1lc1Mwn6JLJv7z3Zd5kTCrKYBRlv_Tsv7/view?usp=sharing" >Resume</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </Col>
    

   </Container>
   )
}
