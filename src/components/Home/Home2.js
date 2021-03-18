import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import homeBG from "../../Assets/poster.png";
import Particle from "../Particle";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col  className="home-about-description">
            <Image src={homeBG} fluid></Image>

          </Col>
 
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;