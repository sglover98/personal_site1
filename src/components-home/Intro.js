import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from './Typewriter';
import Skull from "/Users/stanleyglover/Desktop/personal_site/src/assets/cyber-attack (1).png"

export default function intro() {
  return (
    <Container fluid className="Intro" id="about">
    <Container>
      <Row>
        <Col md={8} className="home-description">
          <h1 style={{ fontSize: "4.6em" }}>
            HI There👋🏾,
            <br/> I'm <span className="green-text"> Stan Glover </span>!
          </h1>
          <p className="Typewriter">
            <Typewriter/>
          </p>
        </Col>
        <Col md={4} className="Skull-col">
            <img src={Skull} className="Skull-fluid" alt="avatar" />
        </Col>
      </Row>
    
    </Container>
  </Container>

  )


            
}
