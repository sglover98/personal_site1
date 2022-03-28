import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiHtml5,
  DiBootstrap,
  DiWordpress,
  DiJava,
  DiCss3Full,
} from "react-icons/di";
import {
  SiTailwindcss,
} from "react-icons/si";

export default function Techstack() {
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "10vh", top: '30vh', position: "relative"}}>
        <h1 className="TechStack" style={{justifyContent:"center" , position: "relative"}}>Software Skills</h1>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <br/>
      <br/>
      <br/>
      <br/>

    </Row>

    
  );
}