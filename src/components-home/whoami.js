import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import github from '/Users/stanleyglover/Desktop/personal_site/src/assets/github.png';
import linkedin from '/Users/stanleyglover/Desktop/personal_site/src/assets/linkedin.svg'
import cms from '/Users/stanleyglover/Desktop/personal_site/src/assets/cms.png'

export default function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green-text"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              They say a jack of all trades is a master of none...but still better than a master of one.
              <br />
              <br />I am an avid lover of technology
            
              <b className="green-text"> When it comes to programming my primary languages are </b>
             <i>
                    <b className="green-text"> Html, Css, Javascript, Java, and React. </b>

              </i>
              <br />
              <br />
              My field of Interest range from  <b className="green-text">Software Development, Cloud Solution Architecting, and Cybersecurity</b>&nbsp;
              <i>
                <b> While my interest are vast,  <b className="green-text">Web Technologies</b> have a special place in my heart </b> from
                {" "}
                <b className="green-text">
                  writing the code all the way to setting up the underlying architecture!
                </b>
              </i>
              <br />
              <br />
              Whenever possible I am always working to develop my skill set, whether that be in arena of  <b className="green-text">Software Development</b> or <b className="green-text">Cyber</b> .  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={cms} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="green">connect </span>with me via email @ <b className=" green-text">sglover29@liberty.edu</b> OR
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
               <a href="https://github.com/sglover98 " rel="noopener noreferrer" alt="" target="_blank">               
                <img src={github} alt=""/>
                </a>

              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                >
                    <img src={linkedin} className='linkedin' alt=""/>
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}