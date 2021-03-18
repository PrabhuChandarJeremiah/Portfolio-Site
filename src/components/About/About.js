import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              ABOUT <strong className="purple">ME</strong>
            </h1>
            <Aboutcard />
          </Col>

        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <br/>
        <h3>
          Web Development
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-angularjs-plain colored" />
          <Techstack iconName="devicon-java-plain-wordmark" />
          <Techstack iconName="devicon-html5-plain-wordmark colored" />
          <Techstack iconName="devicon-amazonwebservices-plain-wordmark colored" />
          <Techstack iconName="devicon-javascript-plain colored" />
          <Techstack iconName="devicon-nodejs-plain-wordmark colored" />
          <Techstack iconName="devicon-materialui-plain colored" />
          <Techstack iconName="devicon-react-original-wordmark colored" />
          <Techstack iconName="devicon-mongodb-plain-wordmark colored" />
          <Techstack iconName="devicon-git-plain-wordmark colored" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark colored" />
          <Techstack iconName="devicon-sass-original colored" />
        </Row>

        <h3>
          Tools and Softwares
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="devicon-confluence-original colored" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="devicon-wordpress-plain-wordmark" />
          <Techstack iconName="devicon-xd-line colored" />
          <Techstack iconName="devicon-photoshop-line colored" />
        </Row>
      </Container>
    </Container>
  );
}

export default About;
