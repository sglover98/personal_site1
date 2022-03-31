import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./components-projects/ProjectCard";
import WeatherApp from '../src/assets/Screen Shot 2022-03-26 at 7.55.03 PM.png'
import MagicBall from "../src/assets/Screen Shot 2022-03-28 at 1.42.31 PM.png"
import Pokedex from "../src/assets/Screen Shot 2022-03-28 at 1.47.11 PM.png";
import Port from "../src/assets/Screen Shot 2022-03-28 at 3.31.45 PM.png"




export default function Project() {
  return (
      <div className="App">
        <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} className="pro-des">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Port}
              isBlog={false}
              title="EAM Design Resume/ Portfolio Website"
              description="Designed using Figma and built using HTML, CSS, and JS.  Website resume built for recent college graduate to encompass all the information they wished to present to employers including portfolio projects. "
              link="https://chimerical-figolla-3198cf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Weather App"
              description="Weather App built with React.js. This application utilizes a weather API to provide live weather updates based on the location inputed in the search bar. The application background also changes based on the termparture. "
              link="https://weather-app-sglover98.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pokedex}
              isBlog={false}
              title="Pokedex"
              description="This application is built with React.js and uses Axios to intergrate a Pokedex api. This application is a simple application that intergrates the Pokedex API into a simple react app. "
              link="https://github.com/sglover98/Pokedex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MagicBall}
              isBlog={false}
              title="Magic-8-Ball"
              description="The Magic 8 ball web app is built with basic Html and JS. This app allow you to type a question into the ball and returned an answer via the Yes/No API"
              link="https://magic8ball-rose.vercel.app/"
            />
          </Col>

      

         
    
        </Row>
      </Container>
    </Container>
    </div>
    
  );
}
