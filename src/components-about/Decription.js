import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "react-lottie";
import Hacker from '/Users/stanleyglover/Desktop/personal_site/src/assets/lottie/lf20_bbfdul3x.json'

export default function description() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Hacker,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <Container fluid className="Des1">
      <Container className="Des">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Get To Know  <span className="green-text"> Me </span> 👋🏾
            </h1>
            <br/>
            <p className="body" style={{fontSize:"1em"}}>
                Hi as you have seen by now I am <b className="green-text">Stan</b>.
                
              <br /> I am a Masters student pursuing MS in <b className="green-text">IT</b> and  <b className="green-text">Software Design </b>

              <br/>
              <br/>

            
              <b className=""> Outside of tech, what else do I like to do?! </b>

            </p>
            <ul>
            <li className="about-activity">
               -Rugby 
            </li>
            <li className="about-activity">
              -Capture The Flag
            </li>
            <li className="about-activity">
              -OSINT
            </li>
            <li className="about-activity">
              -Business 
            </li>
            <li className="about-activity">
              -Crypto 
            </li>

          </ul>
          </Col>
          <Col md={4} className="myAvtar">
          <Lottie options={defaultOptions} />
      </Col>
        </Row>
        
      </Container>
    </Container>
  );
}