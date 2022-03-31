import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiAws,
  DiLinux,
} from "react-icons/di";
import {
    SiAwsamplify,
} from "react-icons/si";

export default function itStack() {
  return (

    <Row className="Techrow" style={{ justifyContent: "center", paddingBottom: "50vh", top: '40vh', position: "relative"}}>
        <h1 style={{justifyContent:"center" , position: "relative"}} className='ITSkills'>IT/Networking Skills</h1>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAwsamplify />
      </Col>

    </Row>

    
  );
}